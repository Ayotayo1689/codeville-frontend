import {Box, Container, Flex, Grid, Heading, Image, Text} from '@chakra-ui/react'
import React from 'react'
import {affordableITData} from './data'

function AffordableIT() {
    return (
        <Box mt={"4rem"} display={{base: "none", md: "block"}}>
            <Container maxW={"7xl"}>
                <Flex direction={"column"} margin={"0 auto"} maxW={"max-content"}>
                    <Heading
                        size={"lg"}
                        fontSize={"2rem"}
                        textTransform={"capitalize"}
                    >
                        The Key Factors Driving Our Smooth Execution of
                        <span style={{color: "#FF0000"}}> Software Projects</span>
                    </Heading>
                    <Box
                        w={"121px"}
                        border={"2px solid #E9000E"}
                        m={{base: "1.2rem auto", lg: "1.2rem 0"}}
                    >
                        {""}
                    </Box>
                </Flex>
                <Grid
                    templateColumns={{base: "100%", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"}}
                    gap={"1rem"}
                    p={{lg: "0 5rem", md: "0 1rem"}}
                    mt={"2rem"}
                >
                    {affordableITData.map((item) => {
                        return (
                            <Flex
                                key={item.id} direction={"column"}
                                align={"center"}
                                boxShadow={" 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)"}
                                borderRadius={"5px"}
                                p={".8rem"}
                                gap={"2rem"}
                            >
                                <Box>
                                    <Image src={item.image} alt='Card image'/>
                                </Box>
                                <Text
                                    textAlign={"center"}
                                    fontSize={"1.2rem"}
                                    fontWeight={"700"}
                                    color={"#9F000A"}
                                >
                                    {item.title}
                                </Text>
                                <Text
                                    textAlign={"center"}
                                    fontSize={".9rem"}
                                    fontWeight={"400"}
                                    color={"#2C2C2C"}
                                >
                                    {item.description}
                                </Text>
                            </Flex>
                        )
                    })}
                </Grid>
            </Container>
        </Box>
    )
}

export default AffordableIT