import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "./example-auth-api";
import { userReducer } from "./example-slice";

const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		user: userReducer,
	},
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
