import React from 'react'
import { Flex, Text} from "@chakra-ui/react";
import Image from "next/image";

const Analytics = ({ img, title, text }) => {
    return (
        <Flex
            p={'1rem'}
            justify={'center'}
            align={'center'}
            flexDir={'column'}
            border={'1px solid #DADFE3'}
        >
            <Image src={img} alt={title} />
            <Text textAlign={'center'}
                  fontWeight={'600'}
                  fontSize={'1.25rem'} my={'1.4rem'}>{title}</Text>
            <Text textAlign={'start'}>{text}</Text>
        </Flex>
    )
}

export default Analytics;