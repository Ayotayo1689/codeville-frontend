import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";

import SignUp from "../../../components/authenticationPages/register/signUp";

function SignUpPage() {
	return (
		<>
			<Box minHeight={"100vh"}>
				<SignUp />
			</Box>
		</>
	);
}

// SignUpPage.getLayout = (page) => {
// 	return <LandingLayout>{page} </LandingLayout>;
// };

export default SignUpPage;
