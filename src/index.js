import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import store from "./store/index";
import { Provider } from 'react-redux'
ReactDOM.render(
  <React.StrictMode>
    {/* <DarkModeContextProvider> */}
    <Provider store={store}>
     <App />
    </Provider>
 
    {/* </DarkModeContextProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
