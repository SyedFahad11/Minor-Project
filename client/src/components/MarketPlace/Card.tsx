import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/shad/card";
import { Dialog, DialogContent, DialogTrigger } from "@/shad/dialog";
import { Separator } from "@/shad/separator";
import { useAccount } from "wagmi";
import axios from 'axios';
import { url } from "@/env";

import {
  SignProtocolClient,
  EvmChains,
  SpMode,
  OnChainClientOptions,
  AttestationResult
} from "@ethsign/sp-sdk";
import { ProductAttestationSchema, Transaction } from '@/lib/types';

import ViewHistory from './history';


export const Component = (props: { data: Transaction }) => {
  let { _id, drug, attestationId, owner, timestamp } = props.data;
  attestationId=(attestationId===undefined?'':attestationId);

  const { drugName, compositions, units, totalDosage, price, expiryDate } = drug;

  const { isConnected, address } = useAccount();

  async function createSell() {
    const sno = "1";
    const taxRate = 0;
    if (attestationId === undefined)
      attestationId = "";
    try {
      const _attestation: ProductAttestationSchema = {
        previousAttestationId: attestationId,
        productSerialNo: sno,
        productName: drugName,
        soldBy: owner as string,
        boughtBy: address as string,
        grandTotal: Number(price),
        taxRate: taxRate
      }

      // create attestaion and sell transaction here
      console.log("Creating attestation :", _attestation);

      const attestation: AttestationResult = await createAttestation(
        _attestation,
        owner as string,
        attestationId as string
      );

      console.log(attestation.attestationId);

      // save transaction obj to db

      const newTransaction: Transaction = {
        ...props.data,
        attestationId: attestation.attestationId,
        owner: address,
        timestamp: new Date()
      };


      //const response= await axios.post(url+'/create/addItem', newProduct);
      const response = await axios.post(url + '/create/transaction', newTransaction);

      if (response.status === 201) {

        console.log("saved transaction to database : ", response);

      } else {

        console.error('Failed to create product:', response.statusText);
      }



    } catch (error) {
      console.error("Error submitting record:", error);

    }
  }


  const handleBuy = async () => {
    console.log(address);
    console.log(owner);

    try {
      await createSell();
    }
    catch (error) {
      console.log("Error in Attestation ", error);
    }
  }

  // const handleHistory = () => {
  //   console.log("Hit History");
  //   ViewHistory();
  // }


  return (
    <div className="w-full max-w-lg mx-auto p-6">
      <Card className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <CardHeader className="bg-gray-500 p-4">
          <CardTitle>
            <div className="text-2xl font-semibold text-gray-900">{drugName}</div>
          </CardTitle>
        </CardHeader>
        <Separator className="my-2" />
        <CardContent className="p-4">
          <div className='flex flex-row relative'>
            <div>
              <div className="text-base mb-4">
                <span className="font-medium text-gray-700">Compositions:</span>
                <ul className="ml-4 list-disc text-gray-600 mt-2">
                  {compositions.map((comp, index) => (
                    <li key={index} className="text-base">
                      <span className="font-medium">{comp.name}</span> - {comp.dosage}mg
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-base mb-4">
                <span className="font-medium text-gray-700">Units:</span> {units}
              </div>
              <div className="text-base mb-4">
                <span className="font-medium text-gray-700">Total Dosage:</span> {totalDosage}mg
              </div>
              <div className="text-base mb-4">
                <span className="font-medium text-gray-700">Price:</span> ${price}
              </div>
              <div className="text-base">
                <span className="font-medium text-gray-700">Expiry Date:</span> {expiryDate}
              </div>

            </div>


            <div className="absolute bottom-0 right-0 flex items-end justify-end">
              <div className="flex flex-col space-y-2">

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700" >
                      Transaction History
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-white max-w-[60%] h-[90%] overflow-y-auto">
                    <ViewHistory attestationId={attestationId} />
                  </DialogContent>
                </Dialog>

                <button className="bg-green-400 text-white font-bold py-2 px-4 rounded-full hover:bg-green-500" onClick={handleBuy}>
                  Buy
                </button>
              </div>
            </div>

          </div>

        </CardContent>
      </Card>
    </div>

  );
};

async function createAttestation(
  product: ProductAttestationSchema,
  wallet: string,
  previousAttestationId?: string
): Promise<AttestationResult> {
  // Get attestation using SignProtocolClient
  try {
    const spMode = SpMode.OnChain;

    const options: OnChainClientOptions = {
      //@ts-ignore
      chain: EvmChains.arbitrumSepolia,
      // rpcUrl: arbitrumSepolia.rpcUrls.default.http[0],
    };

    const signProtocolClient = new SignProtocolClient(spMode, options);
    const res: AttestationResult = await signProtocolClient.createAttestation({
      data: product,
      schemaId: "0x19",
      indexingValue: wallet,
      // linkedAttestationId: previousAttestationId,
    });
    console.log(res);
    return res;
  } catch (error) {
    console.error("We are here", error);
    throw new Error("An unexpected error occurred");
  }
}