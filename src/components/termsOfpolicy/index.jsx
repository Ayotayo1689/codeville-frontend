import LandingLayout from "../../layouts/landing.layout";
import React from "react";
import HeaderOne from "../HeaderOne";
import {Box, Container, Text} from "@chakra-ui/react";
import {termsAndconditionsData} from "./data";


const TermsAndConditions = () =>{
    return(
        <>
            <Box mt={{base: "4rem", lg: "5rem"}}>
                <HeaderOne heading={"Tanta Innovative"} title={"Terms and conditions"}/>
            </Box>
            <Container maxW={"7xl"} px={"1rem"} pb={"2rem"}>
                {termsAndconditionsData.map((index) =>{
                    return(
                        <Box key={index} pb={"2rem"} fontSize={{lg:"lg"}}>
                            <Text
                                fontWeight={"bold"}
                                textTransform={"uppercase"}
                            >{index.title}</Text>
                            <Text>{index.description}</Text>
                        </Box>
                    )
                })}

            </Container>

        </>
    )
}
TermsAndConditions.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
};
export default TermsAndConditions;
