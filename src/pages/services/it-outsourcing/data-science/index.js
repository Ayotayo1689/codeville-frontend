import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import DataScience from "../../../../components/itOutSourcing/dataScience";
import Head from "next/head";

const DataSciencePage = () => {
    return (
        <>
            <Head>
                <title> Data Science IT Outsourcing - Tanta Innovative </title>
                <meta name="description"
                      content="Tanta Innovatives offers data science services that assist companies in conducting data experiments to uncover valuable business insights."/>
            </Head>
            <DataScience/>
        </>
    )
};

DataSciencePage.getLayout = function (page) {
    return <LandingLayout>{page}</LandingLayout>
};

export default DataSciencePage;