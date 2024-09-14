// src/components/WalletStatus.tsx
import React from 'react';
import { useAccount } from 'wagmi';
import Layout from '../Layout';
import Home from '../Home';
import UserRegister from '../Register';
import MarketPlace from '../MarketPlace';
import Inventory from '../Inventory';
import Sold from '../Sold';
import AddProducts from '../Add Products'; 
import Transactions from '../Transactions';
import Verify from '../Verify';
import { Routes, Route } from 'react-router-dom';

const WalletStatus: React.FC = () => {
  const { isConnected } = useAccount();

  return isConnected ? (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/sold" element={<Sold />} />
        <Route path="/add-products" element={<AddProducts />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </Layout>
  ) : (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<UserRegister />} />
    </Routes>
  );
};

export default WalletStatus;
