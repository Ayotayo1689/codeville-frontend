import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";
import SolutionDetailsPage from "../../../../components/solutionsDelivered/solutionDetails";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";

const SolutionDetail = ({ data, projects }) => {
	return (
		<>
			<Head>
				<title>{data.title} - Tanta innovative</title>
				<meta
					name="description"
					content={
						data?.short_description?.substring(0, 200) +
						(data?.short_description?.length > 200 ? "..." : "")
					}
				/>
			</Head>
			<Box minHeight={"100vh"} mt={"5rem"}>
				<SolutionDetailsPage data={data} projects={projects} />
			</Box>
		</>
	);
};
SolutionDetail.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default SolutionDetail;

export async function getServerSideProps({ params }) {
	let data = [];
	let projects = [];
	try {
		const response = await axiosInstance.get(
			`/api/homepage/solutions/${params.solutionID[0]}/`
		);
		const projectResponse = await axiosInstance.get(`/api/homepage/solutions/`);
		projects = projectResponse.data;
		data = response.data;
	} catch (error) {}

	return {
		props: {
			data,
			projects,
		},
	};
}
