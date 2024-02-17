import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import Editor from "../../../components/blog/createBlog";
import withAuth from "../../../utils/auth";

function Edit() {
	return (
		<div>
			<Editor />
		</div>
	);
}

Edit.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export default Edit;
