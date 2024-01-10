import { useState } from "react";

export const ScheduleModal = () => {
  const [schedule, setSchedule] = useState(false);

  console.log(schedule);
  return (
    <div
      className={schedule ? "link-schedule open" : "link-schedule"}
      onClick={() => setSchedule(true)}
    >
      <h2 className="header">schedule</h2>
      <button
        className="btn-close-schedule"
        onClick={() => setSchedule(false)}
      />
      <button className="btn-call" />
      <button className="btn-text" />
      <button className="btn-email" />
    </div>
  );
};
