"use client";
import React from "react";

const ShareButton = ({ platform, url, title, image }) => {
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${title}&source=LinkedIn`,
  };

  const handleClick = (platform) => {
    const shareUrl = shareUrls[platform];
    window.open(shareUrl, "popup", "width=600,height=600");
  };

  return (
    <button
      onClick={() =>
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=http://ec2-3-17-135-121.us-east-2.compute.amazonaws.com/akslasdaasd/kajsdadadas`,
          "_blank"
        )
      }
    >
      Share on LinkedIn
    </button>
  );
};

export default ShareButton;
