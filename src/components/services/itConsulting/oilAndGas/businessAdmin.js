import React from "react"
import {Box, Button, Flex, Grid, List, ListIcon, ListItem, Text} from "@chakra-ui/react";
import Image from "next/image";
import {BsArrowRight, BsFillSquareFill} from "react-icons/bs";
import Link from "next/link";
import appRoutes from "../../../../utils/appRoutes";


function BusinessAdmin ({ Data, height, width, showButton, w, m}) {

    return(
        <>
            <Box
                alignItems={"center"}
                mt={"2rem"}
            >
                <Grid
                    gridTemplateColumns={{
                        base: "1fr ",
                        lg: "1fr 1fr",
                        md: "1fr 1fr",
                        sm: "none",
                    }}
                    justifyContent={"center"}
                    flexDir={{base: "column", lg: "row"}}
                    alignItems= {"center"}
                    gridRowGap={"1rem"}
                >
                    { Data.map((item, index) => {
                        return(
                            <Box key={"index"}
                                 height={height}
                                 width={width}
                                 bg={"rgba(255, 255, 255, 0.002);"}
                                 boxShadow={" 0px 2px 20px rgba(0, 0, 0, 0.05)"}
                                 border={"1px solid #DADFE3"}
                                 boxSizing={"border-box"}
                                 position={"relative"}
                                 left={{base: "1rem", md: "0", lg: "0"}}

                            >
                                <Box

                                    height={"10px"}
                                    width={width}
                                    mb={"1rem"}
                                    bg={" #E9000E"}
                                >
                                </Box>
                                <Box
                                    width={{base: "45px", md: "80px", lg: "94.818px"}}
                                    height={{base: "45px", md: "80px", lg: "85.337px"}}
                                    margin={"auto"}
                                    position={"relative"}
                                >
                                <Image
                                    src={item?.img}
                                    alt="icons"


                                /></Box>
                                <Text
                                    fontSize={{base: "14px", md: "17px", lg: "17px"}}
                                    fontWeight={"700"}
                                    color={" #3B3C3D"}
                                    mt={"2rem"}
                                    textAlign={"center"}
                                    w={w}
                                    m={m}


                                >{item?.title}</Text>

                                <Text fontSize={"12px"} w={{base: "", md: "18rem", lg: "21rem"}} mt={ " 1rem"} ml={"1rem"}>
                                    {item?.detail}
                                </Text>


                                <List   mt={"1rem"}      w={w}>
                                    {item.content.map((item,) => {
                                        return (
                                            <ListItem pl={4}
                                                      key={"index"}

                                            >
                                                <Flex flexGrow={"1"} >
                                                    <ListIcon as={BsFillSquareFill} color='red' fontSize={"0.5rem"}
                                                              mt={"0.3rem"}/>
                                                    <Text  fontSize={{base: "11px", md: "12.642px", lg: "12.642px"}}>
                                                        {item}
                                                    </Text>
                                                </Flex>
                                            </ListItem>
                                        );
                                    })}
                                </List>



                                <Box
                                    m={"auto"}
                                    width={"60%"}
                                    top={{base: "", md: "1.3rem", lg: "2rem"}}
                                    position={"relative"}

                                >
                                    {
                                    showButton ?  (<Link
                                        href={{
                                            pathname: appRoutes.contactUs,
                                            query: {service: "services/it-consulting/oil-and-gas"},
                                        }}
                                        service={`services/it-consulting/oil-and-gas/${item.text}`}
                                        className="request-services"
                                    ><Button
                                    color={"#E9000E"}
                                    bg={"transparent"}
                                    border={"1px solid #EB5046"}
                                    borderRadius={"none"}
                                    fontSize={"16px"}
                                    p={"0px 0.5rem"}
                                    w={"216px"}
                                >
                                    {item.text}
                                    <Text marginLeft={"0.5rem"}
                                          fontSize={"12px"}
                                          mt={"0.5rem"}
                                          color={"linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"}
                                    >
                                        <BsArrowRight/>
                                    </Text>
                                    </Button></Link>) : null
                                }
                                </Box>
                            </Box>
                        );
                    })}
                </Grid>
            </Box>

        </>
    )
}
export default BusinessAdmin