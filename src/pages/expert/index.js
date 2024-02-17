import LandingLayout from "../../layouts/landing.layout";
import Expert from "../../components/expert";
import axiosInstance from "../../utils/config";
import Head from "next/head";
import React from "react";

export const getServerSideProps = async () => {
  let expertData = [];
  try {
    const response = await axiosInstance("/api/ourexperts/experts/")
    expertData = response.data;
  } catch (error) {}

  return {
    props: {
      expertData,
    },
  };
};



const ExpertPage = ({ expertData }) => {
  return (
      <>
        <Head>
          <title> Meet Our Experts - Tanta Innovative </title>
          <meta
              name="description"
              content="Tanta Innovative Limited has a team of experts in various fields of technology. We are always ready to help you with your tech questions."
          />
        </Head>
        <Expert expert={expertData} />
      </>
  )
};
ExpertPage.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default ExpertPage;

