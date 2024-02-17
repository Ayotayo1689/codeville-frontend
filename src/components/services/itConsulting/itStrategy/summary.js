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
import Link from "next/link";
import {analyticsConsultingSummary} from "../../../dataAnalytics/analyticsConsulting/data";
import {IoIosCheckmark} from "react-icons/io";
import appRoutes from "../../../../utils/appRoutes";


function  Summary () {
    return(
        <>

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
                            fontSize={{ base: "16px", lg: "28px" }}
                            textTransform={"capitalize"}
                        >
                            Take a Moment to Know{" "}
                            <span style={{ color: "#E9000E" }}>Tanta Innovative</span>{" "}
                            Better
                        </Text>
                        <div
                            style={{
                                width: "130px",
                                height: "4px",
                                background: "#ff0000",
                            }}
                        ></div>
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
                                                query: { service: "services/it-consulting/it-strategy-consulting" },
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
        </>
    )
}
export default Summary


