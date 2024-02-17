import React from "react";
import { solution} from "./data";
import {Box,  Text} from "@chakra-ui/react";


function ArchitectureMobile() {
    return (
        <>
            <Box
                width={"100%"}
                display={{base: "block", md: "none", lg: "none"}}
                p={"0"}
                m={"0"}
            >
                    {solution.map ((item, index) => {
                        return(
                            <Box
                                key={index}
                                width={"100%"}
                            >

                                <Text fontWeight="700"
                                      fontSize={{base: "14px", lg: "24px"}}
                                      color=" #414141"
                                      textAlign={"center"}
                                      mt={"3rem"}
                                      display={"flex"}
                                      justifyContent={"center"}
                                >
                                    {item?.title}
                                </Text>
                                <Box
                                    style={{
                                        width: "3.5rem",
                                        height: "2px",
                                        background: "rgba(255, 0, 0, 1)",
                                        marginBottom: " 2rem ",
                                        marginTop: "0.5rem",
                                        marginLeft: "9rem"
                                    }}
                                ></Box>

                                <Text
                                    fontSize={"12px"}
                                    color="#565656"
                                    textAlign={"center"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                >
                                    {item?.details}
                                </Text>
                            </Box>
                        )
                    })}
            </Box>
        </>
    )
}

export default ArchitectureMobile


