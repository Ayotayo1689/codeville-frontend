import Image from "next/image";
import styled from "styled-components";
import {Box, Heading} from "@chakra-ui/react";
import React from "react";

function IncludedCard({image, body, title}) {

    return (
        <>
            <ServicesCard
                className="services-card">
                <CardData>
                    <Image
                        src={image}
                        alt={body}
                        className="service-img"
                    />
                    <Box className={'redlinee'}></Box>
                    <Heading textAlign={'center'} pt={3} fontSize={'1.125rem'} fontWeight={500} color={'#444'}
                             textTransform={'capitalize'}>{title}</Heading>
                    <p>{body}</p>

                </CardData>
            </ServicesCard>
        </>
    );
}

export default IncludedCard;


const ServicesCard = styled.div`
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
  0 3.10345px 9.31034px 3.10345px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;

  .redlinee {
    width: 5rem;
    height: 2px;
    background-color: #B60E09;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  
  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
  }

  &:hover {
    transform: scale(1.01);
  }

  .service-img {
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0.5rem auto;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: #1E1E1E;
    padding-top: 1rem;
    text-align: center;

    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }
`;

const CardData = styled.div`
  padding: 0.5rem 0.5rem 1rem 0.5rem;
`;