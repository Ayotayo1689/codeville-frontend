import {Box} from "@chakra-ui/react";
import React from "react";
import SolutionsForRetail from "../../../components/industries/solutionsForRetail";
import LandingLayout from "../../../layouts/landing.layout";
import Head from "next/head";

function Retail() {
    return (
        <><Head>
            <title>Solutions For Retail - Tanta Innovative</title>
            <meta name="description"
                  content=
                      "Revolutionize retail with our innovative solutions. Empowering retailers in the digital era with
                       e-commerce and personalized customer experiences. Explore tailored solutions today." />
        </Head>
            <Box>

                <SolutionsForRetail/>
            </Box>
        </>

    );
}

Retail.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
};

export default Retail;
