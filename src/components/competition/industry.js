import React, { useEffect, useState, useRef, useReducer } from "react";
import { useDimensions } from "@chakra-ui/react";
import {
	BodyCard,
	BlockCard,
	ContainerCard,
	FormCard,
	BoxCongrats,
	TextAreaBloc,
	InputBloc,
} from "../costCalculator/style";
import {
	Box,
	Flex,
	Button,
	Step,
	StepIcon,
	StepIndicator,
	StepNumber,
	StepSeparator,
	StepStatus,
	Stepper,
	Text,
	Textarea,
	Input,
	useBreakpointValue,
	useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import icon from "../../../public/assets/calculator/icon.png";
import checkbulb from "../../../public/assets/calculator/checkbulb.svg";
import calculatorImage from "../../../public/assets/calculator/calculator.svg";
import { Checkbox } from "@chakra-ui/react";
import { data } from "./data";
import {
	FaRegCheckCircle,
	FaRegCircle,
	FaRegSquare,
	FaRegCheckSquare,
} from "react-icons/fa";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "../../utils/config";
function IndustryStepper({ service = "softwareDevelopment-5" }) {

	console.log('*****************', service );
	const elementRef = useRef();
	const dimensions = useDimensions(elementRef, true);
	// split the query params to get the index of the service on the array
	const infoAboutService = service?.split("-");
	const index = service ? Number(infoAboutService[1]) : 5;

	const serviceName = service ? infoAboutService[0] : "softwareDevelopment";
	const toast = useToast();
	let stepValue = [];
	const submitForm = () => {
		statusButtons.forEach((stepsValues, index) => {
			const newStepValue = handelStepValues(index, stepsValues[0].value);
			stepValue.push(newStepValue);
		});
		const newValues = stepValue;
		const resultValues = {
			$schema: "http://json-schema.org/draft-07/schema#",
			$id: "https://example.com/object1648068705.json",
			title: "Root",
			type: "object",
			properties: Object.assign({}, stepValue),
		};
		setDisplay("none");
	};
	const FormOne = useFormik({
		initialValues: {
			Text: "",
			full_name: "",
			company: "",
			email: "",
			phone_number: "",
			file: null,
			service: serviceName || "",
		},
		validationSchema: Yup.object({
			full_name: Yup.string()
				.min(2, "Too Short!")
				.max(50, "Too Long!")
				.required("Required"),
			company: Yup.string().required("Required"),
			email: Yup.string().email("Invalid email").required("Required"),
			phone_number: Yup.string().required("Required"),
			Text: Yup.string().required("Required"),
		}),
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			submitForm();
			const newUserResponse = stepValue.map((item) => {
				return {
					name: item?.stepIndex?.name,
					value: item?.properties?.type?.enum,
				};
			});

			try {
				// const data = new FormData();
				// data.append("text", values.Text);
				// data.append("full_name", values.full_name);
				// data.append("company", values.company);
				// data.append("email", values.email);
				// data.append("phone_number", values.phone_number);
				// data.append("service", values.service);
				// data.append("data", newUserResponse);
				// data.append("user", 1);
				const dataTemp = values;
				dataTemp.data = newUserResponse;
				dataTemp.user = 1;
				const response = await axiosInstance.post(
					"api/costcalculator/request/",
					dataTemp
				);

				// toast({
				// 	title: "Thank you!",
				// 	description: "We will be in touch with you shortly",
				// 	status: "success",
				// 	duration: 5000,
				// 	isClosable: true,
				// });

				resetForm();
			} catch (error) {
				const msg = Object.values(error.response.data).join("\n");

				// toast({
				// 	title: "An error occurred",
				// 	description: "please try again",
				// 	status: "error",
				// 	duration: 5000,
				// 	isClosable: true,
				// });
			}
			setSubmitting(false);
		},
	});
	function StepSeparator() {
		const isMobile = useBreakpointValue({ base: true, md: false });

		return isMobile ? null : (
			<Box
				borderStyle="dashed"
				borderWidth="0.4px"
				borderColor="green.400"
				marginX="1"
				transform={"rotate(90deg)"}
			/>
		);
	}

	{
		/* data in the status*/
	}
	const steps = [...new Array(data[index]?.length)];
	const [activeStep, setActiveStep] = useState(0);
	const activeIcon =
		activeStep * (dimensions && dimensions.borderBox.height / 70);
	const [inputValue, setInputValue] = useState({ value: "", index: 0 });
	const [displayValue, setDisplay] = useState("grid");
	const [arrIndex] = useState(index);

	const [statusButtons, UseStatus] = useState(data[arrIndex]);
	const [, forceUpdate] = useReducer((x) => x + 1, 0);

	const FirsText =
		"Just answer a set of simple questions. Our team will quickly provide a tailored service offering and a cost estimate.";

	const congratsText =
		"Congratulations on submitting your ideas to our online competition! We appreciate your participation and look forward to reviewing your brilliant and hilarious submissions. Rest assured, we'll get back to you soon with the results. In the meantime, feel free to relax and take a break from all that creativity. Thanks again for being a part of this incredible competition!";
	const questionText = "Questions marked with * are necessary";

	const addStep = () => {
		setActiveStep((prevStep) =>
			prevStep < data[index]?.length ? prevStep + 1 : data[index]?.length
		);
	};

	{
		/* remove new step*/
	}
	const removeStep = () => {
		setActiveStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 0));
	};
	{
		/* check buttons*/
	}

	const handleChange = (event, indexValue) => {
		setInputValue({ value: event.target.value, index: indexValue });
	};
	const handleUserResponse = () => {
		const item = statusButtons[activeStep].find((item) => item.data === "text");
		setUserResp({ ...userResp, [item?.value || "-"]: "" });
		setUserResp({ ...userResp, service: "" });
	};

	useEffect(() => {
		if (data[index]?.length > activeStep > 0 && inputValue?.value !== "") {
			const statusCheckedValues = statusButtons[activeStep].map(
				(item, index) => {
					if (item.data === "textarea" || item.data === "input") {
						if (inputValue?.index === index) {
							item.value = inputValue?.value;
						}
					}
					return item;
				}
			);
			const arrayStatusCheckedValue = statusButtons.map((value, index) => {
				if (index === activeStep) {
					value = statusCheckedValues;
				}
				return value;
			});
			UseStatus(arrayStatusCheckedValue);
		}
	}, [inputValue, activeStep, statusButtons]);

	const handleButtonClick = (statusButtons, indexValue) => {
		if (data[index]?.length > activeStep > 0) {
			const statusCheckedValues = statusButtons[activeStep].map(
				(item, index) => {
					if (item.check === "list") {
						if (indexValue === index) {
							if (item.status === "notChecked") item.status = "checked";
							else item.status = "notChecked";
						}
					} else if (item.check === "radio") {
						if (indexValue === index) {
							if (item.status === "notChecked") item.status = "checked";
							else item.status = "notChecked";
						}
						if (indexValue !== index) {
							item.status = "notChecked";
						}
					}
					return item;
				}
			);

			const arrayStatusCheckedValue = statusButtons.map((value, index) => {
				if (index === activeStep) {
					value = statusCheckedValues;
				}
				return value;
			});
			UseStatus(arrayStatusCheckedValue);
		}
	};
	function handelStepValues(step, title) {
		const itemsValues = [];
		const itemsTextValues = [];
		statusButtons[step].forEach((item) => {
			if (item?.status === "checked" && item?.data === "button")
				itemsValues.push(item?.value);
			else if (
				item?.status === "checked" &&
				(item?.data === "textarea" || item?.data === "input")
			)
				itemsTextValues.push(item?.value);
		});
		const properties = {
			propertievalue: {
				stepIndex: {
					title: `step${step}`,
					type: "object",
					name: title,
				},
				properties: {
					type: {
						title: title,
						type: "string",
						enum: itemsValues,
					},
					otherType: {
						title: "Other please specify",
						type: "string",
						widget: itemsTextValues,
					},
				},

				required: itemsValues.length < 1 ? ["type"] : ["otherType"],
			},
		};
		return properties.propertievalue;
	}

	const isMobile = useBreakpointValue({ base: true, md: false, lg: false });

	return (
		<Box>
			<ContainerCard>
				<MainWrapper>
					<Box display={{ base: "none", lg: "block" }}>
						<ImageContainer>
							<Image width="100%" src={calculatorImage} alt={"image"} />
						</ImageContainer>
					</Box>

					<BodyCard>
						{activeStep < data[index]?.length ? (
							<Stepper
								index={activeStep}
								orientation={{
									base: "horizontal",
									md: "vertical",
									lg: "vertical",
								}}
								height={
									isMobile ? "auto" : dimensions && dimensions.borderBox.height
								}
								gap={"2rem"}
								flexDirection={{ base: "row", md: "column", lg: "column" }}
								justifyContent={isMobile ? "space-between" : "space-between"}
								top="10"
							>
								{steps.map((step, index) => (
									<Step
										key={index}
										w={"fit-content"}
										display={"flex"}
										flexDirection={"column"}
										justifyContent={"space-evenly"}
									>
										<StepIndicator
											w={{ base: "6vw", md: "2em" }}
											h={{ base: "6vw", md: "2em" }}
										>
											<StepStatus
												complete={<StepIcon />}
												incomplete={<StepNumber />}
												active={<StepNumber />}
											/>
										</StepIndicator>
										{index !== steps.length - 1 && <StepSeparator />}
										{/*<StepSeparator />*/}
										{/*<StepSeparator display={{ base: "none", md:"block" }} />*/}
									</Step>
								))}
							</Stepper>
						) : null}

						{displayValue === "none" ? (
							<BoxCongrats>
								<Text className={"textCongratsCard"}>
									{congratsText}{" "}
									<Image
										className={"checkbulb"}
										src={checkbulb}
										alt={"icons"}
									/>
								</Text>
							</BoxCongrats>
						) : (
							<Box display={"flex"} width={"80vw"}>
								{isMobile !== undefined ? null : activeStep <
								  data[index]?.length ? (
									<Image
										display={{ base: "none", md: "none" }}
										alt="img"
										// display="none"
										// display={{ base: "none", lg: "none"}}
										style={{
											width: "2rem",
											height: "5rem",
											marginTop: `${activeIcon}vh`,
										}}
										src={icon}
									></Image>
								) : null}
								<Flex
									ref={elementRef}
									alignItems="center"
									direction="column"
									justifyContent="center"
									flexDirection="row"
									p="10px"
									w={{ base: "100%", lg: "70vw" }}
									bg="#F1E8E8"
									display="block"
								>
									<Flex
										justifyContent={"center"}
										alignItems={"center"}
										gap={"30px"}
									>
										<BlockCard>
											{activeStep < data[index]?.length ? (
												statusButtons[activeStep].map((item, index) => {
													if (item?.data === "button") {
														return (
															<Flex
																gap={"5px"}
																_hover={{ cursor: "pointer" }}
																bg={
																	item.status === "checked"
																		? " linear-gradient(255.79deg, #ac2121 14.97%, #e9000e 89.5%)"
																		: "#FFFFFF"
																}
																color={
																	item.status === "checked" ? "white" : "black"
																}
																mt={"0.5rem"}
																fontWeight={"500"}
																fontSize={{ base: "12px", md: "", lg: "16px" }}
																borderRadius={"10px"}
																w={{ base: "", md: "", lg: "40vw" }}
																type="submit"
																data-status={item.status}
																data={item.data}
																onClick={() => {
																	handleButtonClick(statusButtons, index);
																}}
																pl={"15px"}
																key={index}
																alignItems={"center"}
																minH={"45px"}
															>
																{item.status === "notChecked" ? (
																	item.check === "radio" ? (
																		<FaRegCircle className="icon" alt="imag" />
																	) : (
																		item.check === "list" && (
																			<FaRegSquare
																				className="icon"
																				alt="imag"
																			/>
																		)
																	)
																) : item.check === "radio" ? (
																	<FaRegCheckCircle
																		className="iconn"
																		alt="imag"
																	/>
																) : (
																	item.check === "list" && (
																		<FaRegCheckSquare
																			className="iconn"
																			alt="imag"
																		/>
																	)
																)}
																<Box>{item.value}</Box>
															</Flex>
															// <Button
															//
															// 	// w={{ base: "100%", md:""}}
															// 	key={index}
															// 	bg={"#FFFFFF"}
															// 	mt={"0rem"}
															// 	borderRadius={"10px"}
															// 	// overflowX={'scroll'}
															// 	type="submit"
															// 	data-status={item.status}
															// 	data={item.data}
															// 	onClick={() => {
															// 		handleButtonClick(statusButtons, index);
															// 	}}
															// 	leftIcon={
															// 		item.status === "notChecked" ? (
															// 			item.check === "radio" ? (
															// 				<FaRegCircle
															// 					className="icon"
															// 					alt="imag"
															// 				/>
															// 			) : (
															// 				item.check === "list" && (
															// 					<FaRegSquare
															// 						className="icon"
															// 						alt="imag"
															// 					/>
															// 				)
															// 			)
															// 		) : item.check === "radio" ? (
															// 			<FaRegCheckCircle
															// 				className="iconn"
															// 				alt="imag"
															// 			/>
															// 		) : (
															// 			item.check === "list" && (
															// 				<FaRegCheckSquare
															// 					className="iconn"
															// 					alt="imag"
															// 				/>
															// 			)
															// 		)
															// 	}
															// >
															//
															// 	{/*{item.value}*/}
															// 	<p className={"tooltip"}>{item.value} <span className={"tooltiptext"}>{item.value}</span></p>
															//
															// </Button>
														);
													} else if (item?.data === "textarea") {
														return (
															<TextAreaBloc key={index}>
																<Button
																	bg={"black"}
																	mt={"0rem"}
																	borderRadius={"10px"}
																	type="submit"
																	overflowX={"scroll"}
																	data-status={item.status}
																	data={item.data}
																	onClick={() =>
																		handleButtonClick(statusButtons, index)
																	}
																>
																	{item.status === "notChecked" ? (
																		item.check === "radio" ? (
																			<FaRegCircle
																				className="icon"
																				alt="imag"
																			/>
																		) : (
																			item.check === "list" && (
																				<FaRegSquare
																					className="icon"
																					alt="imag"
																				/>
																			)
																		)
																	) : item.check === "radio" ? (
																		<FaRegCheckCircle
																			className="iconn"
																			alt="imag"
																		/>
																	) : (
																		item.check === "list" && (
																			<FaRegCheckSquare
																				className="iconn"
																				alt="imag"
																			/>
																		)
																	)}
																</Button>

																<Textarea
																	key={index}
																	w={"38%"}
																	h={"4rem"}
																	size="xs"
																	ml={"1.2rem"}
																	bg={"#FFFFFF"}
																	mt={"0.5rem"}
																	fontFamily={"Roboto"}
																	fontStyle={"normal"}
																	fontWeight={700}
																	fontSize={"16.5789px"}
																	lineHeight={"140%"}
																	color={"#ABB1B4"}
																	type="textarea"
																	placeholder={item.value}
																	data-status={item.status}
																	data={item.data}
																	value={item?.value}
																	onChange={(e) => handleChange(e, index)}
																></Textarea>
															</TextAreaBloc>
														);
													} else if (item?.data === "input") {
														return (
															<InputBloc key={index}>
																<Button
																	bg={"black"}
																	mt={"0rem"}
																	w={"2px"}
																	overflowX={"scroll"}
																	borderRadius={"10px"}
																	type="submit"
																	data-status={item.status}
																	data={item.data}
																	onClick={() => {
																		handleUserResponse();
																		handleButtonClick(statusButtons, index);
																	}}
																>
																	{item.status === "notChecked" ? (
																		item.check === "radio" ? (
																			<FaRegCircle
																				className="icon"
																				alt="imag"
																			/>
																		) : (
																			item.check === "list" && (
																				<FaRegSquare
																					className="icon"
																					alt="imag"
																				/>
																			)
																		)
																	) : item.check === "radio" ? (
																		<FaRegCheckCircle
																			className="iconn"
																			alt="imag"
																		/>
																	) : (
																		item.check === "list" && (
																			<FaRegCheckSquare
																				className="iconn"
																				alt="imag"
																			/>
																		)
																	)}
																</Button>

																<Input
																	key={index}
																	w={"38%"}
																	h={"2.1rem"}
																	ml={"1.2rem"}
																	bg={"#FFFFFF"}
																	mt={"0.5rem"}
																	fontFamily={"Roboto"}
																	fontStyle={"normal"}
																	fontWeight={700}
																	fontSize={"16.5789px"}
																	lineHeight={"140%"}
																	color={"#ABB1B4"}
																	border={"1px"}
																	borderColor={"black"}
																	placeholder={item.value}
																	type="input"
																	data-status={item.status}
																	data={item.data}
																	value={item?.value}
																	onChange={(e) => handleChange(e, index)}
																></Input>
															</InputBloc>
														);
													} else if (item?.data === "text") {
														return (
															<>
																<Text mt={"1rem"} mb={"0.5rem"} ml={"0.5rem"}>
																	<span style={{ color: "red" }}>*</span>{" "}
																	{item?.value}
																</Text>
																<Text
																	top={{ base: "1rem", lg: "1.7rem" }}
																	bgColor={"red"}
																	w={"4rem"}
																	height={".2rem"}
																	ml={"0.5rem"}
																></Text>
															</>
														);
													}
												})
											) : (
												<>
													<FormCard>
														<form
															className="form-input"
															onSubmit={FormOne.handleSubmit}
														>
															<div className="form-input-group">
																<input
																	type="text"
																	required
																	id="full_name"
																	name="full_name"
																	onChange={FormOne.handleChange}
																	onBlur={FormOne.handleBlur}
																	value={FormOne.values.full_name}
																	placeholder="Full Name *"
																/>
																<div className="form-input-group">
																	<input
																		type="email"
																		required
																		id="email"
																		name="email"
																		onChange={FormOne.handleChange}
																		onBlur={FormOne.handleBlur}
																		value={FormOne.values.email}
																		placeholder="Work Email *"
																	/>
																</div>
															</div>

															<div className="form-input-group">
																<input
																	type="company"
																	required
																	id="company"
																	name="company"
																	onChange={FormOne.handleChange}
																	onBlur={FormOne.handleBlur}
																	value={FormOne.values.company}
																	placeholder="Company*"
																/>
															</div>
															<div className="form-input-group">
																<input
																	type="text"
																	required
																	id="phone_number"
																	name="phone_number"
																	onChange={FormOne.handleChange}
																	onBlur={FormOne.handleBlur}
																	value={FormOne.values.phone_number}
																	placeholder="Work Phone *"
																/>
															</div>
															<div className="form-input-group">
																<textarea
																	maxHeight={"150px"}
																	name="Text"
																	id="Text"
																	cols="30"
																	rows="20"
																	type="text"
																	required
																	onChange={FormOne.handleChange}
																	onBlur={FormOne.handleBlur}
																	value={FormOne.values.Text}
																	placeholder="Please describe what you need"
																></textarea>
															</div>
															<div className="form-input-group">
																<button type="submit">Request Callback</button>
															</div>
														</form>
													</FormCard>
												</>
											)}
										</BlockCard>

										<Box
											h={"80%"}
											bottom={"40px"}
											// w={"1150px"}
											marginRight={"70px"}
											display={{ base: "none", md: "none", lg: displayValue }}
										>
											<Image
												alt="image"
												w="50vw"
												height="24.38vh"
												src={calculatorImage}
											></Image>
											<Text
												fontWeight={"500"}
												fontSize={"14px"}
												textAlign={"center"}
												className="textAnswer"
												textTransform={"uppercase"}
												display={displayValue}
											>
												{FirsText}
											</Text>
										</Box>
									</Flex>
								</Flex>{" "}
							</Box>
						)}
					</BodyCard>
					{/* checkbox + next previous buttons */}
					{displayValue !== "none" ? (
						<Box
							display="flex"
							flexDirection={{ base: "column", md: "row" }}
							padding="2%"
							alignItems={{ base: "start", md: "center" }}
							// justifyContent={{base:"center", md:"center"}}
							mt="3rem"
							mb={{ base: "2rem", lg: "0" }}
							// w="100%"
							// justifyContent="center"
						>
							{/*
        <Checkbox isDisabled defaultChecked>
          Checkbox
        </Checkbox> */}
							<Text display="flex" justifyContent="center">
								{" "}
								<Checkbox
									// isDisabled
									mr={"0.5rem"}
									// mt={"1.5rem"}
								></Checkbox>
								{questionText}
							</Text>

							{activeStep < data[index]?.length ? (
								<Flex mt={{ base: "30px", md: "0" }}>
									<Button
										bg={"white"}
										mt={"0.5rem"}
										maxW={"10rem"}
										w={"40vw"}
										borderRadius={"10px"}
										type="submit"
										color={"black"}
										border={"1.68675px solid #263238;"}
										ml={{ base: "1rem", lg: "9rem" }}
										mr={"0.5rem"}
										onClick={() => removeStep()}
									>
										Previous
									</Button>
									<Button
										bg={
											" linear-gradient(255.79deg, #ac2121 14.97%, #e9000e 89.5%);"
										}
										mt={"0.5rem"}
										borderRadius={"10px"}
										maxW={"10rem"}
										w={"40vw"}
										type="submit"
										color={"white"}
										onClick={() => addStep()}
									>
										Next
									</Button>{" "}
								</Flex>
							) : (
								// <Button
								// 	bg={
								// 		" linear-gradient(255.79deg, #ac2121 14.97%, #e9000e 89.5%);"
								// 	}
								// 	// mt={"0.5rem"}
								// 	borderRadius={"10px"}
								// 	maxW={"10rem"}
								// 	w={"40vw"}
								// 	m={"0.5rem auto"}
								// 	type="submit"
								// 	color={"white"}
								// 	onClick={() => }
								// >
								// 	Submit
								// </Button>
								""
							)}
						</Box>
					) : null}
					<p></p>
				</MainWrapper>
			</ContainerCard>
		</Box>
	);
}

export default IndustryStepper;

const MainWrapper = styled.div`
	width: 100%;
	//margin: 0;
	padding-left: 0;
	display: grid;
	justify-content: center;
	bottom: 3rem;

	@media (max-width: 975px) {
		padding-left: 30px;
	}
	@media (max-width: 766px) {
		padding-left: 0;
	}
`;
const ImageContainer = styled.div`
	margin: 0 auto;
	width: 90%;
	border-top: 3px solid gray;
	@media (min-width: 750px) {
		display: none;
	}
`;
