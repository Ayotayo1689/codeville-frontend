import { Box } from "@chakra-ui/react";
import LandingLayout from "../../../layouts/landing.layout";
import ItOutSourcing from "../../../components/itOutSourcing";
import axiosInstance from "../../../utils/config";
import Head from "next/head";
import React from "react";
const ItOutSourcingPage = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title>IT Outsourcing - Tanta Innovative</title>
				<meta
					name="description"
					content="Discuss project needs, explore innovative solutions, and transform ideas into
					  reality with our dedicated team of IT consultants"
				/>
			</Head>

			<Box minHeight={"100vh"} mt={"7rem"}>
				<ItOutSourcing testimonials={testimonials} />
			</Box>
		</>
	);
};

ItOutSourcingPage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default ItOutSourcingPage;

export async function getStaticProps() {
	let cases = [];
	let testimonials = [];
	let portfolio = [];

	try {
		const portfolioRes = await axiosInstance(
			"/api/servicepage/itconsultingpage/portfolio/"
		);
		portfolio = portfolioRes.data;

		const testimonialRes = await axiosInstance(
			"/api/servicepage/itconsultingpage/testimonials/"
		);
		testimonials = testimonialRes.data;

		const res = await axiosInstance(
			"/api/servicepage/itconsultingpage/casestudy/"
		);
		cases = res.data;
	} catch (error) {}

	return {
		props: {
			cases,
			testimonials,
			portfolio,
		},
		revalidate: 10,
	};
}
