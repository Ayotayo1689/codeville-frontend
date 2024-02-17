import {Grid, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {ourCabilities, ourCabilitiesTabs} from "../../../infrastructure/data";
import {colors} from "../../../../../styles/theme";
import Image from "next/image";
import React from "react";

const TechnologiesStack = () => {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    return (
        <>
            <Tabs>
                <TabList border={"none"} overflowX={"scroll"}>
                    {ourCabilities.map((item, index) => {
                        return (
                            <Tab
                                key={index}
                                rounded={"lg"}
                                textTransform={"capitalize"}
                                _selected={{
                                    backgroundColor: "white",
                                    color: colors.primaryColor,
                                    border: `1px solid ${colors.primaryColor}`,
                                }}
                                fontSize={{base: "16px"}}
                                padding={{base: "10px 15px"}}
                                my={"2rem"}
                            >
                                {item}
                            </Tab>
                        );
                    })}
                </TabList>

                <TabPanels mt={"2rem"}>
                    {ourCabilitiesTabs.map((item, index) => {
                        return (
                            <TabPanel key={index}>
                                <Grid templateColumns={"1fr 1fr 1fr"} alignItems="center" gap={"5rem"}>
                                    {shuffleArray(item).map((icon, index) => {
                                        return (
                                            <Image
                                                key={index}
                                                width="30%"
                                                src={icon}
                                                alt={`icon${index}`}
                                            />
                                        );
                                    })}
                                </Grid>
                            </TabPanel>
                        );
                    })}
                </TabPanels>
            </Tabs>
        </>
    )
}

export default TechnologiesStack
