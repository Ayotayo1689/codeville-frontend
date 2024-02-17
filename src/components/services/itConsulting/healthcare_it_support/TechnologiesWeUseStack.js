import {Box} from "@chakra-ui/react";
import Styles from "./healthcare.module.css";
import TechnologiesWeUse1 from "./TechnologiesWeUse1";
import TechnologiesWeUse2 from "./TechnologiesWeUse2";
import React from "react";

const TechnologiesWeUseStack = () => {
    return (
        <Box pr="45px" pb="54px" bg="#e8eef1">
            <Box className={Styles.blueBox} py="10px" pl="30px">
                <TechnologiesWeUse1 />
            </Box>
            <Box pt="24px" pb="10px" pl="30px"><TechnologiesWeUse2 /></Box>
        </Box>
    )
}

export default TechnologiesWeUseStack