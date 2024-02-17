import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
	.navbar {
		transition: transform 0.3s;
	}

	.show {
		transform: translateY(0);
	}

	.hide {
		transform: translateY(-100%);
	}
`;
export const Wrapper = styled.div`
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	width: 100%;
	height: 110px;
	background-color: white;

	.mobile-bottom {
		@media (min-width: 1142px) {
			display: none;
		}
	}
`;
export const Top = styled.div`
	padding: 0 3rem;

	height: 40px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: row;
	@media (max-width: 1142px) {
		display: none;
	}
	background: linear-gradient(255.79deg, #ac2121 14.97%, #e9000e 89.5%);
	color: #fff;

	ul {
		display: flex;
		justify-content: center;
		flex-direction: row;
	}

	li {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		padding: 0 0.5rem;

		font-weight: 400;
		font-size: 12px;
		line-height: 16px;

		img,
		svg {
			width: 20px;
			height: 20px;
			margin-right: 1rem;
		}
	}

	svg {
		margin-left: 2rem;
	}
`;
export const NavLinks = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	a {
		font-weight: bold;
		transition: 0.2s ease-in-out;

		&:hover {
			color: #e9000e;
		}
	}

	//.search_icon {
	//  margin-top: 0.2rem;
	//}

	@media (max-width: 1142px) {
		display: none;
	}

	ul {
		display: flex;
		justify-content: center;
		flex-direction: row;
	}

	li {
		list-style: none;
		padding: 0.5rem 1rem 0 1rem;
	}

	svg {
		margin-left: 2rem;
	}

	.chakra-menu__menu-list {
		background-color: white;
		padding: 0.5rem 0.5rem 0.5px 0.5rem;
		width: 16vw;
		max-width: calc(100% - 20px);
		margin: 0;
		height: auto;
		border-radius: 6px;
		color: black;

		a {
			text-decoration: none;
			font-size: 14px;

			&:focus {
				color: white;
			}
		}
	}

	.chakra-menu__menuitem { 
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		line-height: 22px;
		padding: 8px 16px 8px 16px;
		color: dimgray;
		border-radius: 6px;
	}

	button {
		border-radius: 6px;
		display: ruby-text;

		svg {
			margin-left: 0;
			font-size: small;
		}

		span {
			white-space: nowrap;
			font-weight: bold;
			user-select: none;
			position: relative; 
			vertical-align: middle;
			outline: 2px solid transparent;
			outline-offset: 2px; 

			a {
				& :focus {
					color: black;
				}
			}
		}
	}
`;

export const Bottom = styled.div`
	height: 70px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;
	box-shadow: 0 0 20px 0 rgba(8, 0, 42, 0.18);
	@media (max-width: 1142px) {
		justify-content: space-between;
		padding-inline: 1.2rem;
	}
`;

export const SignInButton = styled(Link)`
	padding: 0.5rem 1rem;
	border-radius: 50px;

	background: radial-gradient(
		133.75% 575.12% at 7.48% -33.75%,
		#580202 0%,
		#ff5c5c 0.01%,
		#e6001c 100%
	);
	border: 1px solid #fff;
	color: #fff;

	font-weight: 500;
`;
export const DropdownContent = styled.div`
	position: absolute;
	z-index: 1;
	top: 16vh;
	min-width: 160px;

	display: ${(props) => (props.isOpen ? "block" : "none")};
	background-color: rgb(255, 183, 183);
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	padding: 12px;
	margin-left: 6rem;
`;

export const DropdownItem = styled.a`
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
	cursor: pointer;

	&:hover {
		/* background-color: #f1f1f1; */
		color: #f1f1f1;
	}
`;
