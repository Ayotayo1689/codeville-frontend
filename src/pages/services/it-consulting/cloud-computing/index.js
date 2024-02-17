import React from "react";
import CloudComputing from "../../../../components/services/itConsulting/cloudComputing";
import LandingLayout from "../../../../layouts/landing.layout";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";

const CloudComputingPage = ({ testimonials }) => {
	return (
		<div>
			<Head>
				<title> Cloud Computing Consulting- Tanta Innovative</title>
				<meta
					name="description"
					content="Explore innovative solutions and see your ideas come to life.
                     Discover how we can transform your vision into reality."
				/>
			</Head>
			<CloudComputing testimonials={testimonials} />
		</div>
	);
};
CloudComputingPage.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};
export default CloudComputingPage;

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
