import React from "react";
import { Box } from "@chakra-ui/react";
import LandingLayout from "../../layouts/landing.layout";
import IotServices from "../../components/iotServices/iotServices";
import Head from "next/head";

function IotServicesPages() {
	return (
		<>
			<Box minHeight={"100vh"} mt={"5rem"}>
				<Head>
					<title>
						Iot Services - Tanta Innovative
					</title>
					<meta
						name="description"
						content="Tanta Innovation: Empowering businesses with IoT services for seamless connectivity, data integration, automation, and transformative insights."
					/>
				</Head>
				<IotServices />
			</Box>
		</>
	);
}

IotServicesPages.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};
export default IotServicesPages;
