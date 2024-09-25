import { useState } from "react";
import { Input } from "@/shad/input";
import { Button } from "@/shad/button";
import { Label } from "@/shad/label";
import Layout from "../Layout";
import { PlusCircle, Trash2 } from "lucide-react";

interface Composition {
  name: string;
  dosage: string;
  unit: string;
}

interface Drug {
  drugName: string;
  compositions: Composition[];
  units: number;
  price: number;
  expiryDate: string;
}

const unitOptions = ["mg", "ml", "g", "kg"];

export default function SellDrug() {
  const [drugName, setDrugName] = useState<string>("");
  const [compositions, setCompositions] = useState<Composition[]>([{ name: "", dosage: "", unit: "mg" }]);
  const [units, setUnits] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [expiryDate, setExpiryDate] = useState<string>("");

  const handleAddComposition = () => {
    setCompositions([...compositions, { name: "", dosage: "", unit: "mg" }]);
  };

  const handleRemoveComposition = (index: number) => {
    if (compositions.length > 1) {
      setCompositions(compositions.filter((_, i) => i !== index));
    }
  };

  const handleCompositionChange = (index: number, field: keyof Composition, value: string) => {
    const newCompositions = [...compositions];
    newCompositions[index][field] = value;
    setCompositions(newCompositions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newDrug: Drug = {
      drugName,
      compositions,
      units,
      price,
      expiryDate, 
    };

    console.log(newDrug);
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
                <div className="flex items-center w-1/3">
                  <Input
                    value={comp.dosage}
                    onChange={(e) => handleCompositionChange(index, "dosage", e.target.value)}
                    placeholder="0"
                    type="number"
                    className="border border-gray-300 p-2.5 rounded-md w-full"
                    required
                  />
                </div>
                <select
                  value={comp.unit}
                  onChange={(e) => handleCompositionChange(index, "unit", e.target.value)}
                  className="border border-gray-300 p-2.5 rounded-md"
                >
                  {unitOptions.map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                  ))}
                </select>
                <Button
                  type="button"
                  onClick={() => handleRemoveComposition(index)}
                  className={`flex items-center ${compositions.length > 1 ? 'text-red-500 hover:text-red-700' : 'text-gray-400 cursor-not-allowed'} ml-2`}
                  disabled={compositions.length === 1}
                >
                  <Trash2 className="w-5 h-5" />
                </Button>
              </div>
            ))}

            <Button
              type="button"
              onClick={handleAddComposition}
              className="flex items-center space-x-2 bg-black text-white hover:bg-gray-800 mt-2 py-2.5 px-4 rounded-md transition-all"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Add more</span>
            </Button>
          </div>

          <div className="flex flex-col">
            <Label htmlFor="units" className="text-base font-medium mb-1.5">
              Units
            </Label>
            <Input
              id="units"
              type="number"
              value={units}
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
              value={price}
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
              value={expiryDate}
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
