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
    List,
    ListIcon,
    ListItem,
    Text,
} from "@chakra-ui/react";
import React from "react";
import {RiCheckboxBlankFill} from "react-icons/ri";
import {enterpriseSoftwareList, softwareProductList} from "./data";

function EnterpriseSoftware() {
    return (
        <Box m={"6rem 0"}>
            <Container maxW={"7xl"}>
                <Grid templateColumns={{lg: "repeat(2, 1fr)"}} gap={"3rem"}>
                    <Box>
                        <Heading
                            fontSize={{base: "1.2rem", lg: "1.6rem"}}
                            color={"#414141"}
                        >
                            For Enterprise Software
                        </Heading>
                        <Accordion defaultIndex={[0]} allowMultiple mt={"2rem"}>
                            {enterpriseSoftwareList.map((item) => {
                                return (
                                    <AccordionItem
                                        key={item.id}
                                        mt={"1rem"}
                                        _hover={{bgColor: "none"}}
                                    >

                                            <AccordionButton
                                                border={{
                                                    base: "1px solid #979797",
                                                    lg: "2px solid rgba(172, 33, 33, 0.5)",
                                                }}
                                                bg={"#FFFFFF"}
                                            >
                                                <Box as="span" flex="1" textAlign="left">
                                                    <Text
                                                        fontSize={{base: "1rem", md: "1.2rem"}}
                                                        fontWeight={"500"}
                                                        color={"#551212"}
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </Box>
                                                <AccordionIcon
                                                    border={{base: "none", lg: "2px solid #EB1A26"}}
                                                    borderRadius={"50%"}
                                                    color={{base: "initial", lg: "#EB1A26"}}
                                                />
                                            </AccordionButton>

                                        <AccordionPanel pb={4} bg={"#F3F3F3"} pt={"1rem"}>
                                            <Heading
                                                fontSize={"1rem"}
                                                fontWeight={"700"}
                                                color={" #565656"}
                                            >
                                                It takes from 2 weeks to:
                                            </Heading>
                                            <List spacing={3} mt={"1rem"}>
                                                {item.listItems.map((listItem, index) => {
                                                    return (
                                                        <ListItem key={index} fontSize={".99rem"}>
                                                            <Flex align={"start"}>
                                                                <ListIcon
                                                                    as={RiCheckboxBlankFill}
                                                                    color={"#E9000E"}
                                                                    fontSize={".9rem"}
                                                                    mt={".4rem"}
                                                                />
                                                                {listItem}
                                                            </Flex>
                                                        </ListItem>
                                                    );
                                                })}
                                            </List>
                                        </AccordionPanel>
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </Box>

                    <Box>
                        <Heading
                            fontSize={{base: "1.2rem", lg: "1.6rem"}}
                            textAlign={"right"}
                            color={"#414141"}
                        >
                            For Commercial Software Products
                        </Heading>
                        <Accordion defaultIndex={[0]} allowMultiple mt={"2rem"}>
                            {softwareProductList.map((item) => {
                                return (
                                    <AccordionItem
                                        key={item.id}
                                        mt={"1rem"}
                                        _hover={{bgColor: "none"}}
                                    >
                                        <h2>
                                            <AccordionButton
                                                border={{
                                                    base: "1px solid #979797",
                                                    lg: "2px solid rgba(172, 33, 33, 0.5)",
                                                }}
                                                bg={"#FFFFFF"}
                                            >
                                                <AccordionIcon
                                                    border={{base: "none", lg: "2px solid #EB1A26"}}
                                                    borderRadius={"50%"}
                                                    color={{base: "initial", lg: "#EB1A26"}}
                                                />
                                                <Box as="span" flex="1" textAlign="right">
                                                    <Text
                                                        fontSize={{base: "1rem", md: "1.2rem"}}
                                                        fontWeight={"500"}
                                                        color={"#551212"}
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </Box>
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} bg={"#F3F3F3"} pt={"1rem"}>
                                            <Heading
                                                fontSize={"1rem"}
                                                fontWeight={"700"}
                                                color={" #565656"}
                                            >
                                                It takes from 3 weeks to:
                                            </Heading>
                                            <List spacing={3} mt={"1rem"}>
                                                {item.listItems.map((listItem, index) => {
                                                    return (
                                                        <ListItem key={index} fontSize={".99rem"}>
                                                            <Flex align={"start"}>
                                                                <ListIcon
                                                                    as={RiCheckboxBlankFill}
                                                                    color={"#E9000E"}
                                                                    fontSize={".9rem"}
                                                                    mt={".4rem"}
                                                                />
                                                                {listItem}
                                                            </Flex>
                                                        </ListItem>
                                                    );
                                                })}

                                                <Heading
                                                    fontSize={"1rem"}
                                                    fontWeight={"700"}
                                                    color={" #565656"}
                                                    mt={"30px"}
                                                >
                                                    It takes from 2 weeks to:
                                                </Heading>
                                                {item.listItemsTwo.map((listItem, index) => {
                                                    return (
                                                        <ListItem key={index} fontSize={".99rem"}>
                                                            <Flex align={"start"}>
                                                                <ListIcon
                                                                    as={RiCheckboxBlankFill}
                                                                    color={"#E9000E"}
                                                                    fontSize={".9rem"}
                                                                    mt={".4rem"}
                                                                />
                                                                {listItem}
                                                            </Flex>
                                                        </ListItem>
                                                    );
                                                })}

                                            </List>
                                        </AccordionPanel>
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
}

export default EnterpriseSoftware;
