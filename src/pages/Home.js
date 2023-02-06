import React, { useRef } from "react";
import { MainOverlay } from "../components/MainOverlay";
import "../pages/main-content.css";

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

  window.onscroll = function () {
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
  };

  return (
    <>
      <MainOverlay />
      <section className="page">
        <div className="heading">
          <div className="hero-section-container">
            <div className="hero-section">
              <p className="text">Hi, Welcome to the Home Depot</p>
              <p className="text">
                My name is <span className="word-pop">Craig</span>
              </p>
              <p className="text">Who do I have the pleasure of speaking with?</p>
              <p className="text">
              Hi John, how can I help you today?
              </p>
            </div>
          </div>
        </div>

        <div className="banner banner-1"></div>

        <div className="banner thd-notes">
          <h1>Surveys - 3 Questions</h1>
          <p>&gt; #1 - LTSA - Likelihood to Shop Again?</p>
          <p>&gt; #2 - CES - Customer Effort Score? - How Effortless was your experience today?</p>
          <p>&gt; #3 - ASAT - Associate Satisfaction Assisted Today - How satisfied were you with the associate who assisted you?</p>

          <h1>Four Pillars of Success</h1>
          <h1>FULFILLMENT</h1>
          <p>&gt; Direct Fulfillment - product comes straight from manufacturer. </p>
          <p>&gt; Warehouse Fulfillment - comes from Home Depot's warehouse.</p>
          <h1>FOR VERIFICATION = CUSTOMER MUST PROVIDE AT LEAST 3 OF THE FOLLOWING</h1>
          <p>&gt; NOTE: NEVER GIVE CALLER ANY ACCOUNT INFO UNTIL THEY CAN VERIFY IT'S THEIR ACCOUNT</p>
          <p>&gt; First & Last Name</p>
          <p>&gt; Full Address</p>
          <p>&gt; Phone Number</p>
          <p>&gt; Email Address</p>
          <p>&gt; Case #</p>
          <p>&gt; Form of Payment -- (if Credit or Debit - the company and LAST FOUR DIGITS)</p>
          <p>&gt; Items on the order</p>
          <p>&gt; </p>
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

        <section className="content-container color-bg" ref={contentContainer2}>
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
      </section>
    </>
  );
}
