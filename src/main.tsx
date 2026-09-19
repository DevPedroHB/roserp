import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./globals.css";
import { Toaster } from "./components/ui/toast";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
		<Toaster />
	</StrictMode>,
);
