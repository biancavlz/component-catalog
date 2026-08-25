import HeaderCard from "../components/HeaderCard";

import Theme from "../components/hooks/useContext/Theme";
import UserAuthenticationProfile from "../components/hooks/useContext/UserAuthenticationProfile";
import LanguageSelector from "../components/hooks/useContext/LanguageSelector";
import ShoppingCart from "../components/hooks/useContext/ShoppingCart";
import {
  languageSelectorCode,
  shoppingCartCode,
  themeCode,
  userAuthenticationProfileCode,
} from "../components/hooks/useContext/codes";

function Contexts() {
  return (
    <section>
      <h1>useContext hook</h1>
      <HeaderCard text={"Theming"} code={themeCode}>
        <Theme />
      </HeaderCard>
      <HeaderCard
        text={"User Authentication Profile"}
        code={userAuthenticationProfileCode}
      >
        <UserAuthenticationProfile />
      </HeaderCard>
      <HeaderCard text={"Language Selector"} code={languageSelectorCode}>
        <LanguageSelector />
      </HeaderCard>
      <HeaderCard text={"Shopping Cart"} code={shoppingCartCode}>
        <ShoppingCart />
      </HeaderCard>
    </section>
  );
}

export default Contexts;
