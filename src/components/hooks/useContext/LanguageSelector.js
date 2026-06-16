import { createContext, useContext, useState } from "react";

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
