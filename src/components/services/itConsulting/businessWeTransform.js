import React from 'react'
import {business} from "./data";
import Image from "next/image";
import Link from "next/link";
import {TbArrowUpRight} from "react-icons/tb";
import styled from "styled-components";
import {breakpoints} from "../../../../styles/theme";

const BusinessWeTransform = () => {
    return (
        <>
            <Business>
                <div className="business">
                    <h2>Business Areas we Transform</h2>
                    <h3>
                        Transforming your Business Processes for the{" "}
                        <span>Digital Age</span>
                    </h3>
                    <div></div>
                    <p>
                        Tanta Innovatives is a leading provider of IT
                        consulting and software development services that has
                        helped businesses across multiple industries succeed.
                        Our team of experienced IT professionals is
                        well-equipped to help clients navigate the
                        complexities of the digital landscape, develop
                        innovative solutions, and stay ahead of the
                        competition.
                    </p>
                </div>
                {business.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="business-details">
                                <Image
                                    src={item.img}
                                    alt="Descriptive icon"
                                    className="business-img"
                                />
                                <div>
                                    <h5>{item.title}</h5>
                                    <p>{item.details}</p>
                                </div>
                            </div>

                            {/*{item.link ? (*/}
                            {/*    <Link href={item.link}>*/}
                            {/*        <button>*/}
                            {/*            Learn more <TbArrowUpRight className="icon" />*/}
                            {/*        </button>*/}
                            {/*    </Link>*/}
                            {/*) : null*/}
                            {/*}*/}

                        </div>
                    );
                })}
            </Business>
        </>
    )
}
export default BusinessWeTransform

const Business = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 1rem;

	.business {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 0;
		margin-bottom: 1rem;

		h2 {
			font-size: 18px;
			font-weight: 400;
			color: #636363;
			text-transform: uppercase;
			margin-bottom: -1rem;

			${breakpoints.lg} {
				font-size: 1rem;
			}

			@media (max-width: 850px) {
				font-size: 0.9rem;
			}
		}

		h3 {
			font-size: 1.6rem;
			font-weight: 700;
			color: #414141;
			margin-bottom: 1rem;

			span {
				color: #e9000e;
			}

			${breakpoints.lg} {
				font-size: 1.5rem;
			}

			@media (max-width: 850px) {
				font-size: 1.2rem;
			}

			${breakpoints.sm} {
				margin-bottom: 0;
              font-size: 1.4rem;
			}
         
		}

		div {
			width: 55px;
			height: 3px;
			background-color: #e9000e;
			margin-bottom: 0.2rem;
		}

		p {
			font-size: 20px;
			font-weight: 400;
			color: #2a2a2a;

			${breakpoints.lg} {
				margin-top: 0;
				font-size: 18px;
			}

			@media (max-width: 850px) {
				font-size: 1rem;
			}
          
		}
	}

	.business-details {
		display: flex;
		gap: 1rem;
		margin-bottom: 0.5rem;

		${breakpoints.lg} {
			gap: 0.5rem;
		}

		.business-img {
			width: 50px;
			height: 50px;
			margin-top: 1.2rem;

			${breakpoints.lg} {
				width: 40px;
				height: 40px;
			}

			@media (max-width: 768px) {
				display: none;
			}

			${breakpoints.md} {
				display: flex;
			}
		}

		h5 {
			font-size: 1.3rem;
			font-weight: 500;
			color: #0c0c0c;
			padding: 0.2rem 0;
			padding-top: 1rem;

			${breakpoints.lg} {
				font-size: 1rem;
			}
		}

		p {
			font-size: 18px;
			font-weight: 400;
			color: #636363;

			${breakpoints.lg} {
				font-size: 1rem;
			}
		}
	}

	a {
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;

		button {
			border: none;
			display: flex;
			color: #e9000e;
			font-size: 1rem;
			font-weight: 500;
			transition: all 0.2s ease-in-out;
			text-transform: uppercase;

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
				color: #e9000e;
				padding: 0.1rem;
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
	}
`;