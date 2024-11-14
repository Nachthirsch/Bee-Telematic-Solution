import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import navIcon from '../assets/nav-icon.png';

// Navigation items configuration
const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about_us" },
  {
    label: "Portofolio",
    path: "/portofolio",
    dropdownItems: [
      { label: "Services", path: "/services" },
      { label: "Projects", path: "/portofolio" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

// Reusable components
const Logo = () => (
  <div className="relative group">
    {/* Outer glow effect */}
    <div className="absolute inset-0 bg-yellow-500/50 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 
                    group-hover:blur-2xl transition-all duration-300"></div>
    
    {/* Main container */}
    <img 
      src={navIcon} 
      alt="Navigation Icon" 
      className="w-20 h-20 object-contain transform group-hover:scale-110 
                 group-hover:rotate-3 transition-all duration-300"
    />
  </div>
);

const NavLink = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`relative text-white hover:text-yellow-500 transition-colors duration-300 
                py-2 px-1 font-medium tracking-wide group`}
  >
    {children}
    <span
      className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 
                     transition-transform duration-300 origin-left group-hover:scale-x-100"
    ></span>
    {isActive && (
      <span
        className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 
                       bg-yellow-500 rounded-full md:hidden"
      ></span>
    )}
  </Link>
);

const DropdownMenu = ({ items }) => (
  <div
    className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 
                  top-full left-0 pt-4 transition-all duration-300 ease-out transform 
                  -translate-y-2 group-hover:translate-y-0"
  >
    <div
      className="bg-gray-800 rounded-xl shadow-xl p-4 min-w-[160px]
                    border border-gray-700/50 backdrop-blur-sm"
    >
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="block py-2 px-4 text-gray-300 hover:text-yellow-500 
                     hover:bg-gray-700/50 rounded-lg transition-colors duration-200"
        >
          {item.label}
        </Link>
      ))}
    </div>
  </div>
);

const MobileMenuButton = ({ isOpen, onClick }) => (
  <button 
    onClick={onClick} 
    className="md:hidden relative w-10 h-10 text-white group flex items-center justify-center"
    aria-label="Toggle mobile menu"
  >
    <div className="relative transition-all duration-300 text-2xl">
      {isOpen ? (
        <IoCloseOutline className="w-7 h-7 transform transition-all duration-300 hover:text-yellow-500 hover:scale-110" />
      ) : (
        <HiMenuAlt3 className="w-7 h-7 transform transition-all duration-300 hover:text-yellow-500 hover:scale-110" />
      )}
      
      {/* Efek glow */}
      <div className="absolute inset-0 rounded-lg transition-opacity duration-300
        bg-gradient-to-r from-yellow-500/0 via-yellow-500/20 to-yellow-500/0
        opacity-0 group-hover:opacity-100 -z-10 blur-md">
      </div>
    </div>
  </button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (label) => {
    setDropdownStates((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleItemClick = (label) => {
    setActiveItem(label);
    setIsOpen(false);
    setDropdownStates({});
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 hover:bg-gray-900
                     ${scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdownItems ? (
                  <div className="relative">
                    <NavLink to={item.path} isActive={activeItem === item.label}>
                      {item.label}
                    </NavLink>
                    <DropdownMenu items={item.dropdownItems} />
                  </div>
                ) : (
                  <NavLink to={item.path} isActive={activeItem === item.label}>
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-20 bg-gray-900/95 backdrop-blur-md
                      transition-all duration-300 ease-in-out border-t border-gray-800
                      ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="p-4 space-y-2">
              {NAV_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-300 
                             ${isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}
                             ${index > 0 ? `delay-[${index * 100}ms]` : ""}`}
                >
                  {item.dropdownItems ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`w-full p-4 flex items-center justify-between rounded-xl 
                                  transition-all duration-300 ${activeItem === item.label ? "bg-yellow-500/20 text-yellow-500" : "text-white hover:bg-gray-800"}`}
                      >
                        <span className="relative font-medium">{item.label}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className={`w-4 h-4 transition-transform duration-300 
                                   ${dropdownStates[item.label] ? "rotate-180" : ""}`}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out
                                     ${dropdownStates[item.label] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <div className="pl-4 pr-2 py-2">
                          {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              to={dropdownItem.path}
                              onClick={() => handleItemClick(dropdownItem.label)}
                              className="block p-4 rounded-xl text-gray-300 hover:text-yellow-500 
                                       hover:bg-gray-800 transition-all duration-200
                                       border border-gray-800/50 hover:border-yellow-500/20"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium">{dropdownItem.label}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 opacity-50">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => handleItemClick(item.label)}
                      className={`block p-4 rounded-xl transition-all duration-300
                                ${activeItem === item.label ? "bg-yellow-500/20 text-yellow-500" : "text-white hover:bg-gray-800"}`}
                    >
                      <span className="relative font-medium">{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
