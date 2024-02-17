import React from 'react'
import {flexible} from "../data";
import Image from "next/image";
import {Box, Flex} from "@chakra-ui/react";
import Link from "next/link";
import {HiOutlineArrowSmRight} from "react-icons/hi";
import styled from "styled-components";
import {breakpoints} from "../../../../styles/theme";
import NoSSR from "../NoSSR";


const FlexibleCards = () => {
    return (
		<NoSSR>
        <div>
            <FlexibleContainer>
                {flexible.map((item, index) => {
                    return (
                        <FlexibleCard className="flexible-card" key={item.index}>
                            <FlexibleData>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    className="flexible-img"
                                />
                                <h3>{item.title}</h3>
                                <Box
									width={{lg: "20%", base: "30%"}}
									height={"0"}
									border={"2px solid #E9000E"}
									mb={"2rem"}
									marginLeft={{lg: "39%", base: "32%"}}
                                />
                                <p>{item.details()}</p>
                                <Link href={item.link}>
                                    <Flex
										justifyContent={"center"}
										color={"#E9000E"}
										alignItems={"center"}
										gap={"0.5rem"}
										fontSize={{lg: "16px", base: "14px"}}
										fontWeight={"400"}
										mt={"2rem"}
                                    >
                                        About the Service
                                        <HiOutlineArrowSmRight className="icon" />
                                    </Flex>
                                </Link>
                            </FlexibleData>
                        </FlexibleCard>
                    );
                })}
            </FlexibleContainer>
        </div>
		</NoSSR>
    )
}
export default FlexibleCards

const FlexibleContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	flex-wrap: wrap;
	margin-bottom: 2rem;
	justify-content: center;

	${breakpoints.lg} {
		gap: 2rem;
	}

	${breakpoints.md} {
		gap: 2rem;
	}
`;

const FlexibleCard = styled.div`
	width: 45%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	border-radius: 8px;
	box-shadow: 0 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
		0 3.10345px 9.31034px 3.10345px rgba(0, 0, 0, 0.15);
	transition: all 0.2s ease-in-out;
	margin-bottom: 1rem;
	@media (min-width: 700px) and (max-width: 929px) {
		width: 90%;
		// margin: 0 auto;
	}

	@media (max-width: 600px) {
		width: 90%;
	}

	&:hover {
		transform: scale(1.01);
	}
	.flexible-img {
		width: 100px;
		height: 90px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin: 0.5rem auto;

		${breakpoints.lg} {
			width: 100px;
			height: 90px;
		}
	}
	h3 {
		font-size: 22px;
		font-weight: 600;
		color: #0c0c0c;
		margin-bottom: 1rem;
		text-align: center;
		padding-top: 10px;

		@media (max-width: 1200px) {
			font-size: 1rem;
		}

		${breakpoints.lg} {
			font-size: 1rem;
		}

	}

	p {
		font-size: 18px;
		font-weight: 400;
		color: #636363;
		margin-bottom: 2rem;
		text-align: center;

		@media (max-width: 1200px) {
			font-size: 1rem;
		}

		${breakpoints.sm} {
			font-size: 15px;
		}
	}

	button {
		background: #ffffff;
		box-shadow: 0 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
		0 1.55172px 4.65517px 1.55172px rgba(0, 0, 0, 0.15);
		border-radius: 12.4138px;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		color: #656565;
		padding: 0.3rem 1rem;
		font-size: 1rem;
		font-weight: 500;
		transition: all 0.2s ease-in-out;
		margin: 0 auto;

		@media (max-width: 850px) {
			font-size: 0.8rem;
		}

		@media (max-width: 800px) {
			font-size: 0.4rem;
		}
		${breakpoints.lg} {
			font-size: 0.7rem;
		}

		.icon {
			color: #fff;
			background-color: #e9000e;
			padding: 0.1rem;
			border-radius: 50%;
			font-size: 25px;

			@media (max-width: 850px) {
				font-size: 1.2rem;
			}

			${breakpoints.lg} {
				font-size: 1rem;
			}
		}

		&:hover {
			opacity: 0.5;
		}
	}
`;

const FlexibleData = styled.div`
	padding: 0.5rem 0.5rem 1rem 0.5rem;

	.img-box {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-bottom: 0.8rem;

		.icon {
			color: #151616;
			background-color: #d6dde1;
			padding: 0.1rem;
			margin-top: -3rem;
			border-radius: 50%;
			font-size: 25px;
			transition: all 0.2s ease-in-out;

			&:hover {
				background-color: #e9000e;
				color: #fff;
			}
		}
	}

	h3 {
		font-size: 22px;
		font-weight: 700;
		text-align: center;

		${breakpoints.lg} {
			font-size: 1.1rem;
		}

		${breakpoints.md} {
			font-size: 1.3rem;
		}

		${breakpoints.sm} {
			font-size: 1.1rem;
		}
	}
`;
