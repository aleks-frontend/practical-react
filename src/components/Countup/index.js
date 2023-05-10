import CountUp, { useCountUp } from "react-countup";

const Countup = () => {
  // const { reset, update } = useCountUp({
  //     duration: 4,
  //     end: 1000
  // })
  const { start, pauseResume, reset, update } = useCountUp({
    ref: "counter",
    end: 100,
    duration: 5,
    startOnMount: false,
  });
  return (
    <div>
      <div id="counter"></div>
      <div>
        <button onClick={start}>start</button>
        <button onClick={pauseResume}>pauseResume</button>
        <button onClick={reset}>reset</button>
        <button onClick={() => update(20)}>update</button>
        
      </div>
      {/* <h1 ref={countUpRef}></h1> */}
      <CountUp end={1000} duration={2} prefix="$" decimals={2} />
    </div>
  );
};

export default Countup;
