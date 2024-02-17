import LandingLayout from "../../../../layouts/landing.layout";
import RetailItServices from "../../../../components/services/itConsulting/retail_ItServices/index";
import React from "react";
import Head from "next/head";

const RetailItServicesPage = () => {
    return(
        <>
            <Head>
                <title>Retail It-Services - Tanta Innovative</title>
                <meta name="description"
                      content="Tanta Innovation offers comprehensive retail IT services. Enhance your business operations with our expert solutions, tailored for the retail industry. "/>
            </Head>
            <RetailItServices/>
        </>
    )
};
RetailItServicesPage.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;

};

export default RetailItServicesPage;
