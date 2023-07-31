import { useEffect, useState } from "react";
import DevCard from "../component/DevCard";
// import React from "react";
// import ReactDOM from "react-dom/client";
import "./index.css";

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

  const [quote, setQuote] = useState("");
  // let [count, setCount] = useState(0);
  const nextQuote = async () => {
    console.log("ent");
    const quote = await fetch("https://api.quotable.io/quotes/random");
    const result = await quote.json();
    // console.log(result);
    // return result;
    // console.log(result[0].content);
    setQuote(result[0].content);
    // setCount((count += 1));
  };

  // so when page is displayed : it is empty so we need to render it first
  useEffect(function () {
    nextQuote();
  }, []);
  return (
    <>
      {/* <Print quote={quote}/>
    <button onClick={nextQuote}>CLICK FOR NEXT QUOTE</button>
    <div>u read {count}  quotes</div> */}

      {/* making a dev card */}

      <DevCard
        image="https://media.istockphoto.com/id/1451456915/photo/female-freelance-developer-coding-and-programming-coding-on-two-with-screens-with-code.webp?b=1&s=170667a&w=0&k=20&c=7QL_-R6HTGHCYt37C8NyjuW6mIiJeQhDVgW8i_6l4Vk="
        description={quote}
        // fontColor="white"
        // backColor="black"
        style={{ backgroundColor: "black", color: "white" }}
      />
    </>
  );
}

export default App;
