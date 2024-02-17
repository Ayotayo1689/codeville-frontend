import { Box } from "@chakra-ui/react";
import InfrastructureSupport from "../../../../components/itOutSourcing/infrastructureSupport";
import LandingLayout from "../../../../layouts/landing.layout";
import axiosInstance from "../../../../utils/config";
import Head from "next/head";
import React from "react";
import RemoteWorkConsulting from "@/components/itOutSourcing/remoteWorkConsulting";
const RemoteWorkConsultingPage = ({ testimonials }) => {
    return (
        <>
            <Head>
                <title>IT Outsourcing - Tanta Innovative</title>
                <meta
                    name="description"
                    content="Boost productivity and foster success with Remote Work Consulting. Our expert IT Outsourcing services empower your workforce to thrive in remote environments. Experience seamless transitions and optimize remote work capabilities."
                />
            </Head>

            <Box minHeight={"100vh"} mt={"7rem"}>
                <RemoteWorkConsulting/>
            </Box>
        </>
    );
};

RemoteWorkConsultingPage.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
};
export default RemoteWorkConsultingPage;

export async function getStaticProps() {
    let testimonials = [];

    try {
        const testimonialRes = await axiosInstance(
            "/api/servicepage/itconsultingpage/testimonials/"
        );
        testimonials = testimonialRes.data;
    } catch (error) {}

    return {
        props: {
            testimonials,
        },
        revalidate: 10,
    };
}
