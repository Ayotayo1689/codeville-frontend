import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import EducationPage from "../../../components/education";

import axiosInstance from "../../../utils/config";
import Head from "next/head";
const Education = ({ stacks }) => {
	return (
		<>
			<Head>
				<title>
					{" "}
					e-Learning Software Development Services - Tanta Innovative{" "}
				</title>
				<meta
					name="description"
					content="Empowering educational institutions and businesses with our e-Learning software
					 development expertise. Partner with us to create customized e-Learning solutions tailored to
					  your unique requirements."
				/>
			</Head>
			<EducationPage stacks={stacks} />
		</>
	);
};

Education.getLayout = (page) => {
	return <LandingLayout>{page}</LandingLayout>;
};
export default Education;
export async function getStaticProps() {
	// Fetch data from an API or a database
	let stacks = [];

	try {
		const stacksResponse = await axiosInstance("/api/aboutuspage/stacks/");
		stacks = stacksResponse.data;
	} catch (error) {}

	// Return the fetched data as props
	return {
		props: {
			stacks,
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 10 seconds
		// revalidate: 10,  In seconds
	};
}
