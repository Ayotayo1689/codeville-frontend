import React from 'react';
import {Box, Container} from "@chakra-ui/react";
import Image from "next/image";
import styled from "styled-components";
import ParticipateImg from "../../../public/assets/competition/participate-img.svg";

const WhoCanParticipate = () => {
    return (
        <Box>
        <Container maxW={"7xl"} pb={"3rem"} >
            <Section>
                <H3>
                    Who Can <Span>Participate?</Span>
                </H3>
                <Title>
                    Eligibility
                </Title>
                <Box

                    width={{ base: "40px", md:"100px"}}
                    height="2px"
                    bg="red"
                    bottom="-3px"
                    left="0"
                    mb="20px"
                ></Box>
                <Flex >
                    <Image className="image" src={ParticipateImg} alt={"image"} />
                    <Texts>
                        <p>
                            Embrace the opportunity to bring your innovative ideas to life. Open to everyone who meets the eligibility criteria, this is your chance to showcase your creativity and participate for a shot at success!


                        </p>
                       <Red>
                           <h3>
                               WHO CAN NOT PARTICIPATE
                           </h3>
                           <p>
                               - Employee of Tanta Innovative and Families
                           </p>
                       </Red>
                    </Texts>

                </Flex>
            </Section>

        </Container>

        </Box>
    );
};

export default WhoCanParticipate;

const H3 = styled.h2`
  font-weight: 700;
  font-size: 32px;

  @media (max-width: 820px) {
    font-size: 23px;
  }
  
`
const Flex = styled.div`
display: flex;
  gap: 20px;
  @media (max-width: 820px) {
   .image{
     display: none;
   }
  }
`
const Title = styled.p`
  font-weight: 400;
  //font-size: 18px;
  margin-bottom: 15px;
  color: #A7A7A7;
  font-size: 19px;
  @media (max-width: 820px) {
    font-size: 13.46px;
    margin-bottom: 10px;
  }
 
`
const Span = styled.span`
color: #FF0000;
`
const Red = styled.div`
color: red;
`

const Section = styled.div`

  width: 80%;
  margin: 0 auto;
  @media (max-width: 820px) {
   width: 100%;
    //font-size: 12px;
  }
`
const Texts = styled.div`
//border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px ;
  width: 100%;
  font-weight: 500;
  //font-family: 'Roboto';
  font-size: 18px;
  @media (max-width: 820px) {
   p{
     font-size: 13px;
   }
  }
`