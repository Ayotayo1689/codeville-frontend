import styled from "styled-components";
import Link from "next/link";
import {colors} from "../../../styles/theme";

const {primaryColor} = colors;

export const Wrapper = styled.div`
	// &.submenu{

	//     width: 10rem;
	//     position: absolute;
	//     list-style-type: none;
	//     background: ${primaryColor};
	// }
`;

export const CompanySubMenu = styled.ul`
	&.submenu {
		width: 10rem;
		position: absolute;
		left: 0;
		top: 100%;
		list-style-type: none;
		background: ${primaryColor};
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
		// z-index: 1;
	}

	&.clicked {
		display: none;
	}
`;

export const SubMenuItems = styled.li`
	hover {
		background: #e74d70;
		color: #fff;
	}
`;
export const MenuItem = styled(Link)`
	display: block;
	width: 100%;
	color: white;
	font-weight: 400;
	font-size: 14px;
	padding: 0.4rem 0.6rem;
`;
