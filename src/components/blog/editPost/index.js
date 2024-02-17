import React, { useState } from "react";
import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Input,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useToast,
	Select,
} from "@chakra-ui/react";
import Router from "next/router";

import CkeEditor from "./CkEditor";
import { buttons } from "./data";
import { AiFillCaretDown } from "react-icons/ai";
import { useFormik } from "formik";
import axiosInstance from "../../../utils/config";
import { useSelector } from "react-redux";
import FileDropzone from "@/components/contactUsPage/Filedropzone";
import useFetchTags from "../hooks/fetchTags";
import { number } from "yup";

function Editor({ data: blogData }) {
	const [editorData, setEditorData] = useState(blogData?.content || "");
	const { user } = useSelector((state) => state.user);
	const { tags, topics, isLoading, error } = useFetchTags();

	const handleFileDrop = (files, setFieldValue) => {
		setFieldValue("file", files[0]);
	};

	const date = new Date();

	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");

	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
	const toast = useToast();

	const Form = useFormik({
		initialValues: {
			title: blogData?.title || "",
			content: editorData,
			status: "published",
			metadata: "string",
			tags: [],
			author: user?.user_id,
			// images: [4],
			date_published: formattedDate,
			last_updated_date: formattedDate,
			view_count: 2,
			reaction_count: 2,
			comment_count: 2,
			// featured: true,
			most_viewed: true,
			most_rated: true,
			file: null,
			// featured_image:"",

			topic: "",
			// related_posts: [0],
		},

		onSubmit: async (values, { setSubmitting, resetForm }) => {
			try {
				const data = new FormData();
				data.append("title", values.title);
				data.append("content", values.content);
				data.append("author", user?.user_id);

				for (const tag of values.tags) {
					data.append("tags", tag);
				}
				data.append("topic", values.topic);
				data;
				if (values.file) {
					data.append("featured_image", values.file);
				}
				const response = await axiosInstance.put(
					`api/blog/${blogData?.id}`,
					data
				);

				toast({
					title: "Blog post Edited successfully",
					description: "You can view when it is approved",
					status: "success",
					duration: 5000,
					isClosable: true,
					position: "top",
				});
				setTimeout(() => {
					Router.push("/blog");
				}, 5000);

				// resetForm();
			} catch (error) {
				let msg = Object.values(error.response.data).join("\n");
				console.log(msg);
				if (msg == "No file was submitted.") {
					msg = "Please upload a featured image";
				}

				toast({
					title: "An error occurred",
					description: msg,
					status: "error",
					duration: 5000,
					isClosable: true,
					position: "top",
				});
			}
			setSubmitting(false);
		},
	});
	const handleEditorChange = (event) => {
		const data = event.editor.getData();
		setEditorData(data);

		Form.setFieldValue("content", data);
	};
	const handleTagChange = (event) => {
		const selectedTag = event.target.value;
		const { tags } = Form.values;

		// Check if the selectedTag is already in the tags array
		if (tags.includes(selectedTag)) {
			// If the tag is already selected, remove it from the tags array
			Form.setFieldValue(
				"tags",
				tags.filter((tag) => tag !== selectedTag)
			);
		} else {
			// If the tag is not selected, add it to the tags array
			Form.setFieldValue("tags", [...tags, selectedTag]);
		}
	};
	return (
		<Box minHeight={"100vh"} mt={"10rem"}>
			<Container maxW={"8xl"}>
				<Box w={{ base: "90%", md: "80%" }} margin={"2rem auto"}>
					<Heading size={"lg"}>Edit Your Blog Post</Heading>
					<Box bg={"#F6F6F6"} p={{ base: "1rem", md: "2rem" }} mt={"1.5rem"}>
						<form onSubmit={Form.handleSubmit}>
							<Box>
								<Input
									placeholder={"Title"}
									bg={"#FFF"}
									type="text"
									required
									id="title"
									name="title"
									onChange={Form.handleChange}
									onBlur={Form.handleBlur}
									value={Form.values.title}
								/>
								<Box my={"1.5rem"}>
									<Text fontSize={"md"} mb={"3"}>
										Featured Image
									</Text>
									<FileDropzone
										onDrop={(files) =>
											handleFileDrop(files, Form.setFieldValue)
										}
										file={Form.values.file}
									/>
								</Box>

								<Box mt={"1.5rem"}>
									<CkeEditor
										handleEditorChange={handleEditorChange}
										editorData={editorData}
									/>
								</Box>

								<Grid
									templateColumns={{ base: "100%", lg: "2fr 3fr" }}
									gap={"1rem"}
								>
									<Box margin={"auto 0"}>
										<Flex
											mt={"1rem"}
											gap={".8rem"}
											align={{ lg: "center" }}
											direction={{ base: "column", lg: "row" }}
										>
											<label>Tags</label>
											<Select
												iconSize="0rem"
												// placeholder={"Select tags"}
												bg={"#FFF"}
												id="tags"
												name="tags"
												minHeight={"30vh"}
												multiple
												value={Form.values.tags}
												onChange={handleTagChange}
												onBlur={Form.handleBlur}
											>
												{tags.map((option) => (
													<option key={option?.id} value={option?.id}>
														{option?.name}
													</option>
												))}
											</Select>
										</Flex>
									</Box>
									<Flex
										mt={"2rem"}
										gap={"1rem"}
										direction={{ base: "column", lg: "row" }}
									>
										<Grid
											templateColumns={{
												base: "1fr 1fr",
												md: "repeat(3, 1fr)",
											}}
											gap={".7rem"}
										>
											{Form.values.tags.map((item, index) => {
												const name = tags.find(
													(tag) => tag.id === Number(item)
												)?.name;

												return (
													<Button key={index} color={"#4B4B4B"}>
														{name}
													</Button>
												);
											})}
										</Grid>
										<Box>
											<Button
												bg={"linear-gradient(221deg, #AC2121 0%, #E9000E 100%)"}
												color={"#FFF"}
												_expanded={{
													bg: "linear-gradient(221deg, #AC2121 0%, #E9000E 100%)",
												}}
												mt={{ base: "1rem", lg: "0" }}
												type="submit"
												ml={{ base: "0", lg: "1rem" }}
											>
												Publish
											</Button>
											{/* <Menu>
												<MenuButton
													as={Button}
													rightIcon={<AiFillCaretDown color={"#FFF"} />}
													bg={
														"linear-gradient(221deg, #AC2121 0%, #E9000E 100%)"
													}
													color={"#FFF"}
													_expanded={{
														bg: "linear-gradient(221deg, #AC2121 0%, #E9000E 100%)",
													}}
												>
													Publish
												</MenuButton>
												<MenuList>
													<MenuItem
														_hover={{
															color: "#E9000E",
															bg: "rgba(115, 103, 240, 0.08)",
														}}
													>
														Schedule publish
													</MenuItem>
													<MenuItem
														_hover={{
															color: "#E9000E",
															bg: "rgba(115, 103, 240, 0.08)",
														}}
													>
														Publish now
													</MenuItem>
												</MenuList>
											</Menu> */}
										</Box>
									</Flex>
								</Grid>
								<Flex
									mt={"3rem"}
									gap={".8rem"}
									align={{ md: "center" }}
									w={{ base: "100%", lg: "40%" }}
									direction={{ base: "column", md: "row" }}
								>
									<label>Topic</label>
									<Select
										placeholder={"Select a topic"}
										bg={"#FFF"}
										id="topic"
										name="topic"
										onChange={Form.handleChange}
										onBlur={Form.handleBlur}
									>
										{topics.map((option) => (
											<option key={option?.id} value={option?.id}>
												{option?.title}
											</option>
										))}
									</Select>
								</Flex>
							</Box>
						</form>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

export default Editor;
