import LandingLayout from "../../../../layouts/landing.layout";
import React from "react";
import CyberSecurityItOutSourcing from "../../../../components/itOutSourcing/cyberSecurityItOutSourcing/index";
import Head from "next/head";
import axiosInstance from "@/utils/config";


const CyberSecurityItOutSourcingPage = ({ testimonials, cases }) => {
    return(
        <>
            <Head>
                <title> Cybersecurity Services - Tanta Innovative </title>
                <meta name="description"
                      content="Managed testing services encompass test planning, design, execution, reporting, and QA
                      process improvements."/>
            </Head>
            <CyberSecurityItOutSourcing testimonials={testimonials} cases={cases}/>
        </>
        )


};
CyberSecurityItOutSourcingPage.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>
};

export default CyberSecurityItOutSourcingPage;

export async function getStaticProps() {
    let cases = [];
    let testimonials = [];

    try {
        const testimonialRes = await axiosInstance(
            "/api/servicepage/itconsultingpage/testimonials/"
        );
        testimonials = testimonialRes.data;

        const res = await axiosInstance(
            "/api/servicepage/itconsultingpage/casestudy/"
        );
        cases = res.data;
    } catch (error) {}

    return {
        props: {
            cases,
            testimonials,
        },
        revalidate: 10,
    };

}
