import React from "react";
import Head from "next/head";
import LandingLayout from "../../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";
import SingleBlogPage from "../../../components/blog/SingleBlog";

import axiosInstance from "../../../utils/config";

const SingleBlog = ({ data, allBlogs }) => {
	const { title, content } = data;
	const metaDescription =
		content?.substring(0, 200) + (content?.length > 200 ? "..." : "");

	return (
		<>
			<Head>
				<title>{title} - Tanta Innovative</title>
				<meta name="description" content={metaDescription} />
			</Head>
			<Box minHeight={"100vh"} mt={"5rem"}>
				<SingleBlogPage data={data} allBlogs={allBlogs} />
			</Box>
		</>
	);
};

SingleBlog.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export async function getServerSideProps({ params }) {
	let data = {};
	let allBlogs = [];
	try {
		const response = await axiosInstance.get(
			`/api/blog/${params.blogId[0]}/with_comments/`
		);
		const allBlogsResponse = await axiosInstance("api/blog/");
		data = response.data;
		allBlogs = allBlogsResponse.data;
	} catch (error) {}

	return {
		props: {
			data,
			allBlogs,
		},
	};
}

export default SingleBlog;
