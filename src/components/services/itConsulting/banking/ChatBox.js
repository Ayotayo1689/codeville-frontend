import {Box, Flex, Text} from "@chakra-ui/react";
import Image from "next/image";
import FaqAssistant from "../../../../../public/assets/consulting/banking/faq-assistant.svg";
import React from "react";
import {BsFillChatRightFill} from "react-icons/bs";

const ChatBox = () => {
    return (
        <Flex flexDir="column" gap="12px" fontSize="18px" lineHeight="28px" color="#3B3C3D" mb="50px" p="54px 54px 33px 8px"
              sx={{border: "1px solid #A7A7A7", background: "rgba(253, 230, 231, 0.20)"}}>
            <Flex gap={2}>
                <Image src={FaqAssistant} width="auto" height="auto" alt="faq assistant" />
                <Text borderRadius="4px" py="30px" px="18px" bg="#F6999F">Hi! What would you like to know?</Text>
            </Flex>
            <Flex flexDir="column" gap="12px" alignItems="flex-end">
                <Text borderRadius="4px" maxW={{base: "78%", xl: "90%"}} p="14px 24px" bg="#E8EEF1">Wouldn’t outsourcing IT management threaten our information
                    security?</Text>
                <Text borderRadius="4px" maxW={{base: "78%", xl: "90%"}}  p="14px 24px" bg="#E8EEF1">How can we check the quality of ScienceSoft’s healthcare IT support?</Text>
                <Text borderRadius="4px" maxW={{base: "78%", xl: "90%"}}  p="14px 24px" bg="#E8EEF1">What if we need to change the terms of our support agreement?</Text>
                <Flex gap={4} align="center" borderRadius="4px" maxW={{base: "78%", xl: "90%"}}  p="14px 24px" bg="#E8EEF1"><BsFillChatRightFill /><Text>Ask my question</Text></Flex>
            </Flex>

        </Flex>
    )
}

export default ChatBox