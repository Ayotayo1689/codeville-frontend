import {Box, Button, Flex, Grid, List, ListIcon, ListItem, Text} from "@chakra-ui/react";
import React from "react";
import {BsFillSquareFill} from "react-icons/bs";
import {textStyle} from "./data";
import {AiOutlineArrowRight} from "react-icons/ai";
import Link from "next/link";
import appRoutes from "@/utils/appRoutes";

const ERPIntegrations = () => {

    return (
        <>
            <Box id="erp-services" mt="100px">
                <Flex flexDir="column" color="#414141" fontWeight="700" fontSize={{lg:"30px", base:"20px"}}>
                    <Text>We specialize in ensuring seamless integrations</Text>
                    <Text sx={textStyle}>erp integrations</Text>
                </Flex>
                <Box w='55px' h="3px" bg="#E9000E" my="30px"></Box>
                <List textAlign={{base: 'center', md: 'left'}} color="#1E1E1E">
                    <ListItem>
                        <ListIcon as={BsFillSquareFill} mb="3px" w="10px" h="10px" color='red.500'/>
                        API for smooth integration between ERP modules.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={BsFillSquareFill} mb="3px" w="10px" h="10px" color='red.500'/>
                        Integrations with popular enterprise platforms such as Salesforce, Magento, Office 365.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={BsFillSquareFill} mb="3px" w="10px" h="10px" color='red.500'/>
                        Security policies for securing API traffic and easily apply custom policies.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={BsFillSquareFill} mb="3px" w="10px" h="10px" color='red.500'/>
                        Integrations with IoT and blockchain.
                    </ListItem>
                </List>
            </Box>
            <Box id="erp-options" mt="100px">
                <Flex flexDir="column" color="#414141" fontWeight="700" fontSize={{lg:"30px", base:"20px"}}>
                    <Text>We specialize in ensuring seamless integrations</Text>
                    <Text sx={textStyle}>erp integrations</Text>
                </Flex>
                <Box w='55px' h="3px" bg="#E9000E" mb="80px" mt="30px"></Box>
                <Grid templateColumns={{base: '1fr', md: '1fr 1fr', lg: '1fr', xl: '1fr 1fr'}} gap={8} justify="center">
                    <Flex align="center" textAlign="center" color="#444" flexDir="column">
                        <Box maxW={{base: '100%', md: "320px"}}>
                            <Text fontSize={{lg:"24px", base:"20px"}} textTransform="uppercase" fontWeight="700">
                                We offer end-to-end ERP
                                system development services
                            </Text>
                            <Box mx="auto" w='55px' h="3px" bg="#E9000E" my="30px"></Box>
                            <Text minH="140px">providing you with an all-in-one solution to digitally transform your entire
                                business process
                            </Text>
                        </Box>
                        <Link href={appRoutes.services["cost-calculator"]}>
                            <Button w={{base: '100%', md: 'max-content'}} color="white" bg="#EB1A26" _hover={{opacity: 0.7}} rightIcon={<AiOutlineArrowRight/>}>
                                Request ERP Development
                            </Button>
                        </Link>
                    </Flex>
                    <Flex mt={{base: '48px', md: '0'}} align="center" textAlign="center" color="#444" flexDir="column">
                        <Box maxW={{base: '100%', md: "320px"}}>
                            <Text fontSize={{lg:"24px", base:"20px"}} textTransform="uppercase" fontWeight="700" >
                                We specialize in
                                developing customized ERP modules
                            </Text>
                            <Box mx="auto" w='55px' h="3px" bg="#E9000E" my="30px"></Box>
                            <Text minH="140px">
                                to digitalize specific operations within your organization. Our services focus on
                                delivering tailored solutions to meet your unique requirements.
                            </Text>
                        </Box>
                        <Link href={appRoutes.services["cost-calculator"]}>
                            <Button w={{base: '100%', md: 'max-content'}} color="white" bg="#EB1A26" _hover={{opacity: 0.7}} rightIcon={<AiOutlineArrowRight/>}>
                                Request ERP Module Development
                            </Button>
                        </Link>
                    </Flex>
                </Grid>
            </Box>
        </>
    )
}

export default ERPIntegrations