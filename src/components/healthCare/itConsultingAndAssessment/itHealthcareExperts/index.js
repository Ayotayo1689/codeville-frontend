import React from "react";
import {Box, Button, Flex, Grid, List, ListIcon, ListItem, Text} from "@chakra-ui/react";
import {expertsCards,} from "../data";
import Image from "next/image";
import {BsArrowRight, BsFillSquareFill} from "react-icons/bs";
import appRoutes from "../../../../utils/appRoutes";
import Link from "next/link";

function ItHealthcareExperts() {
    return (
        <>
            <Box   display={{base: "none", md: "block", lg: "block"}}>
                <Box
                    alignItems={"center"}
                    mt={"2rem"}
                >
                    <Grid
                        gridTemplateColumns={{
                            base: "none",
                            lg: "1fr 1fr",
                            md: "1fr 1fr",
                            sm: "none",
                        }}
                        justifyContent={"center"}
                        flexDir={{base: "column", lg: "row"}}
                        gridGap={"1rem"}
                        alignItems= {"center"}
                    >
                        {expertsCards.map((item, index) => {
                            return(
                                <Box key={"index"}
                                     height={{base: "100%", md: "570px", lg: "550px"}}
                                     width={{base: "100%", md: "350px", lg: "400px"}}
                                     bg={"rgba(255, 255, 255, 0.002);"}
                                     boxShadow={" 0px 2px 20px rgba(0, 0, 0, 0.05)"}
                                     border={"1px solid #DADFE3"}
                                     boxSizing={"border-box"}
                                     position={"relative"}

                                >

                                    <Image
                                        src={item?.img}
                                        alt="icons"
                                        style={{width: "45px", height: "45px", margin:"auto", position: 'relative', top: "2rem" }}

                                    />
                                    <Text
                                        fontSize={"17px"}
                                        fontWeight={"700"}
                                        color={" #3B3C3D"}
                                        mt={"3rem"}
                                        textAlign={"center"}
                                    >{item.title}</Text>

                                    <Text mt={"0.5rem"} pl={4} >
                                        {item.details}
                                    </Text>

                                    <List spacing={2}   mt={"1rem"}  width={{base: "100%", md: "90%", lg: ""}}>
                                        {item.listItem.map((item, index) => {
                                            return (
                                                <ListItem pl={4}
                                                          key={"index"}
                                                >
                                                    <Flex flexGrow={"1"} >
                                                        <ListIcon as={BsFillSquareFill} color='red' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                                        <Text>
                                                            {item}
                                                        </Text>
                                                    </Flex>
                                                </ListItem>
                                            );
                                        })}
                                    </List>


                                    <Text
                                        color={"#3B3C3D"} pl={4} lineHeight={"30px"}
                                        mt={"0.5rem"}  width={{base: "100%", md: "90%", lg: "386px"}}

                                        whiteSpace="pre-wrap"
                                        dangerouslySetInnerHTML={{
                                            __html: `${item.footer1.substring(
                                                0,
                                                item.footer1.indexOf(item.footer1)
                                            )}<strong>${item.footer}</strong>${item.footer1.substring(
                                                item.footer1.indexOf(item.footer) + item.footer
                                            )}`,
                                        }}
                                    />


                                    <Box position={"absolute"} height={"50px"} bottom={"-20px"} right={"20px"}>
                                        <Flex color={"#E9000E"} fontSize={"12px"} fontWeight={"600"}>
                                            <Link href={{
                                                pathname: appRoutes.services["cost-calculator"],
                                                query: {
                                                    service: "itConsulting-6",
                                                },
                                            }}>
                                                {item.text}
                                            </Link>

                                            <Text marginLeft={"0.5rem"}
                                                  fontSize={"1rem"}
                                                  mt={"0.1rem"}
                                            >
                                                <BsArrowRight/>
                                            </Text>


                                        </Flex>
                                    </Box>
                                </Box>
                            );
                        })}
                        <Box  height={{base: "100%", md: "570px", lg: "550px"}}
                              width={{base: "100%", md: "350px", lg: "400px"}}
                              bg={"#E9000E"}
                              boxShadow={" 0px 2px 20px rgba(0, 0, 0, 0.05)"}
                              border={"1px solid #DADFE3"}
                              boxSizing={"border-box"}>


                            <Text fontWeight={500}
                            fontSize={"17px"}
                                  color={"#FFFFFF"}
                                  padding={"1rem"}
                            >Haven't found a healthcare solution you need?</Text>
                            <Text fontWeight={400}
                                  fontSize={"14px"}
                                  color={"#FFFFFF"}
                                  p={"0 1rem"}
                                  >Let’s discuss your specific case and our experts will get back to
                                you with a solution.</Text>
                           <Link href={{
                               pathname: appRoutes.services["cost-calculator"],
                               query: {
                                   service: "itConsulting-6",
                               },
                           }}>
                               <Button
                                   borderRadius={"none"}
                                   bg={"#FFFFFF"}
                                   fontWeight={600}
                                   fontSize={"16px"}
                                   position={"relative"}
                                   bottom={"-21.5rem"}
                                   left={"1.5rem"}>Share my needs</Button>
                           </Link>


                        </Box>
                    </Grid>
                </Box>

            </Box>
        </>
    )

}
export default ItHealthcareExperts