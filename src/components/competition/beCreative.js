import React from "react";
import { Box, Container } from "@chakra-ui/react";
import styled from "styled-components";
import Image from "next/image";
import Creative from "../../../public/assets/competition/creative.svg";
import CreativeWriting from "../../../public/assets/competition/creative_writing.svg";

const BeCreative = () => {
	return (
		<Box>
			<Container
				maxW={"7xl"}
				p={{ base: "1rem 1rem 0rem 1rem", lg: " 0rem 4rem 1rem 4rem" }}
			>
				<Img>
					<Image src={Creative} alt={"be creative"} width="100%" />
				</Img>
				<Flex>
					<Text>
						Looking for a chance to put your creative problem-solving skills to
						the test? Open to anyone with an <Span>innovative idea</Span>, this
						competition offers the exciting opportunity to bring your software
						development dreams to life -{" "}
						<Span>regardless of your background</Span> or experience level.{" "}
						<br />
						<br /> That's exactly what <Span>Tanta Innovative Limited</Span> is
						offering to the top two winners of Our exciting{" "}
						<Span>new competition</Span>! By simply submitting your idea, you'll
						have the chance to win the <Span>ultimate reward</Span> - having
						your idea turned into a fully functional app or software, all{" "}
						<Span>without paying</Span> a dime. <br />
						<br /> So whether you've always dreamed of seeing{" "}
						<Span>your idea come to fruition</Span> or simply want to put your
						creative problem-solving skills to the test, this competition is the
						perfect opportunity to make it happen. <Span>Don't miss</Span> out
						on this chance to have your idea turned into a reality - submit your
						innovative software development idea today!
					</Text>
					<Img2>
						<Image
							p={{ base: "1rem", lg: "4rem" }}
							src={CreativeWriting}
							alt={"creative writing image"}
							width={"100%"}
						/>
					</Img2>
				</Flex>
			</Container>
		</Box>
	);
};

export default BeCreative;

const Img = styled.div`
	//border: 2px solid red;
	text-align: center;
	display: flex;
	justify-content: center;
	width: fit-content;
	margin: 0 auto;
	@media (max-width: 820px) {
		width: 50%;
	}
`;

const Flex = styled.div`
	display: flex;
	min-height: 200px;
	width: 100%;
	@media (max-width: 750px) {
		height: fit-content;
		margin-bottom: 20px;
		//min-height: 400px;
	}
`;

const Text = styled.div`
	//border: 2px solid red;
	width: 70%;
	font-size: 1.2rem;
	font-weight: 400;
	@media (max-width: 820px) {
		width: 100%;
		font-size: 14px;
	}
`;
const Img2 = styled.div`
	//border: 2px solid blue;
	width: 30%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 820px) {
		display: none;
	}
`;
const Span = styled.span`
	color: #ff0000;
`;
