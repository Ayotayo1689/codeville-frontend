import React from 'react'
import {Box, Flex, Text} from "@chakra-ui/react";
import BannerImg from "../../../../public/assets/consulting/pink_banner.svg";
import Image from "next/image";

const PinkBanner = ({title, text}) => {
    return (
        <Box mt={"2rem"}>
            <Flex
                background={"#FDE6E7"}
                justifyContent={"space-between"}
                alignItems={{base: "center", md: "start", lg: "start"}}
                flexDir={{base: "column", md: "row", lg: "row"}}
                padding={"4rem 1.5rem"}
                borderRadius={"3px"}
                mb={"3rem"}
            >
                <Box width={{base: "100%", md: "60%", lg: "95%"}} >
                    <Text
                        fontSize={{base: "1.5rem", lg: "1.8rem"}}
                        fontWeight={"700"}
                        mt={"1rem"}
                        borderBottom={"1rem"}
                        color={"black"}
                    >
                        {title}
                    </Text>
                    <div
                        style={{
                            width: "4rem",
                            height: "3px",
                            background: "rgba(242, 102, 110, 1)",
                            marginTop: "0.5rem",
                        }}
                    ></div>

                    <Text
                        fontWeight="600"
                        fontSize={{base: "15px", lg: "17px"}}
                        //color=" #565656"
                        my={"1.5rem"}
                        lineHeight={'170%'}>
                        {text}
                    </Text>
                </Box>
                <Box m={"auto"}>
                    <Image
                        src={BannerImg}
                        alt="banner image"
                        width={"100%"}
                        height={"100%"}
                    />
                </Box>
            </Flex>
        </Box>
    )
}
export default PinkBanner
