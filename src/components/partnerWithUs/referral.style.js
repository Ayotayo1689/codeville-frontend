import styled from "styled-components";
import HeaderBg from "../../../public/assets/partnerWithUs/headerBg.png";

export const Wrapper = styled.div`
	padding-top: 1.5rem;
	@media (min-width: 992px) {
		background-image: url(${HeaderBg.src});
		background-repeat: no-repeat;
		background-size: contain;
		padding: 0;
	}

	position: relative;
	bottom: 3rem;
`;

export const Header = styled.div``;

export const ReferralHeader = styled.div`
	display: flex;
	justify-content: space-evenly;
	padding: 0 5rem 0 5rem;

	@media screen and (max-width: 540px) {
		padding: 0 0 0 0.5rem;
	}

	.heading {
		font-size: 1rem;
		font-weight: 400;
		@media screen and (max-width: 540px) {
			width: 100%;
			margin-top: 1rem;
		}
	}
	.make_money_with_tanta {
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		width: 42rem;
		margin-top: 4rem;
		@media screen and (max-width: 540px) {
			width: 100%;
			margin: 0;
		}
	}
	.amount {
		font-weight: 900;
		font-size: 2rem;
		@media screen and (max-width: 540px) {
			font-size: 1.5rem;
			font-weight: 500;
		}
	}
	.amount span {
		font-size: 1rem;
		font-weight: 400;
	}
	.requirements li {
		list-style: none;
		display: flex;
		margin-top: 1rem;
		font-weight: 500;
		color: black;
	}
	.check-icon {
		margin-top: 0.2rem;
		color: red;
		font-size: 1.2rem;
	}

	.join_tanta-innovative {
		font-weight: 400;
		font-size: 1.3rem;
		color: black;
		margin-top: 1.5rem;
	}
	.join_tanta-innovative span {
		color: red;
	}
	.referral_partners {
		font-size: 0.7rem;
		margin-top: 2rem;
	}

	.header_btn {
		width: 13.5625rem;
		height: 2.75rem;
		color: white;
		background: linear-gradient(255.79deg, #ac2121 14.97%, #e9000e 89.5%);
		border-radius: 5px;
		border: none;
		text-align: center;
		padding: 0.5rem 2rem 0.5rem 2rem;
		font-size: 0.9375rem;
		font-weight: 700;
		margin-top: 1.5rem;
	}
	.header_socials {
		list-style: none;
		display: flex;
		color: black;
		margin-top: 1.5rem;
	}
	.header_socials li {
		font-size: 1.5rem;
		margin-left: 2rem;
	}
	.images {
		@media screen and (max-width: 540px) {
			display: none;
		}
		@media screen and (min-width: 768px) and (max-width: 912px) {
			display: none;
		}
	}
`;
export const Body = styled.div`
	width: 100%;
	padding: 5rem;
	@media screen and (max-width: 540px) {
		padding: 0 0 0 0.5rem;
	}
`;

export const HowItWorks = styled.div`
	position: relative;
	box-sizing: border-box;
	font-size: 3rem;
	width: 35.8125rem;
	margin-left: 4rem;

	@media screen and (max-width: 540px) {
		font-weight: 500;
		font-size: 1.8rem;
		width: 100%;
		margin-left: 0;
		margin-bottom: 2rem;
		margin-top: 5rem;
	}
	@media screen and (min-width: 768px) and (max-width: 930px) {
		font-weight: 500;
		position: relative;
		left: -3.5rem;
	}

	h2 {
		margin-left: 2rem;
		font-weight: 700;
		@media screen and (max-width: 540px) {
			margin-left: 1rem;
			font-weight: 500;
		}
		@media screen and (min-width: 768px) and (max-width: 930px) {
			margin-left: 1rem;
			font-weight: 500;
		}
	}

	&::before {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		height: 100%;
		width: 3px;
		background: linear-gradient(to bottom, red 30%, white, white);
	}
	&::after {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		height: 3px;
		width: 100%;
		background: linear-gradient(
			to right,
			red,
			white,
			white,
			white,
			white,
			white
		);
	}
`;

export const Procedure = styled.div`
	padding: 3.5rem;
	@media screen and (min-width: 768px) and (max-width: 930px) {
		padding: 0;
	}

	@media screen and (max-width: 540px) {
		padding: 0;
	}

	.procedure h2 {
		font-weight: 700;
		font-size: 1.875rem;
		color: #262626;
		margin-bottom: 2rem;

		@media screen and (max-width: 540px) {
			font-weight: 500;
			font-size: 1.1rem;
		}
		@media screen and (min-width: 768px) and (max-width: 930px) {
			font-weight: 500;
			font-size: 3rem;
			width: 100%;
		}
	}

	.procedure h2 hr {
		border: 1px solid rgba(233, 0, 14, 1);
		width: 3rem;
	}

	.procedure p {
		font-size: 1rem;
		font-weight: 400;
		margin-bottom: 2rem;
		padding-right: 4rem;

		@media screen and (max-width: 540px) {
			font-weight: 400;
			font-size: 1rem;
			padding-right: 0;
		}

		@media screen and (min-width: 768px) and (max-width: 930px) {
			font-weight: 400;
			font-size: 1.3rem;

			padding-right: 0;
		}
	}
`;
export const Note = styled.div`
	align-items: center;
	width: 67.5rem;
	text-align: center;
	font-size: 1.71rem;
	font-weight: 200;
	color: #212121;

	@media screen and (max-width: 540px) {
		width: 100%;
		font-size: 1.2rem;
		margin: 0 2rem 0 0;
		padding: 0 1rem 0 0;
		align-items: center;
	}

	@media screen and (min-width: 768px) and (max-width: 930px) {
		font-size: 1.8rem;
		width: 100%;
		margin-left: 0;
	}
	@media screen and (min-width: 1024px) {
		align-items: center;
		width: 100%;
	}
	.quote {
		font-size: 3rem;
		font-weight: 500;
	}
`;
