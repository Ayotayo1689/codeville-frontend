import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";

import TwoStepVerification from "../../../components/authenticationPages/twoStepVerification/twoStepVerification";

function TwoStepVerificationPage() {
	return (
		<>
			<Box minHeight={"100vh"}>
				<TwoStepVerification />
			</Box>
		</>
	);
}

// TwoStepVerificationPage.getLayout = (page) => {
// 	return <LandingLayout>{page} </LandingLayout>;
// };

export default TwoStepVerificationPage;
