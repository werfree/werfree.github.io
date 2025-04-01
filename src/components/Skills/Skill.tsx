import SectionHeader from "../utils/SectionHeader";
import { BsCodeSlash as SkillIcon } from "react-icons/bs";
import { IoIosCheckmark as CheckIcon } from "react-icons/io";
import { SectionBodyHeader } from "../utils/Section";
export type SkillDataType = {
  heading: string;
  tech: string[];
};
function Skill({ skillData }: { skillData: SkillDataType[] }) {
  return (
    <div className="flex flex-col">
      <SectionHeader title="Technical Skills" Icon={SkillIcon} />
      <div className="flex flex-col space-y-5 bg-white border-1 border-gray rounded-b-xl p-5">
        {skillData.map((data) => {
          return (
            <div key={data.heading} className="flex flex-col space-y-2">
              <SectionBodyHeader title={data.heading} />
              <div className="flex flex-row items-start flex-wrap space-x-5 text-xs/loose text-color-grey-90 space-y-1 ">
                {data.tech.map((tech, index) => {
                  return (
                    <div
                      key={`${tech}-${index}`}
                      className="flex border-1 border-gray rounded-xl p-1.5 pr-3 font-body text-black items-center font-sans section-button"
                    >
                      <CheckIcon size={18} />
                      <div>{tech}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skill;
