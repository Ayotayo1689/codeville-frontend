import React from "react";
import {Box, Text, Grid} from "@chakra-ui/react";
import {customersWeServe} from "../data";
import Image from "next/image";
function Customers () {
    return(
        <>
            <Box    id="solutions" scrollMarginTop={"150px"} >
                <Text
                    fontSize={{base:"20px",md:"32px",lg:"32px"}}
                    textAlign={{base:"center",md:"left",lg:"left"}}
                    fontWeight={"700"}
                    mt={"3rem"}
                    borderBottom={"1rem"}
                    color={" #222222"}
                >
                    Customers we serve
                </Text>

                <Box
                    w={{base:"50%", md:"6rem", lg:"6rem"}}
                    ml={{base:"auto", md:"0", lg:"0"}}
                    mr={{base:"auto", md:"0", lg:"0"}}
                    mt={{base:"0.5rem", md:"0", lg:"0"}}
                    style={{
                        height: "4px",
                        background: "#D80808",
                        marginBottom: " 2rem ",
                    }}
                ></Box>
              <Box
                  alignItems={"center"}

              >
                  <Grid
                      gridTemplateColumns={{
                          base: "1fr 1fr",
                          lg: "1fr 1fr",
                          md: "1fr 1fr",
                          sm: "none",
                      }}
                      justifyContent={"center"}
                      gridColumnGap={{base:"1rem",md:"0.5rem",lg:"0.5rem"}}
                      gridRowGap={"1rem"}
                       alignItems= {"center"}

                  >

                      {customersWeServe.map((item, index) => {
                          return (
                              <Box
                                  boxShadow={"0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"}
                                  height={{base:"190px",md:"241px",lg:"241px"}}
                                  border={ "1px solid rgba(0, 0, 0, 0.1)"}
                                  borderRadius={"15px"}
                                  bg={"#FFFFFF"}
                                  width={"100%"}
                                  maxWidth={{base:"161px",md:"384px",lg:"384px"}}
                                  minW={{base:"161px",md:"260px",lg:"260px"}}
                                  key={index}>

                                  <Box w={{base:"60px",md:"90px",lg:"90px"}}
                                  height={"90px"}
                                       m={"auto"}
                                       position={"relative"}
                                       top={"2rem"}
                                  >
                                  <Image
                                      src={item?.image}
                                      alt="icons"

                                  /></Box>
                                  <Text
                                  fontWeight={"700"}
                                  fontSize={{base:"12px",md:"20px",lg:"20px"}}
                                  textAlign={"center"}
                                  width={{base:"131px",md:"250px",lg:"250px"}}
                                  margin={"auto"}
                                  position={"relative"}
                                  top={{base:"1rem",md:"2rem",lg:"2rem"}}
                                  >
                                  {item?.text}
                                  </Text>
                              </Box>
                          );
                      })}
                  </Grid>

              </Box>

            </Box>
        </>
    );
}
export default Customers

