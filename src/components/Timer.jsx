import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [step, setstep] = useState(1);

  let [date, setDate] = useState(new Date());
  function decStep() {
    setstep((s) => s - 1);
    let d = count * 24 * 60 * 60 * 1000 * step;
    let time = new Date().getTime() - d;
    setDate(new Date(time));
  }
  function incStep() {
    setstep((s) => s + 1);

    // console.log(step);
    let d = count * 24 * 60 * 60 * 1000 * step;

    let time = new Date().getTime() + d;
    setDate(new Date(time));
  }
  function incCount() {
    setCount((c) => c + 1);

    let d = count * 24 * 60 * 60 * 1000 * step;
    let time = new Date().getTime() + d;
    setDate(new Date(time));
  }
  function decCount() {
    setCount((c) => c - 1);
    let d = count * 24 * 60 * 60 * 1000 * step;
    let time = new Date().getTime() - d;
    setDate(new Date(time));
  }
  return (
    <div>
      <button onClick={decStep}>-</button> {step}step
      <button onClick={incStep}>+</button>
      <hr />
      <button onClick={decCount}>-</button>
      {count}counter
      <button onClick={incCount}>+</button>
      <hr />
      <p>{`${
        count > 0
          ? `${count * step} days from now date will be `
          : `${count * step} days from date was`
      }  ${date}`}</p>
      <p>
        {count * step > 0
          ? `${count * step} days from now date will be ${new Date(
              new Date().getTime() + count * 24 * 60 * 60 * 1000 * step
            )} `
          : `${-count * step} days from date was ${new Date(
              new Date().getTime() - count * 24 * 60 * 60 * 1000 * step
            )} `}
      </p>
    </div>
  );
}

export default App;
