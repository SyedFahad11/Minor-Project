import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConnectKitProvider, getDefaultConfig } from "connectkit"
import { WagmiProvider, createConfig } from "wagmi"
import { arbitrumSepolia } from "wagmi/chains"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import UserRegister from "./components/Register";
import LandingPage from "./components/Landing";

const config = createConfig(
  getDefaultConfig({
    walletConnectProjectId:"",
    chains: [arbitrumSepolia],
    appName: "Supply_Trace",
  })
)
const queryClient = new QueryClient()
function App() {

  return (
    <>
      <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider theme="rounded">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/register" element={<UserRegister />} />
            </Routes>
          </BrowserRouter>
        </ConnectKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}

export default App
