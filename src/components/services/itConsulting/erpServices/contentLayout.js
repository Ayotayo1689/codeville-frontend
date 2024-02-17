import {Box, Flex} from "@chakra-ui/react";
import React from "react";

const ContentLayout = ({children}) => {
    return (
        <Box mb={"2rem"} mt={"4rem"}>
            <Flex gap={"2rem"} justify={"center"}>
                {children}
            </Flex>
        </Box>
    )
}

export default ContentLayout