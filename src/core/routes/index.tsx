import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Header, ShareButton } from "../../ui";
import { Home, Login, Notes, Tasks } from "../../ui/screens";
import ModalContext from "../providers/ModalContext";

type RouterBoundaryProps = {
  children: React.ReactNode;
};

const RouteBoundary = ({ children }: RouterBoundaryProps) => {
  const token = window.localStorage.getItem("auth-token");

  if (!token) {
    return <Navigate to="/login" />;
  }

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
    element: <RouteBoundary children={<Home />} />,
  },
  {
    path: "/notes",
    element: <RouteBoundary children={<Notes />} />,
  },
  {
    path: "/tasks",
    element: <RouteBoundary children={<Tasks />} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export { router };
