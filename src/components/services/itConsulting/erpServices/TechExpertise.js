import {Box, Flex, Text} from "@chakra-ui/react";
import {textStyle} from "./data";
import React from "react";
import TechnologiesStack from "./Technologies";

const TechExpertise = () => {
    return (
        <>
            <Box mt="60px">
                <Flex flexDir="column" color="#414141" fontWeight="700" fontSize="30px">
                    <Text sx={textStyle}>erp integrations</Text>
                    <Text>Custom ERP Development <Text color="#EB1A26" as="span">Cost and Timelines</Text></Text>

                </Flex>
                <Box w='55px' h="3px" bg="#E9000E" my="30px"></Box>
                <Text mb="30px">With our technical expertise and specialized IT services for the real estate industry,
                    combined with your innovative vision, we firmly believe in our capability to create cutting-edge
                    tech systems. These systems are specifically designed to support the scaling up of your business,
                    making life easier for your target audience. Together, we can revolutionize the real estate industry
                    and deliver seamless experiences that drive growth and success.</Text>
                <TechnologiesStack/>
            </Box>
        </>
    )
}

export default TechExpertise
