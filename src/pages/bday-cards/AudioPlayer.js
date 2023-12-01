import React, { useState, useEffect } from "react";

const useAudio = () => {
  const [audio] = useState(new Audio("/audios/stayin.mp3"));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.volume = 0.5;
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
  const [pressed, setPressed] = useState(false);

  return (
    <>
      <button
        className="btn-audio reload"
        onClick={() => {
          setStartEx(!startEx);
        }}
      />
      <button
        className={
          pressed
            ? "btn-audio pressed"
            : playing
            ? "btn-audio pause"
            : "btn-audio play"
        }
        onClick={() => {
          setStartEx(!startEx);
          toggle();
        }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
      />
    </>
  );
};

export default AudioPlayer;
