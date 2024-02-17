import React, {useState} from "react";
import {Box, Container, Flex, Text,} from "@chakra-ui/react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import {MdKeyboardArrowRight} from "react-icons/md";
import {aboutUs, corporateServices, sideBarData, solutionsPreview, whatWeDo, whyChooseUs} from "./data";
import LogoMarquee from "../../logoMarquee";
import HeaderOne from "../../HeaderOne";
import LandingLayout from "../../../layouts/landing.layout";
import {breakpoints} from "../../../../styles/theme";
import {caseStudies} from "../../services/itConsulting/data";
import {BsArrowRightShort} from "react-icons/bs";
import CorporateImg from "../../../../public/assets/corporate/corporateImg.svg"
import {RiCheckboxBlankFill} from "react-icons/ri";
import FutureProofing from "./futureProofing";
import SummarySection from "../../summary";
import TantaTestimonial from "../../tantaTestimonials";
import appRoutes from "../../../utils/appRoutes";
import HandpickedProject from "@/components/dataAnalytics/handpickedProject";


function CorporatePage({testimonials}) {
    const [activeLink, setActiveLink] = useState({});

    return (
        <>
            <Corporate>
                <HeaderOne
                    heading={"INDUSTRIES"}
                    title={"it solutions for Corporate services"}
                />
                <Container maxW={"7xl"} px={{ lg: "5rem", md: "1rem", sm:"2rem", base: "1rem" }}>
                    <Wrapper>
                        <HeroContent>
                            <HeroText>
                                <h1>Prepare your Firm to seize the next Opportunity</h1>
                                <p>
                                    As experts in corporate industry, we understand the unique challenges and opportunities
                                    you face. Our goal is to bridge the gap between your current position and the future
                                    growth you aspire to achieve. With our tailored solutions and deep understanding of
                                    your business, we can assist you in reaching your goals and driving sustainable
                                    growth.
                                </p>
                                <CtaButtons>
                                    <Link href={{
                                        pathname:appRoutes.contactUs,
                                        query: {service: "industries/corporate"},
                                    }}
                                          service="industries/corporate"
                                          className="request-services">
                                        <button className="request-services">
                                            Request Our Services
                                        </button>
                                    </Link>
                                    <Link href="/services/cost-calculator">
                                        <button className="get-quote">get a quote</button>
                                    </Link>
                                </CtaButtons>
                            </HeroText>
                            <Image
                                src={CorporateImg}
                                alt="hero image"
                                width={420}
                                height={500}
                                className="hero-img"
                            />
                        </HeroContent>

                        <Box mb={"2rem"} mt={"4rem"}>
                            <Flex gap={"2rem"} justify={"center"}>
                                {/* ================Fixed Sidebar Here================ */}
                                <Flex
                                    flexDir="column"
                                    boxShadow="lg"
                                    height="350px"
                                    flex="1"
                                    minW="300px"
                                    position="sticky"
                                    top="10rem"
                                    pb="1rem"
                                    borderBottom="lg"
                                    width={{base: '100%', lg: "25%"}}
                                    display={{base: 'none', md: 'flex', lg: 'flex'}}
                                >
                                    <Text
                                        as="h2"
                                        fontSize="2xl"
                                        fontWeight="semibold"
                                        mb="1rem"
                                        color="white"
                                        textAlign="center"
                                        paddingBlock=".5rem"
                                        borderTopRadius="lg"
                                        background={"radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"}
                                    >
                                        CORPORATE
                                    </Text>
                                    <Box px="1rem">
                                        {sideBarData.map((item, index) => {
                                            return (
                                                <Flex
                                                    justifyContent={"space-between"}
                                                    alignItems={"center"}
                                                    key={index}
                                                    py={".3rem"}
                                                >
                                                    <Link
                                                        onClick={() => {
                                                            setActiveLink({[item.goto]: true});
                                                        }}
                                                        style={{
                                                            color: activeLink[item.goto] ? "red" : "",
                                                            fontSize: "20px",
                                                            fontWeight: "400",
                                                            cursor: "pointer",
                                                            width: "100%",
                                                        }}
                                                        href={item.goto}
                                                    >
                                                        {item.title}
                                                    </Link>

                                                    <MdKeyboardArrowRight
                                                        style={{marginLeft: "47px"}}
                                                        cursor={"pointer"}
                                                        size={"2rem"}
                                                    />
                                                </Flex>
                                            );
                                        })}
                                    </Box>
                                </Flex>

                                <Box width={{base: '100%', lg: "65%"}}>
                                    {/* ================TANTAIN HEALTHCARE SERVICES SECTION================ */}
                                    <Box id="about" scrollMarginTop={"150px"}>
                                        <About>
                                            <div className="about">
                                                <h3>
                                                    Why we Stand Out
                                                </h3>
                                                <div></div>
                                                <p>
                                                    For the past fifteen years, Tanta Innovative has been at the forefront
                                                    of providing cutting-edge IT solutions tailored specifically for
                                                    professional services. Our mission is to help businesses digitize
                                                    their service delivery and streamline internal operations, resulting
                                                    in enhanced productivity and a distinct competitive advantage within
                                                    their industries. Our comprehensive range of services empowers
                                                    professional services companies to optimize their internal
                                                    processes, including project management and employee collaboration,
                                                    while also expanding their customer base through digital service
                                                    delivery channels.
                                                </p>
                                            </div>
                                            {whyChooseUs.map((item, index) => {
                                                return (
                                                    <div key={index} className="why-us">
                                                        <div>
                                                            <RiCheckboxBlankFill size={18}/>
                                                        </div>
                                                        <p>{item.title}</p>
                                                    </div>
                                                );
                                            })}
                                            <AboutContainer>
                                                {aboutUs.map((item) => {
                                                    return (
                                                        <AboutCard key={item.index}>
                                                            <Image
                                                                src={item.img}
                                                                alt={item.title}
                                                                className="about-img"
                                                            />
                                                            <div className="item-body">
                                                                <h2>{item.header}</h2>
                                                                <h3>{item.title}</h3>
                                                            </div>
                                                        </AboutCard>
                                                    );
                                                })}
                                            </AboutContainer>
                                            <LogoMarquee colored={true}/>
                                        </About>
                                    </Box>

                                    {/* ================OUR EXPERTISE  SECTION================ */}
                                    <Box id="solutions" scrollMarginTop={"150px"}>
                                        <OurExpertise>
                                            <div className="expertise">
                                                <h3>
                                                    Solutions we Offer
                                                </h3>
                                                <div></div>
                                                <p>We offer a wide range of cyber security services to help you protect
                                                    your business from potential vulnerabilities and malicious attacks.
                                                </p>
                                            </div>
                                            {solutionsPreview.map((item, index) => {
                                                return (
                                                    <div key={index} className="why-us">
                                                        <div>
                                                            <RiCheckboxBlankFill size={18}/>
                                                        </div>
                                                        <p>{item.title}</p>
                                                    </div>
                                                );
                                            })}

                                            <CorporateContainer>
                                                {corporateServices.map((item) => (
                                                    <CorporateCard key={item.title}>
                                                        <CardData>
                                                            <div className="img-box">
                                                                <Image
                                                                    src={item.img}
                                                                    alt="corporate service Image"
                                                                    width={40}
                                                                    height={30}
                                                                />

                                                                <h3>{item.title}</h3>
                                                            </div>
                                                            <hr/>
                                                            <div className="desc">
                                                                <p>
                                                                    {item.desc}
                                                                </p>

                                                            </div>

                                                        </CardData>
                                                    </CorporateCard>
                                                ))}
                                            </CorporateContainer>
                                        </OurExpertise>
                                    </Box>

                                    {/* ================OUR SERVICES  SECTION================ */}

                                    <Box id="services" scrollMarginTop={"150px"}>
                                        <Services>
                                            <div className="services">
                                                <h3>
                                                    What we Do
                                                </h3>
                                                <div></div>
                                                <p>
                                                    At Tanta Innovative, our team of professional services consultants
                                                    can assist you in attracting, developing, and retaining top talent
                                                    to outperform your competitors and serve your clients effectively.
                                                    We partner with you to evaluate and address your talent-related
                                                    requirements, ensuring your organization has the necessary skills
                                                    and agility to adapt to market disruptions and meet clients'
                                                    evolving demands. </p>
                                            </div>
                                            <CardContainer>
                                                {whatWeDo.map((item) => {
                                                    return (
                                                        <ServicesCard
                                                            key={item.index}
                                                        >
                                                            <CorporateCardData>
                                                                <Image
                                                                    src={item.img}
                                                                    alt={item.title}
                                                                    className="service-img"
                                                                />
                                                                <h3>{item.title}</h3>
                                                                <p>{item.details}</p>

                                                            </CorporateCardData>
                                                        </ServicesCard>
                                                    );
                                                })}
                                            </CardContainer>
                                        </Services>
                                    </Box>

                                    {/* ================WHERE WE CAN HELP  SECTION================ */}
                                    <Box id="our_help" scrollMarginTop={"150px"}>
                                        <OurHelp>
                                            <div className="our_help">

                                                <h3>
                                                    Where we can help
                                                </h3>
                                                <div></div>
                                                <p>
                                                    We provide a range of services such as implementing advanced
                                                    technologies, optimising processes, and improving efficiency.
                                                    Their expertise in areas like data analytics, project management,
                                                    HR management, and business intelligence can enable corporate
                                                    organisations to make data-driven decisions, enhance productivity,
                                                    streamline operations, and stay competitive in the market.

                                                </p>
                                            </div>
                                            <FutureProofing/>
                                        </OurHelp>
                                    </Box>

                                    {/* ================SUCCESS STORY SECTION================ */}
                                    <Box id="success_story" scrollMarginTop={"150px"}>
                                        <SuccessStory>
                                            <div className="success">

                                                <h3>
                                                    Let us be part of your success story
                                                </h3>
                                                <div></div>
                                                <p>
                                                    Contact us and see how our industry expertise can help you achieve
                                                    your business goals.
                                                </p>
                                            </div>
                                            <Link href="/contact-us">
                                                <button>GET IN TOUCH</button>
                                            </Link>
                                        </SuccessStory>
                                    </Box>
                                    {/* ================REASONS TO WORK WITH US SECTION================ */}
                                    {/* ================TESTIMONIAL SECTION================ */}
                                    <Box id="customer_reviews" scrollMarginTop={"150px"} sx={{margin: "2rem 0"}}>
                                        <TantaTestimonial testimonials={testimonials}/>
                                    </Box>

                                    {/* ================CONSULTING IT SERVICES'  SECTION================ */}
                                    <Box id="projects" scrollMarginTop={"150px"}>
                                        <HandpickedProject title={"CONSULTING PROJECTS"} heading={"Our Selected IT Consulting Services Projects"}/>
                                    </Box>

                                    {/* SUMMARY SECTION */}
                                    <Box id="summary" scrollMarginTop={"150px"}>
                                        <SummarySection/>
                                    </Box>
                                    {/*============End================*/}
                                </Box>
                            </Flex>
                        </Box>
                    </Wrapper>
                </Container>
            </Corporate>
        </>
    );
}

