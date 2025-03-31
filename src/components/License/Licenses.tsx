import React from "react";
import { LiaCertificateSolid as LicenseIcon } from "react-icons/lia";
import { RiExternalLinkLine as LinkIcon } from "react-icons/ri";
import SectionHeader from "../utils/SectionHeader";
import { SectionBody, SectionBodyHeader } from "../utils/Section";
import GrayButton from "../utils/GrayButton";

export type LicenseDataType = {
  name: string;
  issuer: string;
  issuedOn: string;
  url: string;
};

type LicenseProps = {
  licensesData: LicenseDataType[];
};
function Licenses({ licensesData }: LicenseProps) {
  return (
    <div className="flex flex-col">
      <SectionHeader title="Licenses & Certifications" Icon={LicenseIcon} />
      <div className="grid grid-cols-1 gap-y-15 gap-x-5 md:grid-cols-2 bg-white border-1 border-gray rounded-b-xl p-5">
        {licensesData.map((lData, index) => {
          return (
            <ul
              key={`${lData.name}-${index}`}
              className="flex flex-col space-y-3 items-start"
            >
              <SectionBodyHeader title={lData.name} />
              <SectionBody>
                <div>{lData.issuer}</div>
                <div className="w-[2px] h-[2px] items-center justify-center mx-1 dot rounded-xl"></div>
                <div>Issued {lData.issuedOn}</div>
              </SectionBody>
              <a
                className="flex w-full md:w-fit"
                href={lData.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <GrayButton title={"Show Credential"} Icon={LinkIcon} />
              </a>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Licenses;
