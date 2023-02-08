import "../pages/main-content.css";

export function General() {
  return (
    <section className="page">
      <h1 className="page-heading">&lt; GENERAL &gt;</h1>
      <div className="banner thd-notes">
        <div className="hash-links">
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