CorporatePage.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
};
export default CorporatePage;

const Corporate = styled.div`
  margin-top: 5rem;
`;

const Wrapper = styled.div`
  margin: 0 2rem;

  @media (max-width: 780px) {
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

// HERO SECTION
const HeroContent = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;

  @media (max-width: 820px) {
    flex-direction: column-reverse;
    gap: 0;

    .hero-img {
      width: 50%;
      height: 50%;
      margin: -2rem auto 1.5rem auto;

      ${breakpoints.lg} {
        width: 45%;
      }

      @media (max-width: 820px) {
        width: 60%;
      }

      ${breakpoints.md} {
        width: 60%;
        height: 100%;
        padding-top: 0;
      }

      ${breakpoints.sm} {
        width: 100%;
      }
    }
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 820px) {
    width: 100%;
  }

  h1 {
    box-sizing: border-box;
    padding-left: 2rem;
    font-size: 2.2rem;
    font-weight: 700;
    color: #0c0c0c;
    border-left: 2px solid #e9000e;

    ${breakpoints.lg} {
      font-size: 1.7rem;
    }

    @media (max-width: 820px) {
      font-size: 1.5rem;
      font-weight: 500;
    }

    ${breakpoints.sm} {
      margin-top: 1.5rem;
    }
  }

 

  p {
    font-size: 1.2rem;
    font-weight: 400;
    padding-bottom: 0;
    margin-bottom: 0;
    color: #636363;

    @media (max-width: 820px) {
      font-size: 0.9rem;
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
    background: linear-gradient(252.93deg, #ac2121 -22.82%, #e9000e 130.87%);
    border-radius: 8px;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    cursor: pointer;
    text-transform: uppercase;
    min-width: 190px;

    ${breakpoints.lg} {
      font-size: 0.7rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  .get-quote {
    background-color: #fff;
    color: #b10000;
    border: 1px solid #b10000;
    padding: 0.5rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
    min-width: 120px;

    ${breakpoints.lg} {
      font-size: 0.7rem;
    }

    ${breakpoints.sm} {
      min-width: 190px;
      text-align: center;
      display: flex;
      justify-content: center;
    }

    &:hover {
      background-color: #b10000;
      color: #fff;
    }
  }
`;

