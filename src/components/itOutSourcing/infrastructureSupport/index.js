import {Box, Container, Flex, Text,} from "@chakra-ui/react";
import {infraApproach, infraServices, InfraSolutionsSideBarData} from "../data";
import WhyChoose from "../whyChoose";
import NeedExpert from "../NeedExpert";
import Head from "next/head";
import LandingLayout from "../../../layouts/landing.layout";
import heroImg from "../../../../public/assets/itOutSourcing/infraSupport/infrahero.svg";
import HeroHeader from "../HeroHeader";
import PageHeader from "../PageHeader";
import Sidebar from "../../services/itConsulting/Sidebar";
import {Consulting, Wrapper} from "../index";
import {SectionHeading} from "../sectionHeading";
import ScopeOfTanta from "./Scope";
import ServicesCard from "./servicesCard";
import InfraApproachComponent from "./approachCard";
import React from "react";
import HandpickedProject from "@/components/dataAnalytics/handpickedProject";
import ServicesStages from "@/components/itOutSourcing/infrastructureSupport/ServicesStages";
import DataManagementTechnologies
    from "@/components/dataAnalytics/data_analytics_modernization/DataManagementTechnologies";
import Benefits from "@/components/itOutSourcing/infrastructureSupport/Benefits";
import BenefitsMobile from "@/components/itOutSourcing/managedTesting/benefitsMobile";
import AllManagedIT from "@/components/itOutSourcing/infrastructureSupport/AllManagedIT";
import ContactUs from "@/components/contactUs";

