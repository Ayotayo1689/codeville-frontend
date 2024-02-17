import React from "react";
import heroOne from "../../../../../public/assets/data_transformation/hero.png";
import {sideBarData} from "./data";
import {Box, Container, Flex, Text} from "@chakra-ui/react";
import ContactUs from "../../../contactUs";
import styled from "styled-components";
import WhyOutSource from "./whyOutSource";
import Services from "./services";
import AdvancedTech from "./advancedTech";
import Approach from "./approach";
import StarCard from "./starCard";
import Strategies from "./strategies";
import PageHeader from "../../../itOutSourcing/PageHeader";
import DigitalHero from "./hero";
import {Consulting} from "../cloudComputing";
import Sidebar from "../Sidebar";
import ServiceBtn from "./serviceBtn";
import PinkBanner from "../pinkBanner";
import SuccessInsights from "./successInsights";

const DigitalTransformationConsultingPage = ({testimonials}) => {

    return (
        <>
            <Consulting>

                <PageHeader heading={"SERVICES"}
                            title={<>DIGITAL TRANSFORMATION <Text as='span' color='#eb1a26'>Consulting</Text></>}/>
                <Container maxW={"7xl"} px={{lg: "5rem", sm: "0", base: "0"}}>
                    <Wrapper>
                        <DigitalHero title={'Digital Transformation consulting'} serviceTitle={'SCHEDULE A MEETING'}
                                     text={'Digital transformation consulting lays out an enterprise-wide technology-powered strategy to improve the efficiency of business processes. At Tanta, we help companies unfold holistic digital transformation (DT) and achieve high ROI from the initiative'}
                                     imageUrl={heroOne}/>

                        {/*<Box mt={"5rem"} minHeight={"100vh"}>*/}
                        <Box mb={"2rem"} mt={"4rem"}>
                            <Flex gap={{base: '0', md: '0', lg: '2rem'}} justify={"center"}>
                                <Sidebar title={"CONTENTS"} items={sideBarData} height={"fit-content"}/>

                                <Box pl={{base: '0', md: '0', lg: '1rem'}} width={{base: '100%', lg: "65%"}}>
                                    <Box id={"why"} scrollMarginTop={"120px"}>
                                        <WhyOutSource/>
                                    </Box>

                                    <Box id={"transformation"} scrollMarginTop={"120px"}>
                                        <Box id={"benefits"} scrollMarginTop={"-100px"}>
                                            <Services/>
                                        </Box>
                                    </Box>

                                    <Box id={"tech"} scrollMarginTop={"120px"}>
                                        <AdvancedTech/>
                                    </Box>

                                    <Box id={"deliver"} scrollMarginTop={"150px"}>
                                        <Approach/>
                                    </Box>

                                    <Box id={""} scrollMarginTop={"150px"}>
                                        <StarCard/>
                                    </Box>
                                    <Box><ServiceBtn/></Box>

                                    <Box id={"strategies"} scrollMarginTop={"150px"}>
                                        <Box id={""} scrollMarginTop={""}>
                                            <Strategies/>
                                        </Box>
                                    </Box>
                                    <Box id={"success"} scrollMarginTop={"150px"}>
                                        <Box w={"100%"} mt={"40px"}>
                                            <Text fontWeight={"700"} fontSize={{lg:"29px", base:"20px"}} maxWidth={"850px"}>An Inside Look
                                                into Our clients’ success </Text>
                                            <Box maxWidth={{lg:"120px", base:"50px"}} bg={"#E9000E"} height={"4px"} mb={"20px"}></Box>
                                        </Box>
                                        <SuccessInsights/>
                                    </Box>
                                    <Box>
                                        <PinkBanner title={<>Get a Customized <span style={{color: '#E9000E'}}>Digital Transformation Solution</span></>}
                                                    text={'To ensure the rapid distribution of digital insights to target users (front-line staff, managers, digital analysts, etc.), Tanta Innovatives digital transformation professionals will assist you in designing and developing a comprehensive digital transformation solution. APPLICATION OF DIGITAL TRANSFORMATION IS REQUIRED'}
                                        />
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </Wrapper>
                </Container>
            </Consulting>

            <ContactUs subtitle="We’re here to support"/>

        </>
    );
};

export default DigitalTransformationConsultingPage;

export const Wrapper = styled.div`
  margin: 0;
  padding: 0 2rem;

  @media (max-width: 992px) {
    .side-bar {
      display: none;
    }
  }
`;


const Span = styled.span`
  color: red;
`;
