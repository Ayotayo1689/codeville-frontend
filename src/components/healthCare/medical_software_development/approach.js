import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import {developmentAndEvolution} from "./data";
import Image from "next/image";
import styled from "styled-components";

function Approach() {

    return (
        <>
            <Box w={"100%"} mt={"40px"}>
                <Text fontWeight={"700"} fontSize={"29px"} maxWidth={"800px"}>Approach to Custom Healthcare Software Development and Evolution  </Text>
                <Box maxWidth={"120px"} bg={"red"} height={"4px"} mb={"20px"}></Box>
            </Box>
            <Text
                fontWeight="400"
                fontSize={{ lg: "23px", base: "16px" }}
                maxWidth={"700px"}
                lineHeight={"36px"}
            >
                Custom healthcare software development helps provide unparalleled user convenience by tailoring software features, UX, UI to the specific needs of target users. With a team of 750+ experts, including an MD, we’re ready to deliver quality user-centric software of any complexity.
            </Text>
            <Flex fontSize={"18px"} gap={"6px"} m={"20px 0"}>
                <Note>
                    Note:
                </Note>
                <Text fontStyle={"italic"}  maxWidth={"600px"}>
                    When working with US-targeted healthcare projects, we start by signing a
                    Business Associate Agreement to comply with HIPAA guidelines
                </Text>
            </Flex>
            <Box   mb={"3rem"} alignItems={"center"} justifyContent={"center"} gap={"20px"} flexWrap={"wrap"} height={"fit-content"}>
                {developmentAndEvolution.map((item, index) => {

                    return (
                        <Flex mb={"40px"} key={index} width={"100%"} minHeight={"300px"}>
                            <Flex flexDirection={"column"}>
                                <Text maxWidth={"250px"} fontWeight={"700"} fontSize={"22.22px"}><Span>{index+1}.</Span>{item.title}</Text>
                                <Image src={item.img} alt={"section image"}/>
                            </Flex>
                            <Box ml={"20px"} flex={"1"}>
                                <Text fontSize={"17px"}>Our team will:</Text>
                                <Box>
                                    {item.details.map((detail, index) => (
                                        <Flex key={index} m={" 0 0 13px 10px"} >
                                            <Box m={"11px 20px 0 0"}  bg={"red"} h={"6px"} w={"6px"} color={"white"}>H</Box>
                                            <Box lineHeight={"30px"} >{detail}</Box>
                                        </Flex>
                                    ))}
                                </Box>
                            </Box>
                        </Flex>
                    );
                })}
            </Box>
        </>
    );
}

export default Approach;

const Note = styled.i`
font-weight: bold;
`
const Span = styled.span`
color: red;
  
`