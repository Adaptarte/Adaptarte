import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Authentication } from "views/Authentication";
import { Landing } from "views/Landing";

const router = createBrowserRouter([
  {
    element: <Landing />,
    path: "/"
  }
]);

const App = (): JSX.Element => {
  const signedIn = true;

  return (
    <div className={"bg-light min-vh-100 px-4 py-3 text-dark"}>
      <p className={"h1 text-primary mb-3"}>{"Adaptarte"}</p>
      {signedIn ? <RouterProvider router={router} /> : <Authentication />}
    </div>
  );
};

export { App };
