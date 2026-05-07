import { useState, createContext } from "react";
import Item from "./Item";
import Header from "./Header";
import Content from "./Content";

export const AccordionContext = createContext();

function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState();

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;
