export const themeCode = `import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function Theme() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      <Toolbar />
    </ThemeContext>
  );
}

function Toolbar() {
  return (
    <div>
      <h3>From Toolbar Toggle theme</h3>
      <ToogleTheme />
    </div>
  );
}

function ToogleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

export default Theme;
`;

export const languageSelectorCode = `import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

function LanguageSelector() {
  const [language, setLanguage] = useState("en");

  function languageChange(lang) {
    setLanguage(lang);
  }

  return (
    <LanguageContext value={{ language, languageChange }}>
      <Header />
      <Content />
    </LanguageContext>
  );
}

function Header() {
  const { language, languageChange } = useContext(LanguageContext);

  return (
    <header>
      <button onClick={() => languageChange("en")}>English</button>
      <button onClick={() => languageChange("es")}>Español</button>
      <h1>{language === "en" ? "Hi!" : "Hola!"}</h1>
    </header>
  );
}

function Content() {
  const { language } = useContext(LanguageContext);

  return (
    <p>
      {language === "en" ? "Welcome to the site" : "Bienvenido a nuestro sitio"}
    </p>
  );
}

export default LanguageSelector;
`;

export const shoppingCartCode = `import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((prevCart) => [...prevCart, item]);
  }

  function removeItem(item) {
    setCart((prevCart) => prevCart.filter((i) => i !== item));
  }

  return (
    <CartContext value={{ cart, addToCart, removeItem }}>
      <ProductList />
      <Cart />
    </CartContext>
  );
}

function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Product list</h2>

      <button onClick={() => addToCart("product 1")}>Add Item 1</button>
      <button onClick={() => addToCart("product 2")}>Add Item 2</button>
      <button onClick={() => addToCart("product 3")}>Add Item 3</button>
    </div>
  );
}

function Cart() {
  const { cart, removeItem } = useContext(CartContext);

  if (!cart) return null;

  return (
    <>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item}>
            {item} <button onClick={() => removeItem(item)}>remove item</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShoppingCart;
`;

export const userAuthenticationProfileCode = `import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function UserAuthenticationProfile() {
  const [user, setUser] = useState(null);

  function login(username) {
    setUser({ name: username });
  }

  function logout(username) {
    setUser(null);
  }

  return (
    <AuthContext value={{ login, logout, user }}>
      <NavBar />
      <MainContent />
    </AuthContext>
  );
}

function NavBar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <p>{user ? \`welcome \${user.name}\` : "Not logged in "}</p>

      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
}

function MainContent() {
  const { user, login } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <p>Hi \${user.name}! Enjoy</p>
      ) : (
        <button onClick={() => login("John Doe")}>Login</button>
      )}
    </div>
  );
}

export default UserAuthenticationProfile;
`;
