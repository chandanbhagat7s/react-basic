// import React from "react";

import { useState } from "react";
import "./Pack.css";

export default function Pack() {
  let [type, setType] = useState("");
  const [tag, setTag] = useState([]);
  let [pList, setPlist] = useState([]);
  return (
    <>
      <Header></Header>
      <Form tag={tag} type={type} setType={setType} setTag={setTag}></Form>
      <MainDisplay
        tag={tag}
        pList={pList}
        setPlist={setPlist}
        setTag={setTag}
      />
      <Footer tag={tag} pitem={pList.length} />
    </>
  );
}

function Header() {
  return (
    <>
      <div className="header-black">pack up</div>
    </>
  );
}

function Form({ type, setType, tag, setTag }) {
  function setData(event) {
    // function setData() {
    // console.log(arguments);  the value whaever we type is in event.target.value
    setType(event.target.value);
  }
  function addItem() {
    // console.log(tag);
    setTag([...tag, type]);
  }
  return (
    <>
      <div className="container">
        <div className="container__text">Type hear to add items</div>
        <div className="container__input">
          <input
            type="text"
            placeholder="e.g Brush"
            value={type}
            onChange={setData}
            // onChange={(e) => console.log(e)} even if we do not pass it will be passed automaticaly event object
          />
          {/* {console.log(type)} */}
        </div>
        <div className="container__btn">
          <button onClick={addItem}>ADD</button>
        </div>
      </div>
    </>
  );
}

function MainDisplay({ tag, setTag, pList, setPlist }) {
  function s() {
    // console.log(tag.sort((a, b) => a - b));
    let arr = [...tag];
    arr.sort();
    // Using a custom sorting function
    // array.sort((a, b) => b.localeCompare(a));   for reverse
    setTag(arr);
  }
  function clear() {
    setTag([]);
  }
  return (
    <>
      <div className="main-container">
        {tag
          ? tag.map((el) => {
              return (
                <Tag
                  key={el}
                  pList={pList}
                  setPlist={setPlist}
                  dataIs={el}
                  tag={tag}
                  setTag={setTag}
                ></Tag>
              );
            })
          : ""}
      </div>
      <div className="main-container__options">
        <button className="btn" onClick={s}>
          SORTBY
        </button>
        <button className="btn" onClick={clear}>
          CLEAR ALL{" "}
        </button>
      </div>
    </>
  );
}

function Footer({ tag, pitem }) {
  return (
    <>
      <div className="footer">
        <p>
          You have {tag.length} items to be packed and you hav completed{" "}
          {(pitem / tag.length) * 100}% of packing{" "}
        </p>
      </div>
    </>
  );
}

function Tag({ dataIs, tag, setTag, pList, setPlist }) {
  function deleteTag() {
    let arr = tag.filter((el) => el !== dataIs);
    setTag(arr);
  }
  function deleteFromList() {
    let arr = pList.filter((el) => el !== dataIs);
    setPlist(arr);
  }
  function packedHandler(e) {
    console.log(dataIs);
    e.target.checked
      ? setPlist([...pList, dataIs])
      : pList.includes(dataIs)
      ? deleteFromList()
      : "";
  }
  return (
    <>
      <div className="tag">
        <div className="tag-checkBox">
          <input type="checkbox" name="" id="" onClick={packedHandler} />
        </div>
        {/* {console.log(tag)} */}
        <div className="tag-text">{dataIs}</div>
        <div className="cross">
          <button onClick={deleteTag}>X</button>
        </div>
      </div>
    </>
  );
}
