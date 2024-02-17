import React from "react";
import Head from "next/head";
import LandingLayout from "../../../layouts/landing.layout";
import Careers from "../../../components/careers/careers";
import { Box } from "@chakra-ui/react";
import axiosInstance from "../../../utils/config";

export async function getServerSideProps() {
	let departments = [];
	let careers = [];

	try {
		const response = await axiosInstance.get("/api/job-department/");
		const careerResp = await axiosInstance.get("/api/careers/");
		departments = response.data;
		careers = careerResp.data;
	} catch (error) {}

	return {
		props: {
			departments,
			careers,
		},
	};
}

function TantaCareers({ departments, careers }) {
	return (
		<>
			<Head>
				<title>Career Opportunities - Tanta Innovative Limited</title>
				<meta
					name="description"
					content="Discover career opportunities at Tanta Innovative. Join our team, contribute to innovative
                 projects, and thrive in a collaborative work environment. Find your passion and rewarding paths in
                 various departments."
				/>
			</Head>
			<Box minHeight={"100vh"} mt={"7rem"}>
				<Careers departments={departments} careers={careers} />
			</Box>
		</>
	);
}

TantaCareers.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};

export default TantaCareers;
