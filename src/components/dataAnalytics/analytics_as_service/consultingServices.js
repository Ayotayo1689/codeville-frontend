import React from "react";
import {Box, Heading} from "@chakra-ui/react";
import {pricingData} from "./data";
import TantaTestimonial from "../../tantaTestimonials";
import Pricing from "./pricing";

function ConsultingServices({testimonials}) {
    return (
        <>
            <Box id="pricing" scrollMarginTop={"150px"}>

                <Heading
                    fontWeight="700"
                    fontSize={{base: "20px", lg: "30px"}}
                    color=" #414141"
                    lineHeight={{lg: "140%", base: "150%"}}
                    mb={"0.5rem"}
                >
                    Pricing Models for AaaS
                </Heading>
                <div
                    style={{
                        width: "6rem",
                        height: "2px",
                        background: "#E9000E",
                        marginBottom: " 2rem ",

                    }}
                ></div>

                <Pricing data={pricingData}/>

            </Box>

            <Box id="clients" scrollMarginTop={"150px"}>
                <TantaTestimonial testimonials={testimonials}/>
            </Box>
        </>
    )
}

export default ConsultingServices