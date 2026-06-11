import { useEffect, useState } from "react";

function LocalStorageName() {
  const [keyNameValue, setKeyNameValue] = useState(() => {
    return localStorage.getItem("name" || "");
  });

  useEffect(() => {
    localStorage.setItem("name", keyNameValue);
  }, [keyNameValue]);

  return (
    <div>
      <input
        type="text"
        value={keyNameValue}
        onChange={(e) => setKeyNameValue(e.target.value)}
      />
      <p>Your storage key pair value is: 'name': {keyNameValue}</p>
    </div>
  );
}

export default LocalStorageName;
