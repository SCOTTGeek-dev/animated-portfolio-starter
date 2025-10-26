import "./navbar.scss";
import {motion} from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../../LanguageContext";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "nl", name: "Nederlands", flag: "🇳🇱" }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span
         initial={{opacity:0, scale:0.5}}
          animate={{opacity:1, scale:1}}
           transition={{duration:0.5}}
           >
            {t.name}
            </motion.span>
        <div className="rightSection">
          <div className="social">
              <a href="https://github.com/SCOTTGeek-dev" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
              </a>
              <a href="mailto:ham.youness@gmail.com" title="Gmail">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
              </a>
          </div>
          
          <div className="languageSelector">
            <button 
              className="languageButton"
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            >
              <span className="flag">{currentLanguage.flag}</span>
              <span className="languageCode">{currentLanguage.code.toUpperCase()}</span>
              <svg 
                className={`arrow ${showLanguageMenu ? 'open' : ''}`}
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="white"
              >
                <path d="M2 4l4 4 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </button>
            
            {showLanguageMenu && (
              <motion.div 
                className="languageMenu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`languageOption ${language === lang.code ? 'active' : ''}`}
                    onClick={() => {
                      setLanguage(lang.code);
                      setShowLanguageMenu(false);
                    }}
                  >
                    <span className="flag">{lang.flag}</span>
                    <span className="languageName">{lang.name}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </div>
    </div>
</div>

  )
}

export default Navbar;
