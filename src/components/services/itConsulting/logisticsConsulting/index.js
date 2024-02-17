import React from "react";
import {Box, Container, Flex, Text,} from "@chakra-ui/react";
import styled from "styled-components";
import {breakpoints} from "../../../../../styles/theme";
import HeaderOne from "../../../HeaderOne";
import HeroImg from "../../../../../public/assets/consulting/logistics/Truck.svg";
import Sidebar from "../Sidebar";
import {
    advantages,
    advantagesOfLogistics,
    assets,
    chooseServices,
    companies,
    logisticsSolData,
    sideBarLogistics
} from "../data";
import HeroHeader from "./Hero";
import CompaniesCard from "./companyCard";
import SolutionCards from "../healthcareDataAnalytics/solutionsCard";
import {WhyTrusted} from "../banking/data";
import {ImCheckmark} from "react-icons/im";
import LogoMarquee from "../../../logoMarquee";
import ContactUs from "../../../contactUs";
import PinkBanner from "../pinkBanner";
import AdvantageCard from "./AdvantageCard";
import ChooseServicesCard from "./servicesCard";
import Testimonial from "./Testimonial";
import ProjectsSlider from "./projectsSlider";
import NoSSR from "../../../dataAnalytics/NoSSR";
import AdvantagesOfLogistics from "./logisticsAdvantageCard";
import TantaTestimonial from "../../../tantaTestimonials";

