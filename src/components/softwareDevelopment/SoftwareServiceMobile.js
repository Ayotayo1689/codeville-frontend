import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Heading
} from '@chakra-ui/react'
import React from 'react'

function SoftwareServiceMobile() {
    return (
        <Box p={"1rem"} display={{base: "block", lg: "none"}} mt={"2rem"}>
            <Flex direction={"column"}>
                <Heading
                    fontSize={"1.3rem"}
                    fontWeight={"700"}
                    color={"#4E4E4E"}
                >
                    Software
                    <span style={{color: "#FF0000"}}> Services</span>
                </Heading>
                <Accordion mt={"1rem"} defaultIndex={[0]} allowMultiple allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton border={"1px solid #979797"}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Custom Development
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} color={"#565656"}>
                            Our software development approach emphasizes long-term business value by creating
                            unique solutions that are tailored to your business processes and can be adjusted
                            to meet future needs.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton border={"1px solid #979797"}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Software Product Development
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} color={"#565656"}>
                            Our software development approach emphasizes long-term business value by creating
                            unique solutions that are tailored to your business processes and can be adjusted
                            to meet future needs.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton border={"1px solid #979797"}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Full Software Development Outsourcing
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} color={"#565656"}>
                            Our software development approach emphasizes long-term business value by creating
                            unique solutions that are tailored to your business processes and can be adjusted
                            to meet future needs.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton border={"1px solid #979797"}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Software Support & Maintenance
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} color={"#565656"}>
                            Our software development approach emphasizes long-term business value by creating
                            unique solutions that are tailored to your business processes and can be adjusted
                            to meet future needs.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>
        </Box>
    )
}

export default SoftwareServiceMobile