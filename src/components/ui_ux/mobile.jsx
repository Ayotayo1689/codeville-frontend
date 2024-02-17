import React from "react";
import {
    Box,
    Flex,
    Image,
    List,
    ListItem,
    Text,
    Grid,
    Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel
} from "@chakra-ui/react";

import {
    advatagesOfTanta,
    sideBarList,
} from "./data";

import {colors} from "../../../styles/theme";

export const WhyTantaMobile= () => {
    return (
        <Box>
            <Accordion defaultIndex={[0]} allowMultiple my={"2rem"}>
                <AccordionItem
                    borderRadius={"3xl"}
                    boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                >
                    <AccordionButton color={"#B20000"} fontSize={"3xl"}>
                        <Text
                            fontSize={{base: "lg", lg: "2xl"}}
                            fontWeight={"bold"}
                            flex="1"
                            textAlign="left"
                            color={"black"}
                            borderButtom={"3px solid #E9000E"}
                        >
                            Why Choose
                            <span style={{color: `${colors.primaryColor}`}}>
									{" "}
                                Tanta Innovative
								</span>{" "}
                        </Text>

                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb={2}>
                        <Grid>
                            <Text
                                textAlign="justify"
                                my={".8rem"}
                                fontSize={"14px"}
                            >
                                Tanta Innovative offers web design services that include UI and
                                UX design for web-based solutions. With each web design project,
                                we carefully balance technology, visual aesthetics, and business
                                objectives to deliver online experiences that are fast-loading,
                                impactful, and high-converting. Our goal is to create websites
                                that not only look great but also provide an exceptional user
                                experience.
                            </Text>
                            <Box paddingLeft={"1rem"}>
                                {sideBarList.map((item, key) => {
                                    return (
                                        <List
                                            key={key}
                                            listStyleType={"inherit"}
                                            lineHeight={"7"}
                                            fontSize={"14px"}
                                        >
                                            <ListItem>{item.title}</ListItem>
                                        </List>
                                    );
                                })}
                            </Box>
                        </Grid>
                    </AccordionPanel>
                </AccordionItem>

            </Accordion>
        </Box>
    );
};


export const AdvantageOfTantaMobile= () => {
    return (
        <Box bg={"#FFEFEF"} alignItems={"center"}>
            <Accordion defaultIndex={[0]} allowMultiple my={"1rem"} >
                <AccordionItem
                    border={"1px solid"}
                >
                    <Box  alignItems={"center"} fontSize={{base: "lg", lg: "3xl"}} pt={"1.5rem"} fontWeight={"bold"} >
                        <Text
                            textAlign={"center"}
                        >
                            Advantages of Web Design with
                            <span style={{color: `${colors.primaryColor}`}}>
									{" "}
                                Tanta
								</span>{" "}
                        </Text>
                        <Text
                            textAlign={"center"}
                            color={colors.primaryColor}
                        >
                            Innovative
                        </Text>
                        <Text textAlign={"center"}>
                            Our Advantages
                        </Text>
                    </Box>
                    <AccordionButton color={"#B20000"} fontSize={"3xl"} justifyContent={"center"}>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb={2}>
                        <Flex flexWrap={"wrap"} p={{base: ".2rem", lg: "3rem"}}>
                            {advatagesOfTanta.map((item, index) => {
                                return (
                                    <Box key={index} width={"388px"} padding={"0.5rem"}>
                                        <Text
                                            pb={"4"}
                                            textAlign={"center"}
                                            fontSize={"1rem"}
                                            fontWeight={"bold"}
                                        >
                                            {item.title}
                                        </Text>
                                        <Text fontSize={".8rem"}>{item.discription}</Text>
                                    </Box>
                                );
                            })}
                            <Box p={"2rem"}>
                                <Image src="/assets/ui_ux/bro.png" alt="icon"></Image>
                            </Box>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>

    );
};