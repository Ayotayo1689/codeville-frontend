import React from 'react'
import {Box, Flex, Text} from "@chakra-ui/react";
import Image from "next/image";
import Jmeter from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/jmater.svg";
import Octopus from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/octopus.svg";
import Docker from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/docker.svg";
import Aws from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/aws.svg";
import Zabbix from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/zabbix.svg";
import Puppet from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/puppet.svg";

function DataManagementTechnologies() {
    return (
        <div>
            <Text fontWeight={"700"} fontSize={{base: "1.2rem", lg: "1.7rem"}} maxWidth={"650px"}>
                Data Management Technologies
            </Text>
            <Box
                maxWidth={{lg:"120px", base:"50px"}}
                bg={"red"}
                height={"4px"}
                mb={"20px"}
            ></Box>
            <Flex flexDirection={"column"} gap={"60px"} mt={"3rem"}>
                <Image src={Jmeter} alt={"Image"} />
                <Image src={Octopus} alt={"Image"} />
                <Image src={Docker} alt={"Image"} />
                <Image src={Aws} alt={"Image"} />
                <Image src={Zabbix} alt={"Image"} />
                <Image src={Puppet} alt={"Image"} />
            </Flex>

    </div>
    )
}

export default DataManagementTechnologies