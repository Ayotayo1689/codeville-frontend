import React, {useState} from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import {sideBarData} from "./data";
import Link from "next/link";
import {MdKeyboardArrowRight} from "react-icons/md";

const Content = () => {
    const [activeLink, setActiveLink] = useState({});
    return (
        <>
            {/* Second layer- Left */}
            <Flex
                flexDir="column"
                boxShadow={"lg"}
                height={"fit-content"}
                top={"10rem"}
                pb={"1rem"}
                borderBottom={"lg"}
                width={{base: "100%", lg: "30%"}}
                w={"300px"}
                position={{base: "", lg: "sticky"}}
                overflowY="scroll"
                display={{base: "none", lg: "flex"}}
            >
                <Text
                    as="h2"
                    fontSize={"2xl"}
                    fontWeight={"semibold"}
                    mb={"1rem"}
                    color={"white"}
                    textAlign={"center"}
                    paddingBlock={".5rem"}
                    px={2}
                    borderTopRadius={"lg"}
                    textTransform={"uppercase"}
                    background="radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
                >
                    Data analytics ASSESMENT
                </Text>
                <Box px={"1rem"}>
                    {sideBarData.map((item, index) => {
                        return (
                            <Flex
                                paddingInline={".4rem"}
                                justifyContent={"space-between"}
                                key={index}
                                p={".5rem"}
                                cursor={"pointer"}
                            >
                                <Link
                                    fontSize={"lg"}
                                    fontWeight={"normal"}
                                    onClick={() => {
                                        setActiveLink({[item.link]: true});
                                    }}
                                    style={{
                                        color: activeLink[item.link] ? "red" : "",
                                        fontSize: "20px",
                                        fontWeight: "400",
                                        cursor: "pointer",
                                        width: "100%",
                                    }}
                                    cursor={"pointer"}
                                    w={"full"}
                                    textDecoration={"none"}
                                    href={item.link}
                                >
                                    {item.title}
                                </Link>
                                <MdKeyboardArrowRight size={"2rem"}/>
                            </Flex>
                        );
                    })}
                </Box>
            </Flex>
        </>
    )
};

export default Content;