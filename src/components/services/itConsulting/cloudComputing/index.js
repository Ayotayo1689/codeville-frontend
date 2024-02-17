import React from "react";
import {Box, Container, Flex, Text, Link} from "@chakra-ui/react";
// import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import {TbArrowUpRight} from "react-icons/tb";
import {business, experts, includedData, sideBarCloud} from "../data";
import {BsArrowRightShort} from "react-icons/bs";
import {breakpoints} from "../../../../../styles/theme";
import TantaTestimonial from "../../../tantaTestimonials";
import HeroImg from "../../../../../public/assets/consulting/cloud_computing.svg";
import IncludedCard from "./includedCard";
import TantaSummary from "../summary";
import HeroHeader from "../heroHeader";
import WhyWeAreReliable from "../whyWeAreReliable";
import Sidebar from "../Sidebar";
import AllItConsultingServices from "../allITConsulting";
import appRoutes from "../../../../utils/appRoutes";
import PageHeader from "../../../itOutSourcing/PageHeader";

function CloudComputing({testimonials}) {

    return (
        <>
            <Consulting>
                <PageHeader heading={"SERVICES"}
                           title={<>Cloud computing <Text as='span' color='#eb1a26'>Consulting</Text></>}/>
                <Container maxW={"7xl"} px={{ lg: "5rem", sm:"0", base: "0"}}>
                    <Wrapper>
                        <HeroHeader title={"Information Technology Consulting"}
                                    text={"Reach out to our dedicated team of IT consultants to discuss your project needs, explore innovative solutions, and discover how we can transform your ideas into reality, explore innovative solutions, and discover how we can transform your ideas into reality."}
                                    imageUrl={HeroImg}/>

                        <Box mb={"2rem"} mt={"4rem"}>
                            <Flex gap={{base: '0', md: '0', lg: '2rem'}} justify={"center"}>
                                {/* Fixed Sidebar Here */}
                                <Sidebar title={"IT CONSULTING"} items={sideBarCloud} height={"380px"}/>

                                <Box pl={{base: '0', md: '0', lg: '1rem'}} width={{base: '100%', lg: "65%"}}>

                                    {/* INCLUDED IN THIS PACKAGE*/}
                                    <Box id="included" scrollMarginTop={"150px"}>

                                        <Box>
                                            <Text fontSize={{base: '1rem', md: '1.12rem', lg: '1.25rem'}}>Our objective
                                                in implementing new technologies is not solely to make
                                                your company appear "modern," but rather to deliver tangible business
                                                results through the utilization of IT. We optimize IT services to make
                                                them more reliable and cost-effective and help introduce new IT services
                                                fast. Read more on <Link
                                                    href={appRoutes.services["it-consulting/it-strategy-consulting/"]}>https://www.tantainnovatives.com/services/it_consulting/it_strategy</Link>
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Text py={4} fontSize={{base: '1.4rem', md: '1.6rem', lg: '1.87rem'}}>
                                                Bringing maturity, ardor, and curiosity to the table
                                            </Text>
                                            <Box className={'red_line'}></Box>
                                            <IncludedCardBox>
                                                {
                                                    includedData.map((item, index) => {
                                                            return (
                                                                <IncludedCard key={index} image={item?.image}
                                                                              body={item?.body}
                                                                              title={item?.title}
                                                                />
                                                            )
                                                        }
                                                    )}
                                            </IncludedCardBox>
                                        </Box>
                                    </Box>

                                    {/* EXPERTISE  SECTION */}
                                    <Box id="expertise" scrollMarginTop={"150px"}>
                                        <Expertise>
                                            <div className="expertise">
                                                <h2>INDUSTRY EXPERTISE</h2>
                                                <h3>
                                                    Empowering <span>Industry Leaders</span> through
                                                    Digital Transformation
                                                </h3>
                                                <div></div>
                                                <p>
                                                    Tanta Innovatives is a leading provider of IT
                                                    consulting and software development services that has
                                                    helped businesses across multiple industries succeed.
                                                    Our team of experienced IT professionals is
                                                    well-equipped to help clients navigate the
                                                    complexities of the digital landscape, develop
                                                    innovative solutions, and stay ahead of the
                                                    competition.
                                                </p>
                                            </div>
                                            <ExpertCardContainer>
                                                {experts.map((item) => {
                                                    return (
                                                        <ExpertCard key={item.index}>
                                                            <CardData>
                                                                <div className="img-box">
                                                                    <Image
                                                                        src={item.img}
                                                                        alt={item.heading}
                                                                        className="service-img"
                                                                    />
                                                                    <Link href={item.link}>
                                                                        <button>
                                                                            <BsArrowRightShort className="icon"/>
                                                                        </button>
                                                                    </Link>
                                                                </div>
                                                                <h3>{item.heading}</h3>
                                                            </CardData>
                                                        </ExpertCard>
                                                    );
                                                })}
                                            </ExpertCardContainer>
                                        </Expertise>
                                    </Box>

                                    {/* CUSTOMERS SECTION */}
                                    <Box id="customers" scrollMarginTop={"150px"}>
                                        <WhyWeAreReliable/>
                                    </Box>

                                    {/* REVIEWS  SECTION */}
                                    <Box id="reviews" scrollMarginTop={"150px"}>
                                        <TantaTestimonial testimonials={testimonials}/>
                                    </Box>

                                    {/* BUSINESS SECTION */}
                                    <Box id="business" scrollMarginTop={"150px"}>
                                        <Business>
                                            <div className="business">
                                                <h2>Business Areas we Transform</h2>
                                                <h3>
                                                    Transforming your Business Processes for the{" "}
                                                    <span>Digital Age</span>
                                                </h3>
                                                <div></div>
                                                <p>
                                                    Tanta Innovatives is a leading provider of IT
                                                    consulting and software development services that has
                                                    helped businesses across multiple industries succeed.
                                                    Our team of experienced IT professionals is
                                                    well-equipped to help clients navigate the
                                                    complexities of the digital landscape, develop
                                                    innovative solutions, and stay ahead of the
                                                    competition.
                                                </p>
                                            </div>
                                            {business.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <div className="business-details">
                                                            <Image
                                                                src={item.img}
                                                                alt=""
                                                                className="business-img"
                                                            />
                                                            <div>
                                                                <h5>{item.title}</h5>
                                                                <p>{item.details}</p>
                                                            </div>
                                                        </div>

                                                        <Link href={item.link}>
                                                            <button>
                                                                Learn more <TbArrowUpRight className="icon"/>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                );
                                            })}
                                        </Business>
                                    </Box>

                                    {/* SUMMARY SECTION */}
                                    <Box id="summary" scrollMarginTop={"150px"}>
                                        <TantaSummary/>
                                    </Box>

                                    {/* ALL IT-SERVICES  SECTION */}
                                    <Box id="allServices" scrollMarginTop={"150px"}>
                                        <AllItConsultingServices display={'none'}/>
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </Wrapper>
                </Container>
            </Consulting>
        </>
    );
}


