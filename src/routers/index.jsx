import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages";
import Blog from "../pages/blogs";
import Post from "../pages/blogs/_id";
import About from "../pages/about";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/blog",
				element: <Blog />,
			},
			{
				path: "/blog/:id",
				element: <Post />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
]);