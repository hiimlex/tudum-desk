import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Header, ShareButton } from "../../ui";
import { Home, Notes, Tasks } from "../../ui/screens";
import ModalContext from "../providers/ModalContext";

type RouterBoundaryProps = {
  children: React.ReactNode;
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
]);

export { router };
