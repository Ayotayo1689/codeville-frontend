import React from "react";
import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
    Box,
    Button,
    Flex, Grid,
    List, ListIcon, ListItem,
    Text
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import appRoutes from "../../../utils/appRoutes";
import {consultingServicesCard, experties} from "./data";
import {BsArrowRightShort, BsFillSquareFill} from "react-icons/bs";
import {successStories} from "../../healthCare/data";


export const HeroHeader = () => {
    return (
        <>
            <Box display={"grid"}>
                <Image
                    src={"/assets/dataAnalytics/Consulting-pana.png"}
                    alt="hero image"
                    width={500}
                    height={300}
                />
                <Text textAlign={"center"} py={"1rem"} fontWeight={"700"}>
                    Looking for improved analytics services to meet your needs?
                </Text>
                <Text fontSize={"0.7rem"}>
                    Data analytics implies building an infrastructure for data
                    aggregation, analysis, and reporting. An experienced provider of
                    data analytics services, ScienceSoft delivers on simple and
                    complex needs with tailored business analytics solutions.
                </Text>
                <Flex
                    gap={"1rem"}
                    textTransform={"uppercase"}
                    py={"2rem"}
                    flexWrap={"wrap"}
                    justifyContent={{base:"center"}}
                >
                    <Link
                        href={{
                            pathname: appRoutes.contactUs,
                            query: {
                                service: "services/data-analytics/data-implementation",
                            },
                        }}
                    >
                        <Button
                            textTransform={"uppercase"}
                            px={{ base: "0.5rem", lg: "2.5rem" }}
                            fontSize={"0.8rem"}
                            background="radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
                            color={"white"}
                            _hover={"none"}
                        >
                            Make a request
                        </Button>
                    </Link>
                    <Link
                        href={{
                            pathname: appRoutes.contactUs,
                            query: {
                                service: "services/data-analytics/analytics-consulting",
                            },
                        }}
                    >
                        <Button
                            textTransform={"uppercase"}
                            px={{ base: "0.5rem", lg: "2.5rem" }}
                            fontSize={"0.8rem"}
                            border={"2px"}
                            borderColor={"#e60000"}
                            bg={"white"}
                            color={"#e60000"}
                            _hover={"none"}
                        >
                            get a quote
                        </Button>
                    </Link>
                </Flex>
            </Box>

        </>
    )
};


export const WhyTantaMobile= () => {
    return (
        <Box>
            <Accordion defaultIndex={[0]} allowMultiple  >
                <AccordionItem
                    borderRadius={"3xl"}
                    boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                >
                    <AccordionButton color={"white"} fontSize={"3xl"} bg={"#e60000"} borderRadius={"lg"}>
                        <Text
                            fontSize={"sm"}
                            fontWeight={"bold"}
                            flex="1"
                            textAlign="left"
                            color={"white"}
                            borderButtom={"3px solid #E9000E"}
                        >
                            Discover the Reliability of Tanta as an Analytics Consulter
                        </Text>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb={2}>
                        <Grid>
                            <Box paddingLeft={"1rem"}>
                                    <List>
                                        <ListItem fontWeight={"400"} fontSize={"sm"} display={"inline"}>
                                            <Flex>
                                                <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                                <Text
                                                    letterSpacing={"1px"}> Full-scale <Text as="span" fontWeight={"700"}> Project Management</Text> Office to handle projects of any complexity.</Text></Flex>
                                        </ListItem>
                                        <ListItem fontWeight={"400"} fontSize={"sm"}>
                                            <Flex>
                                                <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                                <Text
                                                    letterSpacing={"1px"}> 15 years in help-desk on ITIL principles.</Text></Flex>
                                        </ListItem >
                                        <ListItem fontWeight={"400"} fontSize={"sm"}>
                                            <Flex>
                                                <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                                <Text
                                                    letterSpacing={"1px"}>  9 years in DevOps practices.</Text></Flex>
                                        </ListItem>
                                        <ListItem fontWeight={"400"} fontSize={"sm"}>
                                            <Flex>
                                                <ListIcon as={BsFillSquareFill} color='#E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                                <Text
                                                    letterSpacing={"1px"}>  Mature <Text as="span" fontWeight={"700"}> Quality Management </Text> system proved with ISO 9001 certificate to deliver tangible service value and predictable results.</Text></Flex>
                                        </ListItem>
                                        <ListItem fontWeight={"400"} fontSize={"sm"} display={"inline"}>
                                            <Flex>
                                                <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                                <Text
                                                    letterSpacing={"1px"}>
                                                    Solid security
                                                    <Text as="span"
                                                          fontWeight={"700"} > Management System</Text> backed by ISO 27001 certification to protect the customers’ data we access.</Text></Flex>
                                        </ListItem>
                                        <ListItem fontWeight={"400"} fontSize={"sm"}>
                                            <Flex>
                                                <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                                <Text
                                                    letterSpacing={"1px"}> <Text as="span"
                                                                                 fontWeight={"700"}>76%</Text> of our revenue comes from 1+
                                                    year-long customers, such as eBay, IBM, Baxter, NASA JPL, Nielsen, and more.</Text></Flex>
                                        </ListItem >
                                        <ListItem fontWeight={"400"} fontSize={"sm"}>
                                            <Flex>
                                                <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                                <Text
                                                    letterSpacing={"1px"}> <Text as="span"
                                                                                 fontWeight={"700"}>Consulting Expertise</Text>  In Over 30 Industries To Bridge Business And Technology.</Text></Flex>
                                        </ListItem>
                                    </List>
                            </Box>
                        </Grid>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Flex gap={"5"}  justifyContent={"center"} alignItems={"center"} textAlign={"center"}>
                {experties.map((item, i) => {
                    return(
                        <Flex  fontWeight={"700"} key={i} my={"15px"} flexDirection={"column"}  justifyContent={"center"} alignItems={"center"}>
                            <Image src={item.img} alt={"icon"} width={50} height={50}/>
                            <Text fontSize={"sm"}>{item.price}</Text>
                            <Text fontSize={"sm"}>{item.details}</Text>
                        </Flex>
                    )
                })}
            </Flex>
        </Box>
    );
};



