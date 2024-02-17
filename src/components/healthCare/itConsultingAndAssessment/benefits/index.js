import React from "react";
import {Box, Button, chakra, Flex, Grid, Heading, Image, Text} from "@chakra-ui/react";
import Link from "next/link";


function Benefits() {
    return (
        <>
            <Box display={{base: "none", md: "block", lg: "block"}}>
                <Text
                    fontSize={"36px"}
                    fontWeight={"400"}
                    borderBottom={"1rem"}
                    color={" #222222"}
                    fontFamily={"Sumana"}
                >
                    Benefit from High-Quality Healthcare IT Consulting Services!
                </Text>

                <div
                    style={{
                        width: "8rem",
                        height: "4px",
                        background: "#D80808",
                        marginBottom: " 2rem ",
                    }}
                ></div>

                <Grid
                    gridTemplateColumns={{
                        base: "none",
                        lg: "1fr 1fr",
                        md: "1fr 1fr",
                        sm: "none",
                    }}
                    justifyContent={"center"}
                    flexDir={{base: "column", lg: "row"}}
                    gridGap={"3rem"}
                    alignItems={"center"}
                >
                    <Box borderLeft={"2px solid #E1E1E1"}>
                        <Text
                            ml={"1rem"}
                            fontWeight={"600"}
                            fontSize={"40px"}
                            color={"#151616"}
                        >-5% ... -35%</Text>
                        <Text ml={"1rem"}>IT operating costs</Text>
                    </Box>
                    <Box borderLeft={"2px solid #E1E1E1"}>
                        <Text ml={"1rem"}
                              fontWeight={"600"}
                              fontSize={"40px"}
                              color={"#151616"}>Up to 96%</Text>
                        <Text ml={"1rem"}
                              fontWeight={"400"}
                              fontSize={"18px"}
                              color={"#333333"}>user satisfaction score</Text>
                    </Box>
                    <Box borderLeft={"2px solid #E1E1E1"}>
                        <Text ml={"1rem"}
                              fontWeight={"600"}
                              fontSize={"40px"}
                              color={"#151616"}>Reliable plan</Text>
                        <Text ml={"1rem"}
                              fontWeight={"400"}
                              fontSize={"18px"}
                              color={"#333333"}>to achieve and maintain HIPAA compliance</Text>
                    </Box>

                    <Box borderLeft={"2px solid #E1E1E1"}>
                        <Text ml={"1rem"}
                              fontWeight={"600"}
                              fontSize={"40px"}
                              color={"#151616"}>1-3 months</Text>
                        <Text ml={"1rem"}
                              fontWeight={"400"}
                              fontSize={"18px"}
                              color={"#333333"}> for the first version of your digital health software</Text>
                    </Box>
                </Grid>

                {/***********last section**************/}

                <Box
                    mt={"3rem"}
                >

                    <Heading
                        fontWeight="800"
                        fontSize={{base: "20px", lg: "30px"}}
                        color="#E9000E"
                        lineHeight={{lg: "140%", base: "150%"}}
                        mb={"0.5rem"}
                        width={"600px"}
                    >
                        Need More
                        <chakra.span
                            color=" #414141"
                            fontSize={{base: "20px", lg: "30px"}}
                        >
                            &nbsp; Proof Of Our Competence? Don’t Hesitate to
                        </chakra.span>{" "}

                        to Contact Us!
                    </Heading>

                </Box>

                <Box scrollMarginTop={"150px"} id="requestiotservices" mt={"2rem"} background="#FDE6E7"
                     height={{base: "350px", md: "418px", lg: "391px"}}
                     width={{base: "350px", md: "100%", lg: "920px"}}
                >
                    <Text
                        fontSize={{base: "1.7rem", md: "1.5rem", lg: "1.7rem"}}
                        fontWeight={"700"}
                        position={"relative"}
                        top={"1.5rem"}
                        borderBottom={"1rem"}
                        color={" #565656"}
                        width={{base: "700px", md: "400px", lg: "700px"}}
                        textAlign={"center"}
                        m={"auto"}
                    >
                        NEED AN
                        <Text as="span" color="rgba(233, 0, 14, 1)">
                            &nbsp;EXPERT
                        </Text>
                        &nbsp; FOR YOUR IT OUTSOURCING
                        <Text as="span" color="rgba(233, 0, 14, 1)">
                            &nbsp;PROJECT?
                        </Text>
                    </Text>
                    <Box
                        w={{base:"50%", md:"6rem", lg:"6rem"}}
                        ml={{base:"auto", md:"auto", lg:"0"}}
                        mr={{base:"auto", md:"aut0", lg:"0"}}
                        mt={{base:"0.5rem", md:"0", lg:"0"}}
                        left={{base:"24rem", md:"0", lg:"24rem"}}
                        style={{

                            height: "3px",
                            background: "rgba(233, 0, 14, 1)",
                            marginTop: "2rem",
                            position: "relative",

                        }}
                    ></Box>

                    <Flex justifyContent={"space-around"}>
                        <Box>
                            <Text
                                fontSize={"20px"}
                                fontWeight={"700"}
                                color={"rgba(86, 86, 86, 1)"}
                                width={{base: "100%", md: "403px", lg: "403px"}}
                                textAlign={"center"}
                                position={"relative"}
                                top={"1rem"}
                                lineHeight={"34px"}

                            >
                                Tanta Innovative will help you build
                                accurate and transparent analytics and reporting to eliminate the guesswork out of
                                your business processes and identify new profit opportunities
                            </Text>
                            <Link
                                href={{
                                    pathname: "/contact-us",
                                    query: {service: "industries/health-care/it-consulting-services"},
                                }}
                                service="industries/health_care/it_consulting_services"
                                className="request-services">
                                <Button bg={"rgba(248, 179, 183, 1)"}
                                        height={"44px"}
                                        width={{base: "100%", md: "250px", lg: "347px"}}
                                        color={"rgba(38, 50, 56, 1)"}
                                        fontWeight={"600"}
                                        fontSize={"16px"}
                                        boxShadow={" 0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)"}
                                        position={"relative"}
                                        top={"2rem"}
                                        left={{base: "100%", md: "5rem", lg: "0"}}
                                        alignItems={"center"}

                                >Request IT Outsourcing Service </Button></Link>
                        </Box>

                        <Image mb={"3rem"}
                               display={{base: "none", md: "flex", lg: "flex"}}
                               height={"auto"}
                               w={350}
                               src="/assets/healthcare/itConsultingServices/man.png"
                               alt="icon"

                        ></Image>
                    </Flex>
                </Box>

            </Box>

            {/*</Box>*/}
        </>
    )
}

export default Benefits