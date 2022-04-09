import React, { useEffect, useState } from "react";
import { getRemainingTimeUntilMsTimestamp } from "./remainingTime";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};
const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }
  return (
    <div className="countDownTimer">
      <div className="name_time_wrap">
        <span className="time_name">Day</span>
        <span className="time_name">Hour</span>
        <span className="time_name">Min</span>
        <span className="time_name">Sec</span>
      </div>
      <div className="time_field">
        <span className="restTimes">{remainingTime.days}</span>
        <span className="restTimes">{remainingTime.hours}</span>
        <span className="restTimes">{remainingTime.minutes}</span>
        <span className="restTimes">{remainingTime.seconds}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
