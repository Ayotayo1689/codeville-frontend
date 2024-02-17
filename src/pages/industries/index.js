import React from "react";
import Industries from "../../components/industries";
import LandingLayout from "../../layouts/landing.layout";
import Head from "next/head";


const IndustriesPage = () => {
	return <div>
		<Head>
			<title>Industries - Tanta Innovative</title>
			<meta name="description"
				  content="Streamline your industrial with our tailored solutions. From supply chain management to process automation, we empower manufacturers to stay competitive and drive growth. Explore our solutions for the manufacturing industry now."/>
		</Head>
		<Industries/>
	</div>;
};

IndustriesPage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default IndustriesPage;



