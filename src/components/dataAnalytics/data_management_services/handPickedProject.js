
import {Box, Flex, Text} from "@chakra-ui/react";
import styled from "styled-components";
import Image from "next/image";
import {successStories} from "../../healthCare/data";
import Link from "next/link";
import {BsArrowRightShort} from "react-icons/bs";
import React from "react";



function HandPickedProject(){
    return (
        <>

            <Box ml={"30px"}>
                <Box id={"benefits"} scrollMarginTop={"130px"} w={"100%"} m={"80px 0 30px 0"} >
                    <Text fontSize={"18px"} color={"#636363"}>
                        SIMILAR PROJECTS
                    </Text>
                    <Text mb={"15px"} fontWeight={"700"} fontSize={"29px"} maxWidth={"650px"}>Our Handpicked <Red>Projects</Red> and <Red>Services</Red></Text>
                    <Box maxWidth={"60px"} bg={"red"} height={"4px"} mb={"20px"}></Box>
                </Box>
            </Box>
            <Box
                gap={{ lg: "3rem", base: "1rem" }}
                flexWrap={"wrap"}
                display={"flex"}
                marginBottom={"2rem"}
                mt={"2rem"}
                justifyContent={"center"}
                alignItems={"center"}
                id="similar_projects"
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
                            // boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                            // borderRadius={"10px"}
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
                                    <Text fontSize={"14px"}>
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
        </>

    );
}

export default HandPickedProject;

const Red = styled.span`
  color: red;
`


