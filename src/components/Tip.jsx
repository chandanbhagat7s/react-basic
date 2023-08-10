import { useEffect, useState } from "react";
import "./Tip.css";

let billp = 0;
let billf = 0;
let result = 0;
console.log("running");

function Tip() {
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);

  function calculate(e) {
    setTip(e.target.value * 1);
    // console.log(e.type);
    if (e.type == "payer") {
      billp = e.target.value * 1;
      // console.log(billp, e.target.value * 1);
    } else {
      billf = e.target.value * 1;
    }
    result = (billp + billf) / 2;
  }
  return (
    <>
      <header className="Header">TIP CALCULATOR</header>
      <div className="bill">
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value * 1)}
        />
      </div>
      <Tips tip={tip} setTip={setTip} calculate={calculate} name={`payer`}>
        {
          <>
            <div className="text">Tip from your side</div>
          </>
        }
      </Tips>
      <Tips tip={tip} setTip={setTip} calculate={calculate} name={`friend`}>
        {
          <>
            <div className="text">Tip from your Friends side</div>
          </>
        }
      </Tips>
      <div className="calculate">
        {`the bill in the block ${console.log("the val is", billp)}
        ${bill}
        tip is 
        ${result}
        and you have to pay  ${bill + result}}`}
      </div>
    </>
  );
}

function Tips({ tip, setTip, name, calculate, children }) {
  function setIt(e) {
    // console.log(e.target.value);
    // console.log(e);
    e.type = name;

    calculate(e);
  }
  return (
    <>
      {children}
      <select name={name} id="" onChange={setIt}>
        <option value="0">0% Not well</option>
        <option value="10">10% was good</option>
        <option value="20">20% so happy</option>
      </select>
      {/* {console.log("the bill in the comp", tip)} */}
    </>
  );
}

export default Tip;
