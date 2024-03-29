import React from "react";

import { motion } from "framer-motion";
import ParallaxTilt  from 'react-parallax-tilt';

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_code_link_2,
  demo,
  doc,
  demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
     
     <ParallaxTilt

tiltMaxAngleX={20}

tiltMaxAngleY={20}

scale={1}

transitionSpeed={450}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
          {demo && (
        <div className="absolute top-12 right-px flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(demo_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <span className="text-white">Demo</span>
          </div>
        </div>
      )}
      {doc && (
        <div className="absolute top-12 right-px flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(demo_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <span className="text-white">Doc</span>
          </div>
        </div>
      )}
      {source_code_link_2 && (
        <div className="absolute top-12 right-px flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link_2, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <span className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"><img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              /></span>
          </div>
        </div>
      )}
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </ParallaxTilt>

    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Mon travail</p>
        <h2 className={`${styles.sectionHeadText}`}>Projets.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Les projets suivants mettent en valeur mes compétences et mon expérience à travers des exemples concrets de mon travail. Chaque projet est brièvement décrit et accompagné de liens vers les dépôts de code source et/ou les démonstrations en direct. Ils témoignent de ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies et à gérer efficacement des projets.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
