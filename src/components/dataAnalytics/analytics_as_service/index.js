import React from "react";
import {Box, chakra, Container, Flex, Heading} from "@chakra-ui/react";
import HeaderOne from "../../HeaderOne";
import consultingImg from "../../../../public/assets/dataAnalytics/analyticsConsulting/consultingImg.png";
import {analyticsConsultingsidebar} from "./data";
import About from "./about";
import ConsultingServices from "./consultingServices";
import Summary from "./summary";
import ContactUs from "../../contactUs/index";
import Approach from "./approach";
import {Consulting} from "../../services/itConsulting/cloudComputing";
import {Wrapper} from "../../services/itConsulting/digital_transformation_consulting";
import AaaSHeroHeader from "./hero";
import Sidebar from "../../services/itConsulting/Sidebar";
import HandpickedProject from "../handpickedProject";
import Highlights from "./highlights";
import {highlights} from "../data";

function AnalyticsService({testimonials, cases}) {

    return (
        <>
            <Consulting>
                <HeaderOne
                    heading={"data analytics"}
                    title={"Analytics as a service"}
                />

                <Container maxW={"7xl"} px={{lg: "5rem", sm: "0", base: "0"}} bg={{ base: "#F7F2FA", lg: "white" }}>
                    <Wrapper>
                        <AaaSHeroHeader title={'Seeking better analytics solutions to meet your needs?'}
                                        text={'Data analytics implies building an infrastructure for data aggregation, analysis, and reporting. An experienced provider of data analytics services, ScienceSoft delivers on simple and complex needs with tailored business analytics solutions.'}
                                        imageUrl={consultingImg}/>

                        <Box mt={"4rem"}>
                            <Flex gap={{base: '0', md: '0', lg: '2rem'}} j>
                                <Sidebar title={"CONTENTS"} items={analyticsConsultingsidebar} height={"fit-content"}/>

                                <Box pl={{base: '0', md: '0', lg: '1rem'}} width={{base: '100%', lg: "65%"}}>

                                    <Box id={"about"} scrollMarginTop={"120px"}>
                                        <Heading
                                            fontWeight="700"
                                            fontSize={{base: "20px", lg: "30px"}}
                                            color=" #414141"
                                            lineHeight={{lg: "140%", base: "150%"}}
                                            mb={"0.5rem"}
                                        >
                                            Discover The Reliability Of&nbsp;
                                            <chakra.span
                                                color="#E9000E"
                                                fontSize={{base: "20px", lg: "30px"}}
                                            >
                                                Tanta Innovative Limited
                                            </chakra.span>
                                            {" "}
                                            As A DAaaS Provider.
                                        </Heading>
                                        <div
                                            style={{
                                                width: "6rem",
                                                height: "2px",
                                                background: "#D80808",
                                                marginBottom: "1rem ",
                                            }}
                                        ></div>
                                        <About/>
                                    </Box>
                                    <Box mb={'4rem'} id={"approach"} scrollMarginTop={"150px"}>
                                        <Approach/>
                                    </Box>
                                    <Box id="highlights" mt={"5rem"} scrollMarginTop={"150px"}>
                                        <Highlights data={highlights}/>
                                    </Box>
                                    <ConsultingServices testimonials={testimonials}/>
                                    <Box id="projects" mt={"5rem"} scrollMarginTop={"150px"}>
                                        <HandpickedProject cases={cases}/>
                                    </Box>
                                    <Box id="summary" mt={"5rem"} scrollMarginTop={"150px"}>
                                        <Summary/>
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </Wrapper>
                </Container>
                <ContactUs subtitle="We’re here to support"/>

            </Consulting>
        </>
    );
}

export default AnalyticsService;
