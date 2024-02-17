import React from 'react'
import Link from "next/link";
import styled from "styled-components";
import {breakpoints} from "../../../styles/theme";
import {Box, Flex, Grid, Text} from "@chakra-ui/react";
import {industries} from "./data";
import {BsArrowRightShort} from "react-icons/bs";

function IndustriesSection() {
    return (
        <div>
            <Flex direction={"column"} align={"center"} p={{base: "1rem", md: "0"}}>
                <HeroText>
                    {/*<h1>Information Technology Outsourcing</h1>*/}
                    <p>
                        Our extensive experience across diverse industries enables us to offer valuable
                        insights and deliver truly beneficial solutions to our customers.
                    </p>

                </HeroText>

                <Box w={{base: "100%", md: "80%"}} mt={"4rem"}>
                    <Grid templateColumns={{base: "100%", md: "repeat(2, 1fr)"}} gap={"2.5rem"}>
                        {industries.map((card) => {
                            return (
                                <Flex
                                    key={card.id}
                                    direction={"column"}
                                    bgImage={card.bg}
                                    backgroundSize={"cover"}
                                    bgPosition={"center"}
                                    minHeight={"400px"}
                                    justify={"center"}
                                    align={"center"}
                                    p={"1rem"}
                                    position={"relative"}
                                    borderRadius={"10px"}
                                    cursor={"pointer"}
                                >
                                    <Text color={"white"} textTransform={"uppercase"}
                                          fontSize={{base: "1.5rem", md: "1.5rem"}} fontWeight={"700"}
                                          textAlign={"center"}>
                                        {card.title}
                                    </Text>
                                    <Link href="#">
                                        <Flex align={"center"} color={"#FFF"} position={"absolute"} right={"1.5rem"}
                                              bottom={"2rem"}>
                                            <Text fontSize={"1rem"}>Read more</Text>
                                            <BsArrowRightShort fontSize={"1.5rem"}/>
                                        </Flex>
                                    </Link>
                                </Flex>
                            )
                        })}
                    </Grid>
                </Box>
            </Flex>
        </div>
    )
}

export default IndustriesSection


const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  width: 80%;
  margin-top: 4rem;


  @media (max-width: 820px) {
    width: 100%;
  }

  ${breakpoints.md} {
  }


  p {
    position: relative;
    box-sizing: border-box;
    margin-left: 2rem;
    font-size: 1.4rem;
    font-weight: 400;
    padding-bottom: 0;
    margin-bottom: 0;
    color: #636363;

    @media (max-width: 820px) {
      font-size: 0.9rem;
    }

    &::before {
      position: absolute;
      content: "";
      top: -3px;
      left: -30px;
      height: 100%;
      width: 3px;
      background: linear-gradient(to bottom, red 30%, white, white);
    }

    &::after {
      position: absolute;
      content: "";
      top: -3px;
      left: -30px;
      height: 3px;
      width: 100%;
      background: linear-gradient(to right,
      red,
      white,
      white,
      white,
      white,
      white);
    }
  }
`;

