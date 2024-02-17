import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";

import Login from "../../../components/authenticationPages/login/login";
import Head from "next/head";

function LoginPage() {
	return (
		<>
			<Head>
				<title>Sign In- Tanta Innovative</title>
				<meta name="description"
					  content="Welcome back"/>
			</Head>
			<Box minHeight={"100vh"}>
				<Login />
			</Box>
		</>
	);
}

// LoginPage.getLayout = (page) => {
// 	return <LandingLayout>{page} </LandingLayout>;
// };

export default LoginPage;
