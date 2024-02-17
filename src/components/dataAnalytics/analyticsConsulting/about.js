import React from "react";
import {Box, Flex, Text, Image, List, ListItem, ListIcon} from "@chakra-ui/react";
import { BsFillSquareFill} from "react-icons/bs";

function About () {
    return(
        <>
        <Box>
            <Flex
            justifyContent={"space-between"}
            >
                <Box>
                     <Image
                        src="/assets/dataAnalytics/analyticsConsulting/BatchAssign.png"
                        alt="logo"
                        width={100}
                        height={100}
                        ml={"4rem"}
                        mb={"1rem"}

                        />
                    <Text
                    fontWeight={"700"}
                    fontSize={"30px"}
                    color={"#2F2F2F"}
                    textAlign={"center"}
                    mb={"0.5rem"}
                    >200+</Text>

                    <Text
                        fontWeight={"700"}
                        fontSize={"25px"}
                        color={"#2F2F2F"}
                    >Satisfied Customers</Text>
                </Box>
                <Box>

                    <Image
                        src="/assets/dataAnalytics/analyticsConsulting/Crowd.png"
                        alt="logo"
                        width={100}
                        height={100}
                        ml={"3rem"}
                        mb={"1rem"}

                    />
                    <Text
                        fontWeight={"700"}
                        fontSize={"25px"}
                        color={"#2F2F2F"}
                        textAlign={"center"}
                        mb={"0.5rem"}
                    >30+</Text>

                    <Text
                        fontWeight={"700"}
                        fontSize={"25px"}
                        color={"#2F2F2F"}
                    >Skilled Employees</Text>
                </Box>
                <Box>
                    <Image
                    src="/assets/dataAnalytics/analyticsConsulting/Guarantee.png"
                    alt="logo"
                    width={100}
                    height={100}
                    ml={"3rem"}
                    mb={"1rem"}
                />
                    <Text
                        fontWeight={"700"}
                        fontSize={"25px"}
                        color={"#2F2F2F"}
                        textAlign={"center"}
                        mb={"0.5rem"}
                    >80+</Text>

                    <Text
                        fontWeight={"700"}
                        fontSize={"25px"}
                        color={"#2F2F2F"}
                    >Senior IT Experts</Text>
                </Box>
            </Flex>

            <Flex mt={"2rem"} color={"rgba(0, 0, 0, 1)"} fontSize={"18px"} justifyContent={"space-between"}>
                <Box   w={"340px"} height={"264px"} >
                    <List   >
                        <ListItem fontWeight={"400"} fontSize={"16px"} display={"inline"}>
                            <Flex>
                                <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                <Text
                                letterSpacing={"1px"}> Full-scale <Text as="span" fontWeight={"700"}> Project Management</Text> Office to handle projects of any complexity.</Text></Flex>
                        </ListItem>
                        <ListItem fontWeight={"400"} fontSize={"16px"}>
                            <Flex>
                                <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                <Text
                                    letterSpacing={"1px"}> 15 years in help-desk on ITIL principles.</Text></Flex>
                        </ListItem >
                        <ListItem fontWeight={"400"} fontSize={"16px"}>
                            <Flex>
                                <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                <Text
                                    letterSpacing={"1px"}>  9 years in DevOps practices.</Text></Flex>
                        </ListItem>
                        <ListItem fontWeight={"400"} fontSize={"16px"}>
                            <Flex>
                                <ListIcon as={BsFillSquareFill} color='#E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                <Text
                                    letterSpacing={"1px"}>  Mature <Text as="span" fontWeight={"700"}> Quality Management </Text> system proved with ISO 9001 certificate to deliver tangible service value and predictable results.</Text></Flex>
                        </ListItem>
                    </List>
                </Box>



                <Box w={"340px"} height={"326px"} >
                    <List  >
                        <ListItem fontWeight={"400"} fontSize={"16px"} display={"inline"}>
                            <Flex>
                                <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                <Text
                                    letterSpacing={"1px"}>
                                    Solid security
                                    <Text as="span"
                                          fontWeight={"700"} > Management System</Text> backed by ISO 27001 certification to protect the customers’ data we access.</Text></Flex>
                        </ListItem>
                        <ListItem fontWeight={"400"} fontSize={"16px"}>
                            <Flex>
                                <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                <Text
                                    letterSpacing={"1px"}> <Text as="span"
                                                                    fontWeight={"700"}>76%</Text> of our revenue comes from 1+
                                    year-long customers, such as eBay, IBM, Baxter, NASA JPL, Nielsen, and more.</Text></Flex>
                        </ListItem >
                        <ListItem fontWeight={"400"} fontSize={"16px"}>
                            <Flex>
                                <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                <Text
                                    letterSpacing={"1px"}> <Text as="span"
                                                                    fontWeight={"700"}>Consulting Expertise</Text>  In Over 30 Industries To Bridge Business And Technology.</Text></Flex>
                        </ListItem>

                    </List>
                </Box>
            </Flex>

        </Box>
        </>
    )
}
export default About