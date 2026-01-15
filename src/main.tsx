import { createRoot } from "react-dom/client";
import "./index.css";
import RQuery from "./components/RQuery";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { ConfigProvider } from "./contexts/ConfigContext";
import { DataProvider } from "./contexts/DataContext";

createRoot(document.getElementById("root")!).render(
  <div className="font-sans antialiased">
    <BrowserRouter>
      <ConfigProvider>
        <DataProvider>
          <RQuery>
            <Toaster />
            <AppRoutes />
          </RQuery>
        </DataProvider>
      </ConfigProvider>
    </BrowserRouter>
  </div>
);
