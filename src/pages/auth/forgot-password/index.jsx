import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";

import ForgotPassword from "../../../components/authenticationPages/forgotPassword/forgotPassword";

function ForgotPasswordPage() {
	return (
		<>
			<Box minHeight={"100vh"}>
				<ForgotPassword />
			</Box>
		</>
	);
}

// ForgotPasswordPage.getLayout = (page) => {
// 	return <LandingLayout>{page} </LandingLayout>;
// };

export default ForgotPasswordPage;
