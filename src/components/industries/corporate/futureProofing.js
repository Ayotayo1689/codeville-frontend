import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Heading,
    List,
    ListIcon,
    ListItem,
    Text,
} from "@chakra-ui/react";
import React from "react";
import {RiCheckboxBlankFill} from "react-icons/ri";
import {futureProofData} from "./data";

function FutureProofing() {
    return (
        <Box>
            <Box>
                <Accordion defaultIndex={[0]} allowMultiple mt={"2rem"}>
                    {futureProofData.map((item) => {
                        return (
                            <AccordionItem
                                key={item.id}
                                mt={"1rem"}
                                border={"none"}
                                borderRadius={"10px"}
                                bg={"#EB1A26"}
                                _hover={{
                                    bg: "red",
                                }}
                            >
                                <h2>
                                    <AccordionButton
                                        border={{
                                            base: "1px solid #979797",
                                            lg: "2px solid rgba(172, 33, 33, 0.5)",
                                        }}
                                        bg={"#EB1A26"}
                                    >
                                        <Box as="span" flex="1" textAlign="left">
                                            <Text
                                                fontSize={{base: "1rem", md: "1.2rem"}}
                                                fontWeight={"500"}
                                                color={"#fff"}
                                            >
                                                {item.title}
                                            </Text>
                                        </Box>
                                        <AccordionIcon
                                            border={{base: "none", lg: "2px solid #fff"}}
                                            borderRadius={"50%"}
                                            color={{base: "initial", lg: "#fff"}}
                                            fontSize={{base: "1rem", lg: "1.5rem"}}
                                            fontWeight={"500"}
                                        />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} bg={"#F3F3F3"} pt={"1rem"}>
                                    <Heading
                                        fontSize={"1rem"}
                                        fontWeight={"400"}
                                        color={" #565656"}
                                    >
                                        {item?.listHeading}
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
        </Box>
    );
}

export default FutureProofing;
