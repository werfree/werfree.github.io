import { useState } from "react";
import "./App.css";
import data from "./data.json";
import Navbar from "./components/nav/Navbar";
import Notify from "./components/notification/Notify";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Experiences, {
  ExperienceDetails,
} from "./components/Experiences/Experiences";
import Licenses, { LicenseDataType } from "./components/License/Licenses";

type PortfolioDataType = {
  experiences: ExperienceDetails[];
  certificates: LicenseDataType[];
};
function App() {
  const [count, setCount] = useState(0);

  const portFolioData: PortfolioDataType = data;

  return (
    <div className="mx-2">
      <div className="container flex flex-col mx-auto justify-center align-middle pulse tracking-tight">
        <div className="bg-white sticky top-5 z-50 nav-container w-full rounded-xl shadow-[0_6px_10px_rgba(29,29,38,0.04)]">
          <Navbar />
        </div>
        {/* <div className="bg-white rounded-xl my-1 mx-auto p-1">
          <Notify />
        </div> */}
        <div className="mx-auto my-20 p-1">
          <Header />
        </div>
        <div className="mb-2">
          <Profile />
        </div>
        <div className="mb-2">
          <Experiences experienceDetails={portFolioData.experiences} />
        </div>
        <div className="mb-2">
          <Licenses licensesData={portFolioData.certificates} />
        </div>
      </div>
    </div>
  );
}

export default App;
