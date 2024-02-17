import {Box, Container, Flex, Grid, Heading, Link, Text,} from "@chakra-ui/react";
import React from "react";
import {AdvancedBusinessTasksData} from "./data";
import {BsArrowRight} from "react-icons/bs";

function AdvancedBusinessTasks() {


    return (
        <Box m={"4rem 0"} display={{base: "none", md: "block"}}>
            <Container maxW={"7xl"}>
                <Box>
                    <Heading
                        textAlign={{base: "start", md: "center"}}
                        fontSize={{base: "1.3rem", md: "2rem"}}
                        fontWeight={"700"}
                        color={"#414141"}
                    >
                        Software for Advanced
                    </Heading>
                    <Heading
                        textAlign={{base: "start", md: "center"}}
                        fontSize={{base: "1.3rem", md: "2rem"}}
                        fontWeight={"700"}
                        color={"#E9000E"}
                    >
                        Business Tasks
                    </Heading>
                    <Box
                        w={"121px"}
                        border={"2px solid #E9000E"}
                        m={{base: "1.2rem 0", md: "1.2rem auto"}}
                    >
                        {""}
                    </Box>
                </Box>
                <Text
                    fontSize={"1.1rem"}
                    fontWeight={"400"}
                    color={"#3A393A"}
                    textAlign={"center"}
                    mt={"1rem"}
                >
                    We work with all the mainstream technologies to expand the scope of
                    functions the software can perform.
                </Text>

                <Grid
                    templateColumns={{lg: "repeat(3, 1fr)"}}
                    gap={"2rem"}
                    mt={"2rem"}
                >
                    {/* maps over the Advance business tasks data */}
                    {AdvancedBusinessTasksData.map((card, index) => {
                        const borderColors = ["#FF0000", "#00FF57", "#00A3FF"]; //declares all border color variables
                        const bgColors = ["#FFE7E7", "#E7FFE8", "#E7F4FF"]; //declares all background color variables

                        const borderColorIndex =
                            Math.floor(index / 1) % borderColors.length; // Calculate the border color index
                        const bgColorIndex = Math.floor(index / 1) % bgColors.length; // Calculate the background color index

                        return (
                            <Flex
                                key={card.id}
                                direction={"column"}
                                border={`1px solid ${borderColors[borderColorIndex]}`}
                                p={"1rem"}
                                gap={"1rem"}
                                bg={bgColors[bgColorIndex]}
                            >
                                <Heading
                                    fontSize={"1.2rem"}
                                    fontWeight={"600"}
                                    color={"#2A2A2A"}
                                    textAlign={"center"}
                                >
                                    {card.title}
                                </Heading>
                                <Text fontSize={"1rem"} fontWeight={"400"} color={"#2A2A2A"}>
                                    {card.description}
                                </Text>
                                {/*<Link _hover={{textDecoration: "none"}} >*/}
                                {/*    <Flex*/}
                                {/*        align={"center"}*/}
                                {/*        gap={".5rem"}*/}
                                {/*        maxW={"10rem"}*/}
                                {/*        ml={"auto"}*/}
                                {/*    >*/}
                                {/*        <Text*/}
                                {/*            textAlign={"right"}*/}
                                {/*            color={"#FF0000"}*/}
                                {/*            fontSize={".9rem"}*/}
                                {/*            fontWeight={"400"}*/}
                                {/*        >*/}
                                {/*            More on {card.title}*/}
                                {/*        </Text>*/}
                                {/*        <BsArrowRight color="#FF0000" fontSize={"1rem"}/>*/}
                                {/*    </Flex>*/}
                                {/*</Link>*/}
                            </Flex>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
}

export default AdvancedBusinessTasks;
