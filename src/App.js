import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Typewriter from "./components/Typewriter";

const options = [
  "Hello my name's Alexandre, I'm front-end developer",
  "I'm front-end developer",
  "And I love croissants"
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="typewriper__wrapper">
          <Typewriter options={options} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
