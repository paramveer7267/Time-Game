import { useRef, useState } from "react";
import Result from "./Result";

const TimeChallenge = ({ title, targetTime }) => {
  const [timerR, setTimerR] = useState(targetTime * 1000);

  const timer = useRef();
  const dialog = useRef();

  const timeA = timerR > 0 && timerR < targetTime * 1000;

  if (timerR <= 0) {
    clearInterval(timer.current);
    dialog.current.showModal();
  }

  function handleReset() {
    setTimerR(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimerR((prev) => prev - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.showModal();
    clearInterval(timer.current);
  }

  return (
    <>
      <Result
        ref={dialog}
        targetTime={targetTime}
        remainT={timerR}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeA ? handleStop : handleStart}>
            {timeA ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timeA ? "active" : undefined}>
          {timeA ? "Time is running" : "Timer Inactive"}
        </p>
      </section>
    </>
  );
};

export default TimeChallenge;
