import React from "react";
import {Box, Heading} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import {CtaButtons, HeroContent} from "../heroHeader";
import appRoutes from "../../../../utils/appRoutes";
import styled from "styled-components";
import {breakpoints} from "../../../../../styles/theme";

const DigitalHero = ({title, text, imageUrl, serviceTitle}) => {
    return (
        <Box>
            <HeroContent>
                <HeroText>
                    <h1>{title}</h1>
                    <Heading as={'h2'} display={{lg:"block", base:"none"}} fontSize={{base: '1.1rem', md: '1.5rem'}} fontWeight={"700"}>
                        Harness the Power of business Transformation
                    </Heading>
                    <p>{text}</p>
                    <CtaButtons>
                        <Link
                            href={{
                                pathname: appRoutes.contactUs,
                                query: {
                                    service:
                                        "services/it-consulting/digital-transformation-consulting",
                                },
                            }}
                            service="services/it-consulting"
                            className=""
                        >
                            <button className="request-services">{serviceTitle}</button>
                        </Link>
                        <Link
                            href={{
                                pathname: "/services/cost-calculator",
                                query: {service: "it_outsourcing-1"},
                            }}
                        >
                            <button className="get-quote">Get a quote</button>
                        </Link>
                    </CtaButtons>
                </HeroText>
                <Box width={{base: "100%", md: "100%", lg: "50%"}}>
                    <Image
                        src={imageUrl}
                        alt="hero image"
                        width={"100%"}
                        height={"100%"}
                        className="hero-img"
                    />
                </Box>
            </HeroContent>
        </Box>
    );
};
export default DigitalHero;


export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  width: 50%;

  @media (max-width: 992px) {
    width: 100%;
    margin-top: 3rem;
  }

  @media (max-width: 460px) {
    width: 100%;
  }

  h1 {
    position: relative;
    box-sizing: border-box;
    font-size: 2.3rem;
    font-weight: 700;
    margin-top: 0;
    padding-top: 0;
    color: #0c0c0c;

    ${breakpoints.lg} {
      font-size: 2rem;
    }

    @media (max-width: 820px) {
      font-size: 1.8rem;
      font-weight: 500;
    }
    @media (max-width: 460px) {
      font-size: 1.5rem;
      text-align: center;
    }


  }

  p {
    font-size: 1.375rem;
    font-weight: 400;
    padding-bottom: 0;
    margin-bottom: 0;
    line-height: 170%;
    color: #636363;

    @media (max-width: 820px) {
      font-size: 1.2rem;
    }

    @media (max-width: 460px) {
      font-size: 1.1rem;
      text-align: center;
    }
  }
`;
