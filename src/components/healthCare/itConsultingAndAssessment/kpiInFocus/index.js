import React from "react";
import {Box, Flex, List, ListIcon, ListItem, Text} from "@chakra-ui/react";
import {BsCheck} from "react-icons/bs";

function KpiInFocus () {
    return(
        <>
        <Box >
            <Text
                fontSize={{base:"24px",md:"32.033px",lg:"32.033px"}}
                fontWeight={{base:"600",md:"400",lg:"400"}}
                mt={"3rem"}
                borderBottom={"1rem"}
                color={" #222222"}
                fontFamily={{base:"",md:"Sumana",lg:"Sumana"}}
            >KPIs in Focus
            </Text>

            <Box
                w={{base:"50%", md:"6rem", lg:"6rem"}}
                mt={{base:"0.5rem", md:"0", lg:"0"}}
                style={{
                    height: "4px",
                    background: "#D80808",
                    marginBottom: " 2rem ",
                }}
            ></Box>

            <Text
                 color={"#3B3C3D"}
                 fontWeight={"400"}
                 fontSize={{base:"12px", md:"16px", lg:"16px"}}
                width={{base:"100%", md:"90%", lg:"840px"}}
                textAlign={"justify"}
            >
                When designing an IT strategy or digital health software for hospitals, labs, healthcare startups, mature software product
                companies, medical device providers, and pharmaceutical companies, we build our healthcare IT advisory services around
                <Text as="span"   fontWeight={"700"}> customers’ goals and KPIs.</Text>  These are a few groups of KPIs we focus on:
            </Text>

            <List spacing={3}  mt={"2rem"}  fontWeight={"400"}
                  fontSize={{base:"12px", md:"16px", lg:"16px"}}  width={{base:"100%", md:"90%", lg:""}}>
                <ListItem fontWeight={"400"}  display={"inline"}>
                    <Flex>
                        <ListIcon as={BsCheck} color=' #E9000E'  fontSize={"2rem"}/>
                        <Text>  <Text as="span"   fontWeight={"700"}>Patient health outcomes and quality of care</Text>
                            , e.g., reduced complications rate, lower readmission rate.</Text></Flex>
                </ListItem>
                <ListItem fontWeight={"400"}>
                    <Flex>
                        <ListIcon as={BsCheck} color=' #E9000E' fontSize={"2rem"} />
                        <Text>  <Text as="span"   fontWeight={"700"}> Medical staff performance</Text>
                            , e.g., faster patient care delivery, reduced time spent on report creation.</Text></Flex>
                </ListItem >
                <ListItem fontWeight={"400"} >
                    <Flex>
                        <ListIcon as={BsCheck} color=' #E9000E' fontSize={"2rem"}/>
                        <Text> <Text as="span"   fontWeight={"700"}>Cost of care</Text>
                            , e.g., decreased length of patient stay in the hospital and ancillary costs, reduced cost per visit.</Text></Flex>
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem fontWeight={"400"} >
                    <Flex>
                        <ListIcon as={BsCheck} color='#E9000E' fontSize={"2rem"}/>
                        <Text> <Text as="span"   fontWeight={"700"}> Patient engagement</Text>
                            , e.g., increased visit attendance, reduced hospitalizations.</Text></Flex>
                </ListItem>
                <ListItem fontWeight={"400"} >
                    <Flex>
                        <ListIcon as={BsCheck} color=' #E9000E' fontSize={"2rem"}/>
                        <Text> <Text as="span"   fontWeight={"700"}> User satisfaction</Text>, e.g., number of active patients using a mobile healthcare app daily..</Text></Flex>
                </ListItem>
                <ListItem fontWeight={"400"} >
                    <Flex>
                        <ListIcon as={BsCheck} color=' #E9000E' fontSize={"2rem"} />
                        <Text> <Text as="span"   fontWeight={"700"}>Asset management</Text>
                            , e.g., increased asset utilization rate, decreased asset search time.</Text></Flex>
                </ListItem>

            </List>
        </Box>
        </>
    )
}
export default  KpiInFocus