function LogisticsConsulting({testimonials}) {

    return (
        <>
            <Consulting>
                <HeaderOne heading={"SERVICES"}
                           title={<>LOGISTICS <span style={{color: "#EB1A26"}}> Consulting</span></>}/>

                <Container maxW={"7xl"} px={{base: "2rem", lg: "4rem"}} bg={{ base: "#F7F2FA", lg: "white" }}>
                    <Wrapper>
                        <HeroHeader
                            title={"Transportation and logistics companies can benefit from IT services and software."}
                            subTitle={"Transportation and logistics operations\n" +
                                "                        are undergoing digital transformation."}
                            text={"Tanta has been providing customized IT solutions and specialized services to the transportation and logistics (T&L) industry since 2008, accelerating digital transformation across company management and all main T&L operations."}
                            imageUrl={HeroImg}/>

                        <Box mb={"2rem"} mt={"4rem"}>
                            <Flex gap={{base: '0', md: '0', lg: '2rem'}} justify={"center"}>

                                <Sidebar title={"CONTENTS"} items={sideBarLogistics} height={"500px"}/>

                                <Box pl={{base: '0', md: '0', lg: '1rem'}} width={{base: '100%', lg: "65%"}}>

                                    {/* Options section*/}
                                    <Box id="options" scrollMarginTop={"150px"} mt={'2rem'}>
                                        <Flex gap={4} flexDir={'column'} textAlign={{lg:"left", base:"center"}} fontSize={'1.1rem'} color={'#151616'}>
                                            <Text>IT services for transportation and logistics (T&L) focus on advising,
                                                installation, support, and evolution of T&L solutions, with the goal of
                                                assisting T&L organizations in streamlining and reducing logistical
                                                costs, improving asset efficiency, and improving customer
                                                experience.</Text>
                                            <Text> Consulting on the use of advanced technologies (cloud, IoT, AI and
                                                ML, blockchain, AR, etc.) for T&L operations, IT infrastructure support,
                                                quality assurance, help desk, and cybersecurity services for T&L firms,
                                                and more are all part of the dedicated IT services.</Text>
                                        </Flex>
                                    </Box>

                                    {/* COMPANIES WE WORK WITH*/}
                                    <Box id="about" scrollMarginTop={"150px"} mt={'2rem'}>
                                        <SectionHeading heading={"Companies that Tanta works with"}/>
                                        <NoSSR>
                                            <CompaniesCard data={companies}/>
                                        </NoSSR>
                                    </Box>

                                    {/* solutions SECTION */}
                                    <Box id="solutions" scrollMarginTop={"150px"} my={'2rem'}>
                                        <SectionHeading heading={"Tanta's IT Solutions for T&L"}/>
                                        <div
                                            style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                                gridGap: '1rem',
                                                marginTop: '2rem'
                                            }}
                                        >
                                            {
                                                logisticsSolData.map((item, index) => {
                                                        return (
                                                            <SolutionCards
                                                                key={index}
                                                                title={<div style={{ textDecoration: 'underline'}}>{item?.title}</div>}
                                                                imageUrl={item?.image}
                                                                listItems={item?.listItems}
                                                            />
                                                        )
                                                    }
                                                )}
                                        </div>
                                    </Box>

                                    {/* ASSETS MANAGEMENT  SECTION */}
                                    <Box mt={'2rem'} id="assets" scrollMarginTop={"150px"}>
                                        <SectionHeading heading={"Asset management and T&L operations"}/>
                                        <div
                                            style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                                gridGap: '1rem',
                                                marginTop: '2rem'

                                            }}
                                        >
                                            {
                                                assets.map((item, index) => {
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


                                    {/* Why Outsource at Tanta SECTION */}
                                    <Box id="whyTanta" scrollMarginTop={"150px"} mt={'2rem'}>
                                        <SectionHeading heading="Why Outsource at Tanta "/>
                                        <LogoMarquee/>
                                        {WhyTrusted.map((data, index) => {
                                            return (
                                                <Flex gap={2} key={index} mt={6}>
                                                    <Box mt="7px"><ImCheckmark color="red"/></Box>
                                                    <Text fontSize="18px" lineHeight="170%"
                                                          color="#333">{data.text}</Text>
                                                </Flex>
                                            )
                                        })}
                                    </Box>

                                    {/* ADVANTAGES OF DEVELOPING TP  SECTION */}
                                    <Box mt={'2rem'} id="usingUs" scrollMarginTop={"150px"}>
                                        <SectionHeading heading={"Advantages of Developing Transportation\n" +
                                            "and Logistic with Tanta"}/>
                                        <NoSSR>
                                            <AdvantagesOfLogistics advantages={advantagesOfLogistics}/>
                                        </NoSSR>
                                    </Box>

                                    {/*Transportation projects*/}
                                    <Box mt={'2rem'} id="projects" scrollMarginTop={"150px"}>
                                        <NoSSR>
                                            <ProjectsSlider/>
                                        </NoSSR>
                                    </Box>

                                    {/*Tanta Testimonials*/}
                                    <Box mt={'3rem'} id="reviews" scrollMarginTop={"150px"}>
                                        <TantaTestimonial testimonials={testimonials} />
                                    </Box>

                                    {/* SERVICES SECTION*/}
                                    <Box id="services" scrollMarginTop={"150px"} mt={'2rem'}>
                                        <SectionHeading heading={"Choose Your Service Choice"}/>
                                        <div
                                            style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                                gridGap: '1rem',
                                                marginTop: '2rem'
                                            }}
                                        >
                                            {
                                                chooseServices.map((item, index) => {
                                                        return (
                                                            <ChooseServicesCard
                                                                key={index}
                                                                title={item?.title}
                                                                subtitle={item?.subtitle}
                                                                image={item?.image}
                                                                listItems={item?.listItems}
                                                                link={item?.link}
                                                                linkTitle={item?.linkTitle}
                                                            />
                                                        )
                                                    }
                                                )}
                                        </div>
                                    </Box>

                                    {/* ADVANTAGES SECTION */}
                                    <Box id="benefits" scrollMarginTop={"150px"} mt={'2rem'}>
                                        <SectionHeading heading={"Take Advantage of Digitizing \n" +
                                            "Your Transportation and Logistics Operations"}/>
                                        <Text fontSize={'1.1rem'} color={'#151616'} w={{base: '100%', md: '80%'}}>
                                            Based on ScienceSoft’s experience in transportation and logistics,
                                            companies operating in this sector may reap the following
                                            benefits with digital transformation:
                                        </Text>
                                        <AdvantageCard data={advantages}/>
                                    </Box>

                                    {/* PINK BANNER SECTION */}
                                    <Box id="projects" scrollMarginTop={"150px"}>
                                        <PinkBanner title={<>Get a Customized <span style={{color: "#E9000E"}}> Healthcare Analytics Solution</span> </>}
                                                    text={"To ensure the rapid distribution of analytics insights to target users (front-line healthcare staff, managers, health analysts, etc.), Tanta Innovatives data analytics professionals will assist you in designing and developing a comprehensive healthcare analytics solution. APPLICATION OF HEALTHCARE ANALYTICS IS REQUIRED"}/>
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </Wrapper>
                </Container>
                <ContactUs subtitle="We’re here to support"/>
            </Consulting>
        </>
    );
}


export default LogisticsConsulting

export const SectionHeading = ({heading}) => {
    return (<Box mb={12}>
            <Flex flexDir="column" color="#414141" fontWeight="700" fontSize={{lg: '30px', md: '25px', base: '20px'}}>
                <Text>{heading}</Text>
            </Flex>
            <Box w='8rem' h="3px" bg="#E9000E"></Box>
        </Box>

    )
}
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
    margin: 0;
    .about-box {
      padding-left: 0;
      
    }
  }
`;



