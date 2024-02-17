import React from 'react'
import {Box, Flex, Grid, Text} from "@chakra-ui/react";
import {textStyle} from "../erpServices/data";
import Image from "next/image";
import AvatarBurtech from "../../../../../public/assets/consulting/banking/avatar-burtech.png";

const Testimonial = () => {
    return (
        <Box mb="50px">
            <Flex flexDir="column" color="#414141" fontWeight="700" fontSize="30px">
                <Text pb="12px" sx={textStyle}>tanta testimonials</Text>
                <Text>What our Clients Say <span style={{color: "#EB1A26"}}>About Us</span></Text>
            </Flex>
            <Grid alignItems="center" gap={4}
                  templateColumns={{base: "1fr", md: "1fr 1.2fr", lg: "1fr", xl: "1fr 1.2fr"}}>
                <Box mt={'3rem'}>
                    <Flex gap={2} align="center">
                        <Image src={AvatarBurtech} width="90px" height="80px" alt="avatar-burtech"/>
                        <Flex flexDir="column" gap={2}>
                            <Text fontSize="1.3rem" fontWeight="700">Dr. Sarah Smith</Text>
                            <Text fontSize="1.15rem">CTO, Burtech Products</Text>
                        </Flex>
                    </Flex>
                    <Text mt="1.5rem" fontSize="1.3rem" lineHeight="170%">Lorem ipsum dolor sit amet consectetur.
                        Blandit et sit sollicitudin enim mus sit amet egestas. </Text>
                </Box>
                <Box>
                    <video width="100%" height="100%" controls style={{
                        borderRadius: "15.75px",
                        border: "1.5px solid rgba(255, 255, 255, 0.20)",
                        boxShadow: "0px 3.75px 15px 0px rgba(15, 20, 34, 0.40)",
                        cursor: 'pointer',
                        height: "230px",
                    }}
                    >
                        <source src="" type="video/mp4"/>
                    </video>
                </Box>
            </Grid>
        </Box>
    )
}
export default Testimonial
