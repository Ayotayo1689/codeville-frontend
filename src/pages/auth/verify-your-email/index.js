import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";

import VerifyYourEmail from "../../../components/authenticationPages/verifyEmail/verifyYourEmail";

function VerifyYourEmailPage() {
	return (
		<>
			<Box minHeight={"100vh"}>
				<VerifyYourEmail />
			</Box>
		</>
	);
}

// VerifyYourEmailPage.getLayout = (page) => {
// 	return <LandingLayout>{page} </LandingLayout>;
// };

export default VerifyYourEmailPage;
