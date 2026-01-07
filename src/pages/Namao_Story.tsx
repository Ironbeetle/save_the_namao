
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import 
{
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide8,
    Slide9,
    Slide10,
    Slide11,
    Slide12,
    Slide13,
    Slide14,
    Slide15,
    Slide16,
    Slide17,
    Slide18,
    Slide19,
    Slide20,
    Slide21,
    Slide22 
}from "../components/Slides";

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15, Slide16, Slide17, Slide18, Slide19, Slide20, Slide21, Slide22];

export default function Namao_Story() {
  const [contentVisible, setContentVisible] = useState(false);

  // Delay content fade-in by 1 second after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Fixed background desktop layer with fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="hidden md:block fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("/sturgeonimgblur2.jpg")' }}
      />

      {/* Fixed background mobile layer with fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="md:hidden block fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("/sturgeonmobileblur.jpg")' }}
      />

      {/* Scrollable content layer with delayed fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative z-10 w-full min-h-screen"
      >
        {slides.map((SlideComponent, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-screen"
          >
            <SlideComponent />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
