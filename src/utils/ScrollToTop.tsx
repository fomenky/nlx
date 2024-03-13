import React, { useState, useEffect } from "react";
import arrow from "@/assets/arrow.svg";
import Image from "next/image";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour détecter le défilement de la page
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
          zIndex: 1000,
          padding: "10px",
        }}
      >
        <Image src={arrow} alt="" width="50" height="50" />
      </div>
    )
  );
};

export default ScrollToTop;
