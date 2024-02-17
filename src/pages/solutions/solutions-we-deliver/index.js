import React from "react";
import OurSolutions from "../../../components/solutionsDelivered";
import LandingLayout from "../../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";
import axiosInstance from "../../../utils/config";
import Head from "next/head";

const SolutionsWeDeliver = ({ categories, projects }) => {
	return (
		<>
			<Head>
				<title>Our Solutions - Tanta Innovative</title>
				<meta
					name="description"
					content="Explore tailored software solutions across industries.
					   From retail to manufacturing, our offerings meet unique needs.
					    Drive your business forward with industry-specific solutions."
				/>
			</Head>
			<Box inHeight={"100vh"} mt={"5rem"}>
				<OurSolutions categories={categories} projects={projects} />
			</Box>
		</>
	);
};

SolutionsWeDeliver.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default SolutionsWeDeliver;

export async function getStaticProps() {
	// Fetch data from an API or a database
	let categories = [];
	let projects = [];
	try {
		const response = await axiosInstance("/api/homepage/solutioncategories/");

		categories = response.data;
		const projectResponse = await axiosInstance("/api/solutions/");
		projects = projectResponse.data;
	} catch (error) {}

	// Return the fetched data as props
	return {
		props: {
			categories,
			projects,
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 10 seconds
		// revalidate: 10,  In seconds
	};
}
