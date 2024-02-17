import React from 'react'
import {Box, Flex, Heading, Spacer, Text} from "@chakra-ui/react";
import Image from "next/image";
import {facebook, instagram, linkedin, mrtanta, twitter, youtube} from "../../../assets/employee";
import Link from "next/link";

const HeroProfile = ({data}) => {
    return (
        <>
            <Box
                display="flex"
                justifyContent="space-evenly"
                alignItems={"center"}
                flexDir={{lg: "row", base: 'column'}}
                background="#F7F4F4"
                px="4rem"
                pt={"4.9rem"}
                mt={"9rem"}
            >
                <Image src={data.profile_image} width={320} height={350} alt={"CEO"}/>
                <Spacer/>
                <Box
                    w={{base: '100%', lg: "30%"}}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDir={"column"}

                >
                    <Heading
                        fontWeight="700"
                        fontSize={{base: '1.2rem', lg: "2rem"}}
                        // lineHeight="58px"
                        mt={{base: ".5rem", lg: "unset"}}
                        textTransform="uppercase"
                        textAlign={"center"}
                    >
                        {data.name}
                    </Heading>
                    <div
                        style={{width: "130px", height: "4px", background: "#D80808", marginTop: ".5rem"}}
                    ></div>
                    <Text
                        fontWeight="400"
                        fontSize="18px"
                        lineHeight="24px"
                        letterSpacing="0.085em"
                        textTransform="uppercase"
                        mt={"15px"}
                        textAlign={{base: 'center'}}
                    >
                        {" "}
                        {data.role}
                    </Text>
                </Box>
                <Spacer/>
                <Box width={{base: '100%', lg: "30%"}} mb={{base: '1rem'}}>
                    <Text
                        fontSize={{base: '16', lg: "18px"}}
                        lineHeight="24px"
                        textAlign="center"
                        letterSpacing="0.085em"
                        textTransform="uppercase"
                        color="#636363"
                        mt={{base: '1rem'}}
                    >
                        {data.motto}
                    </Text>
                    <Flex justifyContent="center" alignItems="center" mt={"15px"}>
                        <Link href="">
                            <Image
                                src={twitter}
                                width={"20px"}
                                height={"20px"}
                                alt={"icon"}
                            />
                        </Link>
                        <Image
                            src={facebook}
                            width={"20px"}
                            height={"20px"}
                            style={{marginLeft: "15px", marginRight: "15px"}}
                            alt={"icon"}
                        />
                        <Image
                            src={youtube}
                            width={"20px"}
                            height={"20px"}
                            style={{marginLeft: "15px", marginRight: "15px"}}
                            alt={"icon"}
                        />
                        <Image
                            src={linkedin}
                            width={"20px"}
                            height={"20px"}
                            style={{marginLeft: "15px", marginRight: "15px"}}
                            alt={"icon"}
                        />
                        <Image
                            src={instagram}
                            width={"20px"}
                            height={"20px"}
                            alt={"iocn"}
                        />
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default HeroProfile;