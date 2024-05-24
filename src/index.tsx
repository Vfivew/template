import React from "react";
import { createRoot } from "react-dom/client";

import "~/assets/styles.css";

import { App } from "./app/app.tsx";
import { RouterProvider, StoreProvider } from "./components/index.tsx";
import "./i18n.ts";
import { AppRoute } from "./libs/enum/index.ts";
import { store } from "./libs/redux/store.ts";
import { Auth } from "./pages/auth/index.tsx";

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<StoreProvider store={store}>
			<RouterProvider
				routes={[
					{
						children: [
							{
								element: <Auth />,
								path: AppRoute.ROOT,
							},
						],
						element: <App />,
						path: AppRoute.ROOT,
					},
				]}
			/>
		</StoreProvider>
	</React.StrictMode>,
);
