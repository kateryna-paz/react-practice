import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [index, setIndex] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNext = () => {
    if (index < 3) setIndex((i) => i + 1);
  };
  const handlePrevious = () => {
    if (index > 1) setIndex((i) => i + 1);
  };
  const handleOpen = () => {
    setIsOpen((is) => !is);
  };

  if (!isOpen)
    return (
      <button onClick={handleOpen} className="open-btn">
        Open
      </button>
    );

  return (
    <div>
      <button className="close" onClick={handleOpen}>
        &times;
      </button>
      <div className="steps">
        <div className="numbers">
          <div className={index >= 1 ? "active" : ""}>1</div>
          <div className={index >= 2 ? "active" : ""}>2</div>
          <div className={index >= 3 ? "active" : ""}>3</div>
        </div>

        <p className="message">
          Step {index}: {messages[index - 1]}
        </p>

        <div className="buttons">
          <button
            onClick={handlePrevious}
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
