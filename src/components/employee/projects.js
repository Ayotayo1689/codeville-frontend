import React from 'react'
import {Box, Container, Text} from "@chakra-ui/react";
import Image from "next/image";
import {burtech, chipon, dcfoods} from "../../../assets/employee";

const Projects = ({data}) => {
    return (
        <>
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                flexDirection={"column"}
                p={"2rem 1rem"}
            >
                <Container
                    maxW={"7xl"}
                    px={{lg: "5rem", "2xl": "0.4rem"}}
                    display={"flex"}
                    justifyContent={"start"}
                    flexDir={"column"}
                >
                    <Text
                        fontWeight="700"
                        fontSize={{base: '1.2rem', lg: "1.7rem"}}
                        // lineHeight={{base: '34px', lg: "70px"}}
                        textTransform="uppercase"
                        // ml={'1rem'}
                    >
                        projects {data.name} contributed to
                    </Text>
                    <Box w="130px" h="4px" mt={".5rem"} bg="#D80808"
                    ></Box>
                </Container>

                <Box p={"2.5rem 2.9rem"} background="#EBEBEB" mt={"1rem"}>
                    <Container
                        maxW={"7xl"}
                        px={{lg: "5rem", "2xl": "0.4rem"}}
                        display={"flex"}
                        // justifyContent={"center"}
                        alignItems={"center"}
                        flexDir={{base: 'column', md: 'row', lg: 'row'}}
                    >
                        {data.projects_contributed_to.map((item, index) => {
                            return(
                                <Box
                                    key={index}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    flexDirection={"column"}
                                    width={{base: '180px', lg: "200px"}}
                                    height="182px"
                                >
                                    <Image src={burtech} alt={"brand"}/>
                                </Box>
                            )
                        })}
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default Projects;