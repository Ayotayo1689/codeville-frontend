import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import {advancedTechnologies} from "./data";
import Image from "next/image";
import arrow from "../../../../public/assets/medicalSoftwarePage/benefitArrow.svg";

function AdvancedTech() {

    return (
        <>
            <Box w={"100%"} mt={"40px"}>
                <Text fontWeight={"700"} fontSize={"29px"} maxWidth={"850px"}>Advanced Technologies Tanta Is Experienced In </Text>
                <Box maxWidth={"120px"} bg={"red"} height={"4px"} mb={"20px"}></Box>
            </Box>
            <Flex   mb={"3rem"} alignItems={"center"} justifyContent={"center"} gap={"20px"} flexWrap={"wrap"} height={"fit-content"}>
                {advancedTechnologies.map((item, index) => {

                    return (
                        <Box  display={"flex"}
                              position={"relative"}
                              flexDir="column"
                              justifyContent={"center"}
                              alignItems={"center"}
                              key={index} boxShadow={" rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;"}
                              width={"23%"}
                              minWidth={"200px"}
                              height={"136px"}
                              gap={"0.5rem"} >
                            {/*<Image style={{ position: 'absolute', top: 10, right: 10 }}  src={arrow} alt={"icons"} />*/}
                            <Image src={item.img} alt={"icons"} />
                            <Text p={" 0 10px"} textAlign={"center"} fontSize={"15px"}  fontWeight={"Bold"}>{item.details}</Text>
                        </Box>
                    );
                })}
            </Flex>
        </>
    );
}

export default AdvancedTech;