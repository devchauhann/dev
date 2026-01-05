
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FolderOpen, Command, Briefcase, Menu, X } from 'lucide-react';
import { PROJECTS } from '../constants.tsx';

const Navigation: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={14} /> },
    { name: 'Projects', path: '/projects', icon: <FolderOpen size={14} /> },
    { name: 'Skills', path: '/skills', icon: <Command size={14} /> },
    { name: 'Experience', path: '/experience', icon: <Briefcase size={14} /> },
  ];

  const activeItem = navItems.find(item => item.path === path) || navItems[0];
  
  const isProjectDetail = path.startsWith('/projects/') && path !== '/projects';
  const projectSlug = isProjectDetail ? path.split('/').pop() : null;
  const currentProject = PROJECTS.find(p => p.id === projectSlug);

  return (
    <nav className="relative z-50 mb-12 md:mb-16">
      <div className="flex items-center justify-between">
        {/* Desktop Breadcrumb Navigation */}
        <div className="hidden md:flex items-center text-[13px] font-medium tracking-tight whitespace-nowrap">
          <Link to="/" className="text-gray-500 hover:text-white transition-colors duration-200">devchauhan</Link>
          
          <div className="flex items-center">
            {navItems.map((item) => {
              const isActive = path === item.path || (item.path === '/projects' && isProjectDetail);
              return (
                <React.Fragment key={item.path}>
                  <span className="mx-2 text-gray-800 select-none">/</span>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1.5 py-1 px-1 transition-all duration-200 ${
                      isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    <span className={isActive ? 'text-white' : 'text-gray-700'}>
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </React.Fragment>
              );
            })}

            {isProjectDetail && currentProject && (
              <>
                <span className="mx-2 text-gray-800 select-none">/</span>
                <span className="text-white font-bold py-1 px-1">{currentProject.title}</span>
              </>
            )}
          </div>
        </div>

        {/* Mobile Header Breadcrumb */}
        <div className="flex md:hidden items-center text-xs font-medium">
          <Link to="/" className="text-gray-600">devchauhan</Link>
          <span className="mx-2 text-gray-800">/</span>
          <div className="flex items-center space-x-1.5 text-white">
            <span className="text-gray-400">{activeItem.icon}</span>
            <span>{activeItem.name}</span>
          </div>
        </div>

        {/* Mobile Menu Toggle - Plain Icon */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-10 left-0 right-0 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
          <div className="bg-[#191919] border border-gray-800 rounded-xl p-1.5 shadow-2xl">
            <div className="space-y-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all ${
                    path === item.path || (item.path === '/projects' && isProjectDetail)
                      ? 'bg-[#222] text-white' 
                      : 'text-gray-400 hover:bg-[#1e1e1e] hover:text-white'
                  }`}
                >
                  <span className="text-gray-500">{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
