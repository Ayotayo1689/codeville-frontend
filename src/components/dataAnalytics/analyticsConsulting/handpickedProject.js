import React from "react";
import {Box, chakra, Flex, Heading, Text, Link} from "@chakra-ui/react";
import {successStories} from "../../healthCare/data";
import Image from "next/image";
import {BsArrowRightShort} from "react-icons/bs";

function HandpickedProject () {
    return(
        <>
            <Box mt={"2rem"} id="similar_projects" scrollMarginTop={"150px"} >
                <Flex
                    flexDirection={"column"}
                    marginLeft={{ lg: "15px", base: "0" }}
                >
                    <Text color={"rgba(99, 99, 99, 1)"} fontSize={"18px"} >SIMILAR PROJECTS</Text>
                    <Heading
                        fontWeight="700"
                        fontSize={{ base: "20px", lg: "30px" }}
                        color=" #414141"
                        lineHeight={{ lg: "140%", base: "150%" }}
                        mb={"0.5rem"}
                        width={"564"}

                    >
                        Our Handpicked &nbsp;
                        <chakra.span
                            color="#E9000E"
                            fontSize={{ base: "20px", lg: "30px" }}
                        >
                            Projects
                        </chakra.span>{" "}

                        And &nbsp;

                        <chakra.span
                            color="#E9000E"
                            fontSize={{ base: "20px", lg: "30px" }}
                        >
                            Services
                        </chakra.span>{" "}
                    </Heading>
                    <div
                        style={{
                            width: "4rem",
                            height: "2px",
                            background: "rgba(233, 0, 14, 1)",
                            marginBottom: " 2rem ",

                        }}
                    ></div>
                    <Box
                        gap={{ lg: "3rem", base: "1rem" }}
                        flexWrap={"wrap"}
                        display={"flex"}
                        marginBottom={"2rem"}
                        mt={"2rem"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        id="similar projects"
                        scrollMarginTop={"150px"}
                    >
                        {successStories.map((item, index) => {
                            return (
                                <Flex
                                    key={index}
                                    width={{ lg: "45%", base: "90%" }}
                                    // height={"456px"}
                                    flexDirection={"column"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    padding={"0.5rem"}
                                    marginBottom={"1rem"}
                                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                                    borderRadius={"10px"}
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
                                                {item.subItem}
                                            </Text>
                                            <Text fontSize={"14px"}>
                                                {item.text}
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
                </Flex>
            </Box>
        </>
    )
}
export default HandpickedProject