import React from "react";
import {Box, Button, Grid, Text} from "@chakra-ui/react";
import {approach} from "../data";
import Link from "next/link";
import appRoutes from "../../../../utils/appRoutes";

function OurApproach () {
    return(
        <>
            <Box    id="pricing" scrollMarginTop={"150px"}   display={{base: "none", md: "block", lg: "block"}}>
                <Box  position={"relative"}
                      left={{base: "-1.5rem", md: "0", lg: "-1.5rem"}}>
                <Text
                    fontSize={"32.033px"}
                    fontWeight={"400"}
                    mt={"3rem"}
                    borderBottom={"1rem"}
                    color={" #222222"}
                    fontFamily={"Sumana"}

                >
                    Our Approach to Pricing
                </Text>

                <div
                    style={{
                        width: "8rem",
                        height: "4px",
                        background: "#D80808",
                        marginBottom: " 2rem ",
                    }}
                ></div>


                <Text
                    color={"#3B3C3D"}
                    fontSize={"16.0165px"}
                    fontWeight={"400"}
                    position={"relative"}
                    top={"-1.5rem"}
                >
                    We offer an optimal pricing model, taking into account your project and budget specifics:
                </Text>
                </Box>

                <Box>
                    <Grid
                        gridTemplateColumns={{
                            base: "none",
                            lg: "1fr 1fr 1fr",
                            md: "1fr 1fr",
                            sm: "none",
                        }}
                        justifyContent={"center"}
                        flexDir={{base: "column", lg: "row"}}
                        gridGap={"1rem"}
                        alignItems= {"center"}
                    >

                        {approach.map((item, index) => {
                            return(
                                <Box key={"index"}
                                     height={"17rem"}
                                     width={"17rem"}
                                     bg={"rgba(255, 255, 255, 0.002);"}
                                     boxShadow={" 0px 2px 20px rgba(0, 0, 0, 0.05)"}
                                     border={"1px solid #DADFE3"}
                                     boxSizing={"border-box"}
                                     position={"relative"}

                                >

                                    <Box

                                        height={"10px"}
                                        width={"17rem"}
                                        mb={"1rem"}
                                        bg={" #E9000E"}
                                    >

                                    </Box>
                                    <Text
                                    fontWeight={"700"}
                                    fontSize={"17.7961px"}
                                    textAlign={"center"}
                                    >

                                    {item.title}
                                    </Text>

                                    <Text
                                        fontWeight={"400"}
                                        fontSize={" 12.4573px"}
                                        w={"17rem"}
                                        pl={"1rem"}
                                        color={"#3B3C3D"}
                                        position={"absolute"}
                                        top={"6rem"}
                                        height={"59rem"}
                                    >
                                        {item.details}
                                    </Text>


                                    <Text
                                            position={"absolute"}
                                            top={"12.5rem"}
                                            pl={"1rem"}
                                            color={"#3B3C3D"}
                                            fontSize={"12.4573px"}
                                            w={"244px"}

                                        whiteSpace="pre-wrap"
                                        dangerouslySetInnerHTML={{
                                            __html: `${item.text1.substring(
                                                0,
                                                item.text1.indexOf(item.text1)
                                            )}<strong>${item.text}</strong>${item.text1.substring(
                                                item.text1.indexOf(item.text) + item.text
                                            )}`,
                                        }}
                                    />
                                </Box>
                            );
                        })}
                    </Grid>
                   <Box mt={"2rem"} display={"flex"} justifyContent={"center"}>
                       <Link href={{
                           pathname: appRoutes.services["cost-calculator"],
                           query: {
                               service: "itConsulting-6",
                           },
                       }}>
                           <Button
                               bg={"linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"}
                               color={"#FFFFFF"}
                               fontStyle={"normal"}
                               fontSize={"14px"}
                               fontWeight={"500"}
                               width={"200px"}
                               height={"50px"}
                               borderRadius={"none"}
                           >GET A CUSTOM QUOTE</Button></Link>
                   </Box>
                </Box>
            </Box>
        </>
    )
}
export default OurApproach