
import {Box, Flex, Text} from "@chakra-ui/react";
import Image from "next/image";
import Jmeter from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/jmater.svg";
import Octopus from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/octopus.svg";
import Docker from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/docker.svg";
import Aws from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/aws.svg";
import Zabbix from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/zabbix.svg";
import Puppet from "../../../../public/assets/dataAnalytics/modernizedDataAnalytics/puppet.svg";
import React from "react";
import {challenges} from "./data";
import Challenges from "./challenges";


function ChallengesWeSolve(){
    return (
        <>
            <Box  >
                <Box w={"100%"} m={"80px 0 30px 0"} >
                    <Text fontSize={{lg:"18px", base:"16px"}} color={"#636363"}>
                        CHALLENGES WE SOLVE
                    </Text>
                    <Text mb={"15px"} fontWeight={"700"} fontSize={{lg:"29px", base:"22px"}} maxWidth={"650px"}>
                        Challenges We Solve</Text>
                    <Box maxWidth={"60px"} bg={"red"} height={"4px"} mb={"20px"}></Box>
                </Box>
            </Box>
            <Flex flexWrap={"wrap"} gap={"30px"}>
                {
                    challenges.map((item, index)=>{
                        return(
                            <Challenges key={index} title={item.title} detail={item.texts} />
                        )
                    })
                }
            </Flex>
        </>

    );
}

export default ChallengesWeSolve;

