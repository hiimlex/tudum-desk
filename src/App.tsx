import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./core";
import ThemeContext from "./core/providers/ThemeContext";
import GlobalStyles from "./ui/styles/globalStyles";

function App() {
  return (
    <React.Fragment>
      <ThemeContext>
        <GlobalStyles />
        <RouterProvider router={router}></RouterProvider>
      </ThemeContext>
    </React.Fragment>
  );
}

export default App;
