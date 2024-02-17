import styled from "styled-components";
import HeaderBg from "../../../public/assets/calculator/headerBg.png";
import congratsImage from "../../../public/assets/calculator/congratulations.png";
import congratsImageMobile from "../../../public/assets/competition/congratulation-mobile.svg";

export const ContainerCard = styled.div`
	width: 100%;
	justify-content: center;
	//border: 2px solid green;
`;

export const WrapperCard = styled.div`
	width: 100%;
	margin: 0;
	padding: 0;
	background-image: url(${HeaderBg.src});
	background-repeat: no-repeat;
	background-size: contain;
	display: grid;
	justify-content: center;
	bottom: 3rem;
	//background-position: relative;

	.layoutstyle__Content-sc-1tnunip-2 {
		display: grid;
		justify-content: center;
		align-items: center;
	}
`;

export const TitleCard = styled.div`
	display: grid;
	align-content: baseline;
	justify-items: center;
	text-align: center;

	.titleFirstLine {
		margin-top: 1rem;
		//font-family: 'Roboto';
		font-style: normal;
		font-size: 15px;
		//line-height: 24px;
		vertical-align: Top;
		letter-spacing: 5px;
		color: #636363;
		text-transform: uppercase;
	}

	.titleSecondLine {
		//font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-size: 25px;
		line-height: 42px;
		text-align: center;

		span {
			color: #eb1a26;
		}
	}
`;
export const TextAreaBloc = styled.div`
	display: inline-table;
	margin: 0;
	.chakra-button[data-status="checked"] {
		width: 2rem;
		margin: 0.5vw;
	}
	.chakra-button[data-status="notChecked"] {
		width: 2rem;
		margin: 0.5vw;
	}
	textarea {
		width: 13.9vw;
		left: -1rem;
	}
`;

export const InputBloc = styled.div`
	display: inline-table;
	margin: 0;
	.chakra-button[data-status="notChecked"] {
		width: 2rem;
		margin-right: 0;
	}

	.chakra-button[data-status="checked"] {
		width: 2rem;
		margin-right: 0;
	}

	input {
		height: 3.7rem;
		width: 15vw;
		left: -3rem;
	}
`;

export const BodyCard = styled.div`
	display: flex;
	margin-top: 7rem;
	height: fit-content;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 3rem;
	@media (max-width: 767px) {
		flex-direction: column;
		gap: 20px;
		justify-content: center;
		align-items: center;
		margin-top: 0;
	}
	span {
		width: 3%;
	}
	.chakra-step__separator[data-orientation="vertical"] {
		top: calc(var(--stepper-indicator-size) + 17px);
		text-decoration-style: dotted;
	}
	.chakra-step__indicator[data-status="complete"] {
		border: 2px solid green;
		border-radius: 2rem;
		background: none;
		color: green;
		outline: 1.35294px solid #565656;
		outline-offset: 3px;
	}
	.chakra-step__indicator[data-status="active"] {
		box-sizing: border-box;
		text-decoration-style: double;
		width: 46px;
		height: 46px;
		border: 1.35294px solid #565656;
		outline: 1.35294px solid #565656;
		outline-offset: 1px;
		margin-left: -0.5rem;
	}
	.chakra-step__indicator[data-status="incomplete"] {
		border: 2px solid #565656;
		outline: 1.35294px solid #565656;
		outline-offset: 3px;
		border-radius: 2rem;
		background: #565656;
		color: white;
	}
`;

