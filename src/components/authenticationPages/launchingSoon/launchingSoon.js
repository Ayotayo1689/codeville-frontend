import React from "react";
import {Box, Button, Flex, Input, InputGroup, InputRightElement, Text} from "@chakra-ui/react";
import Image from "next/image";

function LaunchingSoon() {

    return (
        <Box position={"relative"}>
            <Box bg={"#F8F7FA"} height={"100vw"} width={"100%"}
                 display={{base: "none", md: "none", lg: "flex"}}
            >
            </Box>
            <Box backgroundImage="url('/assets/authenticationPages/Shape.png')" height={"28rem"} width={"100%"}
                 position={"absolute"}
                 backgroundRepeat={"no-repeat"}
                 backgroundSize={"100%"}
                 top={"64%"}
                 zIndex={"1"}
                 display={{base: "none", md: "none", lg: "flex"}}

            >

            </Box>
            {/*================mobile image=====*/}
            <Box justifyContent={"center"}
                 mt={"15rem"}
                 position="relative"
                 display={{base: "flex", md: "flex", lg: "none"}}


            >
                <Image
                    src={"/assets/authenticationPages/launching-soon.png"}
                    alt="tanta logo"
                    width={100}
                    height={100}
                />
            </Box>
            <Box width="100%" textAlign="center"
                 top={{base: "5rem", md: "15rem", lg: "15rem"}}
                 position={{base: "relative", md: "absolute", lg: "absolute"}}
            >
                <Text color={" #56585A"} fontSize={"32px"} fontWeight={"600"}>
                    We are launching soon
                </Text>
                <Text color={"#808587"} fontSize={"15px"} fontWeight={"400"}>
                    We're creating something awesome. Please subscribe to get notified when it's ready!
                </Text>

                <Flex justifyContent={"center"} mt={{base: "3rem", md: "3rem", lg: "1rem"}} height={"40px"}>
                    <InputGroup width={"320px"} bg={"white"}>
                        <Input type="email" placeholder="Enter your email" borderRadius={"6px 0px 0px 6px"}/>
                        <InputRightElement width="auto" h="100%" pr={0}>
                            <Button bg={" linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"} color={"white"}
                                    borderRadius="0 6px 6px 0"> Submit</Button>
                        </InputRightElement>
                    </InputGroup>
                </Flex>


                <Box justifyContent={"center"}
                     mt={{base: "2rem", md: "10rem", lg: "5rem"}}
                     position="relative"
                     zIndex="2"

                     display={{base: "none", md: "none", lg: "flex"}}
                >
                    <Image
                        src={"/assets/authenticationPages/launching-soon.png"}
                        alt="tanta logo"
                        width={200}
                        height={500}
                    />
                </Box>
            </Box>
        </Box>
    )

}

export default LaunchingSoon

