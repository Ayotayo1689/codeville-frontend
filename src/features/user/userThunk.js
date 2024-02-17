import axiosInstance, {
	checkForUnauthorizedResponse,
} from "../../utils/config";
import { logOutUser } from "./userSlice";
const baseUrl =
	process.env.REACT_APP_BASE_URL || "https://api.tantainnovatives.com";
export const registerUserThunk = async (user, thunkAPI) => {
	try {
		const resp = await axiosInstance.post(`/auth/register`, user);
		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
};

export const loginUserThunk = async (user, thunkAPI) => {
	try {
		const resp = await axiosInstance.post(`/auth/login/`, user);
		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
};

export const updateUserThunk = async (url, user, thunkAPI) => {
	try {
		const resp = await axiosInstance.patch(url, user);
		return resp.data;
	} catch (error) {
		return checkForUnauthorizedResponse(error, thunkAPI);
	}
};

export const clearStoreThunk = async (message, thunkAPI) => {
	try {
		thunkAPI.dispatch(logOutUser(message));
		return Promise.resolve();
	} catch (error) {
		return Promise.reject();
	}
};
