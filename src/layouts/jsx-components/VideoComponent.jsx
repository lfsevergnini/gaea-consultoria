import React, { useState } from "react";
import { Play } from "react-feather";
import YouTube from "react-youtube";

const VideoComponent = ({
  height,
  width,
  src,
  title,
  video_id,
  video_height,
  video_width,
  disabled = false,
}) => {
  const [play, setPlay] = useState(false);
  const videoOptions = {
    borderRadius: "16px",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      {!play ? (
        <div className="relative text-center">
          {!disabled && (
            <button
              className="play-button"
              aria-label="play-video"
              onClick={() => setPlay(true)}
            >
              <Play />
            </button>
          )}
          <img
            width={width}
            height={height}
            src={src}
            alt={title}
            className="inline w-auto max-h-[571px] rounded-2xl"
          />
        </div>
      ) : (
        <div className="youtube mx-auto text-center">
          <YouTube
            videoId={video_id}
            opts={videoOptions}
            iframeClassName={`  aspect-video ${video_height} ${video_width} max-w-full bg-transparent rounded-2xl`}
          />
        </div>
      )}
    </>
  );
};

export default VideoComponent;
