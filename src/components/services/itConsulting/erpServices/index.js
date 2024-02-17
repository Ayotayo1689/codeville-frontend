import HeaderOne from "../../../HeaderOne";
import React from "react";
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
import styled from "styled-components";
import {breakpoints} from "../../../../../styles/theme";
import HeroContentComp from "./HeroContent";
import HeroImg from "../../../../../public/assets/consulting/erpServices/heroImg.svg";
import ContentLayout from "./contentLayout";
import {sideBarData, textStyle} from "./data";
import SideBar from "./sideBar";
import ErpModulesCard from "./erpModulesCard";
import ReliableCustomers from "./ReliableCustomers";
import ERPIntegrations from "./ErpIntegrations";
import SoftwareDevelopmentServices from "./SoftwareDevelopmentServices";
import CustomErpDevelopment from "./CustomErpDevelopment";
import TechnologiesStack from "./Technologies";
import {analyticsConsultingSummary} from "../../../dataAnalytics/analyticsConsulting/data";
import {IoIosCheckmark} from "react-icons/io";
import Link from "next/link";
import appRoutes from "../../../../utils/appRoutes";
import VideoTestimonial from "../banking/VideoTestimonial";
import TantaTestimonial from "@/components/tantaTestimonials";



const ErpServices = ({testimonials}) => {

    return (<>

            <Box mt='5rem'>
                <HeaderOne heading={"SERVICES"}
                           title={<>Custom ERP Software <Text as="span" color="#EB1A26">Development
                               Services</Text></>}/>
                <Container maxW={"7xl"} p={{base: "2rem", lg: "4rem"}} bg={{ base: "#F7F2FA", lg: "white" }}>
                    <Wrapper>

                        <HeroContentComp
                            title={"Revolutionizing Real Estate Technology"}
                            description={"With over 15 years of experience in end-to-end ERP development and support, Tanta Innovative is your trusted partner for comprehensive solutions. We specialize in enhancing the efficiency of your business workflows, reducing operational risks, and optimizing costs. Request our ERP services today and unlock the full potential of your company."}
                            normalBtnText={"Get a quote"}
                            redBtnText="Request ERP Services"
                            redBtnpathname={appRoutes.contactUs}
                            redBtnquery={ "services/it-consulting/erp-services" }
                            redBtnservice={"services/it-consulting/erp-services" }
                            normalBtnservice={"services/it-consulting/erp-services" }
                            normalBtnpathname={appRoutes.services["cost-calculator"]}
                            image={HeroImg}/>


                    </Wrapper>
                    <ContentLayout>
                        <SideBar title={"CORPORATE"} data={sideBarData} height={"330px"} minW={"300px"}
                        />
                        <Box width={{base: '100%', lg: "65%"}}>
                            {/*ERP Modules Section*/}
                            <Box mb="50px">
                                <Text align={{base: 'center', md: 'left'}} lineHeight="170%" mb="50px" color="#333">
                                    At Tanta Innovative, we are experts in crafting customized ERP software solutions
                                    that cater to the specific operational and strategic needs of enterprises. Our focus
                                    is on developing scalable and tailored systems that seamlessly integrate essential
                                    business management functions. With our custom ERP development services, you can
                                    empower your organization with data-driven decision-making capabilities.
                                </Text>
                                <Flex flexDir="column" color="#414141" fontWeight="700" fontSize={{lg:"30px", base:"20px"}}>
                                    <Text>Functional ERP Modules Developed by</Text>
                                    <Text color="#E9000E">Tanta Innovative</Text>
                                </Flex>
                                <Box w='55px' h="3px" bg="#E9000E" my="30px"></Box>
                                <Text align={{base: 'center', md: 'left'}} lineHeight="170%" color="#1E1E1E">Our comprehensive ERP development services
                                    encompass a wide range of modules tailored to meet your specific business
                                    requirements and financial considerations. These modules are meticulously designed
                                    to automate and enhance the efficiency of your workflows, providing seamless
                                    integration and optimized operations for your organization.</Text>
                            </Box>
                            <ErpModulesCard/>
                            {/*Customer Review section*/}
                            <ReliableCustomers/>

                            {/* REVIEWS  SECTION */}
                            <Box id="reviews" scrollMarginTop={"150px"} pl={{base: "0", lg: "1rem"}}>
                                <TantaTestimonial testimonials={testimonials} />
                            </Box>

                            {/*ERP Integrations*/}
                            <Box id="reviews" scrollMarginTop={"150px"}>
                                <ERPIntegrations/>
                            </Box>

                            {/*Software Development services*/}
                            <Box id="reviews" scrollMarginTop={"150px"}>
                                <SoftwareDevelopmentServices/>
                            </Box>

                            {/*---------Custom ERP Development----------*/}
                            <Box scrollMarginTop={"150px"} id={"cost-estimate"}>
                                <CustomErpDevelopment/>
                            </Box>

                            <Box scrollMarginTop={"150px"}>
                                <Flex flexDir="column" color="#414141" fontWeight="700" fontSize={{lg:"30px", base:"20px"}}>
                                    <Text sx={textStyle}>our tech expertise</Text>
                                    <Text mt="10px">Our <Text color="#EB1A26" as="span">Capabilities</Text> and
                                        Tech<Text color="#EB1A26" as="span">Expertise</Text></Text>
                                </Flex>
                                <Box w='55px' h="3px" bg="#E9000E" my="30px"></Box>
                                <Text mb={{base: '36px', md: '0'}} align={{base: 'center', md: 'left'}}>At our core, we firmly believe that our technical expertise and IT services for
                                    the real estate industry, combined with your innovative vision, can lead to the
                                    creation of cutting-edge tech systems. These systems will not only make life easier
                                    for your audience but also enable you to scale up your business. Together, we can
                                    revolutionize the real estate industry and deliver exceptional experiences to your
                                    customers.</Text>
                                <TechnologiesStack/>
                            </Box>

                            {/* SUMMARY SECTION */}
                            <Box mt='30px' id="summary.js" scrollMarginTop={"150px"}>
                                <Flex flexDir="column" color="#414141" fontWeight="700" fontSize={{lg:"30px", base:"20px"}}>
                                    <Text sx={textStyle}>Summary</Text>
                                    <Text mt="10px">Take a moment to know
                                        <Text color="#EB1A26" as="span"> Tanta Innovative</Text> better</Text>
                                </Flex>
                                <Box w='55px' h="3px" bg="#E9000E" my="30px"></Box>
                                <Box my={"1.5rem"}>
                                    {analyticsConsultingSummary.map((item, index) => (
                                        <Box
                                            mb="4.5rem"
                                            width={"100%"}
                                            key={index}
                                            id={item.id}
                                            scrollMarginTop={"150px"}
                                        >
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
                                                                                  key={index}
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
                                                                    query: { service: "services/it-consulting/erp-services" },
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


                        </Box>


                    </ContentLayout>
                </Container>
            </Box>
        </>
    )
}

export default ErpServices


const Wrapper = styled.div`
  margin: 0 2rem;

  @media (max-width: 820px) {
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
