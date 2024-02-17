import React from "react";
import LandingLayout from "../../layouts/landing.layout";
import Referral from "../../components/partnerWithUs/referral";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

function PartnerWithUs() {
	return (
		<>
			<Head>
				<title>Become an Agent | Tanta Innovative</title>
				<meta name="description"
					  content="Join Tanta Innovative Agent Program today, get trained, equipped and make unmatched commissions on every closed deal."/>
			</Head>
			<Box minHeight={"100vh"} mt={"10rem"}>
				<Referral />
			</Box>
		</>
	);
}

PartnerWithUs.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};

export default PartnerWithUs;
