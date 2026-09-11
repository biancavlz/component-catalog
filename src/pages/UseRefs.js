import HeaderCard from "../components/HeaderCard";
import {
  componentRenderTimesCode,
  focusElement,
  timer,
} from "../components/hooks/useRef/codes";
import ComponentRenderTimes from "../components/hooks/useRef/ComponentRenderTimes";
import FocusElement from "../components/hooks/useRef/FocusElement";
import Timer from "../components/hooks/useRef/Timer";

function UseRefs() {
  return (
    <section>
      <h1>useRef hook</h1>
      <HeaderCard text="Focus Input" code={focusElement}>
        <FocusElement />
      </HeaderCard>

      <HeaderCard text="Timer" code={timer}>
        <Timer />
      </HeaderCard>

      <HeaderCard text="Render component count" code={componentRenderTimesCode}>
        <ComponentRenderTimes />
      </HeaderCard>
    </section>
  );
}

export default UseRefs;
