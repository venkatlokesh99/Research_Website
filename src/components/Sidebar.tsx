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
  const isHome = location.pathname === '/';

  // Filter out Home if we are on the Home page
  const displayItems = isHome 
    ? navItems.filter(item => item.label !== 'Home')
    : navItems;

  return (
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
  );
}
