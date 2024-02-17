import {Box, Center, Container, Flex, Grid, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import HeaderOne from "../../../HeaderOne";
import React from "react";
import ContentLayout from "../erpServices/contentLayout";
import HeroImg from "../../../../../public/assets/consulting/healthcare_it_support/hero.svg";
import Illustration from "../../../../../public/assets/consulting/healthcare_it_support/amico.svg";
import ITinfrastructure from "../../../../../public/assets/consulting/healthcare_it_support/it-infrastructure.svg";
import Image from "next/image";
import {HealthcareWeSupportData, OptionsCardData, sideBarData} from "./data";
import SideBar from "../erpServices/sideBar";
import SupportServicesStack from "./SupportServicesStack";
import HealthcareEcosystemGrid from "./HealthcareEcosystemGrid";
import CustomersLogosSlider from "../banking/CustomersLogosSlider";
import ChatBox from "../banking/ChatBox";
import OptionsCard from "./OptionsCard";
import VideoTestimonial from "../banking/VideoTestimonial";
import HealthcareWeSupportCard from "./HealthcareWeSupportCard";
import TechnologiesWeUseStack from "./TechnologiesWeUseStack";
import NoSSR from "../../../dataAnalytics/NoSSR";
import LogoMarquee from "../../../logoMarquee";
import styled from "styled-components";
import {breakpoints} from "../../../../../styles/theme";
import TantaSummary from "../summary";
import AllItConsultingServices from "../allITConsulting";
import ContactUs from "../../../contactUs";
import TakeAdvantage from "../../itConsulting/healthcare_it_support/takeAdvaltage";
import Link from "next/link";
import appRoutes from "../../../../utils/appRoutes";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Pagination, Scrollbar} from "swiper";
import HandpickedProject from "@/components/dataAnalytics/handpickedProject";

