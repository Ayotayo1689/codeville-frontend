import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";

import NotAuthorized from "../../../components/authenticationPages/notAuthorized/notAuthorized";

function NotAuthorizedPage() {
	return (
		<>
			<Box minHeight={"100vh"} mt={"5rem"}>
				<NotAuthorized />
			</Box>
		</>
	);
}

NotAuthorizedPage.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};

export default NotAuthorizedPage;
