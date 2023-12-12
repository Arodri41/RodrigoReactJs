import RouteNotFound from "../components/pages/routeNotFound/RouteNotFound";
import { Route, Routes } from "react-router-dom";
import { routes } from "./menuRoutes.js";
import Layout from "../components/layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout></Layout>}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element></Element>}></Route>
        ))}
      </Route>

      <Route path="*" element={<RouteNotFound></RouteNotFound>}></Route>
    </Routes>
  );
};

export default AppRouter;
