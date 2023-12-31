// import { useEffect, useState } from "react";
// import DevCard from "../component/DevCard";
// import Header from "../component/Header";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import Pack from "./components/Pack";
import { useState } from "react";
import "./components/Acco.css";
import Tip from "./components/Tip";
import QrCodeInfo from "./components/QRcode";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  // making function for taking the quote

  // const [quote, setQuote] = useState("");
  // // let [count, setCount] = useState(0);
  // const nextQuote = async () => {
  //   console.log("ent");
  //   const quote = await fetch("https://api.quotable.io/quotes/random");
  //   const result = await quote.json();
  //   // console.log(result);
  //   // return result;
  //   // console.log(result[0].content);
  //   setQuote(result[0].content);
  //   // setCount((count += 1));
  // };

  // so when page is displayed : it is empty so we need to render it first
  // useEffect(function () {
  //   nextQuote();
  // }, []);
  return (
    <>
      {/* <Print quote={quote}/>
    <button onClick={nextQuote}>CLICK FOR NEXT QUOTE</button>
    <div>u read {count}  quotes</div> */}

      {/* making a dev card */}

      {/* <DevCard
        image="https://media.istockphoto.com/id/1451456915/photo/female-freelance-developer-coding-and-programming-coding-on-two-with-screens-with-code.webp?b=1&s=170667a&w=0&k=20&c=7QL_-R6HTGHCYt37C8NyjuW6mIiJeQhDVgW8i_6l4Vk="
        description={quote}
        // fontColor="white"
        // backColor="black"
        style={{ backgroundColor: "black", color: "white" }}
      /> */}
      {/* <Header></Header>
      <Menu></Menu>
      <Footer></Footer> */}
      {/* <Pack /> */}
      {/* <Accordian /> */}
      {/* <Acc /> */}
      {/* <Tip /> */}
      <QrCodeInfo />
    </>
  );
}

function Menu() {
  return (
    <main className="menu">
      {/* {[2, 3, 4]} */}
      <h2>Our menu</h2>
      <ul className="pizzas">
        {pizzaData.map((data) => {
          return <Pizza pizzaObj={data} key={data.name} />;
        })}
      </ul>
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
        <span>SOLD OUT</span>
      ) : (
        <span>{pizzaObj.price}</span>
      )} */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

function Accordian() {
  let obj = [
    {
      title: "title1",
      content: "first one sadgffsdafsdafasdfasdf",
    },
    {
      title: "title2",
      content: "second one ",
    },
    {
      title: "title3",
      content: "third one ",
    },
    {
      title: "title4",
      content: "forth one ",
    },
  ];
  return (
    <>
      <div className="container">
        {obj.map((tag, i) => {
          return (
            <details className="details" key={i}>
              <summary className="summery">{tag.title}</summary>
              {tag.content}
            </details>
          );
        })}
      </div>
    </>
  );
}

function Acc() {
  const [open, setIsOpen] = useState(false);
  let obj = [
    {
      title: "HTML",
      content:
        "HTML is the markup language used to give the structure form the webpage , their are set of definded tag which support diffrent types of data format which that tag will hold data about and it is rendered by browsers",
    },
    {
      title: "CSS",
      content:
        "CSS is used for styling , it gives the mordern look to our webpage , by adding some cool colors ,transition, animations etc.. , it is the way to define which UI component will displaced with what size and at what position",
    },
    {
      title: "JS",
      content:
        "JS is the most important which makes webpages live , which helps in making webpages interactive , it has DOM tree on which we whole document is listed in the tree fromat , we can handle events and do lot's of things  ",
    },
    {
      title: "REACT",
      content:
        "REACT is the framework which makes the webpage like an app which brings the content and impart it into webpage without reploding and improves user interface and intreaction with good user expreinces , this magic happens with the help of state , we need to handle the state and update when specific actions are preformed on the webpage",
    },
  ];
  function del(el) {}
  return (
    <>
      <div className="con">
        {obj.map((el, i) => {
          {
            console.log("runedfor i ", i);
          }
          return <Abox data={el} key={i} />;
        })}{" "}
      </div>
    </>
  );
}

function Abox({ data }) {
  let [text, setText] = useState("");
  function close() {
    // text ? setText("") : setText(data.content);
    if (text) {
      setText("");
    } else {
      setText(data.content);
    }
  }

  return (
    <>
      <div className="block">
        <button className="text" onClick={close}>
          {data.title}
          {text ? (
            <span className="sign">-</span>
          ) : (
            <span className="sign">+</span>
          )}
        </button>
        <div className={text ? "content" : ""}>{open ? text : ""}</div>
      </div>
    </>
  );
}

export default App;
