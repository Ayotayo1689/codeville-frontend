import React from "react";
import {Box, Container, Flex, Text,} from "@chakra-ui/react";
import styled from "styled-components";
import {architechData, architechData2, challenges, sideBarEnterprise} from "../data";
import {breakpoints} from "../../../../../styles/theme";
import TantaTestimonial from "../../../tantaTestimonials";
import HeaderOne from "../../../HeaderOne";
import HeroImg from "../../../../../public/assets/consulting/enterprise.svg";
import TantaSummary from "../summary";
import HeroHeader from "../heroHeader";
import WhyWeAreReliable from "../whyWeAreReliable";
import AllItConsultingServices from "../allITConsulting";
import PinkBanner from "../pinkBanner";
import ArchitectureCard from "./ArchitectureCard";
import Sidebar from "../Sidebar";

function EnterpriseIntelligence({testimonials}) {

    return (
        <>
            <Consulting>
                <HeaderOne heading={"SERVICES"}
                           title={<>Enterprise intelligence <span style={{color:'#EB5046'}}>Consulting</span></>}/>
                <Container maxW={"7xl"} px={{base: "1rem", lg: "4rem"}}>
                    <Wrapper>
                        <HeroHeader title={"Enterprise Intelligence"}
                                    text={"Enterprise business intelligence solutions provide data analysis and role-based access to the analytics results by business users at all levels by consolidating multi-formatted data from a company's departments, divisions, subsidiaries, etc. into a secure, centralized data storage."}
                                    imageUrl={HeroImg}/>
                        <Box mb={"2rem"} mt={"4rem"}>
                            <Flex gap={"2rem"} justify={"center"}>

                                <Sidebar title={"Enterprise Intelligence"} items={sideBarEnterprise} height={"350px"}/>

                                <Box pl={"1rem"} width={{base: '100%', lg: "65%"}}>

                                    {/*Challenges*/}
                                    <Box id="challenges" scrollMarginTop={"150px"}>
                                        <Box>
                                            <Text py={1} fontSize={{base: '1.4rem', md: '1.6rem', lg: '1.87rem'}} fontWeight={700}>
                                                Challenges <span style={{color: '#E9000E'}}> Addressed </span>
                                            </Text>
                                            <Box className={'red_line'}></Box>
                                            <Box mt={6}>
                                                {
                                                    challenges.map((item, index) => {
                                                            return (
                                                                <Box key={item} py={1}>
                                                                    <Flex  fontSize={{base: '1rem', md: '1.12rem', lg: '1.25rem'}}>{index + 1}. <Text pl={2} >{item}</Text></Flex>

                                                                </Box>
                                                            )
                                                        }
                                                    )}
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box id="architecture" scrollMarginTop={"150px"} mt={'2rem'} mb={'4rem'}>
                                            <Text width={{
                                                base: '100%',
                                                md: '70%',
                                                lg: '70%',
                                            }} py={1} fontSize={{base: '1.4rem', md: '1.6rem', lg: '1.87rem'}} fontWeight={700}>
                                                Architecture for <span style={{color: '#E9000E'}}> Enterprise Intelligence Solution</span>
                                            </Text>

                                        <Flex gap={4}
                                                flexDir={{base: 'column', md: 'row', lg: 'row'}}
                                        >
                                                <Flex mt={'2rem'}
                                                      gap={6}
                                                      flexDir={'column'}
                                                >
                                                    {
                                                        architechData.map((item, index) => {
                                                                return (
                                                                    <ArchitectureCard key={index} title={item?.title}
                                                                                  body={item?.body}/>
                                                                )
                                                            }
                                                        )}
                                                </Flex>
                                        <Flex mt={'2rem'}
                                              gap={6}
                                              flexDir={'column'}
                                              alignItems={'center'}
                                              justifyContent={'center'}
                                        >
                                            {
                                                architechData2.map((item, index) => {
                                                        return (
                                                            <ArchitectureCard key={index} title={item?.title}
                                                                              body={item?.body}/>
                                                        )
                                                    }
                                                )}
                                        </Flex>
                                        </Flex>
                                    </Box>


                                    {/* Pibk Banner*/}
                                    <Box id="" scrollMarginTop={"150px"} mt={'2rem'}>
                                        <PinkBanner title={<>Implement <span style={{color: '#E9000E'}}>Enterprise Intelligence</span> under BI consulting with our professional</>} text={'Experts in data analytics from Tanta Innovatives can design and create a reliable business intelligence solution for your company. Diverse data sources will be consolidated under one roof, analysed, and useful analytics results will be obtained to meet the various needs of corporate business users.'}/>
                                    </Box>

                                    {/* Why we are reliable SECTION */}
                                    <Box id="partners" scrollMarginTop={"150px"} mt={'2rem'}>
                                        <WhyWeAreReliable />
                                    </Box>

                                    {/* CUSTOMER REVIEWS  SECTION */}
                                    <Box id="reviews" scrollMarginTop={"150px"}>
                                        <TantaTestimonial testimonials={testimonials}/>
                                    </Box>

                                    {/* SUMMARY SECTION */}
                                    <Box id="summary" scrollMarginTop={"150px"}>
                                        <TantaSummary/>
                                    </Box>

                                    {/* ALL IT-SERVICES  SECTION */}
                                    <Box id="projects" scrollMarginTop={"150px"}>
                                       <AllItConsultingServices display={'none'}/>
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </Wrapper>
                </Container>
            </Consulting>
        </>
    );
}


export default EnterpriseIntelligence;

const Wrapper = styled.div`
  margin: 0 2rem;

  .red_line {
    width: 6rem;
    height: 3px;
    background-color: #FF0000;
    display: flex;
  }

  @media (max-width: 992px) {
    .side-bar {
      display: none;
    }
  }

  ${breakpoints.md} {
    .about-box {
      padding-left: 0;
    }
  }
`;


const Consulting = styled.div`
  margin-top: 5rem;
`;

