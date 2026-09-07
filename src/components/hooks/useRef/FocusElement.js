import { useRef } from "react";

function FocusElement() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" placeholder="Focus me with a button" ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
}

export default FocusElement;
