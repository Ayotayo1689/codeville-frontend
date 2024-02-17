import { Field, Form, Formik } from "formik";
import axiosInstance from "../../../utils/config";
import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import React from "react";
import * as Yup from "yup";

const ForgotPasswordSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Required"),
});

function ForgotPasswordForm() {
	return (
		<>
			<Formik
				initialValues={{
					email: "",
				}}
				validationSchema={ForgotPasswordSchema}
				onSubmit={async (values, { setSubmitting, resetForm }) => {
					try {
						const response = await axiosInstance.post(
							"/auth/forgot-password/",
							values
						);
						toast({
							title: "Thank you!",
							description: "We will be in touch with you shortly",
							status: "success",
							duration: 5000,
							isClosable: true,
						});
						setSubmitting(false);
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
					}

					resetForm();
				}}
			>
				{({
					errors,
					touched,
					setFieldTouched,
					setFieldValue,
					values,
					isSubmitting,
				}) => (
					<Form>
						<Field name="email">
							{({ field }) => (
								<FormControl mb={"1rem"} mt={"1rem"}>
									<Text color={"#000"} fontSize={"14px"} fontWeight={"500"} mb={".7rem"}>
										Email address
									</Text>
									<Input
										{...field}
										id="email"
										placeholder="john.doe@gmail.com"
										onChange={(e) => setFieldValue("email", e.target.value)}
										onBlur={(e) => setFieldTouched("email", true)}
									/>

									{errors.email && touched.email ? (
										<Box color={"red"}>{errors.email}</Box>
									) : null}
								</FormControl>
							)}
						</Field>
					</Form>
				)}
			</Formik>

			<Button
				type={"submit"}
				mt={"1rem"}
				width={"100%"}
				height={"2.375rem"}
				bg={" linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"}
				color={"white"}
			>
				Continue
			</Button>
		</>
	);
}

export default ForgotPasswordForm;
