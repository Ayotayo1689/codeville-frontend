import React from "react"
import {Box,  Flex, Container } from "@chakra-ui/react"
import HeroSection from "./heroSection/index"
import SidebarSection from "./sidebarSection"
import AboutTanta from "./aboutTanta";
import Customers from "./customers";
import ConsultingOptions from "./consultingOptions";
import ComprehensiveRange from "./comprehensiveRange";
import StepByStep from "./stepByStep";
import TechnologiesCards from "./technologiesCards"
import OurApproach from "./ourApproach";
import KpiInFocus from "./kpiInFocus";
import ItHealthcareExperts from "./itHealthcareExperts/index"
import Projects from "./Projects";
import Benefits from "./benefits";
import ContactUs from  "../../contactUs/index"
import TantaTestimonial from "../../tantaTestimonials";
import Summary from "../../services/itConsulting/itStrategy/summary";
import HandpickedProject from "@/components/dataAnalytics/handpickedProject";


const  ItConsulting = ({testimonials}) =>{
    return(
        <>
            <Box width={"100%"}  overflow={{base: "hidden", md: "hidden", lg: "visible"}}>
                <Box  p={{base:"0 1rem 0 1rem",md:"0 1rem 0 1rem",lg:"0"}}>
               <HeroSection/>
                <Container maxW={"7xl"}  px={{ lg: "5rem", base: "2rem" }} bg={{ base: "#F7F2FA", lg: "white" }}>
                <Flex mt={"5rem"} justifyContent={"space-around"}>


                <SidebarSection/>

                    <Box width={{base: "100%", md: "100%", lg: "70%"}} position={"relative"} left={{base: "0", md: "0", lg: "-2rem"}}>
                        <AboutTanta/>
                        <Customers/>
                        <ConsultingOptions/>
                        <ComprehensiveRange/>
                        <StepByStep/>
                        <Box id={"our_customers"} scrollMarginTop={"150px"}>
                            <TantaTestimonial testimonials={testimonials} />
                        </Box>
                        <ItHealthcareExperts/>
                        <TechnologiesCards/>
                        <OurApproach/>
                        <KpiInFocus/>
                        {/*<TantaTestimonial testimonials={testimonials} />*/}
                        {/*<Projects/>*/}
                        <Box id="success_stories" scrollMarginTop={"150px"}>
                            <HandpickedProject/>
                        </Box>
                        <Benefits/>
                        <Box display={{base: "block", md: "none", lg: "none"}}>
                            <Summary/>
                        </Box>
                    </Box>
                </Flex>
                </Container>

                </Box>
                <ContactUs subtitle="We’re here to support" />
            </Box>

        </>
    )
}
export default ItConsulting
