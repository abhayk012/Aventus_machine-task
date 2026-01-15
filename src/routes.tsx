import { Routes, Route } from "react-router";
import { Layout } from "./components/layout/Layout";
import { DynamicPage } from "./pages/DynamicPage";
import { appConfig } from "./config/app.config";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {appConfig.pages.map((page) => (
          <Route key={page.id} path={page.path} element={<DynamicPage />} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