export const AnalyticsConsultingCard = () => {
    return (
        <Box>
            <Accordion defaultIndex={[0]} allowMultiple my={"2rem"}>
                <AccordionItem
                    borderRadius={"3xl"}
                    boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                >
                    <AccordionButton color={"white"} fontSize={"3xl"} bg={"#e60000"} borderRadius={"lg"}>
                        <Text
                            fontSize={"sm"}
                            fontWeight={"bold"}
                            flex="1"
                            textAlign="left"
                            color={"white"}
                            borderButtom={"3px solid #E9000E"}
                        >
                            Analytics Consulting Services by Tanta Innovative
                        </Text>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb={2}>
                        <Grid>
                            <Text
                                color={"#1E1E1E"}
                                fontSize={"sm"}
                            >
                                Leverage Tanta Innovative' s Analytics Consulting
                                Services to gain actionable insights and optimize your business performance.
                            </Text>
                            <Box p={"0.5rem"}>
                                <List spacing={3}  mt={"1rem"}
                                      color={"#1E1E1E"}
                                      fontSize={"sm"} >
                                    <ListItem fontWeight={"400"} fontSize={"sm"}>
                                        <Flex>
                                            <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                            <Text>  Harness our analytics consulting to gain valuable data-driven insights for informed decision-making..</Text></Flex>
                                    </ListItem>
                                    <ListItem fontWeight={"400"} fontSize={"sm"}>
                                        <Flex>
                                            <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                            <Text>  Get customized analytics services aligned with your business objectives for optimal results.. </Text></Flex>
                                    </ListItem>
                                    <ListItem fontWeight={"400"} fontSize={"sm"}>
                                        <Flex>
                                            <ListIcon as={BsFillSquareFill} color=' #E9000E' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                            <Text>  Get customized analytics services aligned with your business objectives for optimal results.. </Text></Flex>
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>
                        <Box mt={"2rem"}>
                            { consultingServicesCard.map ((item, index) => {
                                return (
                                    <Box
                                        key={index}
                                        background={" #FFF"}
                                        mb={"1rem"}
                                        p={"1rem"}
                                        boxShadow={"0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)"}
                                    >
                                        <Box ml={"1rem"} pt={"1rem"}>
                                            <Image
                                                src={item?.img}
                                                alt="icons"
                                                width={70}
                                                height={70}
                                            />
                                            <Text color={" #9F000A"} fontSize={"18px"} fontWeight={"700"} mt={"1rem"}>
                                                {item.title}
                                            </Text>
                                            <Text color={" #3A393A"} fontSize={"15px"}  mt={"1rem"} >
                                                {item.details}
                                            </Text>
                                        </Box>
                                    </Box>
                                );

                            })}
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
};

export const OurHandPickedMobile = () => {
    return (
        <Box>
            <Accordion defaultIndex={[0]} allowMultiple my={"2rem"}>
                <AccordionItem
                    borderRadius={"3xl"}
                    boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                >
                    <AccordionButton color={"white"} fontSize={"3xl"} bg={"#e60000"} borderRadius={"lg"}>
                        <Text
                            fontSize={"sm"}
                            fontWeight={"bold"}
                            flex="1"
                            textAlign="left"
                            color={"white"}
                            borderButtom={"3px solid #E9000E"}
                        >
                            View our handpicked projects and services
                        </Text>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb={2}>
                        <Box
                            gap={{ lg: "3rem", base: "1rem" }}
                            flexWrap={"wrap"}
                            display={"flex"}
                            marginBottom={"2rem"}
                            mt={"2rem"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            {successStories.map((item, index) => {
                                return (
                                    <Flex
                                        key={index}
                                        flexDirection={"column"}
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                        padding={"0.5rem"}
                                        marginBottom={"1rem"}
                                        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                                        borderRadius={"10px"}
                                    >
                                        <Box
                                            padding={"0.5rem 0.5rem 1rem 0.5rem;"}
                                            gap={"0.9rem"}
                                            flexDirection={"column"}
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            display={"flex"}
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                               width={300}
                                                height={250}

                                            />
                                            <Box >
                                                <Text
                                                    color={"#303030"}
                                                    fontSize={"sm"}
                                                    fontWeight={"500"}
                                                    mb={"0.5rem"}
                                                >
                                                    {item.title}
                                                </Text>
                                                <Text
                                                    color={"#E9000E"}
                                                    fontSize={"sm"}
                                                    textTransform={"uppercase"}
                                                    mb={"0.5rem"}
                                                >
                                                    {item.subItem}
                                                </Text>
                                                <Text fontSize={"sm"}>
                                                    {item.text}
                                                </Text>
                                                <Link href={item.link}>
                                                    <Flex
                                                        justifyContent={"center"}
                                                        color={"#E9000E"}
                                                        mt={"2rem"}
                                                        fontWeight={"500"}
                                                    >

                                                        View Case Study
                                                        <BsArrowRightShort
                                                            style={{
                                                                color: "#E9000E",
                                                                fontSize: "25px",
                                                                transition: "all 0.2s ease-in-out",
                                                            }}
                                                        />
                                                    </Flex>
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Flex>
                                );
                            })}
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
};
