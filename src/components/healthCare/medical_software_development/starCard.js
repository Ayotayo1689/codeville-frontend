import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import Star from "../../../../public/assets/medicalSoftwarePage/star.svg";
import Image from "next/image";

function StarCard({title, text}) {

    return (
        <Flex m={"0 auto"} flexDirection={"column"} p={"20px"}  alignItems={"center"} gap={"14px"} maxHeight={"fit-content"} border={"0.88px solid #DADFE3"}  w={"48%"} minWidth={"300px"} minHeight={"260px"} >
            <Image src={Star} alt={"star icon"}/>
            <Text fontWeight={"700"} fontSize={"17px"} textAlign={"center"} >
                {title}
            </Text>
            <Box>
                <Text fontSize={"14px"}>{text}</Text>
            </Box>
        </Flex>
    );
}

export default StarCard;