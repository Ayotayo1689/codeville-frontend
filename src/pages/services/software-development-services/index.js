import React from "react";
import SoftwareDevelopment from "../../../components/softwareDevelopment";
import LandingLayout from "../../../layouts/landing.layout";
import Head from "next/head";

function SoftwareDevelopmentServices() {
  return (
      <>
        <Head>
          <title>Software Development - Tanta Innovative</title>
          <meta name="description"
                content="Tanta Innovation delivers tailored software development solutions, optimizing performance to drive business success. With our expertise, experience seamless development and exceptional user experiences. Discover our innovative approach today."/>
        </Head>
        <SoftwareDevelopment />
      </>
      )

}

SoftwareDevelopmentServices.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default SoftwareDevelopmentServices;
