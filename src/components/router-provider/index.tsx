import {
	RouterProvider as LibraryRouterProvider,
	type RouteObject,
	createBrowserRouter,
} from "react-router-dom";
import React from "react";

type Properties = {
	routes: RouteObject[];
};

const RouterProvider: React.FC<Properties> = ({ routes }: Properties) => (
	<LibraryRouterProvider router={createBrowserRouter(routes)} />
);

export { RouterProvider };
