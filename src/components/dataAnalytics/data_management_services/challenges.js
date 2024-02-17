
import {Box, Flex, Text} from "@chakra-ui/react";
import Check from "../../../../public/assets/dataAnalytics/dataManagementServices/img.png";
import Image from "next/image";



function Challenges({title, detail}){
    return (
        <Box p={3} minW={"280px"} maxW={"360px"} h={"290px"} border={"1px solid rgba(0, 0, 0, 0.5)"} borderRadius={"8px"}>
            <Flex gap={"30px"} flexDirection={"column"}>
                <Flex alignItems={"center"} gap={"20px"} flexDirection={"column"}>
                    <Image width={70} src={Check} alt={"check"}/>
                    <Text fontSize={"20px"} fontWeight={"500"}>
                        {title}
                    </Text>
                </Flex>
                <Text fontSize={"15px"}  textAlign={"center"}>
                    {detail}
                </Text>

            </Flex>
        </Box>

    );
}

export default Challenges;

