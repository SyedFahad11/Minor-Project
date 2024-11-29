import { useState } from "react";
import { Input } from "@/shad/input";
import { Button } from "@/shad/button";
import { Label } from "@/shad/label";
import Layout from "../Layout";
import { PlusCircle } from "lucide-react";
import {url} from "@/env";
import axios from 'axios';
import {Composition,Transaction} from'@/lib/types';

import { v4 as uuidv4 } from 'uuid';


import { useAccount} from "wagmi";



export default function SellDrug() {
  const [drugName, setDrugName] = useState<string>("");
  const [compositions, setCompositions] = useState<Composition[]>([{ name: "", dosage: "" }]);
  const [units, setUnits] = useState<number>(0);
  const [totalDosage, setTotalDosage] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [expiryDate, setExpiryDate] = useState<string>("");

  const { isConnected, address } = useAccount();

  const handleAddComposition = () => {
    setCompositions([...compositions, { name: "", dosage: "" }]);
  };

  const handleCompositionChange = (index: number, field: keyof Composition, value: string) => {
    const newCompositions = [...compositions];
    newCompositions[index][field] = value;
    setCompositions(newCompositions);
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    // const newProduct: Product = {
    //   drugName,
    //   compositions,
    //   units,
    //   totalDosage,
    //   price,
    //   expiryDate,
    //   vendorWalletAddress:address
    // };


    const uniqueId = uuidv4();
    
    const newProduct: Transaction = {
      _id:uniqueId,
      drug:{drugName,compositions,units,totalDosage,price,expiryDate},
      attestationId:"",
      owner:address,
      timestamp:new Date()
    };


    console.log(address);

    //const response= await axios.post(url+'/create/addItem', newProduct);
    const response= await axios.post(url+'/create/transaction', newProduct);

      if (response.status === 201) {

        console.log('Product created successfully!');

      } else {

        console.error('Failed to create product:', response.statusText);
      }


  };

  return (
    <Layout>
      <div className="flex flex-col items-center py-12 px-4 lg:px-20">
        <h1 className="text-3xl font-semibold text-center mb-3">Sell New Drug</h1>


        <form className="space-y-5 w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <Label htmlFor="drugName" className="text-base font-medium mb-1.5">
              Drug Name
            </Label>
            <Input
              id="drugName"
              value={drugName}
              onChange={(e) => setDrugName(e.target.value)}
              placeholder="Enter drug name"
              className="border border-gray-300 p-2.5 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <Label className="text-base font-medium mb-1.5">Composition</Label>
            {compositions.map((comp, index) => (
              <div key={index} className="flex space-x-4 mb-2">
                <Input
                  value={comp.name}
                  onChange={(e) => handleCompositionChange(index, "name", e.target.value)}
                  placeholder={`Composition ${index + 1}`}
                  className="border border-gray-300 p-2.5 rounded-md w-full"
                  required
                />
                <div className="flex items-center w-1/2">
                  <Input
                    value={comp.dosage}
                    onChange={(e) => handleCompositionChange(index, "dosage", e.target.value)}
                    placeholder="0"
                    type="number"
                    className="border border-gray-300 p-2.5 rounded-md w-full"
                    required
                  />
                  <span className="ml-2 text-gray-500">mg</span>
                </div>
              </div>
            ))}

            <Button
              type="button"
              onClick={handleAddComposition}
              className="flex items-center space-x-2 bg-transparent text-gray-600 hover:text-gray-800 mt-2"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Add more</span>
            </Button>
          </div>

          <div className="flex flex-col">
            <Label htmlFor="totalDosage" className="text-base font-medium mb-1.5">
              Total Dosage (Overall)
            </Label>
            <div className="flex items-center">
              <Input
                id="totalDosage"
                type="number"
                onChange={(e) => {setTotalDosage(Number(e.target.value));console.log(totalDosage)}}
                //value={totalDosage}
                placeholder="0"
                className="border border-gray-300 p-2.5 rounded-md w-full"
                required
              />
              <span className="ml-2 text-gray-500">mg</span>
            </div>
          </div>

          <div className="flex flex-col">
            <Label htmlFor="units" className="text-base font-medium mb-1.5">
              Units
            </Label>
            <Input
              id="units"
              type="number"
              //value={units}
              onChange={(e) => setUnits(Number(e.target.value))}
              placeholder="0"
              className="border border-gray-300 p-2.5 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="price" className="text-base font-medium mb-1.5">
              Price
            </Label>
            <Input
              id="price"
              type="number"
              //value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder="0"
              className="border border-gray-300 p-2.5 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="expiryDate" className="text-base font-medium mb-1.5">
              Expiry Date
            </Label>
            <Input
              id="expiryDate"
              type="date"
              //value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="border border-gray-300 p-2.5 rounded-md"
              required
            />
          </div>

          <Button
            type="submit"
            className="mt-6 w-full bg-black hover:bg-gray-800 text-white py-2.5 text-base rounded-md transition-all"
          >
            Sell
          </Button>
        </form>
      </div>
    </Layout>
  );
}
