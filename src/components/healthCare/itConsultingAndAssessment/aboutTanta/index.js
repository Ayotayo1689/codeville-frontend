import React from "react"
import {Box, Text, List, ListItem, ListIcon, Flex} from "@chakra-ui/react";
import LogoMarquee from "../../../logoMarquee";
import {BsCheck} from 'react-icons/bs';
function  AboutTanta () {
    return(
        <>
            <Text
                scrollMarginTop={"150px"}
                id="service"
                fontSize={{base:"14px", md:"16px", lg:"24px"}}
                width={{base:"100%", md:"700px", lg:"750px"}}
                textAlign={{base:"left",md:"left",lg:"left"}}
                fontWeight={400}
            >
                At Tanta, we offer healthcare IT consulting services that drive seamless IT strategy planning and efficient solutions for care providers, product,
                medical device, and pharma companies. We analyze your business needs to create secure and optimized operations.
            </Text>
            <Box  scrollMarginTop={"150px"}
                  id="about_tanta">
                <Text
                    fontSize={{base:"25px",md:"32px",lg:"32px"}}
                    textAlign={{base:"center",md:"left",lg:"left"}}
                    fontWeight={"600"}
                    mt={"3rem"}
                    borderBottom={"1rem"}
                >
                    About Tanta
                </Text>

                <Box
                    w={{base:"30%", md:"6rem", lg:"6rem"}}
                    ml={{base:"auto", md:"0", lg:"0"}}
                    mr={{base:"auto", md:"0", lg:"0"}}
                    mt={{base:"0.5rem", md:"0", lg:"0"}}
                    style={{
                        height: "4px",
                        background: "#D80808",
                        marginBottom: " 2rem ",
                    }}
                ></Box>
                <Box w={{base: "100%", md: "44rem", lg: "40rem"}}>
                <LogoMarquee colored={true}/>
                </Box>
            </Box>
            <List spacing={3} width={{base:"100%", md:"540px", lg:"540px"}} >
                <ListItem fontWeight={"400"} fontSize={"16px"} display={"inline"}>
                    <Flex>
                    <ListIcon as={BsCheck} color=' #E9000E'  fontSize={"2rem"}/>
                   <Text> Over a decade of experience in the information technology market,
                    serving healthcare organizations.</Text></Flex>
                </ListItem>
                <ListItem fontWeight={"400"} fontSize={"16px"}>
                    <Flex>
                    <ListIcon as={BsCheck} color=' #E9000E' fontSize={"2rem"} />
                    <Text>  A trusted healthcare IT consulting firm with a strong track record of 13 years in the industry.</Text></Flex>
                </ListItem >
                <ListItem fontWeight={"400"} fontSize={"16px"}>
                    <Flex>
                    <ListIcon as={BsCheck} color=' #E9000E' fontSize={"2rem"}/>
                    <Text> Proven expertise in streamlining IT processes and resolving issues promptly for healthcare organizations.</Text></Flex>
                </ListItem>
                <ListItem fontWeight={"400"} fontSize={"16px"}>
                    <Flex>
                    <ListIcon as={BsCheck} color='#E9000E' fontSize={"2rem"}/>
                    <Text> Embracing the latest technologies to drive innovation and enhance patient care
                    in the healthcare industry.</Text></Flex>
                </ListItem>
                <ListItem fontWeight={"400"} fontSize={"16px"}>
                    <Flex>
                    <ListIcon as={BsCheck} color=' #E9000E' fontSize={"2rem"}/>
                    <Text> Tailored IT solutions designed specifically for the healthcare industry,
                    addressing its unique needs and requirements.</Text></Flex>
                </ListItem>
                <ListItem fontWeight={"400"} fontSize={"16px"}>
                    <Flex>
                    <ListIcon as={BsCheck} color=' #E9000E' fontSize={"2rem"} />
                    <Text> Committed to safeguarding the IT infrastructure of healthcare providers and supporting their
                    continuous evolution.</Text></Flex>
                </ListItem>
                <ListItem fontWeight={"400"} fontSize={"16px"}>
                    <Flex>
                    <ListIcon as={BsCheck} color=' #E9000E' fontSize={"2rem"}/>
                    <Text> Dedicated team of experts with extensive knowledge and experience in healthcare IT services.</Text></Flex>
                </ListItem>
            </List>
        </>
    )
}
export default AboutTanta