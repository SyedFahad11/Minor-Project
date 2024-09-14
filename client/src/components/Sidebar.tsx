import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar: React.FC = () => {
  return (
    <nav className="flex flex-col custom-space p-4 bg-gray-100 h-screen">
      <NavLink to="/home" className="btn">
        Home
      </NavLink>
      <NavLink to="/marketplace" className="btn">
        Market Place
      </NavLink>
      <NavLink to="/inventory" className="btn">
        Inventory
      </NavLink>
      <NavLink to="/sold" className="btn">
        Sold
      </NavLink>
      <NavLink to="/add-products" className="btn">
        Add Products
      </NavLink>
      <NavLink to="/transactions" className="btn">
        Transactions
      </NavLink>
      <NavLink to="/verify" className="btn">
        Verify
      </NavLink>
    </nav>
  );
};

export default Sidebar;
