import React, { useState } from 'react';
import Company from './sections/company';
import Experience from './sections/experience';
import SectionHeading from './sections/section-heading';

export default function Work() {
  const company = {
    infosys: 'Infosys',
    bluCap: 'BluCap',
    healthood: 'Healthood',
  };

  const [activeCompany, setActiveCompany] = useState(company.infosys);
  return (
    <div id="experience" className="section-container md:mx-[20%]">
      <div className="my-auto">
        <SectionHeading heading={{ number: '02', text: "Where I've Worked" }} />
        <div className="flex flex-col md:flex-row">
          {/* <div className="md:col-span-1"> */}
          <div className="grid grid-cols-3  md:flex md:flex-col align-middle">

            <Company
              name={company.infosys}
              isActive={company.infosys === activeCompany}
              setActiveCompany={setActiveCompany}
            />
            <Company
              name={company.bluCap}
              isActive={company.bluCap === activeCompany}
              setActiveCompany={setActiveCompany}
            />
            <Company
              name={company.healthood}
              isActive={company.healthood === activeCompany}
              setActiveCompany={setActiveCompany}
            />
          </div>
          {/* </div> */}
          <div className="md:col-auto md:w-max">
            <div className="flex flex-col">
              <Experience company={activeCompany} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
