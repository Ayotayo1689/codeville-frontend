import React from "react";
import Vector from "../../../public/assets/competition/vector.svg";
import Congrats from "../../../public/assets/competition/congrats.svg";

import {
	Step,
	StepDescription,
	StepIcon,
	StepIndicator,
	StepNumber,
	StepSeparator,
	StepStatus,
	Stepper,
	useSteps,
	useBreakpointValue,
	Box,
	Container,
	Flex,
} from "@chakra-ui/react";
import styled from "styled-components";
import Image from "next/image";

const steps = [
	{ title: "First", description: "Contact Info" },
	{ title: "Second", description: "Date & Time" },
	{ title: "Third", description: "Select Rooms" },
	{ title: "Forth", description: "Select Rooms" },
	{ title: "Fifth", description: "Select Rooms" },
	{ title: "Sixth", description: "Select Rooms" },
];

const Congratulations = () => {
	const { activeStep } = useSteps({
		index: 1,
		count: steps.length,
	});

	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
		<Box>
			<Container maxW={"7xl"} m={"40px auto"}>
				<Flex gap={"40px"} alignItems={"center"}>
					<Stepper
						index={activeStep}
						colorScheme="gray"
						height={isMobile ? "auto" : "400px"}
						gap={isMobile ? "4" : "0"}
						flexDirection={isMobile ? "row" : "column"}
						orientation={isMobile ? "horizontal" : "vertical"}
					>
						{steps.map((step, index) => (
							<Step key={index}>
								<StepIndicator>
									<StepStatus
										complete={
											<StepIcon
												background={"white"}
												color={"gray"}
												borderRadius={"50%"}
											/>
										}
										incomplete={<StepNumber />}
										active={<StepNumber />}
									/>
								</StepIndicator>

								<StepSeparator />
							</Step>
						))}
					</Stepper>

					<CongratsBox>
						<div className="box"></div>
					</CongratsBox>
				</Flex>
			</Container>
		</Box>
	);
};
export default Congratulations;

const CongratsBox = styled.div`
	width: 90%;
	min-height: 500px;
	background-color: #cffeca;
	background-image: url("/assets/competition/vector.svg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	//background-repeat: no-repeat;
	//background-size: cover;
	//background-position: center;
	border-radius: 8px;
	padding: 4% 8%;
	position: relative;
`;
