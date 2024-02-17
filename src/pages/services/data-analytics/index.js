import LandingLayout from "../../../layouts/landing.layout";
import DataAnalytics from "../../../components/dataAnalytics/index";

import React from "react";
import Head from "next/head";

const DataAnalyticsPage = () => {

  return(
      <>
        <Head>
          <title>Data Analytics Services - Tanta Innovative</title>
          <meta name="description"
                content="Harness the power of data analytics for informed decision-making. Our experts deliver
                valuable insights and actionable recommendations to drive your business forward." />
        </Head>
        <DataAnalytics />;
      </>
      )

};
DataAnalyticsPage.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default DataAnalyticsPage;