// ABOUT SECTION
const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 0;

  .about {
    margin-bottom: -0.5rem;

   

    h3 {
      font-size: 30px;
      font-weight: 600;
      color: #414141;
      line-height: 170%;

      ${breakpoints.lg} {
        font-size: 1.2rem;
        width: 100%;
      }

      @media (max-width: 768px) {
        font-size: 1rem;
      }

      ${breakpoints.md} {
        font-size: 1.2rem;
      }

      ${breakpoints.sm} {
        font-size: 1rem;
      }
    }

    div {
      width: 50px;
      height: 3px;
      background-color: #e9000e;
      margin: 0.5rem 0;
    }

    p {
      font-size: 1.2rem;

      ${breakpoints.lg} {
        font-size: 1rem;
      }

      ${breakpoints.md} {
        font-size: 0.9rem;
      }

      ${breakpoints.sm} {
        font-size: 0.8rem;
      }

    }
  }


  .why-us {
    display: flex;
    gap: 0.5rem;

    p {
      font-size: 1.1rem;

      ${breakpoints.lg} {
        font-size: 1rem;
      }

      ${breakpoints.md} {
        font-size: 0.9rem;
      }

      ${breakpoints.sm} {
        font-size: 0.8rem;
      }
    }

    svg {
      color: #e9000e;
      padding-top: 0.5rem;
    }
  }
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin: 2rem 0;
  width: 100%;

  ${breakpoints.lg} {
    gap: 1rem;
  }

  ${breakpoints.sm} {
    justify-content: space-between;
    margin-bottom: 0;
  }
