import React from "react";
import Image from "next/image";

import {Box, Flex, Spacer, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text,} from "@chakra-ui/react";
import {testimonials} from "../testimonial/data";

const Testimonial = () => {
    return (
        <div>
            <Box display={"flex"} flexDir="column">
                <Tabs position="relative" variant="unstyled">
                    <TabPanels>
                        {testimonials.map((item, index) => (
                            <TabPanel key={index}>
                                <Flex
                                    justify={"space-evenly"}
                                    mb={"1rem"}
                                    flexDir={{base: "column-reverse", lg: "row"}}
                                >
                                    <Box
                                        width={{base: "100%", lg: "50%"}}
                                        display={{base: "flex", lg: "block"}}
                                        marginRight="1rem"
                                    >
                                        <Text
                                            fontWeight="400"
                                            fontSize={{base: "14px", lg: "16px"}}
                                            lineHeight="170%"
                                            fontStyle={"italic"}
                                            color="#2B2C2D"
                                        >
                                            {item?.test}{" "}
                                        </Text>
                                    </Box>

                                    <Spacer/>

                                    <Box
                                        display={"flex"}
                                        flexDir="column"
                                        width={{base: "100%", lg: "50%"}}
                                        padding="1rem"
                                    >
                                        <Flex
                                            justifyContent="center"
                                            alignItems={"center"}
                                            flexDir="row"
                                            marginBottom={"1.4rem"}
                                        >
                                            <Box
                                                display={"flex"}
                                                justifyContent="center"
                                                alignItems={"center"}
                                                flexDir="row"
                                            >
                                                <Image
                                                    src={item?.image}
                                                    alt="profile"
                                                    style={{marginRight: "20px"}}
                                                />

                                                <Box>
                                                    <Text
                                                        fontWeight="500"
                                                        fontSize={{base: "14px", lg: "16px"}}
                                                        color="#000000"
                                                    >
                                                        {item?.name}
                                                    </Text>
                                                    <Text
                                                        fontWeight="400"
                                                        fontSize={{base: "12px", lg: "14px"}}
                                                        lineHeight="170%"
                                                    >
                                                        {item?.title}
                                                    </Text>
                                                </Box>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Flex>
                            </TabPanel>
                        ))}
                    </TabPanels>
                    <TabList>
                        {testimonials.map((item, index) => (
                            <Tab key={index}>
                                <Image src={item?.brand} width={150} height={80} alt=""/>
                            </Tab>
                        ))}
                    </TabList>
                    <TabIndicator
                        mt="-1.5px"
                        height="2px"
                        bg="red.500"
                        borderRadius="1px"
                    />
                </Tabs>
            </Box>
        </div>
    );
};

export default Testimonial;
