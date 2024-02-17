import React from "react";
import {Box, Flex, List, ListIcon, ListItem, Text} from "@chakra-ui/react";
import Image from "next/image";
import Hospital from "../../../../public/assets/medicalSoftwarePage/hospital.svg";
import {BsFillSquareFill} from "react-icons/bs";

function ServicesOffersCard({ images, title, listTexts}){

    return (
        <>
            <Flex  mb={{base:"40px",md:"0"}} flexDirection={"column"} alignItems={"center"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"}  w={{base:"90%",md:"48%"}} h={{base:"fit-content",md:"380px"}} borderTop={"10px solid red"}>
                <Image style={{marginTop:"20px"}} src={images} alt={"img"}/>
                <Text mt={"20px"} fontWeight={"600"} fontSize={"20px"} textAlign={"center"}>
                    {title}
                </Text>

                <Box  w={"100%"}>
                    <List fontSize={"14px"} mt={"20px"} >
                        {listTexts}
                    </List>
                </Box>

            </Flex>

        </>
    );
}

export default ServicesOffersCard;