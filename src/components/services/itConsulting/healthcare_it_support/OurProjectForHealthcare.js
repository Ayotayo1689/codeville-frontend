import {Box, Button, Center, Text} from "@chakra-ui/react";
import {AiOutlineArrowRight} from "react-icons/ai";
import React from "react";
import Image from "next/image";

const OurProjectForHealthcare = ({data}) => {
    return (
        <Box>
            <Image src={data?.image} alt="Post image" />
            <Box p="26px 21px">
                <Text fontWeight="500" fontSize="22px" lineHeight="130%" mb="16px">{data?.title}</Text>
                <Text color="#E9000E" fontWeight="300" textTransform="uppercase" fontSize="14px" lineHeight="130%" mb="18px">{data?.subtitle}</Text>
                <Text fontWeight="400" fontSize="15px" lineHeight="170%">{data?.description}</Text>
            </Box>
            <Center><Button my="14px" color="#E9000E" variant="ghost" rightIcon={<AiOutlineArrowRight/>}>View Study</Button></Center>

        </Box>
    )
}

export default  OurProjectForHealthcare