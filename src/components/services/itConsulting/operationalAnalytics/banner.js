import React from "react"
import {Box, chakra, Flex, Heading, Text} from "@chakra-ui/react";
import Image from "next/image";


function Banner({title1, title2, text, image}) {
    return (
        <>
            <Box>
                <Flex
                    bg={"rgba(253, 230, 231, 1)"}
                    w={{base: "100%", md: "45rem", lg: "53.813rem"}}
                    h={{base: "fit-content", md: "fit-content", lg: "39.625rem"}}
                    mt={"3rem"}
                    p={{base: "7rem 18px 26px 1rem", md: "7rem 18px 26px 3rem", lg: "7rem 18px 26px 3rem"}}
                    flexDir={{base: "column", md: "column", lg: "row"}}

                >
                    <Box>
                        <Heading
                            fontWeight="700"
                            fontSize={{base: "20px", lg: "30px"}}
                            color=" #444"
                            lineHeight={{lg: "140%", base: "150%"}}
                            w={{base: "18rem", md: "31rem", lg: "31rem"}}
                            mb={"0.5rem"}
                            textAlign={{base: "center", md: "left", lg: "left"}}
                        >

                            {title1}
                            &nbsp;
                            <chakra.span
                                color="rgba(233, 0, 14, 1)"

                            >

                                {title2}
                            </chakra.span>
                            {" "}
                        </Heading>
                        <Box
                            display={{base: "none", md: "block", lg: "block "}}
                            style={{
                                width: "5rem",
                                height: "2px",
                                background: "rgba(255, 0, 0, 1)",
                                marginBottom: " 2rem ",


                            }}
                        ></Box>

                        <Text
                            fontSize={{base: "16px", md: "18px", lg: "20px"}}
                            w={{base: "19rem", md: "30rem", lg: "31.5rem"}}
                            color="#000"
                            mt={{base: "2rem", md: "0", lg: "0px"}}
                        >
                            {text}</Text>
                    </Box>

                    <Box mt={"3rem"}>
                        <Image
                            src={image}
                            alt="hero image"
                            width={500}
                            height={500}
                            className="hero-img"
                        />
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default Banner