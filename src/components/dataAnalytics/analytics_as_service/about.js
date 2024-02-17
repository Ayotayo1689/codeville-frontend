import React from "react";
import {Box, Flex, List, ListIcon, ListItem, Text} from "@chakra-ui/react";
import {BsFillSquareFill} from "react-icons/bs";
import {provider} from "./data";
import LogoMarquee from "../../logoMarquee";

function About() {
    return (
        <>
            <Text fontSize={"20px"}>
                Tanta Innovatives is a leading provider of IT consulting and software development services that has
                helped businesses across multiple industries succeed. Our
            </Text>
            {provider.map((data, index) => {
                return (
                    <List key={index}>
                        <ListItem mt={"10px"} fontWeight={"400"} fontSize={"20px"}>
                            <Flex>
                                <ListIcon as={BsFillSquareFill} color='#E9000E' fontSize={"0.5rem"} mt={"0.8rem"}/>
                                <Text>
                                    {data}
                                </Text>
                            </Flex>
                        </ListItem>
                    </List>
                )
            })}

            <Flex mt={"30px"} justifyContent={"center"} alignItems={"center"}>
                {/*<Image src={arrowLeft} alt={"arrow left icon"} />*/}
                <Box maxWidth={"1200px"} position={"relative"}>
                    <Box whiteSpace={"nowrap"} overflow={"hidden"}>
                        <div>
                            <LogoMarquee colored={true}/>
                        </div>
                    </Box>
                </Box>
                {/*<Image src={arrowRight} alt={"arrow left icon"} />*/}
            </Flex>


        </>
    )
}

export default About