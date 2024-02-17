import React from "react";
import Image from "next/image";
import {RiCheckboxBlankFill} from "react-icons/ri";
import {Flex, Text} from "@chakra-ui/react";
import {breakpoints} from "../../../../../styles/theme";
import styled from "styled-components";
import Link from "next/link";
import {BsArrowRight} from "react-icons/bs";

function ChooseServicesCard({title, image, subtitle, listItems, link, linkTitle}) {
    return (
        <ServicesCard className="services-card">
            <Image src={image} alt={title} className="service-img"/>
            <Text as="h3" fontSize="xl" mt="4" mb="2">
                {title}
            </Text>
            {subtitle && (
                <Text fontSize="md" color="gray.600" mb="4">
                    {subtitle}
                </Text>
            )}
            {listItems.map((item, index) => (
                <Flex key={index} fontSize="md" color="gray.600" mb="2">
                    <RiCheckboxBlankFill
                        style={{
                            color: "#E9000E",
                            minWidth: "10px",
                            maxWidth: "10px",
                            marginTop: "4px",
                        }}
                    />
                    <Text pl={2}>{item}</Text>
                </Flex>
            ))}
            <Flex justifyContent={'center'}>
                <Link href={link}>
                    <Flex alignItems={'center'} gap={2} border={'1px solid #E9000E'} py={1} px={8} my={4}
                          fontWeight={600} color={'#E9000E'}>
                        {linkTitle}
                        <BsArrowRight style={{marginTop: '2px'}}/>
                    </Flex>
                </Link>
            </Flex>
        </ServicesCard>
    );
}

export default ChooseServicesCard;


export const ServicesCard = styled.div`
  padding: 0.5rem;
  box-shadow: 0 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
  0 3.10345px 9.31034px 3.10345px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  margin-bottom: 1rem;
  border-top: 9px solid #E9000E;

  &:hover {
    transform: scale(1.01);
  }

  .service-img {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0.3rem auto;

    ${breakpoints.lg} {
      width: 40px;
      height: 40px;
    }
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: #444;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

const CardData = styled.div`
  padding: 0.5rem 0.5rem 1rem 0.5rem;
`;