export default CloudComputing;

export const Wrapper = styled.div`
  margin: 0 2rem;

  .red_line {
    width: 8rem;
    height: 0.2rem;
    background-color: #FF0000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  @media (max-width: 992px) {
    .side-bar {
      display: none;
    }
  }

  ${breakpoints.md} {
    .about-box {
      padding-left: 0;
    }
  }
`;


const IncludedCardBox = styled.div`
  
  display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  //flex-direction: row;
  gap: 1rem;
  margin: 2rem 0;

  //@media (max-width: 1300px) {
  //  flex-direction: column;
  //  gap: 0.5rem;
  //}

`;
export const Consulting = styled.div`
  margin-top: 5rem;
`;

const Expertise = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
  margin-bottom: 4rem;

  .expertise {
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
      
    }

    h3 {
      font-size: 25px;
      font-weight: 600;
      color: #414141;

      ${breakpoints.lg} {
        font-size: 1.2rem;
      }

      ${breakpoints.sm} {
        font-size: 1.3rem;
      }

      span {
        color: #e9000e;
      }
    }

    div {
      width: 55px;
      height: 3px;
      background-color: #e9000e;
      margin-bottom: 0.5rem;
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

const ExpertCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  width: 100%;

  ${breakpoints.lg} {
    gap: 1rem;
  }

  ${breakpoints.sm} {
    justify-content: space-between;
    margin-bottom: 0;
  }
`;
const ExpertCard = styled.div`
  background: #ffffff;
  border-bottom: 3px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  ${breakpoints.lg} {
    width: 45%;
  }

  @media (min-width: 700px) and (max-width: 800px) {
    width: 70%;
    margin: 0 auto;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    width: 30%;
  }

  ${breakpoints.sm} {
    width: 35%;
  }
`;
const CardData = styled.div`
  padding: 0.5rem 0.5rem 1rem 0.5rem;

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
    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;

    ${breakpoints.lg} {
      font-size: 0.7rem;
    }

    ${breakpoints.md} {
      font-size: 0.9rem;
    }

    ${breakpoints.sm} {
      font-size: 0.6rem;
    }
  }
`;


const Business = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;

  .business {
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
      font-size: 1.6rem;
      font-weight: 700;
      color: #414141;
      margin-bottom: 1rem;

      span {
        color: #e9000e;
      }

      ${breakpoints.lg} {
        font-size: 1.5rem;
      }

      @media (max-width: 850px) {
        font-size: 1.2rem;
      }

      ${breakpoints.sm} {
        margin-bottom: 0;
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

  .business-details {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.5rem;

    ${breakpoints.lg} {
      gap: 0.5rem;
    }

    .business-img {
      width: 50px;
      height: 50px;
      margin-top: 1.2rem;

      ${breakpoints.lg} {
        width: 40px;
        height: 40px;
      }

      @media (max-width: 768px) {
        display: none;
      }

      ${breakpoints.md} {
        display: flex;
      }
    }

    h5 {
      font-size: 1.3rem;
      font-weight: 500;
      color: #0c0c0c;
      padding: 1rem 0 0.2rem 0;

      ${breakpoints.lg} {
        font-size: 1rem;
      }
    }

    p {
      font-size: 18px;
      font-weight: 400;
      color: #636363;

      ${breakpoints.lg} {
        font-size: 1rem;
      }
    }
  }

  a {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    button {
      border: none;
      display: flex;
      color: #e9000e;
      font-size: 1rem;
      font-weight: 500;
      transition: all 0.2s ease-in-out;
      text-transform: uppercase;

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
        color: #e9000e;
        padding: 0.1rem;
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
  }
`;
