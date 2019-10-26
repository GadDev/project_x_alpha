import React from "react";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Typewriter from "./components/Typewriter";

const options = [
  "Hello my name's Alexandre",
  "I'm fornt end developer",
  "And I love croissants"
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Typewriter options={options} loop={false} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
