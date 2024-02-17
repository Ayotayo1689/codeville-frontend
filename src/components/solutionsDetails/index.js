import React, {useState} from "react";
import {Box, Container, Flex, Text,} from "@chakra-ui/react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import {MdKeyboardArrowRight, MdOutlineStar} from "react-icons/md";
import {healthServices, healthSolutions, investments, reasons, sideBarData, whyTanta,} from "./data";
import HeaderOne from "../HeaderOne";
import LandingLayout from "../../layouts/landing.layout";
import {breakpoints} from "../../../styles/theme";
import FamilyImg from "../../../public/assets/solutionsDetails/family.svg";
import {RiCheckboxBlankFill} from "react-icons/ri";
import ContactForm from "./ContactForm";
import LogoMarquee from "../logoMarquee";
import SolutionsImg from "../../../public/assets/solutionsDetails/solutions.svg";
import Tanta from "../../../public/assets/solutionsDetails/tanta.png";
import Programmer from "../../../public/assets/solutionsDetails/programmer.svg";
import big from "../../../public/assets/solutionsDetails/big.png";
import bigger from "../../../public/assets/solutionsDetails/bigger.png";
import twin from "../../../public/assets/solutionsDetails/twin.png";
import biggest from "../../../public/assets/solutionsDetails/biggest.png";
import bigRed from "../../../public/assets/solutionsDetails/bigRed.png";
import SolutionsBanner from "./Banner";
import {task} from "../../../public/assets/testing-qa";
import ServicesForm from "../servicesForm/servicesForm";


