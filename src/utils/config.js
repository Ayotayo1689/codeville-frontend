import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";
import jwtDecode from "jwt-decode";
// creates an instance of axios
const baseURL =
	process.env.NEXT_PUBLIC_BASE_URL || "https://api.tantainnovatives.com";
const axiosInstance = axios.create({
	baseURL,
});
axiosInstance.interceptors.request.use(async (config) => {
	try {
		const user = getUserFromLocalStorage();
		if (user) {
			const token = user.token;
			config.headers["Authorization"] = `Bearer ${token}`;

			// const decodedToken = jwtDecode(token);
			// const currentTime = new Date().toISOString();
			// const tokenExp = new Date(decodedToken.exp * 1000).toISOString(); // convert token exp to ISO format
			//
			//
			//

			// if (tokenExp) {
			// 	//
			// 	// Token is expired
			// 	try {
			// 		const response = await axios.post(`${baseUrl}/auth/refresh/`, {
			// 			refresh: user.refresh,
			// 		});

			// 		const newToken = response.data.access;
			// 		const newDecodedToken = jwtDecode(newToken);
			// 		config.headers["Authorization"] = `Bearer ${newToken}`;
			// 		addUserToLocalStorage({ ...user, token: newToken });
			// 	} catch (error) {
			// 		// console.error("Error refreshing token:", error);
			// 		// Perform the necessary action, such as redirecting to the login page
			// 	}
			// } else {
			// 	//
			// 	config.headers["Authorization"] = `Bearer ${token}`;
			// }
		} else {
			//
		}
	} catch (error) {
		console.error("Error in interceptor:", error);
	}

	return config;
});

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
	if (error.response.status === 401) {
		thunkAPI.dispatch(clearStore());
		return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
	}
	return thunkAPI.rejectWithValue(error.response.data);
};

export default axiosInstance;
