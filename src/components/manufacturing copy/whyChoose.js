import React from "react";
import {colors} from "../../../styles/theme";
import {Box, Flex, List, ListIcon, ListItem, Text,} from "@chakra-ui/react";
import {RiCheckboxBlankFill} from "react-icons/ri";

const WhyChoose = () => {
    return (
        <Box>
            <Box>
                {" "}
                <Text fontSize={"3xl"} fontWeight={"bold"}>
                    Why We Are So
                    <span style={{color: `${colors.primaryColor}`}}>
						{" "}
                        Reliable
					</span>{" "}
                </Text>
                <Box
                    w={"4rem"}
                    height={".2rem"}
                    bg={colors.primaryColor}
                    mt={"2"}
                ></Box>
                <Flex direction={{base: "column", lg: "row"}}>
                    <List spacing={5} paddingBlock={"1rem"} fontFamily={"Roboto"}>
                        <ListItem>
                            <ListIcon
                                as={RiCheckboxBlankFill}
                                color={`${colors.primaryColor}`}
                            />
                            Full-scale Project Management Office to handle projects of any
                            complexity.
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={RiCheckboxBlankFill}
                                color={`${colors.primaryColor}`}
                            />
                            15 years in help-desk on ITIL principles. 9 years in DevOps
                            practices.
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={RiCheckboxBlankFill}
                                color={`${colors.primaryColor}`}
                            />
                            Mature quality management system proved with ISO 9001 certificate
                            to deliver tangible service value and predictable results.
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                            <ListIcon
                                as={RiCheckboxBlankFill}
                                color={`${colors.primaryColor}`}
                            />
                            Solid security management system backed by ISO 27001 certification
                            to protect the customers’ data we access
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={RiCheckboxBlankFill}
                                color={`${colors.primaryColor}`}
                            />
                            76% of our revenue comes from 1+ year-long customers, such as
                            eBay, IBM, Baxter, NASA JPL, Nielsen, and more.
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={RiCheckboxBlankFill}
                                color={`${colors.primaryColor}`}
                            />
                            Consulting expertise in over 30 industries to bridge business and
                            technology.
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                    </List>
                </Flex>
            </Box>
        </Box>
    );
};

export default WhyChoose;
