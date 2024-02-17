import HealthCareITSupport from "../../../../components/services/itConsulting/healthcare_it_support";
import LandingLayout from "../../../../layouts/landing.layout";
import React from "react";
import Head from "next/head";

const HealthcareITSupportPage = () => {
    return (
        <>
            <Head>
                <title>HealthCare IT Support - Tanta Innovative</title>
                <meta name="description"
                      content="We ensure seamless operations, data security, and compliance in the healthcare industry with our expert services. "/>
            </Head>
            <HealthCareITSupport />
        </>
    )
}

HealthcareITSupportPage.getLayout = (page) => {
    return <LandingLayout>{page} </LandingLayout>;
};

export default HealthcareITSupportPage