import { useState, useEffect } from "react";
import { motion, AnimatePresence} from "framer-motion";
import Modal from "./Modal";
import "./DesktopGrid.css";

const items = [
  {
    id: "about",
    label: "about",
    icon: "/images/icon_about.webp",
    iconDark: "/images/icon_about_dark.webp",
  },
  {
    id: "links",
    label: "links",
    icon: "/images/icon_links.webp",
    iconDark: "/images/icon_links_dark.webp",
  },
  {
    id: "work",
    label: "work",
    icon: "/images/icon_work.webp",
    iconDark: "/images/icon_work_dark.webp",
  },
  {
    id: "gallery",
    label: "gallery",
    icon: "/images/icon_work.webp",
    iconDark: "/images/icon_work_dark.webp",
  },
  
];

function WorkContent() {
  return (
    <div className="skills-wrapper">

      <h2 className="skills-title">DEVELOPMENT</h2>
      <div className="skills-grid">
        {[
          "C++",
          "Java",
          "Python",
          "React",
          "Vite",
          "HTML/CSS",
          "JavaScript"
        ].map(skill => (
          <div key={skill} className="skill-pill">
            {skill}
          </div>
        ))}
      </div>

      <h2 className="skills-title">TOOLS</h2>
      <div className="skills-grid">
        {[
          "Blender",
          "Canva"
        ].map(tool => (
          <div key={tool} className="skill-pill">
            {tool}
          </div>
        ))}
      </div>

    </div>
  );
}

function GalleryContent() {
  const [selected, setSelected] = useState(null);

  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/14.jpg",
    "/images/15.jpg",
    "/images/16.jpg",
    "/images/17.jpg",
    "/images/18.jpg"
  ];

  return (
    <>
      <div className="masonry-grid">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="masonry-item"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(src)}
          >
            <img src={src} alt={`gallery-${index}`} loading="lazy" />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              className="lightbox-image"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function DesktopGrid({ theme }) {
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const vibrate = (pattern = [30, 20, 30]) => {
    if (!("vibrate" in navigator)) return;
    navigator.vibrate(pattern);
  };


  const openWindow = (id) => {
    navigator.vibrate([20, 15, 20]);
    setOpenWindows(prev =>
      prev.includes(id) ? prev : [...prev, id]
    );
    setActiveWindow(id);
  };

  const closeWindow = (id) => {
    vibrate([15, 10, 15]);
    setOpenWindows(prev => prev.filter(w => w !== id));
    if (activeWindow === id) {
      setActiveWindow(null);
    }
  };

  const content = {
    about: (
      <div className="about-container">

        <div className="about-header">
          <img
            src="/images/profile.webp"
            alt="Srinisha"
            className="about-avatar"
          />

          <div className="about-intro">
            <h1 className="about-name">
              <span className="accent">Srinisha</span>
            </h1>

            <p className="about-sub">
              Computer Science Undergraduate student
            </p>

            <p className="about-sub">
              Computer Science Student • Artist • Video Editor
            </p>
          </div>
        </div>

        <div className="about-body">

          <p>
            Hi! i'm Srinisha, a developer and creative enthusiast.
          </p>

          <ul>
            <li>Create interactive web applications</li>
            <li>Experiment with UI and animation</li>
            <li>Explore art, design and motion graphics</li>
          </ul>

          <h3>EDUCATION</h3>

          <blockquote>
            Bachelor of Science- <span>Computer Science</span>
        
          </blockquote>

          <h3>OTHER INTERESTS</h3>

          <ul>
            <li>Embedded systems</li>
            <li>UI design and motion graphics</li>
            <li>Creative coding</li>
          </ul>

          <h3>LANGUAGE PROFICIENCY</h3>

          <blockquote>
            Native fluency in <span className="accent">English</span> and
            conversational <span className="accent">Tamil</span>.
          </blockquote>

        </div>

      </div>
    ),

 links: (
      <div className="links-container">
        <div className="links-grid">
          {[
            { id: "github", label: "github", link: "https://github.com/24SBCS100/", icon: "/images/icon_links.webp" },
            { id: "linkedin", label: "linkedin", link: "https://www.linkedin.com/in/sri-nisha-416770357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: "/images/icon_links.webp" },
            { id: "instagram", label: "instagram", link: "https://www.instagram.com/akira_tsugokiarts?igsh=ZzVsNzA4d3BteWJ2", icon: "/images/icon_ig_solid.webp" },
          ].map((item) => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="link-card">
              <motion.div className="link-motion" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img src={item.icon} alt={item.label} className="link-icon-img" />
                <span className="link-text-label">{item.label}</span>
              </motion.div>
            </a>
          ))}
        </div>

       
      </div>
    ),

    work: <WorkContent />,

    gallery: <GalleryContent />
  
  };

  return (
    <>
      <div className="desktop-wrapper">
        <div className="main-window">
          <div className="window-bar">Home</div>

          <div className="window-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Greetings! <span>i’m Srinisha</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              Computer Science Student | Artist | Video Editor
            </motion.p>

            <div className="icon-grid">
              {items.map(item => (
                <button
                  key={item.id}
                  className="icon-btn"
                  onClick={() => openWindow(item.id)}
                >
                  <motion.div
                    className="icon-motion"
                    initial={false}
                    animate={{ scale: 1, y: 0 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    whileTap={{ scale: 0.96, y: -2 }}
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 32,
                      mass: 0.65
                    }}
                  >
                    <div className="icon-image-wrapper">
                      <img
                        src={
                          theme === "dark" ? item.iconDark : item.icon
                        }
                        alt={item.label}
                        className="icon-image"
                      />
                    </div>
                    <span>{item.label}</span>
                  </motion.div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {openWindows.map(id => (
        <Modal
          key={id}
          open
          title={id}
          isActive={activeWindow === id}
          onFocus={() => setActiveWindow(id)}
          onClose={() => closeWindow(id)}
        >
          {content[id]}
        </Modal>
      ))}
    </>
  );
}