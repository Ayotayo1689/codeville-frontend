import React, {useState} from 'react'
import {Box, Button, Flex, List, ListIcon, ListItem, Text, Heading } from "@chakra-ui/react";
import {BsFillArrowRightCircleFill, BsFillSquareFill} from "react-icons/bs";

const Insights = ({ text, lists }) => {
    const [seeMoreStatus, setSeeMoreStatus] = useState({});
    const handleSetStatus = (key) => {
        setSeeMoreStatus((prevState) => {
            let prevCopy = {...prevState};
            if (!prevCopy?.[key]) {
                prevCopy = {...prevCopy, [key]: true};
            } else {
                prevCopy = {...prevCopy, [key]: false};
            }
            return prevCopy;
        });
    };
    const seeMoreToggle = (list, key) => {
        let newList;
        if (seeMoreStatus[key]) {
            return list;
        } else {
            newList = list.slice(0, 3);
            return newList;
        }
    };
    let key;
    return (
        <Flex borderRadius={'20px'}
              background={'#fff'}
              justifyContent={'start'}
              flexDir={'column'}
              p={'2rem 2rem 0.2rem 2rem'}
              h={"fit-content"}
            boxShadow={'0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)'}>
            <Flex justifyContent={'start'}
            flexDir={'column'}>
                <Heading fontSize={'xl'} fontWeight={'700'} textAlign={'start'} mb={'.9rem'}>{text}</Heading>
                <Box
                    width={{ lg: "60px", base: "50px" }}
                    height={"3px"}
                    bg={"#D80808"}
                ></Box>
            </Flex>
            <List spacing={2} mt={"1rem"}>
                {seeMoreToggle(lists, `1-${key}`).map((item, index) => {
                    return (
                        <ListItem pl={"3px"}
                                  key={index}
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
            <Flex justifyContent={'end'} my={"0.5rem"}>
                <Button
                    w={"180px"}
                    background="#FFFFFF"
                    boxShadow="0px 1.55172px 3.10345px rgba(0, 0, 0, 0.3), 0px 1.55172px 4.65517px 1.55172px rgba(0, 0, 0, 0.15)"
                    borderRadius="12.4138px"
                    onClick={() => handleSetStatus(`1-${key}`)}
                >
                    {!!seeMoreStatus[`1-${key}`] ? "See Less" : "Learn More"}{" "}
                    <BsFillArrowRightCircleFill
                        style={{color: "#E9000E", margin: "8px"}}
                    />
                </Button>
            </Flex>

        </Flex>
    )
}

export default Insights