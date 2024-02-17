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
// import axiosInstance from "../utils/axios";

const ContactUsSchema = Yup.object().shape({
	full_name: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	Text: Yup.string().required("Required"),
});

function ReplyForm() {
	const toast = useToast({
		position: "top",
	});

	return (
		<Formik
			initialValues={{
				Text: "",
				full_name: "",

				email: "",
			}}
			validationSchema={ContactUsSchema}
			onSubmit={async (values, { setSubmitting, resetForm }) => {
				try {
					// Send POST request to /contact-us/ endpoint with form values
					const response = await axiosInstance.post("/contact-us/", values);

					// Log response data

					// Display success toast notification
					toast({
						title: "Thank you!",
						description: "We will be in touch with you shortly",
						status: "success",
						duration: 5000,
						isClosable: true,
					});

					// Reset form submission state
					setSubmitting(false);
				} catch (error) {
					// Log error if request fails
					console.error(error);

					// Display error toast notification
					toast({
						title: "An error occurred",
						description:
							"There was an error submitting your response. Please try again.",
						status: "error",
						duration: 5000,
						isClosable: true,
					});

					// Reset form submission state
					setSubmitting(false);
				}

				// Log form values

				// Reset the form
				resetForm();
			}}
		>
			{({ errors, touched, setFieldValue, values, isSubmitting }) => (
				<Box mt={"1rem"}>
					<Form>
						<Flex my={"1.5rem"} gap={"1rem"}>
							<Field name="full_name">
								{({ field }) => (
									<FormControl>
										<Input {...field} id="full_name" placeholder="Name" />
										{errors.full_name && touched.full_name ? (
											<Box color={"red"}>{errors.full_name}</Box>
										) : null}
									</FormControl>
								)}
							</Field>
							<Field name="email">
								{({ field }) => (
									<FormControl>
										<Input {...field} id="email" placeholder="Email" />
										{errors.email && touched.email ? (
											<Box color={"red"}>{errors.email}</Box>
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
										placeholder="Comment"
										rows={6}
									/>
									{errors.Text && touched.Text ? (
										<Box color={"red"}>{errors.Text}</Box>
									) : null}
								</FormControl>
							)}
						</Field>
						<Flex>
							<Button
								bg={"#CE0000"}
								color={"#FFFFFF"}
								mt={"1.5rem"}
								type="submit"
							>
								Post Comment
							</Button>
						</Flex>
					</Form>
				</Box>
			)}
		</Formik>
	);
}

export default ReplyForm;
