import React from "react";
import {Box, Container, Flex, Text,} from "@chakra-ui/react";
import styled from "styled-components";
import { healthcareSolData, sideBarHealthcare} from "../data";
import {breakpoints} from "../../../../../styles/theme";
import TantaTestimonial from "../../../tantaTestimonials";
import HeaderOne from "../../../HeaderOne";
import HeroImg from "../../../../../public/assets/consulting/healthcare_hero.svg";
import TantaSummary from "../summary";
import HeroHeader from "../heroHeader";
import WhyWeAreReliable from "../whyWeAreReliable";
import AllItConsultingServices from "../allITConsulting";
import PinkBanner from "../pinkBanner";
import Sidebar from "../Sidebar";
import SolutionCards from "./solutionsCard";

function HealthcareDataAnalytics({testimonials}) {

    return (
        <>
            <Consulting>
                <HeaderOne heading={"SERVICES"}
                           title={<>Healthcare analytics <span style={{color: '#eb1a26'}}>Consulting</span></>}/>
                <Container maxW={"7xl"} px={{base: "0", lg: "4rem"}}>
                    <Wrapper>
                        <HeroHeader title={"Healthcare Analytics"}
                                    text={"With the use of healthcare data analytics, decision-making can be supported " +
                                        "by factual information and actionable insights from healthcare data. " +
                                        "Tanta Innovatves has been in the data analytics business since 2008 and " +
                                        "started offering healthcare data analytics services in 2005. " +
                                        "These services help companies' clinical and operational procedures run more smoothly."}
                                    imageUrl={HeroImg}/>
                        <Box mb={"2rem"} mt={"4rem"}>
                            <Flex gap={{base: '0', md: '0', lg: '2rem'}} justify={"center"}>

                                <Sidebar title={"Healthcare Analytics"} items={sideBarHealthcare} height={"300px"}/>

                                <Box pl={{base: '0', md: '0', lg: '1rem'}} width={{base: '100%', lg: "65%"}}>

                                    {/*Solutions*/}
                                    <Box id="solutions" scrollMarginTop={"150px"}>
                                        <Box>
                                            <Text fontSize={{base: '1.4rem', md: '1.6rem', lg: '1.87rem'}} fontWeight={700}>
                                                Tanta Healthcare Analytic  Solutions
                                            </Text>
                                            <Box
                                                w={"5rem"}
                                                h={"3px"}
                                                bg={"#E9000E"}
                                                mb={"1rem"}

                                            />
                                        </Box>
                                        <div
                                            style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                                gridGap: '1rem',
                                                marginTop: '2rem'

                                            }}
                                        >
                                                {
                                                    healthcareSolData.map((item, index) => {
                                                            return (
                                                                <SolutionCards
                                                                    key={index}
                                                                    title={item?.title}
                                                                    imageUrl={item?.image}
                                                                    listItems={item?.listItems}
                                                                />
                                                            )
                                                        }
                                                    )}
                                            </div>
                                    </Box>

                                    {/* Pibk Banner*/}
                                    <Box id="" scrollMarginTop={"150px"} mt={'2rem'}>
                                        <PinkBanner title={<>Get a Customized  <span style={{color: '#E9000E'}}>Healthcare Analytics Solution</span></>} text={'To ensure the rapid distribution of analytics insights to target users (front-line healthcare staff, managers, health analysts, etc.), Tanta Innovatives data analytics professionals will assist you in designing and developing a comprehensive healthcare analytics solution. APPLICATION OF HEALTHCARE ANALYTICS IS REQUIRED'}/>
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
                                    <Box id="summary.js" scrollMarginTop={"150px"}>
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


export default HealthcareDataAnalytics

const Consulting = styled.div`
  margin-top: 5rem;
`;

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



