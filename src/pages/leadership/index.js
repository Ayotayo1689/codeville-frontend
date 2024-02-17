import Leaderships from "../../components/leadership";
import LandingLayout from "../../layouts/landing.layout";
import axiosInstance from "../../utils/config";
import Head from "next/head";
import React from "react";

export async function getStaticProps() {
	let meetTheTeam = [];
	try {
		const response = await axiosInstance.get(
			"/api/leadershippage/meet-the-team/"
		);
		meetTheTeam = response.data;
	} catch (error) {}

	return {
		props: {
			meetTheTeam,
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 10 seconds
		revalidate: 10, // In seconds
	};
}

function Leadership({ meetTheTeam }) {
	return (
		<>
			<Head>
				<title>Leadership - Tanta Innovative Limited</title>
				<meta
					name="description"
					content="Read a letter from the CEO of Tanta Innovative Limited, Abraham Esandayinze Tanta, and selected
              representatives from our leadership team."
				/>
				<meta name="keywords" content="IT Outsourcing, Managed Testing" />
			</Head>
			<Leaderships meetTheTeam={meetTheTeam} />
		</>
	);
}
Leadership.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default Leadership;

// export another value and add it to jeffreys container
