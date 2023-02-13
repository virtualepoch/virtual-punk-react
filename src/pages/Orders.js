export function Orders() {
  return (
    <div className="page">
      <h1 className="page-heading">ORDERS</h1>
      <div className="banner"></div>

      <div className="banner thd-notes">
        {/* HASH LINKS //////////////////// */}
        <h1 className="section-links-text">&lt; SECTION LINKS &gt;</h1>
        <div className="hash-links">
          <a className="hash-link" href="#general">
            GENERAL
          </a>
          <a className="hash-link" href="#customerAccess">
            CUSTOMER ORDER ACCESS
          </a>
          <a className="hash-link" href="#markdowns">
            PRICE MATCHING / MARKDOWNS
          </a>
          <a className="hash-link" href="#damageAllowances">
            DAMAGE ALLOWANCES
          </a>
          <a className="hash-link" href="#addPartsServices">
            ADDING PARTS & SERVICES
          </a>
          <a className="hash-link" href="#canceling">
            CANCELING
          </a>
          <a className="hash-link" href="#osofc">
            OSOFC (OPEN SOLD ORDER FOR CHANGE)
          </a>
          <a className="hash-link" href="#giftCards">
            GIFT CARDS
          </a>
          <a className="hash-link" href="#postDelivery">
            POST DELIVERY
          </a>
          <a className="hash-link" href="#coupons">
            COUPONS
          </a>
          <a className="hash-link" href="#notes">
            NOTES
          </a>
        </div>

        {/* GENERAL ORDERS ///////////// */}
        <div id="general" className="thd-notes-section">
          <h1>&lt; GENERAL &gt;</h1>
          <p>If the Order # starts with:</p>
          <p>&gt; - W - WEBSITE orders.</p>
          <p>&gt; - C - GM or MA orders placed through 'HOME'.</p>
          <p>&gt; - H - STORE SPECIAL'S or GM returns.</p>
          <p>&gt; ** ALL 'MA' WILL START WITH AN 'H'</p>
          <p>&gt; DO NOT create Order Verification cases for authorization failures. These are PAYMENT DECLINES.</p>
        </div>

        {/* MARKDOWNS ////////////////// */}
        <div id="markdowns" className="thd-notes-section">
          <h1>&lt; PRICE MATCHING / MARKDOWNS &gt;</h1>
          <h2>SHOULD ONLY BE CONSIDERED AS A LAST RESORT, FIRST GOAL IS RESOLVE THE CUSTOMER'S ISSUE.</h2>
          <h2>WE SHOULD NEVER INITIATE THE CONVERSATION.</h2>
          <h2>COMPETING PRICE MUST COME FROM COMPARABLE RETAILER.</h2>
          <h2>MUST BE THE EXACT ITEM. USE PRODUCT MODEL NUMBERS.</h2>
          <p>&gt; PRICE OVERRIDE - If not charged.</p>
          <p>&gt; PRICE MARKDOWN - If already charged.</p>
          <h2>&gt; PRICE MATCH / MARKDOWN EXCLUSIONS</h2>
          <p>&gt; No one time only promotions.</p>
          <p>&gt; Third Party items.</p>
          <h2>&gt; We can do a PRICE OVERRIDE or PRICE MARKDOWN up to $150. If over:</h2>
          <p>&gt; $151 - $500 - Supervisor Required</p>
          <p>&gt; $500 - $1000 - Manager Required</p>
          <p>&gt; OVER $1000 - Director Required</p>
          <p>&gt; GM markdowns are honored within the return policy, usually 30-90 days. Complete these in 'HOME'.</p>
          <h2>&gt; MA markdowns are honored within 30 days of purchase.</h2>
          <p>&gt; If PRE-DELIVERY: Must Cancel Order & Place New Order. DO NOT ATTEMPT TO MARKDOWN BECAUSE OUR SYSTEM ONLY ALLOWS ONE CHANGE FOR THESE ORDERS. IF YOU DO THEY WON'T BE ABLE TO ADD THINGS THEY MIGHT NEED (I.E. INSTALL KITS, ETC.).</p>
          <p>&gt; If POST-DELIVERY: Complete in ESVS, Process refund in SPOS & Record in the Markdown Tracking Form.</p>
          <h2>MARKDOWN TRACKING FORMS (POLICY REQUIRES THESE TO BE FILLED OUT)</h2>
          <p>&gt; Agent: LDAP</p>
          <p>&gt; $ Amount of Markdown: Dollar Amount</p>
          <p>&gt; STORE #: ...</p>
          <p>&gt; Markdown Approver: Last Name, First Name</p>
          <h2>&gt; THD WILL NOT OFFER MARKDOWNS FOR THE FOLLOWING REASONS:</h2>
          <p>&gt; Missed time at work</p>
          <p>&gt; NOTE FOR ABOVE: If we dropped the ball (i.e. late delivery) we will offer compensation</p>
          <p>&gt; Contractor / Labor fees</p>
          <p>&gt; Installation fees</p>
          <p>&gt; Property damage</p>
          <p>&gt; Personal Injury</p>
          <h2>WE CANNOT DO MARKDOWNS FOR 'DEFECTIVE' PRODUCTS:</h2>
          <p>&gt; These must be returned due to safety concerns.</p>
          <h2>REASON CODES</h2>
          <p>&gt; 5: Customer Satisfation (CSAT)</p>
          <p>&gt; 33: Post Purchase Competitor or Online Competitor Price Match / Store/Online Discrepancy / Post Purchase Lower Price within 30 days / Competitor or Online Competitor Price Match</p>
          <p>&gt; 45: Damage Allowance / Online Associate Error / Post Promotion - failed orders</p>
          <h2>
            FOR <span className="border-text">STH</span> AND <span className="border-text">BOSS</span> FULFILLMENT
          </h2>
          <p>&gt; We can do price matches for these.</p>
          <h2>
            FOR <span className="border-text">BODFS</span> AND <span className="border-text">BOPIS</span> FULFILLMENT
          </h2>
          <p>&gt; Only stores can do price matches.</p>
          <h2>FOR SHIPPING DISCOUNTS</h2>
          <p>&gt; Can only be made for full shipping price. NOTE: Very rarely you will have to do this. Usually only happens if doing a re-order that had free shipping and it's trying to charge shipping.</p>
        </div>

        {/* WAYS A CUSTOMER CAN ACCESS THEIR ORDER ////////// */}
        <div id="customerAccess" className="thd-notes-section">
          <h1>&lt; THREE WAYS A CUSTOMER CAN LOCATE THEIR ORDER &gt;</h1>
          <p>&gt; Login to their account. Track order page.</p>
          <p>&gt; Have their order #.</p>
          <p>&gt; Tracking Email.</p>
        </div>

        {/* DAMAGE ALLOWANCES ////////////////// */}
        <div id="damageAllowances" className="thd-notes-section">
          <h1>&lt; DAMAGE ALLOWANCES &gt;</h1>
          <h2>OCC Owns ALL Major Appliance damage allowance calls</h2>
          <p>&gt; If the driver or customer is calling in within 48 hours of delivery, PLEASE MAKE SURE TO OWN THE CALL.</p>
          <p>&gt; ONLY USE REASON CODE 45 FOR DAMAGE ALLOWANCES</p>
          <p>&gt; Markdowns above 25% will be declined by the vendor.</p>
          <h2>GM ORDERS</h2>
          <p>&gt; Start off with a lower amount (i.e. 5% - 10% off).</p>
          <p>&gt; Gauge the customers response then proceed.</p>
          <p>&gt; If they counter offer you should try to meet in the middle.</p>
          <p>&gt; Usually you will propose 15%-20% off.</p>
          <p>&gt; Always propose a dollar amount because it's tangible.</p>
          <p>&gt; BE SURE TO ALSO OFFER RETURN.</p>
          <p>&gt; ASK THEM: "Does this sound good to you?"</p>
          <h2>&gt; IF THE CUSTOMER HAS NO HISTORY OF ABUSE OR TRYING TO GET THINGS FOR FREE:</h2>
          <p>&gt; TRY TO FIGURE OUT A WAY TO SAY 'YES'.</p>
          <p>&gt; If item hasn't been delivered yet you can negotiate a MARKDOWN, however, you will just put this in the call notes then they will have to call back after delivery to get the MARKDOWN.</p>
          <p>&gt; </p>
        </div>

        {/* ADDING PARTS AND SERVICES ////////////////// */}
        <div id="addPartsServices" className="thd-notes-section">
          <h1>&lt; ADDING PARTS AND SERVICES &gt;</h1>
          <p>&gt; ** If customer asks to 'ADD' a part to their order: ASK IF IT'S ALREADY BEEN DELIVERED.</p>
          <p>&gt; </p>
          <p>&gt; </p>
        </div>

        {/* ORDERS - CANCELING /////////////////// */}
        <div id="canceling" className="thd-notes-section">
          <h1>&lt; CANCELING &gt;</h1>
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
          <h1>&lt; OSOFC (OPEN SOLD ORDER FOR CHANGE) &gt;</h1>
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
          <h1>&lt; GIFT CARDS &gt;</h1>
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
          <h1>&lt; POST-DELIVERY &gt;</h1>
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

        {/* ORDERS - COUPONS ////////////////// */}
        <div id="coupons" className="thd-notes-section">
          <h1>&lt; COUPONS &gt;</h1>
          <p>&gt; Coupons valid for HD products online will have a category # (i.e. home20, outdoor45, etc.)</p>
          <p>&gt; If coupon is all numbers it's an in-store coupon.</p>
          <p>&gt; Coupons are IN-STORE and ONLINE specific.</p>
          <p>&gt; Customers can use coupons from other Retailers</p>
          <p>&gt; IF YOU DO THIS YOU MUST ADD COUPON IN CHECK-OUT PROCESS AT HD OR OTHER RETAILER.</p>
        </div>

        {/* NOTES ////////////////// */}
        <div id="notes" className="thd-notes-section">
          <h1>NOTES</h1>
          <p>&gt; If can't find receipts in 'HOME' you might have to use 'ESVS' but make sure you take a partner.</p>
          <p>&gt; If adding small item (i.e. hoses, small accessories) just add it and notate in DMP. No need to do in 'ESVS'.</p>
          <p>&gt; STICKER SHOCK - Things like tracktors and large ticket items may appear to be a much lower price, however, once in the cart and hidden fees applied it may be closer or over our price.</p>
          <p>&gt; </p>
        </div>

        {/* NOTES ////////////////// */}
        <div className="thd-notes-section">
          <h1>NOTES</h1>
          <p>&gt; </p>
        </div>
        <span className="border-text"></span>
      </div>
    </div>
  );
}
