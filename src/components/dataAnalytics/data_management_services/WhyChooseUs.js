import {DataManagement} from "./data";
import {Box, Flex, Text} from "@chakra-ui/react";
import styled from "styled-components";
import ListIcons from "../../../../public/assets/medicalSoftwarePage/ListIcon.svg";
import Image from "next/image";


const wordsToStyle = ["Project", "Management","Quality","System", "76%", "Consulting", "Expertise"];

function WhyChooseUs(){
    return (
        <Flex fontSize={"18px"} >
            <Flex gap={"30px"} maxW={"750px"} flexDir={{lg:"row", base:"column"}}>
                 <Box>
                     {DataManagement.slice(0,4).map((item, index) => {
                         const words = item.split(" ");
                         return (
                             <Flex key={index} alignItems={"start"} mb={"10px"}>
                                <Image style={{margin:"10px"}} src={ListIcons} alt={"listIcon"}/>
                                 <Text key={index} fontSize={{lg:"18px", base:"16px"}}>
                                 {words.map((word, wordIndex) => {
                                     const isHighlighted = wordsToStyle.includes(word);
                                     return (
                                         <Span
                                             key={wordIndex}
                                             style={{ fontWeight: isHighlighted ? "700" : "400" }}
                                         >
                                             {word}{" "}
                                         </Span>
                                     );
                                 })}
                             </Text>
                             </Flex>

                         );
                     })}
                 </Box>
                <Box>
                    {DataManagement.slice(4,7).map((item, index) => {
                        const words = item.split(" ");
                        return (
                            <Flex key={index} alignItems={"start"} mb={"10px"} >
                                <Image style={{margin:"10px"}} src={ListIcons} alt={"listIcon"}/>
                                <Text fontWeight={"200"} key={index} fontSize={{lg:"18px", base:"16px"}}>
                                    {words.map((word, wordIndex) => {
                                        const isHighlighted = wordsToStyle.includes(word);
                                        return (
                                            <Span
                                                key={wordIndex}
                                                style={{ fontWeight: isHighlighted ? "700" : "400" }}
                                            >
                                                {word}{" "}
                                            </Span>
                                        );
                                    })}
                                </Text>
                            </Flex>

                        );
                    })}
                </Box>
            </Flex>
        </Flex>
    );
}

export default WhyChooseUs;



const Span = styled.span`

`
