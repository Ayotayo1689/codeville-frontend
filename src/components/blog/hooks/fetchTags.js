import { useState, useEffect, useCallback } from "react";
import axiosInstance from "@/utils/config";
const useFetchTags = () => {
	const [tags, setTags] = useState([]);
	const [topics, setTopics] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const fetchDataFromApi1 = useCallback(async () => {
		try {
			const response = await axiosInstance.get("api/blog/topic/");
			setTopics(response.data);
		} catch (error) {
			setError("Error fetching topics");
		}
	}, []);
	const fetchDataFromApi2 = useCallback(async () => {
		try {
			const response = await axiosInstance.get("/api/tags/");
			setTags(response.data);
		} catch (error) {
			setError("Error fetching tags");
		}
	}, []);

	useEffect(() => {
		// Function to fetch data from the first API

		// Function to fetch data from the second API

		// Trigger both API calls in parallel
		Promise.all([fetchDataFromApi1(), fetchDataFromApi2()])
			.then(() => setIsLoading(false))
			.catch((error) => setError("Error fetching data from one or both APIs"));
	}, [fetchDataFromApi1, fetchDataFromApi2]);

	return { tags, topics, isLoading, error };
};

export default useFetchTags;