`;

const AboutCard = styled.div`
  background: #ffffff;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  ${breakpoints.sm} {
    width: 100%;
    margin-bottom: 1rem;
  }

  .about-img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem auto;
    padding: 0.3rem;
    border-bottom: 3px solid #e9000e;
  }

  .item-body {
    text-align: center;

    h2 {
      font-weight: 700;
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 500;
      color: #6B6F71;

      ${breakpoints.sm} {
        width: 100%;
      }
    }
  }

`;

// OUR EXPERTISE
const OurExpertise = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 4rem;

  .expertise {

    h3 {
      font-size: 1.87rem;
      font-weight: 600;
      color: #414141;
      line-height: 170%;

      ${breakpoints.lg} {
        font-size: 1.2rem;
        width: 100%;
      }

      @media (max-width: 768px) {
        font-size: 1rem;
      }

      ${breakpoints.md} {
        font-size: 1.2rem;
      }

      ${breakpoints.sm} {
        font-size: 1rem;
      }
    }

    div {
      width: 50px;
      height: 3px;
      background-color: #e9000e;
      margin: 0.5rem 0;
    }

    p {
      font-size: 1.2rem;
      padding-top: 1rem;

      ${breakpoints.lg} {
        font-size: 1rem;
      }

      ${breakpoints.md} {
        font-size: 0.9rem;
      }

      ${breakpoints.sm} {
        font-size: 0.8rem;
      }

    }
  }


  .why-us {
    display: flex;
    gap: 0.5rem;

    p {
      font-size: 1.1rem;

      ${breakpoints.lg} {
        font-size: 1rem;
      }

      ${breakpoints.md} {
        font-size: 0.9rem;
      }

      ${breakpoints.sm} {
        font-size: 0.8rem;
      }
    }

    svg {
      color: #e9000e;
      padding-top: 0.5rem;
    }
  }
`;

