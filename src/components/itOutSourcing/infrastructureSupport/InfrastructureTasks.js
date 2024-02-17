import React from 'react'
import {Box, Button, Flex, Image, Text} from "@chakra-ui/react";
import {colors} from "../../../../styles/theme";
import Link from "next/link";
import appRoutes from "@/utils/appRoutes";

function InfrastructureTasks() {
    return (
        <Box bg={"#FDE6E7"} py={"2rem"} rounded={"lg"}>
            {" "}
            <Box>
                <Text
                    fontSize={{base: "lg", lg: "3xl"}}
                    fontWeight={"bold"}
                    textAlign={"center"}
                >
                    Let Us Take Over Your Infrastructure Management Tasks
                </Text>
                <Box
                    w={"4rem"}
                    height={".2rem"}
                    bg={colors.primaryColor}
                    mt={"2"}
                    mx={"auto"}
                ></Box>
            </Box>
            <Flex
                justifyContent={"center"}
                direction={{base: "column-reverse", lg: "row"}}
                alignItems={"center"}
            >
                <Flex
                    flex={"1"}
                    px={"2rem"}
                    direction={"column"}
                    justifyContent={"center"}
                    gap={"1rem"}
                >
                    <Text
                        textAlign={"center"}
                        fontSize={{base: "md", lg: "xl"}}
                        fontWeight={"semi-bold"}
                        color={'#565656'}
                        lineHeight={"2.2rem"}
                    >
                        Tanta Innovative will help you build accurate and transparent
                        analytics and reporting to eliminate the guesswork out of your
                        business processes and identify new profit opportunities
                    </Text>
                    <Flex alignItems={"center"} justifyContent={'center'}>
                        <Link
                            href={{
                                pathname: appRoutes.contactUs,
                                query: {service: "services/it-outsourcing"},
                            }}
                            service="services/it_outsourcing"
                            className="request-services"
                        >
                            <Button
                                alignSelf={"center"}
                                bg={"#F8B3B7"}
                                fontSize={{lg:"16px", base:"15px"}}
                                filter=" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                            >
                                Request IT Outsourcing Service
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
                <Box flex={"1"} w={{base: "14rem"}}>
                    <Image width={"100%"} src="/assets/itOutSourcing/img4.svg" alt="img"></Image>
                </Box>
            </Flex>
        </Box>
    )
}

export default InfrastructureTasks