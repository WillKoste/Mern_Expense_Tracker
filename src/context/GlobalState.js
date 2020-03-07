import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [
    {id: 1, text: "Flower", amount: -20},
    {id: 1, text: "Salary", amount: 60},
    {id: 1, text: "Book", amount: -200},
    {id: 1, text: "Camera", amount: 400}
  ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions
    }}>
      {children}
    </GlobalContext.Provider>
  );
}