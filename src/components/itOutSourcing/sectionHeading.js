import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";

export const SectionHeading = ({heading}) => {
    return (<Box mb={12}>
            <Flex flexDir="column" mb={2} color="#414141" fontWeight="700" fontSize={{lg: '1.87rem', md: '1.5rem', base: '1.3rem'}}>
                <Text>{heading}</Text>
            </Flex>
            <Box w='4rem' h="3px" bg="#E9000E"></Box>
        </Box>

    )
}