import { createContext, useContext, useState } from 'react';

const ExampleContext = createContext();

export const ExampleProvider = ({ children }) => {
  const [Sumbited, setSubmite] = useState(false);

  return (
    <ExampleContext.Provider value={{ Sumbited, setSubmite }}>
      {children}
    </ExampleContext.Provider>
  );
};

export const useExampleContext = () => {
  return useContext(ExampleContext);
};
