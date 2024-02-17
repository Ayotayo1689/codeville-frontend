import React, { useState } from "react";
import {
	Box,
	Flex,
	Text,
	Textarea,
	Button,
	Input,
	useToast,
} from "@chakra-ui/react";
import Comment from "./Comment";
import axiosInstance from "@/utils/config";
import Router from "next/router";
// The main component to render the comment section
const CommentSection = ({ commentsData = [], blogId }) => {
	const toast = useToast();
	let allComments = typeof commentsData === "string" ? [] : commentsData;
	const [comments, setComments] = useState(allComments); // state to store the comments of the blog post

	const [commentContent, setCommentContent] = useState({
		fullName: "",
		email: "",
		comment: "",
	}); // state to store input value of new comment

	const [loading, setLoading] = useState(false); // state to indicate whether comment is being posted or not
	// A mock function to post a comment or reply to an API
	const postComment = (comment) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(comment);
			}, 500);
		});
	};
	// A mock function to fetch comments from an API
	const fetchComments = () => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve([
					{
						id: 1,
						author: "Alice",
						content: "This is a great blog post! dkslsd  slkd s dlk s",
						replies: [],
						date: "14 oct 2020",
					},
					{
						id: 4,
						author: "David",
						content: "This is a terrible blog post! ssk dslk slkd jslk s ",
						replies: [],
						date: "14 oct 2020",
					},
				]);
			}, 1000);
		});
	};

	// useEffect(() => {
	// 	fetchComments().then((data) => setComments(data));
	// }, []);

	const handleCommentChange = (e) => {
		setCommentContent({ ...commentContent, [e.target.name]: e.target.value });
	};

	const handleCommentSubmit = async () => {
		if (
			commentContent?.comment.trim() &&
			commentContent?.fullName.trim() &&
			commentContent?.email.trim()
		) {
			const newComment = {
				comment: commentContent?.comment.trim(),

				approved: true,
				blog: blogId,
				name: commentContent?.fullName.trim(),
				email: commentContent?.email.trim(),
			};

			try {
				setLoading(true);
				console.log("hi");

				const postedComment = await axiosInstance.post(
					`api/blog-comment/`,
					newComment
				);

				setLoading(false);
				setCommentContent("");
				Router.reload();
			} catch (error) {
				setLoading(false);
				console.log(error);
			}
		} else {
			toast({
				title: "Error",
				description: "Please enter a valid comment",
				status: "error",
				duration: 3000,
				isClosable: true,
				position: "top",
			});
		}
	};
	return (
		<Box mx="auto" my="4">
			{/* <Text>
				Comments:{" "}
				{comments?.length < 10 ? `0${comments?.length}` : comments?.length}
			</Text> */}

			<Flex direction={"column"} gap={8} my={"8"}>
				{comments?.map((comment) => (
					<Comment key={comment?.id} comment={comment} />
				))}
			</Flex>
			<Text fontSize={"lg"} fontWeight={"semibold"} textAlign={"center"}>
				Write a comment
			</Text>

			<Flex
				mt={4}
				direction={"column"}
				gap={8}
				width={{ base: "100%", lg: "50%" }}
				mx={"auto"}
			>
				<Flex gap={6}>
					<Input
						name="fullName"
						value={commentContent.fullName}
						onChange={handleCommentChange}
						placeholder="Full name"
					/>
					<Input
						name="email"
						value={commentContent.email}
						onChange={handleCommentChange}
						placeholder="Email Address"
					/>
				</Flex>
				<Textarea
					name="comment"
					value={commentContent.comment}
					onChange={handleCommentChange}
					placeholder="Write your comment here..."
					height={"20vh"}
				/>
				<Button
					ml={2}
					isLoading={loading}
					onClick={handleCommentSubmit}
					w={{ base: "100%", lg: "30%" }}
					bg={"#DC0032"}
					color={"white"}
					mx={"auto"}
				>
					Post a Comment
				</Button>
			</Flex>
		</Box>
	);
};

export default CommentSection;
