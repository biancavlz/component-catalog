import { useEffect, useRef } from "react";

function ComponentRenderTimes() {
  const renderCount = useRef(0);

  //Persist the value during renders
  useEffect(() => {
    renderCount.current += 1;
  }, []);

  return (
    <div>
      <h1>Render: {renderCount.current}</h1>
    </div>
  );
}

export default ComponentRenderTimes;
