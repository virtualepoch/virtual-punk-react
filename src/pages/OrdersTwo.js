import "../pages/main-content.css";

export function OrdersTwo() {
  return (
    <section className="page">
      <h1 className="page-heading">ORDERS 2</h1>
      <div className="banner thd-notes">
        {/* HASH LINKS ////////////////////////////////// */}
        <h1>&lt; SECTION LINKS &gt;</h1>
        <div className="hash-links">
          <a className="hash-link" href="#lifecycle">
            LIFECYCLE OF AN ORDER
          </a>
          <a className="hash-link" href="#returnMethods">
            RETURN METHODS
          </a>
          <a className="hash-link" href="#maOrders">
            MA RETURNS
          </a>
        </div>

        {/* LIFECYCLE OF AN ORDER ///////////// */}
        <div id="lifecycle" className="thd-notes-section">
          <h1>LIFECYCLE OF AN ORDER</h1>
          <h2>STH (SHIP TO HOME)</h2>
          <p>&gt; Warehouse inventory shipping directly to the customer.</p>
          <p>&gt; 2 types of warehouses</p>
          <p>&gt; &gt; &gt; VDF - VENDOR DIRECT FULFILLMENT / In rare occasions can partner with for order assistance.</p>
          <p>&gt; &gt; &gt; In "HOME" / HD Link -- VDF shows up as CHUB (COMMERCE HUB) **Will be important when tracking a package.</p>
          <p>&gt; &gt; &gt; DFC - DIRECT FULFILLMENT CENTER / The manufacturer sends us their product in bulk then it's stored in a HD Warehouses or fulfillment centers.</p>
          <p>&gt; &gt; &gt; In "HOME" / HD Link -- DFC shows up as YOW (YOUR OTHER WAREHOUSE).</p>
          <p>&gt; &gt; &gt; **There is no contact with the warehouse.</p>
          <p>&gt; Authorization - if the card doesn't process the order won't process.</p>
          <p>&gt; PO - PURCHASE ORDER - Created when the order info reaches the manufacturer.</p>
          <p>&gt; From placing the order to PO status takes approx. 45 mins.</p>
          <p>&gt; Once an order goes to PO status cancellations are not guaranteed.</p>
          <p>&gt; Processing days are listed in 'HOME' if you search 'DAYS'.</p>
          <p>&gt; Once processing is done / ship status will begin and they will receive an email / card will be charged.</p>
          <p>&gt; UPS - for parcels / under 150 lbs.</p>
          <p>&gt; Freight Carrier / over 150 lbs.</p>
          <p>&gt; WE NEVER CALL CARRIERS / ONLY RESOLUTIONS WILL CALL THEM.</p>
          <p>&gt; CUSTOMERS MUST CALL CARRIERS THEMSELVES AFTER SHIPMENT.</p>
          <p>&gt; </p>
        </div>
        {/* ORDERS - RETURN METHODS ////////////////// */}
        <div id="returnMethods" className="thd-notes-section">
          <h1>RETURN METHODS</h1>
          <h2>RETURN TO STORE: VALUE</h2>
          <p>&gt; Convenient - Return to any local store.</p>
          <p>&gt; Timely - Credit or refund issued at time of return.</p>
          <p>&gt; Value - No return shipping charges.</p>
          <h2>&gt; TO RETURN TO STORE THEY NEED:</h2>
          <p>&gt; Copy of original receipt or bar coded shipping confirmation email. (IF NO RECEIPT THEY ONLY GET AN IN-STORE GIFT CARD)</p>
          <p>&gt; Credit Card used to make the purchase.</p>
          <p>&gt; Valid license or ID card.</p>
          <p>&gt; </p>
          <h2>&gt; RETURN BY MAIL: VALUE</h2>
          <p>&gt; Easy - Request a shipping label online and receive in an email within 24 hours to print and attach.</p>
          <p>&gt; Convenient - Return your items to nearest UPS store/drop-box.</p>
          <p>&gt; Timely - Credit or refund issued 3-5 business days from time item is picked up.</p>
          <p>&gt; No return shipping charges.</p>
          <p>&gt; HAZARDOUS MATERIALS CANNOT BE RETURNED BY MAIL.</p>
          <p>&gt; </p>
          <h2>&gt; RETURN BY CARRIER</h2>
          <p>&gt; Exceptions:</p>
          <p>&gt; No orders under $25 value.</p>
          <p>&gt; No glass, light bulbs, or mirrors.</p>
          <p>&gt; No paint, stains, or other liquids, THESE ARE CONSIDERED HAZARDOUS.</p>
        </div>

        {/* MA ORDERS ///////////////////////// */}
        <div id="maOrders" className="thd-notes-section">
          {/* RETURNS CONTINUED//////////////////////////////// */}
          <h1>MA (MAJOR APPLIANCE) ORDERS</h1>
          <h2>MA RETURNS</h2>
          <p>&gt; First Question to Ask: WHY RETURNING?</p>
          <p>&gt; "For documentation purposes can I ask why you want to return the item?" </p>
          <p>&gt; --No need to return if we can MARKDOWN.</p>
          <p>&gt; --No need to return if we can compensate.</p>
          <h2>&gt; RETURN OPTIONS:</h2>
          <p>&gt; --Return to store.</p>
          <p>&gt; --Carrier pickup.</p>
          <h2>&gt; If item damaged and within 48 hours of delivery:</h2>
          <p>&gt; Confirm damage allowance.</p>
          <p>&gt; Replace or return.</p>
          <h2>&gt; If item damaged and more than 48 hours after delivery:</h2>
          <p>&gt; Customer will have to partner with the store to discuss available options.</p>
          <p>&gt; You may have to call: Ask for manager and ask about available options.</p>
          <h2>&gt; If item defective and within 48 hours of delivery:</h2>
          <p>&gt; Schedule a service call</p>
          <p>&gt; Replace or Return</p>
          <h2>&gt; If item defective and more than 48 hours after delivery:</h2>
          <p>&gt; Customer or you will have to contact store for available options.</p>
          <h2>&gt; BUYERS REMORSE</h2>
          <p>&gt; We don't accept returns for buyer's remorse. IF CUSTOMER GIVES PUSH BACK: attempt to call the store and speak with the store manager about possibly accepting the return.</p>
          <p>
            &gt; WE ARE PILOTING A NEW POLICY: IF THEY WANT TO RETURN TO STORE IT IS POSSIBLE BUT WILL INCUR A <span className="border-text">15% RESTOCKING FEE</span>.
          </p>
          <h2>REPLACING AN APPLIANCE</h2>
          <p>&gt; We can replace within 48 hrs of delivery.</p>
          <p>&gt; FIRST, we will contact the vendor.</p>
          <p>&gt; </p>
        </div>

        {/* NEW NOTES //////////////////// */}
        <div className="thd-notes-section">
          <h1>NEW NOTES</h1>
          <h2>NEW NOTES</h2>
          <p>&gt; NEW NOTE</p>
          <p>&gt; </p>
        </div>
      </div>

      <div className="banner"></div>
    </section>
  );
}
