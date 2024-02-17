
import {Box, Flex, Text} from "@chakra-ui/react";
import Image from "next/image";
import Jmeter from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/jmater.svg";
import Octopus from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/octopus.svg";
import Docker from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/docker.svg";
import Aws from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/aws.svg";
import Zabbix from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/zabbix.svg";
import Puppet from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/puppet.svg";
import React from "react";


function ManagementTech(){
    return (
        <>
            <Box id={"benefits"} scrollMarginTop={"130px"} w={"100%"} m={"50px 0"} >
                <Text fontWeight={"700"} fontSize={{lg:"29px", base:"22px"}} maxWidth={"650px"}>Data Management Technologies</Text>
                <Box maxWidth={{lg:"120px", base:"60px"}} bg={"red"} height={"4px"} mb={"20px"}></Box>
            </Box>
            <Flex flexDirection={"column"} gap={"60px"}>
                <Image src={Jmeter} alt={"Image"}/>
                <Image src={Octopus} alt={"Image"}/>
                <Image src={Docker} alt={"Image"}/>
                <Image src={Aws} alt={"Image"}/>
                <Image src={Zabbix} alt={"Image"}/>
                <Image src={Puppet} alt={"Image"}/>
            </Flex>
        </>

    );
}

export default ManagementTech;

