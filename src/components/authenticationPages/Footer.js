import React from "react";
import {Flex, Text} from "@chakra-ui/react";
import Link from "next/link";
import appRoutes from "@/utils/appRoutes";

function Footer() {
    return (
        <div>
            <Flex direction={"column"} justify={"center"} mt={{base: "1rem", md: "2rem", lg: "6rem"}} align={{base: "start", md: "center"}} gap={"1rem"} p={{base: "0 2rem", lg: "0 3rem"}}>
                <Flex gap={"1.5rem"} direction={{base: "column", md: "row"}}>
                    <Link href={appRoutes.privatePolicy}>
                        <Text fontSize={".9rem"}>Privacy Policy</Text>
                    </Link>
                    <Link href={appRoutes.termsAndConditions}>
                       <Text fontSize={".9rem"}>Terms and Conditions</Text>
                    </Link>
                    <Link href={appRoutes.partnerWithUs}>
                      <Text fontSize={".9rem"}>Become an Agent</Text>
                    </Link>
                </Flex>
                <Text fontSize={".9rem"}>© 2023 Tanta Innovative Limited All rights reserved.</Text>
            </Flex>
        </div>
    );
}

export default Footer;
