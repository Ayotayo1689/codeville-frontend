import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { createStandaloneToast } from "@chakra-ui/react";
import Router from "next/router";
import {
	addUserToLocalStorage,
	getUserFromLocalStorage,
	removeUserFromLocalStorage,
} from "../../utils/localStorage";
import {
	loginUserThunk,
	registerUserThunk,
	updateUserThunk,
	clearStoreThunk,
} from "./userThunk";
const { toast } = createStandaloneToast();

const initialState = {
	isLoading: false,
	isSidebarOpen: false,
	user: getUserFromLocalStorage(),
	showMenu: false,
	success: false,
	solutionIndex: 0,
	searchText: "",
};

export const registerUser = createAsyncThunk(
	"user/registerUser",
	registerUserThunk
);

export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);

export const updateUser = createAsyncThunk(
	"user/updateUser",
	async (user, thunkAPI) => {
		return updateUserThunk("/auth/updateUser", user, thunkAPI);
	}
);
let previousPath = "";

Router.events.on("beforePopState", ({ url }) => {
	previousPath = window.location.pathname;
});

const navigateToPreviousPageOrHome = () => {
	if (previousPath && previousPath !== "/auth/sign-up") {
		Router.push(previousPath);
	} else {
		Router.back();
	}
};

// Usage:

export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk);
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setSolutionIndex: (state, { payload }) => {
			state.solutionIndex = payload;
		},

		toggleSidebar: (state) => {
			state.isSidebarOpen = !state.isSidebarOpen;
		},
		logOutUser: (state, { payload }) => {
			state.user = false;
			state.isSidebarOpen = false;

			state.success = false;
			removeUserFromLocalStorage();
		},
		setShowMenu: (state, action) => {
			state.showMenu = true;
		},
		toggleMenu: (state, action) => {
			state.showMenu = false;
		},
		addUserInfo: (state, { payload }) => {
			state.user = { ...state.user, ...payload };
			addUserToLocalStorage({ ...state.user, ...payload });
		},
		setSearchText: (state, { payload }) => {
			if (payload) {
				state.searchText = payload;
			} else {
				state.searchText = "";
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(registerUser.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.success = true;
				toast({
					title: "Awesome!",
					description: "Account Created! Proceed to Login",
					status: "success",
					duration: 5000,
					isClosable: true,
					position: "top",
					variant: "left-accent",
				});
				setTimeout(() => {
					Router.push("/auth/sign-in");
				}, 5000);
			})
			.addCase(registerUser.rejected, (state, { payload }) => {
				state.isLoading = false;
				const msg = Object.values(payload).join("\n");

				toast({
					title: "An error occurred",
					description: msg,
					status: "error",
					duration: 5000,
					isClosable: true,
					variant: "left-accent",
					position: "top",
				});
			})

			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
			})

			.addCase(loginUser.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				const decodedToken = jwt_decode(payload.access);
				state.user = {
					token: payload.access,
					...decodedToken,
					refresh: payload.refresh,
				};
				addUserToLocalStorage({
					token: payload.access,
					...decodedToken,
					refresh: payload.refresh,
				});
				toast({
					title: "Welcome Back",
					description: ` Hi ${decodedToken.username}`,
					status: "info",
					duration: 5000,
					isClosable: true,
					position: "top",
					variant: "left-accent",
				});
				setTimeout(() => {
					navigateToPreviousPageOrHome();
				}, 5000);
			})

			.addCase(loginUser.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast({
					title: "An error occurred.",
					description: `${payload.detail}`,
					status: "error",
					duration: 5000,
					isClosable: true,
					position: "top",
				});
			})

			.addCase(updateUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateUser.fulfilled, (state, { payload }) => {
				const { user } = payload;
				state.isLoading = false;
				state.user = user;
				addUserToLocalStorage(user);
			})
			.addCase(updateUser.rejected, (state, { payload }) => {
				state.isLoading = false;
			})

			.addCase(clearStore.rejected, () => {});
	},
});

export const {
	toggleSidebar,
	logOutUser,
	setShowMenu,
	addUserInfo,
	setSearchText,
	setSolutionIndex,
} = userSlice.actions;
export default userSlice.reducer;
