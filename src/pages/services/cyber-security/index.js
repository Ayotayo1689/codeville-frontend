import React from 'react'
import CybersecurityPage from '../../../components/services/cybersecurity';
import LandingLayout from '../../../layouts/landing.layout';
import Head from "next/head";

const Cybersecurity = () => {
  return (
    <>
        <Head>
        <title>Cyber Security - Tanta Innovative</title>
        <meta name="description"
              content="Protect your digital assets with Tanta Innovation's cutting-edge cyber security solutions. Our company is dedicated to safeguarding your sensitive data from evolving threats and ensuring the integrity of your systems. "/>
    </Head>
        <CybersecurityPage />
    </>
  )
}

Cybersecurity.getLayout = (page) => {
	return <LandingLayout>{page}</LandingLayout>;
};
export default Cybersecurity