import React from "react";
import LandingLayout from "../../layouts/landing.layout";
import HeaderOne from "../HeaderOne";
import {Box, Container, Flex, Image, Text,} from "@chakra-ui/react";
import ReferralForm from "../Referral/ReferralForm";

function Referral() {
    return (
        <Box mt={"5rem"}>
            <HeaderOne
                heading={"become our angent"}
                title={"join our agent program"}
            />
            <Container maxW={"7xl"} mb={"5rem"} p={{base: "1rem", lg: "4rem"}}>
                {/* ------------Know Someone who needs our services---------- */}
                <Flex gap={"2rem"} direction={{base: "column", lg: "row"}}>
                    <Flex
                        w={{base: "100%", md: "50%"}}
                        p={{lg: " 0 2rem"}}
                        borderRight={"10px solid #FFFFFF"}
                        gap={{md: "4rem"}}
                    >
                        <Flex direction={"column"} w={"100%"}>
                            <Box borderLeft={"3px solid #E9000E"} p={".5rem 2rem"}>
                                <Text
                                    as="h2"
                                    fontSize={{base: "24px", lg: "35px"}}
                                    w={"100%"}
                                    fontWeight={"700"}
                                >
                                    Know Someone who needs
                                    <Text as={"span"} color={"red"}>
                                        Our Services?
                                    </Text>
                                </Text>
                            </Box>
                            <Box w={"100%"} mt={"2rem"}>
                                <Flex align={"center"} gap={"1rem"} mt={"1.5rem"} w={"100%"}>
                                    <Box minWidth={"68px"}>
                                        <Image src={"/assets/referral/sales.png"} alt="Sales"/>
                                    </Box>
                                    <Text>Are you a good sales representative?</Text>
                                </Flex>
                                <Flex align={"center"} gap={"1rem"} mt={"1.5rem"}>
                                    <Box minWidth={"68px"}>
                                        <Image src={"/assets/referral/deal.png"} alt="Deals"/>
                                    </Box>
                                    <Text>Do you have what it takes to close a deal?</Text>
                                </Flex>
                                <Flex align={"center"} gap={"1rem"} mt={"1.5rem"}>
                                    <Box minWidth={"68px"}>
                                        <Image src={"/assets/referral/learn.png"}/>
                                    </Box>
                                    <Text>
                                        Or do you want to learn how to get trained and equipped by
                                        Tanta innovative{" "}
                                        <Text as={"span"} color={"#E9000E"}>
                                            FREE!
                                        </Text>
                                    </Text>
                                </Flex>
                            </Box>
                        </Flex>
                        <Box
                            width={"10px"}
                            h={"100%"}
                            bg={"#FFFFFF"}
                            boxShadow={"11px 0px 29px rgba(0, 0, 0, 0.25)"}
                        >
                            {" "}
                        </Box>
                    </Flex>

                    {/* ---------- Referral Form----------- */}
                    <Flex
                        w={{base: "100%", md: "50%"}}
                        direction={"column"}
                        gap={"2rem"}
                    >
                        <Text fontSize={"18px"}>
                            Please fill in the form below to join our Agent program and get
                            access to our personalized agent dashboard.
                        </Text>
                        <ReferralForm/>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}

Referral.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
};
export default Referral;
