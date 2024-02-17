import { Box } from "@chakra-ui/react";
import LandingLayout from "../../layouts/landing.layout";
import BlogsPage from "../../components/blog/Blog";
import axiosInstance from "../../utils/config";
import Head from "next/head";
const Blogs = ({ data }) => {
	return (
		<>
			<Head>
				<title>Insights and Expertise - Tanta Innovative</title>
				<meta
					name="description"
					content="Stay ahead with our expert insights and solutions for software development and IT consulting. Explore our comprehensive collection of informative blogs covering the latest trends, best practices, and cutting-edge technologies in the industry."
				/>
				<meta
					name="keywords"
					content="software development, IT consulting, technology trends, best practices, cutting-edge, technologies, tanta innovative"
				/>
				<meta name="author" content="Tanta Innovative" />
				<meta name="robots" content="index, follow" />
				<meta
					property="og:title"
					content="Insights and Expertise - Tanta Innovative"
				/>
				<meta
					property="og:description"
					content="Stay ahead with our expert insights and solutions for software development and IT
					  consulting. Explore our informative blogs on industry trends, best practices, and cutting-edge technologies."
				/>
			</Head>
			<Box minHeight="100vh" mt="7rem">
				<BlogsPage blogs={data} />
			</Box>
		</>
	);
};

Blogs.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default Blogs;
export async function getServerSideProps() {
	// Fetch data from an API or a database
	let data = [];
	try {
		const response = await axiosInstance("api/blog/");
		data = response.data;
	} catch (error) {}

	// Return the fetched data as props
	return {
		props: {
			data,
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 10 seconds
		// revalidate: 10,  In seconds
	};
}
