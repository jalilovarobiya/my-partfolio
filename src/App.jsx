import React, { useState } from 'react';
import Header from './components/Header';
import Squares from './components/Squares';
import TextGenerateEffect from "./components/text-generate-effect";
import GradientText from './components/GradientText';
// import { AnimatedGradientTextDemo } from './components/AnimatedGradientTextDemo';
import Skills from './components/Skills';
import { ButtonMovingBorder } from './components/MovingBorderButton';
import { motion } from "framer-motion";
import { FaGithub, FaTelegram, FaLinkedin, FaDownload, FaBriefcase, FaCode, FaCertificate, FaGlobe, FaArrowRight, FaCube } from 'react-icons/fa';
import ProfileCard from './components/ProfileCard/ProfileCard';
import { IconCloud } from './components/IconCloud';
import Spline from '@splinetool/react-spline';
import { VelocityScroll } from './components/VelocityScroll';
import ProjectSection from './components/ProjectSection';
import Contact from './components/Contact';
import { NavbarProvider } from './contexts/NavbarContext';
import { AdminProvider } from './contexts/AdminContext';

function App() {
  const [is3dEnabled, setIs3dEnabled] = useState(true);

  const toggle3dAssets = () => {
    setIs3dEnabled(prev => !prev);
  };

  const stats = [
    { icon: <FaCode />, value: "2", title: "TOTAL PROJECTS", description: "Innovative web solutions crafted" },
    { icon: <FaCertificate />, value: "3", title: "CERTIFICATES", description: "Professional skills validated" },
    { icon: <FaGlobe />, value: "6", title: "MONTHS OF EXPERIENCE", description: "Continuous learning journey" },
  ];

  return (
    <AdminProvider>
      <NavbarProvider>
        <div className="relative min-h-screen bg-[hsl(350,100%,88%)] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Squares speed={0.3} squareSize={35} direction="diagonal" borderColor="rgba(255, 255, 255, 0.03)" hoverFillColor="rgba(255, 193, 204, 0.53)" />
          </div>

          <button
            onClick={toggle3dAssets}
            title={`Toggle 3D Assets (${is3dEnabled ? 'On' : 'Off'})`}
            className={`fixed top-24 right-4 z-50 p-3 rounded-full border backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-110
              ${is3dEnabled
                ? 'bg-[hsl(350,100%,88%,0.2)] border-[hsl(350,100%,88%)] text-[hsl(350,100%,88%)] shadow-[0_0_12px_2px_hsl(350,100%,88%,0.5)]'
                : 'bg-slate-800/50 border-slate-700 text-slate-400'
              }`}
          >
            <FaCube className="h-5 w-5" />
          </button>

          <Header />

          <main className="relative z-10 px-8 max-w-7xl mx-auto">
            <section id="home" className="flex flex-col md:flex-row items-center gap-10 pt-20 pb-16 lg:pt-0 lg:pb-20">
              <div className="flex-1 text-white space-y-6 pt-16 md:pt-40 order-last md:order-none">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}>
                  {/* <AnimatedGradientTextDemo /> */}
                </motion.div>
                <motion.h1 initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }} className="text-4xl md:text-4xl font-moderniz font-bold leading-tight select-none" style={{ color: "#FFFFFF", textShadow: `2px 2px 0 #FFFFFF, 4px 4px 0 hsl(350,100%,88%), 0 4px 12px #FFFFFF, 0 1px 0 #FFFFFF` }}>
                  WELCOME TO MY
                  <span style={{ display: 'block', marginTop: '0.4em' }}>PORTFOLIO</span>
                </motion.h1>
                <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}>
                  <GradientText colors={["hsl(350,100%,88%)", "#FFFFFF", "#FFFFFF", "#FFFFFF", "hsl(350,100%,88%)"]} animationSpeed={3} className="custom-class font-cascadia font-bold" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}>
                  <TextGenerateEffect words={'I build high-performance and visually appealing mobile applications using Flutter and Dart.'} />
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}>
                  <Skills />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }} className="flex flex-row gap-4 mt-8">
                  <a href="https://github.com/jalilovarobiya" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/[0.8] text-white transition-all duration-300 hover:border-[hsl(350,100%,88%)] hover:bg-slate-800 hover:shadow-[0_0_24px_2px_hsl(350,100%,88%)]">
                    <FaGithub className="h-6 w-6 text-slate-400 transition-all duration-300 group-hover:text-[hsl(350,100%,88%)]" />
                  </a>
                  <a href="https://t.me/iamdjalilova_r" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/[0.8] text-white transition-all duration-300 hover:border-[hsl(350,100%,88%)] hover:bg-slate-800 hover:shadow-[0_0_24px_2px_hsl(350,100%,88%)]">
                    <FaTelegram className="h-6 w-6 text-slate-400 transition-all duration-300 group-hover:text-[hsl(350,100%,88%)]" />
                  </a>
                  <a href="https://www.linkedin.com/in/robiya-jalilova-12535a37b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/[0.8] text-white transition-all duration-300 hover:border-[hsl(350,100%,88%)] hover:bg-slate-800 hover:shadow-[0_0_24px_2px_hsl(350,100%,88%)]">
                    <FaLinkedin className="h-6 w-6 text-slate-400 transition-all duration-300 group-hover:text-[hsl(350,100%,88%)]" />
                  </a>
                </motion.div>
              </div>
            </section>

            <section
              id="about"
              className="py-12 md:py-18 gap-0 w-full mx-0 pt-20"
              style={{ width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
              >
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-20">
                  <VelocityScroll defaultVelocity={3} numRows={1} className="max-w-full">
                    <span
                      className="font-moderniz font-bold"
                      style={{
                        fontSize: "2.5rem",
                        lineHeight: "1.1",
                        color: "hsl(350, 100%, 88%)", // och pushti
                        textShadow: `
            2px 2px 0 #fff,        // oq highlight
            4px 4px 0 hsl(350,100%,88%), // och pushti layer
            0 4px 12px #fff,       // blur oq effekt
            0 1px 0 hsl(350,100%,88%)
          `,
                        background: "none",
                        WebkitBackgroundClip: "unset",
                        WebkitTextFillColor: "unset",
                        animation: "none"
                      }}
                    >
                      ABOUT <span style={{ color: "#fff" }}>ME</span>
                    </span>
                  </VelocityScroll>

                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[hsl(350,100%,88%)]"></div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[hsl(350,100%,88%)]"></div>

                  <VelocityScroll defaultVelocity={-3} numRows={1} className="max-w-full">
                    <span
                      className="font-moderniz font-bold"
                      style={{
                        fontSize: "2.5rem",
                        lineHeight: "1.1",
                        color: "hsl(350, 100%, 88%)", // och pushti
                        textShadow: `
            2px 2px 0 #fff,
            4px 4px 0 hsl(350,100%,88%),
            0 4px 12px #fff,
            0 1px 0 hsl(350,100%,88%)
          `,
                        background: "none",
                        WebkitBackgroundClip: "unset",
                        WebkitTextFillColor: "unset",
                        animation: "none"
                      }}
                    >
                      ABOUT <span style={{ color: "#fff" }}>ME</span>
                    </span>
                  </VelocityScroll>
                </div>
              </motion.div>

              <div className="flex flex-col md:flex-row items-center justify-center">
                {is3dEnabled && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                    className="md:w-1/3 flex justify-center"
                  >
                    <div className="w-full h-[420px] md:h-[530px] flex items-center justify-center">
                      <Spline scene="https://prod.spline.design/pTAsVMAb32jnTfpC/scene.splinecode" />
                    </div>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className={`text-white text-center md:text-left px-4 md:px-8 transition-all duration-700 ${is3dEnabled ? 'md:w-1/2' : 'md:w-2/3'}`}
                >
                  <p className="text-2xl text-gray-300 font-moderniz my" style={{ textShadow: "2px 2px 0 #000754, 4px 4px 0 hsl(350,100%,88%), 0 4px 12px #FFFFFF, 0 1px 0 #FFFFFF" }}>Hello, I'm</p>
                  <h3 className="text-4xl font-bold text-white my-2 font-moderniz" style={{ textShadow: "2px 2px 0 #000754, 4px 4px 0 hsl(350,100%,88%), 0 4px 12px #FFFFFF, 0 1px 0 #FFFFFF" }}>Robiya Jalilova</h3>
                  <p className="text-white/80 leading-relaxed mt-4 font-cascadia text-justify">
                    I have completed my studies at Najot Ta'lim Learning Center and I am currently working on applying my theoretical knowledge in practice. I really enjoy creating various animations and strive to use them in my projects to make them visually appealing and engaging for users.
                  </p>
                  <div className="my-6 bg-slate-900/50 border-l-4 border-[hsl(350,100%,88%)] p-4 rounded-r-lg italic text-white/70 font-cascadia">
                    "Great things never come from comfort zones."
                  </div>
                  <div className="flex flex-row sm:flex-row gap-4 mt-8 justify-center md:justify-start items-center">
                    <ButtonMovingBorder
                      as="a"
                      href="/Jalilova Robiya's resume.pdf"
                      download
                      duration={3000}
                      borderRadius="0.75rem"
                      className="bg-slate-900/[0.8] border border-transparent text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_24px_8px_white]"
                    >
                      <FaDownload /> Download CV
                    </ButtonMovingBorder>
                    <ButtonMovingBorder as="a" href="#projects" duration={3000} borderRadius="0.75rem" className="bg-slate-900/[0.8] border border-transparent text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_24px_8px_white]">
                      <FaBriefcase /> View Projects
                    </ButtonMovingBorder>
                  </div>
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10 px-4 md:px-0">
                {stats.map((stat, index) => (
                  <div key={index} className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/70 border border-slate-800/80 shadow-lg transition-all duration-300 hover:border-[hsl(350,100%,88%,0.5)] hover:shadow-[0_0_24px_0px_hsl(350,100%,88%,0.5)] cursor-pointer">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col">
                        <div className="p-3 mb-4 rounded-full bg-slate-800/80 border border-slate-700/60 w-max group-hover:bg-[hsl(350,100%,88%,0.5)] group-hover:border-[hsl(350,100%,88%,0.7)] transition-all duration-300">
                          <div className="text-2xl text-slate-400 group-hover:text-[hsl(350,100%,88%)] transition-colors duration-300">{stat.icon}</div>
                        </div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 group-hover:text-[hsl(350,100%,88%)] transition-colors duration-300">{stat.title}</h3>
                        <p className="text-xs text-slate-500 mt-1">{stat.description}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-5xl font-bold text-white transition-all duration-300 group-hover:text-[hsl(350,100%,88%)]">{stat.value}</p>
                        <FaArrowRight className="text-slate-600 mt-auto group-hover:text-[hsl(350,100%,88%)] transition-all duration-300 -rotate-45" />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </section>

            <section id="projects" className="md:py-18">
              <ProjectSection />
            </section>

            <Contact />
          </main>
        </div>
      </NavbarProvider>
    </AdminProvider>
  );
}

export default App;