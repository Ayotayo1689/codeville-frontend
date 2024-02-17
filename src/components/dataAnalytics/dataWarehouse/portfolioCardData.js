import React from 'react';
import styled from 'styled-components';
import {AiOutlinePlus} from "react-icons/ai";
import {breakpoints} from "../../../../styles/theme";


const DataCard = ({portfolio1}) => {
    return (
        <Boxes>
            {
                portfolio1?.map((item, index) => (
                    <CardContainer key={index}>
                        <CardBackground style={{backgroundImage: `url(${item?.image})`}}/>
                        <CardIcon>
                            <AiOutlinePlus/>
                        </CardIcon>
                        <CardContent>
                            <Title>{item?.title}</Title>
                            <Description>{item?.short_description}</Description>
                        </CardContent>
                    </CardContainer>
                ))
            }
        </Boxes>
    );
};

export default DataCard;

const Boxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  ${breakpoints.lg} {
    gap: 1rem;
  }

  ${breakpoints.md} {
    gap: 0.5rem;
  }

`;

const CardContainer = styled.div`
  position: relative; 
  height: 356px;
  background-color: #f2f2f2;
  border-radius: 8px;
  overflow: hidden;
  width: 40%;
  margin-bottom: 1rem;
  transition: all 0.2s ease-in-out;

  @media (max-width: 1064px) {
    width: 100%;
    margin: 0.5rem auto;
  }
  @media (max-width: 991px) {
    width: 40%;
    margin: 0.5rem auto;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  &:hover {
    transform: scale(1.01);
  }
`;


const CardBackground = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
`;

const Title = styled.h2`
  font-size: 1rem;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 0.99rem;
  font-style: italic;
`;

const CardIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 20px;
    color: #000;

  }
`;
