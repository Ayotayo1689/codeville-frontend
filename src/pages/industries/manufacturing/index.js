import { Box } from "@chakra-ui/react";
import LandingLayout from "../../../layouts/landing.layout";
import Manufacturing from "../../../components/manufacturing";
import Head from "next/head";
import React from "react";
const ManufacturingPage = () => {
	return (
		<>
			<Head>
				<title>IT Consulting - Tanta Innovative</title>
				<meta name="description"
					  content="Streamline your manufacturing operations with our tailored solutions. From supply chain management to process automation, we empower manufacturers to stay competitive and drive growth. Explore our solutions for the manufacturing industry now."/>
			</Head>
			<Box minHeight={"100vh"} mt={"7rem"}>
				<Manufacturing></Manufacturing>
			</Box>
		</>

	);
};

ManufacturingPage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default ManufacturingPage;
