import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./i18n";
import { Home } from "./pages/Home.tsx";
import { About } from "./pages/About.tsx";
import { Store } from "./pages/Store.tsx";
import { Artists } from "./pages/Artists.tsx";

const router = createBrowserRouter([
	{
		path: "/shop-vite-react-typescript/",
		element: <App />,
		children: [
			{
				path: "/shop-vite-react-typescript/",
				element: <Home />,
			},
			{
				path: "/shop-vite-react-typescript/about",
				element: <About />,
			},
			{
				path: "/shop-vite-react-typescript/store",
				element: <Store />,
			},
			{
				path: "/shop-vite-react-typescript/artists",
				element: <Artists />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
