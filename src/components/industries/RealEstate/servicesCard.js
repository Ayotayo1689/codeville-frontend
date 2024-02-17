import React, {useState} from "react";
import {MdKeyboardArrowRight} from "react-icons/md";
import Link from 'next/link'
import Image from "next/image";
import styled from "styled-components";
import {breakpoints} from "../../../../styles/theme";

function ServicesCards({ title, img, details }) {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const renderText = (text, maxLength) => {
        if (!text) {
            return ''; // Return an empty string if text is undefined
        }

        if (text.length <= maxLength || showMore) {
            return text;
        }

        return text.slice(0, maxLength) + '...';
    };
    return (
        <>
            <ServicesCard
                className="services-card"
            >
                <CardData>
                    <Image
                        src={img}
                        alt={title}
                        className="service-img"
                    />
                    <h3>{title}</h3>
                    <p>{renderText(details, 50)}</p>
                    {details && details.length > 50 && (
                        <button style={{ cursor: 'pointer' }} onClick={toggleShowMore}>
                            {showMore ? 'Show less' : 'Show more'}
                            <MdKeyboardArrowRight className="icon"/>
                        </button>
                    )}

                </CardData>
            </ServicesCard>
        </>
    );
}

export default ServicesCards;

const ServicesCard = styled.div`
  width: 45%;
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
  0 3.10345px 9.31034px 3.10345px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  margin-bottom: 1rem;
  @media (min-width: 700px) and (max-width: 929px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
  }

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
    margin: 0 auto 1rem auto;

    ${breakpoints.lg} {
      width: 40px;
      height: 40px;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #0c0c0c;
    margin-bottom: 1rem;
    text-align: center;
    padding-top: 10px;

    @media (max-width: 1200px) {
      font-size: 1rem;
    }

    ${breakpoints.lg} {
      font-size: 1rem;
    }
  }

  p {
    font-size: 18px;
    font-weight: 400;
    color: #636363;
    margin-bottom: 2rem;
    text-align: center;

    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }

  button {
    background: #ffffff;
    box-shadow: 0 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
    0 1.55172px 4.65517px 1.55172px rgba(0, 0, 0, 0.15);
    border-radius: 12.4138px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: #656565;
    padding: 0.3rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    margin: 0 auto;

    @media (max-width: 850px) {
      font-size: 0.8rem;
    }

    @media (max-width: 800px) {
      font-size: 0.4rem;
    }

    ${breakpoints.lg} {
      font-size: 0.7rem;
    }

    .icon {
      color: #fff;
      background-color: #e9000e;
      padding: 0.1rem;
      border-radius: 50%;
      font-size: 25px;

      @media (max-width: 850px) {
        font-size: 1.2rem;
      }

      ${breakpoints.lg} {
        font-size: 1rem;
      }
    }

    &:hover {
      opacity: 0.5;
    }
  }
`;

const CardData = styled.div`
  padding: 1rem 0.5rem 1rem 0.5rem;

  .img-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.8rem;

    .icon {
      color: #151616;
      background-color: #d6dde1;
      padding: 0.1rem;
      margin-top: -3rem;
      border-radius: 50%;
      font-size: 25px;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #e9000e;
        color: #fff;
      }
    }
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;

    ${breakpoints.lg} {
      font-size: 1rem;
    }

    ${breakpoints.sm} {
      font-size: 0.8rem;
    }
  }
`;