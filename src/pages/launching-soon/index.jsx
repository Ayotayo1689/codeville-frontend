import React from "react";
import LandingLayout from "../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";

import LaunchingSoon from "../../components/authenticationPages/launchingSoon/launchingSoon";

function LaunchingSoonPage() {
	return (
		<>
			<Box minHeight={"100vh"} mt={"5rem"}>
				<LaunchingSoon />
			</Box>
		</>
	);
}

LaunchingSoonPage.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};

export default LaunchingSoonPage;
