import styled from "styled-components";

export const Wrapper = styled.div`
	min-height: 100vh;
	font-family: "Roboto", sans-serif;

	//h1 {
	//  font-size: 4rem;
	//}

	@media screen and (max-width: 912px) {
		background-color: #f7f3f5; //#EEE5E9
		z-index: -4;
	}
`;

export const CareerPage = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 3rem;
	gap: 2rem;
	.div {
		height: 100%;
		max-height: 50rem;
	}

	.tanta-careers {
		box-sizing: border-box;
		height: 25rem;
		min-width: 15rem;
		background-color: white;
		border-radius: 8px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15);
	}

	.careers-contents {
		box-sizing: border-box;
		width: 100%;
		height: 3rem;

		background-color: #b10000;
		border-top-right-radius: 8px;
		border-top-left-radius: 8px;
	}
	.careers-contents h2 {
		text-align: center;
		color: white;
		font-weight: 600;
		top: 1rem;
		position: relative;
	}
	.careers-list-content {
		margin-top: 1rem;
	}
	.careers-list-content li {
		display: flex;
		justify-content: space-between;

		font-size: 1.2rem;

		margin: 0;
		padding: 0.5rem;

		> a {
			display: flex;
			justify-content: space-between;
			width: 100%;
		}
	}

	.careers-list-content li:hover {
		color: red;
	}
	.careers-list-content-icon {
		margin-top: 0.5rem;
	}
	.fraud-alert {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
	.fraud-alert h2 {
		display: flex;
	}
	#fraud-icon {
		font-size: 3rem;
		color: #b10000;
	}
	#fraud-text {
		margin-top: 1.5rem;
		font-size: 1rem;
		font-weight: 700;
		color: #656565;
	}
	.fraud-alert p {
		color: #1b1b1b;
		font-style: italic;
		font-size: 1rem;
		font-weight: 400;
		width: 17.5rem;
	}

	@media screen and (min-width: 992px) {
		.mobile-careers-contents {
			display: none;
		}
		.mobile-fraud-alert {
			display: none;
		}
	}
`;

export const CareerSection = styled.div`
	display: flex;
	justify-content: space-around;
	position: sticky;
	top: 3rem;
	height: fit-content;
	padding-left: 2rem;

	@media (max-width: 912px) {
		display: none;
	}
`;

export const Card = styled.div`
	position: relative;
	max-width: 100%;
	.right-column {
		text-align: center;
	}
	#workplace {
		scroll-margin-top: 150px;
	}
	#openings {
		scroll-margin-top: 150px;
	}
	.workspace-tittle {
		display: flex;
		justify-content: space-around;
		align-items: center;
		@media screen and (max-width: 540px) {
			width: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
	.workspace-tittle hr {
		width: 10rem;
		height: 2px;
		margin: 0 2rem;
		background-color: #b10000;
		@media screen and (max-width: 540px) {
			width: 100%;
			margin: 0;
		}
	}
	#tittle {
		font-size: 2rem;
		color: #b10000;
		font-weight: 700;
		@media screen and (max-width: 540px) {
			font-size: 0.6rem;
			font-weight: 400;
			width: 100%;
		}
	}
	.career_text {
		text-align: justify;
		padding: 1rem 2.5rem;
		position: relative;
		@media screen and (max-width: 540px) {
			padding: 0;
		}
	}
	.career_text p {
		font-size: 1.125rem;
		@media screen and (max-width: 540px) {
			font-size: 18px;
		}
	}
	.cards {
		box-sizing: border-box;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15);
		border-radius: 5px;
		margin: 10px 7px;
		padding-bottom: 1rem;
		position: relative;
	}
	.button_icon {
		margin-top: 0.1rem;
		margin-left: 1rem;
		background-color: #e9000e;
		color: white;
		height: 1.25rem;
		width: 1.25rem;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.careers_cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		position: relative;
		top: 1rem;

		@media screen and (max-width: 540px) {
			display: grid;
			grid-template-columns: 1fr;
			align-items: center;
			width: 80%;
			padding-left: 0;
		}
	}
	.cards h2 {
		color: #b10000;
		font-weight: 700;
		margin-top: 1rem;
	}
	#career {
		font-size: 0.9rem;

		padding: 0.8rem;
	}
	.learn-more {
		display: flex;
		justify-content: center;
	}

	#learn-more-text {
		color: #656565;
		font-size: 0.9rem;
	}
	.card-container {
		margin: 1.5rem 0;
	}

	@media screen and (max-width: 912px) {
		.mobile-careers-contents {
			box-sizing: border-box;
			height: 25rem;
			background: #ffffff;
			box-shadow: 0 0.75px 1.5px rgba(0, 0, 0, 0.3),
				0 0.75px 2.25px 0.75px rgba(0, 0, 0, 0.15);
			border-radius: 6px;
			display: block;
			width: 100%;
		}
		.mobile-careers-contents h2 {
			text-align: left;
			padding: 1rem 0 0 1rem;
			font-weight: 700;
		}
		.mobile-careers-list-content li {
			list-style: none;
			padding-left: 1rem;
			padding-right: 1rem;
			margin-top: 1.2rem;
			font-size: 1.3rem;
			text-align: left;
			color: #d3cfd8;
			font-weight: 600;
		}
		.mobile-fraud-alert {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			margin-top: 2rem;
		}
		.mobile-fraud-alert h2 {
			display: flex;
		}
		#mobile-fraud-alert-text1 {
			border: 1px solid white;
			background-color: white;
			width: 13rem;
			display: inline-block;
			padding: 5px;
		}
		#mobile-fraud-icon {
			font-size: 3rem;
			color: #b10000;
		}
		#mobile-fraud-text {
			margin-top: 1.5rem;
			font-size: 1rem;
			font-weight: 700;
			color: #656565;
		}
		.mobile-fraud-alert p {
			color: #ca4444;
			font-style: italic;
			font-size: 1rem;
			font-weight: 700;
			text-align: left;
		}
	}

	@media screen and(max-width:912px) {
		.mobile-careers-contents {
			box-sizing: border-box;
			width: 100vw;
			height: 25rem;
			background: #ffffff;
			box-shadow: 0 0.75px 1.5px rgba(0, 0, 0, 0.3),
				0 0.75px 2.25px 0.75px rgba(0, 0, 0, 0.15);
			border-radius: 6px;
			display: block;
		}

		.mobile-careers-list-content li {
			list-style: none;
			padding-left: 1rem;
			padding-right: 1rem;
			margin-top: 1.2rem;
			font-size: 1.3rem;
			text-align: left;
			color: #d3cfd8;
			font-weight: 600;
			border: 1px solid yellow;
		}
	}
`;
