import React from "react";
import Image from "next/image";
import {RiCheckboxBlankFill} from "react-icons/ri";
import { Flex, Text} from "@chakra-ui/react";
import {breakpoints} from "../../../../../styles/theme";
import styled from "styled-components";

function SolutionCards({title,imageUrl,listItems, textDecoration}) {

    return (
        <>
                <ServicesCard className="services-card">
                    <CardData>
                        <Image src={imageUrl} alt={title} width={200} height={100} className="service-img" />
                        <h3 style={{ textDecoration: textDecoration ? 'underline' : 'none' }}>{title}</h3>
                        {listItems.map((item, index) => (
                            <Flex
                                key={index}
                                fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }}
                            >
                                <RiCheckboxBlankFill
                                    style={{
                                        color: "#E9000E",
                                        minWidth: "10px",
                                        maxWidth: "10px",
                                        marginTop: "3px",
                                    }}
                                />
                                <Text pl={2} color={"#444"}>
                                    {item}
                                </Text>
                            </Flex>
                        ))}
                    </CardData>
                </ServicesCard>

        </>
    );
}

export default SolutionCards;


const ServicesCard = styled.div`
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
  0 3.10345px 9.31034px 3.10345px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  margin-bottom: 1rem;

  &:hover {
    transform: scale(1.01);
  }
  .service-img {
    width: 50px;
    height: 50px;
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