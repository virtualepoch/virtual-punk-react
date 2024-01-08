import { useState } from "react";

export const BtnFullScreen = () => {
  const [fullscreen, setFullscreen] = useState(false);
  return (
    <button
      className={fullscreen ? "btn-fullscreen clicked" : "btn-fullscreen"}
      onClick={() => {
        // toggle fullscreen
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          document.documentElement.requestFullscreen();
        }
        setFullscreen(!fullscreen);
      }}
    />
  );
};
