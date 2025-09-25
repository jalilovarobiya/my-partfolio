import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavbar } from '../contexts/NavbarContext';

const CLIP_PATH =
  'polygon(0 0, 100% 0, 100% 80%, 68% 80%, 64% 100%, 36% 100%, 32% 80%, 0 80%)';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isNavbarVisible } = useNavbar();

  const BASE_COLOR = "#FF85A2"; // galatro pushti
  const SCROLLED_COLOR = "rgba(255, 200, 220, 0.5)"; // scroll effekti

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children }) => (
    <li>
      <a
        href={href}
        className="relative block text-white font-[Rubik] font-bold text-base tracking-wider py-2 transition-transform duration-300 hover:scale-110 group"
      >
        {children}
        <span className="absolute bottom-1 left-0 block h-[2px] w-0 bg-[#FFFFFF] transition-all duration-500 group-hover:w-full"></span>
      </a>
    </li>
  );

  return (
    <>
      <AnimatePresence>
        {isNavbarVisible && (
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 pointer-events-none"
          >
            <header
              className="pt-3 pb-3 relative z-20 pointer-events-auto transition-all duration-500 ease-out"
              style={{
                WebkitClipPath: CLIP_PATH,
                clipPath: CLIP_PATH,
                backgroundColor: isScrolled ? SCROLLED_COLOR : BASE_COLOR,
                backdropFilter: isScrolled ? "blur(7px) saturate(180%)" : "none",
                WebkitBackdropFilter: isScrolled ? "blur(7px) saturate(180%)" : "none",
                border: isScrolled ? "1px solid rgba(255, 200, 220, 0.3)" : "none",
              }}
            >
              <nav className="container mx-auto flex items-center justify-between flex-wrap pb-4 px-4">
                <div className="w-full flex items-center justify-between md:hidden">
                  <a href="#home" className="flex items-center gap-3">
                    <div>
                      <h1 className="font-moderniz text-sm text-white whitespace-nowrap">Robiya Jalilova</h1>
                      <p
                        className="font-moderniz text-[9px] text-[#000754]"
                        style={{
                          textShadow:
                            '0.5px 0.5px 0 #FFFFFF, -0.5px -0.5px 0 #FFFFFF, 0.5px -0.5px 0 #FFFFFF, -0.5px 0.5px 0 #FFFFFF',
                        }}
                      >
                        Let's see the awesome Experience
                      </p>
                    </div>
                  </a>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white text-3xl pointer-events-auto"
                  >
                    &#9776;
                  </button>
                </div>

                <div className="hidden w-full md:flex items-center justify-around">
                  <ul className="flex items-center list-none gap-x-20">
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#about">About</NavLink>
                  </ul>

                  <a href="#home" className="flex items-center gap-3">
                    <div className="block">
                      <h1 className="font-moderniz text-base text-white">Robiya Jalilova</h1>
                      <p
                        className="font-moderniz text-[10px] text-[#000754]"
                        style={{
                          textShadow:
                            '0.5px 0.5px 0 #FFFFFF, -0.5px -0.5px 0 #FFFFFF, 0.5px -0.5px 0 #FFFFFF, -0.5px 0.5px 0 #FFFFFF',
                        }}
                      >
                        Let's see the awesome Experience
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <ul className="flex items-center list-none gap-16">
                      <NavLink href="#projects">Project</NavLink>
                      <NavLink href="#contact">Contact</NavLink>
                    </ul>
                  </div>
                </div>

                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="w-full basis-full md:hidden"
                    >
                      <ul className="flex flex-row flex-wrap justify-center items-center gap-x-8 gap-y-3 mt-4 list-none">
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#projects">Project</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </nav>
            </header>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
