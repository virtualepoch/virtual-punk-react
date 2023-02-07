import React, { useRef } from "react";
import { MainOverlay } from "../components/MainOverlay";
import "../pages/main-content.css";

export function OrdersTwo() {
  return (
    <>
      <MainOverlay />
      <section className="page">
        <div className="banner thd-notes">
          <h1>ORDERS 2 - SECTION LINKS</h1>
          <div className="hash-links">
            <a className="hash-link" href="#lifecycle">
              LIFECYCLE OF AN ORDER
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
        </div>
        <div className="banner thd-notes">
          <h1>NEW NOTES</h1>
          <h2>NEW NOTES</h2>
          <p>&gt; </p>
          <p>&gt; </p>
        </div>

        <div className="banner"></div>
      </section>
    </>
  );
}
