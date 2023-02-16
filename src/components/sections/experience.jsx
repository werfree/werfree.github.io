import PropType from 'prop-types';
import React from 'react';

const experience = {
  BluCap: {
    designation: 'Software Developer Engineer Intern',
    doj: 'Aug 2021 - July 2022',
    work: ['Designed and implemented backend using NestJs and Graphql.',
      'Implemented ABAC for existing backend services using CASL.',
      'Implemented event-based inter-service communication using Kafka.',
    ],
    image: [
      'devicon-nestjs-plain-wordmark colored',
      'devicon-graphql-plain colored',
      'devicon-apachekafka-original-wordmark',
    ],

  },
  Healthood: {
    designation: 'Software Engineer Intern',
    doj: 'July 2020 - July 2021',
    work: [
      'Worked on mobile UI enhancement while continuing to develop the backend using Express.',
      'Implemented RBAC for existing backend services using Cabin and Go.',
      'Experienced with Google Cloud Platform.',
      'Optimized existing backend by implementing caching using Redis.',
    ],
    image: [
      'devicon-express-original-wordmark',
      'devicon-go-plain colored',
      'devicon-googlecloud-plain-wordmark colored',
      'devicon-redis-plain-wordmark colored',
    ],
  },
  Infosys: {
    designation: 'Specialist Programmer (Power Programmer)',
    doj: 'Aug 2022 - Present',
    work: [
      'Developed and shipped highly interactive web applications for Apple using React',
      'Completed a comprehensive training on Infosys Certified full stack web development using the MERN stack.',
      'Learned to build and deploy dynamic web applications using MongoDB, Express.js, React.js, and Node.js.',
      'Contributed to a team project, where I implemented a feature for a e-commerce web application using React and Redux.',
    ],
    image: [
      'devicon-mongodb-plain-wordmark colored',
      'devicon-express-original-wordmark',
      'devicon-react-original colored',
      'devicon-nodejs-plain colored',
    ],
  },
};
export default function Experience({ company }) {
  return (
    <div className="mt-6 md:mt-0 px-4 md:ml-4 section-text">
      <div className="text-lg font-mono text-[#ececec] font-extrabold mb-1">
        {experience[company]?.designation}
        {' '}
        <span className="text-color mb-4">
          @
          {` ${company}`}
        </span>
      </div>
      <div className="text-sm font-sans mb-6">
        {experience[company]?.doj}
      </div>
      {experience[company]?.work.map((exp) => (
        <div className="flex flex-row mb-4">
          <div className="text-color px-3">&#9654;</div>
          <div className="break-normal">{exp}</div>
        </div>
      ))}
      <div className="text-color font-bold px-3 mt-9">Technology Used: </div>
      <div className="flex flex-wrap flex-row justify-between mt-6 mx-5">

        {experience[company]?.image.map((img) => (
          <div className="text-5xl md:text-6xl  hover:grayscale-0 lg:mx-4">
            <i className={img} />
          </div>
        ))}

      </div>

    </div>

  );
}
Experience.propTypes = {
  company: PropType.string,
};
Experience.defaultProps = {
  company: 'infosys',
};
