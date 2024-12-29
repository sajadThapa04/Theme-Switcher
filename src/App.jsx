import { useEffect, useState } from "react";

import "./App.css";
import { ThemeProvider } from "./contexts/Themes";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Cards";

function App() {

    const [themeMode, setThemeMode] = useState("light");

    const darkTheme =() => { 
      setThemeMode('dark')
    }
    const lightTheme =() => { 
      setThemeMode('light')
    }

    useEffect(()=> { 
      const toggle = document.querySelector('html').classList;
            toggle.remove('dark','light');
            toggle.add(themeMode);
    },[themeMode])
    
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
    
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
          <h1 className="text-3xl font-bold underline">Apple Watch</h1>

        </div>

      </div>

    </ThemeProvider>
  );
}

export default App;
