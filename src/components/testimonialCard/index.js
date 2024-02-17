import React from "react";
import {
	Box,
	Flex,
	Spacer,
	Text,
	useBreakpointValue,
	IconButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { profile } from "../../../public/assets/applications";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import styled from "styled-components";

const settings = {
	dots: true,
	arrows: false,
	fade: true,
	infinite: true,
	autoplay: true,
	speed: 200,
	autoplaySpeed: 7000,
	slidesToShow: 1,
	slidesToScroll: 1,
};

const TestimonialCard = () => {
	const [slider, setSlider] = React.useState(null);

	const top = useBreakpointValue({ base: "90%", md: "50%", lg: "40%" });
	const side = useBreakpointValue({ base: "30%", md: "40px", lg: "10px" });

	return (
		<Box
			position={"relative"}
			width={{ base: "100%", lg: "90%" }}
			overflow={"hidden"}
			mt={"2rem"}
			ml={{ base: "none", lg: "2rem" }}
		>
			<IconButton
				aria-label="left-arrow"
				variant="ghost"
				display={{ base: "none", md: "block", lg: "block" }}
				position="absolute"
				left={side}
				top={top}
				transform={"translate(0%, 50%)"}
				zIndex={2}
				onClick={() => slider?.slickPrev()}
			>
				<BiLeftArrowAlt size="40px" />
			</IconButton>
			{/* Right Icon */}
			<IconButton
				aria-label="right-arrow"
				variant="ghost"
				display={{ base: "none", md: "block", lg: "block" }}
				position="absolute"
				right={side}
				top={top}
				transform={"translate(0%, 50%)"}
				zIndex={2}
				onClick={() => slider?.slickNext()}
			>
				<BiRightArrowAlt size="40px" />
			</IconButton>
			<Slider {...settings} ref={(slider) => setSlider(slider)}>
				<Box h={"100%"} alignSelf={"center"}>
					<Flex
						h={"100%"}
						bg={"rgba(165, 163, 174, 0.4)"}
						flexDir={{ base: "column-reverse", md: "row", lg: "row" }}
						justifyContents={"center"}
						alignItems={"center"}
						borderRadius={"6px"}
						p={{ base: ".8rem", md: "1.5rem", lg: "4rem 3rem" }}
					>
						<Text
							width={{ base: "100%", lg: "50%" }}
							fontStyle="italic"
							fontWeight="400"
							fontSize="14px"
							lineHeight="170%"
							mt="10px"
						>
							Tanta Innovative proved to be a professional service provider from
							the start, and we value their proactive approach and ability to
							suggest improvements to a prospective solution on both
							architectural and business levels. We know we can always rely on
							Tanta Innovative Limited's competencies when our clients require
							quality software to help them succeed in business.
						</Text>

						<Spacer />
						<Box
							width="94.26px"
							height="1px"
							left="506px"
							top=" 7px"
							backgroundColor="rgba(0, 0, 0, 0.3)"
							transform="rotate(90deg)"
							display={{ base: "none", lg: "block" }}
						></Box>
						<Spacer />
						{/* proflie card */}
						<Box
							display={"flex"}
							justifyContent="center"
							alignItems={"center"}
							flexDir="row"
							mb={{ base: "20px" }}
							w={{ base: "100%", lg: "40%" }}
						>
							<Image
								src={profile}
								width={110}
								height={110}
								alt="profile"
								style={{ marginRight: "5px" }}
							/>

							<Box>
								<Text
									fontWeight="600"
									fontSize="15px"
									lineHeight="170%"
									color="#000000"
								>
									CTO, Burtech Products
								</Text>
								<Text fontWeight="400" fontSize="12px" lineHeight="170%">
									Dr Sarah Smith
								</Text>
							</Box>
						</Box>
					</Flex>
				</Box>
			</Slider>
		</Box>
	);
};
export default TestimonialCard;

const CarouselItem = styled.div`
	justify-content: center;
	align-items: center;
	padding: 10px;
`;
