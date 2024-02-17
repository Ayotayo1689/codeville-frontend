import React from 'react'
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading, Text} from "@chakra-ui/react";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import Link from "next/link";
import styled from "styled-components";

function Hero() {
    return (
        <div>
            <Header>
                <Breadcrumb
                    spacing="8px"
                    separator={
                        <MdOutlineKeyboardArrowRight color="gray" fontSize={"1.1rem"}/>
                    }
                    bg="linear-gradient(90.82deg, rgba(0, 0, 0, 0.38) -60.45%, rgba(255, 255, 255, 0) 146.74%);"
                    py={".5rem"}
                    width={{base: "30%", lg: "20%"}}
                >
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} href={"/blog"} color={"white"}>
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} href={"/industries"} color={"white"}>
                            Industries
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Heading
                        as={"h3"}
                        color={"white"}
                        fontSize={{base: "lg", lg: "3xl"}}
                    >
                        INDUSTRIES
                    </Heading>
                    <Text
                        color={"white"}
                        fontSize={{base: "md", lg: "xl"}}
                        textAlign={"center"}
                    >
                        Empowering Industries Through Innovative Solutions
                    </Text>
                </Flex>
            </Header>
        </div>
    )
}

export default Hero


const Header = styled.div`
  background-image: linear-gradient(180deg,
  rgba(0, 0, 0, 0.6) 78.57%,
  rgba(0, 0, 0, 0) 103.85%),
  url(${"/assets/blog/blog1.png"});
  background-size: cover;
  background-repeat: no-repeat;
  padding-block: 4rem;
  padding-block-start: 2rem;
  padding-inline: 1rem;
  gap: 1rem;
  @media (max-width: 96rem) {
    padding-block-start: 2rem;
    padding-block-end: 2rem;
  }
`;