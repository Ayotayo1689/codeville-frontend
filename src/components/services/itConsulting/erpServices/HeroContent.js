import Link from "next/link";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import {breakpoints} from "../../../../../styles/theme";
import appRoutes from "../../../../utils/appRoutes";
import {Button, Flex} from "@chakra-ui/react";

const HeroContentComp = ({
                             title,
                             description,
                             image,
                             redBtnText,
                             normalBtnText,
                             redBtnpathname,
                             redBtnquery,
                             redBtnservice,
                             normalBtnpathname,
                             normalBtnservice
                         }) => {
    return (
        <HeroContent>
            <HeroText>
                <h1>{title}</h1>
                <p>{description}</p>
                <Flex mb='1.8rem' justify='center' gap={4} flexWrap='wrap'>
                    <Link
						href={{
							pathname: redBtnpathname,
							query: { service: redBtnquery },
						}}
						service={redBtnservice}
						className="request-services"
                    >
                        {" "}
                        <Button color='white' bg='linear-gradient(252.93deg, #ac2121 -22.82%, #e9000e 130.87%)'
                                _hover={{opacity: '0.6'}}>{redBtnText}</Button>
                    </Link>
                    {normalBtnText && (
                        <Link
							href={{
								pathname: normalBtnpathname,
								query: { service: normalBtnservice },
							}}
                        >
                            <Button bg='white' border='1px solid #b10000'
                                    _hover={{background: '#b10000', color: 'white'}}>{normalBtnText}</Button>
                        </Link>
                    )}</Flex>

            </HeroText>
            <Image
                src={image}
                alt="hero image"
                width={400}
                height={400}
                className="hero-img"
            />
        </HeroContent>
    );
};

export default HeroContentComp;

const Wrapper = styled.div`
  margin: 0 2rem;

  @media (max-width: 820px) {
    .side-bar {
      display: none;
    }
  }

  ${breakpoints.md} {
    .about-box {
      padding-left: 0;
    }
  }
`;

const HeroContent = styled.div`
  display: flex;
  gap: 1rem;


  width: 100%;
  border-bottom: 1px solid #e5e5e5;

  ${breakpoints.lg} {
    .hero-img {
      width: 45%;
    }
  }

  @media (max-width: 820px) {
    flex-direction: column-reverse;
    gap: 0;
    text-align: center;

    .hero-img {
      width: 50%;
      height: 50%;
      margin: 0 auto;
      padding-top: 2rem;
    }
  }

  ${breakpoints.md} {
    .hero-img {
      padding-top: 1rem;
    }
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  width: 50%;

  @media (max-width: 820px) {
    width: 100%;
  }

  ${breakpoints.md} {
  }

  h1 {
    position: relative;
    box-sizing: border-box;
    margin-left: 2rem;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 0;
    padding-top: 0;
    color: #0c0c0c;

    ${breakpoints.lg} {
      font-size: 1.7rem;
    }

    @media (max-width: 820px) {
      font-size: 1.5rem;
      font-weight: 500;
    }

    &::before {
      position: absolute;
      content: "";
      top: -3px;
      left: -30px;
      height: 100%;
      width: 3px;
      background: linear-gradient(to bottom, red 30%, white, white);
    }

    &::after {
      position: absolute;
      content: "";
      top: -3px;
      left: -30px;
      height: 3px;
      width: 100%;
      background: linear-gradient(to right,
      red,
      white,
      white,
      white,
      white,
      white);
    }
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    padding-bottom: 0;
    margin-bottom: 0;
    color: #636363;

    @media (max-width: 820px) {
      font-size: 0.9rem;
    }
  }
`;


