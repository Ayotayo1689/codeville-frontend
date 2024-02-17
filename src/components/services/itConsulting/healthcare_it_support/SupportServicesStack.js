import {Box, Flex, Grid, GridItem, Text} from "@chakra-ui/react";
import {SupportServicesData} from "./data";
import Image from "next/image";

const SupportServicesStack = () => {
    return (
        <Flex flexDir={{base:"column",md:"row"}} gap="12px">
            {SupportServicesData.map((data, index) => {
                return (
                    <Box  flex={"1"} key={index} p="26px 10px 42px 21px" border="1px solid #DADFE3">
                        <Image src={data?.icon} alt="support service icon" />
                        <Text py="14px" color="#3B3C3D" fontSize={{base:"16px",md:"24px"}} fontWeight="700">{data?.title}</Text>
                        <Text maxW={{base:"400px"}} pl={{base:"0",md:"40px"}} color="#3B3C3D" fontSize={{base:"14px",md:"16px"}} fontWeight="400" lineHeight="25px">{data?.description}</Text>
                    </Box>
                )
            })}
        </Flex>
    )
}

export default SupportServicesStack