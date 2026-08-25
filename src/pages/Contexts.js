import HeaderCard from "../components/HeaderCard";

import Theme from "../components/hooks/useContext/Theme";
import UserAuthenticationProfile from "../components/hooks/useContext/UserAuthenticationProfile";
import LanguageSelector from "../components/hooks/useContext/LanguageSelector";
import ShoppingCart from "../components/hooks/useContext/ShoppingCart";

function Contexts() {
  return (
    <section>
      <h1>useContext hook</h1>
      <HeaderCard text={"Theming"}>
        <Theme />
      </HeaderCard>
      <HeaderCard text={"User Authentication Profile"}>
        <UserAuthenticationProfile />
      </HeaderCard>
      <HeaderCard text={"Language Selector"}>
        <LanguageSelector />
      </HeaderCard>
      <HeaderCard text={"Shopping Cart"}>
        <ShoppingCart />
      </HeaderCard>
    </section>
  );
}

export default Contexts;
