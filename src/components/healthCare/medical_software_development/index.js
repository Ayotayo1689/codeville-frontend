import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Chat from "../../../../public/assets/medicalSoftwarePage/chat.svg";
import StartProject from "../../../../public/assets/medicalSoftwarePage/startProject.svg";
import heroTwo from "../../../../public/assets/medicalSoftwarePage/heroTwo.svg";
import heroOne from "../../../../public/assets/medicalSoftwarePage/hero.svg";
// import BannerImg from "../../../../public/assets/medicalSoftwarePage/medicalBannerimg.svg";
import {developmentCost, sampleCost, sideBarData, timeFrames} from "./data";
import {MdKeyboardArrowRight} from "react-icons/md";
import {
    Box, Button,
    Container,
    Flex,
    List,
    ListIcon,
    ListItem,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text
} from "@chakra-ui/react";
import ContactUs from "../../contactUs";
import HeadingTwo from "./heading";
import styled from "styled-components";
import WhyOutSource from "./whyOutSource";
import Customers from "./customers";
import Services from "./services";
import AdvancedTech from "./advancedTech";
import Approach from "./approach";
import Technologies from "../ManagedItServices/Technologies";
import {technologies} from "../ManagedItServices/data";
import WhyTanta from "./whyTanta";
import Banner from "../itConsultingAndAssessment/Banner"
import ManProgrammer from "../../../../public/assets/medicalSoftwarePage/manProgrammer.svg";
import Programming from "../../../../public/assets/healthcare/service/technoligies_we_use/languages.svg";
import Platform from "../../../../public/assets/healthcare/service/technoligies_we_use/platform.svg";
import Libaries from "../../../../public/assets/healthcare/service/technoligies_we_use/libaries.svg";
import SQL from "../../../../public/assets/healthcare/service/technoligies_we_use/sql.svg";
import NOSQL from "../../../../public/assets/healthcare/service/technoligies_we_use/nosql.svg";
import AWS from "../../../../public/assets/healthcare/service/technoligies_we_use/aws.svg";
import AZURE from "../../../../public/assets/healthcare/service/technoligies_we_use/azure.svg";
import CLOUD from "../../../../public/assets/healthcare/service/technoligies_we_use/cloud.svg";
import Clouds from "../../../../public/assets/healthcare/service/technoligies_we_use/clouds.svg";
import Cloudservices from "../../../../public/assets/healthcare/service/technoligies_we_use/clous-services.svg";


import Testimonial from "../../testimonial";
import Head from "next/head";
import TantaTestimonial from "../../tantaTestimonials";
import {analyticsConsultingSummary} from "../../dataAnalytics/analyticsConsulting/data";
import {IoIosCheckmark} from "react-icons/io";
import appRoutes from "../../../utils/appRoutes";


