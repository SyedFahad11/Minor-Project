
import React from 'react';
import Sidebar from './Common/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-[10%]">
        <Sidebar />
      </div>

      <div className="w-[85%] p-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;
