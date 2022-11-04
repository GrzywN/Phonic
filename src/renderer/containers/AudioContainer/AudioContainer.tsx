import React, { useEffect } from "react";

import usePlayer from "../../hooks/usePlayer";

type AudioContainerProps = {
  children: React.ReactNode;
};

const audio = new Audio();

function AudioContainer({ children }: AudioContainerProps) {
  const { source, playing, currentTimeHandler, volume } = usePlayer();

  useEffect(() => {
    if (source !== "Youtube") {
      // console.log(`http:/${source}`);
      audio.src = source;
    }
  }, [source]);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    currentTimeHandler(audio.currentTime);
  }, [audio.currentTime]);

  useEffect(() => {
    audio.volume = volume / 100;
  }, [volume]);

  return <>{children}</>;
}

export default AudioContainer;
