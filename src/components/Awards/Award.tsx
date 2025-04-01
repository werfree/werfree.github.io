import SectionHeader from "../utils/SectionHeader";
import { GoTrophy as AwardIcon } from "react-icons/go";
import { SectionBody, SectionBodyHeader } from "../utils/Section";
import GrayButton from "../utils/GrayButton";

export type AwardDataType = {
  name: string;
  issuer: string;
  issuedOn: string;
  details: string;
  link: string;
};
function Award({ awardData }: { awardData: AwardDataType[] }) {
  return (
    <div className="flex flex-col">
      <SectionHeader title="Awards" Icon={AwardIcon} />
      <div className="grid grid-cols-1 gap-y-15 gap-x-5 md:grid-cols-2  space-y-5 bg-white border-1 border-gray rounded-b-xl p-5">
        {awardData.map((award, index) => {
          return (
            <div key={`${award}-${index}`}>
              <SectionBodyHeader title={award.name} />
              <SectionBody>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div>{award.issuer}</div>
                    <div className="w-[2px] h-[2px] items-center justify-center mx-1 dot rounded-xl"></div>
                    <div>{award.issuedOn}</div>
                  </div>
                  <div className="my-5">{award.details}</div>
                  <a
                    className="flex w-full md:w-fit"
                    href={award.link}
                    target="_blank"
                  >
                    <GrayButton title="Show Award" />
                  </a>
                </div>
              </SectionBody>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Award;
