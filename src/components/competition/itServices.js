import React from 'react';
import {Box, Text} from "@chakra-ui/react";
import styled from "styled-components";

const ItServices = () => {
    return (
        <Box display={{ base: "block", md:"none"}}>
            <Contain >
                <H2>
                    Our <Red>Capabilities</Red>
                </H2>
                <Box
                    width="100px"
                    height="2px"
                    bg="red"
                    bottom="-5px"
                    left="0"
                    mb="20px"
                ></Box>
                <Text>
                    At Tanta Innovative, we will help you collect and properly analyze the data from physical objects to make transformative improvements to your business processes.
                </Text>
                <Btn>
                    Request IT Outsourcing Service
                </Btn>
            </Contain>
        </Box>
    );
};

export default ItServices;

const Contain = styled.div`
  height:250px;
  border:2px solid green;
`
const Btn = styled.button`
background-color: #F2666E;
  color: #FDE6E7;
  
`
const H2 = styled.div`
  
font-size: 20px;
  font-weight: 700;
`

const Red = styled.span`
color: red;
`