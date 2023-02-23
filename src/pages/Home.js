import React, { useRef, useEffect } from "react";
import { MainOverlay } from "../components/MainOverlay";
// import { WireBoxUnderlay } from "../components/WireBoxUnderlay";
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
      {/* <WireBoxUnderlay /> */}
      <div className="page">
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
          <div className="thd-script">
            <h1>OCC # 1-877-961-6683</h1>
            <h1>
              <span className="border-number">2</span>- 'My name is Craig and who do I have the pleasure of speaking with?'
            </h1>
            <h1>
              <span className="border-number">3</span>- 'Hi, <span className="border-text">________</span> how can I help you today?' <span className="border-number">4</span>- 'I can surely assist with that.'
            </h1>
            <h1>
              <span className="border-number">5</span>- 'Do you happen to have an order or internet number I can pull up?'
            </h1>
            {/* PROMPTS ///////////////////////// */}
            <h1 className="prompt">&lt; Don't forget to have them VERIFY THREE PIECES OF INFO. before proceeding. &gt;</h1>
            <h1 className="prompt">&lt; If a RETURNING CUSTOMER THANK THEM for being a valued customer. &gt;</h1>
            <h1 className="prompt block-red">
              <span className="border-number">=</span>- 'Thank you for being a valued patron of the Home Depot.'
            </h1>
            <h1 className="prompt">&lt; Ask them how they're doing while you're looking up the order. &gt;</h1>
            <h1 className="prompt block-red">
              <span className="border-number">=</span> Is it okay if I put you on a 3-5 minute hold while I look into this?{" "}
            </h1>
            <h1 className="prompt">ON EXIT</h1>
            <h1>
              <span className="border-number">6</span> 'Today we were able to get that item ordered for you.'
            </h1>
            <h1>
              <span className="border-number">7</span> 'Is there anything else I can assist with?'
            </h1>
            <h1>
              <span className="border-number">8</span> 'Alright, well thanks again for reaching out today.'
            </h1>
            <h1>
              <span className="border-number line-height-lg">9</span> 'Please stay on the line for our quick three question survey, and Enjoy the rest of your day!'
            </h1>
            <h1 className="prompt">'Thanks, Bye.'</h1>
          </div>
          {/* <div className="hero-section-container">
            <div className="hero-section">
              <p className="text">Hi, Welcome to the Home Depot</p>
              <p className="text">
                My name is <span className="word-pop">Craig</span>
              </p>
              <p className="text">Who do I have the pleasure of speaking with?</p>
              <p className="text">Hi John, how can I help you today?</p>
            </div>
          </div> */}
        </div>

        <div className="banner thd-notes">
          {/* CUSTOMER VERIFICATION /////////////////// */}
          <div className="thd-notes-section">
            <h1>FOR VERIFICATION = CUSTOMER MUST PROVIDE AT LEAST 3 OF THE FOLLOWING</h1>
            <h2>NOTE: NEVER GIVE CALLER ANY ACCOUNT INFO UNTIL THEY CAN VERIFY IT'S THEIR ACCOUNT</h2>
            <p>&gt; First & Last Name</p>
            <p>&gt; Full Address</p>
            <p>&gt; Phone Number</p>
            <p>&gt; Email Address</p>
            <p>&gt; Case #</p>
            <p>&gt; Form of Payment -- (if Credit or Debit - the company and LAST FOUR DIGITS)</p>
            <p>&gt; Items on the order</p>
          </div>
          {/* SURVEYS //////////////////////// */}
          <div className="thd-notes-section">
            <h1>Surveys - 3 Questions</h1>
            <p>&gt; #1 - LTSA - Likelihood to Shop Again?</p>
            <p>&gt; #2 - CES - Customer Effort Score? - How Effortless was your experience today?</p>
            <p>&gt; #3 - ASAT - Associate Satisfaction Assisted Today - How satisfied were you with the associate who assisted you?</p>
          </div>

          <h1>Four Pillars of Success</h1>
          <h1>FULFILLMENT</h1>
          <p>&gt; Direct Fulfillment - product comes straight from manufacturer. </p>
          <p>&gt; Warehouse Fulfillment - comes from Home Depot's warehouse.</p>
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
      </div>
    </>
  );
}
