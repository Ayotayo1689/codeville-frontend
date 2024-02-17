import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Flex, Text,} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import {healthcareData} from "../healthcare/data";
import {BiCheckbox} from "react-icons/bi";

const SolutionsMobile = () => {
    return (
        <SolutionsContainer>
            <Accordion defaultIndex={[0]} allowMultiple>
                <Text my={"1rem"} fontWeight={"bold"} fontSize={"xl"}>
                    Solutions we offer
                </Text>

                {healthcareData.map((service, index) => {
                    return (
                        <AccordionItem key={index}>
                            <h2>
                                <AccordionButton>
                                    <Text
                                        fontSize={"lg"}
                                        fontWeight={"medium"}
                                        flex="1"
                                        textAlign="left"
                                    >
                                        {service.services}
                                    </Text>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            {service.items.map((item, idx) => (
                                <AccordionPanel key={idx} pb={4}>
                                    <Flex>
                                        <Icon>
                                            <BiCheckbox/>
                                        </Icon>
                                        <div>
                                            <Text fontSize="md" fontWeight="medium">
                                                {item.title}
                                            </Text>
                                            <Text>{item.details}</Text>
                                            <Link href={item.link}>Learn More</Link>
                                        </div>
                                    </Flex>
                                </AccordionPanel>
                            ))}
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </SolutionsContainer>
    );
};

export default SolutionsMobile;

const SolutionsContainer = styled.div`
  background-color: #f3f0f0;
  padding: 1rem 2rem;
`;

const Link = styled.a`
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  padding: 0.2rem 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  color: #ff0000a1;
`;

const Icon = styled.div`
  color: #ff0000a1;
  font-size: 1rem;
  margin-right: 1rem;
  margin-top: 0.3rem;
  margin-bottom: 0.5rem;
`;
