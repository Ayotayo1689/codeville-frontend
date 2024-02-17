import React from "react"
import {Box, Flex, List, ListItem, Text} from "@chakra-ui/react";

function AllConsultingServices (){
    return(
        <>
            <Box
                mb={"3rem"}
                 textAlign={{ base: "center", md: "left", lg: "left" }}
            >
                <Text fontSize={{ base: "20px", md: "30px", lg: "30px" }}
                      fontWeight={"700"}
                      color={"#565656"}

                >
                    All IT Consulting Services
                </Text>

                <Flex justifyContent={"space-between"} mt={"2rem"} flexDir={{ base: "column", md: "row", lg: "row" }}
                      flexWrap={"wrap"}
                >
                    <Box>
                        <Box>
                            <Text
                                fontSize={"22px"}
                                fontWeight={"500"}
                                color={"#303030"}
                            >
                                Services
                            </Text>
                            <Box
                                border={"2px solid red"}
                                borderRadius={"2px"}
                                width={"12.5rem"}
                                mt={"0.5rem"}
                                background={"var(--primary-500, #F2666E)"}
                                mr={{ base: "auto", md: "2rem", lg: "0" }}
                                ml={{ base: "auto", md: "0", lg: "0" }}

                            ></Box>
                        </Box>

                        <List spacing={3} mt={"1rem"}>
                            <ListItem>Cybersecurity Services</ListItem>
                            <ListItem>Cybersecurity Consulting</ListItem>
                            <ListItem>Security Program Development</ListItem>
                            <ListItem>Managed Application Services</ListItem>
                            <ListItem>Identity and Access Management</ListItem>
                        </List>
                    </Box>

                    <Box>
                        <Box>
                            <Text
                                fontSize={"22px"}
                                fontWeight={"500"}
                                color={"#303030"}
                                mt={{ base: "2rem", md: "0", lg: "0" }}
                            >
                                Security Testing
                            </Text>
                            <Box
                                border={"2px solid red"}
                                borderRadius={"2px"}
                                width={"12.5rem"}
                                mt={"0.5rem"}
                                background={"var(--primary-500, #F2666E)"}
                                mr={{ base: "auto", md: "2rem", lg: "0" }}
                                ml={{ base: "auto", md: "0", lg: "0" }}
                            ></Box>
                        </Box>
                        <List spacing={3} mt={"1rem"}>
                            <ListItem>End-to-End Application Services</ListItem>
                            <ListItem>Application Management</ListItem>
                            <ListItem>Application Development</ListItem>
                            <ListItem>Managed Application Services</ListItem>
                            <ListItem>Application Modernization</ListItem>
                        </List>
                    </Box>

                    <Box>
                        <Box>
                            <Text
                                fontSize={"22px"}
                                fontWeight={"500"}
                                color={"#303030"}
                                mt={{ base: "2rem", md: "2rem", lg: "0" }}
                            >
                                Compliance Services
                            </Text>
                            <Box
                                border={"2px solid red"}
                                borderRadius={"2px"}
                                width={"12.5rem"}
                                mt={"0.5rem"}
                                background={"var(--primary-500, #F2666E)"}
                                mr={{ base: "auto", md: "0", lg: "0" }}
                                ml={{ base: "auto", md: "0", lg: "0" }}
                            ></Box>
                        </Box>
                        <List spacing={3} mt={"1rem"}>
                            <ListItem>End-to-End Application Services</ListItem>
                            <ListItem>Application Management</ListItem>
                            <ListItem>Application Development</ListItem>
                            <ListItem>Managed Application Services</ListItem>
                            <ListItem>Application Modernization</ListItem>
                        </List>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}
export default AllConsultingServices