import {Box, Container, Flex, Grid, Text} from "@chakra-ui/react";
import React from "react";
import {optimalPricing} from "./data";

function OptimalPricing() {
    return (
        <Box
            bg={"linear-gradient(255.79deg, #4E4E4E 14.97%, #232323 89.5%)"}
            p={"2rem 0"}
            display={{base: "none", md: "block"}}

        >
            <Container maxW={"7xl"}>
                <Flex direction={"column"} align={"center"} gap={".5rem"}>
                    <Text color={"#FFFFFF"} textAlign={"center"} fontSize={"1.3rem"}>
                        Offering an Optimal Pricing Model for Your Project
                    </Text>
                    <Box w={"179px"} height={"2px"} bg={" #FFFFFF"}>
                        {""}
                    </Box>
                </Flex>
                <Text color={"#FFFFFF"} mt={"2rem"} align={"center"} fontSize={"1rem"}>
                    Whether you need a fixed-price or time and materials pricing model,
                    we'll work with you to
                    <br/> find a solution that maximizes your return on investment.
                </Text>
                <Grid
                    templateColumns={{base: "100%", md: "repeat(2, 1fr)"}}
                    mt={"3rem"}
                    gap={"3rem"}
                    p={{base: "1rem", md: "0 6rem"}}
                >
                    {optimalPricing.map((item) => {
                        return (
                            <Flex
                                key={item.id}
                                bg={"#FFFFFF"}
                                direction={"column"}
                                borderRadius={"10px"}
                            >
                                <Flex
                                    justify={"center"}
                                    p={"1rem 0"}
                                    w={"100%"}
                                    bg={
                                        "linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"
                                    }
                                    borderRadius={"10px 10px 0px 0px"}
                                    align={"center"}
                                >
                                    <Text color={"#FFFFFF"} textAlign={"center"}>
                                        {item.title}
                                    </Text>
                                </Flex>
                                <Flex direction={"column"} gap={"1rem"} p={"3rem"}>
                                    <Text
                                        textAlign={"center"}
                                        fontSize={".9rem"}
                                        color={"#565656"}
                                    >
                                        {item.text1}
                                    </Text>

                                    <Text
                                        textAlign={"center"}
                                        fontWeight={"700"}
                                        color={"#565656"}
                                    >
                                        Best for:{" "}
                                    </Text>

                                    <Text
                                        textAlign={"center"}
                                        fontSize={".9rem"}
                                        color={"#565656"}
                                    >
                                        {item.text2}
                                    </Text>
                                </Flex>
                            </Flex>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
}

export default OptimalPricing;
