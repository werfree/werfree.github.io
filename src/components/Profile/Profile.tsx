import { BsPerson as ProfileIcon } from "react-icons/bs";
import { CiLocationOn as LocationIcon } from "react-icons/ci";
import "./Profile.css";
import HeadingText from "../utils/HeadingText";
function Profile({ summary }: { summary: string }) {
  return (
    <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5">
      <div className="h-[400px] w-full md:h-auto md:w-auto flex flex-1 md:flex-5/12">
        <img
          src="/image-bw.jpg"
          className="flex rounded-xl md:w-full md:h-full object-cover"
        />
      </div>
      <div className="flex flex-1 md:flex-7/12 flex-col bg-white rounded-xl border-1 border-gray space-y-3 px-3">
        <div className="flex">
          <div className="flex w-[50px] h-[50px] my-5 bg-background items-center justify-center rounded-xl border-1 border-gray">
            <ProfileIcon className="color-body" size={30} />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <HeadingText text="Professional Profile" />
          <p className="mt-3 text-sm/tight md:text-base/snug flex text-left font-body  color-body">
            {summary}
          </p>
        </div>
        <div className="flex items-center justify-items-start text-xs md:text-sm pb-2">
          <span className="mr-2 mb-1 md:mb-0.5">
            <LocationIcon className="color-body" />
          </span>
          <span className="text-xs md:text-sm color-body font-body">
            Kolkata, West Bengal, India
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
