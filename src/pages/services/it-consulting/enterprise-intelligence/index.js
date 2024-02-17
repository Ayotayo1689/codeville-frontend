import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import axiosInstance from "../../../../utils/config";
import EnterpriseIntelligence from "../../../../components/services/itConsulting/enterpriseIntelligence";
import Head from "next/head";

const EnterpriseIntelligencePage = ({ testimonials }) => {
	return (
		<div>
			<Head>
				<title>Enterprise Intelligence Consulting</title>
				<meta
					name="description"
					content="Enterprise business intelligence solutions provide data analysis and role-based access
                    to analytics results. They consolidate multi-formatted data into secure, centralized storage,
                    empowering business users at all levels."
				/>
			</Head>
			<EnterpriseIntelligence testimonials={testimonials} />
		</div>
	);
};
EnterpriseIntelligencePage.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};
export default EnterpriseIntelligencePage;

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
