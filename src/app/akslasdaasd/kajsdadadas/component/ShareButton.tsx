"use client";

const ShareButtons = ({ url, title }: { url: string; title: string }) => {
  const shareUrl = encodeURIComponent(url);
  const shareText = encodeURIComponent(title);

  return (
    <div className="share-buttons">
      <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")}>
        Share on Facebook
      </button>
      <button
        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "_blank")}
      >
        Share on Twitter
      </button>
      <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank")}>
        Share on LinkedIn
      </button>
      <style jsx>{`
        .share-buttons {
          margin-top: 20px;
        }
        .share-buttons button {
          margin-right: 10px;
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .share-buttons button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default ShareButtons;
