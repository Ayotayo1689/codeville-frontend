import React from "react";
import {
    Text,
    Box,
    Stepper,
    Step,
    StepIndicator,
    StepStatus,

    StepNumber,
    StepTitle,
    StepDescription,
    StepSeparator, useSteps, List, ListItem, Flex, ListIcon, Image,


} from "@chakra-ui/react";
import { BsFillSquareFill} from "react-icons/bs"


const steps = [
    { title: 'Business Analysis',
        contents: [
            "(for healthcare organizations) Business needs analysis and current IT ecosystem analysis.",
            "(for product companies) Market analysis and competitors research, target customers identification.",
            "Elicitation of functional and non-functional software requirements, feature planning, and prioritization.",
            "Healthcare software compliance requirements gathering for applicable regulations (e.g., HIPAA, GDPR).",


        ], },

    { title: 'Software design', description: 'Architecture design of healthcare software, tech stack selection, integrations design, etc.' },

    { title: 'Project planning', description: 'Healthcare software delivery schedule planning, budget planning, and ROI calculation.' },

    { title: 'Risk assessment and risk management planning',
        contents: [
            "Analysis of the potential risks of healthcare software development and use.",
            "Drawing up the risk mitigation plan.",

        ], },
]
function StepByStep (){

    const { activeStep } = useSteps({
        index: 0,
        count: steps.length,
    })
    return(
        <>

            <Box    id="medical" scrollMarginTop={"150px"}   display={{base: "none", md: "block", lg: "block"}}>
                <Text
                    fontSize={"32px"}
                    fontWeight={"700"}
                    mt={"3rem"}
                    borderBottom={"1rem"}
                    color={" #222222"}
                >
                    Medical IT Consulting: Step by Step
                </Text>

                <div
                    style={{
                        width: "7rem",
                        height: "4px",
                        background: "#D80808",
                        marginBottom: " 2rem ",
                    }}
                ></div>

                <Stepper index={activeStep} orientation='vertical' height='400px' gap='0'>
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepIndicator borderRadius={"0px"} w={{ base: "6vw", md:"2em" }} h={{ base: "6vw", md:"2em" }}>
                                <StepStatus
                                    complete={<StepNumber />}
                                    incomplete={<StepNumber />}
                                    active={<StepNumber />}
                                />
                            </StepIndicator>
                            <Box flexShrink='0'>

                                <StepTitle fontWeight={"700"} fontSize={"22px"} >{step.title}</StepTitle>
                             <StepDescription mt={"20px"}>{step.description}</StepDescription>
                                {step.contents && step.contents.length > 0 && (
                                    <List spacing={2}   mt={"1rem"}  width={{base: "100%", md: "90%", lg: "400px"}}>
                                        {step.contents.map((item, id) => {

                                            return (
                                                <ListItem pl={4}
                                                          key={id}
                                                >
                                                    <Flex flexGrow={"1"} >
                                                        <ListIcon as={BsFillSquareFill} color='red' fontSize={"0.5rem"} mt={"0.5rem"}/>
                                                        <Text>
                                                            {(item)}
                                                        </Text>
                                                    </Flex>
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                )}

                            </Box>

                            <StepSeparator />
                        </Step>
                    ))}


                </Stepper>

                <Flex
                    width={{base: "851px", md: "90%", lg: "851px"}}
                    justifyContent={"space-between"}
                    mt={{base: "2rem", md: "10rem", lg: "15rem"}}>
                    <Image mb={"3rem"}
                           display={{base: "none", md: "flex", lg: "flex"}}
                           w={"4rem"}
                           height={"4rem"}
                           src="/assets/healthcare/itConsultingServices/chat.png"
                           alt="icon"

                    />
                    <Text fontSize={"18px"}
                          fontWeight={"700"}
                          fontStyle={"italic"}>Tanta recommends: </Text>
                    <Text fontSize={"18px"}
                    fontWeight={"400"}
                    fontStyle={"italic"}
                    width={{base: "580px", md: "400px", lg: "580px"}}>If your healthcare software needs early stakeholder or market validation, start with MVP development. MVP features core software functionality with simple UX and UI design and then can be enhanced further
                        based on the received feedback.</Text>
                </Flex>
            </Box>
        </>
    )
}
export default  StepByStep