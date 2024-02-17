import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import healthcareSlice from "../features/healthcare";

export const store = configureStore({
	reducer: {
		user: userSlice,
		healthcare: healthcareSlice,
	},
});
