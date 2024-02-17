import {
    Box, 
    Flex, 
    Heading,
    Tab, 
    TabList, 
    TabPanel, 
    TabPanels, 
    Tabs, 
    Text, 
    VStack,
    Button,
    Container,
} from '@chakra-ui/react'
import React from 'react'
import {BiChevronRight} from 'react-icons/bi'

function SoftwareService() {
  return (
    <Box m={"10rem auto"} pl={{base: "1rem", lg: "3rem"}} display={{base: "none", md: "block"}}>
        <Container maxW={"7xl"}>
            <Box
                w={"118px"}
                h={"2px"}
                bg={"#E9000E"}
                m={"3rem auto"}
            >

                {""}
            </Box>
            <Flex  w={{base: "100%", lg: "80%"}}>
                
                <Tabs variant="unstyled" w={"100%"}>
                    <Flex>
                        <VStack 
                            boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}
                            borderRadius={"8px"}
                        >
                            <Text 
                                textAlign={"center"}
                                textTransform={"uppercase"}
                                bg={"#981E13"}
                                w={"100%"}
                                fontSize={"1.1rem"}
                                color={"#FFFFFF"}
                                p={".7rem 0"}
                                borderRadius={"8px 8px 0 0"}
                            >
                                Software services
                            </Text>
                            <TabList w={"100%"} flexDirection={"column"} alignItems={"start"} gap={".6rem"} p={".5rem 0"}>
                                <Tab 
                                    w={"100%"} 
                                    border={"none"} 
                                    as={Button} 
                                    rightIcon={<BiChevronRight fontSize={"2rem"}/>}
                                    justifyContent={"space-between"}
                                    bg={"none"}
                                    _selected={{ color: '#E9000E'}}
                                    _hover={{background: "none"}}
                                >
                                    Custom Software Development
                                </Tab>
                                    
                                <Tab 
                                    w={"100%"} 
                                    border={"none"} 
                                    as={Button} 
                                    rightIcon={<BiChevronRight fontSize={"2rem"}/>}
                                    justifyContent={"space-between"}
                                    bg={"none"}
                                    _selected={{ color: '#E9000E'}}
                                    _hover={{background: "none"}}
                                >
                                    Software Product Development
                                </Tab>

                                <Tab 
                                    w={"100%"} 
                                    border={"none"} 
                                    as={Button} 
                                    rightIcon={<BiChevronRight fontSize={"2rem"}/>}
                                    justifyContent={"space-between"}
                                    bg={"none"}
                                    _selected={{ color: '#E9000E'}}
                                    _hover={{background: "none"}}
                                >
                                    Full Software Development Outsourcing
                                </Tab>

                                <Tab 
                                    w={"100%"} 
                                    border={"none"} 
                                    as={Button} 
                                    rightIcon={<BiChevronRight fontSize={"2rem"}/>}
                                    justifyContent={"space-between"}
                                    bg={"none"}
                                    _selected={{ color: '#E9000E'}}
                                    _hover={{background: "none"}}
                                >
                                    Software Support and Maintenance
                                </Tab>
                            </TabList>
                        </VStack>
                        <TabPanels bg={"#EDEDED"} borderRadius={"10px"} pt={"1rem"}>
                            <TabPanel>
                                <Box>
                                    <Heading fontSize={"1.5rem"}>Custom Software Development</Heading>
                                    <Box
                                        w={"118px"}
                                        h={"2px"}
                                        bg={"#E9000E"}
                                        m={".7rem 0"}
                                    >
                                        {""}
                                    </Box>
                                </Box>
                                <Text fontSize={"1rem"} fontWeight={"400"} color={"#565656"}>
                                    At our core, we specialize in custom software development that prioritizes long-term
                                    business value. We understand the importance of crafting unique solutions that
                                    align with your specific business processes and can easily adapt to future
                                    requirements.
                                </Text>
                            </TabPanel>
                            <TabPanel>
                                <Box>
                                    <Heading fontSize={"1.5rem"}>Software Product Development</Heading>
                                    <Box
                                        w={"118px"}
                                        h={"2px"}
                                        bg={"#E9000E"}
                                        m={".7rem 0"}
                                    >
                                        {""}
                                    </Box>
                                </Box>
                                <Text fontSize={"1rem"} fontWeight={"400"} color={"#565656"}>
                                    In the realm of software product development, we place great importance on
                                    delivering long-term business value. Our approach involves creating customized
                                    solutions that perfectly align with your unique business processes, ensuring
                                    adaptability to future needs.
                                </Text>
                            </TabPanel>
                            <TabPanel>
                                <Box>
                                    <Heading fontSize={"1.5rem"}>Full Software Development Outsourcing</Heading>
                                    <Box
                                        w={"118px"}
                                        h={"2px"}
                                        bg={"#E9000E"}
                                        m={".7rem 0"}
                                    >
                                        {""}
                                    </Box>
                                </Box>
                                <Text fontSize={"1rem"} fontWeight={"400"} color={"#565656"}>
                                    In the domain of full software development outsourcing, we prioritize the creation
                                    of unique solutions that align perfectly with your business processes and can be
                                    seamlessly adjusted to meet your evolving needs. Our approach is centered around
                                    delivering long-term business value and ensuring that your software development
                                    endeavors are a resounding success.
                                </Text>
                            </TabPanel>
                            <TabPanel>
                                <Box>
                                    <Heading fontSize={"1.5rem"}>Software Support and Maintenance</Heading>
                                    <Box
                                        w={"118px"}
                                        h={"2px"}
                                        bg={"#E9000E"}
                                        m={".7rem 0"}
                                    >
                                        {""}
                                    </Box>
                                </Box>
                                <Text fontSize={"1rem"} fontWeight={"400"} color={"#565656"}>
                                    we place great emphasis on delivering long-term business value through the creation
                                    of bespoke solutions. These solutions are specifically designed to align with your
                                    unique business processes and can be easily adapted to meet your evolving
                                    requirements. Our approach ensures that your software remains robust, up-to-date,
                                    and continues to drive value for your organization in the long run.
                                </Text>
                            </TabPanel>
                        </TabPanels>
                    </Flex>
                </Tabs>
            </Flex>
        </Container>
    </Box>
  )
}

export default SoftwareService