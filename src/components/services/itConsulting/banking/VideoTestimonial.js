import {Box, Flex, Text} from "@chakra-ui/react";
import {textStyle} from "../erpServices/data";
import Image from "next/image";
import AvatarBurtech from "../../../../../public/assets/consulting/banking/avatar-burtech.png"

import React from "react";

const VideoTestimonial = () => {
    return (
        <>
            <Flex flexDir="column" color="#414141" fontWeight="700" fontSize="30px">
                <Text pb="12px" sx={textStyle}>tanta testimonials</Text>
                <Text mb="36px">What our Clients Say <span style={{color: "#EB1A26"}}>About Us</span></Text>
            </Flex>
            <Flex flexDir={{base: 'column', xl: 'row'}} mb="30px" alignItems="center" gap={2} >
                <Box w={{base: '100%', xl: '42%'}}>
                    <Flex gap={4} align="center">
                        <Image src={AvatarBurtech} width="90px" height="80px" alt="avatar-burtech" />
                        <Flex flexDir="column" gap={4}>
                            <Text fontSize="25px" fontWeight="700">Dr. Sarah Smith</Text>
                            <Text fontSize="21px" >CTO, Burtech Products</Text>
                        </Flex>
                    </Flex>
                    <Text mt="33px" fontSize="21px" lineHeight="170%">Lorem ipsum dolor sit amet consectetur. Blandit et sit sollicitudin enim mus sit amet egestas. </Text>
                </Box>


                    {/*<Box zIndex='999' position='relative' display={{base: 'flex', xl: 'block'}} justifyContent='flex-end' w={{base: '100%', lg: '100%'}}>*/}
                    <Box w={{base: '100%', xl: '58%'}}><video width="100%" height="100%" controls style={{
                    borderRadius: "15.75px",
                    border: "1.5px solid rgba(255, 255, 255, 0.20)",
                    boxShadow: "0px 3.75px 15px 0px rgba(15, 20, 34, 0.40)",
                    cursor: 'pointer' }}
                >
                    <source src="" type="video/mp4"/>
                    </video></Box>
                        {/*<Box  >*/}
                        {/*    <Image style={{position: 'absolute', left: '0', zIndex: '10'}} src={Circle} alt={'circle'}  width='100%'/>*/}
                        {/*</Box>*/}
                    {/*</Box>*/}

            </Flex>
            <Flex my="42px" justify="center">
                <Box w="75%" h="px" bg="grey"></Box>
            </Flex>
        </>
    )
}

export default VideoTestimonial