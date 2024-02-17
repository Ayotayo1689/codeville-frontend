import React, {useState} from "react";
import HeaderOne from "../../HeaderOne";
import Image from "next/image";
import Link from "next/link";
import HealthIMG from "../../../../public/assets/healthcare/HealthIMG.png";
import ManagedImg from '../../../../public/assets/healthcare/it-infrastructure-components-healthcare.svg'
import {
    deliverables,
    managedBenefits,
    managedList,
    management,
    outsourceList,
    pricing,
    servicePackage,
    sideBarData,
} from "../data";
import {MdKeyboardArrowRight} from "react-icons/md";
import {
    Box,
    Button,
    Card,
    chakra,
    Container,
    Flex,
    Grid,
    Heading,
    List,
    ListIcon,
    ListItem,
    Text
} from "@chakra-ui/react";
import LogoMarquee from "../../logoMarquee";
import {BsArrowRight, BsFillSquareFill,} from "react-icons/bs";
import ContactUs from "../../contactUs";
import {techs} from "../../../../public/assets/healthcare";
import Projects from "./Projects";
import TantaTestimonial from "../../tantaTestimonials";
import appRoutes from "../../../utils/appRoutes";
import axiosInstance from "@/utils/config";

const ManagedItService = ({ testimonials }) => {
    const [activeLink, setActiveLink] = useState({});



    return (
        <>
            <Box mt={"5rem"} minHeight={"100vh"}>
                <HeaderOne heading={"solutions"} title={"Managed it services for healthcare"} />
                <Container maxW={"7xl"} px={{ lg: "5rem", base: "2rem" }}>
                    {/* Hero section */}
                    <Flex
                        flexDirection={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={"4rem"}
                    >
                        <Box width={{lg:"100%", base:"70%"}} paddingTop={{lg:"0", base:"1rem"}}>
                            <Image
                                src={HealthIMG}
                                alt={"hero image"}
                                width={1201}
                                height={504}
                            />

                        </Box>

                        <Text
                            fontSize={{ lg: "24px", base: "15px", }}
                            textAlign={"center"}
                            fontWeight={400}
                            lineHeight={"170%"}
                        >
                            Tanta Innovative Limited is well prepared to guarantee the utmost reliability, security, and strict adherence to regulatory standards for healthcare applications and IT infrastructure. Through our Managed IT Services, healthcare organizations can maintain stable, secure, and fully compliant IT infrastructures and medical software in accordance with domain regulations and standards.
                        </Text>
                    </Flex>
                    <Flex gap={"5rem"} justify={"center"} mb={"7rem"} mt={"4rem"}>
                        <Flex
                            display={{ lg: "block", base: "none" }}
                            flexDir="column"
                            boxShadow={"lg"}
                            height={"fit-content"}
                            flex={1}
                            width={{ base: '100%', lg: "30%"}}
                            position={{ base: '', lg: "sticky"}}
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
                                borderTopRadius={"lg"}
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
                                                    setActiveLink({ [item.id]: true });
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
                                                style={{ marginLeft: "47px" }}
                                            />
                                        </Flex>
                                    );
                                })}
                            </Box>
                        </Flex>

                        <Box width={{ base: '100%', lg: '70%'}}>
                            {/* specify your preference */}
                            <Heading
                                fontWeight={'700'}
                                fontSize={{base: "1.2rem", lg: '32px'}}
                                lineHeight={{base: '26px', lg: "44px"}}
                            >
                                Healthcare IT Infrastructure Components We Support
                            </Heading>
                            <Box
                                width={{lg:"100px", base:"50px"}}
                                height={"3px"}
                                mb={'2.5rem'}
                                mt={".6rem"}
                                bg={"#D80808"}
                            ></Box>

                            <Image src={ManagedImg} alt={'image'} />

                            <Box mt={"4rem"} id="About_us" scrollMarginTop={"150px"}>
                                <List spacing={2} mt={"1rem"}>
                                    {managedList.map((item, index) => {
                                        return (
                                            <ListItem pl={4}
                                                      key={"index"}
                                            >
                                                <Flex flexGrow={"1"} >
                                                    <ListIcon as={BsFillSquareFill} color='red' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                                    <Text>
                                                        {item}
                                                    </Text>
                                                </Flex>
                                            </ListItem>
                                        );
                                    })}
                                    <Text
                                        fontWeight={'400'}
                                        fontSize='20px'
                                        lineHeight={'170%'}>We provide the following services separately or in combination.</Text>
                                </List>
                            </Box>

                            {/* Comprehensive IT */}
                            <Box  mt={"4rem"} id="About_us" scrollMarginTop={"150px"}>
                                <Heading
                                    fontWeight="600"
                                    fontSize={{ base: "20px", lg: "30px" }}
                                    textTransform="capitalize"
                                    color="#444444"
                                    lineHeight={{lg:"140%", base:"150%"}}
                                    mb={"1.5rem"}
                                >
                                    Comprehensive {' '}
                                    <span style={{color: "#E9000E"}}>
                                        Healthcare
                                    </span> <br/>
                                    IT management
                                </Heading>

                                <Grid gridTemplateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={'2rem'}>
                                    {management.map((item, index) => (
                                        <Card key={index}
                                              w={{ base: '100%', lg: '100%'}}
                                              padding={'20px 10px'}
                                              display='flex'
                                              flexDir='column'
                                              // justifyContent={'center'}
                                              alignItems={'center'}
                                              gap={'1rem'}
                                              boxShadow=" 0px 1.55172px 3.10345px rgba(0, 0, 0, 0.3), 0px 3.10345px 9.31034px 3.10345px rgba(0, 0, 0, 0.15)"
                                              mb={"1rem"}>
                                            <Image src={item?.img} alt={item?.title} />
                                            <Text
                                                fontSize={{lg:"20px", base:"18px"}}
                                                fontWeight={400}
                                                textDecor={"underline"}
                                                lineHeight={"170%"} textAlign={"center"}>{item?.title}</Text>

                                            <Box padding={'1rem'}>
                                                <Text color={"#303030"}
                                                      fontSize={{lg:"14px", base:"14px"}}>{item?.text}</Text>
                                                <List spacing={2} mt={"1rem"}>
                                                    {item?.lists.map((list, index) => {
                                                        return (
                                                            <ListItem pl={4}
                                                                      key={"index"}
                                                            >
                                                                <Flex flexGrow={"1"} >
                                                                    <ListIcon as={BsFillSquareFill} color='red' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                                                    <Text>
                                                                        {list}
                                                                    </Text>
                                                                </Flex>
                                                            </ListItem>
                                                        );
                                                    })}
                                                </List>
                                            </Box>

                                        </Card>
                                    ))}
                                </Grid>
                            </Box>


                            {/* About us section */}
                            <Box mt={"4rem"} id="About_us" scrollMarginTop={"150px"}>
                                <Heading
                                    fontWeight="600"
                                    fontSize={{ base: "20px", lg: "30px" }}
                                    textTransform="capitalize"
                                    color="#444444"
                                    lineHeight={{lg:"140%", base:"150%"}}
                                    mb={"0.5rem"}
                                >
                                    Why Outsource your IT Infrastructure to {" "}
                                    <Text
                                        color={"#E9000E"}
                                        fontSize={{ base: "20px", lg: "30px" }}
                                    >
                                        {" "}
                                        Tanta Innovative
                                    </Text>
                                </Heading>
                                <List spacing={2} mt={"1rem"}>
                                    {outsourceList.map((item, index) => {
                                        return (
                                            <ListItem pl={4}
                                                      key={"index"}
                                            >
                                                <Flex flexGrow={"1"} >
                                                    <ListIcon as={BsFillSquareFill} color='red' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                                    <Text>
                                                        {item}
                                                    </Text>
                                                </Flex>
                                            </ListItem>
                                        );
                                    })}
                                </List>
                                <Flex
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    flexDirection={"column"}
                                    margin={{ lg: "3rem 0", base: "1.5rem 0.8rem" }}
                                >
                                    <Box maxWidth={"1200px"} position={"relative"}>
                                        <Box whiteSpace={"nowrap"} overflow={"hidden"}>
                                            <div>
                                                <LogoMarquee  colored={true} />
                                            </div>
                                        </Box>
                                    </Box>
                                </Flex>
                            </Box>

                            {/* Tanta solutions section */}
                            <Box mt={"4rem"} id="SWE" scrollMarginTop={"150px"} >
                                <Flex
                                    flexDirection={"column"}
                                    marginLeft={{ lg: "15px", base: "0" }}
                                >
                                    <Heading
                                        fontWeight="600"
                                        fontSize={{ base: "20px", lg: "30px" }}
                                        textTransform="capitalize"
                                        textAlign={'start'}
                                        color="#444444"
                                        lineHeight={{lg:"140%", base:"150%"}}
                                        mb={"0.5rem"}
                                    >
                                        Our Service Package to Meet All Your Expectations
                                    </Heading>
                                </Flex>
                                <Grid gridTemplateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)'}} gap={'2rem'} my={'2rem'}>
                                    {servicePackage.map((item, index) => (
                                        <Card w={{ base: '100%', lg: '100%' }} key={index}
                                            display={'flex'}
                                            // justify={'center'}
                                            align={'center'}
                                            flexDir={'column'}
                                            textAlign={'center'}
                                            p={'2rem 1rem'}
                                            gap={'1rem'}
                                        >
                                            <Image src={item?.img} alt={item?.title} />
                                            <Text
                                                fontWeight={'700'}
                                                fontSize={'22px'}
                                                lineHeight={'30px'}
                                            >
                                                {item?.title}
                                            </Text>
                                            <Text
                                                fontWeight='700'
                                                fontSize='18px'
                                                lineHeight='25px'
                                            >
                                                {item?.subtitle}
                                            </Text>
                                            <Box minH={{base: "none", lg: "13rem"}} mb={{base: "1rem", lg: "unset"}}>
                                                <Text
                                                    fontWeight='400'
                                                    fontSize='16px'
                                                    lineHeight='25px'
                                                >
                                                    {item?.text}
                                                </Text>
                                            </Box>
                                            <Link href={{
                                                pathname:"/industries/health-care/health-care-forms",
                                                query:{ id: item?.linkId}
                                            }} style={{ border: '2px solid red',
                                                borderRadius: '6px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '180px',
                                                height: '40px',
                                                color: 'red', textAlign: 'center' }}>I'm interested <BsArrowRight style={{ color: 'red', marginLeft: '6px'}} /></Link>
                                        </Card>
                                    ))}
                                </Grid>
                            </Box>

                            {/* benefits of cooperation */}
                            <Box id="BOS" scrollMarginTop={"150px"}>
                                <Flex
                                    flexDirection={"column"}
                                    marginLeft={{ lg: "15px", base: "0" }}
                                >
                                    <Heading
                                        fontWeight="600"
                                        fontSize={{ base: "20px", lg: "30px" }}
                                        textTransform="capitalize"
                                        color="#444444"
                                        lineHeight={{lg:"140%", base:"150%"}}
                                        mb={"0.5rem"}
                                    >
                                        Benefits Of Healthcare Managed Services By{" "}
                                        <Text
                                            color={"#E9000E"}
                                            fontSize={{ base: "20px", lg: "30px" }}
                                        >
                                            {" "}
                                            Tanta Innovative Limited
                                        </Text>
                                    </Heading>

                                    <Box
                                        width={{lg:"60px", base:"50px"}}
                                        height={"3px"}
                                        bg={"#D80808"}
                                    ></Box>
                                    <Text fontWeight={'400'}
                                          fontSize={'18px'}
                                          my={'1rem'}
                                          line-height='170%'>No more frustrated users, compliance issues, or high IT infrastructure maintenance costs. When ScienceSoft’s team gets to work, you should expect: </Text>
                                    <Box
                                        gap={{ lg: "4rem", base: "1rem" }}
                                        flexWrap={"wrap"}
                                        display={"flex"}
                                        marginBottom={"2rem"}
                                        mt={"2rem"}
                                        justifyContent={"start"}
                                        // alignItems={{base: "center", lg: "unset"}}
                                    >
                                        {managedBenefits.map((item, index) => {
                                            return (
                                                <Box
                                                    padding={"2rem 1rem"}
                                                    gap={"0.9rem"}
                                                    flexDirection={"column"}
                                                    // justifyContent={"center"}
                                                    alignItems={"center"}
                                                    display={"flex"}
                                                    key={index}
                                                    width={{ lg: "45%", base: "100%" }}
                                                    border={'1px solid rgba(0, 0, 0, 0.5)'}
                                                    borderRadius={'8px'}
                                                >
                                                    <Image
                                                        src={item.img}
                                                        alt={item.title}
                                                        width={54}
                                                        height={54}
                                                        display="flex"
                                                        alignItems="center"
                                                        justifyContent="center"
                                                        marginBottom="1rem"
                                                        margin="0 auto"
                                                    />
                                                    <Text
                                                        fontSize={{lg:"18px", base:"18px"}}
                                                        fontWeight={500}
                                                        textAlign={"center"}
                                                        lineHeight={"130%"}
                                                    >
                                                        {item.title}
                                                    </Text>
                                                    <List spacing={2} mt={"1rem"}>
                                                        {item?.lists.map((item, index) => {
                                                            return (
                                                                <ListItem pl={4}
                                                                          key={"index"}
                                                                >
                                                                    <Flex flexGrow={"1"} >
                                                                        <ListIcon as={BsFillSquareFill} color='red' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                                                        <Text>
                                                                            {item}
                                                                        </Text>
                                                                    </Flex>
                                                                </ListItem>
                                                            );
                                                        })}
                                                    </List>
                                                </Box>
                                            );
                                        })}
                                    </Box>
                                </Flex>
                            </Box>

                            {/* Testimonial Section */}
                            <Box
                                display={"flex"}
                                flexDir="column"
                                mb="4.5rem"
                                marginLeft={"35px"}
                                id="testimonials"
                                scrollMarginTop={"150px"}
                            >
                                
                                {/* testimonial card */}
                                <TantaTestimonial  testimonials={testimonials}/>
                                {/* testimonial card */}
                            </Box>

                            {/* Technologies */}
                            <Box mt={"2rem"} id="CAP" scrollMarginTop={"150px"}>
                                <Box my={'1.5rem'}>
                                    <Image src={techs} alt={'technologies'} />
                                </Box>
                            </Box>

                            {/* success stories */}
                            <Box mt={"2rem"} id="CAP" scrollMarginTop={"150px"}>
                                <Flex
                                    flexDirection={"column"}
                                    marginLeft={{ lg: "15px", base: "0" }}
                                >
                                    <Heading
                                        fontWeight="600"
                                        fontSize={{ base: "20px", lg: "30px" }}
                                        textTransform="capitalize"
                                        color="#444444"
                                        lineHeight={{lg:"140%", base:"150%"}}
                                        mb={"0.5rem"}
                                    >
                                        Deliverables of Our Managed Services For {" "}<br />
                                        <chakra.span color="#E9000E"  fontSize={{ base: "20px", lg: "30px" }} >
                                            {" "}
                                            Healthcare
                                        </chakra.span>
                                    </Heading>
                                    <Box
                                        width={{lg:"60px", base:"50px"}}
                                        height={"3px"}
                                        bg={"#D80808"}
                                    ></Box>
                                    <Text my={'1.5rem'}>Naturally, we define the specific set of deliverables depending on the service scope, infrastructure components covered, cooperation model, and other factors. But one thing is constant: we always commit to the service quality and transparency. To make sure you receive comprehensive reporting and documentation, we deliver:</Text>
                                    <List spacing={2} mt={"1rem"}>
                                        {deliverables?.map((item, index) => {
                                            return (
                                                <ListItem pl={4}
                                                          key={"index"}
                                                >
                                                    <Flex flexGrow={"1"} >
                                                        <ListIcon as={BsFillSquareFill} color='red' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                                        <Text>
                                                            {item}
                                                        </Text>
                                                    </Flex>
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                </Flex>
                            </Box>

                            {/* Investments section */}
                            <Box mt={"1rem"} scrollMarginTop={"150px"} id="invest">
                                <Flex
                                    flexDirection={"column"}
                                    marginLeft={{ lg: "15px", base: "0" }}
                                >
                                    <Heading
                                        fontWeight="600"
                                        fontSize={{ base: "20px", lg: "30px" }}
                                        textTransform="capitalize"
                                        color="#444444"
                                        lineHeight={{lg:"140%", base:"150%"}}
                                        mb={"0.5rem"}
                                    >
                                        Benefit from Flexible Pricing for Healthcare<br /> Managed IT Services
                                    </Heading>
                                    <Box
                                        width={{lg:"60px", base:"50px"}}
                                        height={"3px"}
                                        bg={"#D80808"}
                                        mb={{lg:"0", base:"1rem"}}
                                    ></Box>
                                    <Grid gridTemplateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }} gap={'1rem'} mt={'2rem'}>
                                        {pricing.map((item, index) => (
                                            <Box key={index} border={'1px solid #DADFE3'} display={'flex'} justify={'center'}
                                                 align={'center'}
                                                 flexDir={'column'}
                                                 p={'1.3rem'}
                                                 gap={'1rem'}
                                            >
                                                <Flex justify={"center"}>
                                                    <Image src={item?.img} alt={item?.title} />
                                                </Flex>
                                                <Text fontWeight={'700'}
                                                      fontSize={'20px'}
                                                      lineHeight={'23px'}
                                                      my={'1rem'}
                                                      textAlign={'center'}>{item?.title}</Text>
                                                <Text fontWeight={'400'}
                                                      fontSize={'14px'}
                                                      lineHeight={'25px'}
                                                      textAlign={'start'}>{item?.text}</Text>
                                                {/*<RiCheckboxBlankFill /> BsArrowRight*/}
                                                <Text fontWeight={'400'}
                                                      fontSize={'14px'}
                                                      lineHeight={'25px'}
                                                      textAlign={'start'}><span style={{ fontWeight: '700'}}>Best for: </span> {item?.best}</Text>
                                            </Box>
                                        ))}
                                    </Grid>


                                </Flex>
                            </Box>

                            {/* featured projects */}
                            {/*<Box id="invest" scrollMarginTop={"150px"}>*/}
                            {/*    <Projects />*/}
                            {/*</Box>*/}
                            {/* focus on saving lives */}
                            <Box
                                scrollMarginTop={"150px"}
                                width={{ base: "100%", lg: "100%" }}
                                height={{ lg: "250px", base: "fit-content" }}
                                boxShadow={
                                    "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)"
                                }
                                padding={"1rem"}
                                marginBlockStart={"3rem"}
                            >
                                <Flex
                                    justifyContent={"center"}
                                    borderRadius={"6px"}
                                    flexDir={"column"}
                                    w="100%"
                                >
                                    <Heading
                                        fontSize={{ lg: "26px", base: "20px" }}
                                        lineHeight="150%"
                                        fontWeight="600"
                                        textTransform="capitalize"
                                        color="#444444"
                                        mb={"1rem"}
                                    >
                                        Focus on Saving Lives. We Will Handle the IT
                                    </Heading>
                                    <Box
                                        width={{ lg: "60px", base: "50px" }}
                                        height={"3px"}
                                        bg={"#D80808"}
                                    ></Box>
                                    <Flex alignItems={"center"} gap={"3rem"} flexDir={{ base: 'column', lg: 'row' }}>
                                        <Text
                                            fontWeight="400"
                                            fontSize={{lg: "16px", base: "14px"}}
                                            my="20px"
                                        >
                                            We understand the challenges, level of responsibility, and
                                            cost of a single error in the healthcare field. Tanta
                                            Innovative is here to share this responsibility with you —
                                            while you are busy taking care of your patients, we will
                                            make sure your IT infrastructure and software never let
                                            you down.
                                        </Text>
                                        <Link href={appRoutes.contactUs}>
                                            <Button
                                                width={{lg: "100%", base: "100%"}}
                                                // height={{ lg: "44px", base: "40px" }}
                                                bg={"linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"}
                                                color={"#fff"}
                                                borderRadius={"8px"}
                                                fontWeight={"500"}
                                                fontSize={{lg: "16px", base: "14px"}}
                                                type="submit"
                                            >
                                                Talk To Us
                                            </Button>
                                        </Link>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                </Container>
            </Box>
            {/* contact us */}
            <Box>
                <ContactUs subtitle='We’re here to support' />
            </Box>
        </>
    );
};

export default ManagedItService;
