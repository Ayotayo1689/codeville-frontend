import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";

const CustomerReview = () => {
    return (
        <>
            <Box mt="126px" mb="50px">
                <Flex flexDir="column" color="#414141" fontWeight="700" fontSize="30px">
                    <Text>See What our clients are saying</Text>
                </Flex>
                <Box w='55px' h="3px" bg="#E9000E" my="30px"></Box>
                <Text lineHeight="170%" color="#1E1E1E">At Tanta Innovative, we firmly believe that our technical
                    expertise and IT services tailored for the real estate industry, combined with your innovative
                    vision, can pave the way for creating cutting-edge tech systems. These systems are designed to
                    facilitate the scaling up of your business by making life easier for your target audience. Together,
                    we can revolutionize the real estate industry and deliver seamless experiences that drive growth and
                    success.</Text>
            </Box>
        </>
    )
}

export default CustomerReview
