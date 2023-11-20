import { useContext, useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { AuthContext } from "../Context/AuthProvider";

const ThemeSwitcher = () => {
  //   const [theme, setTheme] = useState(null);
  const { theme, setTheme } = useContext(AuthContext);
  // console.log(toggle);

  /* theme  */
  useEffect(() => {
    if (window.matchMedia("prefer-color-scheme:dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggle = () => {
    /*  if (e.target.checked) {
        setTheme("dark");
      } else {
        setTheme("light");
      } */
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button
      className="dark:text-white bg-transparent lg:flex lg:items-center"
      onClick={handleToggle}
    >
      {theme === "dark" ? (
        <FaMoon className="text-lg" />
      ) : (
        <BsSunFill className="text-lg text-primary-color" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
