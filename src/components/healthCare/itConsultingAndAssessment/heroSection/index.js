import React from "react"
import {Box, Button, ButtonGroup, Container, Flex, Text} from "@chakra-ui/react"
import Link from "next/link";
import Image from "next/image";
import appRoutes from "../../../../utils/appRoutes";


function HeroSection (){
    return(
        <>

            <Box>
                <Box  w={"100%"} overflow={{base: "hidden", md: "hidden", lg: "visible"}}>
                    <Container maxW={"7xl"} px={{lg: "5rem", "2xl": "0.4rem"}}>
                        <Flex
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            flexDir={{base: "column-reverse", md: "row", lg: "row"}}

                        >
                            <Box
                                w={{base: "100%", md: "50%", lg: "50%"}}
                                mt={{base: "0", md: "5rem", lg: "5rem"}}
                            >
                                <Flex
                                    direction={"column"}
                                    position={"relative"}
                                    left={{base: "0", md: "0", lg: "-4rem"}}
                                >
                                    <Text
                                        color={"#151616"}
                                        fontWeight={"700"}
                                        fontSize={{base: "32px", md: "25px", lg: "32px"}}
                                        width={"500px"}
                                        mb={"0.5rem"}
                                        display={{base: "none", md: "block", lg: "block"}}

                                    >Healthcare IT Advisory Services</Text>
                                    <Text
                                        color={"#151616"}
                                        fontWeight={"700"}
                                        fontSize={{base: "16px", md: "18px", lg: "24px"}}
                                        width={{base: "100%", md: "300px", lg: "490px"}}
                                        textAlign={{base:"center",md:"left",lg:"left"}}
                                        mb={"0.5rem"}
                                    >Harness the Power of Innovations and Mitigate Technology Risks in Healthcare</Text>
                                    <Text

                                        color={"#151616"}
                                        fontWeight={"400"}
                                        fontSize={"18px"}
                                        width={{base: "100%", md: "350px", lg: "490px"}}
                                        display={{base: "none", md: "block", lg: "block"}}
                                    >Since 2008, Tanta offers medical IT consulting services to help you improve business workflows,
                                        cut the costs of advanced techs implementation, launch a profitable medical software product or IT initiative.</Text>
                                    <Box mt={"1.5rem"}>


                                        <ButtonGroup mb={"4rem"}>
                                            <Link
                                                href={{
                                                    pathname: "/contact-us",
                                                    query: { service: "industries/health-care/it-consulting-services" },
                                                }}
                                                service="industries/health-care/it_consulting_services"
                                                className="request-services">
                                            <Button
                                                fontWeight="400"
                                                fontSize={{base: "12px", lg: "24px"}}
                                                lineHeight="24px"
                                                border={"1px solid  #E9000E"}
                                                color={{base: "white", md: "#E9000E", lg:"#E9000E" }}
                                                bg={{base: "#CE0000", md: "transparent", lg:"transparent" }}
                                            >
                                                SCHEDULE A MEETING{" "}
                                            </Button>
                                        </Link>

                                            <Link  href={{
                                                pathname: appRoutes.services["cost-calculator"],
                                                query: {
                                                    service: "itConsulting-6",
                                                },
                                            }}>
                                                <Button
                                                    fontWeight="500"
                                                    fontSize={{base: "12px", lg: "16px"}}
                                                    lineHeight="24px"
                                                    color={{base: "#E9000E", md: "white", lg:"white" }}
                                                    w={"177px"}
                                                    bg={{base: "transparent", md: "#CE0000", lg:"#CE0000" }}
                                                    border={"1px solid  #E9000E"}
                                                >
                                                    GET A QUOTE
                                                </Button>
                                            </Link>

                                        </ButtonGroup>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box   width={{base: "100%", md: "500px", lg: "800"}}>
                                <Image
                                    src={"/assets/healthcare/itConsultingServices/itAssessmentHeroImg.png"}
                                    alt="hero image"
                                    width={800}
                                    height={400}
                                    style={{position: "relative", top: "-3rem"}}
                                />
                            </Box>

                        </Flex>
                        <Box borderTop={"1px solid rgba(0, 0, 0, 0.30)"}
                             boxShadow={" 0px 4px 10px 0px rgba(0, 0, 0, 0.50)"}
                             mb={"3rem"}
                             mt={"0.5rem"}
                        ></Box>
                    </Container>
                </Box>
            </Box>

        </>
    )
}
export default HeroSection
