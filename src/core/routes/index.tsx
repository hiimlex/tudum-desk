import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  Header,
  Home,
  Login,
  Notes,
  Register,
  ShareButton,
  Tasks,
} from "../../ui";
import { Profile } from "../../ui/screens/Profile";

import ModalContext from "../providers/ModalContext";
import { setUser } from "../store/slicers";

type RouterBoundaryProps = {
  children: React.ReactNode;
};

type PrivateRouteProps = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = window.localStorage.getItem("auth-token");
  const user = window.localStorage.getItem("user");
  const dispatch = useDispatch();

  const handlePersistUserData = useCallback(async () => {
    if (user) {
      dispatch(setUser(JSON.parse(user)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handlePersistUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!token || !user || (!!user && Object.keys(user).length === 0)) {
    return <Navigate to="/login" />;
  }

  return <RouteBoundary>{children}</RouteBoundary>;
};

const RouteBoundary = ({ children }: RouterBoundaryProps) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <ModalContext />
      <ShareButton />
    </React.Fragment>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute children={<Notes />} />,
  },
  {
    path: "/tasks",
    element: <PrivateRoute children={<Tasks />} />,
  },
  {
    path: "/profile",
    element: <PrivateRoute children={<Profile />} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export { router };