function HealthcareSolutionsDetails() {
    const [activeLink, setActiveLink] = useState({});
    return (
        <>
            <Consulting>
                <HeaderOne
                    heading={"SERVICES"}
                    title={"Healthcare information technology services"}
                />
                <Container maxW={"7xl"} p={{base: "1rem", lg: "4rem"}}>
                    <Wrapper>
                        <HeroContent>
                            <HeroText>
                                <h1>EASY AFFORDABLE HEALTHCARE IT SOLUTIONS</h1>
                                <p>
                                    Healthcare IT services cover care delivery digitization, IT
                                    modernization, cloud migration, IT support, etc. In healthcare
                                    IT since 2005, Tantain offers full-cycle IT services for
                                    medical organizations to leverage tech-enabled healthcare
                                    without expanding an in-house IT team.
                                </p>
                                <CtaButtons>
                                    <button className="request-services">
                                        Request Health services
                                    </button>
                                    <button className="get-quote">get a quote</button>
                                </CtaButtons>
                            </HeroText>
                            <Image
                                src={FamilyImg}
                                alt="hero image"
                                width={400}
                                height={400}
                                className="hero-img"
                            />
                        </HeroContent>

                        <Box mb={"2rem"} mt={"4rem"}>
                            <Flex gap={"2rem"} justify={"center"}>
                                {/* ================Fixed Sidebar Here================ */}
                                <Flex
                                    flexDir="column"
                                    boxShadow={"lg"}
                                    height="450px"
                                    flex={1}
                                    minW={"300px"}
                                    position="sticky"
                                    top="10rem"
                                    pb={"1rem"}
                                    borderBottom={"lg"}
                                    className="side-bar"
                                >
                                    <Text
                                        as="h2"
                                        fontSize={"2xl"}
                                        fontWeight={"semibold"}
                                        mb={"1rem"}
                                        color={"white"}
                                        textAlign={"center"}
                                        paddingBlock={".5rem"}
                                        borderTopRadius={"lg"}
                                        background={"radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"}
                                    >
                                        HEALTH CARE
                                    </Text>
                                    <Box px={"1rem"}>
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
                                                            fontSize: "16px",
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

                                <Box flex={3} mb={"2rem"} pl={"2rem"} className="about-box">
                                    {/* ================TANTAIN HEALTHCARE SERVICES SECTION================ */}
                                    <Box id="healthcare">
                                        <About>
                                            <div className="why">
                                                <h3>
                                                    Why Choose Tanta Innovative for your{" "}
                                                    <span>Health IT Services</span>
                                                </h3>
                                                <div></div>
                                            </div>

                                            {whyTanta.map((item, index) => {
                                                return (
                                                    <div key={index} className="about">
                                                        <div>
                                                            <RiCheckboxBlankFill/>
                                                        </div>
                                                        <p>{item.title}</p>
                                                    </div>
                                                );
                                            })}
                                        </About>
                                    </Box>

                                    {/* ================SERVICES  SECTION================ */}
                                    <Box id="services">
                                        <Services>
                                            <div className="services">
                                                <h3>Our Healthcare I.T Services</h3>
                                                <div></div>
                                            </div>
                                            <HealthServicesContainer>
                                                {healthServices.map((item, index) => (
                                                    <HealthServiceCard key={item.title}>
                                                        <CardData>
                                                            <div className="img-box">
                                                                <Image
                                                                    src={item.img}
                                                                    alt="tech-img"
                                                                    width={30}
                                                                    height={20}
                                                                />

                                                                <h3>{item.title}</h3>
                                                            </div>
                                                            <hr/>
                                                            {index === 4 &&  <Text mt={"0.9rem"} ml={"0.5rem"} fontSize={"14px"}>We design and implement analytics solutions to enable:</Text>}
                                                            <ul>
                                                                {item.items.map((nestedItem) => (
                                                                    <li key={nestedItem.id}>
                                                                        <RiCheckboxBlankFill className="icon"/>
                                                                        {nestedItem.name}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </CardData>
                                                    </HealthServiceCard>
                                                ))}
                                            </HealthServicesContainer>
                                        </Services>
                                    </Box>

                                    {/* ================NEED IT SERVICES'  SECTION================ */}
                                    <Box id="need">
                                        <SolutionsBanner/>
                                    </Box>

                                    {/* ================OUR CUSTOMERS' SECTION================ */}
                                    <Box id="experience">
                                        <OurExperience>
                                            <div className="experience">
                                                <h3>
                                                    <span>Our Experience</span> Speaks Of Our Value
                                                </h3>
                                                <div></div>
                                            </div>
                                            <LogoMarquee colored={true} />
                                            <Reviews>
                                                <div className="card-container">
                                                    <h3>FINLAB NIG LTD</h3>
                                                    <p>
                                                        Timely delivery, great communication, project went
                                                        so well. It was a great experience working with
                                                        them, I would definitely recommend.
                                                    </p>

                                                    <div className="ratings">
                                                        <span className="number">5.0</span>
                                                        <div className="icon-container">
                                                            <MdOutlineStar size={18}/>
                                                            <MdOutlineStar size={18}/>
                                                            <MdOutlineStar size={18}/>
                                                            <MdOutlineStar size={18}/>
                                                            <MdOutlineStar size={18}/>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <Box width={"70px"} height={"70px"} position={"absolute"} top={"73"} right={"232px"} display={{lg:"block", base:"none"}}>
                                                            <Image src={bigRed} alt="bigRed" width={68} height={57} />
                                                        </Box>
                                                        <div className="img-container">
                                                            <Image
                                                                src={Tanta}
                                                                alt="profile picture"
                                                                width={50}
                                                                height={50}
                                                                className="profile-img"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Box width={"50px"} height={"50px"} position={"absolute"} top={"0"} right={"380px"} display={{lg:"block", base:"none"}}>
                                                    <Image src={big} alt="big" width={36} height={34} />
                                                </Box>
                                                <Box width={"90px"} height={"90px"} position={"absolute"} right={"345px"} top={"105px"} display={{lg:"block", base:"none"}}>
                                                    <Image src={bigger} alt="bigger" width={105} height={105} />
                                                </Box>
                                                <Box width={"100px"} height={"100px"} position={"absolute"} right={"370px"} top={"227px"} display={{lg:"block", base:"none"}}>
                                                    <Image src={twin} alt="twin" width={61} height={61} />
                                                </Box>
                                                <Box width={"100px"} height={"100px"} position={"absolute"} right={"477px"} top={"302px"} display={{lg:"block", base:"none"}}>
                                                    <Image src={big} alt="big" width={52} height={49} />
                                                </Box>
                                                <Box width={"100px"} height={"100px"} position={"absolute"} right={"270px"} top={"350px"} display={{lg:"block", base:"none"}}>
                                                    <Image src={twin} alt="twin" width={61} height={61} />
                                                </Box>
                                                <Box width={"100px"} height={"100px"} position={"absolute"} left={"610px"} top={"230px"} display={{lg:"block", base:"none"}}>
                                                    <Image src={biggest} alt="biggest" width={226} height={226} />
                                                </Box>

                                                {/* 2 */}
                                                <div className="card-container">
                                                    <h3>BURTECH IND</h3>
                                                    <Box fontSize={"0.8rem"} fontWeight={"400"} paddingBottom={"2rem"} >
                                                        Timely delivery, great communication, project went
                                                        so well. It was a great experience working with
                                                        them, I would definitely recommend.
                                                        <Box width={"70px"} height={"70px"} position={"absolute"} top={"90"} right={"40px"} display={{lg:"block", base:"none"}}>
                                                            <Image src={big} alt="big" width={70} height={64} />
                                                        </Box>
                                                    </Box>


                                                    <div className="ratings">
                                                        <span className="number">5.0</span>
                                                        <div className="icon-container">
                                                            <MdOutlineStar size={18}/>
                                                            <MdOutlineStar size={18}/>
                                                            <MdOutlineStar size={18}/>
                                                            <MdOutlineStar size={18}/>
                                                            <MdOutlineStar size={18}/>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <Box width={"70px"} height={"70px"} position={"absolute"} top={"73"} right={"232px"} display={{lg:"block", base:"none"}}>
                                                            <Image src={bigRed} alt="bigRed" width={68} height={57} />
                                                        </Box>
                                                        <div className="img-container">
                                                            <Image
                                                                src={Tanta}
                                                                alt="profile picture"
                                                                width={50}
                                                                height={50}
                                                                className="profile-img"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Reviews>
                                        </OurExperience>
                                    </Box>

                                    {/* ================REASONS TO WORK WITH US SECTION================ */}
                                    <Box id="reasons">
                                        <Reasons>
                                            <div className="reasons">
                                                <h3>
                                                    <span className="four">4</span> <span>Reasons</span>{" "}
                                                    to work with us
                                                </h3>
                                                <div></div>
                                            </div>
                                            <ReasonsContainer>
                                                {reasons.map((item) => (
                                                    <ReasonsCard key={item.id}>
                                                        <div>
                                                            <span className="number">{item.id}</span>
                                                            <h3>{item.title}</h3>
                                                            <div className="redline"></div>
                                                            <p>{item.details}</p>
                                                        </div>
                                                    </ReasonsCard>
                                                ))}
                                            </ReasonsContainer>
                                        </Reasons>
                                    </Box>

                                    {/* ================SOLUTIONS WE OFFER SECTION================ */}
                                    <Box id="solutions">
                                        <Solutions>
                                            <div className="solutions">
                                                <h3>
                                                    <span>Solutions</span> We Offer
                                                </h3>
                                                <div></div>
                                            </div>
                                            <SolutionsContainer>
                                                {healthSolutions.map((item) => (
                                                    <SolutionsCard key={item.title}>
                                                        <div>
                                                            <h3>{item.title()}</h3>
                                                            <div className="redline"></div>
                                                            <ul>
                                                                {item.items.map((nestedItem) => (
                                                                    <li key={nestedItem.id}>
                                                                        <RiCheckboxBlankFill className="icon"/>
                                                                        {nestedItem.name}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </SolutionsCard>
                                                ))}
                                                <Image src={SolutionsImg} alt="solutions Image"/>
                                            </SolutionsContainer>
                                        </Solutions>
                                    </Box>

                                    {/* ================NEED IT SERVICES'  SECTION================ */}
                                    <Box id="need">
                                        <SolutionsBanner/>
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </Wrapper>
                    {/* ================HEALTHCARE IT INVESTMENTS  SECTION================ */}
                    <Box id="investments" backgroundColor={"#FFFAFA"}>
                        <Investments>
                            <div className="investments">
                                <h3>Healthcare IT Service Investment </h3>
                                <p>
                                    The following factors influence the cost of healthcare
                                    IT services:
                                </p>
                                {investments.map((item, index) => (
                                    <div key={index}>
                                        <RiCheckboxBlankFill className="icon"/>
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <Box width={"100px"} height={"100px"} position={"absolute"} right={"300px"} bottom={"30px"}
                                 display={{lg: "block", base: "none"}}>
                                <Image src={twin} alt="twin" width={61} height={61}/>
                            </Box>
                            <Box width={"100px"} height={"100px"} position={"absolute"} right={"150px"} bottom={"150px"}
                                 display={{lg: "block", base: "none"}}>
                                <Image src={big} alt="big" width={90} height={85}/>
                            </Box>
                            <Box width={"100px"} height={"100px"} position={"absolute"} left={"30px"} top={"10px"}
                                 display={{lg: "block", base: "none"}}>
                                <Image src={big} alt="big" width={90} height={85}/>
                            </Box>
                            <Box width={"100px"} height={"100px"} position={"absolute"} left={"208px"} bottom={"10px"}
                                 display={{lg: "block", base: "none"}}>
                                <Image src={big} alt="big" width={52} height={49}/>
                            </Box>

                        </Investments>

                    </Box>

                    {/* ================CONTACT US SECTION================ */}
                    <Box id="contact_us">
                        <Flex gap={"4rem"} direction={{base: "column", lg: "row"}} w={"100%"}
                              p={{base: "0 1rem", lg: "0 90px"}} my={"2.5rem"} id={'get-started'}>
                            {/* ========= Get in touch ========= */}
                            <Flex w={{base: "100%", md: "50%"}}>
                                <Flex direction={"column"} p={{lg: " 0 2rem"}} borderRight={"10px solid #FFFFFF"}>
                                    <Box borderLeft={"6px solid #E9000E"} p={".5rem 2rem"}>
                                        <Text
                                            as="h2"
                                            fontSize={{base: "24px", lg: "34px"}}
                                            w={"100%"}
                                            fontWeight={"700"} lineHeight={'40px'}>
                                            Get Transparent & Result-oriented
                                            <Text color={"red"}>Healthcare IT Services!</Text>
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Image src={task} alt='task image'/>
                                    </Box>
                                </Flex>
                                <Box width={"20px"} h={"100%"} bg={"#FFFFFF"}
                                     boxShadow={"11px 0px 29px rgba(0, 0, 0, 0.25)"}
                                     display={{base: 'none', md: 'block', lg: 'block'}}>
                                    {" "}
                                </Box>
                            </Flex>
                            {/* ========= Agent Form========= */}
                            <Box w={"100%"}>
                                <Text fontWeight='400' fontSize={{base: '15px', lg: '16px'}} lineHeight='170%'
                                      mb='1rem'>TANTA Innovative offers cost- and time-effective flexible Healthcare IT
                                    services to ensure software availability, uninterrupted and smooth functioning,
                                    Cybersecurity, scalability, and stability. Feel free to briefly describe your
                                    testing and QA needs for our team to promptly get back to you.
                                </Text>
                                <ServicesForm services='Healthcare IT Services'/>
                            </Box>
                        </Flex>
                    </Box>
                </Container>
            </Consulting>
        </>
    );
}

HealthcareSolutionsDetails.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
};
export default HealthcareSolutionsDetails;

const Consulting = styled.div`
  margin-top: 5rem;
`;

const Wrapper = styled.div`
  margin: 0 2rem;

  ${breakpoints.md} {
    .side-bar {
      display: none;
    }

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
      margin: 0 auto;
      padding-top: 2rem;

      ${breakpoints.lg} {
        width: 45%;
      }
      ${breakpoints.md} {
        width: 100%;
        height: 100%;
        padding-top: 0;
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
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3),
    0 1px 3px 1px rgba(0, 0, 0, 0.15);
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

  .why {
    margin-bottom: -0.5rem;

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #414141;

      span {
        color: #e9000e;
      }

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
  }

  .about {
    display: flex;
    gap: 0.5rem;

    p {
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

// HEALTH I.T SERVICES
const Services = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;

  ${breakpoints.lg} {
    margin-top: 4rem;
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

const CardData = styled.div`
  padding: 0.5rem 0 1rem 0;

  hr {
    border: 0.5px solid rgba(0, 0, 0, 0.1);
  }

  .img-box {
    display: flex;
    gap: 1rem;
    margin: 0.8rem 0;
    padding: 0 0.5rem;

    h3 {
      font-size: 1rem;
      font-weight: 700;
    }
  }
`;

const HealthServicesContainer = styled.div`
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

const HealthServiceCard = styled.div`
  width: 45%;
  margin-bottom: 1rem;
  padding-right: 0.2rem;
  padding-left: 0.2rem;
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

  ul {
    list-style: none;
    padding: 0.5rem;
    li {
      display: flex;
      gap: 0.5rem;
      font-size: 14px;
      font-weight: 400;
      color: #303030;
      margin-bottom: 0.5rem;

      .icon {
        color: #e9000e;
        width: 6px;
        min-width: 6px;
        margin-top: 5px;
      }
    }
  }
`;

//NEED IT HEALTH SERVICES?
const NeedService = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  margin-top: 2rem;
  background: #fde6e7;

  .need {
    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      width: 40%;
      color: #414141;

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
  }

  .hero-img {
    width: 50%;
  }
`;

const NeedContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpoints.lg} {
    flex-direction: column-reverse;
  }
  @media (max-width: 820px) {
    flex-direction: column-reverse;
    gap: 0;
    margin-top: -2rem;

    .hero-img {
      width: 50%;
      height: 50%;
      margin: 0 auto;
      padding-top: 2rem;

      ${breakpoints.md} {
        width: 100%;
        height: 100%;
      }
    }
  }

  ${breakpoints.md} {
    .hero-img {
      padding-top: 1rem;
    }
  }
`;

const NeedText = styled.div`
  @media (max-width: 820px) {
    width: 100%;
  }

  ${breakpoints.md} {
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    padding-bottom: 0;
    margin-bottom: 0;
    color: #636363;

    @media (max-width: 820px) {
      font-size: 0.9rem;
    }
  }
`;

const NeedCtaButton = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakpoints.sm} {
    flex-direction: column;
    gap: 1rem;
  }

  .request-services {
    background: linear-gradient(252.93deg, #ac2121 -22.82%, #e9000e 130.87%);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3),
    0 1px 3px 1px rgba(0, 0, 0, 0.15);
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
    min-width: 190px;

    ${breakpoints.lg} {
      font-size: 0.7rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

// OUR EXPERIENCE
const OurExperience = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;

  ${breakpoints.lg} {
    margin-top: 4rem;
  }

  .experience {
    margin-bottom: 1rem;

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
    }
  }
`;

const Reviews = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  gap: 10rem;
  flex-wrap: wrap;
  position: relative;

  @media (min-width: 700px) and (max-width: 929px) {
    gap: 4rem;
  }
  @media (max-width: 850px) {
    gap: 4rem;
  }
  @media (max-width: 600px) {
    gap: 4rem;
  }

  .card-container {
    position: relative;
    width: 35%;
    min-width: 250px;
    background: #f1f1f1;
    border-width: 0 2.13009px 1.42006px 0;
    border-style: solid;
    border-color: #e9000e;
    border-radius: 14.2006px;
    display: flex;
    margin-bottom: 2rem;
    flex-direction: column;
    padding: 1rem 1rem 1rem 2rem;

    h3 {
      font-size: 1rem;
      font-weight: 700;
      color: #414141;
      padding-bottom: 1rem;
    }

    p {
      font-size: 0.8rem;
      font-weight: 400;
      padding-bottom: 2rem;
      position: relative;
    }

    .ratings {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0.2rem 0;
      background: #fac7cc;
      box-shadow: 0 2.84013px 2.84013px rgba(0, 0, 0, 0.25);
      border-radius: 0 10.6505px 10.6505px 17.7508px;

      .number {
        padding: 0.1rem;
        gap: 0.6rem;
        font-weight: 700;
        background: #f1f1f1;
        box-shadow: inset 0 2.84013px 2.84013px rgba(0, 0, 0, 0.25);
        border-radius: 0 10.6505px 10.6505px 10.6505px;
      }
      .icon-container {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        color: #22ae16;
      }
    }

    .img-container {
      position: absolute;
      top: 5rem;
      right: 14rem;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: 1px solid #db0303;
      background: #e6e8f5;
      box-shadow: 0 7.20537px 12.1937px rgba(0, 0, 0, 0.15);

      .profile-img {
        border: 1px solid #e6e8f5;
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

// 4 REASONS TO WORK WITH US
const Reasons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 8rem;

  ${breakpoints.lg} {
    margin-top: 4rem;
  }

  .reasons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 0;
    margin-bottom: 1rem;

    h3 {
      font-size: 30px;
      font-weight: 700;
      color: #414141;

      span {
        color: #e9000e;
      }
      .four {
        font-size: 5rem;

        ${breakpoints.lg} {
          font-size: 4rem;
        }
        @media (min-width: 700px) and (max-width: 929px) {
          font-size: 3rem;
        }
        @media (max-width: 850px) {
          font-size: 2.5rem;
        }
        @media (max-width: 600px) {
          font-size: 2rem;
        }
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
    }
  }
`;
const ReasonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  padding: 2rem 0;
  background: #f5f5f5;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  ${breakpoints.lg} {
    gap: 1rem;
  }

  ${breakpoints.md} {
    gap: 0.5rem;
  }
`;

const ReasonsCard = styled.div`
  width: 45%;
  margin: 2rem 0;
  padding: 2rem 1rem;
  background: #ffffff;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  position: relative;

  @media (min-width: 700px) and (max-width: 929px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
  }

  ${breakpoints.sm} {
    margin: 1rem 0;
  }

  &:hover {
    transform: scale(1.01);
  }

  .number {
    position: absolute;
    top: -30px;
    left: 0;
    font-size: 2.5rem;
    font-weight: 700;
    color: #e9000e;
  }
  h3 {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 1rem;
    padding-top: 10px;

    @media (max-width: 1200px) {
      font-size: 1rem;
    }

    ${breakpoints.lg} {
      font-size: 1rem;
    }
  }

  .redline {
    width: 50px;
    height: 3px;
    background-color: #e9000e;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: #303030;
    padding: 0.5rem 0;
  }
`;

// HEALTH SOLUTIONS
const Solutions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 0;
  margin-top: 4rem;

  .solutions {
    margin-bottom: -0.5rem;

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #414141;

      span {
        color: #e9000e;
      }

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
  }

  .about {
    display: flex;
    gap: 0.5rem;

    p {
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

const SolutionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  padding: 1rem 0;
  background: #fff8f8;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  ${breakpoints.lg} {
    gap: 1rem;
  }

  ${breakpoints.md} {
    gap: 0.5rem;
  }
`;

const SolutionsCard = styled.div`
  width: 45%;
  margin: 2rem 0;
  padding: 1rem 1rem;
  background: #ffffff;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  @media (min-width: 700px) and (max-width: 929px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
  }

  ${breakpoints.sm} {
    margin: 1rem 0;
  }

  &:hover {
    transform: scale(1.01);
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 1rem;
    padding-top: 10px;
    color: #2A2A2A;

    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }

  .redline {
    width: 50px;
    height: 3px;
    background-color: #e9000e;
  }

  ul {
    list-style: none;
    padding: 0.5rem 0;
    li {
      display: flex;
      gap: 0.5rem;
      font-size: 14px;
      font-weight: 400;
      color: #303030;
      margin-bottom: 0.5rem;

      .icon {
        color: #e9000e;
        width: 6px;
        min-width: 6px;
        margin-top: 5px;
      }
    }
  }
`;

// HEALTH IT INVESTMENTS
const Investments = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  padding: 3rem 0;
  z-index: 999;

  .investments {
    padding: 2rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    ${breakpoints.lg} {
      padding: 2rem;
    }

    ${breakpoints.sm} {
      padding: 1rem;
    }

    h3, p {
      width: 65%;
    }

    h3, p {
      ${breakpoints.md} {
        width: 100%;
      }
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      padding-bottom: 1rem;

      ${breakpoints.lg} {
        font-size: 1.2rem;
      }
    }

    div {
      display: flex;
      width: 65%;
      margin: 0.5rem auto;
      gap: 0.5rem;
      font-size: 14px;
      font-weight: 400;
      color: #303030;

      ${breakpoints.md} {
        width: 100%;
      }

      .icon {
        color: #e9000e;
        width: 6px;
        min-width: 6px;
        margin-top: 3px;
      }
    }
  }
}
`;