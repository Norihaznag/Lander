import Link from 'next/link';
import React, { Children, createContext, useContext, useState } from 'react';
import LightIcon from '@mui/icons-material/LightMode';
import NightIcon from '@mui/icons-material/NightlightRound';
import type { AppProps } from 'next/app';

// Define the type for the context value
type ThemeContextType = boolean;
// Create the context with an initial value
interface MyAppProps extends AppProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>(true);

export default function App({children}: MyAppProps) {
  const [theme, setTheme] = useState<ThemeContextType>(true);

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
