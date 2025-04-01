import { MdOutlineMailOutline as EmailIcon } from "react-icons/md";
import { RiLinkedinBoxFill as LinkedInIcon } from "react-icons/ri";
import { RiGithubFill as GithubIcon } from "react-icons/ri";
import { RiInstagramFill as InstagramIcon } from "react-icons/ri";
import { IconType } from "react-icons";
export type ContactType = {
  linkedIn: string;
  github: string;
  instagram: string;
};

const iconMap: Record<string, IconType> = {
  linkedIn: LinkedInIcon,
  github: GithubIcon,
  instagram: InstagramIcon,
};

function Social({ contactLink }: { contactLink: ContactType }) {
  return (
    <div className="flex flex-row color-body space-x-8">
      {Object.entries(contactLink).map(([sName, sLink], index) => {
        const Icon: IconType = iconMap[sName] ?? LinkedInIcon;
        return (
          <a
            key={`${sName}${index}`}
            href={`${sLink}`}
            target="_blank"
            className="cursor-pointer text-2xl md:text-3xl "
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
function Contact({
  email,
  contactLink,
}: {
  email: string;
  contactLink: ContactType;
}) {
  return (
    <div className="flex flex-col items-center mt-20 space-y-10">
      <div className="flex flex-col items-center space-y-8">
        <div>
          <img
            src="/image-bw-small.png"
            className="h-20 w-20 md:h-25 md:w-25 border-1 border-red rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110"
            alt="Sayantan Ghosh"
          />
        </div>
        <div className="flex flex-col item-center text-xl">
          <div className="text-black align-middle text-lg md:text-xl font-medium">
            Let's Connect
          </div>
          <div className="font-body color-body text-base md:text-base">
            Available for new opportunities and collaborations
          </div>
        </div>
        <a
          href={`mailto:${email}`}
          className="flex w-full px-10 py-5 item-center justify-center bg-black rounded-xl text-white text-base md:text-lg space-x-2 cursor-pointer"
        >
          <EmailIcon className="mt-1" />
          <div className="">Contact Me</div>
        </a>
      </div>
      <div className="flex w-full items-center flex-col mt-10 space-y-3">
        <Social contactLink={contactLink} />
        <div className="w-full bg-gray rounded-4xl border-1 border-gray"></div>
      </div>
    </div>
  );
}

export default Contact;
