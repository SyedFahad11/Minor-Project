// src/components/Layout.tsx
import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar with 15% width */}
      <div className="w-[10%]">
        <Sidebar />
      </div>
      
      {/* Main content with 85% width */}
      <div className="w-[85%] p-6">
        {children} {/* This will render the content of the page */}
      </div>
    </div>
  );
};

export default Layout;
