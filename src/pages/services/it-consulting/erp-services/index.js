import ErpServices from "../../../../components/services/itConsulting/erpServices";
import LandingLayout from "../../../../layouts/landing.layout";
import React from "react";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";

const ERPServicesPage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title>ERP Services - Tanta Innovative</title>
				<meta
					name="description"
					content="Tanta Innovative: 15 years of ERP expertise. Enhance workflows, reduce risks, and
                      optimize costs with our comprehensive solutions. Unlock your company's potential with our ERP
                      services."
				/>
			</Head>
			<ErpServices testimonials={testimonials} />
		</>
	);
};

ERPServicesPage.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};

export default ERPServicesPage;

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
