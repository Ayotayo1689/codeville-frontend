import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import CloudMigrationServices from "../../../../components/itOutSourcing/cloudMigration";
import Head from "next/head";



const CloudMigrationPage = () => {
    return(
        <>
            <Head>
                <title>  Cloud Migration Services - Tanta Innovative </title>
                <meta name="description"
                      content="For half a decade, Tanta's cloud experts have provided seamless cloud migration
                             services. Move your applications and databases to the cloud with our expertise."/>
            </Head>
            <CloudMigrationServices/>;

        </>
        )


};
CloudMigrationPage.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
};

export default CloudMigrationPage;