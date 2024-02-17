import React from "react";
import LogoMarquee from "../logoMarquee";

import {Box, Flex, Text} from "@chakra-ui/react";
import Image from "next/image";
import Years from "../../../assets/aboutUs/years.png";
import Employees from "../../../assets/aboutUs/employees.png";
import Projects from "../../../assets/aboutUs/projects.png";


const WhoWeAre = () => {
    // const LogoMarquee = ({logos}) => {
    //     return (
    //         <Marquee gradient={false}>
    //             {logos?.map((image, index) => (
    //                 <Box key={index} mr="1rem">
    //                     <Image src={image} alt="Logo" width={100} height={50}/>
    //                 </Box>
    //             ))}
    //         </Marquee>
    //     );
    // };
    return (
        <Flex
            gap={"4rem"}
            direction={"column"}
            w={{base: "100%", lg: "80%"}}
            align={"center"}
            m={"2rem auto"}
        >
            <Flex
                align={{base: "center", md: "start"}}
                gap={"1rem"}
                direction={{base: "column", md: "row"}}
            >
                <Flex direction={"column"} gap={"1rem"} maxW={{md: "140px"}}>
                    <Box w={"131px"} h={"131px"} m={"0 auto"}>
                        <Image
                            src={Years}
                            alt="Years in business"
                            width="100%"
                            height="100%"
                        />
                    </Box>
                    <Box textAlign={"center"}>
                        <Text fontSize={"22px"} fontWeight={"600"} color={"#ED5B5B"}>
                            15+
                        </Text>
                        <Text fontSize={"18px"} color={"#000000"} fontWeight={"400"}>
                            Years in IT Business
                        </Text>
                    </Box>
                </Flex>
                <Box
                    w={{base: "1px", md: "100px"}}
                    h={{base: "100px", md: "1px"}}
                    bg={"#FF0000"}
                    m={{base: "0 auto", md: "4rem auto"}}
                ></Box>
                <Flex direction={"column"} gap={"1rem"} maxW={{md: "140px"}}>
                    <Box w={"131px"} h={"131px"} m={"0 auto"}>
                        <Image
                            src={Employees}
                            alt="Number of employees"
                            width="100%"
                            height="100%"
                        />
                    </Box>
                    <Box textAlign={"center"}>
                        <Text fontSize={"22px"} fontWeight={"600"} color={"#ED5B5B"}>
                            40+
                        </Text>
                        <Text fontSize={"18px"} color={"#000000"} fontWeight={"400"}>
                            Employees
                        </Text>
                    </Box>
                </Flex>
                <Box
                    w={{base: "1px", md: "100px"}}
                    h={{base: "100px", md: "1px"}}
                    bg={"#FF0000"}
                    m={{base: "0 auto", md: "4rem auto"}}
                ></Box>
                <Flex direction={"column"} gap={"1rem"} maxW={{md: "140px"}}>
                    <Box w={"131px"} h={"131px"} m={"0 auto"}>
                        <Image
                            src={Projects}
                            alt="Completed projects"
                            width="100%"
                            height="100%"
                        />
                    </Box>
                    <Box textAlign={"center"}>
                        <Text fontSize={"22px"} fontWeight={"600"} color={"#ED5B5B"}>
                            70
                        </Text>
                        <Text fontSize={"18px"} color={"#000000"} fontWeight={"400"}>
                            Completed Projects
                        </Text>
                    </Box>
                </Flex>
            </Flex>

            <Flex
                gap={{base: "10px", lg: "30px"}}
                direction={{base: "column", md: "row"}}
                borderTop={"1px solid rgba(0, 0, 0, 0.3);"}
                p={"1.5rem"}
            >
                <LogoMarquee colored={true}/>
            </Flex>
        </Flex>
    );
};

export default WhoWeAre;
