import React from "react";
import {Box, chakra, Flex, Heading, Text} from "@chakra-ui/react";
import {successStories} from "../../data";
import Image from "next/image";
import Link from "next/link";
import {BsArrowRightShort} from "react-icons/bs";

function Projects () {
    return(
        <>
            <Box mt={"2rem"} id="success_stories" scrollMarginTop={"150px"}    display={{base: "none", md: "block", lg: "block"}}>
                <Flex
                    flexDirection={"column"}
                    marginLeft={{ lg: "15px", base: "0" }}
                >
                    <Heading
                        fontWeight="700"
                        fontSize={{ base: "20px", lg: "30px" }}
                        color=" #414141"
                        lineHeight={{ lg: "140%", base: "150%" }}
                        mb={"0.5rem"}
                        width={"564"}
                        ml={"2rem"}
                    >
                        Our Selected{" "}
                        <chakra.span
                            color="#E9000E"
                            fontSize={{ base: "20px", lg: "30px" }}
                        >
                            {" "}
                            Healthcare IT
                        </chakra.span>{" "}

                        Services <br/>Projects
                    </Heading>
                    <div
                        style={{
                            width: "4rem",
                            height: "4px",
                            background: "#D80808",
                            marginBottom: " 2rem ",
                            marginLeft: "2rem",
                        }}
                    ></div>
                    <Box
                        gap={{ lg: "4rem", base: "1rem" }}
                        flexWrap={"wrap"}
                        display={"flex"}
                        marginBottom={"2rem"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Box
                            gap={{ lg: "3rem", base: "1rem" }}
                            flexWrap={"wrap"}
                            display={"flex"}
                            marginBottom={"2rem"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            scrollMarginTop={"150px"}
                        >
                            {successStories.map((item, index) => {
                                return (
                                    <Flex
                                        key={index}
                                        width={{ lg: "45%", base: "90%" }}
                                        flexDirection={"column"}
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                        padding={"0.5rem"}
                                        marginBottom={"1rem"}
                                    >
                                        <Box
                                            padding={"0.5rem 0.5rem 1rem 0.5rem;"}
                                            gap={"0.9rem"}
                                            flexDirection={"column"}
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            display={"flex"}
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={390}
                                                height={262}
                                            />
                                            <Box width={{ lg: "332px", base: "390px" }}>
                                                <Text
                                                    color={"#303030"}
                                                    fontSize={"18px"}
                                                    fontWeight={"500"}
                                                    mb={"0.5rem"}
                                                >
                                                    {item.title}
                                                </Text>
                                                <Text
                                                    color={"#E9000E"}
                                                    fontSize={"15px"}
                                                    textTransform={"uppercase"}
                                                    mb={"0.5rem"}
                                                >
                                                    {item.subTitle}
                                                </Text>
                                                <Text fontSize={"16px"}>
                                                    {item.description}
                                                </Text>
                                                <Link href={item.link}>
                                                    <Flex
                                                        justifyContent={"center"}
                                                        color={"#E9000E"}
                                                        mt={"2rem"}
                                                        fontWeight={"500"}
                                                    >
                                                        View Case Study
                                                        <BsArrowRightShort
                                                            style={{
                                                                color: "#E9000E",
                                                                fontSize: "25px",
                                                                transition: "all 0.2s ease-in-out",
                                                            }}
                                                        />
                                                    </Flex>
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Flex>
                                );
                            })}
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </>
    )

}
export default Projects