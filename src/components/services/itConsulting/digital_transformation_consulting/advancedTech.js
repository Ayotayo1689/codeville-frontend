import React from "react";
import {Box, Grid, Text} from "@chakra-ui/react";
import {advancedTechnologies} from "./data";
import Image from "next/image";

function AdvancedTech() {

    return (
        <>
            <Box w={"100%"} mt={"40px"}>
                <Text fontWeight={"700"} fontSize={{lg:"29px", base:"20px"}} maxWidth={"850px"}>Technologies We Use to Enable Digital
                    Transformation </Text>
                <Box maxWidth={{lg:"120px", base:"50px"}} bg={"#E9000E"} height={"4px"} mb={"20px"}></Box>
            </Box>
            <Grid gridTemplateColumns={
                {
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                }
            } mb={"3rem"} alignItems={"center"} justifyContent={"center"} gap={"20px"}>
                {advancedTechnologies.map((item, index) => {

                    return (
                        <Box display={"flex"}
                             flexDir="column"
                             borderTop={"6px solid #E9000E"}
                             alignItems={"center"}
                             key={index}
                             boxShadow={" rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;"}
                             gap={"15px"}
                             pt={"20px"}>

                            <Image src={item.img} alt={"icons"}/>

                            <Text style={{
                                padding: "0 10px",
                                textAlign: "center",
                                fontSize: "15px",
                                fontWeight: "bold",
                            }}>
                                {item?.title}
                            </Text>
                            <Box>
                                <Text p={"0 10px 20px 10px"}
                                      fontSize={{base: '1.1rem', md: '0.9rem'}}>{item.details}</Text>
                            </Box>
                        </Box>
                    );
                })}
            </Grid>
        </>
    );
}

export default AdvancedTech;