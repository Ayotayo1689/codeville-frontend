import {Box, Container, Flex, Heading, Image} from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components";

function SoftwareDevelopmentSteps() {
    return (
        <Box mt={"4rem"}>
            <Container maxW={"7xl"}>
                <Box>
                    <Heading
                        textAlign={{base: "start", md: "center"}}
                        fontSize={{base: "1.3rem", md: "2rem"}}
                        fontWeight={"700"}
                        color={"#414141"}
                    >
                        Software Development Steps:
                    </Heading>
                    <Heading
                        textAlign={{base: "start", md: "center"}}
                        fontSize={{base: "1.3rem", md: "2rem"}}
                        fontWeight={"700"}
                        color={"#E9000E"}
                    >
                        From plan to value
                    </Heading>
                    <Box
                        w={"121px"}
                        border={"2px solid #E9000E"}
                        m={{base: "1.2rem 0", md: "1.2rem auto"}}
                    ></Box>
                </Box>
                <Flex
                    justify={"center"}
                    maxW={"70%"}
                    margin={"3rem auto"}
                    display={{base: "flex", md: "none"}}
                >
                    <Image src='/assets/softwareDevelopment/steps-mobile.png' alt='Software development steps'/>
                </Flex>
                    <Images
                        src='/assets/softwareDevelopment/desktop-steps.svg'
                        alt='Optimal pace image'

                    />
            </Container>

        </Box>
    )
}

export default SoftwareDevelopmentSteps

const Images = styled.img`
margin:0 auto;
  
  @media only screen and (max-width: 770px){
    display: none;
  }
`