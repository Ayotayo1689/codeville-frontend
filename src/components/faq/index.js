import React from "react";
import Image from "next/image";
import styled from "styled-components";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text
} from "@chakra-ui/react";
import {tabDetails, tabTitles} from "./data";
import {sitting} from "../../../assets/testimonials";

const FAQ = ({faq}) => {
    return (
        <div style={{padding: "1rem 3rem"}}>
            <Box display={"flex"} flexDir="column">
                <Text
                    fontWeight="400"
                    fontSize="18px"
                    my="25px"
                    lineHeight="24px"
                    letterSpacing="0.085em"
                    textTransform="uppercase"
                >
                    tanta FAQ
                </Text>
                <Text
                    fontWeight="600"
                    fontSize={{base: "18px", lg: "30px"}}
                    lineHeight="28px"
                    textTransform="capitalize"
                    color="#444444"
                >
                    Frequent Asked Questions{" "}
                </Text>

                {/* ================== desktop and tablet faq ================ */}
                <Box my='2rem' display={{base: 'none', md: 'block', lg: 'block'}}>
                    <Tabs display={'flex'} flexDir={{base: 'column', md: 'row', lg: 'row-reverse'}}>
                        <TabList border={'none'} display={'flex'} flexDir='column' justifyContent={'flex-start'}
                                 width='40%'>
                            {faq.map((item, index) => {
                                return (
                                    <Tab key={index}
                                         display='flex'
                                         justifyContent={'start'}
                                         alignItems='center'
                                         rounded={"lg"}
                                         textTransform={"capitalize"}
                                         textAlign='start'
                                         fontWeight='600'
                                         fontSize='16px'
                                         lineHeight='21px'
                                         marginBottom='1rem'
                                         _selected={{
                                             color: 'white',
                                             background: '#AE0000',
                                             boxShadow: '0px 2px 4px rgba(165, 163, 174, 0.3)',
                                             borderRadius: '6px',
                                         }}
                                    >{item.image &&
                                        <item.image size={24} style={{marginRight: '10px'}}/>} {item?.name} </Tab>
                                )
                            })}
                        </TabList>

                        <TabPanels
                            border={"none"}
                            display={"flex"}
                            flexDir="column"
                            width={"55%"}
                            mr="2.5rem"
                        >
                            {faq.map((object, index) => {
                                return (
                                    <TabPanel key={index}>
                                        <Flex flexDir={"row"} alignItems="center">
                                            <Box
                                                display="flex"
                                                justifyContent="center"
                                                alignItems="center"
                                                borderRadius="6px"
                                                width="30px"
                                                height="30px"
                                                background="rgba(174, 0, 0, 0.76)"
                                                color="#fff"
                                            >
                                                {object?.image && (
                                                    <object.image
                                                        size={22}
                                                        style={{alignSelf: "center", margin: "auto"}}
                                                    />
                                                )}
                                            </Box>
                                            <Text
                                                fontWeight="600"
                                                fontSize="22px"
                                                lineHeight="30px"
                                                ml={"15px"}
                                            >
                                                {object?.name}
                                            </Text>
                                        </Flex>
                                        <Text mt={'1rem'}>{object?.description}</Text>

                                        <Box mt={'1.7rem'}>
                                            {object?.faqs.map((item) => (
                                                <Accordion key={item.id} allowToggle background='#FFF'
                                                           boxShadow='0px 2px 4px rgba(165, 163, 174, 0.3)'
                                                           borderradius='8px'
                                                           mb={'1rem'}>
                                                    <AccordionItem>
                                                        <h2>
                                                            <AccordionButton>
                                                                <Box as="span" flex='1' textAlign='left'
                                                                     fontWeight='600' fontSize='22px' lineHeight='30px'>
                                                                    {item?.question}
                                                                </Box>
                                                                <AccordionIcon/>
                                                            </AccordionButton>
                                                        </h2>
                                                        <AccordionPanel pb={4} fontWeight='400' fontSize='15px'
                                                                        lineHeight='22px'>
                                                            {item?.answer}
                                                        </AccordionPanel>
                                                    </AccordionItem>
                                                </Accordion>
                                            ))}
                                        </Box>
                                    </TabPanel>
                                )
                            })}
                        </TabPanels>
                    </Tabs>
                </Box>

                {/* ============= mobile faq ============ */}
                <Box my='2rem' display={{base: 'block', md: 'none', lg: 'none'}}>
                    {faq.map((object, index) => (
                        <Accordion allowToggle key={index} mb={'1rem'} bg="#F7F2FA"
                                   boxShadow='0px 2px 4px rgba(165, 163, 174, 0.3)' borderRadius='6px'>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{
                                        color: 'white',
                                        background: '#AE0000',
                                        boxShadow: '0px 2px 4px rgba(165, 163, 174, 0.3)',
                                        borderRadius: '6px',
                                    }}>
                                        <Box as="span" flex='1' textAlign='left' display={'flex'}>
                                            {object?.image &&
                                                <object.image size={24} style={{marginRight: '10px'}}/>} {object.name}
                                        </Box>
                                        {/* <AccordionIcon /> */}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Flex flexDir={"row"} alignItems="center" mt='1rem'>
                                        <Box display="flex" justifyContent="center" alignItems="center"
                                             borderRadius="6px" width="38px"
                                             height="38px"
                                             background="rgba(174, 0, 0, 0.76)"
                                             color="#fff"
                                        >
                                            {object?.image && (
                                                <object.image
                                                    size={22}
                                                    style={{alignSelf: "center", margin: "auto"}}
                                                />
                                            )}
                                        </Box>
                                        <Text
                                            fontWeight="600"
                                            fontSize="22px"
                                            lineHeight="30px"
                                            ml={"15px"}
                                        >
                                            {object?.name}
                                        </Text>
                                    </Flex>
                                    <Text mb={'1rem'} mt={'1rem'}>{object?.description}</Text>
                                    {object.faqs.map((item, id) => (
                                        <Accordion allowToggle key={id}>
                                            <AccordionItem>
                                                <h2>
                                                    <AccordionButton fontWeight={'600'} fontSize={'18px'}>
                                                        <Box as="span" flex='1' textAlign='left'>
                                                            {item?.question}
                                                        </Box>
                                                        <AccordionIcon/>
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    {item?.answer}
                                                </AccordionPanel>
                                            </AccordionItem>
                                        </Accordion>
                                    ))}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    ))}
                </Box>
                <Flex justify={{base: 'center', lg: 'flex-end'}}>
                    <Image src={sitting} width={250} height={180} alt='image'/>
                </Flex>
            </Box>

        </div>
    );
};

export default FAQ;

export const Details = styled.div`
  width: 60%;
  padding: 1rem;
  text-align: start;
`;
