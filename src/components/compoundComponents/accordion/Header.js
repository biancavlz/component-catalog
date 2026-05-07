import { useContext } from "react";
import { AccordionContext } from "./Accordion";

function Header({ index, children }) {
  const { openIndex, setOpenIndex } = useContext(AccordionContext);

  const isOpen = openIndex === index;

  return (
    <div
      onClick={() => setOpenIndex(isOpen ? null : index)}
      style={{
        cursor: "pointer",
        fontWeight: "bold",
        padding: "10px",
        background: "eee",
      }}
    >
      {children}
    </div>
  );
}

export default Header;
