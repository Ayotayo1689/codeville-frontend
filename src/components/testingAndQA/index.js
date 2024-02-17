import React from "react";
import Image from "next/image";
import HeaderOne from "../HeaderOne";
import LogoMarquee from "../logoMarquee";

import {
	Box,
	Button,
	Container,
	Flex,
	List,
	ListIcon,
	ListItem,
	Spacer,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";

// import images and icons here
import {
	apitesting,
	backgroundImg,
	bannerImg,
	task,
} from "../../../public/assets/testing-qa";

// importing components here
import {
	application,
	autoTestingImages,
	enterprise,
	healthcare,
	innovation,
	models,
	qaService,
	serviceOptions,
	testingTypes,
	uiTestingImages,
} from "./data";
import ServicesForm from "../servicesForm/servicesForm";
import { MdSquare } from "react-icons/md";
import {breakpoints, colors} from "../../../styles/theme";
import Link from "next/link";
import TantaTestimonial from "../tantaTestimonials";
import styled from "styled-components";

const Testing = ({ testimonials }) => {
	return (
		<>
			<Box minHeight={"100vh"} mt={"5rem"} overflowX={"hidden"}>
				<HeaderOne
					heading={"Services"}
					title={"PROFESSIONAL SOFTWARE TESTING SERVICES"}
				/>
				<Container maxW={"7xl"} px={{lg: "5rem", base: "1rem"}} w={"100%"}>
					<HeroContent>
						<HeroText>
							<p>
								For 15 years in software testing services, Tanta Innovative has built testing
								expertise in healthcare, manufacturing, retail, wholesale, logistics,
								and other industries. Our goal-driven self-managed testing experts can quickly
								dive into your project (within 1-3 days) and validate every aspect of your
								software: functionality, integration, performance, usability, and security.
							</p>
						</HeroText>
						<Image
							src={backgroundImg}
							alt="hero-image"
							width={300.68}
							height={309.49}
							style={{
								alignSelf: "center",
							}}
						/>
					</HeroContent>
					<Flex my={"4rem"}>
						<LogoMarquee />
					</Flex>

					<Box
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
						flexDir={"column"}
					>
						{application.map((item, index) => (
							<Flex
								w={"100%"}
								background={"rgba(253, 106, 115, 0.05)"}
								justify={"center"}
								align={"center"}
								flexDir={{ base: "row-reverse", lg: "row" }}
								box-shadow="0px 0px 2px rgba(0, 0, 0, 0.25)"
								key={index}
								borderRadius={"6px"}
								mb={"4rem"}
							>
								<Box width={{lg:"100%", md:"80%", base:"60%"}}>
									<Image src={item.image} alt={item.title} width={477} height={477}/>
								</Box>
								<Spacer display={{ base: "none", lg: "block" }} />
								<Box
									display={"flex"}
									flexDir={"column"}
									mr={{ base: "0", lg: "4rem" }}
									my={"2rem"}
									p={{ base: ".8rem .3rem" }}
								>
									<Text
										mb={"1rem"}
										fontWeight="700"
										fontSize={{ base: "20px", lg: "30px" }}
										lineHeight={{lg:"36px", base:"28px"}}
									>
										<span style={{ color: "#D80808" }}>Types of </span>
										applications we test
									</Text>
									<Box width={{lg:"130px", base:"47px"}}
										 height={{lg:"4px", base:"2px"}}
										 bg={"#D80808"}
									></Box>
									{item.list.map((list, key) => (
										<List key={key} mt={"10px"}>
											<ListItem my={{lg:"10px", base:"3px"}} fontSize={{lg:"18px", base:"14px"}}>
												<ListIcon as={MdSquare} color="red.500" mb={{lg:"-.1rem", base:".2rem"}} fontSize={{lg:"20px", base:"10px"}} /> {list}
											</ListItem>
										</List>
									))}
								</Box>
							</Flex>
						))}

						{/* =================== enterprise solutions card ======================  */}
						{enterprise.map((item, index) => (
							<Flex
								w={"100%"}
								background={"rgba(253, 106, 115, 0.05)"}
								flexDir={{ base: "row-reverse", lg: "row-reverse" }}
								box-shadow="0px 0px 2px rgba(0, 0, 0, 0.25)"
								key={index}
								borderRadius={"6px"}
								mb={"4rem"}
							>
								<Box width={{lg:"30%", base:"60%"}}>
									<Image src={item.image} alt={item.title} />
								</Box>
								<Spacer display={{ base: "none", lg: "block" }} />
								<Box
									display={"flex"}
									flexDir={"column"}
									ml={{ base: "0", lg: "4rem" }}
									my={"2rem"}
									px={{lg:"0", base:".5rem"}}
								>
									<Text
										mb={"1rem"}
										fontWeight="700"
										fontSize={{ base: "20px", lg: "30px" }}
										lineHeight={{lg:"36px", base:"28px"}}
									>
										<span style={{ color: "#D80808" }}>Our enterprise </span>{" "}
										software testing offering
									</Text>
									<Box width={{lg:"130px", base:"47px"}}
										 height={{lg:"4px", base:"2px"}}
										 bg={"#D80808"}
									></Box>

									{item.list.map((list, key) => (
										<List key={key} mt={"10px"}>
											<ListItem my={{lg:"10px", base:"3px"}} fontSize={{lg:"18px", base:"14px"}}>
												<ListIcon as={MdSquare} color="red.500" mb={{lg:"-.1rem", base:".2rem"}} fontSize={{lg:"20px", base:"10px"}}/> {list}
											</ListItem>
										</List>
									))}
								</Box>
							</Flex>
						))}

						{/* ===================== risk free ===================== */}
						{innovation.map((item, index) => (
							<Flex
								w={{ base: "100%", lg: "90%" }}
								justify={{ base: "center" }}
								flexDir={{ base: "row", lg: "row" }}
								background={"rgba(253, 106, 115, 0.05)"}
								box-shadow="0px 0px 2px rgba(0, 0, 0, 0.25)"
								key={index}
								borderRadius={"6px"}
								mx={".8rem"}
								mb={"4rem"}
							>
								<Box width={{lg:"30%", base:"60%"}}>
									<Image
										src={item.image}
										alt={item.title}
										style={{ width: "100%" }}
									/>
								</Box>
								<Spacer display={{ base: "none", lg: "block" }} />
								<Box
									display={"flex"}
									flexDir={"column"}
									mr={{ base: "0px", lg: "4rem" }}
									my={"2rem"}
									p={".8rem"}
									w={{ base: "100%", lg: "50%" }}
								>
									<Text
										mb={"1rem"}
										fontWeight="700"
										fontSize={{ base: "20px", lg: "30px" }}
										lineHeight={{lg:"36px", base:"28px"}}
									>
										<span style={{ color: "#D80808" }}>Our testing</span> for
										risk-free innovation
									</Text>
									<Box width={{lg:"130px", base:"47px"}}
										 height={{lg:"4px", base:"2px"}}
										 bg={"#D80808"}
									></Box>
									<Text
										fontWeight="400"
										fontSize={{ base: "14px", lg: "20px" }}
										lineHeight={{lg:"42px", base:"24px"}}
										mt={"10px"}
									>
										{item.text}
									</Text>
									<Spacer />
									{item.list.map((list, key) => (
										<List key={key} mt={"10px"}>
											<ListItem my={{lg:"10px", base:"3px"}} fontSize={{lg:"18px", base:"13px"}}>
												<ListIcon as={MdSquare} color="red.500" mb={{lg:"-.1rem", base:".2rem"}} fontSize={{lg:"20px", base:"10px"}}/> {list}
											</ListItem>
										</List>
									))}
								</Box>
							</Flex>
						))}

						{/* ===================== health solution care ==============  */}
						{healthcare.map((item, index) => (
							<Flex
								w={{ base: "100%", lg: "90%" }}
								background={"rgba(253, 106, 115, 0.05)"}
								box-shadow="0px 0px 2px rgba(0, 0, 0, 0.25)"
								flexDir={{ base: "row-reverse", lg: "row-reverse" }}
								key={index}
								borderRadius={"6px"}
								mb={"4rem"}
							>
								<Box width={{lg:"30%", base:"60%"}}>
									<Image
										src={item.image}
										alt={item.title}
									/>
								</Box>
								<Spacer display={{ base: "none", lg: "block" }} />
								<Box
									display={"flex"}
									flexDir={"column"}
									ml={{ base: "0px", lg: "4rem" }}
									p={".8rem"}
									my={"2rem"}
									width={{ base: "100%", lg: "50%" }}
								>
									<Text
										mb={"1rem"}
										fontWeight="700"
										fontSize={{ base: "20px", lg: "30px" }}
										lineHeight={{lg:"36px", base:"28px"}}
									>
										<span style={{ color: "#D80808" }}> Our healthcare</span>{" "}
										testing expertise
									</Text>
									<Box width={{lg:"130px", base:"47px"}}
										 height={{lg:"4px", base:"2px"}}
										 bg={"#D80808"}
									></Box>
									<Text>{item.text}</Text>

									{item.list.map((list, key) => (
										<List key={key} mt={"10px"}>
											<ListItem my={{lg:"10px", base:"3px"}} fontSize={{lg:"18px", base:"13px"}}>
												<ListIcon as={MdSquare} color="red.500" mb={{lg:"-.1rem", base:".2rem"}} fontSize={{lg:"20px", base:"10px"}}/> {list}
											</ListItem>
										</List>
									))}
								</Box>
							</Flex>
						))}
					</Box>

					{/* ================== banner.js section ==================  */}
					<Box
						width={"fit-content"}
						h={"fit-content"}
						bg={" #FDE6E7"}
						position={"relative"}
						my={"3rem"}
					>
						<Flex justifyContent={"space-between"} position={"relative"}>
							<Image
								src="/assets/ui_ux/Vector 8.png"
								alt="icon"
								width={50}
								height={100}
							></Image>
							<Box
								borderRadius={"full"}
								p={{ base: "1rem", lg: "3rem" }}
								bg={"#F2666E"}
								position={"absolute"}
								right={{ base: "30%", lg: "20%" }}
								top={"2rem"}
								display={{lg:"block", base:"none"}}
							></Box>
							<Box
								borderRadius={"full"}
								p={"1.5rem"}
								bg={"#F2666E"}
								position={"absolute"}
								right={{lg:"15%", base:"1%"}}
								top={"1rem"}
							></Box>
							<Box
								borderRadius={"full"}
								p={"1rem"}
								bg={"#F2666E"}
								position={"absolute"}
								right={{ base: "5%", lg: "10%" }}
								top={"3rem"}
								display={{lg:"block", base:"none"}}
							></Box>
						</Flex>
						<Flex pt={{ base: "1.5rem", lg: "1.4rem" }} gap={{lg:"2rem", base:".5rem"}} justifyContent={"space-between"} alignItems={"center"}>
							<Box pl={".5rem"} width={"100%"}>
									<Box zIndex={"999"} pb={"2rem"}>
										<Text
											fontWeight="700"
											fontSize={{ base: "18px", lg: "32px" }}
											lineHeight={{lg:"170%", base:"140%"}}
										>
											WANT TO EXPLORE <br></br>
											<span style={{ color: "#D80808" }}>TESTING SERVICE</span>
										</Text>
										<Text
											fontWeight="600"
											fontSize={{ base: "14px", lg: "18px" }}
											lineHeight={{lg:"170%", base:"140%"}}
											color="#565656"
											my={"1.5rem"}
											// pr={"7rem"}
										>
											Tanta Innovative will help you build accurate and transparent analytics and reporting to eliminate
											the guesswork out of your business processes and identify new profit opportunities
										</Text>
										<Button
											bg="#F2666E"
											color={"#fff"}
											borderRadius={"8px"}
											p={{lg:"15px 3rem", base:"10px 1rem"}}
											_hover={{ opacity: ".9" }}
											mb={{ base: "2rem" }}
											zIndex={"999"}
											fontSize={{lg:"18px", base:"12px"}}
										>
											<Link href="#get-started" textDecoration={"none"}>
												{" "}
												Request Testing Services
											</Link>
										</Button>
									</Box>
									<Box
										w={"4rem"}
										height={".3rem"}
										bg={colors.primaryColor}
										mt={"2"}
										borderRadius={"lg"}
									></Box>
							</Box>
							<Box width={{lg:"100%", base:"100%"}} >
								<Image src={bannerImg} alt="banner-image" width={500} height={400}/>
							</Box>
						</Flex>
						<Box position={"absolute"} bottom={"0"} width={{lg:"12%", base:"30%"}}>
							<Image
								src="/assets/ui_ux/Group.png"
								alt="icon"
								width={250}
								height={250}
							/>
						</Box>
					</Box>

					{/* ============== Testimonial Section ============  */}
					<Box
						mb="4.5rem"
						w={"100%"}
						p={".6rem"}
					>
						{/* testimonial card */}
						<TantaTestimonial testimonials={testimonials} />
						{/* testimonial card */}
					</Box>
				</Container>
				<Box bg={"#2A2A2A"} color={"#fff"} p={"4rem 0"} px={"1rem"}>
					<Container maxW={"7xl"} px={{ lg: "5rem", "2xl": "0.4rem" }}>
						<Text
							fontWeight="700"
							fontSize={{ base: "20px", lg: "30px" }}
							lineHeight="16px"
							mb={{lg:"1.5rem", base:".5rem"}}
						>
							<span style={{ color: "#D80808" }}>Testing </span> Types we
							perform
						</Text>
						<Box width={{lg:"130px", base:"47px"}}
							 height={{lg:"4px", base:"2px"}}
							 bg={"#fff"}
						></Box>

						{testingTypes.map((item, index) => (
							<Box key={index} my={"2rem"}>
								<Text
									fontWeight="400"
									fontSize={{ lg: "20px", base: "16px" }}
									lineHeight="18px"
								>
									{item.title}
								</Text>
								<Flex flexDir={"row"} flexWrap={"wrap"} paddingY={"10px"}>
									{item.types.map((item, key) => (
										<Button
											p={{ base: "35px 10px", lg: "33px 12px" }}
											overflow="hidden"
											fontSize={{ base: "12px", lg: "16px" }}
											bg={"#FFFEFE"}
											color={"#000"}
											border={"0px"}
											borderRadius={"0px"}
											m={{lg:"1rem 1.9rem", base:".4rem"}}
											_hover={{
												bg: "linear-gradient(255.79deg, #A90909 14.97%, #D43E3E 89.5%)",
												color: "#fff",
											}}
											key={key}
										>
											{item}{" "}
											{/*<BsArrowRightCircle*/}
											{/*	style={{ fontSize: "24px", marginLeft: "1rem" }}*/}
											{/*/>*/}
										</Button>
									))}
								</Flex>
							</Box>
						))}
					</Container>
				</Box>
				<Container maxW={"7xl"} px={{ lg: "5rem", "2xl": "0.4rem" }}>
					<Box my={"7rem"} px={"1rem"}>
						<Text
							fontWeight="700"
							fontSize={{ base: "20px", lg: "30px" }}
							lineHeight="170%"
							color="#414141"
							mb={"1.5rem"}
							textTransform={"uppercase"}
						>
							{" "}
							Test Automation
						</Text>
						<Box width={{lg:"130px", base:"47px"}}
							 height={{lg:"4px", base:"2px"}}
							 bg={"#D80808"}
						></Box>
						<Text
							fontWeight="700"
							fontSize={{ base: "15px", lg: "20px" }}
							lineHeight="170%"
							my={"1.5rem"}
						>
							<span style={{ color: "#ff0000" }}>Tanta Innovative </span>
							adheres to the proprietary Integrated Manual and Automated Testing
							(IMAAT) approach to optimize testing time. Our test automation
							leads analyze automated testing feasibility and calculate its ROI
							for each testing project. If it’s lucrative enough, we develop
							reusable test scripts for automated testing at API and UI levels
							and introduce test automation within 3 weeks.
						</Text>
					</Box>

					{/* =================== automation tool section ================ */}
					<Box mb={"7rem"} px={"1rem"}>
						<Flex flexDir={"column"} align={"center"} justify={"center"}>
							<Text
								fontWeight="700"
								fontSize={{ base: "20px", lg: "30px" }}
								lineHeight="170%"
								color="#414141"
								mb={"1rem"}
								textAlign={"center"}
								textTransform="uppercase"
							>
								OUR Test{" "}
								<span style={{ color: "#ff0000" }}>Automation TOOLS</span>
							</Text>
							<Box width={{lg:"130px", base:"47px"}}
								 height={{lg:"4px", base:"2px"}}
								 bg={"#D80808"}
							></Box>
						</Flex>

						{/* =================== automation tool images section ================ */}
						<Flex my={"3rem"} flexDir={{ base: "column", lg: "row" }}>
							<Box>
								<Text
									fontWeight="700"
									fontSize={{ base: "18px", lg: "24px" }}
									lineHeight="170%"
									color="#414141"
									mb={".5rem"}
									textTransform="uppercase"
								>
									API Testing tools
								</Text>
								<Box width={{lg:"130px", base:"47px"}}
									 height={{lg:"4px", base:"2px"}}
									 bg={"#D80808"}
									 mb={"1rem"}
								></Box>
								<Box
									w={{ base: "250px", lg: "300px" }}
									h={"80px"}
									mb={"1.5rem"}
								>
									<Image
										src={apitesting}
										alt="testing tools"
										style={{ height: "100%", width: "100%" }}
									/>
								</Box>
							</Box>
							<Spacer />
							<Box>
								<Text
									fontWeight="700"
									fontSize={{ base: "18px", lg: "24px" }}
									lineHeight="170%"
									color="#414141"
									mb={".5rem"}
									textTransform="uppercase"
								>
									Automated UI Testing tools
								</Text>
								<Box width={{lg:"130px", base:"47px"}}
									 height={{lg:"4px", base:"2px"}}
									 bg={"#D80808"}
									 mb={"2rem"}
								></Box>
								<Flex>
									{uiTestingImages.map((item, index) => (
										<Box height="80px" width="140px" key={index}>
											<Image
												src={item}
												alt="testing tools"
												style={{ height: "100%", width: "100%" }}
											/>
										</Box>
									))}
								</Flex>
							</Box>
						</Flex>
						<Flex my={"3rem"} flexDir={"column"} justify={"start"}>
							<Text
								fontWeight="700"
								fontSize={{ base: "18px", lg: "24px" }}
								lineHeight="170%"
								color="#414141"
								mb={".5rem"}
								textTransform="uppercase"
							>
								DEV OPS
							</Text>
							<Box width={{lg:"130px", base:"47px"}}
								 height={{lg:"4px", base:"2px"}}
								 bg={"#0092E0"}
								 mb={"1rem"}
							></Box>
							<Box>
								<Text
									fontWeight="700"
									fontSize={{ base: "20px", lg: "24px" }}
									lineHeight="170%"
									color="#414141"
									mb={".5rem"}
									textTransform="capitalize"
								>
									Automated UI Testing tools
								</Text>
								<Flex>
									{autoTestingImages.map((item, index) => (
										<Box height="80px" width="140px" key={index}>
											<Image
												src={item}
												alt="testing tools"
												style={{ height: "100%", width: "100%" }}
											/>
										</Box>
									))}
								</Flex>
							</Box>
						</Flex>

						{/* <Box my={'3rem'}>
            <Text fontWeight='700' fontSize='24px' lineHeight='170%' color='#414141' mb={'.5rem'} textTransform='capitalize'>monitoring</Text>
            <Box height='80px' width={{ base: '350px', md: '600px', lg: '800px'}}>
              <Image src={monitor} alt='testing tools' style={{ height: '80px', width: '700px'}} />
            </Box>
          </Box>

          <Box my={'3rem'}>
            <Text fontWeight='700' fontSize='24px' lineHeight='170%' color='#414141' mb={'.5rem'} textTransform='capitalize'>Automated</Text>
            <Box height='80px' width={{ base: '350px', md: '600px', lg: '800px'}}>
              <Image src={automated} alt='testing tools' style={{ height: '100%', width: '100%'}} />
            </Box>
          </Box> */}
					</Box>

					{/* =================== testing services section ================ */}
					<Box mb={"7rem"} px={"1rem"}>
						<Text
							fontWeight="700"
							fontSize={{ base: "20px", lg: "30px" }}
							lineHeight="170%"
							color="#414141"
							mb={"1.5rem"}
							textTransform="uppercase"
						>
							Our testing{" "}
							<span style={{ color: "#ff0000" }}>Service options</span>
						</Text>
						<Box width={{lg:"130px", base:"77px"}}
							 height={{lg:"4px", base:"2px"}}
							 bg={"#D80808"}
							 mb={"2rem"}
						></Box>

						<Flex
							flexDir={{ base: "column", lg: "row" }}
							justify={"center"}
							my={"2rem"}
						>
							{serviceOptions.map((item, index) => (
								<Box
									borderLeft={"5px solid #E9000E"}
									borderRadius={"6px"}
									background={"rgba(206, 205, 204, 0.11)"}
									key={index}
									p={"1rem"}
									mb="1.4rem"
									mx={{ base: ".5rem", lg: "1.5rem" }}
								>
									<Flex flexDir={{ base: "row", lg: "row" }}>
										<Text
											fontWeight="700"
											fontSize={{ base: "16px", lg: "20px" }}
											lineHeight="170%"
											textTransform="uppercase"
											w={{ base: "100%", lg: "50%" }}
											mt={{lg:"0", base:"3rem"}}
										>
											{item.title}
										</Text>
										<Box width={"50%"}>
											<Image
												src={item.image}
												alt="card image"
												// style={{ width: "50%", height: "150px" }}
											/>
										</Box>

									</Flex>
									<Text
										fontWeight="400"
										fontSize={{ base: "14px", lg: "18px" }}
										lineHeight="170%"
										textTransform="capitalize"
										color="#2A2A2A"
										mt={"1.4rem"}
									>
										{item.text}
									</Text>
								</Box>
							))}
						</Flex>
					</Box>

					{/* =================== qa service section ================ */}
					<Box mb={"7rem"} px={"1rem"}>
						<Text
							fontWeight="700"
							fontSize={{ base: "20px", lg: "30px" }}
							lineHeight="170%"
							color="#414141"
							mb={"1.5rem"}
							textTransform="uppercase"
						>
							Other Software{" "}
							<span style={{ color: "#ff0000" }}>QA Services</span>
						</Text>
						<Box width={{lg:"130px", base:"87px"}}
							 height={{lg:"4px", base:"2px"}}
							 bg={"#D80808"}
							 mb={"2rem"}
						></Box>

						<Flex
							flexDir={{ base: "column", lg: "row" }}
							align={"center"}
							justify={"start"}
							my={"2rem"}
						>
							{qaService.map((item, index) => (
								<Box key={index}>
									<Text
										ml={"1.5rem"}
										fontWeight="700"
										fontSize={{ base: "18px", lg: "24px" }}
										lineHeight="34px"
									>
										{item.title}
									</Text>
									<Box
										borderLeft={"5px solid #E9000E"}
										borderRadius={"6px"}
										background={"rgba(233, 0, 14, 0.12)"}
										key={index}
										p={"1rem"}
										m={"1.5rem"}
										h={"500px"}
										w={{ base: "350px", lg: "450px" }}
									>
										<Text
											fontWeight="400"
											fontSize={{lg:"17px", base:"15px"}}
											lineHeight="28px"
											textTransform="capitalize"
											color="#2A2A2A"
											mt={"1.4rem"}
										>
											{item.text}
										</Text>
										{item.list.map((list, key) => (
											<List key={key}>
												<ListItem
													fontWeight="400"
													fontSize={{ base: "14px", lg: "16px" }}
													lineHeight="170%"
													my={"15px"}
													textTransform={"capitalize"}
												>
													<ListIcon as={MdSquare} color="red.500" mb={{lg:".1rem", base:".2rem"}} fontSize={{lg:"15px", base:"10px"}}/> {list}
												</ListItem>
											</List>
										))}
									</Box>
								</Box>
							))}
						</Flex>
					</Box>

					{/* =================== co-operation models ================ */}
					<Flex mb={"2rem"} justifyContent={'center'} alignItems={'center'} margin={'0 1rem'}>
						{/*<Box borderLeft={{ lg:"6px solid #E9000E", base:"2px solid #E9000E"}} p={".5rem 1rem"} h={'100%'}></Box>*/}
						<Box Box borderLeft={"6px solid #E9000E"} p={".5rem 2rem"}>
							<Text
								fontWeight="700"
								fontSize={{ base: "20px", lg: "30px" }}
								lineHeight="170%"
								color="#414141"
								mb={{ base: "1rem", lg: "1.5rem" }}
							>
								{" "}
								Our Cooperation{" "}
								<span style={{ color: "#ff0000" }}>Models </span>
							</Text>
							<Box width={{lg:"130px", base:"47px"}}
								 height={{lg:"4px", base:"2px"}}
								 bg={"#D80808"}
								 mb={"2rem"}
							></Box>
							<Text
								fontWeight="400"
								fontSize={{ base: "16px", lg: "18px" }}
								lineHeight="24px"
								my={"1.5rem"}
								textTransform={"capitalize"}
							>
								Depending on the project complexity and business specifics,{" "}
								<br />
								our quality assurance company can provide testing services
								performed by:
							</Text>

							<Box>
								<Tabs size="md" variant="enclosed">
									<TabList>
										{models.map((item, index) => (
											<Tab
												padding={{ base: "8px 18px", lg: "16px 24px" }}
												mr={{ base: "0px", lg: "4rem" }}
												_selected={{
													color: "white",
													background: "#AE0000",
													boxShadow: "0px 2px 4px rgba(165, 163, 174, 0.3)",
													borderRadius: "10px 10px 0px 0px",
												}}
												key={index}
											>
												{item.title}
											</Tab>
										))}
									</TabList>
									<TabPanels>
										{models.map((item, index) => (
											<TabPanel key={index}>
												<Text
													fontWeight="700"
													fontSize={{ base: "16px", lg: "18px" }}
													lineHeight="170%"
													my={"1rem"}
												>
													{item.title}
												</Text>
												<Text
													fontWeight="400"
													fontSize={{ base: "16px", lg: "18px" }}
													lineHeight="170%"
													mb={"25px"}
												>
													{item.text}
												</Text>
												<Link
													href={"#get-started"}
													style={{
														width: "185px",
														height: "40px",
														marginTop: "25px",
														padding: "10px 2rem",
														color: "white",
														background: "#E9000E",
														boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.25)",
														borderRadius: "8px",
													}}
												>
													Get Started
												</Link>
											</TabPanel>
										))}
									</TabPanels>
								</Tabs>
							</Box>
						</Box>
					</Flex>

					{/* ========= get testing service section ====== */}
					<Flex
						gap={"4rem"}
						direction={{ base: "column", lg: "row" }}
						w={"100%"}
						p={{ base: "0 1rem", lg: "0 " }}
						my={"2.5rem"}
						id={"get-started"}
					>
						{/* ========= Get in touch ========= */}
						<Flex w={{ base: "100%", md: "50%" }}>
							<Flex
								direction={"column"}
								// p={{ lg: " 0 2rem" }}
								borderRight={"10px solid #FFFFFF"}
							>
								<Box borderLeft={"6px solid #E9000E"} p={".5rem 2rem"}>
									<Text
										as="h2"
										fontSize={{ base: "24px", lg: "34px" }}
										w={"100%"}
										fontWeight={"700"}
										lineHeight={"40px"}
									>
										Get Transparent & Result-oriented
										<Text color={"red"}>Testing Services!</Text>
									</Text>
								</Box>
								<Box>
									<Image src={task} alt="task image" width={400} height={400}/>
								</Box>
							</Flex>
							<Box
								width={"20px"}
								h={"100%"}
								bg={"#FFFFFF"}
								boxShadow={"11px 0px 29px rgba(0, 0, 0, 0.25)"}
								display={{ base: "none", md: "block", lg: "block" }}
							>
								{" "}
							</Box>
						</Flex>
						{/* ========= Agent Form========= */}
						<Box w={{ base: "100%", md: "50%" }}>
							<Text
								fontWeight="400"
								fontSize={{ base: "18px", lg: "22px" }}
								lineHeight="170%"
								mb="1rem"
							>
								Feel free to briefly describe your testing and QA needs for our
								team to promptly get back to you.
							</Text>
							<ServicesForm services="Testing Services" />
						</Box>
					</Flex>
				</Container>
			</Box>
		</>
	);
};

