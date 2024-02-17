import React from "react";
import {Box, Text} from "@chakra-ui/react";

const HeadingTwo = ({title, width}) => {
    return (
        <Box w={"100%"} m={"0 0 20px 0"}>
            <Text fontWeight={"700"} fontSize={{lg:"24px", base:"20px"}} maxWidth={width ? width : "800px"}>{title}</Text>
            <Box maxWidth={{lg:"120px", base:"50px"}} bg={"red"} height={"4px"}></Box>
        </Box>
    );
};

export default HeadingTwo;
