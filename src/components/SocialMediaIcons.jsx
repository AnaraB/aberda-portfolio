import linkedIn from "../assets/linkedin.png"
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import github from "../assets/github.png"

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/aygerim-berdalieva/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedIn} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://x.com/berda52818"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={twitter} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={facebook} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/AnaraB"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" className="w-8 h-8" src={github} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