export const BlockCard = styled.div`
	width: 60%;
	//position: relative;
	@media (max-width: 985px) {
		width: 100%;
	}

	button::-webkit-scrollbar {
		width: 0;
		height: 0;
	}

	button {
		//position: relative;

		word-wrap: break-word;
		background-color: green;
		-webkit-justify-content: flex-start;
		padding: 0 1rem 0 1rem;
		//min-width: fit-content;
		width: 95%;
		//overflow: hidden;
		min-height: 40px;
		scrollbar-width: thin;

		.tooltip {
			//position: relative;
			overflow: hidden;
			display: inline-block;
			border-bottom: 1px dotted black;
		}

		.tooltip .tooltiptext {
			margin-top: -3rem;
			visibility: hidden;
			width: fit-content;
			margin-left: 2rem;
			position: absolute;
			background: linear-gradient(255.79deg, #ac2121 14.97%, #e9000e 89.5%);
			padding: 0.7rem;
			color: white;
			text-align: center;
			border-radius: 6px;

			/* Position the tooltip */
			position: absolute;
			z-index: 1;
		}

		.tooltip:hover .tooltiptext {
			visibility: visible;
			position: absolute;
			left: 0px;
		}

		//@media (max-width: 1236px) {
		//	//max-width:90%;
		//}
		//@media (max-width: 1100px) {
		//	max-width: 400px;
		//
		//
		//	padding-right: 20px;
		//}
		//@media (max-width: 800px) {
		//  width: 100%;
		//  padding-right: 20px;
		//}
	}

	.chakra-button[data-status="checked"] {
		margin: 0.5vw 0 0.5vw 1vw;
		color: white;
		background: linear-gradient(255.79deg, #ac2121 14.97%, #e9000e 89.5%);
		font-style: normal;
		font-weight: 700;
		font-size: 80%;
		line-height: 140%;
	}

	.chakra-button[data-status="notChecked"] {
		margin: 0.5vw 0 0.5vw 1vw;
		background: #ffffff;
		border-radius: 5px;
		font-style: normal;
		font-weight: 700;
		font-size: 80%;
		line-height: 140%;
		color: #565656;
	}

	.chakra-button[data="other"] {
		margin: 0.5vw 0 0.5vw 1vw;
		background: transparent;
		border-radius: 5px;
		border: 1px solid #565656;
		//font-family: "Roboto";
		font-style: normal;
		font-weight: 700;
		font-size: 0.8vw;
		line-height: 140%;
		color: #abb1b4;
	}

	.icon {
		font-size: large;
		margin-left: -0.5rem;
	}

	.iconn {
		color: green;
		font-size: x-large;
	}
`;
export const FlexCard = styled.div`
	padding: 8px 8px 8px 8px;
	display: block;
	width: 102%;

	.textAnswer {
		width: 12.39vw;
		height: 23.14vh;
		left: 23.14vw;
		font-style: normal;
		font-weight: 500;
		font-size: 0.7vw;
		align-items: center;
		text-align: center;
		color: #000000;
	}
`;

export const CardButtons = styled.div`
	display: flex;
`;

export const FormCard = styled.div`
	display: contents;
	flex: 1;
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0 4px 8px 3px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.3);
	border-radius: 15px;
	min-width: 300px;
	margin-top: -2rem;
	padding-top: 0;
	margin-right: 4rem;
	height: 460px;
	width: 430px;
	z-index: 100;

	.form-input {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		padding: 2rem;

		.form-input-group {
			display: flex;
			gap: 1rem;
			width: 100%;
			input {
				width: 100%;
				height: 50px;
				border: 1px solid #ccc;
				border-radius: 5px;
				padding: 0 1rem;
				font-size: 16px;
				font-weight: 400;
				outline: none;
				color: #636363;

				&::placeholder {
					font-size: 16px;
					color: #ccc;
				}
			}
			textarea {
				width: 100%;
				height: 150px;
				border: 1px solid #ccc;
				outline: none;
				border-radius: 5px;
				padding: 0 1rem;
				font-size: 16px;
				color: #636363;

				&::placeholder {
					font-size: 16px;
					color: #ccc;
				}
			}
			button {
				width: 50%;
				min-width: 180px;
				height: 35px;
				padding: 0 1rem;
				font-size: 16px;
				font-weight: 400;
				color: #fff;
				background: linear-gradient(255.79deg, #ac2121 14.97%, #e9000e 89.5%);
				border-radius: 8px;
				cursor: pointer;
				margin: 0 auto;
			}
		}
	}
`;

export const BoxCongrats = styled.div`
	display: flex;
	//justify-content: flex-end;
	min-width: 70vw;
	height: 60vh;
	background-image: url(${congratsImage.src});
	background-size: cover;
	background-position: center;
	@media (max-width: 820px) {
		width: 90vw;
		height: 70vw;
		//border: 2px solid red;
		background-image: url(${congratsImageMobile.src});
		margin-bottom: 20px;
	}
	.checkbulb {
		position: absolute;
		max-width: 60vh;
		max-height: 60vh;
		margin-top: 50px;

		@media (max-width: 820px) {
			display: none;
		}
		@media (max-width: 940px) {
			max-width: 50vh;
		}
		@media (max-width: 1108px) {
			max-width: 35vw;
		}
		//z-index: -9;
	}

	.textCongratsCard {
		//border: 2px solid green;
		//padding: 0 7rem 0 0 ;
		//margin-top: 13rem;
		//width: 20vw;
		margin-left: 50%;
		display: flex;
		align-items: center;
		max-width: 450px;
		padding-right: 4%;
		//height: 187px;
		//left: 73rem;
		//top: 100vh;
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		//line-height: 162.5%;
		@media (max-width: 820px) {
			display: none;
		}
	}
`;
