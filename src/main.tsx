import React from "react";
import ReactDOM from "react-dom/client";

import "./i18n";
import { App } from "./app/app.tsx";
import { RouterProvider, StoreProvider } from "./components/index.tsx";
import { Auth } from "./pages/auth/index.tsx";
import { AppRoute } from "./libs/enum/index.ts";
import { store } from "./libs/redux/store.ts";
import "~/assets/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
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
