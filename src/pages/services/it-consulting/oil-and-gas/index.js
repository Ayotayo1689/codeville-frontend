import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import OilAndGas from "../../../../components/services/itConsulting/oilAndGas";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import axiosInstance from "@/utils/config";




const oil_and_gas = ({ testimonials }) => {
    return<>
        <Head>
            <title>    Financial Software Consulting- Tanta Innovative Limited</title>
            <meta
                name="description"
                content="Tanta has been providing IT solutions for the oil and gas sector since 2010 by utilizing
                    big data, the cloud, the IIoT, sophisticated analysis, virtual reality (VR), and augmented reality (AR)"
            />

        </Head>
        <Box minHeight={"100vh"} mt={"5rem"}>
            <Head>
                <title>Oil And Gas - Tanta Innovative</title>
                <meta name="description"
                      content="Tanta Innovation delivers cutting-edge solutions for the oil and gas industry. "/>
            </Head>
            <OilAndGas testimonials={testimonials} />
        </Box>
    </>
};

oil_and_gas.getLayout = (page) => {
    return <LandingLayout>{page} </LandingLayout>;
};

export default oil_and_gas;

export async function getStaticProps() {
    let cases = [];
    let testimonials = [];
    let portfolio = [];

    try {
        const portfolioRes = await axiosInstance(
            "/api/servicepage/itconsultingpage/portfolio/"
        );
        portfolio = portfolioRes.data;

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
            portfolio,
        },
        revalidate: 10,
    };
}
