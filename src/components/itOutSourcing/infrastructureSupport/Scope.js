import React from 'react'
import {Box, Flex, Text} from "@chakra-ui/react";
import {tantaScope} from "../data";
import {RiCheckboxBlankFill} from "react-icons/ri";

const ScopeOfTanta = () => {
    return (
        <Box>
            {tantaScope.map((data, index) => {
                return (
                    <Flex gap={2} key={index} mt={3}>
                        <Box mt="9px"><RiCheckboxBlankFill color="red" size={12}/></Box>
                        <Text fontSize="18px" lineHeight="170%"
                              color="#333">{data.text}</Text>
                    </Flex>
                )
            })}
        </Box>

    )
}
export default ScopeOfTanta
