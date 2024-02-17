import React from "react";
import LandingLayout from "../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";

import MaintenancePage from "../../components/authenticationPages/maintenancePage/maintenancePage";

function Maintenance() {
	return (
		<>
			<Box minHeight={"100vh"} mt={"5rem"}>
				<MaintenancePage />
			</Box>
		</>
	);
}

Maintenance.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};

export default Maintenance;
