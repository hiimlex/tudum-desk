import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./core";
import ThemeContext from "./core/providers/ThemeContext";
import store from "./core/store";
import GlobalStyles from "./ui/styles/globalStyles";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <ThemeContext>
          <GlobalStyles />
          <RouterProvider router={router}></RouterProvider>
        </ThemeContext>
      </Provider>
    </React.Fragment>
  );
}

export default App;
