
import {Box, Flex, Text} from "@chakra-ui/react";
import Image from "next/image";
import {TechnologiesData} from "./technologiesData";

const TechnologiesWeUse2 = () => {

    return (
        <>
            <Flex flexDir="column" gap="32px">
                {/*1st three techs*/}
                {TechnologiesData.slice(4).map((data, index) => {
                    return (
                        <Box key={index}>
                            <Text lineHeight="4opx" fontWeight="700" fontSize="24px" color="#004775">{data?.title}</Text>

                            <Flex flexDir="column" gap="0px">{data.subItem.map((data, index) => {
                                return (
                                    <Flex key={index} flexDir="column">
                                        {data?.title && <Text mt="8px" textTransform="uppercase" fontSize="14px" lineHeight="24px" fontWeight="400"
                                                              color="#000">{data?.title}</Text>}
                                        <Flex gap="2px" flexWrap="wrap">
                                            {data?.logos.map((logo, index) => {
                                                return (
                                                    <Image key={index} src={logo} alt="tech icon" width="96" height="64" />
                                                )
                                            })}

                                        </Flex>
                                    </Flex>
                                )
                            })}</Flex>
                        </Box>
                    )
                })}
            </Flex>
        </>
    )
}

export default TechnologiesWeUse2