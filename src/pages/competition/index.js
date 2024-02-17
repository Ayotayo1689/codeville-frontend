import React from 'react';
import LandingLayout from '../../layouts/landing.layout';
import CompetitionPage from "../../components/competition";
import {Box} from "@chakra-ui/react";
import Head from "next/head";

const Competition = () => {
    return (

        <>
            <Head>

                <title> Tanta Idea Competition - Tanta Innovative </title>
                <meta name="description"
                      content=
                          "Submit innovative software ideas in our competition. Top two winners get free development by
                           Tanta Innovative Limited."/>

            </Head>

            <Box minHeight={"100vh"} mt={"7rem"}>
                <CompetitionPage/>
            </Box>
        </>

    )
}

Competition.getLayout = (page) => {
    return <LandingLayout>{page}</LandingLayout>;
};
export default Competition
