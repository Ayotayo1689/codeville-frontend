import React from "react";
import { Box, Text } from "@chakra-ui/react";

const HeadingTwo = ({ title, width }) => {
    return (
        <Box w={"100%"} m={"30px 0 20px 0"} >
            <Text  fontWeight={"700"} fontSize={{base:"16px",lg:"29px"}} textAlign={{base:"center",lg:"left"}} maxWidth={ width ? width : "800px"}>{title}</Text>
            <Box maxWidth={"120px"} bg={"red"} m={{base:"10px auto",lg:"0"}} height={"4px"}></Box>
        </Box>
    );
};

export default HeadingTwo;
