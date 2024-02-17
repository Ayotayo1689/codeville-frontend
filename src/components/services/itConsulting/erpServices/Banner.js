import React from "react";
import {Box, Button, Flex, Grid, Image, Text} from "@chakra-ui/react";
import Link from "next/link";
import appRoutes from "../../../../utils/appRoutes";


function Banner() {
    return (
        <>
            {/* ===========Banner ========= */}
            <Box
                width={"fit-content"}
                h={"fit-content"}
                bg={" #FDE6E7"}
                position={"relative"}
                my={"3rem"}
            >
                <Flex justifyContent={"space-between"} position={"relative"}>
                    <Image src="/assets/ui_ux/Vector 8.png" alt="icon"></Image>
                    <Box
                        borderRadius={"full"}
                        p={{ base: "1rem", lg: "2rem" }}
                        bg={"#F2666E"}
                        position={"absolute"}
                        right={{ base: "30%", lg: "20%" }}
                        top={"2rem"}
                    ></Box>
                    <Box
                        borderRadius={"full"}
                        p={"1.5rem"}
                        bg={"#F2666E"}
                        position={"absolute"}
                        right={"15%"}
                        top={"1rem"}
                    ></Box>
                    <Box
                        borderRadius={"full"}
                        p={"1rem"}
                        bg={"#F2666E"}
                        position={"absolute"}
                        right={{ base: "5%", lg: "10%" }}
                        top={"3rem"}
                    ></Box>
                </Flex>


                <Grid templateColumns={{base: "1fr", md: "1.2fr 1fr"}} alignItems="center"
                      // pt={{ base: "2.5rem", lg: "5.4rem" }}
                >
                    <Box>
                        <Image
                            position={"absolute"}
                            bottom={"0"}
                            src="/assets/ui_ux/Group.png"
                            alt="icon"
                            width={{ base: 100, lg: 200 }}
                        ></Image>

                        <Box pr={{base: '1rem', md: '0'}} pl={{ base: "1rem", lg: "3rem" }}>
                            <Box lineHeight="170%" fontSize="28px">
                                <Text display="flex" align={{base: 'center', md: 'start'}} flexDir="column" fontWeight={"bold"}>
                                    WANT TO EXPLORE IT
                                    <span style={{ color: "#F2666E", display: "inline-block" }}>
										ERP Development
									</span>
                                </Text>
                            </Box>
                            <Box
                                w="89px"
                                height={".3rem"}
                                my="30px"
                                mx={{base: 'auto', md: '0'}}
                                bg="#F2666E"
                                borderRadius={"lg"}
                            ></Box>
                            <Box mb={{base: '20px', md: '0'}}>
                                <Text
                                    align={{base: 'center', md: 'left'}}
                                    fontSize="18px"
                                    fontWeight={"bold"}
                                    opacity={"0.7"}
                                    textTransform={"capitalize"}
                                >
                                    Tanta Innovative will help you build accurate and
                                    transparent analytics and reporting to eliminate the
                                    guesswork out of your business processes and identify
                                    new profit opportunities
                                </Text>
                            </Box>


                            <Link
                                href={{
                                    pathname: appRoutes.contactUs,
                                    query: {service: "services/it-consulting"},
                                }}
                            >
                                <Button
                                    // px={{ base: "0.5rem", lg: "2.5rem" }}
                                    p="4px 30px 5px 30px"
                                    bg={"#F2666E"}
                                    w={{base: '100%', md: 'fit-content'}}
                                    color="white"
                                    _hover="none"
                                    my={{ base: "1rem", lg: "3rem" }}
                                >

                                        Request A EPR Quote
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Image
                        h="100%"
                        pt={{base: "2rem", md: "0"}}
                        mx="auto"
                        objectFit="contain"
                        src="/assets/ui_ux/banner.png"
                        alt="icon"
                    ></Image>
                </Grid>
            </Box>
        </>
    );
}

export default Banner;
