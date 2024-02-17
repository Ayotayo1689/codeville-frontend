import {
	Box,
	Button,
	Flex,
	FormControl,
	Input,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import axiosInstance from "../../utils/config";

const ContactUsSchema = Yup.object().shape({
	full_name: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	company: Yup.string().required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	phone_number: Yup.string().required("Required"),
	Text: Yup.string().required("Required"),
});

function ContactUsForm() {
	const toast = useToast();
	const handleFileDrop = (files, setFieldValue) => {
		setFieldValue("file", files[0]);
	};
	return (
		<Formik
			initialValues={{
				Text: "",
				full_name: "",
				company: "",
				email: "",
				phone_number: "",
				service: "application-service",
			}}
			validationSchema={ContactUsSchema}
			onSubmit={async (values, { setSubmitting, resetForm }) => {
				const data = new FormData();
				data.append("text", values.Text);
				data.append("full_name", values.full_name);
				data.append("company", values.company);
				data.append("email", values.email);
				data.append("phone_number", values.phone_number);
				data.append("service", values.service);
				try {
					const response = await axiosInstance.post("api/contact-us/", data);

					toast({
						title: "Thank you!",
						description: "We will be in touch with you shortly",
						status: "success",
						duration: 5000,
						isClosable: true,
					});

					setSubmitting(false);
					resetForm();
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
			}}
		>
			{({ errors, touched, setFieldValue, values, isSubmitting }) => (
				<Box mt={"1rem"}>
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
						<Flex mt={"1.5rem"} gap={"1rem"} mb={"3rem"}>
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
						<Field name="Text">
							{({ field }) => (
								<FormControl>
									<Textarea
										borderRadius={"0"}
										resize={"none"}
										{...field}
										id="Text"
										placeholder="How can we help you?"
										rows={"8"}
									/>
									{errors.Text && touched.Text ? (
										<Box color={"red"}>{errors.Text}</Box>
									) : null}
								</FormControl>
							)}
						</Field>
						<Flex justify={"center"}>
							<Button
								bg={"#CE0000"}
								color={"#FFFFFF"}
								mt={"1.5rem"}
								type="submit"
							>
								Submit
							</Button>
						</Flex>
					</Form>
				</Box>
			)}
		</Formik>
	);
}

export default ContactUsForm;
