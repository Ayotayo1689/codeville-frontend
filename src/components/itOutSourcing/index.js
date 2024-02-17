import React, {useEffect, useRef, useState} from "react";
import {
    Box,
    Button,
    Container,
    Flex, List, ListIcon,
    ListItem,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import LandingLayout from "../../layouts/landing.layout";
import BgImage from "../../../public/assets/consulting/bgimg.png";
import styled from "styled-components";
import Image from "next/image";
import {MdKeyboardArrowRight} from "react-icons/md";
import {
    about,
    approach,
    capacity,
    planning,
    scope,
    services,
    sideBarData,
    support,
    techniques,
} from "./data";
import {BsArrowRight, BsArrowRightShort} from "react-icons/bs";
import {IoIosCheckmark} from "react-icons/io";
import {breakpoints, colors} from "../../../styles/theme";
import WhyChoose from "./whyChoose";
import NeedExpert from "./NeedExpert";
import Testimonial from "./testimonials";
import Head from "next/head";
import appRoutes from "../../utils/appRoutes";
import {analyticsConsultingSummary} from "@/components/dataAnalytics/analyticsConsulting/data";
import TantaTestimonial from "@/components/tantaTestimonials";


function ItConsulting({ testimonials }) {

    const [activeLink, setActiveLink] = useState({});
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);

    useEffect(() => {
        if (activeLink.about && aboutRef.current) {
            aboutRef.current.scrollIntoView({behavior: "smooth"});
        }
        if (activeLink.services && servicesRef.current) {
            servicesRef.current.scrollIntoView({behavior: "smooth"});
        }
    }, [activeLink]);

    return (
        <>
            <Head>
                <title>IT Outsourcing - Tanta Innovative</title>
                <meta name="description"
                      content="Reach out to our dedicated team of IT consultants to discuss your project needs, explore innovative solutions, and discover how we can transform your ideas into reality."/>
            </Head>
            <Consulting>
                <Wrapper>
                    <TextContainer>
                        <p>SERVICES</p>
                        <h3>IT OUTSOURCING </h3>
                        <div></div>
                    </TextContainer>
                    <Container maxW={"7xl"}>
                        <HeroContent>
                            <HeroText>
                                <h1>Information Technology Outsourcing</h1>
                                <p>
                                    Reach out to our dedicated team of IT consultants to discuss
                                    your project needs, explore innovative solutions, and discover
                                    how we can transform your ideas into reality.
                                </p>
                                <CtaButtons>
                                    <Link
                                        href={{
                                            pathname: appRoutes.contactUs,
                                            query: {service: "services/it-outsourcing"},
                                        }}
                                        service="services/it-outsourcing"
                                        className="request-services"
                                    >
                                        {" "}
                                        <button className="request-services">
                                            Request IT CONSULTING services
                                        </button>
                                    </Link>
                                    <Link
                                        href={{
                                            pathname: appRoutes.services["cost-calculator"],
                                            query: {service: "itOutSourcing-1"},
                                        }}
                                    >
                                        {" "}
                                        <button className="get-quote">get a quote</button>
                                    </Link>
                                </CtaButtons>
                            </HeroText>
                            <Image
                                src={"/assets/itOutSourcing/HeroImg.svg"}
                                alt="hero image"
                                width={500}
                                height={500}
                                className="hero-img"
                            />
                        </HeroContent>

                        <Box mb={"2rem"} mt={"4rem"}>
                            <Flex gap={"2rem"} justify={"center"}>
                                <Flex
                                    display={{ lg: "flex", base: "none" }}
                                    flexDir="column"
                                    boxShadow={"lg"}
                                    height={"fit-content"}
                                    flex={1}
                                    width={{ base: "100%", lg: "30%" }}
                                    position={{ base: "", lg: "sticky" }}
                                    top="10rem"
                                    pb={"1rem"}
                                    borderBottom={"lg"}
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
                                        IT OUTSOURCING
                                    </Text>
                                    <Box px={"1rem"}>
                                        {sideBarData.map((item, index) => {
                                            return (
                                                <Flex
                                                    paddingInline={".4rem"}
                                                    justifyContent={"space-between"}
                                                    alignItems={"center"}
                                                    key={index}
                                                    p={".3rem"}
                                                >
                                                    <Link
                                                        onClick={() => {
                                                            setActiveLink({[item.goto]: true});
                                                            const sectionRef =
                                                                item.goto === "about" ? aboutRef : servicesRef;
                                                        }}
                                                        style={{
                                                            color: activeLink[item.goto] ? "red" : "",
                                                            fontSize: "18px",
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
                                <Box width={{lg:"70%", base:"100%"}}>
                                    <WhyChoose/>
                                    <Box my={"2rem"} id="expert" scrollMarginTop={"150px"}>
                                        <NeedExpert/>
                                    </Box>
                                    <Container
                                        maxW={"4xl"}
                                        my={"2rem"}
                                        id="reviews"
                                        scrollMarginTop={"150px"}
                                    >
                                        {/*<Text>CUSTOMER REVIEWS</Text>
                                        <Text fontSize={"3xl"} fontWeight={"bold"}>
                                            See What our clients are saying
                                        </Text>
                                        <Testimonial></Testimonial>*/}
                                        <TantaTestimonial testimonials={testimonials} />
                                    </Container>

                                    <Box id="scope" scrollMarginTop={"150px"}>
                                        <Expertise>
                                            <div className="expertise">
                                                <h3>
                                                    The Scope of IT Outsourcing Services by <br/>
                                                    <span>Tanta Innovative</span>
                                                </h3>
                                                <div></div>
                                            </div>
                                            <Text fontSize={"xl"} fontWeight={"semibold"}>
                                                Optimize IT Operations
                                            </Text>
                                            <ExpertCardContainer>
                                                {scope.map((item) => {
                                                    return (
                                                        <ExpertCard key={item.index}>
                                                            <CardData>
                                                                <div className="img-box">
                                                                    <Image
                                                                        src={item.img}
                                                                        alt={item.heading}
                                                                        className="service-img"
                                                                    />
                                                                    <Link href={item?.link}>
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

                                    <Box id="support" scrollMarginTop={"150px"}>
                                        <Expertise>
                                            <div className="expertise">
                                                <h3>Support Business Operations</h3>
                                                <div></div>
                                            </div>
                                            <ExpertCardContainer>
                                                {support.map((item) => {
                                                    return (
                                                        <ExpertCard key={item?.index}>
                                                            <CardData>
                                                                <div className="img-box">
                                                                    <Image
                                                                        src={item?.img}
                                                                        alt={item?.heading}
                                                                        className="service-img"
                                                                    />

                                                                    {item.link ? (
                                                                        <Link href={item.link}>
                                                                            <button>
                                                                                <BsArrowRightShort className="icon"/>
                                                                            </button>
                                                                        </Link>
                                                                    ) : null
                                                                    }
                                                                </div>
                                                                <h3>{item?.heading}</h3>
                                                            </CardData>
                                                        </ExpertCard>
                                                    );
                                                })}
                                            </ExpertCardContainer>
                                        </Expertise>
                                    </Box>

                                    <Box id="plan" scrollMarginTop={"150px"}>
                                        <Expertise>
                                            <div className="expertise">
                                                <h3>Plan And Implement new IT Projects</h3>
                                                <div></div>
                                            </div>
                                            <ExpertCardContainer>
                                                {planning.map((item) => {
                                                    return (
                                                        <ExpertCard key={item.index}>
                                                            <CardData>
                                                                <div className="img-box">
                                                                    <Image
                                                                        src={item.img}
                                                                        alt={item.heading}
                                                                        className="service-img"
                                                                    />

                                                                </div>
                                                                <h3>{item.heading}</h3>
                                                            </CardData>
                                                        </ExpertCard>
                                                    );
                                                })}
                                            </ExpertCardContainer>
                                        </Expertise>
                                    </Box>

                                    <Box id="capabilities" scrollMarginTop={"150px"}>
                                        <Expertise>
                                            <div className="expertise">
                                                <h3>
                                                    <span>OUR IT </span>INNOVATIVE CAPABILITIES Empowering
                                                </h3>
                                                <div></div>
                                            </div>
                                            <ExpertCardContainer id={"capacity"}>
                                                {capacity.map((item) => {
                                                    return (
                                                        <ExpertCard key={item.index}>
                                                            <CardData>
                                                                <div className="img-box">
                                                                    <Image
                                                                        src={item.img}
                                                                        alt={item.heading}
                                                                        className="service-img"
                                                                    />
                                                                    {item?.link ? (
                                                                        <Link href={item.link}>
                                                                            <button>
                                                                                <BsArrowRightShort className="icon"/>
                                                                            </button>
                                                                        </Link>
                                                                    ) : null
                                                                    }


                                                                </div>
                                                                <h3>{item.heading}</h3>
                                                            </CardData>
                                                        </ExpertCard>
                                                    );
                                                })}
                                            </ExpertCardContainer>
                                        </Expertise>
                                    </Box>

                                    <Box id="approach" scrollMarginTop={"150px"}>
                                        <Services>
                                            <div className="services">
                                                <h3>
                                                    <span>Tanta Innovatives </span> Approach to IT service
                                                    Delivery{" "}
                                                </h3>
                                                <div></div>
                                            </div>
                                            <CardContainer>
                                                {approach.map((item) => {
                                                    return (
                                                        <ServicesCard
                                                            className="services-card"
                                                            key={item.index}
                                                        >
                                                            <CardData>
                                                                <Image
                                                                    src={item.img}
                                                                    alt={item.title}
                                                                    className="service-img"
                                                                />
                                                                <h3>{item.title}</h3>

                                                                <UnorderedList
                                                                    pl={4}
                                                                    spacing={2}
                                                                    paddingBlock={"1rem"}
                                                                    fontFamily={"Roboto"}
                                                                >
                                                                    {item.list.map((item, index) => {
                                                                        return (
                                                                            <ListItem key={index}>{item}</ListItem>
                                                                        );
                                                                    })}
                                                                </UnorderedList>
                                                            </CardData>
                                                        </ServicesCard>
                                                    );
                                                })}
                                            </CardContainer>
                                        </Services>
                                    </Box>

                                    <Box id="kpi" scrollMarginTop={"150px"}>
                                        <Techniques>
                                            <div className="techniques">
                                                <h3>
                                                    KPIs we use to estimate the work in progress and
                                                    results:
                                                </h3>
                                                <div></div>
                                            </div>
                                            <Flex
                                                justifyContent={"center"}
                                                gap="6"
                                                display={{base: "none", lg: "flex"}}
                                            >
                                                <Image
                                                    src={"/assets/itOutSourcing/leftarrow.svg"}
                                                    alt="logo"
                                                    width={40}
                                                    height={40}
                                                />

                                                <Text color={"red"} fontSize="xl" mt="-1rem">
                                                    KPIS TO MEASURE THE SERVICE QUALITY
                                                </Text>
                                                <Image
                                                    src={"/assets/itOutSourcing/rightarrow.svg"}
                                                    alt="logo"
                                                    width={40}
                                                    height={40}
                                                />
                                            </Flex>
                                            <TechContainer>
                                                {techniques.map((item, index) => {
                                                    return (
                                                        <TechCard
                                                            className="tech-card"
                                                            key={index}
                                                            style={{background: "rgba(233, 0, 14, 0.1)"}}
                                                        >
                                                            <Flex
                                                                bg={item.bg}
                                                                py={".5rem"}
                                                                justifyContent={"center"}
                                                                alignItems={"center"}
                                                            >
                                                                <Image src={item.icon} alt="logo"/>
                                                                <Text color={"white"} fontSize={"lg"}>
                                                                    {item.title}
                                                                </Text>
                                                            </Flex>

                                                            <CardData>
                                                                <ul>
                                                                    {item.items.map((nestedItem) => (
                                                                        <li
                                                                            style={{fontSize: "1rem"}}
                                                                            key={nestedItem.id}
                                                                        >
                                                                            <IoIosCheckmark className="icon"/>
                                                                            {nestedItem.name}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </CardData>
                                                        </TechCard>
                                                    );
                                                })}
                                            </TechContainer>
                                            {/*<Button*/}
                                            {/*    width={"fit-content"}*/}
                                            {/*    textAlign={"start"}*/}
                                            {/*    rightIcon={<BsFillArrowRightSquareFill/>}*/}
                                            {/*    iconSpacing={"2rem"}*/}
                                            {/*    bg={"none"}*/}
                                            {/*    color={colors.primaryColor}*/}
                                            {/*    fontSize={"lg"}*/}
                                            {/*    as={Link}*/}
                                            {/*    href={"#"}*/}
                                            {/*>*/}
                                            {/*    Our Collaborative Approach in details*/}
                                            {/*</Button>*/}
                                        </Techniques>
                                    </Box>

                                    <Box id="needMore" scrollMarginTop={"150px"}>
                                        <Box my={"2rem"}>
                                            {" "}
                                            <Text
                                                fontSize={{base: "lg", lg: "3xl"}}
                                                fontWeight={"bold"}
                                            >
												<span style={{color: `${colors.primaryColor}`}}>
													{" "}
                                                    Need More
												</span>{" "}
                                                Proof Of Our Competence? <br/> Don’t Hesitate to{" "}
                                                <span style={{color: `${colors.primaryColor}`}}>
													Contact Us!
												</span>
                                            </Text>
                                            <Box
                                                w={"4rem"}
                                                height={".2rem"}
                                                bg={colors.primaryColor}
                                                mt={"2"}
                                            ></Box>
                                        </Box>
                                        <NeedExpert/>
                                    </Box>

                                    <Box id="outsourcing" scrollMarginTop={"150px"}>
                                        <Services>
                                            <div className="services">
                                                <h3>Our Outsourcing Service Options</h3>

                                                <div></div>
                                            </div>
                                            <CardContainer>
                                                {services.map((item) => {
                                                    return (
                                                        <ServicesCard
                                                            className="services-card"
                                                            key={item.index}
                                                        >
                                                            <CardData>
                                                                <h3>{item.title}</h3>
                                                                <p>{item.details}.</p>
                                                                <Link
                                                                    href={{
                                                                        pathname: appRoutes.contactUs,
                                                                        query: {service: "services/it-outsourcing"},
                                                                    }}
                                                                    service={`services/it-outsourcing${item?.link}`}
                                                                    className="request-services">
                                                                    <button>
                                                                        Go for this{" "}
                                                                        <MdKeyboardArrowRight className="icon"/>
                                                                    </button>
                                                                </Link>



                                                            </CardData>
                                                        </ServicesCard>
                                                    );
                                                })}
                                            </CardContainer>
                                        </Services>
                                    </Box>

                                    <Box id="maturity" scrollMarginTop={"150px"}>
                                        <About>
                                            <div>
                                                <h3>
                                                    <span>Tanta Innovative's</span> <br/>
                                                    IT Outsourcing - Q&A
                                                </h3>
                                            </div>
                                            <Box bg="rgba(250, 190, 190, 0.12)" pr={"2rem"}>
                                                {about.map((item, index) => {
                                                    return (
                                                        <div className="details" key={index}>
                                                            <Image
                                                                src={item.img}
                                                                alt="Question mark icon"
                                                                className="about-img"
                                                            />
                                                            <div>
                                                                <h5>{item.title}</h5>
                                                                <p>{item.details}.</p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </Box>
                                        </About>
                                    </Box>

                                    <Box id="summary" scrollMarginTop={"150px"}>

                                            <Box my={"1.5rem"}>
                                                {analyticsConsultingSummary.map((item, index) => (
                                                    <Box
                                                        mb="4.5rem"
                                                        width={"100%"}
                                                        key={index}
                                                        id={item.id}
                                                        scrollMarginTop={"150px"}
                                                    >
                                                        <Text
                                                            fontWeight="400"
                                                            fontSize={{ base: "14px", lg: "18px" }}
                                                            lineHeight="20px"
                                                            color={"#636363"}
                                                            textTransform={"uppercase"}
                                                        >
                                                            summary
                                                        </Text>
                                                        <Text
                                                            fontWeight="700"
                                                            fontSize={{ base: "16px", lg: "28px" }}
                                                            textTransform={"capitalize"}
                                                        >
                                                            Take a Moment to Know{" "}
                                                            <span style={{ color: "#E9000E" }}>Tanta Innovative</span>{" "}
                                                            Better
                                                        </Text>
                                                        <div
                                                            style={{
                                                                width: "130px",
                                                                height: "4px",
                                                                background: "#ff0000",
                                                            }}
                                                        ></div>
                                                        <Tabs size="md" variant="enclosed" mt={"2rem"}>
                                                            <TabList borderColor={"#B60E09"}>
                                                                {item.cards.map((item, index) => (
                                                                    <Tab
                                                                        padding={{ base: "8px 18px", lg: "16px 24px" }}
                                                                        mr={{ base: "0px", lg: "4rem" }}
                                                                        _selected={{
                                                                            color: "white",
                                                                            background: "#AE0000",
                                                                            boxShadow: "0px 2px 4px rgba(165, 163, 174, 0.3)",
                                                                            borderRadius: "10px 10px 0px 0px",
                                                                        }}
                                                                        key={index}
                                                                    >
                                                                        {item.title}
                                                                    </Tab>
                                                                ))}
                                                            </TabList>
                                                            <TabPanels>
                                                                {item.cards.map((item, index) => (
                                                                    <TabPanel key={index}>
                                                                        <Text
                                                                            fontWeight="700"
                                                                            fontSize={{ base: "16px", lg: "18px" }}
                                                                            lineHeight="170%"
                                                                            my={"1rem"}
                                                                        >
                                                                            {item.title}
                                                                        </Text>
                                                                        <Text
                                                                            fontWeight="400"
                                                                            fontSize={{ base: "16px", lg: "18px" }}
                                                                            lineHeight="170%"
                                                                        >
                                                                            {item.text}
                                                                        </Text>

                                                                        <List spacing={2}   mt={"1rem"}>
                                                                            {item.items && Array.isArray(item.items) && item.items.map((item, index) => {
                                                                                return (
                                                                                    <ListItem pl={4}
                                                                                              key={"index"}
                                                                                    >
                                                                                        <Flex flexGrow={"1"} >
                                                                                            <ListIcon as={IoIosCheckmark} color='green' fontSize={"1.5rem"} mt={"0.2rem"}/>
                                                                                            <Text>
                                                                                                {item}
                                                                                            </Text>
                                                                                        </Flex>
                                                                                    </ListItem>
                                                                                );
                                                                            })}
                                                                        </List>

                                                                        <Link
                                                                            href={{
                                                                                pathname: appRoutes.contactUs,
                                                                                query: {service: "services/it-outsourcing"},
                                                                            }}
                                                                            service="services/it-outsourcing"
                                                                            className="request-services"
                                                                        >

                                                                            <Button
                                                                                fontWeight="500"
                                                                                fontSize={{ base: "14px", lg: "16px" }}
                                                                                mt={"2rem"}
                                                                                lineHeight="24px"
                                                                                bg={"#CE0000"}
                                                                                color={"#FFFFFF"}
                                                                                variant="solid"
                                                                            >
                                                                                Get Started
                                                                            </Button>
                                                                        </Link>
                                                                    </TabPanel>
                                                                ))}
                                                            </TabPanels>
                                                        </Tabs>
                                                    </Box>
                                                ))}
                                            </Box>
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </Container>
                </Wrapper>
            </Consulting>
        </>
    );
}

ItConsulting.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
};
export default ItConsulting;

export const Consulting = styled.div`
  background-image: url(${BgImage.src});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  bottom: 3rem;
  margin-top: 6.5rem;
`;

export const Wrapper = styled.div`
  //margin: 2rem;

  ${breakpoints.md} {
    .side-bar {
      display: none;
    }

    .about-box {
      padding-left: 0;
      margin: 0 2rem;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 5rem;
  margin-bottom: 5rem;

  ${breakpoints.lg} {
    margin-top: 3rem;
    margin-bottom: 0;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: #636363;
    margin-top: 2rem;

    ${breakpoints.lg} {
      margin-top: 1rem;
    }

    ${breakpoints.md} {
      display: none;
    }
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #0c0c0c;
    text-transform: uppercase;

    ${breakpoints.lg} {
      font-size: 1.2rem;
    }

    ${breakpoints.md} {
      margin-top: 1.5rem;
      font-size: 1.4rem;
    }
  }

  div {
    width: 55px;
    height: 3px;
    background-color: #e9000e;
    margin-bottom: 0.5rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  gap: 1rem;

  width: 100%;
  border-bottom: 1px solid #e5e5e5;

  ${breakpoints.lg} {
    .hero-img {
      width: 45%;
    }
  }

  @media (max-width: 820px) {
    flex-direction: column-reverse;
    gap: 0;

    .hero-img {
      width: 50%;
      height: 50%;
      margin: 0 auto;
      padding: 2rem 0;
    }
  }

  ${breakpoints.md} {
    .hero-img {
      padding-top: 1rem;
    }
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  width: 50%;

  @media (max-width: 820px) {
    width: 100%;
  }

  ${breakpoints.md} {
  }

  h1 {
    position: relative;
    box-sizing: border-box;
    margin-left: 2rem;
    font-size: 2.4rem;
    font-weight: 700;
    margin-top: 0;
    padding-top: 0;
    color: #0c0c0c;

    ${breakpoints.lg} {
      font-size: 1.7rem;
    }

      /* ${breakpoints.md} {
      font-size: 0.7rem;
    } */

    @media (max-width: 820px) {
      font-size: 1.5rem;
      font-weight: 500;
    }

    &::before {
      position: absolute;
      content: "";
      top: -3px;
      left: -30px;
      height: 100%;
      width: 3px;
      background: linear-gradient(to bottom, red 30%, white, white);
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
      white);
    }
  }

  p {
    font-size: 1.4rem;
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
    min-width: 100px;

    ${breakpoints.lg} {
      font-size: 0.7rem;
      padding: 0.5rem 1.5rem;
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

const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 0;

  div {
    margin-block: 1rem;

    h2 {
      font-size: 18px;
      font-weight: 400;
      color: #636363;
      text-transform: uppercase;

      ${breakpoints.lg} {
        font-size: 1rem;
      }
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 500;
      color: #414141;
      width: 90%;

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
  }

  .details {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;

    ${breakpoints.lg} {
      gap: 0.5rem;
    }

    .about-img {
      width: 50px;
      height: 50px;

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
      padding: 0.2rem 0;
      padding-top: 1rem;

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
`;

const Services = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 7rem;
  margin-bottom: 1rem;

  ${breakpoints.lg} {
    padding-top: 4rem;
  }

  .services {
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
      margin-bottom: 0.5rem;
    }

    span {
      color: #e9000e;
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
`;

const CardContainer = styled.div`
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
    width: 70px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    text-align: center;

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

      ${breakpoints.sm} {
        font-size: 0.8rem;
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
        font-size: 0.9rem;
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
      font-size: 18px;
      font-weight: 400;
      color: #2a2a2a;

      ${breakpoints.lg} {
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
  scroll-margin-top: 150px;
  padding: 0 1rem;

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
  margin-bottom: 1rem;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
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
    font-size: 1rem;
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

const Techniques = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 3rem;
  margin-bottom: 1rem;

  ${breakpoints.lg} {
    padding-top: 4rem;
  }

  .techniques {
    margin-bottom: 1rem;

    h3 {
      font-size: 30px;
      font-weight: 700;
      color: #414141;

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
      margin-bottom: 0.5rem;
    }
  }
`;

const TechContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;

  ${breakpoints.lg} {
    gap: 1rem;
  }

  ${breakpoints.md} {
    gap: 0.5rem;
  }
`;

const TechCard = styled.div`
  width: 45%;
  margin-bottom: 1rem;

  transition: all 0.2s ease-in-out;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

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

  .title {
    font-size: 1.1rem;
    font-weight: 400;
    color: #b60e09;
    margin-bottom: 1rem;
    text-decoration-line: underline;
    padding-top: 10px;
    text-transform: capitalize;

    @media (max-width: 1200px) {
      font-size: 1rem;
    }

    ${breakpoints.lg} {
      font-size: 1rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 14px;
      font-weight: 400;
      color: #303030;
      margin-bottom: 0.5rem;
      text-align: left;

      .icon {
        color: #22ae16;
      }
    }
  }
`;


