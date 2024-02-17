import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";
import {textStyle} from "./data";
import Banner from "./Banner";
import appRoutes from "../../../../utils/appRoutes";

const CustomErpDevelopment = () => {
    return (
        <>
            <Box mt="60px">
                <Flex flexDir="column" color="#414141" fontWeight="700" fontSize={{lg:"30px", base:"20px"}}>
                    <Text>Custom ERP Development <Text color="#EB1A26" as="span">Cost and Timelines</Text></Text>
                    <Text sx={textStyle}>erp integrations</Text>
                </Flex>
                <Box w='55px' h="3px" bg="#E9000E" my="30px"></Box>
                <Text align={{base: 'center', md: 'left'}} mb="30px">Drawing on Tanta Innovative's experience, the development of a Minimum Viable Product
                    (MVP) for a custom ERP system typically requires approximately 3-5 months. However, implementing a`
                    full-scale ERP system for a midsize company can take anywhere from 1 to 3 years, depending on
                    various factors such as solution complexity, supported regions, and compliance requirements. Our
                    team ensures a thorough and efficient implementation process to meet your specific business
                    needs.</Text>
                <Banner linkPath={appRoutes.services["it-consulting/erp-services"]} btnText={"Request an ERP Quote"}
                        sectionId={"cost-estimate"}
                        textUp={"WANT TO EXPLORE"} textDown={"ERP Development"}/>
            </Box>
        </>
    )
}

export default CustomErpDevelopment
