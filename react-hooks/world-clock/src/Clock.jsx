import React from "react";

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ offset, location }) => {
  const [date, setDate] = React.useState(getTimeWithOffset(offset));
  const timerId = React.useRef(null);
  const tick = () => setDate(getTimeWithOffset(offset));

  React.useEffect(() => {
    timerId.current = setInterval(tick, 1000);
    
    return () => {
      clearInterval(timerId.current);
    }
  })
  
  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</div>
    </div>
  );
}

export default Clock;
