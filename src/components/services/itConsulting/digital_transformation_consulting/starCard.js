import React from "react";
import {Box, Flex, Grid, Text} from "@chakra-ui/react";
import Image from "next/image";
import {starCardData} from "./data";
import ListIcon from "../../../../../public/assets/medicalSoftwarePage/ListIcon.svg";

function StarCard({title, list, exp}) {

    return (
        <Grid gridTemplateColumns={
            {
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
            }
        } mt={"40px"} gap={"15px"}>
            {starCardData.map((info, index) => {
                return (
                    <Flex key={index} flexDirection={"column"} p={"20px 10px"} alignItems={"center"} gap={"14px"}
                          border={"0.88px solid #DADFE3"}>

                        <Text fontWeight={"700"} fontSize={"17px"} textAlign={"center"}>
                            {info.title}
                        </Text>
                        <Text fontSize={"13px"}>{info.exp}</Text>
                        <Box>
                            {
                                info.list.map((data, i) => {
                                    return (
                                        <Flex key={i} flexDir={"column"}>
                                            <Flex alignItems={"start"} mb={"6px"}>
                                                <Image style={{marginTop: "6px", marginRight: "7px"}} src={ListIcon}
                                                       alt={"list icon"}/>
                                                <Text fontSize={"13px"}>{data.listTitle}</Text>
                                            </Flex>
                                            <Box ml={"10px"} mt={"6px"}>
                                                {data.subList.map((sub, li) => {
                                                    return (
                                                        <Flex alignItems={"start"} mb={"6px"} key={li}>
                                                            <Image style={{marginTop: "6px", marginRight: "7px"}}
                                                                   src={ListIcon} alt={"list icon"}/>
                                                            <Text fontSize={"13px"}>{sub}</Text>
                                                        </Flex>

                                                    )
                                                })}
                                            </Box>
                                        </Flex>
                                    )
                                })
                            }
                        </Box>
                    </Flex>
                )
            })}
        </Grid>
    );
}

export default StarCard;