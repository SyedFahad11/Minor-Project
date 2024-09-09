import React, { useState, useEffect } from "react";
import { Button } from "@/shad/button";
import { ConnectKitButton } from "connectkit";
import ContractAddress from "@/env";
import { contractAbi } from "@/abi/ContractABI";
import { useAccount, useReadContract } from "wagmi";
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const { isConnected, address } = useAccount();
  const [isRegisterd, registered] = useState(false);

  const navigate = useNavigate();

  const { data, isFetched } = useReadContract({
    abi: contractAbi,
    functionName: "getUser",
    address: ContractAddress,
    args: [address],
  });

  useEffect(() => {

    //@ts-ignore
    const username = (data ? data[1] : "");

    if (address && username) {
      console.log("Data from Registry ", data);
      registered(true);
      //Navigate to Landing page
    }
  }, [data,isConnected]);

  const handleClick=()=>{
    navigate('/register');
  }


  return <>
    <div>
      <div className="flex justify-between items-center px-8 py-4">
        <div className="flex gap-2 text-xl font-bold">
          <p>DrugEnsure</p>
        </div>
        <ConnectKitButton />
      </div>
      <div className="flex flex-col items-center gap-4 mt-28">

        {(isRegisterd===true || isConnected==false) ?
          (<div>
            <div className="text-xl font-semibold">

            Please connect your wallet  😊
          </div> </div>)
          :
          (
            <div className="flex flex-col">
              <div className="text-xl font-semibold ">

                This wallet is not yet registered. Click Register
                below to continue
              </div>
              <div className="mx-auto mt-4">
                <Button variant="outline" className="h-15 w-30 rounded-none text-lg font-normal" onClick={handleClick}>Register</Button>
              </div>

            </div>)
        }
      </div>


    </div>
  </>
}
