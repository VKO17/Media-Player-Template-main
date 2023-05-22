import React from "react";

function ProgressBar({ currentTime = 0, duration = 0 }) {
  const calculateProgress = () => {
    if (duration === 0) return 0;
    return (currentTime / duration) * 100;
  };

  const formatTime = (time) => {
    if (isNaN(time)) {
      return "0:00";
    }
  
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };
  
  return (
    <div className="bar-under">
      <div className="bar-upper" style={{ width: `${calculateProgress()}%` }}></div>
      <div className="time-song">
        <span className="duration-time">{formatTime(currentTime)}</span>
        <span className="maxDuration-time">{formatTime(duration)}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
