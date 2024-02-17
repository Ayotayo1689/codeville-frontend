import {Box, Flex, Text} from "@chakra-ui/react";
import {advantage} from "./data";


const TakeAdvantage = () => {

    return (
        <Box pb={"60px"}>
           <Text fontSize={"16px"} fontWeight={"700"} maxW={"280px"}>
               Take Advantage of Digitizing Your Transportation and Logistics Operations
           </Text>
            <Box w={"80px"} h={"5px"} bg={"red"} borderRadius={"20px"} mb={"30px"} mt={"30px"}></Box>
            <Text textAlign={"center"} mb={"70px"} maxW={"90%"} fontSize={"18px"} color={"#444444"} >Based on Tanta’s experience in transportation and logistics, companies operating in this sector may reap the following benefits with digital transformation:</Text>
            <Flex gap={"20px"} alignItems={"center"} flexDir={"column"}>
                {
                    advantage.map((data, index)=>{
                        return(
                            <Flex p={"20px"} alignItems={"center"} flexDir={"column"} maxW={"300px"} borderLeft={"2px solid #D6DDE1"} key={index}>
                                <Text fontWeight={"600"} fontSize={"22px"}>{data.title}</Text>
                                <Text textAlign={"center"} fontSize={"15px"} lineHeight={"40px"}>{data.description}</Text>
                            </Flex>
                        )
                    })
                }
            </Flex>
        </Box>
    )
}

export default TakeAdvantage