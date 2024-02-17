import React from "react";
import {Text, Box, Grid, } from "@chakra-ui/react";
import {technologiesCard} from "../data";
import Image from "next/image";

function  TechnologiesCards () {
    return(
        <>
            <Box mt={"3rem"}    id="technology" scrollMarginTop={"150px"}   display={{base: "none", md: "block", lg: "block"}}>
                <Text
                    fontSize={"32px"}
                    fontWeight={"700"}
                    mt={"3rem"}
                    borderBottom={"1rem"}
                    color={" #222222"}
                >
                    Technologies We Use
                </Text>

                <div
                    style={{
                        width: "8rem",
                        height: "4px",
                        background: "#D80808",
                        marginBottom: " 2rem ",
                    }}
                ></div>


                <Box mt={"1rem"}>


                    <Box my={'1.5rem'} width={"100%"}  bg={"#E8EEF1"} height={"46rem"}>
                        <Image
                            src="/assets/healthcare/itConsultingServices/technology.png"
                            width={1300}
                            height={500}
                            alt="icons"
                            style={{marginLeft: "2rem", width: '90%', position: "relative", top: "2rem"}}
                        />
                    </Box>
                </Box></Box>

            <Box  id="heghlights" scrollMarginTop={"150px"}   display={{base: "none", md: "block", lg: "block"}}>
                <Grid
                    gridTemplateColumns={{
                        base: "none",
                        lg: "1fr 1fr",
                        md: "1fr 1fr",
                        sm: "none",
                    }}
                    justifyContent={"center"}
                    flexDir={{base: "column", lg: "row"}}
                    gridGap={"1rem"}
                    alignItems= {"center"}
                >

                    {technologiesCard.map((item, index) =>{
                    return(
                        <Box
                        key={"index"}
                        width={{base: "100%", md: "20rem", lg: "26rem"}}
                        height={{base: "100%", md: "20rem", lg: "20rem"}}
                        border={" 0.906994px solid #DADFE3"}
                        boxSizing={"border-box"}
                        >
                            <Image
                                src={item?.img}
                                alt="icons"
                                style={{width: "40.79px", height: "38.98px", margin:"auto", position: 'relative', top: "2rem"}}
                            />

                            <Text  fontSize={{base: "18.1399px", md: "16px", lg: "18.1399px"}}
                                   fontWeight={"700"}
                                   color={" #444444"}
                                   mt={"3rem"}
                                   textAlign={"center"}

                              >
                                {item?.title}
                            </Text>

                            <Text
                            width={"90%"}
                            fontSize={{base: "14.5119px", md: "13px", lg: "14.5119px"}}
                            fontWeight={"400"}
                            color={" #444444"}
                            mt={"1rem"}
                            m={"auto"}
                            position={"relative"}
                            top={"0.5rem"}

                            >
                                {item?.details}
                            </Text>


                        </Box>
                        )})}
                </Grid>


            </Box>
        </>
    )
}
export default TechnologiesCards