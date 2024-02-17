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
import FileDropzone from "./Filedropzone";
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

function ContactUsForm({ service, placeholder, submit }) {
	const toast = useToast({
		position: "bottom",
	});

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
				file: null,
				service: service || "",
			}}
			validationSchema={ContactUsSchema}
			onSubmit={async (values, { setSubmitting, resetForm }) => {
				const data = new FormData();
				data.append("text", values.Text);
				data.append("full_name", values.full_name);
				data.append("company", values.company);
				data.append("email", values.email);
				data.append("phone_number", values.phone_number);
				if (values.file) {
					data.append("file", values.file);
				}
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

					resetForm();
					setSubmitting(false);
				} catch (error) {
					toast({
						title: "An error occurred",
						description:
							"There was an error submitting your response. Please try again.",
						status: "error",
						duration: 5000,
						isClosable: true,
					});
					console.error(error);
					setSubmitting(false);
				}
			}}
		>
			{({ errors, touched, setFieldValue, values, isSubmitting }) => (
				<Box mt={"1rem"}>
					<Form>
						<Field name="Text">
							{({ field }) => (
								<FormControl>
									<Textarea
										fontSize={{ base: "0.8rem", lg: "18px" }}
										borderRadius={"0"}
										resize={"none"}
										{...field}
										id="Text"
										placeholder={placeholder ? placeholder : "How may I help you?"}
									/>
									{errors.Text && touched.Text ? (
										<Box color={"red"}>{errors.Text}</Box>
									) : null}
								</FormControl>
							)}
						</Field>

						<FileDropzone
							onDrop={(files) => handleFileDrop(files, setFieldValue)}
							file={values.file}
						/>

						<Flex mt={"1.5rem"} gap={"1rem"}>
							<Field name="full_name">
								{({ field }) => (
									<FormControl>
										<Input
											{...field}
											id="full_name"
											placeholder="Full Name"
											fontSize={{ base: "0.8rem", lg: "18px" }}
										/>
										{errors.full_name && touched.full_name ? (
											<Box color={"red"}>{errors.full_name}</Box>
										) : null}
									</FormControl>
								)}
							</Field>
							<Field name="company">
								{({ field }) => (
									<FormControl>
										<Input
											{...field}
											id="company"
											placeholder="Company"
											fontSize={{ base: "0.8rem", lg: "18px" }}
										/>
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
										<Input
											{...field}
											id="email"
											placeholder="Work Email"
											fontSize={{ base: "0.8rem", lg: "18px" }}
										/>
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
											fontSize={{ base: "0.8rem", lg: "18px" }}
										/>
										{errors.phone_number && touched.phone_number ? (
											<Box color={"red"}>{errors.phone_number}</Box>
										) : null}
									</FormControl>
								)}
							</Field>
						</Flex>
						<Flex justify={"center"}>
							<Button
								fontSize={{ base: "0.8rem", lg: "18px" }}
								bg={"#CE0000"}
								color={"#FFFFFF"}
								mt={"1.5rem"}
								type="submit"
							>
								{submit ? submit : "SEND MESSAGE"}
							</Button>
						</Flex>
					</Form>
				</Box>
			)}
		</Formik>
	);
}

export default ContactUsForm;
