import React, {useState} from "react";
import { Field, Form, Formik } from "formik";
import {
	Box,
	Flex,
	FormControl,
	Input,
	Text,
	useToast,
	Button, Spinner,
} from "@chakra-ui/react";
import axiosInstance from "../../../utils/config";
import * as Yup from "yup";
import Link from "next/link";
import appRoutes from "../../../utils/appRoutes";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../features/user/userSlice";
import PasswordForm from "@/components/authenticationPages/login/PasswordForm";
import SignUpForm from "@/components/authenticationPages/register/signUpForm";
import {AiOutlineArrowLeft} from "react-icons/ai";
const LoginFormSchema = Yup.object().shape({
	username: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	password: Yup.string()
		.required("Required"),
});

function LoginForm() {
	const toast = useToast({
		position: "top",
	});
	const dispatch = useDispatch();


	const [showPassword, setShowPassword] = useState(false);
	const [buttonClicked, setButtonClicked] = useState(false);


	const handleButtonClick = (username) => {
		if (username.trim() !== '') {
			setShowPassword(true);
			setButtonClicked(true);
		}
		else{
			toast({
				title: "Invalid username",
				description:
					"You must input a valid username. Please try again.",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}
	};
	return (
		<Formik
			initialValues={{
				username: "",
				password: "",
			}}
			validationSchema={LoginFormSchema}
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
					await dispatch(loginUser(values));
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
				// handleShowPasswordField();

			}}
		>
			{({ errors, touched, setFieldValue, values, isSubmitting }) => (
				<Form>


					{!showPassword && <>
						<Field name="username">
							{({ field }) => (
								<FormControl mb={"1rem"} mt={"1rem"}>
									<Flex justifyContent={"space-between"}>
										<Text color={"#000"} fontSize={"14px"} fontWeight={"500"} mb={".7rem"}>
											User ID
										</Text>
									</Flex>
									<Input {...field} id="username" />
									{errors.username && touched.username ? (
										<Box color={"red"}>{errors.username}</Box>
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
							onClick={()=>handleButtonClick(values?.username)}

						>
							Continue
						</Button>
					</>}

					{showPassword &&
						<>
							<Flex justify={"center"} align={"center"} gap={".5rem"} mr={"1rem"}>
								<AiOutlineArrowLeft fontSize={"1.2rem"} cursor={"pointer"} onClick={() => setShowPassword(false)}/>
								<Text color={"#000"} fontSize={"1rem"} fontWeight={"500"} m={".6rem 0"}>
									{values?.username}
								</Text>
							</Flex>

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
export default LoginForm;
