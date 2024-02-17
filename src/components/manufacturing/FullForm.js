import React from "react";
import ContactUsForm from "./contactUsForm";
import {Box, Flex, Image, Text} from "@chakra-ui/react";

const FullForm = ({placeholder, heading, subHeading, formText}) => {
    return (
        <Flex
            gap={{base: "1rem", lg: "4rem"}}
            direction={{base: "column", lg: "row"}}
            w={"100%"}
            p={{base: "0rem", lg: "0 90px"}}
            mt={"2.5rem"}
        >
            {/* ----------Get in touch---------- */}
            <Flex w={{base: "100%", md: "50%"}} flex={"1"}>
                <Flex
                    direction={"column"}
                    p={{lg: " 0 2rem"}}
                    borderRight={"10px solid #FFFFFF"}
                >
                    <Box borderLeft={"4px solid #E9000E"} p={".5rem 2rem"}>
                        <Text
                            as="h2"
                            fontSize={{base: "1rem", lg: "35px"}}
                            w={"100%"}
                            fontWeight={"700"}
                        >
                            Need a Manfacturing Solution
                            <Text color={"red"}>Not Described in the List?</Text>
                        </Text>
                    </Box>

                    <Image
                        display={{base: "none", lg: "block"}}
                        src="/assets/manufacturing/contact.png"
                        alt="Manufacturing"
                    />
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
            {/* ----------Contact us Form---------- */}
            <Box flex={"1"}>
                <Text fontSize={{base: "1rem", lg: "1.2rem"}} fontWeight={"normal"}>
                    Tanta Innovative offers cost- and time-effective flexible Healthcare
                    IT services to ensure software availability, uninterrupted and smooth
                    functioning, Cybersecurity, scalability, and stability. Feel free to
                    briefly describe your testing and QA needs for our team to promptly
                    get back to you.
                </Text>
                <ContactUsForm formText={formText} placeholder={placeholder}/>
            </Box>
        </Flex>
    );
};

export default FullForm;
