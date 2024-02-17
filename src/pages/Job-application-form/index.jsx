import React from "react";
import LandingLayout from "../../layouts/landing.layout";
import JobApplicationForm from "../../components/jobApplicationForm/index";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

function JobApplicationFormPage() {
	return (
		<>
			<Head>
				<title>Job Application Form - Tanta innovative</title>
				<meta name="description"
					  content="Join Tanta Innovative and apply for a job. Contribute to innovative projects in a
					   collaborative and dynamic environment. Explore rewarding career paths across departments.
					    Find your passion with us." />
			</Head>
			<Box minHeight={"100vh"} mt={"5rem"}>
				<JobApplicationForm />
			</Box>
		</>
	);
}
JobApplicationFormPage.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};

export default JobApplicationFormPage;
