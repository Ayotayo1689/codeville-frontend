import React from "react";
import {Flex, Grid, Text} from "@chakra-ui/react";
import HeadingTwo from "./heading";
import {ServicesOfferCardData} from "./data";
import Image from "next/image";
import ListIcon from "../../../../../public/assets/medicalSoftwarePage/ListIcon.svg";
import ServicesOffersCard from "./servicesOffersCard";

function Services() {

    return (
        <>
            <HeadingTwo title={"Drives Digital Transformation in Key Business Areas "}/>

            <Text
                fontWeight="400"
                fontSize={{lg: "18px", base: "16px"}}
                // my="20px"
                lineHeight={"36px"}
            >
                The ambitious goal of digital transformation is to improve the overall efficiency of your business. We
                achieve it by integrating digital solutions to eliminate wastes (unnecessary spending, asset misuse,
                time waste), transform operational models or identify new revenue streams across different areas of your
                business .Tanta creates digital transformation strategies in the following business areas:.. </Text>
            <Grid gridTemplateColumns={
                {
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                }
            } gap={"15px"} mt={"30px"}>
                {ServicesOfferCardData.map((item, index) => {

                    return (
                        <ServicesOffersCard exp={item.exp} images={item.img} title={item.title}
                                            listTexts={item.details.map((detail, i) => {
                                                return (
                                                    <Flex alignItems={"start"} key={i} p={"0"} mb={"10px"}>
                                                        <Image style={{marginTop: "6px", marginRight: "10px"}}
                                                               src={ListIcon} alt={"list icon"}/>
                                                        <Text fontSize={{base: '1rem', md: '0.8rem'}}
                                                              px={1}>{detail}</Text>
                                                    </Flex>
                                                )
                                            })} key={"index"}/>
                    );
                })}
            </Grid>
        </>
    );
}

export default Services;