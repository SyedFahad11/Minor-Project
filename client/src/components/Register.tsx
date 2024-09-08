import React, { useState } from 'react';
import { Input} from '@/shad/input';
import { Label} from '@/shad/label';
import { Button} from '@/shad/button';
import { Card} from '@/shad/card';


const UserRegister: React.FC = () => {
  const [type, setType] = useState('Manufacturer');

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="max-w-lg w-full p-6 shadow-sm bg-white">
        <h1 className="text-center mb-4 text-dark text-3xl">Register Your Wallet</h1>
        <form>
          <div className="mb-4">
            <Label htmlFor="typeSelect">Type</Label>
            <select
              id="typeSelect"
              value={type}
              onChange={handleTypeChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="Manufacturer">Manufacturer</option>
              <option value="Supplier">Supplier</option>
              <option value="Consumer">Consumer</option>
            </select>
          </div>

          {type === 'Manufacturer' && (
            <>
              <div className="mb-4">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" placeholder="Enter company name" />
              </div>

              <div className="mb-4">
                <Label htmlFor="userName">User Name</Label>
                <Input id="userName" placeholder="Enter user name" />
              </div>

              <div className="mb-4">
                <Label htmlFor="regNo">Registration No.</Label>
                <Input id="regNo" placeholder="Enter registration number" />
              </div>
            </>
          )}

          {type === 'Supplier' && (
            <div className="mb-4">
              <Label htmlFor="userNameSupplier">User Name</Label>
              <Input id="userNameSupplier" placeholder="Enter user name" />
            </div>
          )}

          {type === 'Consumer' && (
            <div className="mb-4">
              <Label htmlFor="userNameConsumer">User Name</Label>
              <Input id="userNameConsumer" placeholder="Enter user name" />
            </div>
          )}

          <Button className="w-full py-2 mt-4 bg-dark text-white" type="submit">
            Register
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default UserRegister;
