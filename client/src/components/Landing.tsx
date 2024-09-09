import React from "react";
import { ConnectKitButton } from "connectkit";

function LandingPage() {
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
export default LandingPage;