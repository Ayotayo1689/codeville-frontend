import React from "react";
import {Box, Flex, Grid, Text} from "@chakra-ui/react";
import HeadingTwo from "./heading";
import Image from "next/image";
import arrowLeft from "../../../../../public/assets/medicalSoftwarePage/arrowLeft.svg";
import LogoMarquee from "../../../logoMarquee";
import arrowRight from "../../../../../public/assets/medicalSoftwarePage/arrowRight.svg";
import {whyTanta} from "./data";
import styled from "styled-components";

function WhyOutSource() {

    return (
        <>
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                margin={{lg: "0 0 1rem 0", base: "1.5rem 0.8rem"}}
            >
                <HeadingTwo title={"Why Tanta as Your Digital Transformation Consultant? "}/>

                <Grid gridTemplateColumns={
                    {
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(2, 1fr)",
                    }
                } mb={"3rem"} gap={"20px"}>
                    {whyTanta.map((item, index) => {

                        return (
                            <Flex flexDir={"column"} alignItems={{lg:"start", base:"center"}} key={index} mb={"15px"} maxW={"420px"}>
                                <Image src={item.img} alt={"hjsf"}/>
                                <Text textAlign={{lg:"left", base:"center"}} mt={"15px"} fontSize={"16px"}> <Span>{item.title} - </Span>{item.details} </Text>
                            </Flex>
                        );
                    })}
                </Grid>

                <Flex justifyContent={"center"} alignItems={"center"}>
                    <Image src={arrowLeft} alt={"arrow left icon"}/>
                    <Box maxWidth={"1200px"} position={"relative"}>
                        <Box whiteSpace={"nowrap"} overflow={"hidden"}>
                            <div>
                                <LogoMarquee colored={true}/>
                            </div>
                        </Box>
                    </Box>
                    <Image src={arrowRight} alt={"arrow left icon"}/>
                </Flex>
            </Flex>

        </>
    );
}

export default WhyOutSource;


const Span = styled.span`
  font-weight: 700;
`