export default Testing;



const HeroContent = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: center;

	width: 100%;

	${breakpoints.lg} {
		.hero-img {
			width: 45%;
		}
	}
	@media (max-width: 820px) {
		flex-direction: column-reverse;
		gap: 0;

		.hero-img {
			width: 20%;
			height: 20%;
			margin: 0 auto;
			padding-top: 2rem;
		}
	}

	${breakpoints.md} {
		.heroImg {
			padding-top: 1rem;
			
		}
	}
`;

const HeroText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	width: 60%;
	padding-left: 2.5%;
	padding-right: 2.5%;

	@media (max-width: 820px) {
		width: 95%;
		padding-left: 2.5%;
		padding-right: 2.5%;
		justify-content: center;
		align-items: center;
		margin-top: 1rem;
	}

	${breakpoints.md} {
	}
	h1 {
		position: relative;
		box-sizing: border-box;
		margin-left: 2rem;
		font-size: 32px;
		font-weight: 700;
		margin-top: 0;
		padding-top: 0;
		color: #0c0c0c;

		${breakpoints.lg} {
			font-size: 1.7rem;
			text-align: center;
			margin-top: 1rem;
		}

		${breakpoints.md} {
			font-size: 0.7rem;
			text-align: center;
			margin-top: 1rem;
		}

		@media (max-width: 820px) {
			font-size: 1.5rem;
			font-weight: 500;
		}

		&::before {
			position: absolute;
			content: "";
			top: -3px;
			left: -30px;
			height: 100%;
			width: 3px;
			background: linear-gradient(to bottom, red 30%, white, white);
		}
		&::after {
			position: absolute;
			content: "";
			top: -3px;
			left: -30px;
			height: 3px;
			width: 100%;
			background: linear-gradient(
				to right,
				red,
				white,
				white,
				white,
				white,
				white
			);
		}
	}
	p {
		font-size: 20px;
		font-weight: 400;
		padding-bottom: 0;
		margin-bottom: 0;
		// color: #636363;

		@media (max-width: 820px) {
			font-size: 1rem;
			text-align: center;
		}
	}
`;
