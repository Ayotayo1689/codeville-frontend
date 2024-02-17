import {
	Box,
	Button,
	Flex,
	FormControl,
	Input,
	Link,
	Text,
	useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import axiosInstance from "@/utils/config";

const ContactUsSchema = Yup.object().shape({
	full_name: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	company: Yup.string().required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	phone_number: Yup.string().required("Required"),
	password: Yup.string()
		.min(6, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	verify_password: Yup.string().required("Password required"),
});

function ReferralForm() {
	const toast = useToast({
		position: "top",
	});

	return (
		<Formik
			initialValues={{
				password: "",
				full_name: "",
				company: "",
				email: "",
				phone_number: "",
			}}
			validationSchema={ContactUsSchema}
			onSubmit={async (values, { setSubmitting, resetForm }) => {
				try {
					const response = await axiosInstance.post("api/contact-us/", values);
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
			{({ errors, touched, setFieldValue, values, isSubmitting }) => (
				<Box mt={"1rem"} w={"100%"}>
					<Form>
						<Flex mt={"1.5rem"} gap={"1rem"}>
							<Field name="full_name">
								{({ field }) => (
									<FormControl>
										<Input {...field} id="full_name" placeholder="Full Name" />
										{errors.full_name && touched.full_name ? (
											<Box color={"red"}>{errors.full_name}</Box>
										) : null}
									</FormControl>
								)}
							</Field>
							<Field name="company">
								{({ field }) => (
									<FormControl>
										<Input {...field} id="company" placeholder="Company" />
										{errors.company && touched.company ? (
											<Box color={"red"}>{errors.company}</Box>
										) : null}
									</FormControl>
								)}
							</Field>
						</Flex>
						<Flex mt={"1.5rem"} gap={"1rem"}>
							<Field name="email">
								{({ field }) => (
									<FormControl>
										<Input {...field} id="email" placeholder="Work Email" />
										{errors.email && touched.email ? (
											<Box color={"red"}>{errors.email}</Box>
										) : null}
									</FormControl>
								)}
							</Field>
							<Field name="phone_number">
								{({ field }) => (
									<FormControl>
										<Input
											{...field}
											id="phone_number"
											placeholder="Work Phone"
										/>
										{errors.phone_number && touched.phone_number ? (
											<Box color={"red"}>{errors.phone_number}</Box>
										) : null}
									</FormControl>
								)}
							</Field>
						</Flex>
						<Flex mt={"1.5rem"} gap={"1rem"}>
							<Field name="password">
								{({ field }) => (
									<FormControl>
										<Input {...field} id="password" placeholder="Password" />
										{errors.password && touched.password ? (
											<Box color={"red"}>{errors.password}</Box>
										) : null}
									</FormControl>
								)}
							</Field>
							<Field name="verify_password">
								{({ field }) => (
									<FormControl>
										<Input
											{...field}
											id="verify_password"
											placeholder="Verify Password"
										/>
										{errors.verify_password && touched.verify_password ? (
											<Box color={"red"}>{errors.verify_password}</Box>
										) : null}
									</FormControl>
								)}
							</Field>
						</Flex>
						<Flex mt={"1.5rem"} gap={"1rem"} align={"start"}>
							<Box>
								<input type="checkbox" />
							</Box>
							<Text fontSize={"14px"} fontWeight={"400"} color={"#646464"}>
								I agree to the <Link color={"#E9000E"}>Privacy Policy</Link> and{" "}
								<Link color={"#E9000E"}>Terms and Conditions</Link>, and entrust
								Tanta Innovative to process my personal data with the goal of
								further contact and fee payment. I confirm the accuracy of
								submitted Information
							</Text>
						</Flex>
						<Flex justify={"center"}>
							<Button
								bg={"#CE0000"}
								color={"#FFFFFF"}
								mt={"1.5rem"}
								type="submit"
								w={"193px"}
							>
								Register
							</Button>
						</Flex>
					</Form>
				</Box>
			)}
		</Formik>
	);
}

export default ReferralForm;
