import LandingLayout from "../../../layouts/landing.layout";
import Banking from "../../../components/bank&finance";

import React from "react";
import Head from "next/head";

const BankingPage = () => {
  return (
      <>
          <Head>
              <title> Banking and Finance - Tanta Innovative </title>
              <meta name="description"
                    content="We provide banking and finance solutions for your business. We have a team of experts who can help you with your business needs."/>
          </Head>
        <Banking />
      </>
  );
};
BankingPage.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default BankingPage;
