import SectionHeader from "../utils/SectionHeader";
import {
  BsSuitcaseLg as WorkIcon,
  BsCalendar3 as CalenderIcon,
} from "react-icons/bs";
import "./Experiences.css";
import { SectionBody, SectionBodyHeader } from "../utils/Section";
const ExperienceDetails = [
  {
    position: "Specialist Programmer",
    company: "Apple, Infosys",
    type: "Full-Time",
    from: "Aug, 2022",
    to: "Present",
    details:
      "I develop highly interactive web applications for Apple using React, creating seamless user experiences. I specialize in building reusable UI components, reducing development time by 20%, and optimizing state management with Redux for efficient data flow. As a Certified Full-Stack Developer, I have expertise in the MERN stack, enabling me to tackle complex web development challenges effectively.",
  },
  {
    position: "Software Engineer",
    company: "BlueCap",
    type: "Intern",
    from: "Aug, 2021",
    to: "July, 2022",
    details:
      "Designed and built a scalable backend infrastructure using NestJS and GraphQL, ensuring system robustness and maintainability. I implemented Attribute-Based Access Control (ABAC) with CASL to enhance security and event-driven communication with Kafka, improving system performance by 20% and reducing failures by 50%.",
  },
  {
    position: "Software Developer",
    company: "Healthood",
    type: "Intern",
    from: "Aug, 2020",
    to: "July, 2021",
    details:
      "I enhanced mobile UI, boosting user satisfaction by 15%, while improving backend systems with Express for a seamless experience. I implemented Role-Based Access Control (RBAC) using Cabin and Go, strengthening security, and optimized performance with Redis caching, reducing response times by 25% and increasing efficiency by 20%.",
  },
];
export type ExperienceDetails = {
  position: string;
  company: string;
  type: string;
  from: string;
  to: string;
  details: string;
};

type ExperienceProps = {
  experienceDetails: ExperienceDetails[];
};
function Experiences({ experienceDetails }: ExperienceProps) {
  return (
    <div className="flex flex-col">
      <SectionHeader title="Work Experience" Icon={WorkIcon} />
      <div className="flex bg-white border-1 border-gray rounded-b-xl p-5">
        <ol className="relative flex flex-col border-s border-gray">
          {experienceDetails.map((expDetails, ind) => {
            return (
              <li
                key={`${expDetails.company}-${ind}`}
                className="flex space-y-3 flex-col mb-10 ms-6 text-left"
              >
                <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-0 ring-white">
                  <WorkIcon size={15} className="color-body" />
                </span>

                <div className="flex flex-col md:flex-row space-y-2 justify-between">
                  <div className="flex flex-col space-y-1">
                    {/* Position */}
                    <SectionBodyHeader title={expDetails.position} />
                    {/* Company */}
                    <SectionBody>
                      <div>{expDetails.company}</div>
                      <div className="w-[2px] h-[2px] items-center justify-center mx-1 dot rounded-xl"></div>
                      <div>{expDetails.type}</div>
                    </SectionBody>
                  </div>
                  <div className="flex flex-row items-center space-x-2 border-1 border-gray h-fit w-fit  rounded-xl px-3 py-1 md:py-2">
                    <CalenderIcon size={10} />
                    <div className="font-body text-xs/relaxed text-black text">
                      {expDetails.from}
                      {" - "}
                      {expDetails.to}
                    </div>
                  </div>
                </div>
                {/* Details */}
                <div className="flex font-body text-xs/relaxed">
                  {expDetails.details}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Experiences;
