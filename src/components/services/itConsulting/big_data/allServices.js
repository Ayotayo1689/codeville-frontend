import React from 'react';
import {allServices} from "../data";
import styled from "styled-components";
import {breakpoints} from "../../../../../styles/theme";

const IncludeCard = () => {
    return (
      <>
          <AllServices>
              <div className="all-services">
                  <h3>All IT Consulting Services</h3>
                  <div></div>
              </div>
              <AllServicesContainer>
                  {allServices.map((item) => {
                      return (
                          <AllServicesCard key={item.title}>
                              <div>
                                  <h3 className="title">{item.title}</h3>
                                  <div></div>
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

      </>
    );
};

export default IncludeCard;


const AllServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;

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
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  ${breakpoints.lg} {
    gap: 1rem;
  }

  ${breakpoints.md} {
    gap: 0.5rem;
  }

  ${breakpoints.sm} {
    justify-content: space-between;
    margin-bottom: 0;
    width: 100%;
  }
`;

const AllServicesCard = styled.div`
  width: 30%;

  @media (min-width: 850px) and (max-width: 1200px) {
    width: 45%;
  }
  @media (max-width: 849px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    width: 45%;
  }

  ${breakpoints.sm} {
    width: 100%;
    margin: 0;
    padding: 0;
    padding-bottom: 1rem;
  }
  div {
    .title {
      font-size: 1.35rem;
      font-weight: 500;
      padding-top: 10px;
      border-radius: 8px;
      padding-bottom: 0.5rem;

      @media (max-width: 1200px) {
        font-size: 1rem;
      }

      ${breakpoints.lg} {
        font-size: 1rem;
      }
    }

    div {
      max-width: 200px;
      //width: 90%;
      
      height: 2px;
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
    }
  }
`;

