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
    <button onClick={() => handleClick(platform)}>
      {`Share on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
    </button>
  );
};

export default ShareButton;
