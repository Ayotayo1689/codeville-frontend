import {
	List,
	ListItem,
	ListIcon,
	OrderedList,
	UnorderedList,
	Text,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const MenuItem = (props) => {
	const IconComponent = props.icon;
	const listItemContent = (
		<ListItem onClick={props?.onClick}>
			<ListIcon sx={{ minWidth: 40 }}>
				{IconComponent && (
					<IconComponent
						{...{
							variant: props.active ? "Bold" : props.iconVariant || "Outline",
							color: props.active ? "blue" : "red",
						}}
					/>
				)}
			</ListIcon>
			<Text
				primary={props.title}
				primaryTypographyProps={{
					color: props.active ? theme.palette.primary.main : undefined,
					fontWeight: props.active ? 700 : undefined,
				}}
			/>
		</ListItem>
	);
	if (props.href) {
		return (
			<Link href={props.href} passHref>
				{listItemContent}
			</Link>
		);
	} else {
		return <React.Fragment>{listItemContent}</React.Fragment>;
	}
};
export default MenuItem;
