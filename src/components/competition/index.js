import React from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";
import styled from "styled-components";
import InnovativeIdeas from "./innovativeIdeas";
import BeCreative from "./beCreative";
import WhoCanParticipate from "./whoCanParticipate";
import Industry from "./industry";
import TermsAndCondition from "./termsAndCondtioins";
import ContactUs from "../contactUs";

const Competition = () => {
    return (
        <Box background={{ base:"#ECEBEB", md:"white"}}>
            <Box

                minHeight={{base: "30vh", sm: "35vh"}}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                backgroundImage={{
                    base: "/assets/headermobile.png",
                    lg: "/assets/headerbg.png",
                }}
                backgroundPosition={"center top"}
                backgroundRepeat={"no-repeat"}
                backgroundSize={"100%"}
                textAlign={{base: 'center'}}
            >
                <Text textTransform={"uppercase"} fontSize={{base: "18px", lg: "24px"}} textAlign={{base: 'center'}}>
                    topics
                </Text>
                <Heading
                    maxWidth={"800px"}
                    as={"h6"}
                    variant={"h5"}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    fontSize={{base: "18px", lg: "43px"}}
                    px={{base: "0.4rem"}}
                >
                    Idea Competition for <Span>software development</Span> projects
                </Heading>
                <Text
                    position={"relative"}
                    top={{base: "1rem", lg: "1.7rem"}}
                    bgColor={"red"}
                    width={"8rem"}
                    height={".2rem"}
                    textAlign={{base: 'center'}}
                ></Text>
            </Box>


            <InnovativeIdeas />
            <BeCreative />
            <WhoCanParticipate />
            <Industry/>
            <TermsAndCondition/>
            <Div>
                <ContactUs/>
            </Div>

        </Box>
    );
};

export default Competition;
const Span = styled.span`
  color: #e50505;
`
const Div = styled.div`
  @media (min-width: 850px) {
    display: none;
  }
`




