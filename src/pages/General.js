import "../pages/main-content.css";
import "../pages/general.css";

export function General() {
  return (
    <section className="page">
      <h1 className="page-heading">&lt; GENERAL &gt;</h1>
      <div className="banner thd-notes">
        <div className="hash-links">
          <a className="hash-link" href="#maTimeline">
            MA TIMELINE
          </a>
          <a className="hash-link" href="#amplify">
            AMPLIFY
          </a>
          <a className="hash-link" href="#destroyForCredit">
            DESTROY FOR CREDIT
          </a>
          <a className="hash-link" href="#cases">
            CASES
          </a>
          <a className="hash-link" href="#notes">
            NOTES
          </a>
        </div>

        {/* AMPLIFY ////////////////////////////// */}
        <div id="maTimeline" className="thd-notes-section">
          <h1>MAJOR APPLIANCE TIMELINE</h1>
          <div className="flex-box-container">
            <div className="flex-box">
              <h2>#1- Order Placed</h2>
              <p>Up to 24 hrs. for PO to populate in Depot Direct/DMP</p>
              <ul>
                <li>Charged immediately</li>
                <li>1,2,3 Notes Created</li>
                <li>ESVS system payment</li>
              </ul>
            </div>
            <div className="flex-box">
              <h2>#2- PO populates in system</h2>
              <p>Delivery is scheduled 3-90 days out</p>
              <ul>
                <li>Vendors, store associates, Delivery agents and the OCC access to DMP.</li>
              </ul>
            </div>
            <div className="flex-box">
              <h2>#3- PO/Order shipped</h2>
              <p>48-72 hours for OEM/Vendor to ship to delivery agent</p>
              <ul>
                <li>In route to delivery agent</li>
                <li>Can no longer move delivery date closer</li>
              </ul>
            </div>
            <div className="flex-box">
              <h2>#4- Pre-Delivery with DA</h2>
              <p>24 hours prior to delivery date, loaded on truck</p>
              <ul>
                <li>Pre-delivery call 7pm local time night prior</li>
                <li>Delivery route created</li>
                <li>Can still change delivery date further out in HOME, up to 30 days</li>
              </ul>
            </div>
            <div className="flex-box">
              <h2>#5- Delivery Date</h2>
              <p>Delivery date up to 48 hr. post delivery window</p>
              <ul>
                <li>Delivery date can no longer be changed in HOME</li>
                <li>Customer must inspect appliances for any damages or defects.</li>
                <li>If any, they must refuse the item and a new unit will be sent</li>
                <li>If customer signs, and notices damages/defects, they must report them within 48 hour window.</li>
                <li>If customer calls on a Sunday notate the order, OEM is closed</li>
              </ul>
            </div>
            <div className="flex-box">
              <h2>#6- Post-Delivery</h2>
              <p>Post 48 hr. window; Partner with Store Manager</p>
            </div>
          </div>
        </div>

        {/* AMPLIFY ////////////////////////////// */}
        <div id="amplify" className="thd-notes-section">
          <h1>Amplify</h1>
          <p>&gt; THIS IS WHERE WE SEE OUR STATS AND ACKNOWLEDGE SUPERVISOR MESSAGES.</p>
        </div>

        {/* DESTROY FOR CREDIT ///////////////////////// */}
        <div id="destroyForCredit" className="thd-notes-section">
          <h1>DESTROY FOR CREDIT</h1>
          <p>&gt; We will never complete a destroy for credit. The system will tell you if the item needs to be returned or not.</p>
        </div>

        {/* CASES ///////////////////////// */}
        <div id="cases" className="thd-notes-section">
          <h1>CASES</h1>
          <h2>WHAT ARE CASES?</h2>
          <p>&gt; The end result of a process that didn't work.</p>
          <p>&gt; i.e. when a customer wants to cancel an MA in ORDER-UP but it's not working.</p>
          <p>&gt; Order processing hasn't moved for a few days.</p>
          <h2>YOU WILL CREATE A CASE FOR THESE SITUATIONS</h2>
          <p>&gt; After creating the customer will receive an email indicating the case has been submitted.</p>
          <p>&gt; They will then receive another email/call in a few days with follow up.</p>
          <h2>MOST COMMON CASE TYPES</h2>
          <h2>PO Sent to Vendor Cases</h2>
          <p>&gt; Happens when the order gets stuck in the above status.</p>
          <h2>Item Pick-Up Case</h2>
          <p>&gt; Usually carrier pickup that didn't occur.</p>
          <p>&gt; Often happens when the package/item is too big.</p>
          <p>&gt; UPS (our primary carrier) will not pick up an unboxed item.</p>
          <p>&gt; We may have to send a different carrier who will package the item.</p>
          <h2>Order ETA Case</h2>
          <p>&gt; If the item should have been delivered days ago and we can't find it.</p>
          <p>&gt; Res (Resolutions) asks us to submit cases for these so they can track the item down.</p>
          <h2>Order Verification Case</h2>
          <p>&gt; If you attempt to place an order multiple times with no success you may get locked out.</p>
          <p>&gt; If this happens you may have to submit a case.</p>
          <h2>Send Gift Card Cases</h2>
          <p>&gt; These are Rare.</p>
          <p>&gt; Gift cards should be sent in real time.</p>
          <p>&gt; If Supe or above is busy they may ask you to submit a gift card case.</p>
          <p>&gt; </p>
        </div>
        {/* NOTES ///////////////////////// */}
        <div id="notes" className="thd-notes-section">
          <h1>NOTES</h1>
          <h2>CALL QUEUES</h2>
          <p>&gt; GM New Orders</p>
          <p>&gt; MA New Orders</p>
          <p>&gt; GM Existing Orders</p>
          <p>&gt; MA Existing Orders</p>
        </div>
      </div>

      <div className="banner"></div>
    </section>
  );
}
