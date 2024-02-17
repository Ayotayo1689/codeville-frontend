import React from 'react'
import Link from "next/link";
import appRoutes from "@/utils/appRoutes";
import Image from "next/image";
import styled from "styled-components";
import {breakpoints} from "../../../../styles/theme";

function Hero() {
    return (
        <div>
            <HeroContent>
                <HeroText>
                    <h1>Unleash remote work, ignite business continuity!</h1>
                    <p>
                        Boost productivity and foster success with Remote Work Consulting.
                        Our expert IT Outsourcing services empower your workforce to thrive
                        in remote environments. Experience seamless transitions and optimize
                        remote work capabilities.
                    </p>
                    <CtaButtons>
                        <Link
                            href={{
                                pathname: appRoutes.contactUs,
                                query: {service: "services/it-outsourcing"},
                            }}
                            service="services/it-outsourcing"
                            className="request-services"
                        >
                            {" "}
                            <button className="request-services">
                                Request IT CONSULTING services
                            </button>
                        </Link>
                        <Link
                            href={{
                                pathname: appRoutes.services["cost-calculator"],
                                query: {service: "itOutSourcing-1"},
                            }}
                        >
                            {" "}
                            <button className="get-quote">get a quote</button>
                        </Link>
                    </CtaButtons>
                </HeroText>
                <Image
                    src={"/assets/itOutSourcing/HeroImg.svg"}
                    alt="hero image"
                    width={500}
                    height={500}
                    className="hero-img"
                />
            </HeroContent>
        </div>
    )
}

export default Hero

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

    .hero-img {
      width: 50%;
      height: 50%;
      margin: 0 auto;
      padding: 2rem 0;
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
    font-size: 2.4rem;
    font-weight: 700;
    margin-top: 0;
    padding-top: 0;
    color: #0c0c0c;

    ${breakpoints.lg} {
      font-size: 1.7rem;
    }

      /* ${breakpoints.md} {
      font-size: 0.7rem;
    } */

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
    font-size: 1.4rem;
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
  }

  .request-services {
    background: linear-gradient(252.93deg, #ac2121 -22.82%, #e9000e 130.87%);
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
    min-width: 100px;

    ${breakpoints.lg} {
      font-size: 0.7rem;
      padding: 0.5rem 1.5rem;
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