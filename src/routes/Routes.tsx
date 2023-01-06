import Home from "components/pages/Home";
import Layout from "components/pattern/templates/Layout";
import type { RouteObject } from "react-router-dom";
import { Outlet, useRoutes } from "react-router-dom";

const Routes: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout children={<Outlet />} />,
      children: [{ index: true, element: <Home /> }],
    },
  ];
  return useRoutes(routes);
};

export default Routes;
