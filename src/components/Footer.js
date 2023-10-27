import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/Footer.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    platformname: "GitHub",
    url: "https://github.com/khanadib21",
    icon: faGithub,
    color: "#5DE512",
  },
];

const Footer = () => {
  return (
    <div className="footer bg-white">
      <div>
        <div className="d-flex flex-md-row justify-content-center">
          {socials.map(({ platformname, url, icon, color }) => (
            <div
              key={platformname}
              className="d-flex flex-column align-items-center mx-md-2"
            >
              <a
                href={url}
                className={`icon ${platformname}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={icon}
                  bounce
                  className="footer-icon-size" 
                  style={{ color: color }}
                />
              </a>
              <a href={url} target="_blank" rel="noreferrer">
                <span className="d-inline-block mx-1 name">{platformname}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// Export Footer
export default Footer;
