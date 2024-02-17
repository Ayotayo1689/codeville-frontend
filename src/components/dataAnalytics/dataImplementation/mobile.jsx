import React from "react";
import {
    Box,
    Button,
    Flex,
    Image,
    Text
} from "@chakra-ui/react";
import Link from "next/link";
import appRoutes from "../../../utils/appRoutes";
import {experties, modernizationCardData} from "./data";
import {colors} from "../../../../styles/theme";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Pagination, Scrollbar} from "swiper";


export const HeroHeader = () => {
    return (
        <>
            <Box display={"grid"}>
                <Image
                    src={"/assets/dataAnalytics/Consulting-pana.png"}
                    alt="hero image"
                    width={500}
                />
                <Text textAlign={"center"} py={"1rem"}>
                    Data implementation services tailored to your requirements
                </Text>
                <Flex
                    gap={"0.5rem"}
                    textTransform={"uppercase"}
                    py={"1rem"}
                    flexWrap={"wrap"}
                    justifyContent={{base:"center"}}
                >
                    <Link
                        href={{
                            pathname: appRoutes.contactUs,
                            query: {
                                service: "services/data-analytics/data-implementation",
                            },
                        }}
                    >
                        <Button
                            textTransform={"uppercase"}
                            px={{ base: "0.5rem", lg: "2.5rem" }}
                            fontSize={"0.6rem"}
                            background="radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
                            color={"white"}
                            _hover={"none"}
                        >
                            Request implementation services
                        </Button>
                    </Link>
                    <Link
                        href={{
                            pathname: appRoutes.services["cost-calculator"],
                            query: { service: "dataAnalytics-7" },
                        }}
                    >
                        <Button
                            textTransform={"uppercase"}
                            px={{ base: "0.5rem", lg: "2.5rem" }}
                            fontSize={"0.6rem"}
                            border={"2px"}
                            borderColor={"#e60000"}
                            bg={"white"}
                            color={"#e60000"}
                            _hover={"none"}
                        >
                            get a quote
                        </Button>
                    </Link>
                </Flex>
                <Flex gap={"5"}  justifyContent={"center"} alignItems={"center"} textAlign={"center"}>
                    {experties.map((item, i) => {
                        return(
                            <Flex  fontWeight={"700"} key={i} my={"15px"} flexDirection={"column"}  justifyContent={"center"} alignItems={"center"}>
                                <Image src={item.img} alt={"icon"} w={50}/>
                                <Text fontSize={"sm"}>{item.price}</Text>
                                <Text fontSize={"sm"}>{item.details}</Text>
                            </Flex>
                        )
                    })}
                </Flex>
            </Box>

        </>
    )
};


export const DataImplementationServices = () => {
    return (
        <>
        <Flex
           flexDirection={"column"}
           justifyContent={"center"}
            w={"100%"}
            mt={"50px"}
            textAlign={"center"}
            alignItems={"center"}
        >
            <Text
                fontWeight={"700"}
                fontSize={{ base: "lg", lg: "4xl" }}
                pb={"5px"}

            >
                Data Implementation Services by{" "}
                <span style={{ color: `${colors.primaryColor}` }}>
										Tanta Innovative
									</span>
            </Text>
            <Box bg={"red"} height={"3px"} mb={"20px"} w={"7rem"}></Box>
        </Flex>
        <Text mb={"20px"} fontSize={{ base: "1rem", lg: "20px" }}>
            Optimize your data processes with Tanta Innovative's Data
            Implementation Services. Seamlessly integrate, migrate, and
            implement data solutions for actionable insights.
        </Text>
            {/*<Flex*/}
            {/*    flexWrap={"wrap"}*/}
            {/*    mt={"30px"}*/}
            {/*    gap={"30px"}*/}
            {/*    justifyContent={"center"}*/}
            {/*    flexDir="column"*/}
            {/*>*/}
            {/*<Tabs position="relative" variant="unstyled" zIndex={"999"}>*/}
            {/*    <TabPanels>*/}
            {/*        {modernizationCardData.map((item, index) => {*/}
            {/*            return (*/}
            {/*                <TabPanel key={index}>*/}
            {/*                <Box*/}
            {/*                    p={"10px"}*/}
            {/*                    border={"1px solid rgba(0, 0, 0, 0.5)"}*/}

            {/*                    borderRadius={"8px"}*/}
            {/*                    maxWidth={"300px"}*/}
            {/*                    h={"300px"}*/}
            {/*                >*/}
            {/*                    <Text*/}
            {/*                        mb={"20px"}*/}
            {/*                        fontSize={{ base: "lg", lg: "2xl" }}*/}
            {/*                        fontWeight={"600"}*/}
            {/*                    >*/}
            {/*                        {item.title}*/}
            {/*                    </Text>*/}
            {/*                    <Box>*/}
            {/*                        {item.details.map((item, index) => {*/}
            {/*                            return (*/}
            {/*                                <Flex key={index} mb={"10px"} gap={3}>*/}
            {/*                                    <div*/}
            {/*                                        style={{*/}
            {/*                                            backgroundColor: "#E9000E",*/}
            {/*                                            width: "10px",*/}
            {/*                                            minWidth: "10px",*/}
            {/*                                            minHeight: "10px",*/}
            {/*                                            height: "10px",*/}
            {/*                                            marginTop: "0.5rem",*/}
            {/*                                        }}*/}
            {/*                                    ></div>*/}
            {/*                                    <Text fontSize={"15px"}>{item}</Text>*/}
            {/*                                </Flex>*/}
            {/*                            );*/}
            {/*                        })}*/}
            {/*                    </Box>*/}
            {/*                </Box>*/}
            {/*                </TabPanel>*/}
            {/*            );*/}
            {/*        })}*/}
            {/*    </TabPanels>*/}
            {/*    <TabIndicator*/}
            {/*        mt="-1.5px"*/}
            {/*        height="2px"*/}
            {/*        bg="red.500"*/}
            {/*        borderRadius="1px"*/}
            {/*    />*/}
            {/*</Tabs>*/}
            {/*</Flex>*/}
            <Box
            >
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
                    {modernizationCardData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                p={"10px"}
                                border={"1px solid rgba(0, 0, 0, 0.5)"}
                                mb={"2.5rem"}
                                mt={"1rem"}
                                borderRadius={"8px"}
                                maxWidth={"300px"}
                                h={"300px"}
                            >
                                <Text
                                    mb={"20px"}
                                    fontSize={{ base: "lg", lg: "2xl" }}
                                    fontWeight={"600"}
                                >
                                    {item.title}
                                </Text>
                                <Box>
                                    {item.details.map((item, index) => {
                                        return (
                                            <Flex key={index} mb={"10px"} gap={3}>
                                                <div
                                                    style={{
                                                        backgroundColor: "#E9000E",
                                                        width: "10px",
                                                        minWidth: "10px",
                                                        minHeight: "10px",
                                                        height: "10px",
                                                        marginTop: "0.5rem",
                                                    }}
                                                ></div>
                                                <Text fontSize={"15px"}>{item}</Text>
                                            </Flex>
                                        );
                                    })}
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </>
    )
}