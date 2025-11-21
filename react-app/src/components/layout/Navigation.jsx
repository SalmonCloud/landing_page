import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { dropdownRegions } from '../../data/siteData';
import { useTheme } from '../../context/ThemeContext';
import useScrollDirection from '../../hooks/useScrollDirection';

const Navigation = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const hideNav = useScrollDirection({ threshold: 12, enabled: isMobile });

  useEffect(() => {
    const media = window.matchMedia('(max-width: 900px)');
    const handleChange = () => setIsMobile(media.matches);
    handleChange();
    if (media.addEventListener) {
      media.addEventListener('change', handleChange);
      return () => media.removeEventListener('change', handleChange);
    }
    media.addListener(handleChange);
    return () => media.removeListener(handleChange);
  }, []);

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
    <header className={`nav-bar ${hideNav ? 'nav-bar--hidden' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <img src="/Logos/SalmonCloud/salmoncloud_icon_175x175.png" alt="SalmonCloud logo" />
          <span className="brand-text">
            <span className="salmon-color">Salmon</span>
            <span className="cloud-color">Cloud</span>
          </span>
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
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? '☾' : '☀'}
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
