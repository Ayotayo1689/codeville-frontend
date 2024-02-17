import {Box, Button, Container, Flex, Text} from "@chakra-ui/react";
import HeaderOne from "../../../HeaderOne";
import styled from "styled-components";
import {breakpoints} from "../../../../../styles/theme";
import HeroContentComp from "./HeroContent";
import HeroImg from "../../../../../public/assets/consulting/banking/it-banking-hero.svg";
import {
	BFSIDevelopment,
	BFSIoperationsData,
	DigitalExperienceData,
	GetBusinessMoving,
	ServiceDomainsData,
	sideBarData,
	WhyTrusted,
} from "./data";
import ContentLayout from "../erpServices/contentLayout";
import SideBar from "../erpServices/sideBar";
import React from "react";
import CardLayout from "./CardLayout";
import CardLayout2 from "./CardLayout2";
import CustomersLogosSlider from "./CustomersLogosSlider";
import {ImCheckmark} from "react-icons/im";
import {BsStarFill} from "react-icons/bs";
import CardLayout3 from "./CardLayout3";
import cash from "../../../../../public/assets/consulting/banking/cash.svg";
import ChatBox from "./ChatBox";
import ContactUs from "../../../contactUs";
import Link from "next/link";
import appRoutes from "../../../../utils/appRoutes";
import VideoTestimonial from "./VideoTestimonial";
import TantaTestimonial from "@/components/tantaTestimonials";

