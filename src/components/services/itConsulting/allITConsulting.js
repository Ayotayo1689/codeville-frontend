import React from 'react'
import {allServices} from "./data";
import styled from "styled-components";
import {breakpoints} from "../../../../styles/theme";
import {Box} from "@chakra-ui/react";

const AllItConsultingServices = ({display}) => {
    return (
        <div>
            <AllServices>
                <div className="all-services">
                    <h3>All IT Consulting Services</h3>
                    <Box display={display} className={'red_underline'}></Box>
                </div>
                <AllServicesContainer>
                    {allServices.map((item) => {
                        return (
                            <AllServicesCard key={item.title}>
                                <div>
                                    <h3 className="title">{item.title}</h3>
                                    <Box></Box>
                                </div>
                                <ul>
                                    {item.items.map((nestedItem) => (
                                        <li key={nestedItem.id}>{nestedItem.name}</li>
                                    ))}
                                </ul>
                            </AllServicesCard>
                        );
                    })}
                </AllServicesContainer>
            </AllServices>
        </div>
    )
}
export default AllItConsultingServices

const AllServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
  @media (max-width: 849px) {
    width: 100%;
    align-items: center;
  }

  .red_underline {
    width: 55px;
    height: 3px;
    background-color: #e9000e;
    margin-bottom: 0.2rem;
    @media (max-width: 849px) {
     display: none;
    }
  }
  ${breakpoints.lg} {
    margin-top: 4rem;
   
  }

  .all-services {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 0;
    margin-bottom: 1rem;

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

      span {
        color: #e9000e;
      }

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
  }
`;

const AllServicesContainer = styled.div`
  display: flex;
  //flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;

  ${breakpoints.lg} {
    gap: 1rem;
  }

  ${breakpoints.md} {
    gap: 0.5rem;
  }

  ${breakpoints.sm} {
    justify-content: space-between;
    align-items: center;
    border-top:2px solid darkgrey;
    margin-bottom: 0;
    width: 100%;
  }
`;

const AllServicesCard = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;

  @media (min-width: 850px) and (max-width: 1200px) {
    width: 45%;

  }
  @media (max-width: 849px) {
    width: 100%;
    align-items: center;
  }
  @media (max-width: 700px) {
    width: 45%;
  }

  ${breakpoints.sm} {
    width: 100%;
    margin: 0;
    padding: 0 0 1rem 0;
  }

  div {
    @media (max-width: 849px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .title {
      font-size: 1.35rem;
      font-weight: 500;
      padding-top: 10px;
      border-radius: 8px;
      padding-bottom: 0.5rem;
      @media (max-width: 849px) {
        font-size: 18px;
      }
      @media (max-width: 1200px) {
        font-size: 1rem;
      }

      ${breakpoints.lg} {
        font-size: 1rem;
      }
    }

    div {
      width: 12.5rem;
      height: 0.25rem;
      background-color: #f2666e;
      margin-bottom: 0.9rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 14px;
      font-weight: 400;
      color: #303030;
      margin-bottom: 0.5rem;
      @media (max-width: 849px) {
        text-align: center;
      }
    }
  }
`;
