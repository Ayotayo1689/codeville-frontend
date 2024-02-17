import React from 'react'
import {Box, chakra, Text} from "@chakra-ui/react";
import Image from "next/image";
import {InsightCard, InsightContainer, InsightData} from "../index";

const Highlights = ({data}) => {
    return (
        <Box>
            <Text
                as="h2"
                fontSize={{lg: "28px", base: "22px"}}
                fontWeight={"700"}
                color={"#414141"}
                mb={".5rem"}
            >
                Highlights of Data Analytics as a Service with
                <chakra.span style={{color: "#E9000E"}}> Tanta Innovatives</chakra.span>
            </Text>
            <Box
                width={{lg: "10%", base: "30%"}}
                height={"0"}
                border={"2px solid #E9000E"}
                mb={"1.5rem"}
            />
            <InsightContainer>
                {data.map((item) => {
                    return (
                        <InsightCard key={item.index}>
                            <InsightData>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    className="insight-img"
                                />
                                <h3>{item.title}</h3>
                                <Box
                                    width={{lg: "10%", base: "30%"}}
                                    height={"0"}
                                    border={"2px solid #E9000E"}
                                    mb={"2rem"}
                                />

                                <p>{item.details}</p>
                            </InsightData>
                        </InsightCard>
                    );
                })}
            </InsightContainer>
        </Box>
    )
}
export default Highlights
