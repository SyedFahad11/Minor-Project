import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/shad/card";
import { Separator } from "@/shad/separator";

interface Drug {
  drugName: string;
  compositions: Composition[];
  units: number;
  totalDosage: number;
  price: number;
  expiryDate: string;
}
interface Composition {
  name: string;
  dosage: string;
}

interface Product extends Drug {
  vendorWalletAddress: string;
}


export const Component = (props: {data: Product }) => {
  const { drugName, compositions, units, totalDosage, price, expiryDate } = props.data;

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
                <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700">
                  Transaction History
                </button>
                <button className="bg-green-400 text-white font-bold py-2 px-4 rounded-full hover:bg-green-500">
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
