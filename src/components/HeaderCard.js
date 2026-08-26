import { useState } from "react";
import Code from "./Code";

function HeaderCard({ text, children, code }) {
  const [expand, setExpand] = useState(false);

  function handleClick() {
    setExpand((prev) => !prev);
  }
  return (
    <div
      style={{
        border: "1px solid",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        margin: "10px 0 ",
      }}
    >
      <div>
        <div>
          <h1>
            {text}{" "}
            <span>
              <button onClick={handleClick}>See code</button>
            </span>
          </h1>
        </div>

        {children}
      </div>

      {expand && (
        <div style={{ background: "lightgray", padding: "10px" }}>
          <Code code={code} />{" "}
        </div>
      )}
    </div>
  );
}

export default HeaderCard;
