import React from "react";
import LandingLayout from "../../../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";
import HealthCareForms from "../../../../components/healthCare/healtCare_form";
import { useRouter } from "next/router";
import Head from "next/head";


function HealthCareFormPages({data}) {
    const router = useRouter();
    return (
        <>
            {/*<Head>*/}
            {/*    <title>{data.title} - Tanta innovative</title>*/}
            {/*    <meta*/}
            {/*        name="description"*/}
            {/*        content={*/}
            {/*            data?.short_description?.substring(0, 200) +*/}
            {/*            (data?.short_description?.length > 200 ? "..." : "")*/}
            {/*        }*/}
            {/*    />*/}
            {/*</Head>*/}
            <Box mt={"10rem"}>
                <HealthCareForms id={router?.query?.id || ""}/>
            </Box>
        </>
    );
}

HealthCareFormPages.getLayout = (page) => {
    return <LandingLayout>{page} </LandingLayout>;
};

export default HealthCareFormPages;