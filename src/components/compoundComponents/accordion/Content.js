import { useContext } from "react";
import { AccordionContext } from "./Accordion";

function Content({ index, children }) {
  const { openIndex } = useContext(AccordionContext);

  if (openIndex !== index) return null;
  return <div style={{ padding: "10px" }}>{children}</div>;
}
export default Content;
