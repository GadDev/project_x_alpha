import React, { useState } from "react";
import classNames from "classnames";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Typewriter from "./components/Typewriter";
import ThemeContext from "./ThemeContext";

const options = [
  "Hello my name's Alexandre, I'm front-end developer",
  "and I love croissants...",
  "how can I help you?"
];

function App() {
  const [message, setMessage] = useState(false);
  const theme = React.useContext(ThemeContext);
  const displayResume = () => {
    console.log("call displayResume");
    setMessage(true);
  };
  const appClass = classNames({
    App: true,
    [`${theme}`]: true
  });

  return (
    <div className={appClass}>
      <Header />
      <main>
        <div className="typewriper__wrapper">
          <Typewriter options={options} triggerEnd={displayResume} />
        </div>
        {message && (
          <div className="resume__wrapper--link">
            <a
              href="/assets/pdf/resume-alexandre-gadaix-october-2019.pdf"
              download
              target="_blank"
            >
              resume
            </a>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
