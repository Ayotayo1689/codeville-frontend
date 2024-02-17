import React from "react";
import Image from "next/image";
import {Box, Container, Flex, Text} from "@chakra-ui/layout";
import JobForm from "./jobForm"
import {Hide} from "@chakra-ui/react";
import styled from "styled-components";


function JobApplicationForm() {
  return (
    <>
      <Box id="Job_application_form">
          <Flex bg={"rgba(52, 48, 48, 1)"} w={"full"} h={"13.25rem"} alignItems={"center"}>
            <Image
                src="/assets/jobApplicationForm/Shape.png"
                width={120}
                height={2}
                alt="Picture"
            />
            <Box px={{base:"2rem", lg:"4rem"}}>
              <Text color={"white"}
                    fontSize={{base:"2xl", lg:"5xl"}}
                    fontWeight={700}
                    textTransform={"uppercase"}
              >Apply for Business Manager </Text>
              <Box border={"2px solid white"} w={{base:"3rem",lg:"5rem"}} >
              </Box>
            </Box>
          </Flex>
      </Box>
      <Container maxW={"7xl"} my={{base:"3rem",lg:"7rem"}}>
        <Flex  gap={"1rem"} flexWrap={"wrap"} pr={{lg:"2rem"}} p={"1rem"}>
            <Flex w={{base: "100%", lg: "40%"}}>
                <Box pr={"1rem"}>
                    <Box borderLeft={"2px solid #B20000"} px={"1rem"}>
                        <Text fontSize={{base: "2xl", lg: "4xl"}} fontWeight={"bold"}>
                            Join our Team
                        </Text>
                    </Box>
                    <Text
                        fontSize={"lg"}
                        lineHeight={"8"}
                        py={"2rem"}
                    >
                        Join us, and immerse yourself in a diverse, vibrant community teeming with industry leaders and passionate peers. In our big family, you're not just an employee; you're an integral part of a dynamic ecosystem where inspiration flows freely, and professional growth is encouraged. We offer an inclusive environment that celebrates individual successes, provides guidance during challenges, and continually pushes the boundaries of innovation.
                        <Image
                            src="/assets/jobApplicationForm/join-our-team.webp"
                            alt="Tanta join the team"
                            width={340}
                            height={225}

                        />
                    </Text>
                </Box>
                <Hide below={"md"}>
                    <VerticalLine></VerticalLine>
                </Hide>
            </Flex>
          {/* <Form> */}
          <Box w={{base:"100%", lg:"50%"}}>
            <Text>
              Drop us a line, and our rep will contact you within 30 minutes
              to arrange an initial discussion.
            </Text>

            < JobForm />
          </Box>
        </Flex>
      </Container>

    </>
  );
}

export default JobApplicationForm;

const VerticalLine = styled.div`
  border: 4px solid white;
  height: 26rem;
  box-shadow: 11px 0px 29px rgba(0, 0, 0, 0.25);
  align-items: center;
  
`;