import {Box, Flex, Text} from "@chakra-ui/react";
import {Associates} from "../../../../../styles/home.style";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import {brandmovers, burtech, dcfoods, divichotel, finlab, nigerPolice, weather,} from "/assets/clients";
import styled from "styled-components";
import {breakpoints} from "../../../../../styles/theme";


const images = [
    brandmovers,
    burtech,
    dcfoods,
    divichotel,
    finlab,
    nigerPolice,
    weather,
];
const CustomersLogosSlider = () => {
    const LogoMarquee = () => {
        return (
            <Marquee gradient={false}>
                {images.map((image, index) => (
                    <Box key={index} mr="10px">
                        <Image src={image} alt="Logo" width="100" height="50"/>
                    </Box>
                ))}
            </Marquee>
        );
    };
    return (
        <>
            {/* CUSTOMERS SECTION */}
            <Box>
                <Customers>
                    <Associates>
                        <LogoMarquee/>
                    </Associates>
                </Customers>
            </Box>
        </>
    )
}

const Customers = styled.div`
  display: flex;
  flex-direction: column;
  //gap: 1rem;
  padding-top: 0;

  .customers {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 0;

    
    div {
      width: 55px;
      height: 3px;
      background-color: #e9000e;
      margin-bottom: 0.2rem;
    }
   
  }
`;

export default CustomersLogosSlider