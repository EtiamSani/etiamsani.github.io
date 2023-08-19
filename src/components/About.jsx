import React from "react";
import ParallaxTilt  from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <ParallaxTilt
  strength={500} // Contrôle la force du défilement parallaxe
  className='xs:w-[250px] w-full'
>
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
  >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
    </ParallaxTilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Me concernant.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Je suis un développeur web full-stack spécialisé en JavaScript, avec une solide maîtrise des technologies back-end telles que Node.js, ainsi que des frameworks front-end tels que React. Je possède la capacité d'apprendre rapidement et je suis constamment en quête de nouvelles connaissances pour rester à la pointe de mon domaine. Je suis en mesure de résoudre des problématiques complexes de manière efficace et créative. Mon objectif est de développer des applications web innovantes et performantes, en fournissant des solutions robustes et intuitives pour répondre aux besoins des utilisateurs.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
