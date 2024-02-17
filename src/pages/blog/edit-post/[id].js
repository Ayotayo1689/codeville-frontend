import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import Editor from "../../../components/blog/editPost";
import withAuth from "../../../utils/auth";
import axiosInstance from "@/utils/config";
function Edit({ data }) {
	return (
		<div>
			<Editor data={data} />
		</div>
	);
}

Edit.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export async function getServerSideProps({ params }) {
	let data = {};

	try {
		const response = await axiosInstance.get(`/api/blog/${params.id}/`);

		data = response.data;
	} catch (error) {}

	return {
		props: {
			data,
		},
	};
}

export default Edit;
