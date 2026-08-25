import { useReducer } from "react";

function accordionReducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "toggle":
      return state === action.id ? null : action.id;
    default:
      throw new Error("unknown error");
  }
}

function AccordionControlReducer() {
  const [openSection, dispatch] = useReducer(accordionReducer, null);

  console.log("open section value");
  console.log(openSection);

  const sections = [
    {
      id: 1,
      title: "Section 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 1",
    },
    {
      id: 2,
      title: "Section 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 2",
    },
    {
      id: 3,
      title: "Section 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 3",
    },
    {
      id: 4,
      title: "Section 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 4",
    },
  ];
  return (
    <div>
      {sections.map((section) => (
        <div key={section.id}>
          <h3
            style={{ cursor: "pointer" }}
            onClick={() => dispatch({ type: "toggle", id: section.id })}
          >
            {section.title}
          </h3>
          {openSection === section.id && <p>{section.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default AccordionControlReducer;
