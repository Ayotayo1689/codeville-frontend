import React, {useState} from "react"
import {Box, Flex, Text} from "@chakra-ui/react";
import {ItConsultingSidebar} from "../data"
import Link from "next/link";
import {MdKeyboardArrowRight} from "react-icons/md";
function SidebarSection (){
    const [activeLink, setActiveLink] = useState({});
    return(
        <>

            <Flex gap={"2rem"} justify={"center"} position={"relative"} left={"-4rem"}>
                {/*====================Sticky sidebarSection====================================*/}
                <Flex
                    flexDir="column"
                    boxShadow={"lg"}
                    flex={1}
                    display={{base: "none", lg: "flex"}}
                    minW={"20rem"}
                    position={"sticky"}
                    top={"10rem"}
                    pb={"1rem"}
                    borderBottom={"lg"}
                    height={"30rem"}
                    borderRadius ={"lg"}


                >
                    <Text
                        as="h2"
                        fontSize={"2xl"}
                        fontWeight={"semibold"}
                        mb={"1rem"}
                        color={"white"}
                        textAlign={"center"}
                        paddingBlock={".5rem"}
                        borderTopRadius={"lg"}
                        background="radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
                    >
                        CONTENTS
                    </Text>
                    <Box px={"1rem"}>
                        {ItConsultingSidebar.map((item, index) => {
                            return (
                                <Flex
                                    justifyContent={"space-between"}
                                    alignItems={"center"}
                                    key={index}
                                    p={".3rem"}
                                >
                                    <Link
                                        onClick={() => {
                                            setActiveLink({[item.link]: true});
                                        }}
                                        style={{
                                            color: activeLink[item.link] ? "red" : "",
                                            fontSize: "18px",
                                            fontWeight: "400",
                                            cursor: "pointer",
                                            width: "100%",
                                        }}
                                        href={item.link}
                                    >
                                        {item.title}
                                    </Link>

                                    <MdKeyboardArrowRight
                                        cursor={"pointer"}
                                        size={"2rem"}
                                    />
                                </Flex>
                            );
                        })}
                    </Box>
                   </Flex>
            </Flex>

        </>
    )
}
export default SidebarSection