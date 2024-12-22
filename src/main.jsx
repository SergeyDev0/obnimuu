import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/reset.scss";
import "./styles/fonts.scss";
import "./styles/index.scss";

createRoot(document.getElementById("root")).render(<App />);