const CorporateContainer = styled.div`
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

const CorporateCard = styled.div`
  width: 45%;
  margin-bottom: 2rem;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0.3);

  @media (min-width: 700px) and (max-width: 929px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
  }

  ${breakpoints.sm} {
    width: 100%;
  }

  &:hover {
    transform: scale(1.01);
  }

`;

const CardData = styled.div`
  display: flex;
  flex-direction: column;

  .img-box, .desc {
    gap: 1rem;
    align-items: center;
    padding: 1rem;
  }

  .img-box {
    display: flex;

  }

  .img-box h3 {
    font-weight: 600;

  }

  a {
    text-decoration: none;
    color: #e9000e;


  }

  button {
    padding: 1rem 0;
    display: flex;
    gap: 0.5rem;
    align-items: center;

    &:hover {
      text-decoration: underline;
    }

    svg {
      padding-top: 0.2rem;
    }
  }
`;

// OUR SERVICES
const Services = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  background: #B60E09;
  color: #fff;
  padding: 1rem 2rem;

  ${breakpoints.lg} {
    padding-top: 4rem;
  }

  .services {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 0;
    margin-bottom: 1rem;

    h3 {
      font-size: 30px;
      font-weight: 700;
      color: #fff;
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
      background-color: #fff;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 20px;
      font-weight: 400;
      color: #fff;

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

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  ${breakpoints.lg} {
    gap: 1rem;
  }

  ${breakpoints.md} {
    gap: 0.5rem;
  }
`;

const ServicesCard = styled.div`
  width: 30%;
  min-width: 200px;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  margin: 0.5rem auto;

  @media (min-width: 700px) and (max-width: 929px) {
    width: 90%;
    margin: 0 auto;
    border-right: none;
    padding: 0;
    border-bottom: 1px solid #f5f5f5;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 0;
    border-bottom: 1px solid #f5f5f5;
  }

  &:hover {
    transform: scale(1.01);
  }

  .service-img {
    width: 60px;
    height: 60px;

  }

  h3 {
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 1rem;
    padding-top: 1rem;
  }

  p {
    font-size: 0.9rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 2rem;

    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }
`;

