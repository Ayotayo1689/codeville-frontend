import React, {useState} from "react";
import { Field, Form, Formik } from "formik";
import axiosInstance from "../../../utils/config";
import {
	Box,
	Flex,
	FormControl,
	Input,
	Text,
	Button,
	useToast, Spinner,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {loginUser, registerUser} from "../../../features/user/userSlice";
import {AiOutlineArrowLeft} from "react-icons/ai";
const SignUpFormSchema = Yup.object().shape({
	username: Yup.string()
		.min(1, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	full_name: Yup.string()
		.min(1, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string()
		.required("Required")
		.min(6, "Password must be at least 6 characters long")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
			"Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
		),
});
function SignUpForm() {
	const toast = useToast({
		position: "top",
	});
	const dispatch = useDispatch();

	const [showPassword, setShowPassword] = useState(false);
	const [buttonClicked, setButtonClicked] = useState(false);


	const handleButtonClick = (fullName, email) => {
		if (fullName.trim() !== '' && email.trim() !== '') {
			setShowPassword(true);
			setButtonClicked(true);
		}
		else{
			toast({
				title: "Invalid name or email",
				description:
					"You must input a valid name and email. Please try again.",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}
	};
	return (
		// <Formik
		// 	initialValues={{
		// 		username: "",
		// 		email: "",
		// 		password: "",
		// 		full_name: "",
		// 	}}
		// 	validationSchema={SignUpFormSchema}
		// 	onSubmit={async (values, { setSubmitting, resetForm }) => {
		// 		try {
		// 			// const response = await axiosInstance.post("/auth/register/", values);
		// 			await dispatch(registerUser(values));
		// 			// toast({
		// 			// 	title: "Thank you!",
		// 			// 	description: "We will be in touch with you shortly",
		// 			// 	status: "success",
		//
		// 			// 	duration: 5000,
		// 			// 	isClosable: true,
		// 			// });
		// 			setSubmitting(false);
		// 			// resetForm();
		// 		} catch (error) {
		// 			console.error(error);
		// 			setSubmitting(false);
		//
		// 			toast({
		// 				title: "An error occurred",
		// 				description:
		// 					"There was an error submitting your response. Please try again.",
		// 				status: "error",
		// 				duration: 5000,
		// 				isClosable: true,
		// 			});
		// 		}
		// 	}}
		// >
		// 	{({ errors, touched, setFieldValue, values, isSubmitting }) => (
		// 		<Form>
		// 			<Field name="email">
		// 				{({ field }) => (
		// 					<FormControl mb={"1rem"} mt={"1rem"}>
		// 						<Text color={"#000"} fontSize={"14px"} fontWeight={"500"} mb={".7rem"}>
		// 							{" "}
		// 							Email Address
		// 						</Text>
		// 						<Input {...field} id="email" placeholder="john.doe@gmail.com" />
		// 						{errors.email && touched.email ? (
		// 							<Box color={"red"}>{errors.email}</Box>
		// 						) : null}
		// 					</FormControl>
		// 				)}
		// 			</Field>
		//
		// 			<Field name="password">
		// 				{({ field }) => (
		// 					<FormControl mb={"1rem"} mt={"1rem"}>
		// 						<Flex justifyContent={"space-between"}>
		// 							<Text color={"#000"} fontSize={"14px"} fontWeight={"500"} mb={".7rem"}>
		// 								Create user ID
		// 							</Text>
		// 						</Flex>
		// 						<Input {...field} id="password" placeholder="..........." />
		// 						{errors.password && touched.password ? (
		// 							<Box color={"red"}>{errors.password}</Box>
		// 						) : null}
		// 					</FormControl>
		// 				)}
		// 			</Field>
		// 			<Button
		// 				mt={"1rem"}
		// 				width={"100%"}
		// 				height={"2.375rem"}
		// 				bg={" linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"}
		// 				color={"white"}
		// 				type="submit"
		// 			>
		// 				Continue
		// 			</Button>
		// 		</Form>
		// 	)}
		// </Formik>

		<Formik
			initialValues={{
				username: "",
				email: "",
				password: "",
				full_name: "",
			}}
			validationSchema={SignUpFormSchema}
			onSubmit={async (values, { setSubmitting, resetForm }) => {
				try {
					// console.log(values)
					// const response = await axiosInstance.post("/auth/login/", values);
					// toast({
					// 	title: "Successful!",
					// 	description: "you may now proceed",
					// 	status: "success",
					// 	duration: 5000,
					// 	isClosable: true,
					// });
					await dispatch(registerUser(values));
					setSubmitting(false);


					//
				} catch (error) {
					console.error(error);
					setSubmitting(false);

					toast({
						title: "An error occurred",
						description:
							"There was an error submitting your response. Please try again.",
						status: "error",
						duration: 5000,
						isClosable: true,
					});
					resetForm();
				}


			}}
		>
			{({ errors, touched, setFieldValue, values, isSubmitting }) => (
				<Form>
					{!showPassword && <>
						<Field name="email">
							{({ field }) => (
								<FormControl mb={"1rem"} mt={"1rem"}>
									<Text color={"#000"} fontSize={"14px"} fontWeight={"500"} mb={".7rem"}>
										{" "}
										Email Address
									</Text>
									<Input {...field} id="email" placeholder="john.doe@gmail.com" />
									{errors.email && touched.email ? (
										<Box color={"red"}>{errors.email}</Box>
									) : null}
								</FormControl>
							)}
						</Field>

						<Field name="full_name">
							{({ field }) => (
								<FormControl mb={"1rem"} mt={"1rem"}>
									<Flex justifyContent={"space-between"}>
										<Text color={"#000"} fontSize={"14px"} fontWeight={"500"} mb={".7rem"}>
											Full name
										</Text>
									</Flex>
									<Input {...field} id="username" placeholder="John Doe"/>
									{errors.full_name && touched.full_name ? (
										<Box color={"red"}>{errors.full_name}</Box>
									) : null}
								</FormControl>
							)}
						</Field>

						<Button
							mt={"1rem"}
							width={"100%"}
							height={"2.375rem"}
							bg={" linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"}
							color={"white"}
							onClick={()=>handleButtonClick(values?.full_name, values?.email)}

						>
							Continue
						</Button>
					</>}

					{showPassword &&
						<>
							<Flex justify={"center"} align={"center"} gap={".5rem"} mr={"1rem"}>
								<AiOutlineArrowLeft fontSize={"1.2rem"} cursor={"pointer"} onClick={() => setShowPassword(false)}/>
								<Text color={"#000"} fontSize={"1rem"} fontWeight={"500"} m={".6rem 0"}>
									{values?.full_name}
								</Text>
							</Flex>

							<Field name="username">
								{({ field }) => (
									<FormControl mb={"1rem"} mt={"1rem"}>
										<Flex justifyContent={"space-between"}>
											<Text color={"#000"} fontSize={"14px"} fontWeight={"500"} mb={".7rem"}>
												Create User ID
											</Text>
										</Flex>
										<Input {...field} id="username" />
										{errors.username && touched.username ? (
											<Box color={"red"}>{errors.username}</Box>
										) : null}
									</FormControl>
								)}
							</Field>

							<Field name="password">
								{({ field }) => (
									<FormControl mb={"1rem"} mt={"1rem"}>
										<Flex justifyContent={"space-between"}>
											<Text color={"#000"} fontSize={"14px"} fontWeight={"500"} mb={".7rem"}>
												Enter password
											</Text>
										</Flex>
										<Input {...field} id="password" type="password" placeholder="..........." />
										{errors.password && touched.password ? (
											<Box color={"red"}>{errors.password}</Box>
										) : null}
									</FormControl>
								)}
							</Field>
							<Button
								mt={"1rem"}
								width={"100%"}
								height={"2.375rem"}
								bg={" linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"}
								color={"white"}
								type="submit"
							>
								{isSubmitting ? <Spinner color={"#E9000E"}/> : "Continue"}
							</Button>
						</>
					}
				</Form>
			)}
		</Formik>
	);
}
export default SignUpForm;
