import React from "react";
import ContactUsForm from "./contactUsForm";
import {Box, Flex, Image, Text} from "@chakra-ui/react";

const FactItem = ({children}) => (
    <Flex align={"center"} gap={"1rem"} mt={"1.5rem"}>
        <Image src="/assets/contactUs/tickIcon.png" alt="tick icon"/>
        <Text>{children}</Text>
    </Flex>
);
const FullForm = ({placeholder, formText, service}) => {
    return (
        <Flex
            gap={"4rem"}
            direction={{base: "column", lg: "row"}}
            w={"100%"}
            p={{base: "1rem", lg: "0 90px"}}
            mt={"2.5rem"}
        >
            {/* ----------Get in touch---------- */}
            <Flex w={{base: "100%", md: "50%"}}>
                <Flex
                    direction={"column"}
                    p={{lg: " 0 2rem"}}
                    borderRight={"10px solid #FFFFFF"}
                >
                    <Box borderLeft={"6px solid #E9000E"} p={".5rem 2rem"}>
                        <Text
                            as="h2"
                            fontSize={{base: "24px", lg: "35px"}}
                            w={"100%"}
                            fontWeight={"700"}
                        >
                            Get in Touch with
                            <Text color={"red"}>Our Experts</Text>
                        </Text>
                    </Box>
                    <Text
                        as={"p"}
                        fontSize={"18px"}
                        fontWeight={"400"}
                        mt={"1.5rem"}
                        color={"#212121"}
                    >
                        Reach out to our dedicated team of IT consultants to discuss your
                        project needs, explore innovative solutions, and discover how we can
                        transform your ideas into reality.
                    </Text>
                    <Box mt={"1.5rem"}>
                        <FactItem>
                            <span style={{fontWeight: "bold"}}>15+ Years</span> in IT
                        </FactItem>
                        <FactItem>
                            Over <span style={{fontWeight: "bold"}}>40+ IT Professionals</span> on board
                        </FactItem>
                        <FactItem>
                            Over 70 Finished Projects
                        </FactItem>
                        <FactItem>
                            10 Industries Covered
                        </FactItem>
                    </Box>
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
            <Box>
                <Text fontSize={"18px"}>
                    Drop us a line, and our rep will contact you within 30 minutes to
                    arrange an initial discussion.
                </Text>
                <ContactUsForm
                    formText={formText}
                    placeholder={placeholder}
                    service={service}
                />
            </Box>
        </Flex>
    );
};

export default FullForm;
