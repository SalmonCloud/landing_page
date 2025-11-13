import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { dropdownRegions } from '../../data/siteData';
import { useTheme } from '../../context/ThemeContext';

const Navigation = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <header className="nav-bar">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <img src="/Logos/SalmonCloud/salmoncloud_icon_175x175.png" alt="SalmonCloud logo" />
          <span>SalmonCloud</span>
        </Link>

        <nav className="nav-links" ref={navRef}>
          {dropdownRegions.map((menu) => {
            const isOpen = openMenu === menu.label;
            return (
              <div key={menu.label} className={`nav-dropdown ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="nav-pill"
                  onClick={(event) => {
                    event.stopPropagation();
                    setOpenMenu(isOpen ? null : menu.label);
                  }}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                >
                  {menu.label}
                  <span className={`dropdown-icon ${isOpen ? 'open' : ''}`} aria-hidden="true">
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="dropdown-panel"
                    onClick={(event) => event.stopPropagation()}
                    role="menu"
                    aria-hidden={!isOpen}
                  >
                    {menu.items.map((item) => (
                      <a
                        key={`${menu.label}-${item.label}`}
                        className="dropdown-link"
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setOpenMenu(null)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <button type="button" className="nav-pill">
            IP Leases
          </button>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="nav-pill theme-toggle"
            onClick={(event) => {
              event.stopPropagation();
              toggleTheme();
            }}
          >
            {theme === 'light' ? '☾ Dark Mode' : '☀ Light Mode'}
          </button>
          {location.pathname !== '/' && (
            <Link to="/" className="ghost-btn">
              Back to Site
            </Link>
          )}
          <a className="primary-btn" href="https://billing.salmoncloud.co.uk/" target="_blank" rel="noreferrer">
            Client Area
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
