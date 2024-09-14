import React, { useState, ChangeEvent, FormEvent ,useEffect} from "react";
import { Input} from '@/shad/input';
import { Label} from '@/shad/label';
import { Button} from '@/shad/button';
import { Card} from '@/shad/card';
import { useAccount, useWriteContract } from "wagmi";
import { contractAbi } from "@/abi/ContractABI";

interface FormData{
  type:string,
  username:string,
  regNo:string,
  companyName:string
}
const UserRegister: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    type:"Manufacturer",
    username: "",
    regNo:"",
    companyName:""

  });
  const { writeContract, isPending ,  isSuccess } = useWriteContract();

  const handleTypeChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    


    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const { isConnected, address } = useAccount();

  const handleSubmit= async ( event :FormEvent<HTMLButtonElement>) =>{
    event.preventDefault();
    console.log("Registering...");
    console.log("Form Data: ", formData);
      try { writeContract({
          abi: contractAbi,
          functionName: "setUser",
          address: "0xf6afce7d849f4C4006A5998B6Ba49f816edDC8D6",
          args: [
            formData.username,
            formData.companyName,
            formData.regNo,
            formData.type
          ]
        });
        console.log("Transaction sent:");
      } catch (err) {
        console.error("Error sending transaction:", err);
      }
  }

  return (
    <>
    {isConnected?
    (<div className="flex items-center justify-center h-screen">
      <Card className="max-w-lg w-full p-6 shadow-sm bg-white">
        <h1 className="text-center mb-4 text-dark text-3xl">Register Your Wallet</h1>
        <form>
          <div className="mb-4">
            <Label htmlFor="typeSelect">Type</Label>
            <select
              id="typeSelect"
              name="type"
              value={formData.type}
              onChange={handleTypeChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
              <option value="Manufacturer">Manufacturer</option>
              <option value="Supplier">Supplier</option>
              <option value="Consumer">Consumer</option>
            </select>
          </div>

          {formData.type === 'Manufacturer' && (
            <>
              <div className="mb-4">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" placeholder="Enter company name" name="companyName"  value={formData.companyName}
              onChange={handleTypeChange} />
              </div>

              <div className="mb-4">
                <Label htmlFor="userName">User Name</Label>
                <Input id="userName" placeholder="Enter user name" name="username"  value={formData.username}
              onChange={handleTypeChange} />
              </div>

              <div className="mb-4">
                <Label htmlFor="regNo">Registration No.</Label>
                <Input id="regNo" placeholder="Enter registration number" name="regNo"  value={formData.regNo}
              onChange={handleTypeChange} />
              </div>
            </>
          )}

          {formData.type === 'Supplier' && (
            <div className="mb-4">
              <Label htmlFor="userNameSupplier">User Name</Label>
              <Input id="userName" placeholder="Enter user name" name="username"  value={formData.username}
              onChange={handleTypeChange} />
            </div>
          )}

          {formData.type=== 'Consumer' && (
            <div className="mb-4">
              <Label htmlFor="userNameConsumer">User Name</Label>
              <Input id="userName" placeholder="Enter user name" name="username"  value={formData.username}
              onChange={handleTypeChange} />
            </div>
          )}

          <Button className="w-full py-2 mt-4 " type={"submit"} onClick={handleSubmit}>
            Register
          </Button>
        </form>
      </Card>
    </div>):
    (<div>
      ERROR
    </div>)

}
  </>
  );
};

export default UserRegister;
