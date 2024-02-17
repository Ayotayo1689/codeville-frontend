import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import ContactUsForm from "../contactUsPage/contactUsForm";
import TaskManagement from "../../../public/assets/solutionsDetails/management.svg";
import Image from "next/image";
import styled from "styled-components";

const ContactForm = ({placeholder, heading, subHeading, formText}) => {
    return (
        <FormContainer>
            <Flex direction={{base: "column", lg: "row"}} w={"100%"} mt={"2.5rem"}>
                {/* ----------Get in touch---------- */}
                <Flex w={{base: "100%"}} minW={"300px"}>
                    <Flex direction={"column"} borderRight={"5px solid #FFFFFF"}>
                        <Box borderLeft={"2px solid #E9000E"} p={".5rem 1rem"}>
                            <Text
                                as="h2"
                                fontSize={{base: "18px", lg: "24px"}}
                                w={"100%"}
                                fontWeight={"700"}
                            >
                                Get Transparent & Result-oriented
                                <Text color={"red"}>Healthcare IT Services!</Text>
                            </Text>
                        </Box>
                        <Box mt={"1.5rem"}>
                            <Image
                                src={TaskManagement}
                                alt="Task management"
                                width="100%"
                                className="contact-img"
                            />
                        </Box>
                    </Flex>
                    {/* ==========Divider=========== */}
                    <Box
                        width={"20px"}
                        h={"100%"}
                        bg={"#FFFFFF"}
                        boxShadow={"11px 0px 29px rgba(0, 0, 0, 0.25)"}
                    >
                        {" "}
                    </Box>
                </Flex>
                {/* ----------Contact us Form---------- */}
                <Box pl={2} minW={"300px"}>
                    <Text fontSize={"16px"}>
                        TANTA Innovative offers cost- and time-effective flexible Healthcare
                        IT services to ensure software availability, uninterrupted and
                        smooth functioning, Cybersecurity, scalability, and stability. Feel
                        free to briefly describe your testing and QA needs for our team to
                        promptly get back to you.
                    </Text>
                    <ContactUsForm formText={formText} placeholder={placeholder}/>
                </Box>
            </Flex>
        </FormContainer>
    );
};

export default ContactForm;

const FormContainer = styled.div`
  .contact-img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 990px) {
    .contact-img {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
  }
`;