const MedicalsoftwarePage = ({testimonials}) => {


    const [activeLink, setActiveLink] = useState({});


    return (
        <>
            <Box maxWidth={{base:"100%",md:"100%"}} px={{ lg: "10rem", base: "2rem" }} m={{base:"0 auto",md:"0"}} bg={{ base: "#F7F2FA", lg: "white" }}>
                <Flex mt={{base:"150px",md:"140px"}} pt={"20px"}  h={{base:"fit-content",md:"fit-content",lg:"420px"}} flexDir={{base:"column",md:"row"}} justifyContent={"center"}>
                    <Flex   gap={"20px"} flexDirection={"column"} justifyContent={"center"} maxWidth={"550px"} w={"100%"}>
                        <Text textAlign={{base:"center",md:"left"}} m={{base:"0 auto",md:"0"}}  fontSize={{base:"18px",md:"30px"}} fontWeight={"700"} maxWidth={"330px"}>Healthcare software Development
                            service</Text>
                        <Flex w={{base:"90%"}} m={"0 auto"}   display={{md:"flex",lg:"none"}} >
                            <Image style={{width:"fit-content"}} src={heroOne} alt={"hero"}/>
                            {/*<Image style={{width:"fit-content"}} src={heroTwo} alt={"hero"}/>*/}
                        </Flex>

                        <Text fontSize={{base:"15px",md:"24px"}} textAlign={{base:"center",md:"left"}} fontWeight={"700"} maxWidth={"500px"}>Harness the Power of Innovations and
                            Mitigate Technology Risks in Healthcare</Text>
                        <Text display={{base:"none",md:"block"}} fontSize={"19px"} fontWeight={"400"} maxWidth={"530px"}>Patient engagement solutions help
                            interest patients in their health management and let health organizations qualify for Meaningful
                            Use</Text>
                        <Flex gap={"30px"} flexWrap={"wrap"} justifyContent={{base:"center",md:"flex-start"}}>

                            <Link
                                  href={{
                                      pathname: "/contact-us",
                                      query: {service: "industries/health-care/medical_software_development"},
                                  }}
                                  service="healthcare_software"
                                  className="request-services"
                            >
                                <Btn style={{
                                    // padding: "10px 30px",
                                    background: "none",
                                    border: "1px solid red",
                                    color: "red",
                                    margin:"0 auto",
                                    fontSize: "100%",
                                    minWidth:"100px"
                                }}>Schedule a meeting </Btn>
                            </Link>
                            <Link
                                href={{
                                    pathname: "/services/cost-calculator",
                                    query: {service: "healthcare-5"},
                                }}
                                className="quote"
                            >
                                <Btn style={{fontSize: "100%", margin:"0 auto",}}>get a quote</Btn>
                            </Link>
                        </Flex>

                    </Flex>
                    <Flex display={{base:"none",md:"none",lg:"flex"}} >
                        <Image src={heroOne} alt={"hero"}/>
                        <Image src={heroTwo} alt={"hero"}/>
                    </Flex>

                </Flex>
                <Box  w={"80%"} bg={"lightgrey"} m={"0 auto"}  boxShadow={"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;"} h={"2px"}></Box>
                <Box mt={{base:"30px",md:"5rem"}} minHeight={"100vh"}>
                    <Container  maxW={"7xl"} px={{lg: "0rem", base: "0rem"}}>

                        <Flex ml={{base:"0",md:"30px"}} gap={"5rem"} justify={"center"} mb={"0"} mt={{base:"0px",md:"4rem"}}>
                            <Flex
                                display={{lg: "block", base: "none"}}
                                flexDir="column"
                                boxShadow={"lg"}
                                height={"fit-content"}
                                // flex={1}
                                width={{base: '100%', lg: "22%"}}
                                position={{base: '', lg: "sticky"}}
                                top="10rem"
                                pb={"1rem"}
                                borderBottom={"lg"}
                            >
                                {/* sticky sidebar */}
                                <Text
                                    as="h2"
                                    fontSize={"2xl"}
                                    fontWeight={"semibold"}
                                    mb={"1rem"}
                                    color={"white"}
                                    textAlign={"center"}
                                    paddingBlock={".5rem"}
                                    background={"radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"}
                                >
                                    CONTENTS
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
                                                        setActiveLink({[item.id]: true});
                                                    }}
                                                    style={{
                                                        color: activeLink[item.id] ? "red" : "",
                                                        fontSize: "18px",
                                                        fontWeight: "400",
                                                        cursor: "pointer",
                                                        width: "100%",
                                                    }}
                                                    href={`#${item.id}`}
                                                >
                                                    {item.title}
                                                </Link>

                                                <MdKeyboardArrowRight
                                                    cursor={"pointer"}
                                                    size={"2rem"}
                                                    style={{marginLeft: "47px"}}
                                                />
                                            </Flex>
                                        );
                                    })}
                                </Box>
                            </Flex>
                            <Box width={{base: '100%', lg: '70%'}}>
                                {/* specify your preference */}
                                <Box
                                    width={{base: "100%", lg: "100%"}}
                                    height={{lg: "fit-content", base: "fit-content"}}

                                >
                                    <Flex
                                        justifyContent={"center"}
                                        borderRadius={"6px"}
                                        flexDir={"column"}
                                        w="100%"
                                    >

                                        <Text
                                            display={{base:"none",md:"none",lg:"block"}}
                                            id={"services"}
                                            scrollMarginTop={"150px"}
                                            fontWeight="400"
                                            fontSize={{lg: "23px", base: "16px"}}
                                            // my="20px"
                                            lineHeight={"36px"}
                                        >
                                            At Tanta, Healthcare software development is needed to create medical apps for
                                            care delivery and healthcare process optimization. Within 2–4 months, Tanta’s
                                            capable developers are ready to deliver an efficient and user-friendly software
                                            MVP in line with HIPAA, FDA/CE, and ISO 13485 requirements.
                                        </Text>

                                    </Flex>
                                </Box>
                                <Box id={"about"} display={{base:"none",md:"none",lg:"block"}}
                                     scrollMarginTop={"150px"}>
                                    <Banner/>
                                </Box>

                                {/*<Box mt={"20px"} w={"100%"} border={"2px solid red"} height={"500px"}>*/}

                                {/*</Box>*/}
                                <Box id={"sucess"} display={{base:"none",md:"none",lg:"block"}}
                                     scrollMarginTop={"150px"}>
                                    <WhyOutSource/>
                                </Box>

                                <Box id={"benefits"}
                                     scrollMarginTop={"150px"}>
                                    <Customers/>
                                </Box>


                                <Box id={"SWD"}
                                     scrollMarginTop={"150px"}>
                                    <Services/>
                                </Box>


                                <Box display={{base:"none",md:"block"}} id={"testimonials"} scrollMarginTop={"150px"} mt={"50px"}>
                                    <TantaTestimonial testimonials={testimonials} />
                                </Box>
                                {/*<Testimonials/>*/}
                                {/*<Testimonial/>*/}


                                <Box display={{base:"none",md:"block"}}>
                                    <AdvancedTech/>
                                </Box>


                                <Box display={{base:"none",md:"block"}} id={"development_process"}
                                     scrollMarginTop={"150px"}>
                                    <Approach/>
                                </Box>

                                <Text display={{base:"none",md:"block"}} fontWeight={"800"}
                                      fontSize={"30px"}><Span>Need More </Span> Proof Of Our Competence? <br/>
                                    Don’t Hesitate to <Span>Contact Us!</Span></Text>


                                <Box display={{base:"none",md:"block"}} mt={"30px"} p={"15px"} bg={"#FDE6E7"}>
                                    <Text color={"#565656"} m={"0 auto"} w={"100%"}
                                          maxW={"550px"}
                                          textAlign={"center"}
                                          fontWeight={"700"}
                                          fontSize={"32px"}>
                                        NEED AN <Span>EXPERT</Span> FOR YOUR IT OUTSOURCING <Span>PROJECT</Span>?
                                    </Text>
                                    <Box m={"10px auto"} w={"100px"} ></Box>
                                    <Flex alignItems={"start"} justifyContent={"center"}>
                                        <Box w={"410px"}>
                                            <Text
                                                mb={"20px"}
                                                fontWeight={"700"}
                                                fontSize={"20px"} textAlign={"center"}>
                                                Tanta Innovative will help you build accurate and transparent analytics and
                                                reporting to eliminate the guesswork
                                                out of your business processes and identify new profit opportunities
                                            </Text>
                                            <Link
                                                href={{
                                                    pathname: "/contact-us",
                                                    query: {service: "industries/health-care/medical_software_development"},
                                                }}
                                                service="healthcare_software"
                                                className="request-services"
                                            >
                                                <Btns>
                                                    Request IT Outsourcing Service
                                                </Btns> </Link>

                                        </Box>
                                        <Image src={ManProgrammer} alt={"imaga"}/>
                                    </Flex>
                                </Box>


                                <Box display={{base:"none",md:"block"}}>
                                    <Text fontSize={"30px"} fontWeight={"700"} mt={"30px"}>
                                        Technologies We Use
                                    </Text>

                                    <Box w={"130px"} h={"3px"} mb={"20px"} bg={"red"}></Box>
                                    <Box mb={"30px"} bg={"#FDE6E7"} p={"30px 15px"}>
                                        <Box>
                                            <Text mt={"15px"} fontWeight={"700"} fontSize={"20px"}>
                                                Programming languages
                                            </Text>
                                            <Image src={Programming} alt={"PICS"}/>
                                        </Box>
                                        <Flex gap={"20px"}>
                                            <Box>
                                                <Text fontWeight={"700"} mt={"15px"} fontSize={"20px"}>
                                                    Libraries and frameworks
                                                </Text>
                                                <Image src={Libaries} alt={"PICS"}/>
                                            </Box>
                                            <Box>
                                                <Text mt={"15px"} fontWeight={"700"} fontSize={"20px"}>
                                                    Platforms
                                                </Text>
                                                <Image src={Platform} alt={"PICS"}/>
                                            </Box>
                                        </Flex>
                                        <Text mt={"25px"} fontWeight={"700"} fontSize={"20px"}>
                                            Databases / data storages
                                        </Text>
                                        <Flex gap={"20px"}>
                                            <Box>
                                                <Text fontWeight={"500"} fontSize={"14px"}>
                                                    SQL
                                                </Text>
                                                <Image src={SQL} alt={"PICS"}/>
                                            </Box>
                                            <Box>
                                                <Text fontWeight={"500"} fontSize={"14px"}>
                                                    NOSQL
                                                </Text>
                                                <Image src={NOSQL} alt={"PICS"}/>
                                            </Box>
                                        </Flex>
                                        <Text mt={"25px"} fontWeight={"700"} fontSize={"20px"}>
                                            Cloud databases, warehouses, and storage
                                        </Text>
                                        <Flex gap={"20px"} flexWrap={"wrap"}>
                                            <Box>
                                                <Text fontWeight={"500"} fontSize={"14px"}>
                                                    AWS
                                                </Text>
                                                <Image src={AWS} alt={"PICS"}/>
                                            </Box>
                                            <Box>
                                                <Text fontWeight={"500"} fontSize={"14px"}>
                                                    AZURE
                                                </Text>
                                                <Image style={{maxWidth:"600px"}} src={AZURE} alt={"PICS"}/>
                                            </Box>
                                            <Box>
                                                <Text fontWeight={"500"} fontSize={"14px"}>
                                                    GOOGLE CLOUD PLATFORM
                                                </Text>
                                                <Image style={{maxWidth:"90%"}} src={CLOUD} alt={"PICS"}/>
                                            </Box>
                                        </Flex>
                                        <Box>
                                            <Text mt={"25px"} fontWeight={"700"} fontSize={"20px"}>
                                                Clouds
                                            </Text>
                                            <Image src={Clouds} alt={"PICS"}/>
                                        </Box>
                                        <Box>
                                            <Text mt={"25px"} fontWeight={"700"} fontSize={"20px"}>
                                                Cloud services
                                            </Text>
                                            <Image src={Cloudservices} alt={"PICS"}/>
                                        </Box>
                                    </Box>
                                </Box>
                                <WhyTanta/>
                                <Box w={"100%"} mt={"20px"}>
                                    <Text fontWeight={"700"} fontSize={{base:"16px",md:"29px"}} maxWidth={"800px"}>Healthcare Software
                                        Development Costs and Timelines</Text>
                                    <Box maxWidth={"120px"} bg={"red"} height={"4px"} mb={"20px"}></Box>
                                </Box>
                                {developmentCost.map((detail, index) => (
                                    <Flex key={index} m={{base:"0px 0",md:" 0 0 13px 10px"}}>
                                        <Box m={"11px 20px 0 0"} bg={"red"} h={"6px"} w={"6px"} color={"white"}>H</Box>
                                        <Box lineHeight={"30px"} fontSize={{base:"15px",md:"18px"}}>{detail}</Box>
                                    </Flex>
                                ))}
                                <Box display={{base:"block",md:"none"}} scrollMarginTop={"150px"} mt={"50px"}>
                                    <TantaTestimonial testimonials={testimonials} />
                                </Box>
                                <Box  display={{base:"block",md:"none"}} id="" scrollMarginTop={"120px"}>
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
                                                    fontSize={{ base:"15px", lg: "28px" }}
                                                    // lineHeight="70px"
                                                    textTransform={"capitalize"}
                                                >
                                                    Take a Moment to Know{" "}
                                                    <span style={{ color: "#E9000E" }}>
														Tanta Innovative
													</span>{" "}
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
                                                                fontSize={{base:"14px",md:"18px"}}
                                                                padding={{ base: "8px 10px", lg: "16px 24px" }}
                                                                mr={{ base: "0px", lg: "4rem" }}
                                                                _selected={{
                                                                    color: "white",
                                                                    background: "#AE0000",
                                                                    boxShadow:
                                                                        "0px 2px 4px rgba(165, 163, 174, 0.3)",
                                                                    borderRadius: "10px 10px 0px 0px",
                                                                }}
                                                                key={index}
                                                            >
                                                                {item.title}
                                                            </Tab>
                                                        ))}
                                                    </TabList>
                                                    <TabPanels fontSize={{base:"14px",md:"18px"}}>
                                                        {item.cards.map((item, index) => (
                                                            <TabPanel key={index}>
                                                                <Text
                                                                    fontWeight="700"
                                                                    // fontSize={{ base: "16px", lg: "18px" }}
                                                                    lineHeight="170%"
                                                                    my={"1rem"}
                                                                >
                                                                    {item.title}
                                                                </Text>
                                                                <Text
                                                                    fontWeight="400"
                                                                    // fontSize={{ base: "16px", lg: "18px" }}
                                                                    lineHeight="170%"
                                                                >
                                                                    {item.text}
                                                                </Text>

                                                                <List spacing={2} mt={"1rem"}>
                                                                    {item.items &&
                                                                        Array.isArray(item.items) &&
                                                                        item.items.map((item, index) => {
                                                                            return (
                                                                                <ListItem pl={4} key={"index"}>
                                                                                    <Flex flexGrow={"1"}>
                                                                                        <ListIcon
                                                                                            as={IoIosCheckmark}
                                                                                            color="green"
                                                                                            fontSize={"1.5rem"}
                                                                                            mt={"0.2rem"}
                                                                                        />
                                                                                        <Text>{item}</Text>
                                                                                    </Flex>
                                                                                </ListItem>
                                                                            );
                                                                        })}
                                                                </List>

                                                                <Link
                                                                    href={{
                                                                        pathname: appRoutes.contactUs,
                                                                        query: {
                                                                            service:
                                                                                "services/it-consulting/big-data-consulting",
                                                                        },
                                                                    }}
                                                                    service="cyber_security"
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

                                <Box display={{base:"none",md:"block"}}>
                                    <HeadingTwo title={"Sample costs of popular healthcare solutions "}/>
                                    <Flex id={"pricing"} scrollMarginTop={"200px"} mb={"3rem"} alignItems={"center"}
                                          justifyContent={"center"} gap={"20px"} flexWrap={"wrap"} height={"fit-content"}>
                                        {sampleCost.map((detail, index) => (
                                            <SampleCostContainer key={index}>
                                                <Box
                                                    bg={"white"}
                                                    display={"flex"}
                                                    position={"relative"}
                                                    flexDir="column"
                                                    p={"10px"}
                                                    h={"95%"}
                                                    w={"100%"}
                                                    // justifyContent={"center"}
                                                    alignItems={"center"}
                                                    gap={"0.5rem"}>
                                                    <Image src={detail.img} alt={"icons"}/>
                                                    <Box textAlign={"center"} lineHeight={"30px"} fontSize={"17px"}
                                                         fontWeight={700}>{detail.price}</Box>
                                                    <Box w={"100%"} fontSize={"15px"}>{detail.details}</Box>
                                                </Box>
                                            </SampleCostContainer>
                                        ))}
                                        <Flex justifyContent={"space-between"} flexDirection={"column"} p={"20px 5px 20px 20px"}
                                              bg={"linear-gradient(90deg, #AC2121 0%, #E9000E 100%)"} flex={"1"}
                                              maxWidth={"560px"} h={"180px"} color={"white"}>
                                            <Box>
                                                <Bold>Need a tailored healthcare software cost estimation?</Bold>
                                                <Text fontSize={"14px"}>Just answer several simple questions prepared by our
                                                    consultants – it won’t take long. </Text>
                                            </Box>
                                            <Link
                                                href={{
                                                    pathname: "/services/cost-calculator",
                                                    query: {service: "healthcare-5"},
                                                }}
                                                className="quote"
                                            >
                                                <WhiteBtn>
                                                    Calculate my project cost
                                                </WhiteBtn>
                                            </Link>

                                        </Flex>
                                    </Flex>

                                </Box>
                                <Box display={{base:"none",md:"block"}}>
                                    <Box w={"100%"} mt={"40px"}>
                                        <Text fontWeight={"700"} fontSize={"29px"}>We deliver healthcare software in the
                                            following timeframes</Text>
                                        <Box maxWidth={"120px"} bg={"red"} height={"4px"} mb={"20px"}></Box>
                                    </Box>
                                    {timeFrames.map((detail, index) => (
                                        <Flex key={index} m={" 0 0 13px 10px"}>
                                            <Box m={"11px 20px 0 0"} bg={"red"} h={"6px"} w={"6px"} color={"white"}>H</Box>
                                            <Box lineHeight={"30px"}
                                                 fontSize={"18px"}>{detail.details}<SpanBold>{detail.span}</SpanBold></Box>
                                        </Flex>
                                    ))}

                                    <Box id={"faq"} scrollMarginTop={"130px"} mt={"30px"} position={"relative"}>
                                        <Box top={"-38px"} w={"100%"} mt={"40px"} position={"absolute"}>
                                            <Text fontWeight={"700"} maxWidth={"800px"} fontSize={"29px"}>Providing Answers to
                                                Common Inquiries about Healthcare
                                                IT Support</Text>
                                            <Box maxWidth={"120px"} bg={"red"} height={"4px"} mb={"20px"}></Box>
                                        </Box>
                                        <Image src={Chat} alt={"chats"}/>

                                    </Box>

                                    <Box w={"100%"} mt={"40px"}>
                                        <Text fontWeight={"700"} maxWidth={"800px"} fontSize={"29px"}>Start Your Healthcare
                                            Software Development Project! </Text>
                                        <Box maxWidth={"120px"} bg={"red"} height={"4px"} mb={"20px"}></Box>
                                    </Box>

                                    <Flex width={"100%"}>
                                        <Flex alignItems={"center"}>
                                            <Image src={StartProject} style={{height: "250px", width: "250px"}}
                                                   alt={"section image"}/>
                                            <Box ml={"30px"} fontSize={"16px"}> <Text m={"0 0 40px 0px"}
                                                                                      maxWidth={"850px"}> Being a custom medical
                                                and pharmaceutical software development company
                                                with 13 years of expertise, Tanta is ready to partner with you to design,
                                                implement or improve healthcare software and ensure its reliability and
                                                smooth performance. We will help you achieve your business goals, get ROI
                                                faster, and ensure quick user adoption.</Text>

                                                <Link
                                                    href={{
                                                        pathname: "/contact-us",
                                                        query: {service: "industries/health-care/medical_software_development"},
                                                    }}
                                                    service="healthcare_software"
                                                    className="request-services"
                                                >
                                                    <Btn style={{borderRadius: "0", padding: " 10px 40px"}}>START NOW</Btn>
                                                </Link>
                                            </Box>
                                        </Flex>
                                    </Flex>
                                </Box>
                            </Box>
                        </Flex>
                    </Container>
                </Box>

            </Box>
            <ContactUs subtitle='We’re here to support'/></>
    );
};

export default MedicalsoftwarePage


const Btn = styled.button`
  background: linear-gradient(90deg, #AC2121 0%, #E9000E 100%);
  color: #FFF;
 width: fit-content;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  
`
const SampleCostContainer = styled.div`
  width: 28%;
  min-width: 270px;
  height: 180px;
  background-clip: padding-box;
  display: flex;
  align-items: flex-end;
  border: 0.5px solid #DADFE3;
  background-image: linear-gradient(90deg, #AC2121 0%, #E9000E 100%);

`
const WhiteBtn = styled.button`
  background: #FDE6E7;
  padding: 10px 20px;
  color: black;
  font-weight: 600;
  font-size: 16px;
  width: fit-content;
`
const Bold = styled.div`
  font-weight: 700;

`
const SpanBold = styled.span`
  font-weight: bold;
`
const Span = styled.span`
  color: red;
`

const Btns = styled.button`
  width: 80%;
  padding: 10px 0;
  background: #F8B3B7;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  margin: 0 40px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
`


