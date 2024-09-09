import React,{useState,useEffect} from "react";
import { ConnectKitButton } from "connectkit";
import ContractAddress from "@/env";
import { contractAbi } from "@/abi/ContractABI";
import { useAccount, useReadContract } from "wagmi";


export default function Home() {

  const { isConnected, address } = useAccount();
  const [isRegisterd, navigate] = useState(false);

  const { data, isFetched } = useReadContract({
    abi: contractAbi,
    functionName: "getUser",
    address: ContractAddress,
    args: [address],
  });

  useEffect(() => {

    //@ts-ignore
    const username= (data ? data[1] : "");

    if (username == "" && data !== undefined) {
      console.log("Not Registered");
      //Navigate to Registration page
      navigate(true);
    }

    if (address && username) {
      console.log("Data from Registry ", data);
      //Navigate to Landing page
    }
  }, [data]);


  return <>
    <div>
      <div className="flex justify-between items-center px-8 py-4">
        <div className="flex gap-2 text-xl font-bold">
          <p>DrugEnsure</p>
        </div>
        <ConnectKitButton />
      </div>
    </div>
  </>
}
