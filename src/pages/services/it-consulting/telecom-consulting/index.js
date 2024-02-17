import TelecomConsulting from "../../../../components/services/itConsulting/telecomConsulting/index";
import LandingLayout from "../../../../layouts/landing.layout";
import React from "react";
import Head from "next/head";


const TelecomConsultingPage = () => {
    return (
        <>
            <Head>
                <title>Telecom Consulting - Tanta Innovative</title>
                <meta name="description"
                      content="Tanta Innovation provides expert telecom consulting services. Maximize your telecom infrastructure efficiency and performance with our tailored solutions.  "/>
            </Head>
            <TelecomConsulting/>
        </>
        )

};
TelecomConsultingPage.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
};

export default TelecomConsultingPage;