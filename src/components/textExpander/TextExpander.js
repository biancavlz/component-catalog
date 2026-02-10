import { useState } from "react";

const container = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "7px",
  backgroundColor: "#f7f7f7",
};

export default function TextExpander({
  collapsedNumWords = 20,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const displaytext = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  function handleOnClick() {
    setIsExpanded(!isExpanded);
  }

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };
  return (
    <div>
      <h2>Expanded Text</h2>
      <span>
        {displaytext}{" "}
        <button style={buttonStyle} onClick={handleOnClick}>
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>
      </span>
    </div>
  );
}
