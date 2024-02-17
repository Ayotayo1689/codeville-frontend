import React from "react";
import { WrapperCard, TitleCard, ContainerCard } from "./style";
import { Box, Text } from "@chakra-ui/react";
import IndustryStepper from "../competition/industry";
function CalculatorStepper({ service }) {
	// const FirsText =
	//     "Just answer a set of simple questions. Our team will quickly provide a tailored service offering and a cost estimate.";
	const firstTitle = " Software Development cost Calculator";
	const secondTitle = "  Learn the Costs of Your Software";
	const Solution = "Solution";

	return (
		<>
			<ContainerCard>
				<WrapperCard>
					<Box
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
						mt={"6vh"}
						mb={{ base: "40px", md: "auto" }}
					>
						<TitleCard>
							<Text className="titleFirstLine">{firstTitle} </Text>
							<Text className="titleSecondLine">
								{secondTitle} <span>{Solution}</span>
							</Text>
							<Box>
								<Text
									mt={{ base: "1rem", lg: "1.7rem" }}
									bgColor={"red"}
									w={"8rem"}
									left={"18vw"}
									height={".2rem"}
								></Text>
							</Box>
						</TitleCard>
					</Box>
					{/* Stepper buttons */}
					<IndustryStepper service={service} />
				</WrapperCard>
			</ContainerCard>
		</>
	);
}

export default CalculatorStepper;

// const Div = styled.div`

// `
