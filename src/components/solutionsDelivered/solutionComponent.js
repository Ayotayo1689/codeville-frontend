import React from "react";
import Link from "next/link";
import { Box, Grid, Button, Text } from "@chakra-ui/react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import appRoutes from "../../utils/appRoutes";
import { setSolutionIndex } from "@/features/user/userSlice";
import { useDispatch } from "react-redux";
import {setSelectedSolutionIndex, setSelectedSolutionName} from "@/features/healthcare";

const SolutionComponent = ({ solutions, NoPadding }) => {
	const dispatch = useDispatch();
	return (
		<Grid
			templateColumns={{ base: "1fr", lg: "repeat(4,1fr)" }}
			gap={{ base: "1rem", lg: "1rem" }}
			paddingInline={NoPadding ? {} : { base: "1rem", lg: "7rem" }}
			my={"3rem"}
		>
			{solutions?.map((item, key) => {
				return (
					<Link
						key={key}
						href={appRoutes.solutions["solutions-solutions-we-deliver"]}
						onClick={() => {
							dispatch(setSelectedSolutionIndex(key));
						}}
					>
						<Button
							bg={"#C71319"}
							textTransform={"capitalize"}
							fontSize={"lg"}
							color={"white"}
							paddingBlock={{ base: "4", lg: "10" }}
							paddingInline={{ base: "4", lg: "8" }}
							rounded={"none"}
							sx={{ "&:hover": { bg: "black" } }}
							width={{ base: "100%", lg: "100%" }}
							display={{ base: "none", lg: "flex" }}
						>
							{item?.name}
							<Box
								position={"relative"}
								top={{ lg: "-0.8rem" }}
								right={{ lg: "-1rem" }}
								left={{ base: "30%", lg: "10%" }}
							>
								<BsArrowUpRightCircle mt={"4rem"} fontSize={"1rem"} />
							</Box>
						</Button>
						<Button
							bg={"#C71319"}
							onClick={ () => {
								dispatch(setSelectedSolutionIndex(key));
								dispatch(setSelectedSolutionName(item?.name));
							}}
							textTransform={"capitalize"}
							fontSize={"lg"}
							color={"white"}
							paddingBlock={{ base: "4", lg: "10" }}
							paddingBlockEnd={"10"}
							paddingInline={{ base: "4", lg: "8" }}
							rounded={"none"}
							sx={{ "&:hover": { bg: "black" } }}
							width={{ base: "100%", lg: "100%" }}
							display={{ base: "grid", lg: "none" }}
							gridTemplateColumns={"9fr 1fr"}
						>
							<Text>{item?.name}</Text>
							<Box>
								<BsArrowUpRightCircle fontSize={"1rem"} />
							</Box>
						</Button>
					</Link>
				);
			})}
		</Grid>
	);
};

export default SolutionComponent;