const CorporateCardData = styled.div`
  padding: 0 0.5rem 0 0.5rem;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

//OUR HELP

const OurHelp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;

  .our_help {
    margin-bottom: -0.5rem;

    h3 {
      font-size: 30px;
      font-weight: 600;
      color: #414141;
      line-height: 170%;

      ${breakpoints.lg} {
        font-size: 1.2rem;
        width: 100%;
      }

      @media (max-width: 768px) {
        font-size: 1rem;
      }

      ${breakpoints.md} {
        font-size: 1.2rem;
      }

      ${breakpoints.sm} {
        font-size: 1rem;
      }
    }

    div {
      width: 50px;
      height: 3px;
      background-color: #e9000e;
      margin: 0.5rem 0;
    }

    p {
      font-size: 1.2rem;

      ${breakpoints.lg} {
        font-size: 1rem;
      }

      ${breakpoints.md} {
        font-size: 0.9rem;
      }

      ${breakpoints.sm} {
        font-size: 0.8rem;
      }

    }


  }

  button {
    background: #E9000E;
    border-radius: 8px;
    color: #fff;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
  }

`;

//SUCCESS STORIES
const SuccessStory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
  padding: 2rem;
  background: #FFFFFF;
  box-shadow: 0 6px 10px 4px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.3);

  .success {
    margin-bottom: -0.5rem;

    h3 {
      font-size: 30px;
      font-weight: 600;
      color: #414141;
      line-height: 170%;

      ${breakpoints.lg} {
        font-size: 1.2rem;
        width: 100%;
      }

      @media (max-width: 768px) {
        font-size: 1rem;
      }

      ${breakpoints.md} {
        font-size: 1.2rem;
      }

      ${breakpoints.sm} {
        font-size: 1rem;
      }
    }

    div {
      width: 50px;
      height: 3px;
      background-color: #e9000e;
      margin: 0.5rem 0;
    }

    p {
      font-size: 1.2rem;

      ${breakpoints.lg} {
        font-size: 1rem;
      }

      ${breakpoints.md} {
        font-size: 0.9rem;
      }

      ${breakpoints.sm} {
        font-size: 0.8rem;
      }

    }


  }

  button {
    background: #E9000E;
    border-radius: 8px;
    color: #fff;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
  }

`;

// CONSULTING IT SERVICES
const Projects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;

  ${breakpoints.lg} {
    margin-top: 4rem;
  }

  .projects {
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

      @media (min-width: 700px) and (max-width: 929px) {
        font-size: 1.2rem;
      }
      @media (max-width: 850px) {
        font-size: 1rem;
      }
      @media (max-width: 600px) {
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

const CasesContainer = styled.div`
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

const CasesCard = styled.div`
  width: 47%;
  border-radius: 8px;
  box-shadow: 0 1.55172px 1.10345px rgba(0, 0, 0, 0.3),
  0 1.10345px 1.31034px 1.10345px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  margin: 0.5rem auto;

  @media (min-width: 991px) and (max-width: 999px) {
    width: 58%;
    margin: 0.5rem auto;
  }
  @media (max-width: 900px) {
    width: 70%;
    margin: 0.5rem auto;
    min-width: 300px;
  }
  @media (max-width: 820px) {
    width: 47%;
    margin: 0.5rem auto;
  }

  @media (max-width: 600px) {
    width: 80%;
    min-width: 100%;
    margin: 0.5rem auto;
  }

  ${breakpoints.sm} {
    width: 100%;
  }

  &:hover {
    transform: scale(1.01);
  }

  div {
    padding: 0 0.5rem;

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #0c0c0c;
      padding-top: 10px;

      @media (max-width: 1200px) {
        font-size: 1rem;
      }

      ${breakpoints.lg} {
        font-size: 1rem;
      }
    }

    h5 {
      text-transform: uppercase;
      color: #e9000e;
      font-weight: 300;
      font-size: 0.8rem;
      margin: 0.5rem 0;
    }

    p {
      font-size: 0.87rem;
      font-weight: 400;
      color: #303030;
      margin-bottom: 2rem;
    }

    button {
      background: #ffffff;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.3rem;
      color: #e9000e;
      padding-bottom: 1rem;
      font-size: 1rem;
      font-weight: 500;
      transition: all 0.2s ease-in-out;
      margin: 0 auto;

      .icon {
        color: #e9000e;
        font-size: 25px;
      }

      &:hover {
        opacity: 0.5;
      }
    }
  }
`;
