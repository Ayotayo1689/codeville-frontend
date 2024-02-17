import {
    Box,
    Button,
    Flex,
    Grid,
    Heading,
    Image,
    Link as ChakraLink,
    List,
    ListIcon,
    ListItem,
    Text,
} from "@chakra-ui/react";
import React, {useEffect, useRef, useState} from "react";
import {MdKeyboardArrowRight} from "react-icons/md";
import {capabilitiesData, expertiseList, sideBarData, tantaSolutionsData,} from "./data";
import {RiCheckboxBlankFill} from "react-icons/ri";
import {colors} from "../../../../styles/theme";
import Link from "next/link"


function Main() {
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
        <Box mb={"2rem"} mt={"4rem"} px={'2rem'}>
            <Flex gap={"6rem"} justify={"center"}>
                <Flex
                    flexDir="column"
                    boxShadow={"lg"}
                    height="fit-content"
                    position="sticky"
                    top="10rem"
                    pb={"1rem"}
                    borderBottom={"lg"}
                    width={{ base: '100%', lg: "30%"}}
                    className="side-bar"
                    display={{base: "none", md: "flex", lg: 'flex' }}
                >
                    <Text
                        as="h2"
                        fontSize={{base: ".7rem", md: "1rem"}}
                        fontWeight={"semibold"}
                        mb={"1rem"}
                        color={"white"}
                        textAlign={"center"}
                        paddingBlock={".5rem"}
                        borderTopRadius={"lg"}
                        background="radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
                    >
                        RETAIL IT SOLUTIONS
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
                                            textDecoration: 'none',
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
                <Flex direction={"column"} width={{ base: '100%', lg: '65%'}} >
                    {/* ----------OUR EXPERTISE---------- */}
                    <Flex my={'4rem'} id="expertise" direction={"column"} scrollMarginTop={"150px"} >
                        <Flex direction={"column"}>
                            <Heading size={"lg"}>
                                Our <span style={{color: "#E9000E"}}>Expertise</span>
                            </Heading>
                            <Box
                                w={{base: "50px", lg: "121px"}}
                                h={"2px"}
                                bg={"#E9000E"}
                                m={".5rem 0"}
                            >
                                {""}
                            </Box>
                        </Flex>
                        <Flex direction={"column"} mt={"2rem"}>
                            <Text>
                                Since  2008 , our portfolio for the retail industry has grown to
                                include:
                            </Text>
                            <List spacing={3} mt={"1rem"}>
                                {expertiseList.map((listItem, index) => {
                                    return (
                                        <ListItem key={index} fontSize={".99rem"}>
                                            <Flex align={"start"}>
                                                <ListIcon
                                                    as={RiCheckboxBlankFill}
                                                    fontSize={".4rem"}
                                                    mt={".6rem"}
                                                />
                                                {listItem}
                                            </Flex>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </Flex>
                    </Flex>

                    {/* -----------Tanta Solutions------------- */}
                    <Flex my={'4rem'} direction={"column"} id="solutions" scrollMarginTop={"150px"}>
                        <Flex direction={"column"}>
                            <Heading size={"lg"}>
                                Tanta <span style={{color: "#E9000E"}}>Solutions</span>
                            </Heading>
                            <Box
                                w={{base: "50px", lg: "121px"}}
                                h={"2px"}
                                bg={"#E9000E"}
                                m={".5rem 0"}
                            >
                                {""}
                            </Box>
                        </Flex>

                        <Grid
                            templateColumns={{base: "100%", md: "1fr 1fr"}}
                            gap={"1rem"}
                            mt={"2rem"}
                        >
                            {tantaSolutionsData.map((card, index) => {
                                const borderColors = ["#FF0000", "#1E1E1E"]; //declares all border color variables
                                const bulletColors = ["#E9000E", "#4E4E4E "]; //declares all bullet list color variables

                                const borderColorIndex =
                                    Math.floor(index % 2) % borderColors.length; // Calculate the border color index
                                const bulletColorIndex =
                                    Math.floor(index % 2) % bulletColors.length; // Calculate the bullet list color index

                                return (
                                    <Flex
                                        key={card.id}
                                        direction={"column"}
                                        borderRadius={"10px"}
                                        p={"1.2rem "}
                                        gap={"1.5rem"}
                                        border={`1.5233px solid ${borderColors[borderColorIndex]}`}
                                    >
                                        <Flex justify={"center"}>
                                            <Image src={card.image} alt="Card image"/>
                                        </Flex>
                                        <Text
                                            textAlign={"center"}
                                            fontSize={"1.2rem"}
                                            fontWeight={"600"}
                                            color={"#2A2A2A"}
                                        >
                                            {card.title}{" "}
                                            <span style={{color: "#E9000E"}}>
													{card.subtitle}
												</span>
                                        </Text>
                                        <Text
                                            fontSize={".99rem"}
                                            fontWeight={"400"}
                                            color={"#2A2A2A"}
                                        >
                                            {card.description}
                                        </Text>
                                        <List spacing={3} mt={".7rem"}>
                                            {card.listItems.map((listItem, index) => {
                                                return (
                                                    <ListItem key={index} fontSize={".99rem"}>
                                                        <Flex align={"start"}>
                                                            <ListIcon
                                                                as={RiCheckboxBlankFill}
                                                                color={`${bulletColors[bulletColorIndex]}`}
                                                                fontSize={".7rem"}
                                                                mt={".4rem"}
                                                            />
                                                            {listItem}
                                                        </Flex>
                                                    </ListItem>
                                                );
                                            })}
                                        </List>
                                    </Flex>
                                );
                            })}
                        </Grid>
                    </Flex>

                    {/* ----------Our Capabilities---------- */}
                    <Flex my={'4rem'} direction={"column"} id={'capabilities'} scrollMarginTop={"150px"}>
                        <Flex direction={"column"} >
                            <Heading size={"lg"}>
                                Our <span style={{color: "#E9000E"}}>Capabilities</span>
                            </Heading>
                            <Box
                                w={{base: "50px", lg: "121px"}}
                                h={"2px"}
                                bg={"#E9000E"}
                                m={".5rem 0"}
                            >
                                {""}
                            </Box>
                        </Flex>
                        <List spacing={3} mt={"1rem"}>
                            {capabilitiesData.map((listItem, index) => {
                                return (
                                    <ListItem key={index} fontSize={".99rem"}>
                                        <Flex align={"start"}>
                                            <ListIcon
                                                as={RiCheckboxBlankFill}
                                                color={"#E9000E"}
                                                fontSize={".7rem"}
                                                mt={".4rem"}
                                            />
                                            {listItem}
                                        </Flex>
                                    </ListItem>
                                );
                            })}
                        </List>
                        <Flex direction={"column"} mt={".8rem"}>
                            <Text>
                                These services are delivered by on-demand, scalable teams of
                                ideators and practitioners who include business analysts,
                                software consultants and engineers, graphic designers and
                                quality assurance professionals.
                            </Text>
                            <Text>
                                Our strategic relations with the technology leaders open extra
                                opportunities for us and help to ease implementations for our
                                customers.
                            </Text>
                        </Flex>
                    </Flex>

                    {/* -----------Need IT Retail services---------- */}
                    <Box bg={"#FDE6E7"} py={"2rem"} rounded={"lg"}>
                        {" "}
                        <Box px={"1.7rem"}>
                            <Text
                                fontSize={{base: "lg", lg: "3xl"}}
                                fontWeight={"bold"}
                                textTransform={"capitalize"}
                            >
                                Need any retail IT services
                            </Text>
                            <Box
                                w={"4rem"}
                                height={".2rem"}
                                bg={colors.primaryColor}
                                mt={"2"}
                            ></Box>
                        </Box>
                        <Flex
                            justifyContent={"center"}
                            direction={{base: "column-reverse", lg: "row"}}
                            alignItems={"center"}
                        >
                            <Flex
                                flex={"1"}
                                px={"2rem"}
                                direction={"column"}
                                justifyContent={"center"}
                                gap={"1rem"}
                            >
                                <Text
                                    fontSize={{base: "md", lg: "xl"}}
                                    fontWeight={"semibold"}
                                    color={"#565656"}
                                    mt={{lg: "1rem"}}
                                >
                                    At Tanta Innovative, we will help you collect and properly
                                    analyze the data from physical objects to make
                                    transformative improvements to your business processes.
                                </Text>
                                <ChakraLink as={Link}
                                            href={{
                                                pathname: "/contact-us",
                                                query: { service: "industries/retail" },
                                            }}
                                            service="industries/retail"
                                            className="request-services">
                                <Button
                                    alignSelf={"left"}
                                    bg={"#F8B3B7"}
                                    filter=" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                                >
                                    Request Retail IT Service
                                </Button>
                                </ChakraLink>
                            </Flex>
                            <Box flex={"1"} w={{base: "14rem"}}>
                                <Image
                                    width={"100%"}
                                    src="/assets/itOutSourcing/img4.svg"
                                    alt="IT Service Image"
                                />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Main;
