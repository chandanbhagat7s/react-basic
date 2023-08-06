import { useState } from "react";

function App() {
  return (
    <>
      {/* {console.log("rendred")} */}
      <Content />
      <Items></Items>
      <br />
      <br />
      <hr />
      <Range></Range>
    </>
  );
}

function Content() {
  let content = {
    card1: ["My name is ", "CHANDAN"],
    card2: ["I studied in   ", "ST JOSEPH's ENGLISH MEDIUM SCHOOL"],
    card3: ["How am i in studies ", "EXCELLENT"],
    card4: ["What am i learnign now ", "REACT"],
    card5: ["What next", "TAILWIND CSS AND MASTER IN DESIGNING THE ELEMENT"],
    card6: ["Something", "NOTHING"],
  };

  return (
    <>
      {Object.values(content).map((key) => {
        console.log(key);
        return <Box key={key[0]} con={key} />;
      })}
    </>
  );
}

function Box({ con }) {
  let [side, setSide] = useState(true);

  function setFlag() {
    side ? setSide(false) : setSide(true);
  }
  return <>{<div onClick={setFlag}>{side ? con[0] : con[1]}</div>}</>;
}

function Items() {
  const [selected, setSelected] = useState(null);
  let content = {
    card1: ["My name is ", "CHANDAN"],
    card2: ["I studied in   ", "ST JOSEPH's ENGLISH MEDIUM SCHOOL"],
    card3: ["How am i in studies ", "EXCELLENT"],
    card4: ["What am i learnign now ", "REACT"],
    card5: ["What next", "TAILWIND CSS AND MASTER IN DESIGNING THE ELEMENT"],
    card6: ["Something", "NOTHING"],
  };
  function set(key) {
    key !== selected ? setSelected(key) : setSelected(null);
  }
  return (
    <>
      {Object.entries(content).map((key) => {
        return (
          <div onClick={() => set(key[0])} key={key}>
            {key[0] == selected ? (
              <p>{[...key[1]][1]}</p>
            ) : (
              <p>{[...key[1]][0]}</p>
            )}
          </div>
        );
      })}
    </>
  );
}

function Range() {
  let [date, setData] = useState(new Date());
  let [val, setVal] = useState(0);
  let [step, setStep] = useState(1);
  function changed(event) {
    setVal(event.target.value);
  }
  function Rchange(event) {
    setStep(event.target.value);
  }
  function Reset() {
    setStep(1);
    setVal(0);
  }
  return (
    <>
      <input type="range" min="-1" max="7" value={step} onChange={Rchange} />
      {step}
      <br />
      <button onClick={() => setVal((val -= 1))}>-</button>
      <input type="number" value={val} onChange={changed} />
      <button onClick={() => setVal((val += 1))}>+</button>
      <div className="pare">
        {val ? (
          <>
            {val > 0
              ? `the ${step * val} from now will be ${new Date(
                  Date.now() + step * val * 24 * 60 * 60 * 1000
                )}`
              : val == 0
              ? `today is  ${new Date(Date.now())} `
              : `the ${step * val} from now will be ${new Date(
                  Date.now() - step * val * 24 * 60 * 60 * 1000
                )}`}{" "}
            <br />
            {val > 0 ? <button onClick={Reset}>reset</button> : ""}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