const HealthCareITSupport = () => {
    const SectionHeading = ({heading}) => {
        return (<><Flex flexDir="column" mb={"16px"} color='#414141' fontWeight="700" fontSize={{base:"17px",md:"30px"}}>
                <Text>{heading}</Text>
            </Flex>
                <Box w='70px' h="4px" bg="#E9000E" mb="21px"></Box></>

        )
    }
    const IllustrationHeading = ({heading}) => {
        return (<><Flex flexDir="column" color="#444" fontWeight="700" fontSize={{base:"20px",md:"30px"}}>
                <Text mt={{base:"16px",md:"0"}} mb={{base:"24px",md:"0"}}>{heading}</Text>
            </Flex>
                <Box display={{base:"none",md:"flex"}} w='55PX' h="3px" bg="#E9000E" mt="16px" mb="24px"></Box></>

        )
    }
    // color = "#414141"
    return (
        <Box mt='5rem'  >
              <Box w={"100%"} h={"fit-content"} p={{base:" 0 20px",lg:"0"}}>
                  <HeaderOne heading={'Services'}
                             title={<>Healthcare It Support <span style={{color: "#EB1A26"}}>Consulting</span></>}/>

                  {/*Hero Section*/}
                  <Center>
                      <Image src={HeroImg} alt="Hero image" />
                  </Center>
              </Box>


            <Container maxW={"7xl"} p={{base: "1rem", lg: "4rem"}}>

                {/*<Wrapper>*/}
                {/*</Wrapper>*/}
                <ContentLayout>
                    <SideBar title={"CONTENTS"} data={sideBarData} height={"475px"} minW={"300px"} />
                    <Box width={{base: '100%', lg: "65%"}}>
                        {/*Introductory Section*/}
                        <Text fontSize={{base:"14px",md:"18px"}} lineHeight="170%" textAlign={{base:"center",md:"left"}}  mb="50px" color="#333">
                            Tanta specializes in providing reliable IT support services to healthcare organizations. With a strong presence in the healthcare IT industry since 2005, Tanta is committed to ensuring the seamless operation of IT infrastructure and resolving issues promptly. Our goal is to safeguard the IT systems of healthcare providers and support their ongoing IT evolution
                        </Text>

                       <Box display={{base:"block",md:"none"}}>
                           <CtaButtons>
                               <Link
                                   href={{
                                       pathname: appRoutes.contactUs,
                                       query: {service: "services/it-consulting/healthcare-it-support"},
                                   }}
                                   service="services/it_consulting/healthcare-it-support"
                                   className="request-services"
                               >
                                   {" "}
                                   <button className="request-services">
                                       Request IT CONSULTING services
                                   </button>
                               </Link>
                               <Link
                                   href={{
                                       pathname: appRoutes.services["cost-calculator"],
                                       query: { service: "itConsulting-6" },
                                   }}
                               >
                                   {" "}
                                   <button className="get-quote">get a quote</button>
                               </Link>
                           </CtaButtons>

                       </Box>
                        {/*illustration section*/}
                        <Flex bgColor="#FDE6E7"
                              flexDir={{base: "column", md: "row", lg: "column", xl: "row"}}
                              align="center"
                             bgPosition="right" mb="60px"
                              py={{base:"0",md:'100px'}} pl={{base:"10px",md:"38px"}} position="relative">
                            <Box  maxW={{base:"100%", md: "65%", lg: "100%", xl: "65%"}}>
                                <NoSSR>
                                    <IllustrationHeading heading={<Box textAlign={{base:"center",md:"left"}} >Get a Customized <span style={{color: 'red'}}>Healthcare Analytics Solution</span></Box>} />

                                </NoSSR>
                                <Text fontSize={{base:"16px",md:"20px"}} fontWeight="400" color="#000" lineHeight="170%">
                                    To ensure the rapid distribution of analytics insights to target users (front-line healthcare staff, managers, health analysts, etc.), Tanta Innovatives data analytics professionals will assist you in designing and developing a comprehensive healthcare analytics solution. APPLICATION OF HEALTHCARE ANALYTICS IS REQUIRED
                                </Text>

                            </Box>
                            <Box mt={{base: "2rem", md: "0", lg: "2rem", xl: "0"}}>
                                <Image width='auto' height="auto" src={Illustration} alt="Illustration image" />
                            </Box>
                        </Flex>

                        {/*Medical support services*/}
                        <Box id="itsupport-types" mb="60px" scrollMarginTop={"150px"}>
                            <SectionHeading heading="Our Range of Medical IT Support Services" />
                            <SupportServicesStack />
                        </Box>

                        {/*Healthcare IT Ecosystem*/}
                        <Box color="#444" id="components" mb="60px" scrollMarginTop={"150px"}>
                            <Box display={{base:"none",md:"block"}}>
                                <SectionHeading heading="Healthcare IT Ecosystem Components We Support" />
                                <Box pt="20px" mb="80px">
                                    <Image src={ITinfrastructure} alt="Healthcare IT Infrastructure illustration" />
                                </Box>
                            </Box>
                            <Text textAlign={{base:"center",md:"left"}} lineHeight="32px" mb="34px">Our outsourced medical IT support experts are ready to maintain, troubleshoot and improve the following elements of medical IT environment:</Text>
                            <HealthcareEcosystemGrid />
                        </Box>

                        {/*Why outsource healthcare*/}
                        <Box display={{base:"none",md:"block"}} color="#444" id="why-outsource" mb="60px" scrollMarginTop={"150px"}>
                            <><Flex flexDir="column" color='#414141' fontWeight="700" fontSize="30px">
                                <Text>Why Outsource Healthcare IT Support to Tanta</Text>
                            </Flex>
                                <Box w='70px' h="4px" bg="#E9000E"></Box></>
                            <CustomersLogosSlider />
                            <UnorderedList display="flex" flexDir="column" gap="20px">
                                <ListItem>13 years of expertise in IT support</ListItem>
                                <ListItem>18 years of experience in healthcare IT consulting and development </ListItem>
                                <ListItem>Working experience with HIPAA and FDA</ListItem>
                                <ListItem>Mature quality and security management systems backed by ISO 9001 and ISO 27001.</ListItem>
                                <ListItem>15 years of experience in ITIL-compliant IT service management </ListItem>
                            </UnorderedList>
                        </Box>

                        {/*Providing asnswers to support*/}
                        <Box display={{base:"none",md:"block"}} id="faq" scrollMarginTop={"150px"}>
                            <SectionHeading heading="Providing Answers to Common Inquiries about Healthcare
IT Support" />
                            <ChatBox />
                        </Box>

                        {/*Technologies we use for healthcare*/}
                        <Box display={{base:"none",md:"block"}} mb="54px" id="technology" scrollMarginTop={"150px"}>
                            <SectionHeading heading="Technologies We Use for Healthcare IT Support" />
                            <TechnologiesWeUseStack />
                        </Box>

                        {/*Choose your service option*/}
                        <Box w={{base:"100%",md:"fit-content"}} m={{base:"0 auto 120px auto",md:"0 0 120px 0"}} id="service-option" scrollMarginTop={"150px"}>
                            <SectionHeading heading="Choose Your Service Option" />
                            <Grid display={{base:"none",md:"grid"}} templateColumns={{base: "1fr", md: "repeat(3, 1fr)", lg: "repeat(2, 1fr)", xl: "repeat(3," +
                                    " 1fr)"}} templateRows="max-content" gap="20px">
                                {OptionsCardData.map((data,index) => {
                                    return (
                                        <OptionsCard key={index} item={data}/>
                                    )
                                })}
                            </Grid>
                            <NoSSR>
                                <div>
                                    <Box display={{base:"block",md:"none"}} >
                                        {/*<MobileWrapper>*/}
                                        <Swiper
                                            modules={[Pagination, Scrollbar, A11y]}
                                            pagination={{ clickable: true }}
                                            slidesPerView={1}
                                            spaceBetween={10}
                                            style={{
                                                "--swiper-pagination-color": "#E9000E",
                                                "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
                                                "--swiper-pagination-bullet-inactive-opacity": "1",
                                                "--swiper-pagination-bullet-size": "10px",
                                                " --swiper-pagination-bullet-width": "15px",
                                                "--swiper-pagination-bullet-height": "8px",
                                                "--swiper-pagination-bullet-horizontal-gap": "12px",
                                                "--swiper-pagination-bullet-vertical-gap": "20px",
                                                "--swiper-pagination-bullet-border-radius": "0px",
                                            }}
                                        >

                                            {OptionsCardData.map((data,index) => {
                                                return (
                                                    <SwiperSlide key={index}>
                                                        <Box  h={"450px"} w={"100%"}>
                                                            <OptionsCard  item={data}/>
                                                        </Box>
                                                    </SwiperSlide>
                                                )
                                           })}
                                        </Swiper>

                                    </Box>
                                </div>
                            </NoSSR>
                        </Box>

                        <Box display={{base:"block", md:"none"}} id="customers" scrollMarginTop={"150px"}>
                            <Customers>
                                <div className="customers">
                                    <h2>OUR CUSTOMERS</h2>
                                    <h3>Valued Customer Base</h3>
                                    <div></div>
                                    <p>
                                        Tanta Innovatives is a leading provider of IT
                                        consulting and software development services that has
                                        helped businesses across multiple industries succeed.
                                    </p>
                                </div>
                                <Box py={3}>
                                    <LogoMarquee colored={true} />
                                </Box>
                            </Customers>
                        </Box>

                        <Box display={{base:"block",md:"none"}}>
                            <TakeAdvantage/>
                        </Box>

                        <Box display={{base:"block",md:"none"}} id="summary" scrollMarginTop={"150px"}>
                            <TantaSummary />
                        </Box>





                        <Box display={{base:"block",md:"none"}} id="allServices">
                            <AllItConsultingServices />
                        </Box>


                        <Box display={{base:"none",md:"block"}}>
                            {/*Video Testimonial*/}
                            <Box mb="36px" id="benefits" scrollMarginTop={"150px"}>
                                <VideoTestimonial />
                            </Box>

                            {/*Healthcare components we support*/}
                            <Box mb="60px" id="success-stories" scrollMarginTop={"150px"}>
                                <SectionHeading heading="Healthcare IT Ecosystem Components We Support" />
                                <Grid templateColumns="1fr 1fr" columnGap="22px" rowGap="16px">
                                    {HealthcareWeSupportData.map((data, index) => {
                                        return (
                                           <HealthcareWeSupportCard key={index} data={data} />
                                        )
                                    })}
                                </Grid>
                            </Box>

                            {/*Our project for Healthcare*/}
                            <Box mb="90px">
                                {/*<SectionHeading heading="Our Project for Healthcare" />*/}
                                {/*<Grid templateColumns="1fr 1fr" gap="76px">*/}
                                {/*    {ProjectForHealthcareData.map((data, index) => {*/}
                                {/*        return (*/}
                                {/*            <OurProjectForHealthcare key={index} data={data} />*/}
                                {/*        )*/}
                                {/*    })}*/}
                                {/*</Grid>*/}
                                <HandpickedProject />
                            </Box>
                        </Box>
                    </Box>

                </ContentLayout>
            </Container>
            <Box display={{base:"block",md:"none"}}>
                <ContactUs subtitle="We’re here to support"/>
            </Box>
        </Box>
    )
}

