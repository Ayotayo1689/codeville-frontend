import Image from "next/image";
import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";

const Card = ({ imgSrc, title, details, link }) => {
	return (
		<CardContainer>
			<CardImage>
				<Image src={imgSrc} alt={title} />
			</CardImage>
			<CardTitle>{title}</CardTitle>
			<CardDetails>{details}</CardDetails>
			<CardLink href={link}>
				<div>
					<p>Learn More</p>
					<BsArrowRightShort size={25} className="icon" />
				</div>
			</CardLink>
		</CardContainer>
	);
};

export default Card;

const CardContainer = styled.div`
	width: 43%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	transition: all 0.3s ease-in-out;
	background-color: #fff;

	@media (max-width: 1400px) {
		width: 46%;
	}

	&:hover {
		transform: scale(1.02);
	}
`;

const CardImage = styled.div`
	width: 100%;
`;

const CardTitle = styled.h3`
	font-weight: 500;
	font-size: 17px;
	line-height: 140%;
	padding: 0.5rem 1rem;
	color: #282828;
`;

const CardDetails = styled.p`
	font-size: 15px;
	font-weight: 400;
	padding: 0 1rem 0.5rem 1rem;
	color: #282828;
`;

const CardLink = styled.a`
	font-size: 14px;
	font-weight: 500;
	text-decoration: none;
	padding: 0 1rem;
	margin-bottom: 1rem;
	color: #e9000e;

	div {
		display: flex;
		align-items: center;
		gap: 0.2rem;
	}

	&:hover {
		color: #e5590e;
		text-decoration: underline;
	}
`;
