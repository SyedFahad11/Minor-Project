import { Input } from "@/shad/input";
import { Button } from "@/shad/button";
import { Label } from "@/shad/label";
import Layout from "../Layout"; // Adjust the path if necessary

export default function AddProduct() {
  return (
    <Layout>
      <div className="flex flex-col items-center py-12 px-4 lg:px-20">
        <h1 className="text-3xl font-semibold text-center mb-3">Create New Product</h1>

        <form className="space-y-5 w-full max-w-lg">
          <div className="flex flex-col">
            <Label htmlFor="productName" className="text-base font-medium mb-1.5">
              Product Name
            </Label>
            <Input
              id="productName"
              placeholder="Enter product name"
              className="border border-gray-300 p-2.5 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="productSerial" className="text-base font-medium mb-1.5">
              Product Serial No.
            </Label>
            <Input
              id="productSerial"
              placeholder="Enter product serial no."
              className="border border-gray-300 p-2.5 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="productPrice" className="text-base font-medium mb-1.5">
              Product Price
            </Label>
            <Input
              id="productPrice"
              type="number"
              placeholder="0"
              className="border border-gray-300 p-2.5 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="taxRate" className="text-base font-medium mb-1.5">
              Tax Rate
            </Label>
            <Input
              id="taxRate"
              type="number"
              placeholder="0"
              className="border border-gray-300 p-2.5 rounded-md"
            />
          </div>

          <Button
            className="mt-6 w-full bg-black hover:bg-gray-800 text-white py-2.5 text-base rounded-md transition-all"
          >
            Create Product
          </Button>
        </form>
      </div>
    </Layout>
  );
}
