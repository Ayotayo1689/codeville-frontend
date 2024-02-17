import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Container,
    Flex,
    Grid,
    Heading,
    Image,
    Text,
} from "@chakra-ui/react";
import React from "react";
import {SmoothDevelopmentData} from "./data";

function smoothDevelopmentMobile() {
    return (
        <Box display={{base: "block", md: "none"}}>
            <Container>
                <Accordion defaultIndex={[0]} allowMultiple allowToggle mt={"2rem"}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton border={"1px solid #000000"}>
                                <Box as="span" flex="1" textAlign="left">
                                    <Heading
                                        textAlign={{base: "start", md: "center"}}
                                        fontSize={{base: "1.3rem", md: "2rem"}}
                                        fontWeight={"700"}
                                        color={"#414141"}
                                        textTransform={"capitalize"}
                                    >
                                        What helps us run smoothly
                                    </Heading>
                                    <Heading
                                        textAlign={{base: "start", md: "center"}}
                                        fontSize={{base: "1.3rem", md: "2rem"}}
                                        fontWeight={"700"}
                                        color={"#E9000E"}
                                        textTransform={"capitalize"}
                                    >
                                        software development projects
                                    </Heading>
                                    <Box
                                        w={"121px"}
                                        border={"2px solid #E9000E"}
                                        m={"1.2rem auto"}
                                    ></Box>
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        {/*<h2></h2>*/}
                        <AccordionPanel pb={4}>
                            <Grid
                                templateColumns={{base: "100%", md: "repeat(2, 1fr)"}}
                                gap={"1rem"}
                                p={{lg: "0 5rem", md: "0 1rem"}}
                                mt={"4rem"}
                            >
                                {SmoothDevelopmentData.map((item , index) => {
                                    return (
                                        <Flex
                                            key={index}
                                            direction={"column"}
                                            align={"center"}
                                            borderRadius={"5px"}
                                            p={".8rem"}
                                            gap={"1.5rem"}
                                            border={"1.5233px solid #FF0000"}
                                        >
                                            <Box>
                                                <Image src={item.image} alt="Card image"/>
                                            </Box>
                                            <Text
                                                textAlign={"center"}
                                                fontSize={"1.2rem"}
                                                fontWeight={"600"}
                                                color={"#2A2A2A"}
                                            >
                                                {item.title}
                                            </Text>
                                            <Text
                                                fontSize={".99rem"}
                                                fontWeight={"400"}
                                                color={"#2A2A2A"}
                                            >
                                                {item.description}
                                            </Text>
                                        </Flex>
                                    );
                                })}
                            </Grid>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Container>
        </Box>
    );
}

export default smoothDevelopmentMobile;
