import React, {useState} from "react";
import {Box, Flex,  Text} from "@chakra-ui/react";
import {MdKeyboardArrowRight} from "react-icons/md";
import Link from "next/link";


const Sidebar = ({title, sideData, height, minW, color}) => {
    const [activeLink, setActiveLink] = useState({});
    return (
        <Box>
              <Flex
                flexDir="column"
                boxShadow={"lg"}
                height={height}
                minW={minW}
                position="sticky"
                top="10rem"
                pb={"1rem"}
                borderBottom={"lg"}
                display={{base: "none", lg: "flex"}}
                width={{base: '100%', lg: "25%"}}
                className="side-bar"
                borderRadius={"8px"}
                fontSize={"20px"}
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
                    background={"radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"}
                >
                    {title}
                </Text>
                <Box px={"1rem"}>
                    {sideData.map((item, index) => {
                        return (
                            <Flex
                                paddingInline={".4rem"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                key={index}
                                p={".3rem"}
                                color={color}
                            >
                                <Link
                                    onClick={() => {
                                        setActiveLink({[item?.id]: true});
                                    }}
                                    style={{
                                        color: activeLink[item?.id] ? "red" : "",
                                        fontSize: "20px",
                                        fontWeight: "400",
                                        cursor: "pointer",
                                        width: "100%",

                                    }}
                                    href={`#${item?.id}`}
                                >
                                    {item?.title}
                                </Link>

                                <MdKeyboardArrowRight
                                    style={{marginLeft: "47px"}}
                                    cursor={"pointer"}
                                    size={"2rem"}
                                />
                            </Flex>
                        );
                    })}
                </Box>
            </Flex>
        </Box>
    );
}

export default Sidebar;