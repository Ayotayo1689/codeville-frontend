import HeaderOne from "../../components/HeaderOne";
import Image from 'next/image';
import Link from "next/link";
import React, {useState} from "react";
import {Box, Container, Flex, Heading, List, ListIcon, ListItem, Text,} from "@chakra-ui/react";
import {mainBarData, services, sideBarData,} from "./data";

// images and icons are imported here
import {image1, image2, image3,} from '../../../public/assets/applications'
import {MdKeyboardArrowRight, MdSquare} from 'react-icons/md'
import ServicesForm from "../servicesForm/servicesForm";
import {task} from "../../../public/assets/testing-qa";
import TantaTestimonial from "../tantaTestimonials";
import ApplicationDevelopmentCard from "./applicationDevelopmentCard";
import ApplicationManagementCard from "./applicationManagementCard";
import ApplicationIntergrationCard from "./applicationIntergrationCard";
import appRoutes from "../../utils/appRoutes";
import HandpickedProject from "@/components/dataAnalytics/handpickedProject";

const ApplicationService = ({testimonials, cases }) => {
    const [activeLink, setActiveLink] = useState({});
    return (
        <>
            <Box minHeight={"100vh"} mt={"5rem"} overflowX={'hidden'}>
                <HeaderOne heading={"Services"} title={"Comprehensive Application Services"}/>
                <Container maxW={"7xl"} px={{lg: "5rem", "2xl": "0.4rem"}}>
                    <Flex
                        mb={'1rem'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        flexDir={{base: 'column', md: 'row'}}
                        gap={"1rem"}
                        p={" 1rem 2rem"}
                    >
                        <Image src={image1} alt='svg image'/>
                        <Image src={image2} alt='svg image'/>
                    </Flex>
                    <Box mb={"2rem"}>
                    </Box>

                    <Flex gap={"3rem"} justify={"center"} align={{base: 'center', lg: 'start'}}
                          flexDir={{base: 'column', lg: 'row'}} mb={"7rem"} mt={"7rem"} px={'1rem'}>
                        <Flex
                            flexDir="column"
                            boxShadow={"lg"}
                            height={"fit-content"}
                            top={'10rem'}
                            pb={"1rem"}
                            borderBottom={"lg"}
                            width={{base: '100%', lg: "25%"}}
                            zIndex={'999'}
                            position={{base: '', lg: "sticky"}}
                            overflowY="scroll"
                            display={{base: 'none', lg: 'flex'}}
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
                                background="radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
                            >
                                Contents
                            </Text>
                            <Box px={"1rem"}>
                                {sideBarData.map((item, index) => {
                                    return (
                                        <Flex
                                            paddingInline={".4rem"}
                                            justifyContent={"space-between"}
                                            key={index}
                                            p={".5rem"}
                                            cursor={'pointer'}
                                        >
                                            <Link fontSize={"lg"} fontWeight={"normal"}
                                                  onClick={() => {
                                                      setActiveLink({[item.link]: true});
                                                  }}
                                                  style={{
                                                      color: activeLink[item.link] ? "red" : "",
                                                      fontSize: "20px",
                                                      fontWeight: "400",
                                                      cursor: "pointer",
                                                      width: "100%",
                                                  }}
                                                  href={item.link}
                                            >
                                                {item.title}
                                            </Link>

                                            <MdKeyboardArrowRight size={"2rem"}/>
                                        </Flex>
                                    );
                                })}
                            </Box>
                        </Flex>
                        <Box width={{base: '100%', lg: '60%'}}>
                            <Flex borderRadius={'6px'} flexDir={'column'} w='100%'>
                                <Heading
                                    fontWeight='700'
                                    fontSize={{base: "1.2rem", lg: "1.7rem"}}
                                    lineHeight='30px'
                                    // textAlign={{base: "center", lg: "unset"}}
                                >
                                    Maximize Enterprise
                                    Application Profitability
                                </Heading>
                                <div style={{width: '130px', height: '4px', background: '#D80808', marginTop: ".5rem"}}></div>
                                <Text fontWeight='400' fontSize={{base: "1rem", lg: "1.4rem"}} lineHeight='170%' my='15px'>Application services
                                    include App Development, Support, Cloud Migration, Modernization, Integration,
                                    Security Management, and more.</Text>
                                <Link href={appRoutes.services["cost-calculator"]} style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '260px',
                                    height: '44px',
                                    background: '#E9000E',
                                    color: '#fff',
                                    borderRadius: '8px',
                                    fontWeight: '500',
                                    fontSize: '16px',
                                    lineHeight: '24px'
                                }}>Specify your preferences</Link>
                            </Flex>

                            <Flex
                                direction={"column"}
                                paddingInline={"2rem"}
                                textAlign={"center"}
                                gap={"2rem"}
                                my={"4rem"}
                            >
                                <Image src={image3} alt='image'/>
                            </Flex>

                            {/* =================  Application Development Section ================= */}
                            <ApplicationDevelopmentCard />

                            {/* =================  Application Management Section ================= */}
                            <ApplicationManagementCard />

                            {/* =================  Application Intergration Section ================= */}
                            <ApplicationIntergrationCard />

                            {/* ===============  Application Management Section ================== */}
                            <Box mb='4.5rem'>
                                {mainBarData.slice(3, 5).map((item, index) => (
                                    <Box mb='4.5rem' width={'100%'} key={index} id={item.id} scrollMarginTop={"150px"}>
                                        <Text fontWeight='700' fontSize={{base: '20px', lg: '28px'}} lineHeight='70px'
                                              textTransform={'capitalize'}>{item.title}</Text>
                                        {item.text.map((child, index) => (
                                            <Text fontWeight='400' fontSize={{base: '16px', lg: '20px'}}
                                                  lineHeight='170%' my='15px' key={index}>{child}</Text>

                                        ))}

                                        <Box>
                                            {item.lists.map((list, key) => {
                                                return (
                                                    <List key={key}>
                                                        <ListItem display={'inline-flex'} fontWeight='400'
                                                                  fontSize={{base: '14px', lg: '18px'}}
                                                                  lineHeight='170%' my={'15px'}>
                                                            <ListIcon
                                                                as={MdSquare}
                                                                color="red.500"
                                                                fontSize={"15px"}
                                                                mt={"0.5rem"}
                                                            />{" "}
                                                            {' '}
                                                            {list}
                                                        </ListItem>
                                                    </List>
                                                )
                                            })}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                            {/* ============== Testimonial Section ============  */}
                            <Box mb='4.5rem' id={"testimonials"}
                                 scrollMarginTop={"150px"}>

                                {/* testimonial card */}
                                <TantaTestimonial testimonials={testimonials} />
                            </Box>


                            {/* ============== Selected project section =========== */}
                            <Box mb='4.5rem' id={"projects"} scrollMarginTop={"150px"}>
                                <Text fontWeight='700' fontSize='28px' lineHeight='70px'>Selected Projects</Text>
                                <HandpickedProject cases={cases}/>
                            </Box>

                            {/* ======== All Applications Services section ======= */}
                            <Box mb='2rem' id={"services"} scrollMarginTop={"150px"}>
                                <Text fontWeight='700' fontSize='28px' lineHeight='70px'>All Applications
                                    Services</Text>
                                <Box display={'flex'} flexDir={{base: 'column', md: 'row', lg: 'row'}}
                                     justifyContent={'center'}>
                                    {services.map((object, index) => {
                                        return (
                                            <Box key={index} mx={'2rem'} w={{ base: '100%', lg: '30%'}} mt={{base: '2rem', md: '2rem'}}>
                                                <Text fontWeight='500' fontSize='20px' lineHeight='130.5%'
                                                      mb={'13px'}>{object?.title}</Text>
                                                <div style={{
                                                    width: '220px',
                                                    height: '4px',
                                                    background: '#D80808',
                                                    marginBottom: '1rem'
                                                }}></div>

                                                {object?.subItem.map((item, index) => (
                                                    <List key={index}>
                                                        <ListItem my={'9px'}>{item}</ListItem>
                                                    </List>
                                                ))}
                                            </Box>
                                        )
                                    })}
                                </Box>
                            </Box>

                        </Box>
                    </Flex>
                    {/* ========= become an agent section ====== */}
                    <Flex gap={"4rem"} direction={{base: "column", lg: "row"}}
                          justifyContent={{base: 'center', md: 'center'}} alignItems={{base: 'center', md: 'center'}}
                          w={"100%"} p={{base: "1rem", lg: "0 90px"}} my={"2.5rem"}>
                        {/* ========= Get in touch ========= */}
                        <Flex w={{base: "100%", md: "50%"}}>
                            <Flex direction={"column"} p={{lg: " 0 2rem"}} borderRight={"10px solid #FFFFFF"}>
                                <Box borderLeft={"6px solid #E9000E"} p={".5rem 2rem"}>
                                    <Text
                                        as="h2"
                                        fontSize={{base: "24px", lg: "34px"}}
                                        w={"100%"}
                                        fontWeight={"700"} lineHeight={'40px'}>
                                        Maximize Enterprise
                                        <Text color={"red"}>Application Profitability!</Text>
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src={task} alt='task image' width={500} height={500}/>
                                </Box>
                            </Flex>
                            <Box width={"20px"} h={"100%"} bg={"#FFFFFF"}
                                 boxShadow={"11px 0px 29px rgba(0, 0, 0, 0.25)"}
                            >
                                {" "}
                            </Box>
                        </Flex>
                        {/* ========= Agent Form========= */}
                        <Box w={{base: "100%", md: "50%"}}>
                            <Text fontWeight='400' fontSize={{base: '18px', lg: '22px'}} lineHeight='170%' mb='1rem'>Feel
                                free to briefly describe your Application Service needs for our team to promptly get
                                back to you.
                            </Text>
                            <ServicesForm services='Application Services'/>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    );
};

export default ApplicationService;
