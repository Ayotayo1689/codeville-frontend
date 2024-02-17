import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import ItStrategy from "../../../../components/services/itConsulting/itStrategy";
import { Box } from "@chakra-ui/react";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";

const it_strategy_consulting = ({ testimonials }) => {
	return (
		<>
			<Head>
				<title> Information Technology Consulting- Tanta Innovative</title>
				<meta
					name="description"
					content="Explore innovative solutions, and discover how we can transform your ideas
                                    into reality, explore innovative solutions, and discover how we can transform your
                                    ideas into reality."
				/>
			</Head>
			<Box minHeight={"100vh"} mt={"5rem"}>
				<ItStrategy testimonials={testimonials} />
			</Box>
		</>
	);
};

it_strategy_consulting.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};

export default it_strategy_consulting;

export async function getStaticProps() {
	let testimonials = [];

	try {
		const testimonialRes = await axiosInstance(
			"/api/servicepage/itconsultingpage/testimonials/"
		);
		testimonials = testimonialRes.data;
	} catch (error) {}

	return {
		props: {
			testimonials,
		},
		revalidate: 10,
	};
}
