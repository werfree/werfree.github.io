/* eslint-disable react/jsx-indent */
import React from 'react';
import PropType from 'prop-types';
import { motion } from 'framer-motion';
import SectionHeading from './sections/section-heading';
import { CustomSocialIcon } from './social';

function ProjectDetails(prop) {
  const {
    name, details, github, tech, playstore,
  } = prop;
  return (
    <figure className="flex flex-col items-center  p-8 text-center border-b rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r bg-[#2e2e2e] border-gray-700 shadow-2xl">
      <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 section-text flex-1">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#ececec]">{name}</h3>
        </div>
        <div className="flex-2">
          <p className="my-4 font-light">{details}</p>
        </div>
      </blockquote>
      <figcaption className="items-baseline">
        <div className="flex flex-col items-center">
          <div className="flex flex-row flex-wrap justify-evenly space-x-1 items-center">
            {tech?.map((t) => <div className="flex-grow section-text text-xs border border-gray-600 rounded-full m-1 p-2 shadow-xl">{t}</div>)}
          </div>
          <div className="space-y-0.5  flex flex-row justify-end items-center">
            <CustomSocialIcon link={github} />
            {playstore && <CustomSocialIcon link={playstore} />}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
export default function Project() {
  const projectDetails = [
    {
      name: 'Drive Safe',
      details: (<>
        Developed a mobile application and hardware solution to
        <span className="text-color"> reduce the death rates from traffic collisions</span>
        . The mobile app can detect accidents and can inform the nearest police stations.
                </>),
      github: 'https://github.com/werfree/Ecommerce',
      tech: ['Arduino', 'Java', 'Android'],
    },
    {
      name: 'Yogi',
      details: (<>
An
<span className="text-color"> audiobook application </span>
build for Android and IOS.
                </>),
      github: 'https://github.com/werfree/Ecommerce',
      playstore: 'https://play.google.com/store/apps/details?id=com.autobiograohyofayogi',
      tech: ['React Native', 'Firebase', 'G Cloud'],
    },
    {
      name: 'My Tees',
      details: <>
A full stack
<span className="text-color"> E-Commerce website with Braintree payment gateway </span>
integrated .JWT was used for authentication.
               </>,
      github: 'https://github.com/werfree/Ecommerce',
      tech: ['MERN', 'JWT'],
    },
    {
      name: 'Life Saver',
      details: <>
A mobile application that can connect a
<span className="text-color"> willing blood donor to the recipient </span>
of his/her area.
               </>,
      github: 'https://github.com/werfree/Android/tree/master/Life_Saver',
      tech: ['Android', 'Java', 'G Map', 'Firebase'],
    },
  ];

  return (
    <div id="project" className="section-container">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}

      >
        <SectionHeading heading={{ number: '03', text: "Things I've Built" }} />
        <div>
          <div>

            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">

              {/* eslint-disable-next-line max-len */}
              {projectDetails.map((projectDetail) => <ProjectDetails key={projectDetail.name} name={projectDetail.name} details={projectDetail.details} github={projectDetail.github} tech={projectDetail.tech} playstore={projectDetail.playstore} />)}

            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
CustomSocialIcon.propTypes = {
  name: PropType.string,
  details: PropType.string,
  github: PropType.string,
  live: PropType.string,
  playstore: PropType.string,
  // eslint-disable-next-line react/forbid-prop-types
  tech: PropType.array,
};

CustomSocialIcon.defaultProps = {
  name: '',
  details: '',
  github: '',
  live: undefined,
  tech: [],
  playstore: undefined,
};
