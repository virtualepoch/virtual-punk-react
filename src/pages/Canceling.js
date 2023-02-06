import React, { useRef } from "react";
import { MainOverlay } from "../components/MainOverlay";
import "../pages/main-content.css";

export function Canceling() {
  return (
    <>
      <MainOverlay />
      <section className="page">
        <div className="banner thd-notes">
          <p>&gt; </p>
          {/* AMPLIFY ////////////////////////////// */}
          <h1>Amplify</h1>
          <p>&gt; THIS IS WHERE WE SEE OUR STATS AND ACKNOWLEDGE SUPERVISOR MESSAGES.</p>
          {/* CALL QUEUES ///////////////////////// */}
          <h1>CALL QUEUES</h1>
          <p>&gt; GM New Orders</p>
          <p>&gt; MA New Orders</p>
          <p>&gt; GM Existing Orders</p>
          <p>&gt; MA Existing Orders</p>
          <p>&gt; </p>
        </div>

        <div className="banner"></div>
      </section>
    </>
  );
}
