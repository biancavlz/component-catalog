import { useState } from "react";

function Visibility() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible((prev) => !prev);
  }

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "hide" : "show"} Text
      </button>
      {isVisible && <p>This is some text</p>}
    </div>
  );
}

export default Visibility;
