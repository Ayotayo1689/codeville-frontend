import React from 'react';
import {Box, Container} from "@chakra-ui/react";
import Image from "next/image";
import HeroImg from "../../../public/assets/competition/heroimg.svg";
import styled from "styled-components";
import {breakpoints} from "../../../styles/theme";

const InnovativeIdeas = () => {
    return (
        <Box>
            <Container maxW={"6xl"}>
                <Flex >
                    <HeroText>
                        <h1>Bring Your Innovative Ideas to Life</h1>
                        <p> A competition for individuals to submit innovative software development ideas. The top two ideas will be developed by Tanta Innovative Limited at no cost to the winners.
                        </p>

                        <CtaButtons>
                            <button className="request-services">
                                submit an idea
                            </button>
                            {/*<button className="get-quote">get a quote</button>*/}
                        </CtaButtons>
                    </HeroText>
                    {/*<Img>*/}
                    {/*   */}
                    {/*</Img>*/}
                    <Div>
                        <Image
                            src={HeroImg}
                            alt="hero image"
                            className="hero-img"
                        />
                    </Div>
                </Flex>
            </Container>
        </Box>
    );
};

export default InnovativeIdeas;

const Div = styled.div`
position: relative;
  bottom: 50px;
  max-height:450px;
  max-width:500px;
`


const Flex = styled.div`
display:flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 820px) {
   flex-direction: column-reverse;
  }
`

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 45%;

  @media (max-width: 820px) {
    width: 100%;
  }

  h1 {
    box-sizing: border-box;
    padding-left: 2rem;
    font-size: 2.2rem;
    font-weight: 700;
    color: #0c0c0c;
    border-left: 2px solid #e9000e;
    //max-width: 80%;

    @media (max-width: 820px) {
    font-size: 20px;
      padding-left: 1rem;
    }

    ${breakpoints.sm} {
      margin-top: 1.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    padding-bottom: 0;
    margin-bottom: 0;
    color: #636363;

    @media (max-width: 820px) {
      font-size: 0.9rem;
    }
  }
`;

const CtaButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;

  ${breakpoints.sm} {
    flex-direction: column;
    gap: 1rem;
    align-items: start;
  }

  .request-services {
    background: linear-gradient(252.93deg, #ac2121 -22.82%, #e9000e 130.87%);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3),
    0 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    cursor: pointer;
    text-transform: uppercase;
    min-width: 190px;

    ${breakpoints.lg} {
      font-size: 0.7rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  .get-quote {
    background-color: #fff;
    color: #b10000;
    border: 1px solid #b10000;
    padding: 0.5rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
    min-width: 120px;

    ${breakpoints.lg} {
      font-size: 0.7rem;
    }

    ${breakpoints.sm} {
      min-width: 190px;
      text-align: center;
      display: flex;
      justify-content: center;
    }

    &:hover {
      background-color: #b10000;
      color: #fff;
    }
  }
`;