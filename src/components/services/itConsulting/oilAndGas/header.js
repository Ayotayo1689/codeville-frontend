import React from "react";
import {Box} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import {breakpoints} from "../../../../../styles/theme";
import appRoutes from "../../../../utils/appRoutes";


function  Header ({title, description, image,  quoteBtn,  }) {
    return(
        <>
            <Box>
                <HeroContent>
                    <HeroText>
                        <h1>{title}</h1>
                        <p>
                            {description}
                        </p>
                        <CtaButtons>


                            <Link href={{
                                pathname: appRoutes.contactUs,
                                query: {service: "/services/it-consulting/oil-and-gas"}
                            }}

                             service="/services/it-consulting/oil-and-gas"
                               >  <button className="get-quote">{ quoteBtn}</button></Link>
                        </CtaButtons>
                    </HeroText>
                    <div className="hero-img" style={{ margin: "auto", }}>
                    <Image
                        src={image}
                        alt="hero image"
                        width={500}
                        height={500}

                    />
                    </div>
                </HeroContent>

            </Box>
        </>
    )
}
export default Header

const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
  }

  ${breakpoints.lg} {
    .hero-img {
      width: 45%;
    }
  }
  

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    gap: 0;

    .hero-img {
      min-width: 90%;
      height: 100%;
      position: relative;
      left: 1rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      width: 50rem;
    }
  }
  
 

    
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;


  @media (max-width: 600px) {
    width: 95%;
    padding-left: 2.5%;
    padding-right: 2.5%;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  ${breakpoints.md} {
  }

  h1 {
    position: relative;
    box-sizing: border-box;
    font-size: 32px;
    font-weight: 700;
    margin-top: 0;
    padding-top: 0;
    color: rgba(21, 22, 22, 1);
    width: 21.625rem;
    
    @media (max-width: 600px) {
      font-size: 20px;
      margin-left: 5rem;
      
    }
   
    

    &::before {
      position: absolute;
      content: "";
      top: -3px;
      left: -30px;
      height: 100%;
      width: 3px;
      background: linear-gradient(to bottom, red 30%, white, white);
      @media (min-width: 700px) {
        display: none;
      }
        
  
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
        white
        );
      @media (min-width: 700px) {
        display: none;
      }
    }
    
  }

  > p {
    font-size: 22px;
    font-weight: 400;
    padding-bottom: 0;
    margin-bottom: 0;
    color: #333;
    width: 37rem;

    @media (max-width: 600px) {
      font-size: 11px;
      text-align: center;
      width: 22.25rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 20px;
    
      width: 28rem;
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
    border-radius: 8px;
    background: #fff;
    border:  1px solid rgba(233, 0, 14, 1);
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 17.75rem;
    color:  var(--primary-900, #E9000E);
    text-align: center;
    font-size: 24px;
    
    ${breakpoints.lg} {
      font-size: 0.7rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  .get-quote {
    background:   var(--tanta-gradient, linear-gradient(221deg, #AC2121 0%, #E9000E 100%));;
    color: #FFF;
    border:none;
    padding: 0 36px;
    width: 11.063rem;
    height: 47px;
    font-size: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    min-width: 178px;

    ${breakpoints.lg} {
      font-size: 0.7rem;
      padding: 0.5rem 1.5rem;
    }

    ${breakpoints.sm} {
      width: 143px;
      height: 24.5px;
      text-align: center;
      display: flex;
      justify-content: center;
      border-radius: 4px;
      margin-top: 2rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      font-size: 20px;
     
    
    }

    &:hover {
      background-color: #b10000;
      color: #fff;
    }
  }
`;