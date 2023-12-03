import { FooterLink } from "./FooterLink";

export function FooterLinks({
  single,
  // DECLARING 'SINGLE' RETURNS ONLY ONE LINK CENTERED
  backTo,
  backName,
  forwardTo,
  forwardName,
  onClick,
}) {
  return (
    <div className="footer-link-container">
      {/* LEFT / BACK LINK ////////////////////////////////////////// */}
      {single ? <></> : <FooterLink side="left" to={backTo} name={backName} />}

      {/* CENTER ICONS //////////////////////// */}
      {single ? (
        <></>
      ) : (
        <>
          <div className="center-icon"></div>
          <div className="center-icon-2">
            <div className="bar"></div>
            <div className="bar center"></div>
            <div className="bar bottom"></div>
          </div>
        </>
      )}

      {single ? (
        /* CENTER LINK ////////////////////////////////////////// */
        <FooterLink
          side="center"
          to={forwardTo}
          name={forwardName}
          onClick={onClick}
        />
      ) : (
        /* RIGHT / FORWARD LINK ////////////////////////////////////////// */
        <FooterLink side="right" to={forwardTo} name={forwardName} />
      )}
    </div>
  );
}
