import React from "react";
import {Box, chakra, Flex, Heading, List, ListIcon, ListItem, Text} from "@chakra-ui/react";
import {BsFillSquareFill} from "react-icons/bs";
import {consultingServicesCard} from "./data";
import  Image from "next/image"

function  ConsultingServices(){
    return(
        <>
            <Box id="consulting_service" scrollMarginTop={"150px"}>

                <Heading
                    fontWeight="700"
                    fontSize={{ base: "20px", lg: "30px" }}
                    color=" #414141"
                    lineHeight={{ lg: "140%", base: "150%" }}
                    mb={"0.5rem"}
                >
                    Analytics Consulting Services by &nbsp;
                    <chakra.span
                        color="#E9000E"
                        fontSize={{ base: "20px", lg: "30px" }}
                    >
                        Tanta Innovative
                    </chakra.span>{" "}


                </Heading>
                <div
                    style={{
                        width: "6rem",
                        height: "2px",
                        background: "#D80808",
                        marginBottom: " 2rem ",

                    }}
                ></div>

                <Text
                width={" 780px"}
                color={"#1E1E1E"}
                fontSize={"20px"}
                >
                    Leverage Tanta Innovative' s Analytics Consulting
                    Services to gain actionable insights and optimize your business performance.
                </Text>

                <List spacing={3}  mt={"2rem"}  width={" 650px"}
                      color={"#1E1E1E"}
                      fontSize={"20px"} >


                    <ListItem fontWeight={"400"} fontSize={"16px"}>
                        <Flex>
                            <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                            <Text>  Harness our analytics consulting to gain valuable data-driven insights for informed decision-making..</Text></Flex>
                    </ListItem>
                    <ListItem fontWeight={"400"} fontSize={"16px"}>
                        <Flex>
                            <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                            <Text>  Get customized analytics services aligned with your business objectives for optimal results.. </Text></Flex>
                    </ListItem>
                    <ListItem fontWeight={"400"} fontSize={"16px"}>
                        <Flex>
                            <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                            <Text>  Get customized analytics services aligned with your business objectives for optimal results.. </Text></Flex>
                    </ListItem>
                </List>
            </Box>

            <Box mt={"3rem"}>
                { consultingServicesCard.map ((item, index) => {
                    return (
                        <Box
                            key={index}
                            height={"258px"}
                            width={"846px"}
                            background={" #FFF"}
                            mb={"3rem"}
                            boxShadow={"0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)"}
                        >
                            <Box ml={"1rem"} pt={"1rem"}>
                            <Image
                                src={item?.img}
                                alt="icons"
                              width={65}
                                height={65}

                            />
                                <Text color={" #9F000A"} fontSize={"18px"} fontWeight={"700"} mt={"1rem"}>
                                    {item.title}
                                </Text>

                                <Text color={" #3A393A"} fontSize={"15px"}  mt={"1rem"} w={"800px"}>
                                    {item.details}
                                </Text>
                            </Box>

                        </Box>
                    );

                })}
            </Box>
        </>
    )
}
export default ConsultingServices