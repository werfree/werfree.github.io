import "./App.css";
import data from "./data.json";
import Navbar from "./components/nav/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Experiences, {
  ExperienceDetails,
} from "./components/Experiences/Experiences";
import Licenses, { LicenseDataType } from "./components/License/Licenses";
import Skill, { SkillDataType } from "./components/Skills/Skill";
import Award, { AwardDataType } from "./components/Awards/Award";
import { Section } from "./components/utils/Section";
import Contact, { ContactType } from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

type PortfolioDataType = {
  experiences: ExperienceDetails[];
  certificates: LicenseDataType[];
  skills: SkillDataType[];
  awards: AwardDataType[];
  email: string;
  resume: string;
  contact: ContactType;
};
function App() {
  const portFolioData: PortfolioDataType = data;

  return (
    <div className="mx-2 scroll-smooth">
      <div className="container flex flex-col mx-auto justify-center align-middle pulse tracking-tight">
        <div className="sticky top-5 z-50 nav-container w-full">
          <Navbar />
        </div>

        <div className="fixed top-0 w-full h-[40px] z-40 top-empty-div"></div>
        {/* <div className="bg-white rounded-xl my-1 mx-auto p-1">
          <Notify />
        </div> */}
        <div className="flex flex-col mx-auto snap snap-y overflow-y-hidden">
          <div className="mx-auto my-20 p-1">
            <Header email={portFolioData.email} resume={portFolioData.resume} />
          </div>
          <Section id="profile">
            <Profile />
          </Section>
          <Section id="experience">
            <Experiences experienceDetails={portFolioData.experiences} />
          </Section>
          <Section id="certificates">
            <Licenses licensesData={portFolioData.certificates} />
          </Section>
          <Section id="skills">
            <Skill skillData={portFolioData.skills} />
          </Section>
          <Section id="awards">
            <Award awardData={portFolioData.awards} />
          </Section>
          <Section id="contact">
            <Contact
              email={portFolioData.email}
              contactLink={portFolioData.contact}
            />
          </Section>
          <Section id="footer">
            <Footer />
          </Section>
        </div>
      </div>
    </div>
  );
}

export default App;
