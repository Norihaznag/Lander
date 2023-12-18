import React, { createContext, useState, Dispatch, SetStateAction } from 'react';


interface MyContextProps {
  mode: boolean;
  setmode: Dispatch<SetStateAction<boolean>>;
}


const initialContext: MyContextProps = {
  mode: false,
  setmode: () => {},
};

export const MyContext = createContext(initialContext);


interface MyContextProviderProps {
  children: React.ReactNode; 
}


export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [mode, setmode] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{ mode, setmode }}>
      {children}
    </MyContext.Provider>
  );
};
