export function AddressChange() {
  return (
    <section className="page">
      <h1 className="page-heading">&lt; Address Change (11431) &gt;</h1>
      <div className="banner thd-notes thd-notes-section">
        <h1>GM Address Change by Fulfillment</h1>
        <p>&gt; General Reminder: Leave detailed notes in all systems accessed during the interaction.</p>
        <p>&gt; Notes submitted in Salesforce (CRM) will be updated into HOME.</p>
        <p>&gt; Notes will NOT update from HOME to Salesforce (CRM).</p>
        <h1>Ship to Home and STH Via MDO</h1>
        <p>&gt; For NEW orders Cancel and Place new order with correct address.</p>
        <h2>&gt; For PO Sent to Vendor</h2>
        <p>&gt; VDF Item - Attempt to cancel in HOME. -Advise customer this is not a guarantee.</p>
        <p>&gt; House Item - No changes can be made at this time. Customer will have options once order ships.</p>
        <h2>For Shipped</h2>
        <p>&gt; Parcel - Advise customer to contact UPS/FedEx to attempt to hold package at location for pickup.</p>
        <p>&gt; If customer refuses to contact the carrier, advise them to dispute with their financial institution.</p>
        <p>&gt; For Ontrac deliveries, advise them to dipsute with their financial institution.</p>
        <p>&gt; Freight - Create Address Change case</p>
        <p>&gt; For minor address change, resolutions will attempt to correct the address.</p>
        <p>&gt; For major address change, resolutions will attempt to cancel the delivery.</p>
        <p>&gt; Additionally, the customer may have the option of refusing the delivery if the carrier calls to schedule appointment.</p>
        <p>&gt; Delivered to Wrong Address - Advise customer to dispute with their financial institution.</p>
        <h2>BOSS</h2>
        <p>&gt; New Orders - Cancel and place order with correct address</p>
        <p>&gt; If PO Sent to Vendor</p>
        <p>&gt; VDF Item - Attempt to cancel in HOME. - Advise customer this is not a guarantee.</p>
        <p>&gt; House Item - No changes can be made at this time. Customer will have options once order ships.</p>
        <p>&gt; If Shipped - Cancel and place order with correct address</p>
        <h2>BOPIS</h2>
        <p>&gt; Any status cancel and place order with correct address.</p>
        <h2>BODFS</h2>
        <p>&gt; Scheduled - Cancel and place order with correct address.</p>
        <p>&gt; Out for Delivery - Warm transfer to store. They will alert delivery drivers.</p>
        <p>&gt; Delivered to wrong address - Advise customer to dispute with financial institution.</p>
        <h2>Local Box Truck (LBD) Via MDO</h2>
        <p>&gt; Scheduled - Navigate to Delivery Address in Order Up and click EDIT. If section only has VIEW option it cannot be updated.</p>
      </div>
    </section>
  );
}
