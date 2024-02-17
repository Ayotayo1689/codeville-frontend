import React from 'react';
import {Box, Flex, Text} from "@chakra-ui/react";
import Image from "next/image";

const IncludeCard = ({head, text}) => {
    return (
        <Flex gap={"14px"} p={"15px"} boxShadow={"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"} borderRadius={"20px"} flexDir={"column"} maxW={"370px"}  h={"fit-content"} >
            <Text fontSize={"24px"} fontWeight={"700"}>{head}</Text>
            <Box w={"50px"} h={"2px"} bg={"red"}></Box>

            <Text fontSize={"16px"}>{text}</Text>

        </Flex>
    );
};

export default IncludeCard;

