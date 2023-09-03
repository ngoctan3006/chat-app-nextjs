import React from 'react';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = async ({ children }: SidebarProps) => {
  return <main className="lg:pl-20 h-full">{children}</main>;
};

export default Sidebar;
