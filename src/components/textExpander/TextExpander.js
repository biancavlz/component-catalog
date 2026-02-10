import { useState } from "react";

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
    <span>
      {displaytext}{" "}
      <button style={buttonStyle} onClick={handleOnClick}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </span>
  );
}