export default HealthCareITSupport
const CtaButtons = styled.div`
	display: flex;
  flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	margin-bottom: 2rem;

	

	.request-services {
		background: linear-gradient(252.93deg, #ac2121 -22.82%, #e9000e 130.87%);
		//box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3),
		//0 1px 3px 1px rgba(0, 0, 0, 0.15);
		border-radius: 8px;
		color: #fff;
		border: none;
		padding: 0.3rem 0.4rem;
		font-size: 1rem;
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.2rem;
		cursor: pointer;
		text-transform: uppercase;
		width: fit-content;

		${breakpoints.lg} {
			font-size: 0.7rem;
		}

		&:hover {
			opacity: 0.8;
		}

		// ${breakpoints.sm} {
		// 	padding: 0.4rem 1.5rem;
		// 	font-size: 0.5rem;
		// }
	}
	.get-quote {
		background-color: #fff;
		color: #b10000;
		border: 1px solid #b10000;
		padding: 0.5rem 2rem;
		font-size: 1rem;
		font-weight: 500;
		display: flex;
		align-items: center;
		text-align: center;
		text-transform: uppercase;
		border-radius: 8px;
		transition: all 0.2s ease-in-out;
		min-width: 100px;
		${breakpoints.lg} {
			font-size: 0.7rem;
			padding: 0.5rem 1.5rem;
		}

		${breakpoints.sm} {
			min-width: 190px;
			//padding: 0.6rem 0.5rem;
			text-align: center;
			display: flex;
			justify-content: center;
			//font-size: 0.5rem;
		}

		&:hover {
			background-color: #b10000;
			color: #fff;
		}
	}
`;



const Customers = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 1rem;

	.customers {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 0;

		h2 {
			font-size: 18px;
			font-weight: 400;
			color: #636363;
			text-transform: uppercase;
			margin-bottom: -1rem;

			${breakpoints.lg} {
				font-size: 1rem;
			}
			@media (max-width: 850px) {
				font-size: 0.9rem;
			}
		}
		h3 {
			font-size: 30px;
			font-weight: 700;
			color: #414141;
			width: 90%;

			${breakpoints.lg} {
				font-size: 1.5rem;
			}

			@media (max-width: 850px) {
				font-size: 1.2rem;
			}
		}
		div {
			width: 55px;
			height: 3px;
			background-color: #e9000e;
			margin-bottom: 0.2rem;
		}
		p {
			font-size: 20px;
			font-weight: 400;
			color: #2a2a2a;

			${breakpoints.lg} {
				margin-top: 0;
				font-size: 18px;
			}

			@media (max-width: 850px) {
				font-size: 1rem;
			}
		}
	}
`;