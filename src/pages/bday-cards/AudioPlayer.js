import React, { useState, useEffect } from "react";

const useAudio = () => {
  const [audio] = useState(new Audio("/audios/stayin.mp3"));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const AudioPlayer = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button
        className={playing ? "btn-audio pause" : "btn-audio play"}
        onClick={toggle}
      ></button>
    </div>
  );
};

export default AudioPlayer;
