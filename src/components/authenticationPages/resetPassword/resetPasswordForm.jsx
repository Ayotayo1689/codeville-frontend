import React from "react";
import { Field, Form, Formik } from "formik";
import axiosInstance from "../../../utils/config";
import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import * as Yup from "yup";

const ResetPasswordFormSchema = Yup.object().shape({
	new_password: Yup.string()
		.required("Required")
		.min(6, "Password must be at least 6 characters long")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
			"Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
		),
	confirm_password: Yup.string().oneOf([
		Yup.ref("new_password"),
		null,
		"password must match",
	]),
});

function ResetPasswordForm() {
	return (
		<>
			<Formik
				initialValues={{
					new_password: "",
					confirm_password: "",
				}}
				validationSchema={ResetPasswordFormSchema}
				onSubmit={async (values, { setSubmitting, resetForm }) => {
					try {
						const response = await axiosInstance.post(
							"/auth/change-password/",
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
						<Field name="new_password">
							{({ field }) => (
								<FormControl mb={"1rem"} mt={"1rem"}>
									<Text color={"#000"} fontSize={"14px"} fontWeight={"500"} mb={".7rem"}>
										{" "}
										New Password
									</Text>
									<Input
										{...field}
										id="new_password"
										placeholder="**********"
										onChange={(e) =>
											setFieldValue("new_password", e.target.value)
										}
										type="password"
										onBlur={(e) => setFieldTouched("new_password", true)}
									/>
									{errors.new_password && touched.new_password ? (
										<Box color={"red"}>{errors.new_password}</Box>
									) : null}
								</FormControl>
							)}
						</Field>

						<Field name="confirm_password">
							{({ field }) => (
								<FormControl mb={"1rem"} mt={"1rem"}>
									<Text color={"#000"} fontSize={"14px"} fontWeight={"500"} mb={".7rem"}>
										Confirm Password
									</Text>
									<Input
										{...field}
										id="confirm_password"
										placeholder="**********"
										onChange={(e) =>
											setFieldValue("confirm_password", e.target.value)
										}
										type="password"
										onBlur={(e) => setFieldTouched("confirm_password", true)}
									/>
									{errors.confirm_password && touched.confirm_password ? (
										<Box color={"red"}>{errors.confirm_password}</Box>
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
				Set New Password
			</Button>
		</>
	);
}

export default ResetPasswordForm;
