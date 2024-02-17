import React from "react";
import ContactUs from "../../components/contactUsPage";
import LandingLayout from "../../layouts/landing.layout";
import { useRouter } from "next/router";
import Head from "next/head";
const Contact = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Talk to Us - Tanta Innovative</title>
				<meta name="description"
					  content="Reach out to our dedicated team for prompt, reliable support. Experience exceptional
					  service and personalized solutions. Contact us today for the answers you need." />

			</Head>
			<ContactUs service={router?.query?.service || ""} />
		</>
	)
};

Contact.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default Contact;
