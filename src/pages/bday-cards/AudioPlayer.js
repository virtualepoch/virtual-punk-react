import React, { useState, useEffect } from "react";

const useAudio = () => {
  const [audio] = useState(new Audio("/audios/stayin.mp3"));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

const AudioPlayer = ({ url, startEx, setStartEx }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button
        className={playing ? "btn-audio pause" : "btn-audio play"}
        onClick={() => {
          setStartEx(!startEx);
          toggle();
        }}
      ></button>
    </div>
  );
};

export default AudioPlayer;
