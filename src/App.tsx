import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./core";
import useCustomTheme from "./core/hooks/useCustomTheme";
import ThemeContext from "./core/providers/ThemeContext";
import GlobalStyles from "./ui/styles/globalStyles";

function App() {
  const { updateTheme } = useCustomTheme();

  useEffect(() => {
    // remove this line later
    updateTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
