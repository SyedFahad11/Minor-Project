import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/shad/card";
import { Dialog, DialogContent, DialogTrigger } from "@/shad/dialog";
import { Separator } from "@/shad/separator";
import { useAccount } from "wagmi";
import axios from 'axios';
import { url } from "@/env";
import ViewHistory from './history';

import {
  SignProtocolClient,
  EvmChains,
  SpMode,
  OnChainClientOptions,
  AttestationResult
} from "@ethsign/sp-sdk";
import { ProductAttestationSchema, Transaction } from '@/lib/types';




export const Component = (props: { data: Transaction }) => {
  let { _id, drug, attestationId, owner, archive, timestamp } = props.data;
  attestationId=(attestationId===undefined?'':attestationId);

  const { drugName, compositions, units, totalDosage, price, expiryDate } = drug;

  const { isConnected, address } = useAccount();



  const handleArchive = async () => {
    console.log(address);

    try {
      const body = {
        _id: _id,
        archive: !archive
      }
      const response = await axios.post(url + '/update/archiveStatus', body);

      if (response.status === 201) {

        console.log('Archive Status updated!');

      } else {

        console.error('Failed to update statis:', response.statusText);
      }
    }
    catch (error) {
      console.log("Error in Attestation ", error);
    }
  }

  const handleHistory = () => {
    console.log("Hit History");
  }


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

                {archive === true ? (
                  <button className="bg-green-400 text-white font-bold py-2 px-4 rounded-full hover:bg-green-500" onClick={handleArchive}>
                    Sell
                  </button>) : (
                  <button className="bg-yellow-400 text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-500" onClick={handleArchive}>
                    Archive
                  </button>)}

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