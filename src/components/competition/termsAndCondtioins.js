import React from 'react';
import {Box,  Flex} from "@chakra-ui/react";
import styled from "styled-components";
import Image from "next/image";
import Instruction from "../../../public/assets/competition/instruction.svg";
import Linear from "../../../public/assets/competition/line.svg";

const TermsAndCondition = () => {
    return (
        <Box mt="60px" display={{ base: "none", md:"block"}} >
            {/*<Container maxW={"7xl"} p={{base: "1rem", lg: "4rem"}}>*/}
                <Contain image={Linear}>
                    <h2>
                        Terms and Conditions
                    </h2>
                    <p>
                        Competition Guidelines
                    </p>
                    <Line></Line>
                    <Flex>
                        <Box fontSize={{base: "14px", md: "18px"}} fontWeight={"400"} maxW={"60%"}  >
                            Before you hit that submit button, we just wanted to remind you to take a moment to review our terms and conditions for this competition. We've tried to keep them as simple and straightforward as possible, but it's always a good idea to read them over before entering. By submitting your ideas, you agree to abide by the rules and guidelines set out in the terms and conditions. <br/><br/> If you haven't had a chance to review them yet, don't worry! You can find a link to the terms and conditions page below. Thanks for taking the time to read them over, and good luck with your submissions! Terms and conditions page
                        </Box>
                        <Box  w={"70vw"}>
                            <Image src={Instruction} alt={"instructions"}/>
                        </Box>
                    </Flex>
                    {/*<Image className={"line"} src={Linear} alt={"linear"}/>*/}
                </Contain>

            {/*</Container>.*/}
        </Box>
    );
};

export default TermsAndCondition;


const Contain = styled.div`
//background-image:url("../../../public/assets/competition/line.svg") ;
  background-image: url("/assets/competition/line.svg");
  background-color: #555555;
  min-height: 300px;
  color: white;
  padding: 15px 2rem 15px 5rem;
  border-radius: 10px;
  overflow: hidden;
  h2{
    font-size: 32px;
    font-weight: 700;
  }
  p{
    font-size: 18px;
    font-weight: 400;
  }
  .line{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
`





const Line = styled.div`
width: 80px;
  height: 3px;
  background-color: red;
  margin:10px 0;
`