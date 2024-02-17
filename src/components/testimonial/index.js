import React, { useState } from "react";
import Image from "next/image";
import { qoute } from "../../../public/assets/testimonials";
// import play from "../../../public/assets/testimonials/playbtn.jpg"
import {
	Box,
	Flex,
	Spacer,
	Tab,
	TabIndicator,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import { testimonials } from "./data";
import dynamic from "next/dynamic";

const DynamicIframe = dynamic(() => import("./Iframe"), { ssr: false });

const Testimonial = ({ testimonial }) => {
	const [showMore, setShowMore] = useState(false);

	const toggleShowMore = () => {
		setShowMore(!showMore);
	};

	const renderText = (text, maxLength) => {
		if (text.length <= maxLength || showMore) {
			return text;
		}

		return text.slice(0, maxLength) + "...";
	};
	return (
		<div style={{ padding: "1rem 3rem" }}>
			<Box display={"flex"} flexDir="column">
				<Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
					<Tabs position="relative" variant="unstyled" zIndex={"999"}>
						<TabPanels>
							{testimonial?.map((item, index) => (
								<TabPanel key={index}>
									{/* =================== review container ================ */}
									<Flex
										justify={"space-evenly"}
										mb={"1rem"}
										flexDir={{ base: "column", lg: "row" }}
									>
										 {/*customer review image/video*/}
										<Box
											 // bg={qoute}
											 bgImage="url('https://media.istockphoto.com/id/1353775192/photo/golden-youtube-play-icon-with-the-red-luxury-boxes-and-white-spheres-3d-illustration-of-lux.webp?b=1&s=170667a&w=0&k=20&c=uN2pqhwskQM-9ctJs_vKUZwBrEhoFdpxLAUKMxVEtoA=')"
											 backgroundPosition={"center"}
											 backgroundSize={"cover"}
											 width={{ base: "100%", lg: "50%" }}
											display={{ base: "none", lg: "block" }}
											height="300px"
											marginRight="1rem"
											// border="2px solid rgba(255, 255, 255, 0.2)"
											filter="drop-shadow(0px 5px 20px rgba(15, 20, 34, 0.4))"
											// borderRadius="21px"
											_hover={{
												cursor: "pointer",
											}}
										>
											<DynamicIframe />
										</Box>

										<Spacer />

										<Box
											display={"flex"}
											flexDir="column"
											width={{ base: "100%", lg: "50%" }}
											padding="0 1rem 1rem 1rem"
										>
											<Flex
												justifyContent="center"
												alignItems={"center"}
												flexDir="row"
												marginBottom={"1.4rem"}
											>
												<Box
													display={"flex"}
													justifyContent="center"
													alignItems={"center"}
													flexDir="row"
												>
													<Image
														src={item?.profile_image}
														alt="profile"
														style={{ marginRight: "20px", borderRadius: "50%" }}
														width={100}
														height={100}
													/>

													<Box>
														<Text
															fontWeight="500"
															fontSize={{ base: "14px", lg: "20px" }}
															lineHeight={{ base: "", lg: "170%" }}
															color="#000000"
														>
															{item?.name}
														</Text>
														<Text
															fontWeight="400"
															fontSize={{ base: "14px", lg: "18px" }}
															lineHeight="170%"
														>
															{item?.company}
														</Text>
													</Box>
												</Box>
												<Spacer />

												<Image src={qoute} alt="quote" />
											</Flex>

											<Text
												fontWeight="400"
												fontSize={{ base: "16px", lg: "20px" }}
												lineHeight="170%"
												color="#2B2C2D"
												textAlign={"start"}
											>
												{renderText(item?.comment, 200)}
												{item?.comment.length > 200 && (
													<button
														onClick={toggleShowMore}
														style={{
															color: "#FF0000",
															fontWeight: "600",
															fontSize: "14px",
															lineHeight: "170%",
															letterSpacing: "0.085em",
															textTransform: "uppercase",
															cursor: "pointer",
															marginLeft: "0.5rem",
														}}
													>
														{showMore ? "Show less" : "Show more"}
													</button>
												)}
											</Text>
										</Box>
									</Flex>
								</TabPanel>
							))}
						</TabPanels>
						<TabList  h={{base:"30px", lg:"100px"}}>
							{/* ================== brand carousel here =========== */}
							{testimonials.map((item, index) => (
								<Tab key={index} p={"0"} mr={"3px"} >
									<Image src={item?.brand} style={{objectFit:"contain", height:"80%", minWidth:"70px",width:"80%"}} alt="" />
								</Tab>
							))}
						</TabList>
						<TabIndicator
							mt="-1.5px"
							height="2px"
							bg="red.500"
							borderRadius="1px"
						/>
					</Tabs>
				</Box>
			</Box>
		</div>
	);
};

export default Testimonial;
