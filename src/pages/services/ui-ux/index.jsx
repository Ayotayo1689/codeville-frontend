import LandingLayout from "../../../layouts/landing.layout";
// import axiosInstance from "../../utils/axios";
import UiUxPages from "../../../components/ui_ux";
import Head from "next/head";
import React from "react";


const UiUx = () => {
  return (
    <>
        <Head>
            <title>Ui/Ux</title>
            <meta
                name="description"
                content="With our expertise in web design and development, we ensure that your website not only looks visually appealing but also functions flawlessly, providing an outstanding online experience for your users. "/>
        </Head>
      <UiUxPages/>
    </>
  );
};
UiUx.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
export default UiUx;