function InfrastructureSupport({testimonials}) {

    return (
        <>

            {/*<Consulting>*/}
                <Box>
                    <PageHeader title={'Managed Infrastructure '} heading={'IT OUTSOURCING'}/>

                    <Container maxW={"7xl"} px={{ lg: "5rem", base: "2rem" }} bg={{ base: "#F7F2FA", lg: "white" }}>
                        <HeroHeader title={'Information Technology Outsourcing'}
                                    text={'Reach out to our dedicated team of IT consultants to discuss your project needs, explore innovative solutions, and discover how we can transform your ideas into reality.'}
                                    imageUrl={heroImg}
                                    serviceTitle={'Request Infrastructure services '}
                        />

                        <Box mb={"2rem"} mt={"4rem"}>
                            <Flex gap={{base: '0', md: "0", lg: "2rem"}} justify={"center"}>

                                <Sidebar items={InfraSolutionsSideBarData} title={"contents"} height={'fit-content'}/>

                                <Box flex={3} mb={"2rem"} pl={{base: "0", lg: "2rem"}} className="about-box">
                                    {/*WHY CHOOSE US*/}
                                    <Box id={'about'} scrollMarginTop={'150px'}>
                                        <WhyChoose/>
                                    </Box>

                                    {/*NEED AN EXPERT*/}
                                    <Box my={"2rem"} id="expert" scrollMarginTop={"150px"}>
                                        <NeedExpert/>
                                    </Box>

                                    {/*SCOPE OF TANTA SERVICES */}
                                    <Box id="scope" scrollMarginTop={"150px"} mt={'2rem'}>
                                        <Box w={{lg: '80%', md: '100%'}} mb={-6}>
                                            <SectionHeading heading={<>The Scope of IT InfrastructureComponents by
                                                <span style={{color: '#E9000E'}}> Tanta Innovative</span></>}/>
                                        </Box>
                                        <Text fontSize={'1.12rem'}>At Tanta Innovatives Limited, we undertake the
                                            responsibility of continuously monitoring, providing support for, and
                                            optimizing your IT infrastructure as a whole or its various
                                            components.</Text>
                                        <ScopeOfTanta/>
                                    </Box>

                                    {/*IT INFRA SERVICES */}
                                    <Box id="services" scrollMarginTop={"150px"} mt={'2rem'}>
                                        <SectionHeading heading={"IT Infrastructure Services we Manage"}/>
                                        <ServicesCard data={infraServices}/>
                                    </Box>

                                    {/*COLLAboration Approach*/}
                                    <Box id="kpi" scrollMarginTop={"150px"} my={'4rem'}>
                                        <SectionHeading heading={<><span
                                            style={{color: '#E9000E'}}>Tanta Innovatives</span> Approach to Building
                                            Collaboration</>}/>
                                        <Text mb={6} fontSize={'1.12rem'} lineHeight={'170%'}>Our approach to
                                            collaboration is centered around value the customer gets, which is proved by
                                            the Global Outsourcing 100 award. We adhere to a multi-tiered approach to
                                            collaboration with your IT team or your vendor’s team, and adjust it taking
                                            into account your business situation, objectives, and requirements.</Text>
                                        <Text mb={8} fontSize={'1.12rem'} lineHeight={'170%'}>Our sample KPI
                                            System:</Text>
                                        <>
                                            <InfraApproachComponent infraApproach={infraApproach}/>
                                        </>
                                    </Box>

                                    {/*How Tanta Innovatives delivers goes here*/}
                                    <Box id="methodology" scrollMarginTop={"150px"} my={'4rem'}>
                                        {/*<SectionHeading heading={<> How Tanta Innovatives Delivers*/}
                                        {/*    <span style={{color: '#E9000E'}}> IT Infrastructure</span> Managed*/}
                                        {/*    Services</>}/>*/}

                                        <ServicesStages/>

                                    </Box>

                                    {/*Data Management Technologies goes here*/}
                                    <Box id="data" scrollMarginTop={"150px"} my={'4rem'}>
                                        <DataManagementTechnologies/>
                                    </Box>

                                    {/*Benefits goes here*/}
                                    <Box id="benefits" scrollMarginTop={"150px"} my={'4rem'} >
                                        <Text fontSize={'1.12rem'} lineHeight={'170%'} color={'#636363'}
                                              textTransform={'uppercase'}>Benefits </Text>
                                        <SectionHeading heading={<> Benefits of Our
                                            <span style={{color: '#E9000E'}}> IT Infrastructure</span> Managed
                                            Services</>}/>
                                        <Benefits/>
                                    </Box>
                                    {/*<BenefitsMobile/>*/}

                                    {/*Testimonials goes here*/}
                                    <Box id="reviews" scrollMarginTop={"150px"} my={'4rem'}>
                                    </Box>

                                    {/*Projects goes here*/}
                                    <Box id="projects" scrollMarginTop={"150px"} my={'4rem'}>
                                        {/*<Text fontSize={'1.12rem'} lineHeight={'170%'} color={'#636363'}*/}
                                        {/*      textTransform={'uppercase'}>Similar PROJECTS </Text>*/}
                                        {/*<SectionHeading heading={<> Our Handpicked*/}
                                        {/*    <span style={{color: '#E9000E'}}> Projects</span> and <span*/}
                                        {/*        style={{color: '#E9000E'}}> Services</span></>}/>*/}
                                        <HandpickedProject/>
                                    </Box>

                                    {/*Pink banner goes here*/}
                                    <Box id="request" scrollMarginTop={"150px"} my={'4rem'}>
                                        <NeedExpert heading={"Let Us Take Over Your Infrastructure Management Tasks"}/>
                                    </Box>

                                    {/*All IT Services goes here*/}
                                    <Box id="summary.js" scrollMarginTop={"150px"} my={'4rem'} display={{base: "none", lg: "block"}}>
                                        <Text flexDir="column" mb={2} color="#414141" fontWeight="700"
                                              fontSize={{lg: '1.87rem', md: '1.5rem', base: '1.3rem'}}>
                                            All about Managed IT
                                        </Text>
                                        <AllManagedIT/>
                                    </Box>
                                </Box>
                            </Flex>

                        </Box>
                    </Container>

                    {/*---------Contact us----------*/}
                    <Box display={{base: "block", lg: "none"}}>
                        <ContactUs/>
                    </Box>
                </Box>
            {/*</Consulting>*/}
        </>
    );
}

InfrastructureSupport.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
};
export default InfrastructureSupport;


