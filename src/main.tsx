import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router";
import AppRoutes from "./routes";
import { ConfigProvider } from "./contexts/ConfigContext";
import { DataProvider } from "./contexts/DataContext";

createRoot(document.getElementById("root")!).render(
  <div className="font-sans antialiased">
    <BrowserRouter>
      <ConfigProvider>
        <DataProvider>
          <AppRoutes />
        </DataProvider>
      </ConfigProvider>
    </BrowserRouter>
  </div>
);
