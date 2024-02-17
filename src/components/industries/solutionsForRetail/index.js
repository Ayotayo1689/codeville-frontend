import { Box, Container } from "@chakra-ui/react";
import React from "react";
import HeaderOne from "../../HeaderOne";
import Hero from "./Hero";
import Main from "./Main";
import ContactUs from "../../contactUs"


function SolutionsForRetail() {
    return (
        <>
            <Box mt={"5rem"}>
                <HeaderOne
                    heading={"solutions"}
                    title={"it services and solutions for retail"}
                />
                <Container maxW={"7xl"} mb={"5rem"} px={{ lg: "5rem", "2xl": "0.4rem" }}>

                    <Hero/>
                    <Main/>

                </Container>
                <ContactUs subtitle='For Your Retail IT Projects' id={'quote'} scrollMarginTop={"150px"}/>
            </Box>
        </>

    );
}

export default SolutionsForRetail;
