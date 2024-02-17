import Leaderships from "../../components/leadership";
import LandingLayout from "../../layouts/landing.layout";
import Head from "next/head";
import React from "react";

function JobDetails() {
	return (
		<div>
			<Head>
				<title>Leaderships - Tanta Innovative</title>
				<meta name="description"
					  content="
Tanta Innovation: Guided by visionary leadership, driving innovation, and fostering growth through strategic decision-making and empowering teams. "/>
			</Head>
			<Leaderships />
		</div>
	)
}
JobDetails.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default JobDetails;
