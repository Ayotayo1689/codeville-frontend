import React from "react";
import {Box, Text} from "@chakra-ui/react";
import Image from "next/image";
import styled from "styled-components";
import Lifecycle from "../../../../../public/assets/data_transformation/lifecycle.svg"

function Approach() {

    return (
        <>
            <Box w={"100%"} mt={"40px"}>
                <Text fontWeight={"700"} fontSize={{lg:"29px", base:"20px"}} maxWidth={"800px"}>How We Deliver Digital
                    Transformation </Text>
                <Box maxWidth={{lg:"120px", base:"50px"}} bg={"red"} height={"4px"} mb={"20px"}></Box>
            </Box>
            <Image src={Lifecycle} alt={"life cycle"}/>
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