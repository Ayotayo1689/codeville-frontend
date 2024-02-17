import {Box, Flex, Grid, Text} from "@chakra-ui/react";
import {erpModulesData} from "./data";
import Image from "next/image";

const ErpModulesCard = () => {
    return (
            <Grid templateColumns={{base: '1fr', md: "repeat(3, 1fr)", lg: '1fr 1fr', xl: "repeat(3, 1fr)"}} templateRows="max-content" rowGap="30px" columnGap="16px" id="erp-modules" scrollMarginTop={"150px"} textAlign='center' mx={{base: '52px', md: '0'}}>
                {erpModulesData.map((item, index) => {
                    return (
                        <Flex align="center" flexDir="column"  key={index}>
                            <Box pb="15px" borderBottom='2px solid #B60E09'>
                                <Image width="auto" height="auto" src={item?.img} alt="erp module icon" />
                            </Box>
                            <Text fontWeight="500" my="14px" fontSize="18px" color="#151616">{item?.title}</Text>
                            <Text mb={{base: '100px', md: '0'}} lineHeight="170%" fontSize="16px" color="#1E1E1E">{item?.description}</Text>
                        </Flex>
                    )
                })}
            </Grid>
    )
}

export default ErpModulesCard