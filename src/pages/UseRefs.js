import HeaderCard from "../components/HeaderCard";
import FocusElement from "../components/hooks/useRef/FocusElement";

function UseRefs() {
  return (
    <section>
      <h1>useRef hook</h1>
      <HeaderCard text="Focus Input">
        <FocusElement />
      </HeaderCard>
    </section>
  );
}

export default UseRefs;
