import Link from 'next/link';
import React, { Children, createContext, useContext, useState } from 'react';
import LightIcon from '@mui/icons-material/LightMode';
import NightIcon from '@mui/icons-material/NightlightRound';

// Define the type for the context value
type ThemeContextType = boolean;
// Create the context with an initial value

export const ThemeContext = createContext<ThemeContextType>(true);

export default function App({children}) {
  const [theme, setTheme] = useState<ThemeContextType>(false);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

interface ButtonProps {
  setTheme: React.Dispatch<React.SetStateAction<ThemeContextType>>;
}

function IconMode({ setTheme }: ButtonProps) {
  const theme = useContext(ThemeContext);
  const textColor = theme ? 'text-black' : 'text-white';
  let mode = theme ? <LightIcon/> : <NightIcon/>
  
  return (
    <div className="" onClick={()=>{
        setTheme(!theme)
    }}>
        {mode}
    </div>
  );
}

function Container() {
  const theme = useContext(ThemeContext);
  const textColor = theme ? 'text-black' : 'text-white';

  return (
    <div
      className={`bg-${theme} ${textColor} border ${textColor} border-solid rounded-md p-4`}
    >
      <h2>I will change my color!</h2>
      <h6>So will the background!</h6>
    </div>
  );
}
