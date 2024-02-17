import React from 'react';
import {Box, Flex, Text} from "@chakra-ui/react";
import Image from "next/image";

const IncludeCard = ({img, head, text}) => {
    return (
        <Flex gap={"14px"} justifyContent={'center'} alignItems={"center"} flexDir={"column"} maxW={"280px"} mt={"30px"} minH={"300px"}>
            <Image src={img} alt={"image"} width={70} height={50}/>
            <Box w={"50px"} h={"2px"} bg={"red"}></Box>
            <Text color={"rgba(21, 22, 22, 1)"} fontSize={"16px"} fontWeight={"700"} textAlign={"center"}>{head}</Text>
            <Text fontSize={"16px"} textAlign={{ base: 'center', md: 'start', lg: 'start' }}>{text}</Text>

        </Flex>
    );
};

export default IncludeCard;

