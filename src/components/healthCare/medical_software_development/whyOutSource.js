import React from "react";
import {Box, chakra, Flex} from "@chakra-ui/react";
import HeadingTwo from "./heading";
import Image from "next/image";
import arrowLeft from "../../../../public/assets/medicalSoftwarePage/arrowLeft.svg";
import LogoMarquee from "../../logoMarquee";
import arrowRight from "../../../../public/assets/medicalSoftwarePage/arrowRight.svg";
import {whyTanta} from "./data";
import Check from "../../../../public/assets/medicalSoftwarePage/check.svg";

function WhyOutSource() {

    return (
        <>
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                margin={{ lg: "1rem 0 1rem 0", base: "1.5rem 0.8rem" }}
            >
                <HeadingTwo title={"Why Outsource Healthcare Software Development at Tanta "} />

                <Flex justifyContent={"center"} alignItems={"center"} >
                    <Image src={arrowLeft} alt={"arrow left icon"} />
                    <Box maxWidth={"1200px"} position={"relative"}>
                        <Box whiteSpace={"nowrap"} overflow={"hidden"}>
                            <div>
                                <LogoMarquee  colored={true} />
                            </div>
                        </Box>
                    </Box>
                    <Image src={arrowRight} alt={"arrow left icon"} />
                </Flex>
            </Flex>
            <Box mb={"3rem"}>
                {whyTanta.map((item, index) => {

                    return (
                        <Flex  gap={"0.5rem"} key={index} mb={"15px"}>
                            <Box paddingTop={"10px"}>
                                <Image
                                    marginTop={"50px"}
                                    src={Check}
                                    alt={"check icon"}
                                />
                            </Box>

                            <chakra.li
                                maxWidth={"530px"}
                                color={"#303030"}
                                fontSize={{lg:"18px", base:"15px"}}
                                lineHeight={{lg:"170%", base:"170%"}}
                                listStyleType={"none"}
                            >
                                {item.details}
                            </chakra.li>
                        </Flex>
                    );
                })}
            </Box>
        </>
    );
}

export default WhyOutSource;












// import React from "react";
// import {Flex} from "@chakra-ui/react";
//
// function SolutionCard() {
//
//     return (
//         <>
//
//         </>
//     );
// }
//
// export default SolutionCard;