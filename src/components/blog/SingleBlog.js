import {
	Avatar,
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Card,
	CardBody,
	Container,
	Flex,
	Grid,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import moment from "moment/moment";
import Link from "next/link";
import styled from "styled-components";
import { FiPlusCircle } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import {
	AiOutlineHeart,
	AiOutlineShareAlt,
	AiOutlineMail,
	AiFillEdit,
} from "react-icons/ai";
import CommentSection from "./CommentSection";
import RelatedPosts from "./RelatedPosts";
import { FiThumbsDown } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import { useSelector } from "react-redux";
const Blogs = ({ data, allBlogs }) => {
	const { user } = useSelector((state) => state.user);

	return (
		<Box>
			<Container
				maxW={"7xl"}
				my={{ base: "6rem", lg: "8rem" }}
				px={{ base: "0.5rem", lg: "4rem" }}
			>
				<Header>
					{/* <Breadcrumb
					spacing="8px"
					separator={
						<MdOutlineKeyboardArrowRight color="gray" fontSize={"1.1rem"} />
					}
					bg="linear-gradient(90.82deg, rgba(0, 0, 0, 0.38) -60.45%, rgba(255, 255, 255, 0) 146.74%);"
					py={".5rem"}
					width={{ base: "30%", lg: "20%" }}
				>
					<BreadcrumbItem>
						<BreadcrumbLink as={Link} href={"/blog"} color={"white"}>
							Home
						</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<BreadcrumbLink as={Link} href={"/blog"} color={"white"}>
							Blog
						</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb> */}

					<Heading
						as={"h3"}
						fontSize={{ base: "xl", lg: "4xl" }}
						width={{ base: "100%", lg: "80%" }}
						mx={"auto"}
						textAlign={"center"}
					>
						{data?.title}
					</Heading>
					<Flex
						mb={{ lg: 4 }}
						alignItems={"center"}
						justifyContent={"space-evenly"}
						px={{ lg: "10" }}
						mt={8}
						display={{ base: "grid", lg: "flex" }}
						gridTemplateColumns={"1fr 1fr"}
						gap={2}
					>
						<Flex alignItems={"center"} gap={1}>
							<Avatar src={data?.author_details?.profile_image}></Avatar>
							<Text>{data?.author_details?.name}</Text>
						</Flex>

						{user && user?.user_id === data?.author_details?.id ? (
							<Button
								rightIcon={<AiFillEdit />}
								as={Link}
								href={`/blog/edit-post/${data?.id}`}
							>
								Edit Post
							</Button>
						) : (
							""
						)}
						{/* <Flex
							alignItems={"center"}
							justifyContent={"center"}
							gap={1}
							justifySelf={{ base: "end", lg: "auto" }}
						>
							<FiPlusCircle />
							<Text bg={"none"}>follow</Text>
						</Flex> */}
						<Flex gap={"1"}>
							<Text
								fontWeight={"bold"}
								fontSize={"sm"}
								display={{ base: "none", lg: "block" }}
							>
								Published
							</Text>
							<Text fontSize={"sm"}>
								{moment(data?.date_published).format("MMMM Do YYYY")}
							</Text>
						</Flex>

						<Text
							display={{ base: "none", lg: "block" }}
							fontSize={"sm"}
							textAlign={"center"}
							py={"1"}
							justifySelf={{ base: "end", lg: "auto" }}
						>
							10 min read
						</Text>
						{/* <Flex
							alignItems={"center"}
							justifyContent={"center"}
							gap={1}
							justifySelf={{ base: "start", lg: "auto" }}
						>
							<AiOutlineHeart /> <Text>10 likes</Text>
						</Flex> */}
					</Flex>
					{/* <Flex
						borderTop={"1px solid #D9D9D9"}
						borderBottom={"1px solid #D9D9D9"}
						justify={"space-between"}
						py={"4"}
						px={"5"}
						mt={{ base: "1rem", lg: "6rem" }}
					>
						<Flex gap={"3"}>
							<Button leftIcon={<FiThumbsUp />}>Like</Button>
							<Button leftIcon={<FiThumbsDown />}>Dislike</Button>
						</Flex>
						<Flex>
							<Button leftIcon={<AiOutlineShareAlt />}>share</Button>
						</Flex>
					</Flex> */}
				</Header>
				<Card boxShadow={"none"}>
					<CardBody>
						<Image
							src={data?.featured_image}
							alt="Green double couch with wooden legs"
							borderRadius="lg"
							mx="auto"
							mb={{ base: "2rem", lg: "4rem" }}
						/>
						<Stack mt="6" spacing="8">
							<Heading size="lg">{data?.title}</Heading>
							<ContentWrapper>
								<Flex
									fontSize={"xl"}
									gap={"6"}
									lineHeight={"2"}
									direction={"column"}
									dangerouslySetInnerHTML={{
										__html: data?.content?.replace(/pre/g, "p"),
									}}
								/>
							</ContentWrapper>
						</Stack>
						<Image
							src={data?.featured_image}
							alt="Green double couch with wooden legs"
							borderRadius="lg"
							my={"2rem"}
							mx={"auto"}
							mt={{ base: "2rem", lg: "4rem" }}
						/>
						<Flex
							overflow="hidden"
							variant="outline"
							border={"none"}
							direction={"row"}
							gap={"3"}
							mt={"6rem"}
							mb={"3rem"}
						>
							<Avatar
								objectFit="contain"
								src={data?.author_details?.profile_image}
								alt="Caffe Latte"
								maxW={"100px"}
								rounded={"xl"}
								size={{ base: "lg", lg: "xl" }}
							/>

							<Box justifyContent={"flex-start"}>
								<Flex justifyContent={"space-between"} mb={"1"}>
									<Flex alignItems={"center"} gap={1}>
										<Text>{data?.author_details?.name}</Text>
									</Flex>
									{/* <Flex alignSelf={"flex-end"} gap={"6"}>
										<Flex
											alignItems={"center"}
											justifyContent={"center"}
											gap={1}
											display={{ base: "none", lg: "flex" }}
										>
											<FiPlusCircle />
											<Text bg={"none"}>follow</Text>
										</Flex>
										<Flex
											alignItems={"center"}
											justifyContent={"center"}
											gap={1}
										>
											<AiOutlineMail />
											<Text bg={"none"}>Contact</Text>
										</Flex>
									</Flex> */}
								</Flex>

								<Text>0 followers</Text>

								<Box mt={"5"}>
									{/* <Text
										fontSize={{ base: "sm", lg: "lg" }}
										w={{ base: "100%", lg: "80%" }}
									>
										Lawyer turned full-time publisher. Writing for fun & to
										document what I've learned in my 10+ years as a solopreneur.
										Email: maryam@gmail.com
									</Text> */}
								</Box>
							</Box>
						</Flex>
						<Text
							textAlign={"center"}
							py={"6"}
							borderBottom={"1px solid #D9D9D9"}
							fontWeight={"semibold"}
							fontSize={"xl"}
						>
							Comments({data?.comments?.length})
						</Text>
						<Stack mt="6" spacing="10">
							<Box w={{ base: "100%", lg: "100%" }} mx={"auto"}>
								<CommentSection
									commentsData={data?.comments}
									blogId={data?.id}
								/>
							</Box>
							<RelatedPosts blogs={allBlogs} />
						</Stack>
					</CardBody>
				</Card>
			</Container>
		</Box>
	);
};

export default Blogs;

const Header = styled.div`
	padding-block: 4rem;
	padding-block-start: 2rem;

	padding-inline: 1rem;
	gap: 1rem;
	@media (max-width: 96rem) {
		padding-block-start: 3rem;
		padding-block-end: 2rem;
	}
`;

const ContentWrapper = styled.div`
	ol,
	ul {
		padding-inline-start: 1.5rem;
	}
	@media (min-width: 992px) {
		ol,
		ul {
			padding-inline-start: 4rem;
		}
	}
`;
