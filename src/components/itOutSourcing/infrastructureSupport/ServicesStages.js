import React, {useState} from "react";
import {Box, Flex, List, ListIcon,  Text} from "@chakra-ui/react";
import {stepdata} from "./data";
import styled from "styled-components";
import {FaCircle} from "react-icons/fa";

function ServicesStages() {

    const [selectedButton, setSelectedButton] = useState(1);
    const [selectedButton2, setSelectedButton2] = useState(1);

    const handleClick = (id) => {
        setSelectedButton(id);
    };
    const handleClick2 = (id) => {
        setSelectedButton2(id);
    };


    return (
        <Box pt={"30px"} mt={"50px"} w={"100%"} bg={"pink.100"} height={"500px"}>
            <Text ml={"30px"} fontWeight={"700"} fontSize={{base: "13px", lg: "25px"}}>
                How Tanta Innovative Delivers <span style={{color: "red"}}>IT Infrastructure</span> Managed Services
            </Text>
            <Box ml={"30px"} mb={"40px"} mt={"10px"} w={"60px"} h={"2px"} bg={"red"}></Box>
            <Div>

                {stepdata.map((item, index) => (
                    <Flex key={index} h={"fit-content"}>
                        <Flex flex={"1"} flexDir={"column"} justifyContent={"center"}>
                            <Flex gap={"10px"} alignItems={"center"}>
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
                                <Box fontSize={{base: "12px", md: "16px", lg: "16px"}}
                                     fontWeight={selectedButton === item.id ? '500' : '400'} w={{base: "4rem", md: "6rem", lg: "10rem"}}>{item.name}</Box>
                            </Flex>
                            {index !== stepdata.length - 1 &&
                                <Box h={"30px"} borderLeft={"2px dashed gray"} mt={"2px"} mb={"2px"} ml={"18px"}></Box>}
                        </Flex>
                        {/*start the big box*/}
                        <Box flex={"3"} display={selectedButton === item.id ? "flex" : "none"} alignItems={"center"}
                             p={"20px"}
                             boxShadow={"0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)"}
                             borderRadius={"15px"} bg={"white"} top={"-0.5rem"}
                             right={"0"}
                             position={"absolute"}
                             w={{base: "200px", md: "520px", lg: "520px"}}
                             height={{base: "", md: "350px", lg: "350px"}}
                             mr={{base: "1rem", md: "3rem", lg: "3rem"}}
                        >

                             <Box>
                               <List>
                                    <Flex flexGrow={"1"}    mb={{ base: "1rem", md: "2rem", lg: "2rem"}} >
                                        <ListIcon as={FaCircle} color='red' fontSize={{ base: "14px", md: "22px", lg: "22px"}} mt={{ base: "3px", md: "0.35rempx", lg: "0.35rem"}}/>
                                        <Text   fontSize={{ base: "14px", md: "14px", lg: "24px"}} fontWeight={"500"}  >
                                            {item.title}
                                        </Text>
                                    </Flex>
                                   <Text fontWeight={"400"} color={"#2B2C2D"}
                                     fontSize={{ base: "12px", md: "20px", lg: "20px"}}
                                   >
                                       {item.text}
                                   </Text>
                               </List></Box>

                        </Box>
                    </Flex>
                ))}

            </Div>

        </Box>
    )
}

export default ServicesStages

const Div = styled.div`
  position: relative;
  padding: 30px 0 30px 30px;
  @media (max-width: 700px) {
    padding: 30px 0 30px 10px;
  }

  .stepper-item {
    margin-bottom: 10px;
  }

  .stepper-divider {
    width: 40px;
    border: none;
    border-top: 2px dashed gray;
    margin: 10px 0;
    transform: rotate(90deg);
  }
`