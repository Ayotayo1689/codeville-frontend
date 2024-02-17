import LandingLayout from "../../layouts/landing.layout";
import TermsAndConditions from "../../components/termsOfpolicy";
import Head from "next/head";
import React from "react";
const TermsAndConditionsPages= () => {
    return (
        <>
            <Head>
                <title>Terms And Conditions - Tanta Innovative</title>
                <meta name="description"
                      content="Our terms and conditions: rules, guidelines, and agreements governing our services.
                      Covers user responsibilities, IP rights, liability limits, and dispute resolution. Understand
                      your rights and obligations."/>
            </Head>
            <TermsAndConditions/>
        </>
    );
};
TermsAndConditionsPages.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
};
export default TermsAndConditionsPages;
// pages/index.jsx

// export async function getStaticProps() {
// 	// Fetch data from an API or a database
// 	const response = await axiosInstance("/api/careers/");
// 	const data = response.data;

// 	// Return the fetched data as props
// 	return {
// 		props: {
// 			data,
// 		},
// 		// Next.js will attempt to re-generate the page:
// 		// - When a request comes in
// 		// - At most once every 10 seconds
// 		revalidate: 10, // In seconds
// 	};
// }