import React, {useState} from "react";
import {Box, Flex, Text, useMediaQuery} from "@chakra-ui/react";
import {list1, list2, stepdata} from "./data";
import styled from "styled-components";
import List from "./list";

function Approach() {

    const [selectedButton, setSelectedButton] = useState(1);
    const [selectedButton2, setSelectedButton2] = useState(1);
    const [isLessThan600] = useMediaQuery("(max-width: 600px)");

    const handleClick = (id) => {
        setSelectedButton(id);
    };
    const handleClick2 = (id) => {
        setSelectedButton2(id);
    };


    return (
        <Box py={"30px"} mt={"50px"} w={"100%"} bg={"#FDE6E7"}>
            <Text ml={"30px"} fontWeight={"700"} fontSize={"25px"}>
                Our approach to <span style={{color: "red"}}>Data Analysis</span>
            </Text>
            <Box ml={"30px"} mb={"40px"} mt={"10px"} w={"60px"} h={"4px"} bg={"red"}></Box>
            <Div>


                {stepdata.map((item, index) => (
                    !isLessThan600 && (
                        <Flex key={index} h={"fit-content"}>
                            {/*left side*/}
                            <Flex flex={"1"} flexDir={"column"} justifyContent={"center"}>
                                <Flex gap={"5px"} alignItems={"center"}>
                                    <Flex alignItems={"center"} justifyContent={"center"} border={"1px solid gray"}
                                          borderRadius={"50%"} w={"38px"} h={"38px"}>
                                        <button
                                            onClick={() => handleClick(item.id)}
                                            style={{
                                                background: selectedButton === item.id ? '#565656' : 'white',
                                                color: selectedButton === item.id ? "white" : "#565656",
                                                width: "30px",
                                                height: "30px",
                                                border: "1px double gray",
                                                borderRadius: "50%"
                                            }}
                                        >
                                            {item.id}
                                        </button>
                                    </Flex>
                                    <Box fontSize={"15px"}
                                         fontWeight={selectedButton === item.id ? '500' : '400'}>{item.name}</Box>
                                </Flex>
                                {index !== stepdata.length - 1 &&
                                    <Box h={"30px"} borderLeft={"2px dashed gray"} mt={"2px"} mb={"2px"}
                                         ml={"18px"}></Box>}
                            </Flex>

                            {/*Right side here*/}
                            <Box flex={"3"} display={selectedButton === item.id ? "flex" : "none"} alignItems={"center"}
                                 p={"20px"} border={"1px solid gray"} borderRadius={"20px"} bg={"white"} top={"20px"}
                                 position={"absolute"} right={"10px"} bottom={"0"} maxH={"90%"} w={"60%"}>
                                <Box w={"100%"}>
                                    {item.steps.map((step, index) => {
                                        return (
                                            <Flex key={index} flex={"1"} flexDir={"column"} justifyContent={"center"}>
                                                <Flex>
                                                    <button
                                                        onClick={() => handleClick2(step.id)}
                                                        style={{
                                                            background: selectedButton2 === step.id ? 'red' : 'white',
                                                            color: selectedButton2 === step.id ? "white" : "#565656",
                                                            width: "20px",
                                                            height: "20px",
                                                            border: "1px double gray",
                                                            borderRadius: "50%"
                                                        }}
                                                    >

                                                    </button>
                                                    <Box>
                                                        <Box ml={"20px"}>{step.name}</Box>

                                                    </Box>

                                                </Flex>
                                                <Box>
                                                    {index !== item.steps.length - 1 &&
                                                        <Flex pt={"20px"} pb={"20px"} flexDir={"column"} minH={"50px"}
                                                              borderLeft={"0.5px solid #FF9FA5"} ml={"9px"}>
                                                            {step.list.map((li, i) => {
                                                                return (
                                                                    <Box
                                                                        display={selectedButton2 === step.id ? "flex" : "none"}
                                                                        gap={"8px"} key={i} alignItems={"center"}
                                                                        mb={"6px"}>
                                                                        <Box w={"30px"} h={"1px"} bg={"red"}></Box>
                                                                        <Text>{li}</Text>
                                                                    </Box>
                                                                )
                                                            })}
                                                        </Flex>}
                                                </Box>
                                            </Flex>
                                        )
                                    })}
                                </Box>
                            </Box>

                        </Flex>
                    )
                ))}
            </Div>
            {
                isLessThan600 && <MobileApproach/>
            }
            <Box px={'10px'}>
                <Box
                    bg={'#AA9E9F'}
                    width={'100%'}
                    height={'1px'}
                    my={'2rem'}
                >
                </Box>

                <Box mt={'2rem'}>
                    <List title={"Type of Analytics"} data={list1}/>
                </Box>

                <Box
                    bg={'#AA9E9F'}
                    width={'100%'}
                    height={'1px'}
                    my={'2rem'}
                >
                </Box>
                <Box mt={'2rem'}>
                    <List title={"Analysis  Methods"} data={list2}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Approach

const Div = styled.div`
  position: relative;
  padding: 30px 0 30px 10px;

  .stepper-item {
    margin-bottom: 10px;
  }

  .stepper-divider {
    width: 30px;
    border: none;
    border-top: 2px dashed gray;
    margin: 10px 0;
    transform: rotate(90deg);
  }
`

function MobileApproach() {
    const [selectedButton, setSelectedButton] = useState(1);
    const [selectedButton2, setSelectedButton2] = useState(1);
    const [isLessThan600] = useMediaQuery("(max-width: 600px)");

    const handleClick = (id) => {
        setSelectedButton(id);
    };
    const handleClick2 = (id) => {
        setSelectedButton2(id);
    };

    return (
        <Box>
            <Flex gap={2} bg={'#fff'} flexWrap={'wrap'} p={2} mt={'-4rem'}>
                {stepdata.map((item, index) => (
                    <Box key={index}>
                        <Box onClick={() => handleClick(item.id)}

                             fontSize={"15px"} fontWeight={selectedButton === item.id ? '500' : '400'}>
                            <Flex color={'#2A2A2A'}>{item.name}</Flex>
                        </Box>
                    </Box>
                ))}
            </Flex>
            {stepdata.map((item, index) => (
                <Box key={index} display={selectedButton === item.id ? "flex" : "none"} p={"20px"} w={"100%"}>
                    <Box>
                        {item.steps.map((step, index) => {
                            return (
                                <Flex key={index} flex={"1"} flexDir={"column"} justifyContent={"center"}>
                                    <Flex>
                                        <button
                                            onClick={() => handleClick2(step.id)}
                                            style={{
                                                background: selectedButton2 === step.id ? 'red' : 'white',
                                                color: selectedButton2 === step.id ? "white" : "#565656",
                                                width: "20px",
                                                height: "20px",
                                                border: "1px double gray",
                                                borderRadius: "50%"
                                            }}
                                        >

                                        </button>
                                        <Box>
                                            <Box ml={"20px"}>{step.name}</Box>

                                        </Box>

                                    </Flex>
                                    <Box>
                                        {index !== item.steps.length - 1 &&
                                            <Flex pt={"20px"} pb={"20px"} flexDir={"column"} minH={"50px"}
                                                  borderLeft={"0.5px solid #FF9FA5"} ml={"9px"}>
                                                {step.list.map((li, i) => {
                                                    return (
                                                        <Box display={selectedButton2 === step.id ? "flex" : "none"}
                                                             gap={"8px"} key={i} alignItems={"center"} mb={"6px"}>
                                                            <Box w={"30px"} h={"1px"} bg={"red"}></Box>
                                                            <Text>{li}</Text>
                                                        </Box>
                                                    )
                                                })}
                                            </Flex>}
                                    </Box>
                                </Flex>
                            )
                        })}
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
