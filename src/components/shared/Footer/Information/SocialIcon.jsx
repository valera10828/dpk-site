import React from 'react'
import InfoCollege from "./Info";

const SocialIcons = ({IconName , href}) => {
  const { icons } = InfoCollege[0].socials;
  const { socials } = InfoCollege[0];
  return (
    <div>
      <a href={socials[href]} target="_blank" rel="noopener noreferrer">
        <span dangerouslySetInnerHTML={{ __html: icons[IconName] }} />
      </a>
    </div>
  );
};

export default SocialIcons;