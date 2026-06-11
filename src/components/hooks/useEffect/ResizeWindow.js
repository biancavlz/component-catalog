import { useEffect, useState } from "react";

function ResizeWindow() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <p>width: {windowSize.width}</p>
      <p>height: {windowSize.height}</p>
    </div>
  );
}

export default ResizeWindow;
