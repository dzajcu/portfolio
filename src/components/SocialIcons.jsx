import { Facebook } from "./icons/Facebook";
import { Instagram } from "./icons/Instagram";
import { Github } from "./icons/Github";
import { LinkedIn } from "./icons/LinkedIn";

const SocialIcons = ({ column = false, iconSize = "6", className = "" }) => {
  const containerClass = `flex ${
    column ? "flex-col" : "flex-row"
  } gap-6 items-center ${className}`;
  const iconClass = `social-icon-link hover:text-white-50 transition-colors duration-300 text-blue-50 size-${iconSize}`;

  return (
    <div className={containerClass}>
      <a
        href="www.facebook.com/dzajcu/"
        target="_blank"
        className={iconClass}
      >
        <Facebook />
      </a>

      <a
        href="https://www.instagram.com/d_zajcu/"
        target="_blank"
        className={iconClass}
      >
        <Instagram />
      </a>

      <a
        href="https://github.com/dzajcu"
        target="_blank"
        className={iconClass}
      >
        <Github />
      </a>

      <a
        href="https://www.linkedin.com/in/zajacdawid/"
        className={iconClass}
        target="_blank"
      >
        <LinkedIn />
      </a>
    </div>
  );
};

export default SocialIcons;
