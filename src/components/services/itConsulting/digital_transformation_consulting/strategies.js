import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import Image from "next/image";
import styled from "styled-components";
import {strategyData} from "./data";
import Like from "../../../../../public/assets/data_transformation/like.svg"

function Strategies() {

    return (
        <>
            <Box w={"100%"} mt={"40px"}>
                <Text fontWeight={"700"} fontSize={{lg:"29px", base:"20px"}} maxWidth={"800px"}>Why DT Strategies That Tanta Creates
                    Work </Text>
            </Box>
            {
                strategyData.map((data, index) => {
                    return (
                        <Flex alignItems={"flex-start"} gap={"16px"} key={index} my={7}>
                            <Box
                                minWidth={"40px"}
                                maxWidth={"40px"}
                            >

                                <Image src={Like} alt={""} style={{marginTop: ''}}/>
                            </Box>
                            <Text color={"#444444"} fontSize={"17px"}> <Span>{data.title} </Span>{data.text}
                                <Span>{data.span}</Span> </Text>
                        </Flex>
                    )
                })
            }
        </>
    );
}

export default Strategies;

const Note = styled.i`
  font-weight: bold;
`
const Span = styled.span`
  font-weight: 700;

`