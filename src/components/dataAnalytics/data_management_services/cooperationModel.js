import {CooperationModelData} from "./data";
import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import appRoutes from "../../../utils/appRoutes";


function CooperationModel(){
    return (
        <>
            <Box >
                <Box id={"benefits"} scrollMarginTop={"130px"} w={"100%"} m={"80px 0 30px 0"} >
                    <Text fontSize={{lg:"18px", base:"16px"}} color={"#636363"}>
                        COOPERATION MODEL
                    </Text>
                    <Text mb={"15px"} fontWeight={"700"} fontSize={{lg:"29px", base:"22px"}} maxWidth={"650px"}>
                        Challenges We Solve</Text>
                    <Box maxWidth={"60px"} bg={"red"} height={"4px"} mb={"20px"}></Box>
                </Box>
            </Box>
            {CooperationModelData.map((item, index)=>{
                return(
                    <Flex key={index} gap={"30px"} mb={"50px"}>
                        <Box bg={item.color}  w={"250px"} h={"230px"}>

                        </Box>
                        <Flex gap={"17px"}  flexDirection={"column"}>
                            <Text fontSize={{lg:"25px", base:"20px"}} fontWeight={"700"}>{item.title}</Text>
                            <Text fontSize={{lg:"18px", base:"16px"}} maxW={"530px"} fontWeight={"400"}>{item.text}</Text>

                            <Link   href={{
                                pathname: appRoutes.contactUs,
                                query: { service: "/services/data-analytics/data_management_services" },
                            }}
                                    service="services/data_analytics/data_management_services"
                                    className="request-services">
                                <Box fontSize={{lg:"16px", base:"14px"}} p={{lg:"10px 20px", base:"5px 10px"}} w={"fit-content"} borderRadius={"8px"} bg={"red"} color={"white"}>{item.button}</Box>
                            </Link>



                        </Flex>
                    </Flex>
                )
            })}

        </>

    );
}

export default CooperationModel;

