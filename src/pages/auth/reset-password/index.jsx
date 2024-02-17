import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";

import ResetPassword from "../../../components/authenticationPages/resetPassword/resetPassword";
import Head from "next/head";

function ResetPasswordPage() {
	return (
		<>
			<Head>
				<title>Reset your password - Tanta Innovative</title>
				<meta name="description"
					  content="Forgot your password? No worries, you can reset your password here."/>
			</Head>
			<Box minHeight={"100vh"}>
				<ResetPassword />
			</Box>
		</>
	);
}

// ResetPasswordPage.getLayout = (page) => {
// 	return <LandingLayout>{page} </LandingLayout>;
// };

export default ResetPasswordPage;
