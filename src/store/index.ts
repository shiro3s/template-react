import { configureStore } from "@reduxjs/toolkit";
import memoReducer from "./memoStore";

export const store = configureStore({
	reducer: {
		memo: memoReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
