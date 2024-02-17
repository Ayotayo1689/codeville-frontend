import React from "react";
import {Box, Center, List, Text} from "@chakra-ui/react";
import Image from "next/image";
import styled from "styled-components";

function ServicesOffersCard({images, title, listTexts, exp}) {

    return (
        <>
            <Box pl={"15px"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"}
                 minH={"380px"} borderTop={"10px solid red"}>
                <Center>

                    <Image style={{marginTop: "20px"}} src={images} alt={"img"}/>
                </Center>
                <Text mt={"20px"} fontWeight={"700"} fontSize={"20px"} textAlign={"center"} px={1} py={2}>
                    {title}
                </Text>

                <Text w={"100%"}><b>Main goal</b>: {exp} </Text>
                <Text w={"100%"} mt={"10px"} fontWeight={"700"}>Digital transformation solutions we offer:</Text>

                <Box w={"100%"}>
                    <List fontSize={"12.59px"} mt={"20px"}>
                        {listTexts}
                    </List>
                </Box>

            </Box>

        </>
    );
}

export default ServicesOffersCard;

const Span = styled.span`

`
