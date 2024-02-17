import { experties} from "./data";
import { Flex, Text} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import WhyChooseUs from "./WhyChooseUs";


function DataManagementCategory(){
    return (
        <>
            <Flex mb={"30px"} gap={"10px"} maxW={"720px"} flexDir={{lg:"row", base:"column"}}>
                {experties.map((item, i)=>{
                    return(
                        <Flex gap={"15px"} fontWeight={"700"}    flex={"1"} key={i} mb={"10px"} flexDirection={"column"}  justifyContent={"center"} alignItems={"center"}>
                            <Image src={item.img} alt={"icon"}/>
                            <Text fontSize={{lg:"30px", base:"22px"}}>{item.price}</Text>
                            <Text fontSize={{lg:"30px", base:"22px"}}>{item.details}</Text>
                        </Flex>
                    )
                })}
            </Flex>






            <WhyChooseUs/>
        </>

    );
}

export default DataManagementCategory;

