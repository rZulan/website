import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import HomePage from "./pages/HomePage"
import Zulan from "./pages/Zulan"
import Error404 from "./pages/status/Error404"

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <Error404 />,
	},
	{
		path: "/zulan",
		element: <Zulan />,
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
