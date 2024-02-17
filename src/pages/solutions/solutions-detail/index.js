import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import HealthcareSolutionsDetails from "../../../components/solutionsDetails";
import Head from "next/head";

const HealthCare = () => {
	return(
		<>
			<Head>
				<title>Healthcare Solutions Details - Tanta Innovative</title>
				<meta name="description"
					  content="Empowering healthcare with tailored solutions for enhanced patient care, operational efficiency, data analytics, and cybersecurity. "/>
			</Head>
			<HealthcareSolutionsDetails/>
		</>
	)
};

HealthCare.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};

export default HealthCare;
