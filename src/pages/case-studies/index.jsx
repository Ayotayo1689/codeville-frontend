import LandingLayout from "../../layouts/landing.layout";
import CaseStudys from "../../components/caseStudies";
import axiosInstance from "../../utils/config";
import Head from "next/head";

const CaseStudy = ({ data, projects }) => {
	return (
		<>
			<Head>
				<title>Case Studies - Tanta innovative</title>
				<meta name="description"
					  content="Explore our case studies and discover how we have helped our clients achieve their goals." />
			</Head>
			<CaseStudys data={data} projects={projects} />
		</>
	);
};
CaseStudy.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default CaseStudy;
// pages/index.js

export async function getServerSideProps() {
	// Fetch data from an API or a database
	let data = [];
	let projects = [];
	try {
		const response = await axiosInstance("api/casestudycategory/");
		data = response.data;
		const projectResponse = await axiosInstance.get(`/api/casestudy/`);
		projects = projectResponse.data;
	} catch (error) {}

	// Return the fetched data as props
	return {
		props: {
			data,
			projects,
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 10 seconds
		// revalidate: 10,  In seconds
	};
}
