import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home, Notes, Tasks } from "../../screens";
import { Header } from "../../ui";

type RouterBoundaryProps = {
  children: React.ReactNode;
};

const RouteBoundary = ({ children }: RouterBoundaryProps) => {
  return (
    <React.Fragment>
      <Header />
      {children}
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
