import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App.tsx";
import "./index.css";
import "./assets/index.less";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <Toaster position="top-right" />
    <App />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
