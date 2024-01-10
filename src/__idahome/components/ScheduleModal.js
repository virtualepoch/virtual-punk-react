import { useState } from "react";

export const ScheduleModal = () => {
  const [scheduleOpen, setScheduleOpen] = useState(false);

  console.log(scheduleOpen);
  return (
    <div
      className={scheduleOpen ? "link-schedule open" : "link-schedule"}
      onClick={() => setScheduleOpen(!scheduleOpen)}
    >
      <h2 className="header">schedule</h2>
      <button
        className="btn-close-schedule"
        onClick={() => setScheduleOpen(!scheduleOpen)}
      />
      <button className="btn-call" />
      <button className="btn-text" />
      <button className="btn-email" />
    </div>
  );
};
