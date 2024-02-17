import React, {useState} from "react";
import {MdKeyboardArrowRight} from "react-icons/md";
import Image from "next/image";
import {Box, Card, chakra, Flex, Text} from "@chakra-ui/react";

function SolutionCard({ title, img, items }) {
    const [seeMoreStatus, setSeeMoreStatus] = useState({});
    const handleSetStatus = (key) => {
        setSeeMoreStatus((prevState) => {
            let prevCopy = {...prevState};
            if(!prevCopy?.[key]) {
                prevCopy = {...prevCopy, [key]: true}
            } else {
                prevCopy = {...prevCopy, [key]: false}
            }
            return prevCopy
        })
    }
    const seeMoreToggle = (list, key) => {
        let newList;
        if(seeMoreStatus[key]) {
            return list;
        } else {
            newList = list.slice(0, 1);
            return newList;
        }
    }
    let key;
    return (
        <>
            <Card
                w={{ lg: "45%", base: "90%" }}
                p={'15px'}
                display='flex'
                flexDir='column'
                justifyContent={'center'}
                alignItems={'center'}
                gap={'1rem'}
                boxShadow=" 0px 1.55172px 3.10345px rgba(0, 0, 0, 0.3), 0px 3.10345px 9.31034px 3.10345px rgba(0, 0, 0, 0.15)"
                mb={"1rem"}
            >
                <Image
                    src={img}
                    alt={title}
                    width={100}
                    height={90}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    marginBottom="1rem"
                    margin="0 auto"

                />
                <Text fontSize={{lg:"18px", base:"18px"}} fontWeight={500} textDecor={"underline"} lineHeight={"170%"} textAlign={"center"}>
                    {title}
                </Text>

                <ul>
                    {seeMoreToggle(items, `2-${key}`).map((nestedItem, index) => (
                        <>
                            <Flex justify={'center'} gap={"0.5rem"} key={index}>
                                <Box
                                    bg={"#E9000E"}
                                    marginTop={"0.5rem"}
                                    width={{lg:"11px", base:"5px"}}
                                    height={{lg:"10px", base:"5px"}}
                                    maxWidth={{lg:"9px", base:"5px"}}
                                    maxHeight={{lg:"11px", base:"5px"}}
                                ></Box>
                                <chakra.li
                                    key={nestedItem.id}
                                    listStyleType={"none"}
                                    lineHeight={"170%"}
                                    fontSize={"14px"}
                                >
                                    {nestedItem.name}
                                </chakra.li>
                            </Flex>
                        </>
                    ))}
                </ul>

                <Flex
                    justifyContent={"center"}
                    color={"#656565"}
                    alignItems={"center"}
                    fontSize={"16px"}
                    fontWeight={"500"}
                    mt={"2rem"}
                    w={'180px'}
                    backgroundColor={"#fffff"}
                    boxShadow="0px 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
                              0px 1.55172px 4.65517px 1.55172px rgba(0, 0, 0, 0.15);"
                    borderRadius={"12.4138px"}
                    border={"none"}
                    gap={"1rem"}
                    padding={"0.3rem 1rem"}
                    transition={" all 0.2s ease-in-out"}
                    margin={"1rem"}
                    cursor={"pointer"}
                    onClick={() => handleSetStatus(`2-${key}`)}
                >
                    {!!seeMoreStatus[`2-${key}`] ? 'See Less' : 'See More'} {" "}
                    <MdKeyboardArrowRight
                        style={{
                            color: "#ffffff",
                            backgroundColor: "#E9000E",
                            padding: "5.7px",
                            borderRadius: "143px",
                            width:"28px",
                            height:"28px",
                            transition: "all 0.2s ease-in-out",
                        }}
                    />
                </Flex>
            </Card>
        </>
    );
}

export default SolutionCard;