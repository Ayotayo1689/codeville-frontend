import React from "react";
import { Box } from "@chakra-ui/react";
import LandingLayout from "../../../layouts/landing.layout";
import IotServices from "../../../components/iotServices/iotServices";
import Head from "next/head";

function IotServicesPage() {
	return (
		<>
			<Head>
				<title>Internet of Things (IoT) - Tanta Innovative</title>
				<meta name="description"
					  content="Explore our comprehensive IoT services for seamless smart connectivity. Unlock new
					  opportunities with connected devices. Experience IoT's power for business growth." />
			</Head>
			<Box minHeight={"100vh"} mt={"5rem"}>
				<IotServices />
			</Box>
		</>
	);
}

IotServicesPage.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};
export default IotServicesPage;
