import {Box, Button, Flex, Image, Text} from "@chakra-ui/react";
import React from "react";
import {colors} from "../../../styles/theme";

const NeedExpert = () => {
    return (
        <Box bg={"#FDE6E7"} py={"2rem"} rounded={"lg"}>
            {" "}
            <Box>
                <Text
                    fontSize={{base: "lg", lg: "3xl"}}
                    fontWeight={"bold"}
                    textAlign={"center"}
                >
                    NEED
                    <span style={{color: `${colors.primaryColor}`}}> EXPERT</span> AN
                    FOR YOUR IT <br/> OUTSOURCING{" "}
                    <span style={{color: `${colors.primaryColor}`}}>PROJECTS</span>
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
                        fontWeight={"semibold"}
                    >
                        Tanta Innovative will help you build accurate and transparent
                        analytics and reporting to eliminate the guesswork out of your
                        business processes and identify new profit opportunities
                    </Text>
                    <Button
                        alignSelf={"center"}
                        bg={"#F8B3B7"}
                        filter=" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                    >
                        Request IT Outsourcing Service
                    </Button>
                </Flex>
                <Box flex={"1"} w={{base: "14rem"}}>
                    <Image width={"100%"} src="/assets/itOutSourcing/img4.svg"></Image>
                </Box>
            </Flex>
        </Box>
    );
};

export default NeedExpert;
