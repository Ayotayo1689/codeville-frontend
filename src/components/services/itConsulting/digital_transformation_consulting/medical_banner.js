import React from "react";
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import BannerImg from "../../../../public/assets/medicalSoftwarePage/medicalBannerimg.svg";

function MedicalBanner() {
    return (
        <>
            <Box bg={"#E8EEF1"} width={"851px"} height={"507"} mt={"2rem"}>
                <Flex justifyContent={"space-around"}>
                    <Box color={" #151616"} width={"388px"} fontWeight={700} fontSize={"24px"} mt={"2rem"} ml={"3rem"}>
                        <Text>
                            The Financial Times Includes Tanta Corporation in the List of the Africans’ Fastest-Growing
                            Companies 2023
                        </Text>
                        <Text color={"#2B2C2D;"}
                              fontWeight={"400"}
                              fontSize={"18px"}
                              mt={"1rem"}
                              width={"380px"}

                        >For the second year in a row, Tanta
                            Corporation ranks among 500 African
                            companies with the highest revenue growth. This
                            achievement is the result of our unfailing
                            commitment to provide high-quality IT services
                            and create best-value solutions that meet and
                            even exceed our clients’ expectations.</Text>
                    </Box>

                    <Image
                        display={{base: "none", md: "flex", lg: "flex"}}

                        w={"310px"}
                        height={"182px"}
                        position={"relative"}
                        top={"10rem"}
                        src={BannerImg}
                        alt="icon"

                    />
                </Flex>
            </Box>
        </>
    );
}
export default MedicalBanner