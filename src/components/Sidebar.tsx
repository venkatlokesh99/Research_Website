import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const navItems = [
  { label: 'Home', path: '/', widthClass: 'w-shortest' },
  { label: 'About', path: '/about', widthClass: 'w-short' },
  { label: 'Our Research', path: '/research', widthClass: 'w-long' },
  { label: 'Our Tools', path: '/tools', widthClass: 'w-medium' },
  { label: 'Our Events', path: '/events', widthClass: 'w-long' },
  { label: 'The BS Library', path: '/library', widthClass: 'w-longest' },
  { label: 'Our Team', path: '/team', widthClass: 'w-short' },
];

const isItemActive = (itemPath: string, currentPath: string) => {
  return currentPath === itemPath;
};

export default function Sidebar() {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isHome = location.pathname === '/';

  // Filter out Home if we are on the Home page for desktop sidebar
  const displayItems = isHome 
    ? navItems.filter(item => item.label !== 'Home')
    : navItems;

  // Auto-close overlay menu when location changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <button 
        className={`mobile-menu-btn nav-font ${isMobileOpen ? 'open' : ''}`}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileOpen ? 'CLOSE' : 'MENU'}
      </button>

      {isMobileOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-list">
            {navItems.map((item) => {
              const active = isItemActive(item.path, location.pathname);
              return (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`mobile-menu-link nav-font ${item.widthClass} ${active ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <nav className={`sidebar ${isHome ? 'home-layout' : 'inner-layout'}`}>
        <div className="sidebar-list">
          {displayItems.map((item) => {
            const active = isItemActive(item.path, location.pathname);
            return (
              <Link 
                key={item.path}
                to={item.path} 
                className={`sidebar-link nav-font ${item.widthClass} ${active ? 'active-stub' : ''}`}
              >
                {active ? '' : item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
