export function Orders() {
  return (
    <div className="page">
      <div className="banner thd-notes">
      <h1>ORDERS - SECTION LINKS</h1>
        <div className="hash-links">
            <a className="hash-link" href="#general">ORDERS - GENERAL</a>
            <a className="hash-link" href="#markdowns">ORDERS - MARKDOWNS</a>
            <a className="hash-link" href="#addPartsServices">ORDERS - ADDING PARTS & SERVICES</a>
            <a className="hash-link" href="#canceling">ORDERS - CANCELING</a>
            <a className="hash-link" href="#osofc">ORDERS - OSOFC (OPEN SOLD ORDER FOR CHANGE)</a>
            <a className="hash-link" href="#giftCards">ORDERS - GIFT CARDS</a>
            <a className="hash-link" href="#postDelivery">ORDERS - POST DELIVERY</a>
            <a className="hash-link" href="#returns">ORDERS - RETURNS</a>
        </div>
        {/* GENERAL ORDERS ///////////// */}
        <div id="general" className="thd-notes-section">
          <h1>ORDERS - GENERAL</h1>
          <p>If the Order # starts with:</p>
          <p>&gt; - W - WEBSITE orders.</p>
          <p>&gt; - C - GM or MA orders placed through 'HOME'.</p>
          <p>&gt; - H - STORE SPECIAL'S or GM returns.</p>
          <p>&gt; ** ALL 'MA' WILL START WITH AN 'H'</p>
          <p>&gt; DO NOT create Order Verification cases for authorization failures. These are PAYMENT DELINES.</p>
        </div>

        {/* MARKDOWNS ////////////////// */}
        <div id="markdowns" className="thd-notes-section">
          <h1>ORDERS - MARKDOWNS</h1>
          <h2>&gt; SHOULD ON BE CONSIDERED AS A LAST RESORT, FIRST GOAL IS RESOLVE THE CUSTOMER'S ISSUE.</h2>
          <h2>&gt; WE SHOULD NEVER INITIATE THE CONVERSATION.</h2>
          <h2>&gt; COMPETING PRICE MUST COME FROM COMPARABLE RETAILER.</h2>
          <h2>&gt; MUST BE THE EXACT ITEM. USE PRODUCT MODEL NUMBERS.</h2>
          <p>&gt; PRICE OVERRIDE - If not charged.</p>
          <p>&gt; PRICE MARKDOWN - If already charged.</p>
          <p>&gt; We can do a PRICE OVERRIDE or PRICE MARKDOWN up to $150. Greater amounts require a supervisor.</p>
          <p>&gt; GM markdowns are honored within the return policy, usually 30-90 days.</p>
          <p>&gt; MA markdowns are honored within 30 days of purchase.</p>
          {/* WAYS A CUSTOMER CAN ACCESS THEIR ORDER ////////// */}
          <h1>THREE WAYS A CUSTOMER CAN LOCATE THEIR ORDER</h1>
          <p>&gt; Login to their account. Track order page.</p>
          <p>&gt; Have their order #.</p>
          <p>&gt; Tracking Email.</p>
          <p>&gt; </p>
        </div>

        {/* ADDING PARTS AND SERVICES ////////////////// */}
        <div id="addPartsServices" className="thd-notes-section">
          <h1>ORDERS - ADDING PARTS AND SERVICES</h1>
          <p>&gt; ** If customer asks to 'ADD' a part to their order: ASK IF IT'S ALREADY BEEN DELIVERED.</p>
          <p>&gt; </p>
          <p>&gt; </p>
        </div>

        {/* ORDERS - CANCELING /////////////////// */}
        <div id="canceling" className="thd-notes-section">
          <h1>ORDERS - CANCELING</h1>
          <p>&gt; For MA orders we use the 'ORDER-UP' app.</p>
          <p>&gt; If no cancel button then usually can't be cancelled.</p>
          <p>&gt; NOTE: If there's no ship term in the fulfillment acronym then the item is charged when pulled from shelf.</p>
          <p>&gt; GM REFUNDS - usually take 3-5 business days.</p>
          <p>&gt; GM REFUNDS - If not shipped yet there is no charge.</p>
          <p>&gt; MA REFUNDS - usually take 7-10 business days. These take longer because they have to verify the item is accounted for.</p>
          <p>&gt; MA orders are not cancelable if already signed for. Delivery team will test and check appliance to ensure it works and not damaged. After signing customer has '48 HOURS TO REPORT DAMAGE OR DEFECT'.</p>
          <p>&gt; RGA - Return Goods Authorization</p>
        </div>

        {/* OSOFC (OPEN SOLD ORDER FOR CHANGE) //////////// */}
        <div id="osofc" className="thd-notes-section">
          <h1>OSOFC (OPEN SOLD ORDER FOR CHANGE)</h1>
          <p>&gt; CUSTOMER CAN ADD THE FOLLOWING:</p>
          <p>&gt; Installation Kits</p>
          <p>&gt; Installation Service</p>
          <p>&gt; Haul Away Service</p>
          <p>&gt; Power Cords</p>
          <p>&gt; Hoses</p>
          <p>&gt; Dryer Ducts</p>
          <p>&gt; Ice Lines</p>
          <p>&gt; CUSTOMERS CANNOT ADD:</p>
          <p>&gt; Stacking kits</p>
          <p>&gt; Pedestals</p>
          <p>&gt; Ice Makers</p>
          <p>&gt; Trim Kits</p>
          <p>&gt; Garbage Disposals</p>
          <p>&gt; Additional Appliances</p>
          <p>&gt; </p>
        </div>
        {/* GIFT CARDS ////////////////// */}
        <div id="giftCards" className="thd-notes-section">
          <h1>GIFT CARDS</h1>
          <p>&gt; FOR MA ORDERS:</p>
          <p>&gt; Fastest way is go back to store and get new gift card for refund amount.</p>
          <p>&gt; If customer angry then send them to Resolutions</p>
          <p>&gt; FOR GM ORDERS:</p>
          <p>&gt; ALWAYS OFFER IN-STORE RETURN FIRST</p>
          <p>&gt; Store will credit the original gift card.</p>
          <p>&gt; Can have carrier pick-up return or take to carrier themselves.</p>
          <p>&gt; Once the carrier scans the item the return item process starts.</p>
          <p>&gt; This will trigger an e-giftcard. Card can be processed in a few hours, however, we will QUOTE THEM A 24-HOUR PROCESS TIME.</p>
          <p>&gt; </p>
        </div>

        {/* ORDERS - POST-DELIVERY ////////////////// */}
        <div id="postDelivery" className="thd-notes-section">
          <h1>ORDERS - POST-DELIVERY</h1>
          <p>&gt; RETURN POLICY - usually 90 days from purchase date to return unless noted in 'RETURN POLICY EXCEPTIONS'.</p>
          <p>&gt; NOTE: If purchased with HD credit card they have 365 days for full refund, unless otherwise indicated.</p>
          <p>&gt; Refunds issued back to original form of payment.</p>
          <p>&gt; Bundled items need to be returned with all components for full refund.</p>
          <p>&gt; NON-RETURNABLE ITEMS</p>
          <p>&gt; ==Gift Cards</p>
          <p>&gt; ==Labor, delivery, installation services.</p>
          <p>&gt; ==Paint - if wrong color HD will replace within 30 days if brought back to store.</p>
          <p>&gt; Cut Flower and floral arrangements - we will replace if defective.</p>
          <p>&gt; Utility trailers</p>
          <p>&gt; Third-Party Items</p>
          <p>&gt; Custom Items - Except custom blinds "Guaranteed to fit", these can be exchanged within 15 days of receipt.</p>
          <p>&gt; Generators - must be returned within 30 days. If whole house or stationary then non-returnable.</p>
          <p>&gt; Special Order returns or cancellations are subject to 15% restocking fee.</p>
          <p>&gt; Items with flammable liquids or gases must be returned to store, CANNOT SHIP BACK EVEN IF FLUIDS HAVE BEEN DRAINED.</p>
          <p>&gt; Plants have a 1 year guarantee. If purchased online and notified within 3 days of delivery we will reship free of charge.</p>
          <p>&gt; All 'FURNITURE', 'AREA RUGS', and 'ELECTRONICS (I.E. LAPTOPS, TVS)' have a 30 day return period.</p>
          <p>&gt; </p>
          <p>&gt; </p>
        </div>

        {/* ORDERS - RETURN METHODS ////////////////// */}
        <div id="returns" className="thd-notes-section">
          <h1>ORDERS - RETURN METHODS</h1>
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
          <h2>&gt; PRICE MATCH EXCLUSIONS</h2>
          <p>&gt; No one time only promotions.</p>
          <p>&gt; Third Party items.</p>
          <p>&gt; </p>
        </div>
        {/* NOTES ////////////////// */}
        <div className="thd-notes-section">
          <h1>NOTES</h1>
          <p>&gt; Coupons valid for HD products online will have a category # (i.e. home20, outdoor45, etc.)</p>
          <p>&gt; If coupon is all numbers it's an in-store coupon.</p>
          <p>&gt; Coupons are IN-STORE and ONLINE specific.</p>
          <p>&gt; Customers can use coupons from other Retailers</p>
          <p>&gt; IF YOU DO THIS YOU MUST ADD COUPON IN CHECK-OUT PROCESS AT HD OR OTHER RETAILER.</p>
        </div>
        {/* NOTES ////////////////// */}
        <div className="thd-notes-section">
          <h1>NOTES</h1>
          <p>&gt; </p>
          <p>&gt; </p>
        </div>
        {/* NOTES ////////////////// */}
        <div className="thd-notes-section">
          <h1>NOTES</h1>
          <p>&gt; If can't find receipts in 'HOME' you might have to use 'ESVS' but make sure you take a partner.</p>
          <p>&gt; If adding small item (i.e. hoses, small accessories) just add it and notate in DMP. No need to do in 'ESVS'.</p>
          <p>&gt; STICKER SHOCK - Things like tracktors and large ticket items may appear to be a much lower price, however, once in the cart and hidden fees applied it may be closer or over our price.</p>
          <p>&gt; </p>
        </div>
      </div>
    </div>
  );
}
