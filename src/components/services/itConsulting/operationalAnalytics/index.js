import React from "react"
import HeaderOne from "../../../HeaderOne";
import {
    Box,
    Flex,
    Text,
    Container,
    Heading,
    chakra,
    Grid,
    OrderedList,
    ListItem,
    List, Tabs, TabList, Tab, TabPanels, TabPanel, ListIcon, Button,
} from "@chakra-ui/react";
import  hero from "../../../../../public/assets/operationalAnalysis/hero.png"
import HeroSection from "./heroSection";
import SideBar from "./sidebar";
import {costs, operationalSidebar, solution,} from "./data";
import Banner from "./banner";
import BannerImg from "../../../../../public/assets/operationalAnalysis/BannerImg.png"
import LogoMarquee from "../../../logoMarquee";
import TantaTestimonial from "../../../tantaTestimonials";
import {analyticsConsultingSummary} from "../../../dataAnalytics/analyticsConsulting/data";
import {IoIosCheckmark} from "react-icons/io";
import Link from "next/link";
import appRoutes from "../../../../utils/appRoutes";
import ArchitectureMobile from "./architectureMobile";
import AllConsultingServices from "../oilAndGas/allConsultingServices";



function OperationalAnalytics ({testimonials}) {
    return (
        <>
        <Box w={"100%"}>
                <HeaderOne heading={"SERVICES"}
                           title={<>
                               Operational Analytics  <Text as="span" color="#EB1A26">Consulting</Text></>}/>
                <Container  maxW={"7xl"} p={{base: "1rem", lg: "4rem"}}>

                    {/*******************Hero section***************************************/}
                    <HeroSection
                        title={"Operational Analytics"}
                        description={"For managers and operational staff (sales agents, equipment inspectors," +
                            " dispatchers, etc.), an operational analytics solution gathers data from operations management" +
                            " systems, supply chain management systems," +
                            " CRM, financial management systems, human resource management systems, and other systems. "}
                        requestBtn={"Schedule a meeting"}
                        quoteBtn={"get  a quote"}
                        pathname={"/contact-us"}
                        image={hero}
                    />
                    <Box borderTop={"1px solid rgba(0, 0, 0, 0.30)"}
                         boxShadow={" 0px 4px 10px 0px rgba(0, 0, 0, 0.50)"}
                         mb={"3rem"}
                         mt={"0.5rem"}
                    ></Box>


                    <Flex>

                        <SideBar title={"Operational Analytics"} sideData={operationalSidebar} minW={"22rem"}
                        />


                        <Box    w={{base: "100%", md: "70%", lg: "70%"}}
                                ml={{base: "0", md: "2rem", lg: "2rem"}}
                                id={"architecture"}  scrollMarginTop={"150px"}
                                overflow={{base: "hidden", md: "visible", lg: "visible"}}
                        >
                            <Box >
                                <Heading
                                    fontWeight="800"
                                    fontSize={{base: "15px", md: "24px", lg: "32px"}}
                                    color=" #414141"
                                    lineHeight={{lg: "140%", base: "150%"}}
                                    mb={"0.5rem"}
                                    w={"31rem"}
                                >
                                    Architecture for&nbsp;
                                    <chakra.span
                                        color="rgba(255, 0, 0, 1)"
                                        fontSize={{base: "15px", lg: "30px"}}
                                    >
                                        Operational Analytics Solution
                                    </chakra.span>
                                    {" "}
                                </Heading>
                                <div
                                    style={{
                                        width: "5rem",
                                        height: "2px",
                                        background: "rgba(255, 0, 0, 1)",
                                        marginBottom: " 2rem ",
                                    }}
                                ></div>

                                <Grid
                                    gridTemplateColumns={{
                                        base: "none",
                                        lg: "1fr 1fr",
                                        md: "1fr 1fr",
                                        sm: "none",
                                    }}
                                   gridGap={"3rem"}
                                   flexDir={{base: "column", lg: "row"}}
                                   display={{base: "none", md: "grid", lg: "grid"}}>
                                    {solution.map ((item, index) => {
                                        return(
                                            <Box
                                            key={index}
                                            height={"26.25rem"}
                                            width={{base: "none", md: "20rem", lg: "24.813rem"}}
                                            boxShadow={"0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)"}
                                            borderRadius={"20px"}
                                            p={"28px 18px 26px 30px"}
                                            >

                                                <Text fontWeight="700"
                                                      fontSize={{base: "20px", lg: "24px"}}
                                                      color=" #414141">
                                                    {item?.title}
                                                </Text>
                                                <div
                                                    style={{
                                                        width: "3.5rem",
                                                        height: "2px",
                                                        background: "rgba(255, 0, 0, 1)",
                                                        marginBottom: " 2rem ",
                                                       marginTop: "0.5rem"
                                                    }}
                                                ></div>

                                                <Text
                                                      fontSize={"16px"}
                                                      color=" #565656"
                                                >
                                                    {item?.details}
                                                </Text>

                                            </Box>
                                        )
                                    })}
                                </Grid>

                                <ArchitectureMobile/>

                                <Box >
                                    <Banner

                                        title1={"Get a Customized"}
                                        title2={"Operational Analytics Solution"}
                                        text={"To ensure the rapid distribution of analytics insights to target users (front-line employees, managers, business analysts, etc.), Tanta Innovatives data analytics professionals will assist you in designing and " +
                                            "developing a comprehensive operational analytics solution. APPLICATION OF OPERATIONAL ANALYTICS IS REQUIRED "}
                                       image={BannerImg}
                                    />
                                </Box>

                                <Box mt={"3rem"} id={"cost_element"}  scrollMarginTop={"150px"} display={{base: "none", md: "block", lg: "block"}}>
                                <Heading
                                    fontWeight="800"
                                    fontSize={{base: "20px", lg: "32px"}}
                                    color=" #414141"
                                    lineHeight={{lg: "140%", base: "150%"}}
                                    mb={"0.5rem"}

                                >
                                    Cost Elements and the Rewards of&nbsp;
                                    <chakra.span
                                        color="rgba(255, 0, 0, 1)"
                                        fontSize={{base: "20px", lg: "30px"}}
                                    >
                                        Implementing Operational Analytics
                                    </chakra.span>
                                    {" "}
                                </Heading>
                                <div
                                    style={{
                                        width: "5rem",
                                        height: "2px",
                                        background: "rgba(255, 0, 0, 1)",
                                        marginBottom: " 2rem ",

                                    }}
                                ></div>

                                    <Grid
                                        gridTemplateColumns={"1fr "}
                                        gridGap={"3rem"}
                                        display={{base: "none", md: "grid", lg: "grid"}}

                                    >
                                        {costs.map ((item, index) => {
                                            return(
                                                <Box
                                                    key={index}
                                                    width={{base: "none", md: "42rem", lg: "48.125rem"}}
                                                    boxShadow={"0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)"}
                                                    borderRadius={"20px"}
                                                    p={"28px 18px 26px 30px"}
                                                >

                                                    <Text fontWeight="700"
                                                          fontSize={{base: "20px", lg: "24px"}}
                                                          color=" #414141">
                                                        {item?.title}
                                                    </Text>
                                                    <div
                                                        style={{
                                                            width: "3.5rem",
                                                            height: "2px",
                                                            background: "rgba(255, 0, 0, 1)",
                                                            marginBottom: " 2rem ",
                                                            marginTop: "0.5rem"


                                                        }}
                                                    ></div>


                                                    <OrderedList  spacing={3} mt={"1rem"}>
                                                        {item.lists.map((item, index) => {
                                                            return (

                                                                    <ListItem key={index}>{item}</ListItem>

                                                            );
                                                        })}
                                                    </OrderedList>
                                                </Box>
                                            )
                                        })}

                                    </Grid>

                                </Box>

                                <Box id="reliable_partner" scrollMarginTop={"150px"} mt={"3rem"} display={{base: "none", md: "block", lg: "block"}}>
                                    <Heading
                                        fontWeight="700"
                                        fontSize={{base: "20px", lg: "30px"}}
                                        color=" #414141"
                                        lineHeight={{lg: "140%", base: "150%"}}
                                        mb={"0.5rem"}
                                        w={"37.563rem"}

                                    >
                                        What Makes &nbsp;
                                        <chakra.span
                                            color="#E9000E"
                                            fontSize={{base: "20px", lg: "30px"}}
                                        >
                                            Tanta Innovative
                                        </chakra.span>
                                        {" "}

                                        a Reliable Partner
                                    </Heading>
                                    <div
                                        style={{
                                            width: "3rem",
                                            height: "2px",
                                            background: "rgba(233, 0, 14, 1)",
                                            marginBottom: " 2rem ",

                                        }}
                                    ></div>
                                    <Text
                                        fontSize={"18px"}
                                        w={{base: "20rem",  md: "45rem", lg: "50.313rem"}}
                                        color={"#000"}
                                        mb={"2rem"}
                                        fontWeight={"400"}

                                    >Our belief is that with our technical expertise and IT Services,
                                        combined with your innovative vision, we can create tech systems
                                        that will help you scale up your business by making life easier for your
                                        audience.</Text>

                                </Box>

                                <Text
                                    fontWeight="400"
                                    fontSize={"14px"}
                                    letterSpacing={" 0.765px"}
                                    color=" #414141"
                                    display={{base: "block", md: "none", lg: "none"}}
                                    mt={"2rem"}
                                >
                                    OUR CUSTOMERS
                                </Text>
                                <Heading
                                    fontWeight="700"
                                    fontSize={{base: "20px", lg: "30px"}}
                                    color=" #414141"
                                    lineHeight={{lg: "140%", base: "150%"}}
                                    mb={"0.5rem"}
                                    w={"37.563rem"}
                                    display={{base: "block", md: "none", lg: "none"}}
                                >
                                    Valued Customer Base

                                </Heading>
                                <Box
                                    display={{base: "block", md: "none", lg: "none"}}
                                    style={{
                                        width: "3rem",
                                        height: "2px",
                                        background: "rgba(233, 0, 14, 1)",
                                        marginBottom: " 2rem ",
                                    }}
                                ></Box>
                                <Text
                                    fontSize={"12px"}
                                    w={"22rem"}
                                    color={"#000"}
                                    mb={"2rem"}
                                    display={{base: "block", md: "none", lg: "none"}}
                                >
                                    Tanta Innovatives is a leading provider of IT consulting and software development
                                    services that has helped businesses across multiple industries succeed. Our
                                </Text>
                                <Box w={{base: "100%", md: "44rem", lg: "44rem"}}
                                     display={{base: "block", md: "none", lg: "none"}}>
                                    <LogoMarquee colored={true}/>
                                </Box>
                                <Box display={{base: "none", md: "block", lg: "block"}}>
                                <LogoMarquee colored={true}/>
                                </Box>


                                <Box id="customer_reviews" scrollMarginTop={"150px"}>
                                    <TantaTestimonial testimonials={testimonials}/>
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
                                                                        query: { service: "services/it-consulting/operational-analytics" },
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

                                <Box mb={"3rem"} id="consulting_projects" scrollMarginTop={"150px"} display={{base: "none", md: "none", lg: "block"}}>
                                    <Text
                                        fontSize={"30px"}
                                        fontWeight={"700"}
                                        color={"#565656"}
                                    >All IT Consulting Services</Text>

                                    <Flex justifyContent={"space-between"} mt={"2rem"}>
                                    <Box>
                                        <Box>
                                            <Text
                                                fontSize={"22px"}
                                                fontWeight={"500"}
                                                color={"#303030"}


                                            >Services</Text>
                                            <Box border={"2px solid rgba(242, 102, 110, 1)"}
                                                 borderRadius={"2px"}
                                                 width={"12.5rem"}
                                                 mt={"0.5rem"}
                                                 background={"var(--primary-500, #F2666E)"}
                                            ></Box>
                                        </Box>

                                        <List spacing={3} mt={"1rem"} color={"#323232"}>
                                            <ListItem>Cybersecurity Services</ListItem>
                                            <ListItem>Cybersecurity Consulting</ListItem>
                                            <ListItem>Security Program Development</ListItem>
                                            <ListItem>Managed Application Services</ListItem>
                                            <ListItem>Identity and Access Management</ListItem>
                                        </List>
                                    </Box>


                                    <Box>
                                        <Box>
                                            <Text
                                                fontSize={"22px"}
                                                fontWeight={"500"}
                                                color={"#303030"}
                                            >Security Testing</Text>
                                            <Box border={"2px solid rgba(242, 102, 110, 1)"}
                                                 borderRadius={"2px"}
                                                 width={"12.5rem"}
                                                 mt={"0.5rem"}
                                                 background={"var(--primary-500, #F2666E)"}
                                            ></Box>
                                        </Box>
                                        <List spacing={3} mt={"1rem"}>
                                            <ListItem>End-to-End Application Services</ListItem>
                                            <ListItem>Application Management</ListItem>
                                            <ListItem>Application Development</ListItem>
                                            <ListItem>Managed Application Services</ListItem>
                                            <ListItem>Application Modernization</ListItem>
                                        </List>
                                    </Box>


                                    <Box>
                                        <Box>
                                            <Text
                                                fontSize={"22px"}
                                                fontWeight={"500"}
                                                color={"#303030"}
                                            >Compliance Services</Text>
                                            <Box border={"2px solid rgba(242, 102, 110, 1)"}
                                                 borderRadius={"2px"}
                                                 width={"12.5rem"}
                                                 mt={"0.5rem"}
                                                 background={"var(--primary-500, #F2666E)"}
                                            ></Box>
                                        </Box>
                                        <List spacing={3} mt={"1rem"}>
                                            <ListItem>End-to-End Application Services</ListItem>
                                            <ListItem>Application Management</ListItem>
                                            <ListItem>Application Development</ListItem>
                                            <ListItem>Managed Application Services</ListItem>
                                            <ListItem>Application Modernization</ListItem>
                                        </List>
                                    </Box>

                                </Flex>

                            </Box>
                            </Box>
                            <Box  display={{base: "block", md: "block", lg: "none"}}>
                                <AllConsultingServices/>
                            </Box>
                        </Box>
                    </Flex>
                </Container>
        </Box>
        </>
    )
}
export default  OperationalAnalytics