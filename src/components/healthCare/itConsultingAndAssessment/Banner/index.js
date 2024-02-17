import React from "react";
import {Box, Flex, Text, Image} from "@chakra-ui/react";


function Banner (){
    return(
        <>
         <Box bg={"#E8EEF1"} width={"820px"} height={"507px"}  mt={"2rem"} >
             <Flex  justifyContent={"space-around"}>
             <Box color={" #151616"} width={"388px"} fontWeight={700} fontSize={"24px"} mt={"2rem"}  ml={"3rem"}>
                 <Text >
                     Tanta Is a Leader in
                 </Text>
                 <Text>Healthcare IT Services Market in</Text>
                 <Text>2022 SPARK Matrix</Text>
                 <Text color={"#2B2C2D;"}
                 fontWeight={"400"}
                       fontSize={"18px"}
                       mt={"1rem"}
                       width={"380px"}

                 >Tanta is listed as a top healthcare IT services supplier, alongside Athena Health and Oracle Cerner. This accomplishment is the product of 18 years of relentless pursuit of technical innovation, made possible by Tanta's enthusiastic team of healthcare IT
                     specialists who always strive to make a difference for patients and caregivers alike.</Text>
             </Box>

                 <Image
                 display={{base: "none", md: "flex", lg: "flex"}}

                 w={"310px"}
                 height={"182px"}
                 position={"relative"}
                 top={"10rem"}
                 src="/assets/healthcare/itConsultingServices/bannerImage.png"
                 alt="icon"

                 />
             </Flex>
         </Box>
        </>
    );
};
export default Banner