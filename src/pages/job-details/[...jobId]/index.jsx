import React from "react";
import Head from "next/head";
import LandingLayout from "../../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";
import Details from "../../../components/jobDetail/jobDetail";
import axiosInstance from "../../../utils/config";

const Job = ({ career }) => {
	const { job_title, description } = career;

	return (
		<>
			<Head>
				<title>{job_title} Role - Tanta innovative</title>
				<meta
					name="description"
					content={
						description?.substring(0, 155) +
						(description?.length > 155 ? "..." : "")
					}
				/>
			</Head>
			<Box minHeight={"100vh"} mt={"9rem"}>
				<Details career={career} />
			</Box>
		</>
	);
};

Job.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default Job;

export async function getServerSideProps({ params }) {
	let career = {};
	try {
		const response = await axiosInstance.get(`/api/careers/${params.jobId[1]}`);
		career = response.data;
	} catch (error) {}

	return {
		props: {
			career,
		},
	};
}
