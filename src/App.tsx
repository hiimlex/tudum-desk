import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./core";
import ThemeContext from "./core/providers/ThemeContext";
import { getPersistedTheme } from "./core/store/slicers";
import GlobalStyles from "./ui/styles/globalStyles";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPersistedTheme());
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
