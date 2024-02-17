import React from "react";
import {Box, Text} from "@chakra-ui/react";
import Testimonial from "../../testimonial";
import styled from "styled-components";


function Testimonialss ({testimonials}) {
    return(
        <Box id={"our_customers"} scrollMarginTop={"150px"} mt={"50px"}>
            <Text fontSize={"20px"} color={"#636363"}>
                TANTA TESTIMONIALS
            </Text>
            <Text fontSize={"34px"} fontWeight={"600"}>
                What our Clients Say <Span>About Us</Span>
            </Text>

            <Testimonial testimonial={testimonials}/>
        </Box>
    )
}
export default  Testimonialss


const Span = styled.span`
color: red;
`