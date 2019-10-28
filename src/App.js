import React from "react";
import classNames from "classnames";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Typewriter from "./components/Typewriter";
import ThemeContext from "./ThemeContext";

const options = [
  "Hello my name's Alexandre, I'm front-end developer",
  "I'm front-end developer",
  "And I love croissants"
];

function App() {
  const theme = React.useContext(ThemeContext);
  const appClass = classNames({
    App: true,
    theme: true
  });
  return (
    <div className={appClass}>
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
