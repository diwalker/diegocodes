import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/social.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, text_link:"https://www.linkedin.com/analytics/profile-views/" },
  { name: "github", icon: <FaGithub />, text_link:"https://github.com/diwalker"  },
  { name: "instagram", icon: <FaInstagram />, text_link:"https://www.instagram.com/di.wkr/"  },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.text_link} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;