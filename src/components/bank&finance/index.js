import React, {useState} from "react";
import HeaderOne from "../HeaderOne";
import Image from "next/image";
import Task from "../../../public/assets/banking/Task.png";
import growth from "../../../public/assets/banking/growth.png";
import {approach, banking, momentum, sideBarData, software, webMobile} from "./data";
import Link from "next/link";
import {MdKeyboardArrowRight} from "react-icons/md";
import {Box, Button, chakra, Container, Flex, Heading, Text,} from "@chakra-ui/react";
import HeroBanking from "../../../public/assets/banking/HeroBanking.png";
import arrow from "../../../public/assets/banking/arrow.png";
import dietApp from "../../../public/assets/banking/dietApp.png";
import biggest from "../../../public/assets/banking/biggest.png";
import bigger from "../../../public/assets/banking/biggest.png";
import big from "../../../public/assets/banking/big.png";
import tiny from "../../../public/assets/banking/tiny.png";
import ServicesForm from "../servicesForm/servicesForm";
import appRoutes from "../../utils/appRoutes";
import {RiCheckboxBlankFill} from "react-icons/ri";
import styled from "styled-components";
import {breakpoints} from "../../../styles/theme";

const Banking = () => {
    const [activeLink, setActiveLink] = useState({});
    return (
        <>
            <Box mt={"5rem"} minHeight={"100vh"} >
                <HeaderOne heading={"solutions"} title={"banking and finance"}/>
                <Container maxW={"7xl"} px={{lg: "5rem", base: "2rem"}}>
                    {/* Hero section */}
                    <Flex
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={"4rem"}
                        flexDirection={{lg: "row", base: "column"}}
                    >
                        <Box width={{lg: "120%", base: "50%"}} paddingTop={{lg: "0", base: "1rem"}}>
                            <Image
                                src={HeroBanking}
                                alt={"hero image"}
                                width={429}
                                height={409}
                            />
                        </Box>

                        <Flex
                            flexDirection={"column"}
                            gap={"15px"}
                            alignItems={{lg: "flex-end", base: "none"}}
                            justifyContent={"center"}
                        >
                            <Box
                                borderRight={{lg: "3px solid #FF0000", base: "none"}}
                                borderLeft={{lg: "none", base: "3px solid #FF0000"}}
                                px={"1rem"}
                            >
                                <Heading
                                    fontSize={{lg: "38px", base: "20px"}}
                                    textAlign={{lg: "right", base: "left"}}
                                    color={"#1F1F1F"}
                                    lineHeight={"170%"}
                                >
                                    Our Strong IT Services For Your
                                </Heading>
                                <Heading
                                    fontSize={{lg: "38px", base: "20px"}}
                                    textAlign={{lg: "right", base: "left"}}
                                    color={"#1F1F1F"}
                                    lineHeight={"170%"}
                                >
                                    Financial IT Solutions
                                </Heading>
                            </Box>
                            <Text
                                textAlign={{lg: "right", base: "left"}}
                                color={"#333333"}
                                lineHeight={"170%"}
                                fontSize={{lg: "20px", base: "15px"}}
                                fontWeight={"400"}
                            >
                                We specialize in enhancing business efficiency and delivering exceptional customer
                                experiences across both digital and physical sales channels. With a wealth of experience
                                spanning over 15 years, our team of consultants provides tailored software solutions to
                                meet the specific needs of the banking and finance industry.
                            </Text>
                            <CtaButtons>
                                <Link
                                    href={{
                                        pathname:  appRoutes.contactUs,
                                        query: {service: "industries/banking"},
                                    }}
                                    service="industries/corporate"
                                    className="request-services"
                                >
                                    {" "}
                                    <button className="request-services">
                                        Request a robust financial software
                                    </button>
                                </Link>
                                <Link
                                    href={{
                                        pathname: appRoutes.services["cost-calculator"],
                                        query: {
                                            service: "bankingAndFinance-12",
                                        },
                                    }}
                                >
                                    {" "}
                                    <button className="get-quote">get a quote</button>
                                </Link>
                            </CtaButtons>
                        </Flex>
                    </Flex>
                    <Text
                        textAlign={"justify"}
                        fontSize={"18px"}
                        color={"#3A393A"}
                        lineHeight={"27px"}
                        mt={"4rem"}
                        display={{lg: "block", base: "none"}}
                        fontWeight={"400"}
                    >
                        Our financial software development services are tailored to assist companies in the banking,
                        financial services, and insurance sectors in achieving higher operational efficiency, enhancing
                        customer engagement and retention, and capitalizing on profitable new business models. At Tanta,
                        we offer comprehensive IT consulting and software development solutions, empowering BFSI
                        companies to undergo digital transformation and unlock new avenues for growth. Throughout the
                        entire implementation process, we prioritize sensitive data security and ensure regulatory
                        compliance, providing our clients with expert guidance every step of the way.
                    </Text>
                    <Flex gap={"5rem"} justify={"center"} mb={"7rem"} mt={{lg:"4rem", base:"2rem"}}>
                        <Flex
                            display={{lg: "block", base: "none"}}
                            flexDir="column"
                            boxShadow={"lg"}
                            height={"fit-content"}
                            flex={1}
                            minW={"300px"}
                            position="sticky"
                            top="10rem"
                            pb={"1rem"}
                            borderBottom={"lg"}
                        >
                            {/* sticky sidebarSection */}
                            <Text
                                as="h2"
                                fontSize={"2xl"}
                                fontWeight={"semibold"}
                                mb={"1rem"}
                                color={"white"}
                                textAlign={"center"}
                                paddingBlock={".5rem"}
                                borderTopRadius={"lg"}
                                textTransform={"uppercase"}
                                background={"radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"}
                            >
                                financial solutions
                            </Text>
                            <Box px="1rem">
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
                        <Box width={{base: "100%", lg: "100%"}}>
                            {/* software development */}
                            <Box width={{base: "100%", lg: "100%"}} id="SD" scrollMarginTop={"150px"}>
                                <Flex
                                    justifyContent={"center"}
                                    borderRadius={"6px"}
                                    flexDir={"column"}
                                    w="100%"
                                >
                                    <Heading
                                        fontSize={{lg: "26px", base: "20px"}}
                                        fontWeight="600"
                                        color="#444444"
                                        lineHeight={{lg: "150%", base: "140%"}}
                                        mb={"0.5rem"}
                                    >
                                        <chakra.span
                                            color={"#E9000E"}
                                            fontSize={{base: "20px", lg: "26px"}}
                                        >
                                            Software Development For{" "}
                                        </chakra.span>
                                        All Financial Service Domain
                                    </Heading>
                                    <Box
                                        width={{lg: "20%", base: "50px"}}
                                        height={"3px"}
                                        bg={"#FF0000"}
                                    ></Box>
                                </Flex>
                            </Box>
                            <Box
                                gap={{lg: "3rem", base: "1rem"}}
                                flexWrap={"wrap"}
                                display={"flex"}
                                marginBottom={"0.5rem"}
                                mt={"2rem"}
                                justifyContent={"center"}
                                alignItems={"center"}
                            ></Box>
                            <Box
                                gap={{lg: "0.7rem", base: "0.5rem"}}
                                flexWrap={"wrap"}
                                display={"flex"}
                                marginBottom={"3rem"}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                {software.map((item, index) => {
                                    return (

                                        <Flex
                                            key={index}
                                            width={{lg: "31%", base: "47%"}}
                                            height={"153px"}
                                            flexDirection={"column"}
                                            justifyContent={{lg: "center", base: "space-between"}}
                                            alignItems={"center"}
                                            padding={{lg: "0.5rem", base: "1.5rem"}}
                                            borderRadius={"8px"}
                                            border={"1px solid black"}
                                            mb={"1rem"}
                                        >
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                width={45}
                                                height={40}
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                marginBottom={{lg: "1rem", base: "0.5rem"}}
                                                margin="0 auto"
                                            />
                                            <Text
                                                fontSize={{lg: "16px", base: "14px"}}
                                                fontWeight={{lg: 500, base: 700}}
                                                textAlign={"center"}
                                                mt={"0.5rem"}
                                                color={"#3A393A"}
                                                mb={"0.5rem"}
                                            >
                                                {item.title}
                                            </Text>
                                            {/*<Link visibility={"hidden"} href={item.Link}>*/}
                                            {/*    <Image src={arrow} alt={"arrow image"}/>*/}
                                            {/*</Link>*/}
                                        </Flex>
                                    );
                                })}
                            </Box>
                            {/* solutions */}
                            <Box width={{base: "100%", lg: "100%"}} id="our" scrollMarginTop={"150px"}>
                                <Box width={{base: "100%", lg: "100%"}}>
                                    <Flex
                                        justifyContent={"center"}
                                        borderRadius={"6px"}
                                        flexDir={"column"}
                                        w="100%"
                                    >
                                        <Heading
                                            fontSize={{lg: "26px", base: "20px"}}
                                            fontWeight="600"
                                            color="#565656"
                                            // width={"100%"}
                                            lineHeight={{lg: "150%", base: "140%"}}
                                            mb={{lg: "3rem", base: "0.5rem"}}
                                        >
                                            <chakra.span
                                                color={"#E9000E"}
                                                fontSize={{base: "20px", lg: "26px"}}
                                            >
                                                Solutions That Can Handle{" "}
                                            </chakra.span>
                                            Operations Of Any Complexity In The Banking, Financial
                                            Services And Insurance (BFSI) Industry.
                                        </Heading>
                                        <Box
                                            width={{lg: "20%", base: "50px"}}
                                            height={"3px"}
                                            bg={"#FF0000"}
                                        ></Box>
                                    </Flex>
                                </Box>
                                <Box
                                    gap={{lg: "3rem", base: "1rem"}}
                                    flexWrap={"wrap"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    mt={"3rem"}
                                >
                                    {banking.map((item, index) => {
                                        return (
                                            <Flex
                                                key={index}
                                                width={{lg: "45%", base: "80%"}}
                                                height={"227px"}
                                                flexDirection={"column"}
                                                justifyContent={"center"}
                                                alignItems={"center"}
                                                padding={"2.5rem"}
                                                borderRadius={"20px"}
                                                border={"1px solid #808080"}
                                                mb={"1rem"}
                                                background={item.color}
                                            >
                                                <Box
                                                    gap={"0.5rem"}
                                                    flexDirection={"column"}
                                                    justifyContent={"center"}
                                                    alignItems={"center"}
                                                    display={"flex"}
                                                >

                                                    <Image
                                                        src={item.img}
                                                        alt={item.title}
                                                        width={136}
                                                        height={136}
                                                        display="flex"
                                                        alignItems="center"
                                                        justifyContent="center"
                                                        marginBottom="1rem"
                                                        margin="0 auto"
                                                    />
                                                    <Text
                                                        fontSize={{lg: "18px", base: "16px"}}
                                                        fontWeight={500}
                                                        textAlign={"center"}
                                                        mt={"0.5rem"}
                                                        color={"#404243"}
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        );
                                    })}
                                </Box>
                            </Box>
                            {/* web & mobile */}
                            <Box
                                Box
                                width={{base: "100%", lg: "100%"}}
                                id="WMA"
                                background={"#FFFAFA"}
                                height={"912px"}
                                mt={"3rem"}
                                scrollMarginTop={"150px"}
                                padding={{
                                    lg: "5rem 0 5rem 2rem",
                                    base: "5rem 2rem 5rem 2rem",
                                }}
                                position={"relative"}
                            >
                                <Flex
                                    flexDirection={"column"}
                                    marginLeft={{lg: "15px", base: "0"}}
                                >
                                    <Heading
                                        fontWeight="600"
                                        fontSize={{base: "20px", lg: "26px"}}
                                        textTransform="capitalize"
                                        color="#444444"
                                        // width={"95%"}
                                        lineHeight={{lg: "150%", base: "140%"}}
                                        mb={"0.5rem"}
                                    >
                                        <chakra.span color={"#e9000e"} fontSize={{base: "20px", lg: "26px"}}>
                                            Web and Mobile
                                        </chakra.span>
                                        {" "}
                                        Applications for the Provision Of Excellent Digital Customer
                                        Experience
                                    </Heading>
                                    <Box
                                        width={"12%"}
                                        height={"3px"}
                                        background={"#FF0000"}
                                    ></Box>
                                    <Flex mt={"2rem"} alignItems={"space-between"}>
                                        <Box width={"100%"}>
                                            {webMobile.map((item, index) => {
                                                return (
                                                    <Box
                                                        key={index}
                                                        background={index === 0 ? "#FDE6E7" : "linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"}
                                                        width={{lg: "40%", base: "100%"}}
                                                        height={"70px"}
                                                        mb={"0.5rem"}
                                                        display={"flex"}
                                                        justifyContent={"center"}
                                                        alignItems={"center"}
                                                        position={"relative"}
                                                    >
                                                        <Text color={index === 0 ? "#AC2121" : "#FDE6E7"}
                                                              fontSize={{lg: "18px", base: "17px"}}
                                                              fontWeight={index === 0 ? 700 : 600}> {item.title}</Text>
                                                        <Box position={"absolute"} right={"10px"} bottom={"5px"}>
                                                            <Image src={item.icon} alt="play" width={24} height={24}/>
                                                        </Box>
                                                    </Box>
                                                );
                                            })}
                                        </Box>
                                    </Flex>
                                </Flex>
                                <Box
                                    position={"absolute"}
                                    top={{lg: "188px", base: "24px"}}
                                    left={{lg: "369px", base: "20"}}
                                    display={{lg: "block", base: "none"}}
                                >
                                    <Image src={dietApp} alt="dietApp" width={456} height={456}/>
                                </Box>
                                <Box
                                    position={"absolute"}
                                    top={{lg: "430px", base: "24px"}}
                                    left={{lg: "361px", base: "20"}}
                                    display={{lg: "block", base: "none"}}
                                >
                                    <Image src={big} alt="big" width={50} height={50}/>
                                </Box>
                                <Box
                                    position={"absolute"}
                                    top={{lg: "588px", base: "24px"}}
                                    left={{lg: "322px", base: "20"}}
                                    display={{lg: "block", base: "none"}}
                                >
                                    <Image src={biggest} alt="biggest" width={100} height={100}/>
                                </Box>
                                <Box
                                    position={"absolute"}
                                    top={{lg: "588px", base: "24px"}}
                                    left={{lg: "549px", base: "20"}}
                                    display={{lg: "block", base: "none"}}
                                >
                                    <Image src={tiny} alt="tiny" width={28} height={28}/>
                                </Box>
                                <Box
                                    position={"absolute"}
                                    top={{lg: "610px", base: "24px"}}
                                    left={{lg: "539px", base: "20"}}
                                    display={{lg: "block", base: "none"}}
                                >
                                    <Image src={tiny} alt="tiny" width={15} height={15}/>
                                </Box>
                                <Box
                                    position={"absolute"}
                                    top={{lg: "688px", base: "24px"}}
                                    left={{lg: "649px", base: "20"}}
                                    display={{lg: "block", base: "none"}}
                                >
                                    <Image src={bigger} alt="bigger" width={75} height={75}/>
                                </Box>
                            </Box>
                            {/* why choose us section */}
                            <Box id="WCU" mt={"3rem"} scrollMarginTop={"150px"}>
                                <Flex
                                    flexDirection={"column"}
                                    marginLeft={{lg: "15px", base: "0"}}
                                >
                                    <Heading
                                        fontWeight="600"
                                        fontSize={{base: "20px", lg: "26px"}}
                                        textTransform="capitalize"
                                        color="#444444"
                                        // width={{lg: "58%", base: "80%"}}
                                        lineHeight={{lg: "150%", base: "140%"}}
                                        mb={"0.5rem"}
                                    >
                                        <chakra.span color={"#e9000e"} fontSize={{base: "20px", lg: "26px"}}>
                                            What Makes Tanta Innovative
                                        </chakra.span>
                                        {" "}
                                        A Reliable Tech Partner
                                    </Heading>
                                    <Box
                                        width={"12%"}
                                        height={"3px"}
                                        background={"#FF0000"}
                                    ></Box>
                                    <Text
                                        mt={"1rem"}
                                        color={"#303030"}
                                        fontSize={{lg: "19px", base: "15px"}}
                                        lineHeight={{lg: "47px", base: "170%"}}
                                    >
                                        Tanta long experience helps ensure the fast
                                        implementation, excellent quality, and long-term value of
                                        BFSI solutions we deliver:
                                    </Text>
                                    <ul>
                                        <Flex gap={"0.5rem"} mt={"1rem"}>
                                            <Box
                                                bg={"#E9000E"}
                                                marginTop={{lg: "1.2rem", base: "0.7rem"}}
                                                width={{lg: "10px", base: "5px"}}
                                                height={{lg: "10px", base: "5px"}}
                                                maxWidth={{lg: "10px", base: "5px"}}
                                                maxHeight={{lg: "10px", base: "5px"}}
                                            ></Box>
                                            <chakra.li
                                                color={"#303030"}
                                                fontSize={{lg: "19px", base: "15px"}}
                                                lineHeight={{lg: "47px", base: "170%"}}
                                                listStyleType={"none"}

                                            >
                                                Since 2008 in IT and 40+ professionals on board.
                                            </chakra.li>
                                        </Flex>
                                        <Flex gap={"0.5rem"}>
                                            <Box
                                                bg={"#E9000E"}
                                                marginTop={{lg: "1.2rem", base: "0.7rem"}}
                                                width={{lg: "10px", base: "5px"}}
                                                height={{lg: "10px", base: "5px"}}
                                                maxWidth={{lg: "10px", base: "5px"}}
                                                maxHeight={{lg: "10px", base: "5px"}}
                                            ></Box>
                                            <chakra.li
                                                color={"#303030"}
                                                fontSize={{lg: "19px", base: "15px"}}
                                                lineHeight={{lg: "47px", base: "170%"}}
                                                listStyleType={"none"}

                                            >
                                                Since 2003 in cybersecurity to guarantee full protection
                                                of BFSI software.
                                            </chakra.li>
                                        </Flex>
                                        <Flex gap={"0.5rem"}>
                                            <Box
                                                bg={"#E9000E"}
                                                marginTop={{lg: "1.2rem", base: "0.7rem"}}
                                                width={{lg: "16px", base: "10px"}}
                                                height={{lg: "10px", base: "5px"}}
                                                maxWidth={{lg: "16px", base: "10px"}}
                                                maxHeight={{lg: "10px", base: "5px"}}
                                            ></Box>
                                            <chakra.li
                                                color={"#303030"}
                                                fontSize={{lg: "19px", base: "15px"}}
                                                lineHeight={{lg: "47px", base: "170%"}}
                                                listStyleType={"none"}

                                            >
                                                In-house compliance experts with 5–20 years of relevant
                                                experience to ensure financial software compliance with
                                                the required regulations.
                                            </chakra.li>
                                        </Flex>
                                        <Flex gap={"0.5rem"}>
                                            <Box
                                                bg={"#E9000E"}
                                                marginTop={{lg: "1.2rem", base: "0.7rem"}}
                                                width={{lg: "10px", base: "6px"}}
                                                height={{lg: "10px", base: "5px"}}
                                                maxWidth={{lg: "10px", base: "6px"}}
                                                maxHeight={{lg: "10px", base: "5px"}}
                                            ></Box>
                                            <chakra.li
                                                color={"#303030"}
                                                fontSize={{lg: "19px", base: "15px"}}
                                                lineHeight={{lg: "47px", base: "170%"}}
                                                listStyleType={"none"}

                                            >
                                                Well-established Lean, Agile, and DevOps cultures to
                                                provide prompt development.
                                            </chakra.li>
                                        </Flex>
                                        <Flex gap={"0.5rem"}>
                                            <Box
                                                bg={"#E9000E"}
                                                marginTop={{lg: "1.2rem", base: "0.7rem"}}
                                                width={{lg: "11px", base: "6px"}}
                                                height={{lg: "10px", base: "5px"}}
                                                maxWidth={{lg: "11px", base: "6px"}}
                                                maxHeight={{lg: "10px", base: "5px"}}
                                            ></Box>
                                            <chakra.li
                                                color={"#303030"}
                                                fontSize={{lg: "19px", base: "15px"}}
                                                lineHeight={{lg: "47px", base: "170%"}}
                                                listStyleType={"none"}

                                            >
                                                Quality-first approach based on a mature ISO
                                                9001-certified quality management system.
                                            </chakra.li>
                                        </Flex>
                                        <Flex gap={"0.5rem"}>
                                            <Box
                                                bg={"#E9000E"}
                                                marginTop={{lg: "1.2rem", base: "0.7rem"}}
                                                width={{lg: "10px", base: "5px"}}
                                                height={{lg: "10px", base: "5px"}}
                                                maxWidth={{lg: "10px", base: "5px"}}
                                                maxHeight={{lg: "10px", base: "5px"}}
                                            ></Box>
                                            <chakra.li
                                                color={"#303030"}
                                                fontSize={{lg: "19px", base: "15px"}}
                                                lineHeight={{lg: "47px", base: "170%"}}
                                                listStyleType={"none"}

                                            >
                                                Robust data security management supported by an ISO
                                                27001 certificate.
                                            </chakra.li>
                                        </Flex>
                                    </ul>
                                </Flex>
                            </Box>
                            {/* our approach */}
                            <Box width={{base: "100%", lg: "100%"}} scrollMarginTop={"150px"} id="OA"
                                 mt={{lg: "10rem", base: "6rem"}}>
                                <Box width={{base: "100%", lg: "100%"}}>
                                    <Flex
                                        justifyContent={"center"}
                                        borderRadius={"6px"}
                                        flexDir={"column"}
                                        w="100%"
                                    >
                                        <Heading
                                            fontSize={{lg: "26px", base: "20px"}}
                                            fontWeight="600"
                                            color="#565656"
                                            // width={{lg: "47%", base: "70%"}}
                                            lineHeight={{lg: "150%", base: "140%"}}
                                            mb={"1rem"}
                                        >
                                            <chakra.span
                                                color={"#E9000E"}
                                                fontSize={{base: "20px", lg: "26px"}}
                                            >
                                                Perks Of Our Approach{" "}
                                            </chakra.span>
                                            To BFSI Software Development
                                        </Heading>
                                        <Box
                                            width={"12%"}
                                            height={"3px"}
                                            background={"#FF0000"}
                                        ></Box>
                                    </Flex>
                                </Box>
                                <Box
                                    gap={{lg: "1rem", base: "1rem"}}
                                    flexWrap={"wrap"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    mt={"1.5rem"}
                                >
                                    {approach.map((item, index) => {
                                        return (
                                            <Flex
                                                key={index}
                                                width={{lg: "48%", base: "80%"}}
                                                height={{lg:"366px", base:"fit-content", sm:"fit-content", md:"fit-content"}}
                                                flexDirection={"column"}
                                                justifyContent={"center"}
                                                alignItems={"center"}
                                                padding={"2.5rem"}
                                                mb={"0.2rem"}
                                                boxShadow="0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)"
                                            >
                                                <Box
                                                    gap={"0.5rem"}
                                                    flexDirection={"column"}
                                                    justifyContent={"flex-start"}
                                                    alignItems={"flex-start"}
                                                    display={"flex"}
                                                >
                                                    <Text
                                                        fontSize={{lg: "20px", base: "18px"}}
                                                        fontWeight={600}
                                                        mt={"0.5rem"}
                                                        color={"#565656"}
                                                    >
                                                        {item.title}
                                                    </Text>
                                                    <Box
                                                        width={{lg: "15%", base: "48px"}}
                                                        height={"3px"}
                                                        background={"#FF0000"}
                                                    ></Box>
                                                    <Text
                                                        color={"#565656"}
                                                        fontSize={{lg: "16px", base: "14px"}}
                                                    >
                                                        {item.content}
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        );
                                    })}
                                </Box>
                            </Box>
                            {/* create section */}
                            <Box
                                width={"100%"}
                                mt={"3rem"}
                                position={"relative"}
                                borderRadius={"10px"}
                                boxShadow="0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)"
                            >
                                <Box width={{base: "100%", lg: "100%"}}>
                                    <Flex
                                        justifyContent={"center"}
                                        borderRadius={"6px"}
                                        w="100%"
                                        flexDirection={"column"}
                                        padding={"2rem 1.5rem 3rem"}
                                    >
                                        <Box>
                                            <Heading
                                                fontSize={{lg: "26px", base: "20px"}}
                                                fontWeight="600"
                                                color="#565656"
                                                width={{lg:"70%", base:"100%"}}
                                                lineHeight={"150%"}
                                                mb={"1rem"}
                                            >
                                                Create Forward Momentum for Bringing{" "}
                                                <chakra.span
                                                    color={"#E9000E"}
                                                    fontSize={{base: "20px", lg: "26px"}}
                                                >
                                                    Your BFSI Business to New Heights
                                                </chakra.span>
                                            </Heading>
                                            <Box
                                                width={{lg: "12%", base: "48px"}}
                                                height={"3px"}
                                                background={"#FF0000"}
                                            ></Box>
                                        </Box>
                                        <Box>
                                            {momentum.map((item, index) => (
                                                <Flex key={index} gap={"0.5rem"} color={"#3B3C3D"}
                                                      fontSize={{lg: "19px", base: "15px"}}
                                                      alignItems={"center"} mt={"1rem"}>
                                                    <Box marginBottom={{lg:"0.2rem", base:"0.8rem"}}>
                                                        <RiCheckboxBlankFill
                                                            style={{
                                                                color: "#D80808",
                                                                width: "7px",
                                                                height: "7px",
                                                            }}/>
                                                    </Box>
                                                    {item}
                                                </Flex>
                                            ))}
                                        </Box>

                                    </Flex>
                                    <Box
                                        position={"absolute"}
                                        top={{lg: "14px", base: "24px"}}
                                        left={{lg: "472px", base: "20"}}
                                        display={{lg: "block", base: "none"}}
                                    >
                                        <Image src={growth} width={259} height={184} alt="growth"/>
                                    </Box>
                                </Box>
                            </Box>
                            <Flex justifyContent={"flex-start"} gap={{lg:"2rem", base:".5rem"}} mt={"2rem"}>
                                <Link href={{
                                    pathname: appRoutes.contactUs,
                                    query: {service: "industries/banking"},
                                }}
                                      service="industries/corporate"
                                      className="request-services">
                                    <Button
                                        background={
                                            "linear-gradient(252.93deg, #ac2121 -22.82%, #e9000e 130.87%)"
                                        }
                                        boxShadow="0px 1px 2px rgba(0, 0, 0, 0.3),
                                                0px 1px 3px 1px rgba(0, 0, 0, 0.15)"
                                        borderRadius={"8px"}
                                        color={"#ffffff"}
                                        border={"none"}
                                        padding={{lg: "1.3rem 1rem", base: "0 .5rem"}}
                                        fontSize={{lg: "1rem", base: "10px"}}
                                        fontWeight={"500"}
                                        textTransform={"uppercase"}
                                    >
                                        Request a robust financial software
                                    </Button>
                                </Link>
                                <Link
                                    href={{
                                        pathname: appRoutes.services["cost-calculator"],
                                        query: {
                                            service: "bankingAndFinance-12",
                                        },
                                    }}
                                    >
                                    <Button
                                        background={"#ffffff"}
                                        borderRadius={"8px"}
                                        color={"#b10000"}
                                        border={"1px solid #b10000"}
                                        padding={{lg: "0.5rem 1rem", base: "0 .5rem"}}
                                        fontSize={{lg: "1rem", base: "10px"}}
                                        fontWeight={"500"}
                                        textTransform={"uppercase"}
                                        transition={"all 0.2s ease-in-out"}
                                    >
                                        get a quote
                                    </Button>

                                </Link>
                            </Flex>
                        </Box>
                    </Flex>
                    {/* become an agent section */}
                    <Flex
                        gap={"4rem"}
                        direction={{base: "column", lg: "row"}}
                        w={"100%"}
                        p={{base: "1rem", lg: "10rem 0 90px"}}
                        my={"2.5rem"}
                    >
                        {/* Get in touch */}
                        <Flex w={{base: "100%", md: "50%"}}>
                            <Flex
                                direction={"column"}
                                p={{lg: " 0 2rem"}}
                                borderRight={"10px solid #FFFFFF"}
                            >
                                <Box borderLeft={"6px solid #E9000E"} p={".5rem 2rem"}>
                                    <Text
                                        as="h2"
                                        fontSize={{base: "28px", lg: "34px"}}
                                        w={"100%"}
                                        fontWeight={"700"}
                                        lineHeight={'40px'}
                                    >
                                        Need a Finance Solution
                                        <Text color={"red"}>Not Described in the List?</Text>
                                    </Text>
                                </Box>
                                <Box display={{lg: "block", base: "none"}}>
                                    <Image src={Task} width={506} height={528} alt="Task"/>
                                </Box>
                            </Flex>
                            <Box
                                width={"20px"}
                                h={"100%"}
                                bg={"#FFFFFF"}
                                boxShadow={"11px 0px 29px rgba(0, 0, 0, 0.25)"}
                            >
                                {" "}
                            </Box>
                        </Flex>
                        {/* ========= Agent Form========= */}
                        <Box w={{base: "100%", md: "50%"}}>
                            <Text fontWeight='400' fontSize={{base: '18px', lg: '22px'}} lineHeight='170%' mb='1rem'>Feel
                                free to briefly describe your Banking Service needs for our team to promptly get back to
                                you.
                            </Text>
                            <ServicesForm services='Banking Services'/>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    );
};

export default Banking;

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
		padding: 0.4rem 1rem;
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
