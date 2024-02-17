import React from "react";
import Head from "next/head";
import LandingLayout from "../../layouts/landing.layout";
import Employees from "../../components/employee/employees";
import axiosInstance from "../../utils/config";

function EmployeeDetail({ data }) {
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
			<Employees data={data} />
		</>
	);
}
EmployeeDetail.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};

export async function getServerSideProps({ params }) {
	let data = {};
	try {
		const response = await axiosInstance.get(
			`/api/employee/profile/${params.employeeId}`
		);
		data = response.data;
	} catch (error) {}

	return {
		props: {
			data,
		},
	};
}
export default EmployeeDetail;
