import {Box, Container, Flex, Grid, Heading, Image, Text,} from "@chakra-ui/react";
import React from "react";
import {projectPace} from "./data";

function ProjectPace() {
    return (
        <Box m={"5rem 0"}>
            <Container maxW={"7xl"}>
                <Box>
                    <Heading
                        textAlign={"center"}
                        fontSize={{base: "1.3rem", md: "2rem"}}
                        fontWeight={"700"}
                        color={"#414141"}
                    >
                        Our Various Project Pace
                    </Heading>
                    <Heading
                        textAlign={"center"}
                        fontSize={{base: "1.3rem", md: "2rem"}}
                        fontWeight={"700"}
                        color={"#E9000E"}
                    >
                        To Choose From
                    </Heading>
                    <Box w={"121px"} border={"2px solid #E9000E"} m={"1.2rem auto"}>
                        {""}
                    </Box>
                </Box>
                <Grid
                    templateColumns={{base: "100%", md: "repeat(2, 1fr)"}}
                    gap={"4rem"}
                    mt={"4rem"}
                    p={{base: "0rem 1.1rem 0rem 1rem", lg: "0 6rem"}}
                >
                    {projectPace.map((card) => {
                        return (
                            <Flex key={card.id} direction={"column"} gap={"1rem"}>
                                <Heading
                                    fontSize={{base: "1rem", lg: "1.2rem"}}
                                    fontWeight={"700"}
                                    color={"#565656"}
                                >
                                    {card.title}
                                </Heading>
                                <Flex
                                    p={"3rem 1.5rem 1.5rem 1.5rem"}
                                    bg={"#FFFFFF"}
                                    boxShadow={" 0px 50px 80px rgba(255, 114, 114, 0.1)"}
                                    borderRadius={"10px"}
                                >
                                    <Text fontSize={".9rem"}>{card.description}</Text>
                                </Flex>
                            </Flex>
                        );
                    })}
                    <Flex
                        direction={"column"}
                        align={"center"}
                        justify={"center"}
                        display={{base: "none", lg: "block"}}
                    >
                        <Text
                            textAlign={"center"}
                            fontSize={"1.2rem"}
                            fontWeight={"700"}
                            color={"#263238"}
                        >
                            Tanta
                        </Text>
                        <Image
                            src="/assets/softwareDevelopment/bro.png"
                            alt="Scrum board"
                            margin={"0 auto"}
                        />
                    </Flex>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProjectPace;
