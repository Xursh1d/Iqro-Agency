import { RouteObject } from "react-router-dom";
import ExamplePage from "../pages/example";
import HomePage from "../pages/home";

const commonPaths = [
  "/cash",
  "/dashboard",
  "/statistic",
  "/lists",
  "/email",
  "/message",
  "/cart",
  "/status",
  "/store",
  "/archive",
];

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  ...commonPaths.map(path => ({
    path,
    element: <ExamplePage />,
  })),
];

export default routes;
