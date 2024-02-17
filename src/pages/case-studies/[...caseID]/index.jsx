import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";
import SingleCaseStudy from "../../../components/caseStudies/singleCaseStudy";
import axiosInstance from "../../../utils/config";
import Head from "next/head";

const SingleCasePage = ({ data, projects }) => {
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
				<SingleCaseStudy data={data} projects={projects} />
			</Box>
		</>
	);
};
SingleCasePage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default SingleCasePage;

export async function getServerSideProps({ params }) {
	let data = [];
	let projects = [];
	try {
		const response = await axiosInstance.get(
			`/api/casestudy/${params.caseID[0]}/`
		);
		const projectResponse = await axiosInstance.get(`/api/casestudy/`);
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