const Banking = ({testimonials}) => {
	const SectionHeading = ({ heading }) => {
		return (
			<>
				<Flex flexDir="column" color="#414141" fontWeight="700" fontSize={{lg:"30px", base:"20px"}}>
					<Text>{heading}</Text>
				</Flex>
				<Box w="130px" h="3px" bg="#E9000E" mt="16px" mb="24px"></Box>
			</>
		);
	};
	return (
		<Box mt="5rem">
			<HeaderOne
				heading={"Services"}
				title={
					<>
						Financial Software{" "}
						<span style={{ color: "#EB1A26" }}>Consulting</span>
					</>
				}
			/>

			{/*Hero Section*/}

			<Container maxW={"7xl"} p={{ base: "1rem", lg: "4rem" }} bg={{ base: "#F7F2FA", lg: "white" }}>
				<Wrapper>
					<HeroContentComp
                        title={"Services for Financial \n" + "Software Development"}
                        redBtnText="Get financial software"
                        redBtnpathname={appRoutes.services["cost-calculator"]}
						redBtnquery={ "services/it-consulting/banking" }
						redBtnservice={"services/it-consulting/banking" }
                        image={HeroImg}
                        description="Tanta serves a wide range of businesses, with a focus on banking, financial services, and insurance (BFSI). We have been providing cutting-edge BFSI solutions since 2008, resulting in 2-25x+ quicker business operations, a 5-40% decrease in operating expenses, a 10-15% increase in revenue, and 100% visibility of financial activities."
					/>
				</Wrapper>
				<ContentLayout>
					<SideBar
						title={"CONTENTS"}
						data={sideBarData}
						height={"480px"}
						minW={"300px"}
					/>
					<Box width={{ base: "100%", lg: "65%" }} display={"flex"} flexDir={"column"} alignItems={"center"}>
						{/*Introductory Section*/}
						<Box mb="50px" id="serve" scrollMarginTop="150px">
							<Text align={{base: 'center', md: 'left'}} fontSize={{lg:"18px", base:"16px"}} lineHeight="170%" mb="50px" color="#333">
								Financial software development services strive to assist
								businesses in the banking, financial services, and insurance
								industries in increasing operational efficiency, improving
								client engagement and retention, and leveraging new, more
								successful business models.
								<br />
								Tanta offers full-cycle IT consulting and software development
								services to assist BFSI firms in digitally transforming their
								business processes and unlocking new growth prospects. We walk
								our clients through the whole financial software deployment
								process, putting sensitive data protection and regulatory
								compliance first.
							</Text>
						</Box>

						{/*Development of Software section*/}
						<Box mb="50px" id="software-development" scrollMarginTop="150px">
							<SectionHeading
								heading={
									<>
										Development of software for all <br />
										financial service domains{" "}
									</>
								}
							/>
							<CardLayout data={ServiceDomainsData} />
						</Box>

						{/*BFSI Operations*/}
						<Box mb="50px" id="bfsi-operation" scrollMarginTop="150px" >
							<SectionHeading
								heading={
									<>
										Ways to handle any
										<br /> complexity of BFSI operations
									</>
								}
							/>
							<Text align={{base: 'center', md: 'left'}} fontSize={{lg:"18px", base:"16px"}} lineHeight="170%" mb="18px" color="#333">
								Tanta creates custom solutions and full-featured systems with
								extensive financial logic to manage even the most difficult,
								highly customized BFSI procedures and advanced financial
								computations. Examples of BFSI systems that we have created
								include:
							</Text>
							<CardLayout data={BFSIoperationsData} />
						</Box>

						{/*Digital user experience*/}
						<Box mb="50px" id="digital-experience" scrollMarginTop="150px">
							<SectionHeading
								heading={
									<>
										Excellent digital user experience <br />
										through web and mobile applications
									</>
								}
							/>
							<Text align={{base: 'center', md: 'left'}} fontSize={{lg:"18px", base:"16px"}} lineHeight="170%" mb="18px" color="#333">
								Tanta has developed top-notch bespoke online and mobile apps for
								banks, financial services firms, and insurance providers since
								2008 in the web space and in the mobile space. Customer-facing
								BFSI apps are provided by our financial software development
								firm for a wide range of use cases, including:
							</Text>
							<CardLayout2 data={DigitalExperienceData} />
						</Box>

						{/*Why Tanta is trusted*/}
						<Box mb="50px" id="our-customers" scrollMarginTop="150px">
							<SectionHeading heading="Why Tanta is a Trusted Technology Partner" />
							<CustomersLogosSlider />
							{WhyTrusted.map((data, index) => {
								return (
									<Flex textAlign={{base: 'center', md: 'left'}} gap={2} key={index}>
										<Box mt="7px">
											<ImCheckmark color="red" />
										</Box>
										<Text
											fontSize="18px"
											lineHeight="170%"
											mb="18px"
											color="#333"
										>
											{data.text}
										</Text>
									</Flex>
								);
							})}
						</Box>

						{/*Tanta Testimonials*/}
						{/*<Box border={"1px solid red"} id="our-approach" scrollMarginTop="150px">*/}
							<TantaTestimonial testimonials={testimonials}/>
						{/*</Box>*/}

						{/*BFSI Software Development*/}
						<Box mb="50px" id="advantages" scrollMarginTop="150px" mt={"5rem"}>
							<SectionHeading
								heading={
									<>
										Advantages of Our Method for <br />
										BFSI Software Development
									</>
								}
							/>
							<CardLayout3 data={BFSIDevelopment} image={cash} />
						</Box>

						{/*Most Common Queries*/}
						<Box mb="50px" id="common-queries" scrollMarginTop="150px">
							<SectionHeading heading="Most Common Queries" />
							<ChatBox />
						</Box>

						{/*BFSI moving*/}
						<Box mb="50px" id="new-heights" scrollMarginTop="150px">
							<SectionHeading
								heading={
									<>
										Get Your BFSI Business Moving
										<br />
										Forward to Reach New Heights
									</>
								}
							/>
							<Box fontSize="18px" lineHeight="170%" mb="18px" color="#333">
								<Text align={{base: 'center', md: 'left'}}>
									Tanta's proprietary banking and finance software offers the
									following benefits:
								</Text>
								<Flex fontSize="15px" flexDir="column" gap={4}>
									{GetBusinessMoving.map((data, index) => {
										return (
											<Flex align="center" key={index} gap={2}>
												<BsStarFill size="30px" color="red" />
												<Text>{data?.text}</Text>
											</Flex>
										);
									})}
								</Flex>
							</Box>
						</Box>

						<Flex pt="36px" justify="center">
							<Link
								href={{
									pathname: appRoutes.contactUs,
									query: { service: "services/it-consulting" },
								}}
							>
								<Button
									color="white"
									sx={{
										background:
											"linear-gradient(252.93deg, #ac2121" +
											" -22.82%," +
											" #e9000e 130.87%)",
									}}
									_hover={{
										background:
											"linear-gradient(252.93deg, #ac2121" +
											" -22.82%," +
											" #e9000e 130.87%)",
									}}
									mx="auto"
								>
									Get Financial Software
								</Button>
							</Link>
						</Flex>
					</Box>
				</ContentLayout>
			</Container>
			<ContactUs subtitle="We’re here to support" />
		</Box>
	);
};

export default Banking;

const Wrapper = styled.div`
	margin: 0 2rem;

	@media (max-width: 820px) {
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
