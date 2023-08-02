import { useState, useEffect } from "react";

export default function App() {
  const [close, setClose] = useState(true);
  const [closeContent, setCloseContent] = useState("close");

  function closeIt() {
    close ? setClose(false) : setClose(true);
    close ? setCloseContent("open") : setCloseContent("close");
  }
  return (
    <>
      <div className="close">
        <button onClick={closeIt}>
          {closeContent === "close" ? <>&times;</> : "open"}
        </button>
      </div>
      {close && <Ui></Ui>}
    </>
  );
}

function Ui() {
  let [count, setCount] = useState(0);
  // const [countNxt , setCountNxt]=useState(0)
  console.log(typeof count);
  //   count = 34;
  //   console.log(count);
  const [text, setText] = useState("");
  const inffo = [
    "learn html css js",
    "learn backend (about API)",
    "learn freamworks",
  ];
  console.log("render");
  const settingPreClick = () => {
    if (count <= 0) {
      //   setCount(1);
      return;
    } else {
      //   count -= 1; // do ot try to update state varible mannually , it will not re-render
      //   in the above case we tryed to mutate variable but if we mutate object it will be changed and rerender even with changed value
      // but do not try to change the state value manually insted use setter function
      setCount((count -= 1));
      setText(inffo[count]);
    }
  };
  const settingNxtClick = () => {
    if (count >= 2) {
      //   setCount(1);
      return;
    } else {
      setCount((count += 1));
      setText(inffo[count]);
    }
  };
  useEffect(() => {
    settingNxtClick();
    // setCount(0);
  }, []);
  return (
    <>
      <div className="text">
        <p>
          step:{count + 1} of 3: {text}
        </p>
      </div>
      <button className="pre" onClick={settingPreClick}>
        pre
      </button>
      <button className="Nxt" onClick={settingNxtClick}>
        Nxt
      </button>
    </>
  );
}
