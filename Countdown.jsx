import { useEffect, useState } from "react";

export default function Countdown() {
  const target = new Date();
  target.setHours(target.getHours() + 48);

  const calculate = () => {
    const diff = target - new Date();

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">

      <div className="time-box">
        <span>{time.days}</span>
        <small>Days</small>
      </div>

      <div className="time-box">
        <span>{time.hours}</span>
        <small>Hours</small>
      </div>

      <div className="time-box">
        <span>{time.minutes}</span>
        <small>Minutes</small>
      </div>

      <div className="time-box">
        <span>{time.seconds}</span>
        <small>Seconds</small>
      </div>

    </div>
  );
}