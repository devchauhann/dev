
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith('/projects/') && location.pathname !== '/projects';

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 pt-8 md:pt-16 pb-20 min-h-screen">
      {!isProjectDetail && <Navigation />}
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
