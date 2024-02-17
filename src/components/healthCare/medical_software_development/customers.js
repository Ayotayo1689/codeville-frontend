import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import HeadingTwo from "./heading";
import {customersThatBenefit} from "./data";
import Image from "next/image";

function Customers() {

    return (
        <>
            <HeadingTwo width={"600px"} title={"Customers that Benefit from Our Healthcare Solutions"} />

            <Flex mb={"3rem"} alignItems={"center"} justifyContent={"center"} gap={"20px"} flexWrap={"wrap"} height={"fit-content"}>
                {customersThatBenefit.map((item, index) => {

                    return (
                        <Box  display={"flex"}
                              flex={"1"}

                              flexDir="column"
                              justifyContent={"center"}
                              alignItems={"center"}
                              key={index} boxShadow={" rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;"}
                              width={"100%"} maxWidth={{base:"45%",md:"45%",lg:"300px"}}
                              minW={{base:"45%",md:"45%",lg:"260px"}}
                              height={"156px"} gap={"0.5rem"} >
                            <Image src={item.img} alt={"icons"} />
                            <Text p={" 0 10px"} textAlign={"center"} fontSize={"85%"}  fontWeight={"Bold"}>{item.details}</Text>
                        </Box>
                    );
                })}
            </Flex>
        </>
    );
}

export default Customers;