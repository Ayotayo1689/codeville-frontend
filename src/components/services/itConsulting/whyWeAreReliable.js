import React from 'react'
import {Box} from "@chakra-ui/react";
import LogoMarquee from "../../logoMarquee";
import styled from "styled-components";
import {breakpoints} from "../../../../styles/theme";

const WhyWeAreReliable = () => {
    return (
        <Box>
            <Customers>
                <div className="customers">
                    <h3>What Makes <span
                        style={{color: '#E9000E'}}>Tanta Innovative</span> a Reliable
                        Partner</h3>
                    <div></div>
                    <p>
                        Our belief is that with our technical expertise and IT Services for
                        Real-Estate Industry, combined with your innovative vision, we can
                        create tech systems that will help you scale up your business by
                        making life easier for your audience.
                    </p>
                </div>
                <LogoMarquee/>
            </Customers>
        </Box>
    )
}
export default WhyWeAreReliable

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
      padding-bottom: 1rem;

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
