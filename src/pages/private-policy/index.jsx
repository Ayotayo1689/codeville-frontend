import LandingLayout from "../../layouts/landing.layout";
import PrivatePolicy from "../../components/privatePolicy";
import Head from "next/head";
import React from "react";
const PrivatePolicyPages= () => {
    return (
        <>
            <Head>
                <title>Private Policy - Tanta Innovative</title>
                <meta name="description"
                      content="Our privacy and policy: committed to protecting your personal info. Policies ensure
                       confidentiality, security, and responsible data handling. Trust us for privacy and transparency."
                />
            </Head>
            <PrivatePolicy/>
        </>
    );
};
PrivatePolicyPages.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
};
export default PrivatePolicyPages;
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
