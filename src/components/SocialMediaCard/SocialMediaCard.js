import React from "react";
import "./SocialMediaCard.css";
import { SocialIcon } from "react-social-icons";

export default function SocialMediaCard() {
  return (
    <div>
      <div className="socialMediaContainer ">
        <SocialIcon
          className="socialmediaIcon"
          url="https://www.facebook.com/SGHochwald"
          target="_blank"
        />
        <SocialIcon
          className="socialmediaIcon"
          url="https://www.instagram.com/sg_hochwald"
          target="_blank"
        />
      </div>
    </div>
  );
}
