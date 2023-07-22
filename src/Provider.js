import { createContext, useState } from "react";

const initialState = {
  list: [],
};
export const AppProvider = createContext({
  store: initialState,
  setStore: {},
});

function Provider({ children }) {
  const [store, setState] = useState(initialState);

  const setStore = (name, value) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <AppProvider.Provider value={{ store, setStore }}>
        {children}
      </AppProvider.Provider>
    </>
  );
}

export default Provider;
