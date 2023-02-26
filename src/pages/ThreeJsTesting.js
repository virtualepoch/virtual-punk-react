export function ThreeJsTesting() {
  const style = {
    threeJsTestSection: {
      width: "100%",
      border: "solid white",
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      color: "white",
    },
    header: {
      height: "fit-content",
      gridColumn: "2 / span 5",
      border: "solid aqua",
      borderRadius: "20px",
      fontSize: "clamp(1rem, 0.8214rem + 0.5714vw, 1.25rem)",
      padding: "20px",
    },
    content: {
      height: "fit-content",
      gridColumn: "2 / 8",
      fontSize: "clamp(0.8rem, 0.5857rem + 0.6857vw, 1.1rem)",
      padding: "20px",
    },
    spaceDiv: {
      height: "500vh",
      gridColumn: "1/13",
      border: "dotted aqua",
    },
  };
  return (
    <section className="page">
      <h1 className="page-heading banner">&lt; THREE.JS TESTING &gt;</h1>
      <div style={style.threeJsTestSection}>
        <div style={style.header}>THD GENERAL NOTES</div>
        <div style={style.content}>
          <p>MA - RETURN GOODS AUTHORIZATION REQUEST</p>
          <p>-When to submit this case?</p>
          <p>-If 'Order Up' is not working or does not have the functionality to process a Major Appliance return for any specific reason. DON'T FORGET TO ALSO SUBMIT A 'QUICK PATH' IF THIS OCCURS. KB 11619 & 11433.</p>
          <p>-For BUYERS REMORSE you must contact the VENDOR to see if they will honor a return after purchase.</p>
          <p>???? -- WHAT'S ::: dsc_5820_leadership@homedepot.com</p>
          <p>Home Decorators 1-877-527-0313 option: 8</p>
          <p>==KB 33400 ??== 808-635-1409</p>
          <p>-MA first time issue offer free delivery.</p>
          <p>-If delivery reschedule due to vendor issue there is nothing we can do.</p>
          <p>-MICROWAVES: Still considered an MA item and non-returnable after purchase unless damaged and reported within 48hrs after delivery. SHIPPED VIA UPS 7-10 day delivery. !!!!!TRACKING INFO IS NOT PROVIDED FOR THESE DELIVERIES!!!!!</p>
          <p>-Internet #: Used only for Home Depot.</p>
          <p>-Product or Item #: From Manufacturer</p>
          <p>-Internet # is the easiest to lookup because no letters.</p>
          <p>-Project Color - Behr paint color matcher/demo</p>
          <p>IF 'HOME' IS NOT WORKING:</p>
          <p>-After trying 'HOME' twice, USE the normal website.</p>
          <p>-!!! MUST CHECK-OUT AS A GUEST</p>
          <p>-!!! You will have to ask for their CARD # over phone so less secure and not advised.</p>
          <p>-!!! CANNOT TAKE WRITTEN NOTES DURING A CALL </p>
          <p>-First name basis with customers. </p>
          <p>-PST/Personal/Sick Time removes an occurrence. </p>
          <p>-to lock computer windows key + L </p>
        </div>
        <div style={style.header}>THD GENERAL NOTES</div>
        <div style={style.content}>
          <p>OCCURANCES </p>
          <p>If 8 minutes late it is considered an OCCURANCE. </p>
          <p>FOUR(4) OCCURANCES IS AN EMPLOYMENT REVIEW.</p>
          <p>First 120 day period - over 4 occurances = Employment review </p>
          <p>SURVEYS ARE MOST IMPORTANT</p>
          <p>--3 Questions </p>
          <p>#1- LTSA - Likelihood To Shop Again? </p>
          <p>#2 - CES - Customer Effort Score - How effortless was your experience today? </p>
          <p>#3 - ASAT - Associate Satisfaction Assisted Today - How satisfied were you with the associate who assisted you? </p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div style={style.spaceDiv}></div>
      </div>
    </section>
  );
}
