import React from 'react'
import {Box, Container, Flex} from "@chakra-ui/react";
import HeaderOne from "@/components/HeaderOne";
import Link from "next/link";
import appRoutes from "@/utils/appRoutes";
import Image from "next/image";
import styled from "styled-components";
import {breakpoints} from "../../../../styles/theme";
import Hero from "./Hero";

function RemoteWorkConsulting() {
    return (
        <div>
            <Box mt={"4rem"}>
                <HeaderOne heading={"it outsourcing"} title={"remote work consulting and enablement"}/>
                <Container maxW={"7xl"}>
                    <Hero/>
                </Container>
            </Box>
        </div>
    )
}

export default RemoteWorkConsulting



