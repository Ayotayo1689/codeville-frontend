import React from "react";
import Calculator from "../../../components/costCalculator/costCalculator";
import LandingLayout from "../../../layouts/landing.layout";
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { userAgent } from "next/server";
const CostCalculatorpage = () => {
	const router = useRouter();

	return (
		<>
			<Box minHeight={"100vh"} mt={"7rem"}>
				<Calculator service={router?.query?.service || ""} />
			</Box>
		</>
	);
};

CostCalculatorpage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default CostCalculatorpage;
