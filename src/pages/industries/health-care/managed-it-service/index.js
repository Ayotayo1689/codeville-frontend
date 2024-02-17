import LandingLayout from "../../../../layouts/landing.layout";
import React from "react";
import ManagedItService from "../../../../components/healthCare/ManagedItServices/managedItService";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";

const HealthCarePage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title>Managed it services for healthcare</title>
				<meta
					name="description"
					content="Tanta Innovative guarantees reliable, secure, and compliant healthcare IT infrastructure.
                           Our Managed IT Services support stable, secure, and regulatory-compliant infrastructures
                           and medical software."
				/>
			</Head>
			<ManagedItService testimonials={testimonials} />
		</>
	);
};
HealthCarePage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default HealthCarePage;

export async function getStaticProps() {
	let cases = [];
	let testimonials = [];
	let portfolio = [];

	try {
		const portfolioRes = await axiosInstance(
			"/api/servicepage/itconsultingpage/portfolio/"
		);
		portfolio = portfolioRes.data;

		const testimonialRes = await axiosInstance(
			"/api/servicepage/itconsultingpage/testimonials/"
		);
		testimonials = testimonialRes.data;

		const res = await axiosInstance(
			"/api/servicepage/itconsultingpage/casestudy/"
		);
		cases = res.data;
	} catch (error) {}

	return {
		props: {
			cases,
			testimonials,
			portfolio,
		},
		revalidate: 10,
	};
}
