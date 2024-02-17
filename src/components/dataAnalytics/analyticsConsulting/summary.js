import React from "react";
import {
    Box,
    Button,
    Flex,
    List,
    ListIcon,
    ListItem,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text
} from "@chakra-ui/react";
import {analyticsConsultingSummary} from './data'
import {IoIosCheckmark} from "react-icons/io";
import Link from "next/link";
import styled from "styled-components";
import {breakpoints} from "../../../../styles/theme";
import appRoutes from "../../../utils/appRoutes";


function  Summary () {
    return(
        <>
            <Box id="summary" scrollMarginTop={"150px"}>
                <SummarySection>

                    <Box my={"1.5rem"}>
                        {analyticsConsultingSummary.map((item, index) => (
                            <Box
                                mb="4.5rem"
                                width={"100%"}
                                key={index}
                                id={item.id}
                                scrollMarginTop={"150px"}
                            >
                                <Text
                                    fontWeight="400"
                                    fontSize={{ base: "14px", lg: "18px" }}
                                    lineHeight="20px"
                                    color={"#636363"}
                                    textTransform={"uppercase"}
                                >
                                    summary
                                </Text>
                                <Text
                                    fontWeight="700"
                                    fontSize={{ base: "20px", lg: "28px" }}
                                    // lineHeight="70px"
                                    textTransform={"capitalize"}
                                >
                                    Take a Moment to Know{" "}
                                    <span style={{ color: "#E9000E" }}>Tanta Innovative</span>{" "}
                                    Better
                                </Text>
                                <Box maxWidth={{lg:"120px", base:"50px"}}
                                height={"4px"}
                                bg={"#ff0000"}></Box>
                                <Tabs size="md" variant="enclosed" mt={"2rem"}>
                                    <TabList borderColor={"#B60E09"}>
                                        {item.cards.map((item, index) => (
                                            <Tab
                                                padding={{ base: "8px 18px", lg: "16px 24px" }}
                                                mr={{ base: "0px", lg: "4rem" }}
                                                _selected={{
                                                    color: "white",
                                                    background: "#AE0000",
                                                    boxShadow: "0px 2px 4px rgba(165, 163, 174, 0.3)",
                                                    borderRadius: "10px 10px 0px 0px",
                                                }}
                                                key={index}
                                            >
                                                {item.title}
                                            </Tab>
                                        ))}
                                    </TabList>
                                    <TabPanels>
                                        {item.cards.map((item, index) => (
                                            <TabPanel key={index}>
                                                <Text
                                                    fontWeight="700"
                                                    fontSize={{ base: "16px", lg: "18px" }}
                                                    lineHeight="170%"
                                                    my={"1rem"}
                                                >
                                                    {item.title}
                                                </Text>
                                                <Text
                                                    fontWeight="400"
                                                    fontSize={{ base: "16px", lg: "18px" }}
                                                    lineHeight="170%"
                                                >
                                                    {item.text}
                                                </Text>

                                                <List spacing={2}   mt={"1rem"}>
                                                    {item.items && Array.isArray(item.items) && item.items.map((item, index) => {
                                                        return (
                                                            <ListItem pl={4}
                                                                      key={"index"}
                                                            >
                                                                <Flex flexGrow={"1"} >
                                                                    <ListIcon as={IoIosCheckmark} color='green' fontSize={"1.5rem"} mt={"0.2rem"}/>
                                                                    <Text>
                                                                        {item}
                                                                    </Text>
                                                                </Flex>
                                                            </ListItem>
                                                        );
                                                    })}
                                                </List>

                                                <Link
                                                    href={{
                                                        pathname: appRoutes.contactUs,
                                                        query: { service: "services/data-analytics" },
                                                    }}
                                                    service="cyber_security"
                                                    className="request-services"
                                                >
                                                    <Button
                                                        fontWeight="500"
                                                        fontSize={{ base: "14px", lg: "16px" }}
                                                        mt={"2rem"}
                                                        lineHeight="24px"
                                                        bg={"#CE0000"}
                                                        color={"#FFFFFF"}
                                                        variant="solid"
                                                    >
                                                        Get Started
                                                    </Button>
                                                </Link>
                                            </TabPanel>
                                        ))}
                                    </TabPanels>
                                </Tabs>
                            </Box>
                        ))}
                    </Box>
                </SummarySection>
            </Box>

        </>
    )
}
export default Summary


const SummarySection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 4rem;

	${breakpoints.lg} {
		margin-top: 4rem;
	}

	.summary {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 0;
		margin-bottom: 1rem;

		h2 {
			font-size: 18px;
			font-weight: 400;
			color: #636363;
			text-transform: uppercase;
			margin-bottom: -1rem;

			${breakpoints.lg} {
				font-size: 1rem;
			}
			@media (max-width: 850px) {
				font-size: 0.9rem;
			}
		}
		h3 {
			font-size: 30px;
			font-weight: 700;
			color: #414141;

			span {
				color: #e9000e;
			}

			${breakpoints.lg} {
				font-size: 1.5rem;
			}

			@media (max-width: 850px) {
				font-size: 1.2rem;
			}
		}
		div {
			width: 55px;
			height: 3px;
			background-color: #e9000e;
			margin-bottom: 0.2rem;
		}
	}
`;









