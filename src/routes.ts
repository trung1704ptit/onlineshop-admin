import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Login from "./pages/Login";

import { FC } from "react";

// interface

interface Route {
  key: string;
  title: string;
  enabled: boolean;
  component: FC<{}>;
  path: string;
}

export const routes: Array<Route> = [
  {
    key: "homte-route",
    title: "Home",
    path: "/",
    enabled: true,
    component: Home,
  },
  {
    key: "about-route",
    title: "About",
    path: "/about",
    enabled: true,
    component: About,
  },
  {
    key: "products-route",
    title: "Products",
    path: "/products",
    enabled: true,
    component: Products,
  },
];

export const notAuthenticatedRoutes: Array<Route> = [
  {
    key: "login",
    title: "Login",
    path: "/login",
    enabled: true,
    component: Login,
  },
];
