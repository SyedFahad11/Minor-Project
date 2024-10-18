import React from 'react';
import Layout from '../Layout';

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

const Component = (props: {data: Product}) => {
  const {drugName,compositions,units,totalDosage,price,expiryDate}=props.data;

  return (
    <div className="w-full max-w-lg mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="text-xl font-medium">Drug Details</div>
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <div className="text-base mb-2">Drug Name: {drugName}</div>
          <div className="text-base mb-2">
            Compositions:
            <ul className="ml-4 list-disc">
              {compositions.map((comp, index) => (
                <li key={index} className="text-base">
                  {comp.name} - {comp.dosage}mg
                </li>
              ))}
            </ul>
          </div>
          <div className="text-base mb-2">Units: {units}</div>
          <div className="text-base mb-2">Total Dosage: {totalDosage}mg</div>
          <div className="text-base mb-2">Price: ${price}</div>
          <div className="text-base mb-2">Expiry Date: {expiryDate}</div>
        </CardContent>
      </Card>
    </div>
  );
};

const MarketPlace: React.FC = () => {
  const p: Product={
    drugName:"Pain Relief",
    compositions:[{ name: "Acetaminophen", dosage: "500" },
            { name: "Caffeine", dosage: "65" }
          ],
    units:100,
    totalDosage:56500,
    price:29.99,
    expiryDate:"2025-12-31",
    vendorWalletAddress:"0x123abc456def"
  }

  return (
    <Layout>
      <div className="flex flex-col items-center py-12 px-4 lg:px-20">
        <h1 className="text-3xl font-semibold text-center mb-3">Drug Information</h1>
        <Component data={p} />
      </div>
    </Layout>
  );
};

export default MarketPlace;
