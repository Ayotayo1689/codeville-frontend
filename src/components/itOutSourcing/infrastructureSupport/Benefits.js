import React from 'react'
import {Box, Center, Grid, Text} from "@chakra-ui/react";
import {benefitsCard} from "./data";
import Image from "next/image";

function Benefits() {
    return (
        <div>
            <Box
                mt={"3rem"}
                // display={{ base: "none", md: "flex", lg: "flex" }}
            >
                <Grid
                    gridTemplateColumns={{
                        base: "1fr",
                        lg: "1fr  1fr",
                        md: "1fr 1fr",
                        sm: "",
                    }}
                    flexDir={{ base: "column", lg: "row" }}
                    gridGap={"1rem"}
                    alignItems={"center"}

                >
                    {benefitsCard.map((item, index) => {
                        return (
                            <Box
                                key={index}
                                // height={"291px"}
                                width={{ base: "330px", md: "360px", lg: "375px" }}
                                background={"transparent"}
                                mb={"3rem"}
                                border={"1px solid rgba(0, 0, 0, 0.50)"}
                                borderRadius={"8px"}
                                ml={"auto"}
                                mr={"auto"}

                            >
                                <Box ml={"1rem"} pt={"1rem"}>
                                    <Center>
                                        <Image
                                            src={item?.image}
                                            alt="icons"
                                            style={{
                                                width: "65px",
                                                height: "65px",
                                                marginTop: "1rem",
                                                marginBottom: "1rem",
                                            }}
                                        />
                                    </Center>
                                    <Text
                                        color={"#303030"}
                                        fontSize={"20px"}
                                        fontWeight={"500"}
                                        ml={"auto"}
                                        mr={"auto"}
                                        textAlign={"center"}
                                    >
                                        {item.title}
                                    </Text>

                                    <Text
                                        color={" #3A393A"}
                                        fontSize={"15px"}
                                        mt={"1rem"}
                                        width={{ base: "300px", lg: "315px" }}
                                        textAlign={"center"}
                                        ml={"auto"}
                                        mr={"auto"}
                                    >
                                        {item.details}
                                    </Text>
                                </Box>
                            </Box>
                        );
                    })}
                </Grid>
            </Box>
        </div>
    )
}

export default Benefits