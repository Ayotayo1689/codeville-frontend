import React, {useState} from "react";
import HeaderOne from "../../HeaderOne";
import Image from "next/image";
import Link from "next/link";
import HealthIMG from "../../../../public/assets/healthcare/HealthIMG.png";
import ManagedImg from '../../../../public/assets/healthcare/it-infrastructure.png'
import {spark, technos} from '../../../../public/assets/healthcare'
import {ecosystem, itSupport, medicalSupport, serviceOption, supportSideBar,} from "../data";
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
    Spacer,
    Text
} from "@chakra-ui/react";
import LogoMarquee from "../../logoMarquee";
import {BsArrowRight, BsFillSquareFill,} from "react-icons/bs";
import ContactUs from "../../contactUs";
import Chat from "../../../../public/assets/medicalSoftwarePage/chat.svg";
import TantaTestimonial from "../../tantaTestimonials";
import appRoutes from "../../../utils/appRoutes";
import HandpickedProject from "@/components/dataAnalytics/handpickedProject";

const HealthcareItSupport = ({ testimonials }) => {
    const [activeLink, setActiveLink] = useState({});



    return (
        <>
            <Box mt={"5rem"} minHeight={"100vh"}>
                <HeaderOne heading={"solutions"} title={"Healthcare IT Support Services"} />
                <Container maxW={"7xl"} px={{ lg: "5rem", base: "2rem" }} bg={{ base: "#F7F2FA", lg: "white" }}>
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
                            Tanta specializes in providing reliable IT support services to healthcare organizations. With a strong presence in the healthcare IT industry since 2005, Tanta is committed to ensuring the seamless operation of IT infrastructure and resolving issues promptly. Our goal is to safeguard the IT systems of healthcare providers and support their ongoing IT evolution.
                        </Text>
                    </Flex>
                    <Flex gap={"5rem"} justify={"center"} mb={"7rem"} mt={"4rem"}>
                        <Flex
                            display={{ lg: "block", base: "none" }}
                            flexDir="column"
                            boxShadow={"lg"}
                            height={"fit-content"}
                            flex={1}
                            width={{ base: '100%', lg: "35%"}}
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
                                {supportSideBar.map((item, index) => {
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
                                                    setActiveLink({ [item?.id]: true });
                                                }}
                                                style={{
                                                    color: activeLink[item.id] ? "red" : "",
                                                    fontSize: "18px",
                                                    fontWeight: "400",
                                                    cursor: "pointer",
                                                    width: "100%",
                                                }}
                                                href={`#${item?.id}`}
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

                        <Box width={{ base: '100%', lg: '65%'}}>
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
                                        Want to achieve  healthcare IT reliability
                                    </Heading>
                                    <Box
                                        width={{ lg: "60px", base: "50px" }}
                                        height={"3px"}
                                        bg={"#D80808"}
                                    ></Box>
                                    <Flex alignItems={"center"} flexDir={{ base: 'column', lg: 'row' }} gap={"3rem"}>
                                        <Text
                                            fontWeight="400"
                                            fontSize={{lg: "16px", base: "14px"}}
                                            my="20px"
                                        >
                                            Tanta’s team can support your healthcare IT
                                            environment according to ITSM practices to resolve
                                            infrastructure issues proactively and avoid compliance
                                            breaches.
                                        </Text>
                                        <Link href={{
                                            pathname: appRoutes.services["cost-calculator"],
                                            query: {
                                                service: "healthCare-0",
                                            },
                                        }}>
                                            <Button
                                                width={{lg: "100%", base: "100%"}}
                                                //height={{ lg: "44px", base: "40px" }}
                                                bg={"#E9000E"}
                                                p={'.6rem'}
                                                color={"#fff"}
                                                fontWeight={"500"}
                                                fontSize={{lg: "14px", base: "13px"}}
                                                type="submit"
                                            >
                                                I'M INTERESTED IN HEALTHCARE <br/> IT SUPPORT
                                            </Button>
                                        </Link>
                                    </Flex>
                                </Flex>
                            </Box>

                            {/*========== Spark market  ========*/}
                            <Flex p={'2rem'} my={'2rem'} background={'#E8EEF1'} flexDir={{ base: 'column', lg: 'row' }}>
                                <Box w={{ base: '100%', lg: '50%'}} mr={'1.4rem'}>
                                    <Heading fontWeight={'700'}
                                             fontSize={{lg:'24px', base:'20px'}}
                                             mb={'1rem'}
                                             lineHeight={'33px'}>
                                        Tanta is a leader in Healthcare IT Services Market in 2022 SPARK Matrix
                                    </Heading>
                                    <Text fontWeight='400'
                                          fontSize={{lg:'18px', base:'16px'}}
                                          lineHeight={'32px'}
                                          color={' #2B2C2D'}>Tanta is listed as a top healthcare IT services supplier, alongside Athena Health and Oracle Cerner. This accomplishment is the product of 18 years of relentless pursuit of technical innovation, made possible by Tanta's enthusiastic team of healthcare IT specialists who always strive to make a difference for patients and caregivers alike.</Text>
                                </Box>
                                <Spacer />
                                <Image src={spark} alt={'Spark Matrix'} />
                            </Flex>



                            {/* specify your preference */}
                            <Box my={'2rem'} id="support" scrollMarginTop={"150px"}>
                                <Heading fontWeight={'700'} fontSize={{lg:'32px', base:'22px'}}
                                         lineHeight={{lg:'44px', base:'36px'}}>Our Range of Medical IT Support Services</Heading>
                                <Box
                                    width={{lg:"100px", base:"50px"}}
                                    height={"3px"}
                                    mb={'2.5rem'}
                                    bg={"#D80808"}
                                ></Box>

                                <Grid gridTemplateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)'}} gap={'2rem'} my={'2rem'}>
                                    {medicalSupport.map((item, index) => (
                                        <Card w={{ base: '100%%', lg: '100%' }} key={index}
                                              display={'flex'}
                                              justify={'start'}
                                              align={'center'}
                                              flexDir={'column'}
                                              textAlign={'start'}
                                              p={'2rem 1rem'}
                                              gap={'1rem'}>
                                            <Image src={item?.img} alt={item?.title} style={{ alignSelf: 'start' }} />
                                            <Text fontWeight={'700'}
                                                  fontSize={'20px'}
                                                  lineHeight={'27px'}>{item?.title}</Text>

                                            <ol>
                                                {item?.lists.map((list, index) => (
                                                    <Flex gap={"0.5rem"} key={index} ml={'1.4rem'}>
                                                        <chakra.li
                                                            color={"#303030"}
                                                            fontSize={{lg:"14px", base:"14px"}}
                                                            lineHeight={{lg:"170%", base:"170%"}}
                                                            listStyleType={"none"}
                                                        >
                                                            {list}
                                                        </chakra.li>
                                                    </Flex>
                                                ))}
                                            </ol>
                                        </Card>
                                    ))}
                                </Grid>
                            </Box>

                            <Box mt={'4rem'} scrollMarginTop={'150px'}>
                                <Heading fontWeight={'700'} fontSize={{lg:'32px', base:'22px'}}
                                         lineHeight={{lg:'44px', base:'36px'}}>Healthcare IT Infrastructure Components We Support</Heading>
                                <Box
                                    width={{ lg:"150px", base:"60px" }}
                                    height={"3px"}
                                    bg={"#D80808"}
                                    mb={'1rem'}
                                    mt={'.6rem'}
                                ></Box>
                                <Image src={ManagedImg} alt={'image'} />
                            </Box>


                            <Box mt={"4rem"} id="solution" scrollMarginTop={"150px"}>
                               <Text mb={'1rem'}>Our outsourced medical IT support experts are ready to maintain, troubleshoot and improve the
                                   following elements of medical IT environment: </Text>

                                <Grid gridTemplateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)'}} gap={{ base: '1.5rem', lg: '2rem'}} m={{base: "1rem 1rem 1rem 2rem", lg:" 0 0 0 1.5rem"}}>
                                    <ul>
                                        <li>Networks</li>
                                        <li>On-premises data center</li>
                                        <li>Cloud services (IaaS, PaaS, SaaS).</li>
                                        <li>Cybersecurity tools (SIEM, IAM, firewalls,</li>
                                        <li>Medical applications and their integrations (EHR, HIS, practice management systems, telemedicine apps, patient and physician apps and portals, hospital apps, user apps for medical devices, etc.).</li>
                                    </ul>
                                    <ul>
                                        <li>Data management and storage (databases, data warehouses, data lakes).</li>
                                        <li>Messaging and data transfer systems.</li>
                                        <li>Application development infrastructure. </li>
                                        <li>Desktops, tablets, mobile devices.</li>
                                        <li>Medical devices infrastructure.</li>
                                        <li>IoT devices (smart wearable and stationary medical devices, e.g., cardiac monitors, CT scanners)</li>
                                    </ul>
                                </Grid>
                            </Box>


                            {/* About us section */}
                            <Box mt={"4rem"} id="about" scrollMarginTop={"150px"}>
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
                                <Flex
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    flexDirection={"column"}
                                    margin={{ lg: "1rem 0", base: "1.5rem 0.8rem" }}
                                >
                                    <Box maxWidth={"1200px"} position={"relative"}>
                                        <Box whiteSpace={"nowrap"} overflow={"hidden"}>
                                            <div>
                                                <LogoMarquee  colored={true} />
                                            </div>
                                        </Box>
                                    </Box>
                                </Flex>
                                <List>
                                    {itSupport.map((item, index) => (
                                        <ListItem pl={4}
                                                  key={index}
                                        >
                                            <Flex flexGrow={"1"} >
                                                <ListIcon as={BsFillSquareFill} color='red' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                                <Text>
                                                    {item}
                                                </Text>
                                            </Flex>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>

                            <Box mt={"4rem"} >
                                <Heading fontWeight={'700'} fontSize={{lg:'32px', base:'22px'}}
                                         lineHeight={{lg:'44px', base:'36px'}}> Providing Answers To Common Inquires about Healthcare IT Support
                                </Heading>
                                <Box
                                    width={{lg:"100px", base:"60px"}}
                                    height={"3px"}
                                    bg={"#D80808"}
                                ></Box>
                                <Flex>
                                    <Image src={Chat} alt={"chats"}/>
                                </Flex>
                            </Box>

                            {/* Technologies */}
                            <Box mt={"4rem"} id="techs" scrollMarginTop={"150px"}>
                                <Heading fontWeight={'700'} fontSize={{lg:'32px', base:'22px'}}
                                         lineHeight={{lg:'44px', base:'36px'}}>Technologies we use Healthcare IT Support</Heading>
                                <Box
                                    width={{lg:"130px", base:"60px"}}
                                    height={"3px"}
                                    bg={"#D80808"}
                                ></Box>
                                <Box my={'1.5rem'}>
                                    <Image src={technos} alt={'technologies'} />
                                </Box>
                            </Box>


                            {/* Tanta solutions section */}
                            <Box mt={"4rem"} id="service" scrollMarginTop={"150px"} >
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
                                        Choose Your Service Option
                                    </Heading>
                                </Flex>
                                <Grid gridTemplateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)'}} gap={'2rem'} my={'2rem'}>
                                    {serviceOption.map((item, index) => (
                                        <Card w={'100%'} key={index}
                                              display={'flex'} justify={'center'}
                                              align={'center'} flexDir={'column'}
                                              textAlign={'center'} p={'2rem 1rem'}
                                              gap={'1rem'} borderTop={'6px solid red'}>
                                            <Text fontWeight={'700'}
                                                  fontSize={'20px'}
                                                  lineHeight={'30px'}>{item?.title}</Text>
                                            <Text fontWeight='400'
                                                  fontSize='16px'
                                                  lineHeight='25px'>{item?.text}</Text>

                                            <Link href={{
                                                pathname:"/industries/health-care/health-care-forms",
                                                query:{ id: item?.linkId}
                                            }} style={{
                                                border: '2px solid red',
                                                borderRadius: '6px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '180px',
                                                height: '40px',
                                                color: 'red', textAlign: 'center'
                                            }}>I need this <BsArrowRight
                                                style={{color: 'red', marginLeft: '6px'}}/></Link>
                                        </Card>
                                    ))}
                                </Grid>
                            </Box>

                            {/* Testimonial Section */}
                            <Box
                                mb="4.5rem"
                                id="FAQ"
                                scrollMarginTop={"150px"}
                            >

                                {/* testimonial card */}
                                <TantaTestimonial testimonials={testimonials} />
                                {/* testimonial card */}
                            </Box>

                            {/* ======= ecosystem =======*/}
                            <Box my={"2rem"} id={'benefits'} scrollMarginTop={"150px"}>
                                <Heading fontWeight={'700'} fontSize={{lg:'32px', base:'22px'}}
                                         lineHeight={{lg:'44px', base:'36px'}}>Healthcare IT Ecosystem Components We Support</Heading>
                                <Box
                                    width={{lg:"100px", base:"60px"}}
                                    height={"3px"}
                                    bg={"#D80808"}
                                ></Box>
                                <Grid gridTemplateColumns={'repeat(2, 1fr)'} gap={'1rem'} mt={'1.5rem'}>
                                    {ecosystem.map((item, index) => (
                                        <Box key={index} textAlign={'start'} my={'.6rem'}>
                                            <Text  fontWeight={'700'} fontSize={{lg:'32px', base:'22px'}}
                                                   lineHeight={{lg:'44px', base:'36px'}} mb={'.6rem'}>{item?.rate}</Text>
                                            <Text fontSize={{lg:"16px", base:"15px"}}>{item?.text}</Text>
                                        </Box>
                                    ))}
                                </Grid>
                            </Box>
                            {/* success stories */}
                            <Box
                                gap={{ lg: "3rem", base: "1rem" }}
                                flexWrap={"wrap"}
                                display={"flex"}
                                marginBottom={"2rem"}
                                mt={"2rem"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                id="CAP"
                                scrollMarginTop={"150px"}
                            >
                                <HandpickedProject title={"CASE STUDIES"} heading={"Our Selected IT Consulting Services Projects"}/>
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

export default HealthcareItSupport;
