import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const ABoutIcon = () => {
  return (
    <>
      <Link href="https://www.linkedin.com/in/sadaf-shahab-ssr123">
        <FontAwesomeIcon
          icon={faLinkedin}
          width={30}
          height={30}
          className="text-[#007BB5] w-8 h-8"
        />
      </Link>
      <Link href="https://github.com/sadafshahab12">
        <FontAwesomeIcon
          icon={faGithub}
          width={30}
          height={30}
          className=" w-8 h-8"
        />
      </Link>
      <Link href="https://x.com/sadafshahab12">
        <FontAwesomeIcon
          icon={faTwitter}
          width={30}
          height={30}
          className=" w-8 h-8"
        />
      </Link>
      <Link href="https://www.facebook.com/profile.php?id=61556555833599">
        <FontAwesomeIcon
          icon={faFacebook}
          width={30}
          height={30}
          className="text-blue-600  w-8 h-8"
        />
      </Link>
      <Link href="https://www.instagram.com/sadafshahab12/">
        <FontAwesomeIcon
          icon={faInstagram}
          width={30}
          height={30}
          className="text-red  w-8 h-8"
        />
      </Link>
    </>
  );
};

export default ABoutIcon;
