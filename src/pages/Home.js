import React, { useRef, useEffect } from "react";
import { MainOverlay } from "../components/MainOverlay";

export function Home() {
  // ON VISIBILITY CHANGE FUNCTIONS ////////////////////////////////
  function isInViewPort(element) {
    const innerHeightRatio = 0.8;

    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight * innerHeightRatio || document.documentElement.clientHeight * innerHeightRatio);
    // && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }
  const contentContainer1 = useRef(null);
  const contentContainer2 = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (isInViewPort(contentContainer1.current)) {
        contentContainer1.current.classList.add("open");
      } else {
        contentContainer1.current.classList.remove("open");
      }

      if (isInViewPort(contentContainer2.current)) {
        contentContainer2.current.classList.add("open");
      } else {
        contentContainer2.current.classList.remove("open");
      }

      // for (let i = 0; i < contentContainer.current.length; i++) {
      //   if (isInViewPort(contentContainer.current[i])) {
      //     contentContainer.current[i].classList.add("open");
      //   } else if (!isInViewPort(contentContainer.current[i])) {
      //     contentContainer.current[i].classList.remove("open");
      //   }
      // }
    });
  });

  return (
    <>
      <MainOverlay />
      {/* <div className="background-test"></div> */}
      {/* <WireBoxUnderlay /> */}
      <>
        <div className="heading">
          <div class="hero-section-container">
            <div class="hero-section">
              <p class="text">Customizable Themes</p>
              <p class="text">
                To make your content <span class="word-pop">POP!</span>
              </p>
              <p class="text">
                Check out our other themes at{" "}
                <a class="text-link" href="/">
                  VirtualEpoch.com
                </a>
              </p>
              <p class="text">
                or click <span class="text-link button-open-contact-overlay">contact</span> to inquire.
              </p>
            </div>
          </div>
        </div>

        <section className="content-container color-bg" ref={contentContainer1}>
          <div className="content-row row-1">
            <div className="column">
              <h2 className="content-heading">All Themes are Responsive</h2>
              <p className="content-content">Everything will look great and function properly on any device.</p>
            </div>
            <div className="column">
              <div className="responsive-project">
                <div className="responsive-computer">
                  <div className="responsive-image"></div>
                  <div className="responsive-phone"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="banner"></div>

        <section className="content-container transparent-bg" ref={contentContainer2}>
          <div className="content-row test">
            <div className="column">
              <h2 className="content-heading test">All Themes are Responsive</h2>
              <p className="content-content test">Everything will look great and function properly on any device.</p>
            </div>
            <div className="column">
              <div className="responsive-project test">
                <div className="responsive-computer">
                  <div className="responsive-image"></div>
                  <div className="responsive-phone"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="banner"></div>
      </>
    </>
  );
}
