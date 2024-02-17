
import styled from "styled-components";
import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";
import { FaCheck } from "react-icons/fa";
import {RiCheckboxBlankFill} from "react-icons/ri";
function ArchitectureCard({ title, body }) {
    return (
        <ServicesCard>
            <CardData>
                <Text fontSize={{ base: "1.2rem", md: "1.2rem", lg: "1.3rem" }} mb={2} fontWeight={700}>
                    {title}
                </Text>
                <Box className={"redline"}></Box>
                {Array.isArray(body) ? (
                    <Box mt={2}>
                        {body.map((item, index) => (
                            <Box key={index}>
                                    <Flex  fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }}><RiCheckboxBlankFill style={{color: "#E9000E", minWidth: '10px', maxWidth: '10px', marginTop: '4px'}}/> <Text pl={2} >{item}</Text></Flex>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <Text fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }} mt={2}>
                        {body}
                    </Text>
                )}
            </CardData>
        </ServicesCard>
    );
}

export default ArchitectureCard;


const ServicesCard = styled.div`
  padding: 0.7rem;
  border-radius: 20px;
  box-shadow: 0 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
  0 3.10345px 9.31034px 3.10345px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
 height: fit-content;
  
  .redline {
    width: 3rem;
    height: 0.2rem;
    background-color: #FF0000;
  }


  &:hover {
    transform: scale(1.01);
  }
`;

const CardData = styled.div`
  padding: 0.5rem 0.5rem 1rem 0.5rem;
`;