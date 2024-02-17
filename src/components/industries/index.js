import {Box} from "@chakra-ui/react";

import Hero from "./Hero";
import IndustriesSection from "./Industries";
import ContactUs from "../contactUs";

function Industries() {
    return (
        <Box minHeight="100vh" mt="7rem">
            <Hero/>
            <IndustriesSection/>
            <ContactUs/>
        </Box>
    )
}

export default Industries


