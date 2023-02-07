import { MainOverlay } from "../components/MainOverlay";
import "../pages/main-content.css";

export function General() {
  return (
    <>
      <MainOverlay />
      <section className="page">
        <div className="banner thd-notes">
          {/* AMPLIFY ////////////////////////////// */}
          <h1>Amplify</h1>
          <p>&gt; THIS IS WHERE WE SEE OUR STATS AND ACKNOWLEDGE SUPERVISOR MESSAGES.</p>
          {/* CALL QUEUES ///////////////////////// */}
          <h1>CALL QUEUES</h1>
          <p>&gt; GM New Orders</p>
          <p>&gt; MA New Orders</p>
          <p>&gt; GM Existing Orders</p>
          <p>&gt; MA Existing Orders</p>
          <h2>DESTROY FOR CREDIT</h2>
          <p>&gt; We will never complete a destroy for credit. The system will tell you if the item needs to be returned or not.</p>
        </div>

        <div className="banner"></div>
      </section>
    </>
  );
}
