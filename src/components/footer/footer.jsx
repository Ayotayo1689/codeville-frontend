import {Flex, Link, Text} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import microsoft from "../../../assets/footer/microsoft.png";

import {MdFacebook, MdLocationOn} from "react-icons/md";
import {ImPhone, ImTwitter, ImYoutube} from "react-icons/im";
import {RiInstagramFill, RiLinkedinBoxFill} from "react-icons/ri";
import {AiTwotoneMail} from "react-icons/ai";
import {Container, GridOne, GridThree, GridTwo, Links, Platforms, Secure,} from "../../../styles/footer.style";
import TrustPillot from "../TrustPillot";
import ClutchWidget from "../ClutchWidget";
import DMCABadge from "../DMCABadge";

const Footer = () => {
    return (
        <>
            {/*<Main>*/}
            {/*	<h2>Need a Consultation?</h2>*/}
            {/*	/!*<GridZero>*!/*/}

            {/*	/!*</GridZero>*!/*/}
            {/*</Main>*/}
            <Container>

                <GridOne>
                    <Flex>
                        <Image src="/assets/Logo.svg" width="133" height="50" alt={"logo"}/>
                    </Flex>
                    <Flex gap={".3rem"} itemScope itemType="http://schema.org/PostalAddress">
                        <MdLocationOn fontSize={"25px"}/>
                        <Flex
                            fontSize={"16.5px"}
                            fontWeight={"400"}
                            color={"#484848"}
                            direction={"column"}
                        >
                            <Text itemProp="addressLocality">Lekki Peninsula 104106</Text>
                            <Text itemProp="postalCode">Lagos State, Nigeria</Text>
                        </Flex>
                    </Flex>
                    <Flex gap={".3rem"}>
                        <ImPhone fontSize={"20px"}/>
                        <Flex
                            fontSize={"1rem"}
                            fontWeight={"400"}
                            color={"#484848"}
                            direction={"column"}
                            className="mobile-tel"
                        >
                            <Link href="tel:+234014536000" itemProp="telephone">
                                <Text>+234 - 01 - 453 - 6000</Text>
                            </Link>
                            <Link href="tel:+234014538515" itemProp="telephone">
                                <Text>+234 - 01 - 453 - 8515</Text>
                            </Link>
                        </Flex>
                    </Flex>

                    <Flex gap={"1.5rem"} className={"socials-mobile-view"}>
                        <Flex gap={".4rem"}>
                            <AiTwotoneMail fontSize={"20px"}/>
                            <Flex fontSize={"1rem"} fontWeight={"400"} color={"#484848"}>
                                <Link href="mailto:hello@tantainnovatives.com" itemProp="email">
                                    hello@tantainnovatives.com
                                </Link>
                            </Flex>
                        </Flex>

                        <Flex className="hide-desktop" pl={".3rem"} gap={"1rem"} align={"center"}>
                            <Link href="https://twitter.com/tantainnovative" target="_blank" rel="noopener noreferrer"
                                  aria-label="Follow us on Twitter">
                                <ImTwitter fontSize={"1.5rem"} color="#404040"/>
                            </Link>
                            <Link href="https://facebook.com/tantainnovatives" target="_blank" rel="noopener noreferrer"
                                  aria-label="Follow us on Facebook">
                                <MdFacebook fontSize={"1.5rem"} color="#404040"/>
                            </Link>
                            <Link href="https://instagram.com/tantainnovative" target="_blank" rel="noopener noreferrer"
                                  aria-label="Follow us on Instagram">
                                <RiInstagramFill fontSize={"1.5rem"} color="#404040"/>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/tantainnovative"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow us on LinkedIn"
                            >
                                <RiLinkedinBoxFill fontSize={"1.5rem"} color="#404040"/>
                            </Link>
                            <Link href="#" target="_blank" rel="noopener noreferrer"
                                  aria-label="Subscribe to our YouTube channel">
                                <ImYoutube fontSize={"1.2rem"} color="#404040"/>
                            </Link>
                        </Flex>
                    </Flex>

                </GridOne>

                <GridTwo>


                    <Flex direction={"column"} alignItems={"start"} className="mobile-view-terms">
                        <Links>
                            <Link
                                href="/partner-with-us"
                                fontSize={"14px"}
                                fontWeight={"500"}
                                color={"#484848"}
                                className="footer-link"
                            >
                                Become our Agent
                            </Link>
                            <Link
                                href="/private-policy"
                                fontSize={"14px"}
                                fontWeight={"500"}
                                color={"#484848"}
                                className="footer-link"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-and-conditions"
                                fontSize={"14px"}
                                fontWeight={"500"}
                                color={"#484848"}
                                className="footer-link"
                            >
                                Terms of Use
                            </Link>
                        </Links>

                        <Flex py={"1rem"}>
                            <DMCABadge/>
                        </Flex>
                    </Flex>

                    <Flex
                        w={"auto"}
                        h={"36px"}
                        className="secure-image"
                        direction={"column"}
                        alignItems={"center"}
                        gap={".6rem"}
                        my={"1rem"}
                    >
                        <Text
                            fontSize={"14px"}
                            fontWeight={"400"}
                            color={"#484848"}
                            mx={"2rem"}
                            my={"0.4rem"}
                            className="legal-enquiries hide-desktop"
                        >
                            For legal and press inquires: <Link href="mailto:press@tantainnovatives.com"
                                                                itemProp="email"> press@tantainnovatives.com</Link>
                        </Text>
                        <Image src="/assets/footer/iso_certification.svg" width="350" height="90"
                               alt="iso_certification"/>
                    </Flex>

                    <Secure>
                        <Text
                            fontSize={"14px"}
                            fontWeight={"400"}
                            color={"#484848"}
                            className="legal-enquiries hide-mobile"
                        >
                            For legal and press inquires: <Link href="mailto:press@tantainnovatives.com"
                                                                itemProp="email"> press@tantainnovatives.com</Link>
                        </Text>
                        <Flex className="hide-mobile">
                            <Link
                                href="https://www.trustlogo.com/ttb_searcher/trustlogo?v_querytype=W&v_shortname=SC5&v_search=https://tantainnovatives.com/&x=6&y=5"
                                target="_blank">
                                <Image src="/assets/ssl-trust-logo.png" width="200" height="40" alt="logo"/>
                            </Link>
                        </Flex>
                    </Secure>
                </GridTwo>

                <GridThree>
                    <Flex className="copyright hide-mobile">
                        <Text
                            fontSize={"14px"}
                            fontWeight={"400"}
                            color={"#484848"}
                            className="copyright-text "
                        >
                            © 2023 Tanta Innovative Limited All rights reserved.
                        </Text>
                    </Flex>
                    <Platforms>
                        <div>
                            <TrustPillot/>
                        </div>
                        <div>
                            <Image src={microsoft} alt={"microsoft"}/>
                        </div>
                        <div>
                            <ClutchWidget/>
                        </div>
                    </Platforms>
                    <Flex gap={"2.8rem"} justify={"end"} className="socials hide-mobile">
                        <Link href="https://twitter.com/tantainnovative" target="_blank" rel="noopener noreferrer"
                              aria-label="Follow us on Twitter">
                            <ImTwitter fontSize={"32px"} color="#404040"/>
                        </Link>
                        <Link href="https://facebook.com/tantainnovatives" target="_blank" rel="noopener noreferrer"
                              aria-label="Follow us on Facebook">
                            <MdFacebook fontSize={"32px"} color="#404040"/>
                        </Link>
                        <Link href="https://instagram.com/tantainnovative" target="_blank" rel="noopener noreferrer"
                              aria-label="Follow us on Instagram">
                            <RiInstagramFill fontSize={"32px"} color="#404040"/>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/tantainnovative"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow us on LinkedIn"
                        >
                            <RiLinkedinBoxFill fontSize={"32px"} color="#404040"/>
                        </Link>
                        <Link href="https://www.youtube.com/@tantainnovative" target="_blank" rel="noopener noreferrer"
                              aria-label="Subscribe to our YouTube channel">
                            <ImYoutube fontSize={"32px"} color="#404040"/>
                        </Link>
                    </Flex>

                </GridThree>
                <Flex
                    className="hide-desktop"
                    direction={"column"}
                    alignItems={"center"}
                    gap={"1rem"}
                >
                    <Text
                        fontSize={"14px"}
                        fontWeight={"400"}
                        color={"#484848"}
                        className="copyright-text"
                    >
                        © 2023 Tanta Innovative Limited All rights reserved.
                    </Text>
                    <Link
                        href="https://www.trustlogo.com/ttb_searcher/trustlogo?v_querytype=W&v_shortname=SC5&v_search=http://tantainnovatives.com/&x=6&y=5"
                        target="_blank">
                        <Image src="/assets/ssl-trust-logo.png" width="180" height="30" alt="Tanta setigo trust logo"/>
                    </Link>
                </Flex>
            </Container>
        </>

    );
};

export default Footer;
