import React from 'react';
import { Sidebar } from '../components/sidebar';

interface UsersLayoutProps {
  children: React.ReactNode;
}

const UsersLayout = async ({ children }: UsersLayoutProps) => {
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
};

export default UsersLayout;
