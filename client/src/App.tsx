// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { WagmiProvider, createConfig } from "wagmi";
import { arbitrumSepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from './components/Home';
import UserRegister from "./components/Register";
import MarketPlace from './components/MarketPlace';
import Inventory from './components/Inventory';
import Sold from './components/Sold';
import AddProducts from './components/AddProducts';
import Transactions from './components/Transactions';
import Verify from './components/Verify';
import Layout from './components/Layout'; // Import Layout


const config = createConfig(
  getDefaultConfig({
    walletConnectProjectId: "",
    chains: [arbitrumSepolia],
    appName: "DrugEnsure",
  })
);
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ConnectKitProvider theme="minimal">
            <BrowserRouter>
              <Layout> {/* Layout wraps all routes */}
                <Routes>
                  <Route path="/home" element={<Home />} /> {/* Home component */}
                  <Route path="/register" element={<UserRegister />} />
                  <Route path="/marketplace" element={<MarketPlace />} />
                  <Route path="/inventory" element={<Inventory />} />
                  <Route path="/sold" element={<Sold />} />
                  <Route path="/add-products" element={<AddProducts />} />
                  <Route path="/transactions" element={<Transactions />} />
                  <Route path="/verify" element={<Verify />} />
                </Routes>
              </Layout> {/* End Layout */}
            </BrowserRouter>
          </ConnectKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}

export default App;
