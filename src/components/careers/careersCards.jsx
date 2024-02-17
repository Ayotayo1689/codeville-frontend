import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Box, Text } from "@chakra-ui/react";

function CareersCards({ title, text }) {
	const [showMore, setShowMore] = useState(false);

	const toggleShowMore = () => {
		setShowMore(!showMore);
	};

	const renderText = (text, maxLength) => {
		if (!text) {
			return ""; // Return an empty string if text is undefined
		}

		if (text.length <= maxLength || showMore) {
			return text;
		}

		return text.slice(0, maxLength) + "...";
	};
	return (
		<>
			<Box
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				flexDir={"column"}
				borderRadius={"8px"}
				boxShadow="0 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
          0 3.10345px 9.31034px 3.10345px rgba(0, 0, 0, 0.15)"
				transition="all 0.2s ease-in-out"
				mb="1rem"
				p={"1rem"}
			>
				<Text fontSize={"18px"} fontWeight={"600"} color={"#9F000A"}>
					{title}
				</Text>
				<Text my={"1rem"}>{renderText(text, 100)}</Text>
				{text && text.length > 100 && (
					<button
						onClick={toggleShowMore}
						style={{
							width: "9rem",
							margin: "auto",
							marginTop: "1rem",
							height: "3rem",
							background: "#fff",
							boxShadow: "0px 1.55172px 3.10345px rgba(0, 0, 0, 0.3)",
							borderRadius: "12.4138px",
							display: "flex",
							alignItems: "center",
							paddingLeft: "0.5rem",
							textAlign: "center",
						}}
					>
						{showMore ? "Show less" : "Show more"}
						<IoIosArrowForward className="button_icon" />
					</button>
				)}
			</Box>
		</>
	);
}

export default CareersCards;
