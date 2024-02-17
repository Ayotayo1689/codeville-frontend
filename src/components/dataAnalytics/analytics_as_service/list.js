import React from 'react'
import {Box, Flex, Text} from "@chakra-ui/react";
import {RiCheckboxBlankFill} from "react-icons/ri";

const List = ({title, data}) => {
    return (
        <>
            <Text fontSize={{lg: "1.5rem", md: '1.35rem', base: "1.2rem"}} fontWeight={"700"} color={"#2F2F2F"}
                  mb={".5rem"}>
                {title}
            </Text>
            <Box>
                {data.map((item) => (
                    <Box key={item?.id} py={1}>
                        <Flex gap={2}>
                            <RiCheckboxBlankFill
                                style={{
                                    color: "#E9000E",
                                    minWidth: "10px",
                                    maxWidth: "10px",
                                    marginTop: "5px",
                                }}
                            />

                            <Text fontSize={'1.12rem'}>{item?.list}</Text>
                        </Flex>
                    </Box>
                ))}
            </Box>
        </>
    )
}
export default List
