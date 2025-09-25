import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { FaTelegram } from 'react-icons/fa';
import DotGrid from './DotGrid';
import Spline from '@splinetool/react-spline';

const Preloader = ({ onFinished }) => {
  const [typedText, setTypedText] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [isAssetLoaded, setIsAssetLoaded] = useState(false);
  const fullText = "www.robiyajalilova.com";

  const handleAssetLoad = () => {
    setIsAssetLoaded(true);
  };

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (showContent) {
      if (typedText.length < fullText.length) {
        const typingTimer = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        }, 120);
        return () => clearTimeout(typingTimer);
      }
      else if (typedText.length === fullText.length && isAssetLoaded) {
        const exitTimer = setTimeout(() => {
          setFadeOut(true);
          setTimeout(onFinished, 1000);
        }, 1500);
        return () => clearTimeout(exitTimer);
      }
    }
  }, [typedText, showContent, fullText, onFinished, isAssetLoaded]);

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          exit={{
            opacity: 0,
            filter: 'blur(10px)',
            transition: { duration: 1, ease: 'easeInOut' }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center text-ivory bg-[#FFE0EB]"
        >
          <DotGrid />

          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
              className="text-center relative z-10 p-4"
            >
              <div className="flex justify-center mb-2 mt-[-24px] md:mt-[-32px]">
                <div className="w-[320px] h-[180px] md:w-[480px] md:h-[260px]">
                  <Spline
                    scene="https://prod.spline.design/pTAsVMAb32jnTfpC/scene.splinecode"
                    onLoad={handleAssetLoad}
                  />
                </div>
              </div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }}
                className="text-4xl md:text-6xl font-moderniz font-bold mb-4 text-[#FF6F91]"
              >
                Robiya Jalilova
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.5 } }}
                className="font-cascadia text-lg md:text-xl text-gray-400 mb-8 break-all"

              >
                <span>{typedText}</span>
                <span className="animate-blink">|</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } }}
                className="flex justify-center gap-6"
              >
                <a href="https://github.com/jalilovarobiya" target="_blank" rel="noopener noreferrer" className="text-[#FF85A2] hover:text-[#FF85A2] transition-all duration-300 transform hover:scale-110">
                  <Github size={32} />
                </a>
                <a href="https://www.linkedin.com/in/robiya-jalilova-12535a37b/" target="_blank" rel="noopener noreferrer" className="text-[#FF85A2] hover:text-[#FF85A2] transition-all duration-300 transform hover:scale-110">
                  <Linkedin size={32} />
                </a>
                <a href="https://t.me/iamdjalilova_r" target="_blank" rel="noopener noreferrer" className="text-[#FF85A2] hover:text-[#FF85A2] transition-all duration-300 transform hover:scale-110">
                  <FaTelegram size={32} />
                </a>

              </motion.div>
            </motion.div>
          )}
        </motion.div>

      )}
    </AnimatePresence>
  );
};

export default Preloader;