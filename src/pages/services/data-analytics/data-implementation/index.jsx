import React from "react";
import DataImplementation from "../../../../components/dataAnalytics/dataImplementation";
import LandingLayout from "../../../../layouts/landing.layout";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";
const DataImplementationPage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title> Analytics Implementation - Tanta Innovative</title>
				<meta
					name="description"
					content="Supercharge data capabilities with our exceptional Data Implementation services.
                    Specializing in seamless integration, migration, and implementation. Unlock insights and
                     optimize processes with our solutions."
				/>
			</Head>
			<DataImplementation testimonials={testimonials} />
		</>
	);
};
DataImplementationPage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default DataImplementationPage;

export async function getStaticProps() {
	let testimonials = [];

	try {
		const testimonialRes = await axiosInstance(
			"/api/servicepage/itconsultingpage/testimonials/"
		);
		testimonials = testimonialRes.data;
	} catch (error) {}

	return {
		props: {
			testimonials,
		},
		revalidate: 10,
	};
}
