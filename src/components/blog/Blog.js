import {
	Box,
	Button,
	ButtonGroup,
	Container,
	Flex,
	Grid,
	SimpleGrid,
} from "@chakra-ui/react";

import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import RecentArticles from "./RecentArticles";
import BlogCards from "./BlogCard";
import Header from "./Header";

const Blogs = ({ blogs }) => {
	return (
		<Box overflow="hidden">
			<Header />
			<Container maxW={"8xl"} my={{ lg: "3rem" }} px={{ lg: "4rem" }}>
				<Grid templateColumns={{ base: "1fr", lg: "1fr 420px" }} gap={"4"}>
					<SimpleGrid
						templateColumns="repeat(1, minmax(100px, 750px))"
						gap={"2rem"}
						order={{ base: "2", lg: "1" }}
					>
						<BlogCards blogs={blogs} />

						{/* <Box>
							<ButtonGroup mx={"auto"}>
								<Button variant="outline">
									<GrFormPrevious />
								</Button>
								<Button variant="outline">1</Button>
								<Button variant="outline">2</Button>
								<Button variant="outline">3</Button>

								<Button variant="outline">
									<MdOutlineNavigateNext />
								</Button>
							</ButtonGroup>
						</Box> */}
					</SimpleGrid>
					<RecentArticles blogs={blogs} />
				</Grid>
			</Container>
		</Box>
	);
};

export default Blogs;
