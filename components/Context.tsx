import { createContext, useContext, useState } from "react";

// Create a Context
export const Context = createContext();

//create a componont who provider the context

const Contexer = ({children}:any) => {

    const [mode,setmode] = useState(false) ;

  return (
    <Context.Provider value={{mode,setmode}}>
        {children}
    </Context.Provider>
  )
}

export default Contexer ;
