import React from "react";
import LandingLayout from "../../../layouts/landing.layout";
import Testing from "../../../components/testingAndQA";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import axiosInstance from "@/utils/config";

function Testings({testimonials}) {
  return (
    <Box>
        <Head>
            <title>  Testing - Tanta Innovative </title>
            <meta name="description"
                  content="Ensuring top-notch quality through comprehensive quality assurance services, rigorous testing methodologies, and a commitment to delivering flawless solutions."/>
        </Head>
      <Testing testimonials={testimonials} />
    </Box>
  );
}

Testings.getLayout = (page) => {
  return <LandingLayout>{page}</LandingLayout>;
};
export default Testings;

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

