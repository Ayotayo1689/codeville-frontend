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
const ReliableCustomers = () => {
    const LogoMarquee = () => {
        return (
            <Marquee gradient={false}>
                {images.map((image, index) => (
                    <Box key={index} mr="10px">
                        <Image src={image} alt="Logo" width={100} height={50}/>
                    </Box>
                ))}
            </Marquee>
        );
    };
    return (
        <>
            {/* CUSTOMERS SECTION */}
            <Box id="erp-expertise" scrollMarginTop={"150px"}>
                <Customers>
                    <Box mt="126px">
                        <Flex flexDir="column" color="#414141" fontWeight="700" fontSize={{lg:"30px", base:"20px"}}>
                            <Text>What Makes <Text as="span" color="#E9000E">Tanta Innovative</Text> a Reliable Partner</Text>

                        </Flex>
                        <Box w='55px' h="3px" bg="#E9000E" my="30px"></Box>
                        <Text align={{base: 'center', md: 'left'}} lineHeight="170%" color="#1E1E1E">With our deep technical expertise and specialized IT
                            services for the real estate industry, paired with your innovative vision, we are confident
                            in our ability to create cutting-edge tech systems. These systems are specifically designed
                            to support the scaling up of your business by simplifying processes and enhancing the
                            overall experience for your audience. Together, we can unlock new possibilities and drive
                            success in the real estate industry.</Text>
                    </Box>
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
  gap: 1rem;
  padding-top: 1rem;

  .customers {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 0;

    h2 {
      font-size: 18px;
      font-weight: 400;
      color: #636363;
      text-transform: uppercase;
      margin-bottom: -1rem;

      ${breakpoints.lg} {
        font-size: 1rem;
      }

      @media (max-width: 850px) {
        font-size: 0.9rem;
      }
    }

    h3 {
      font-size: 30px;
      font-weight: 700;
      color: #414141;
      width: 90%;

      ${breakpoints.lg} {
        font-size: 1.5rem;
      }

      @media (max-width: 850px) {
        font-size: 1.2rem;
      }
    }

    div {
      width: 55px;
      height: 3px;
      background-color: #e9000e;
      margin-bottom: 0.2rem;
    }

    p {
      font-size: 20px;
      font-weight: 400;
      color: #2a2a2a;

      ${breakpoints.lg} {
        margin-top: 0;
        font-size: 18px;
      }

      @media (max-width: 850px) {
        font-size: 1rem;
      }
    }
  }
`;

export default ReliableCustomers
