import {useDropzone} from "react-dropzone";
import {Box, Flex, Text} from "@chakra-ui/react";
import {BiLinkAlt} from "react-icons/bi";
import {MdError} from "react-icons/md";
import React from "react";

const FileDropzone = ({ onDrop, file }) => {
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
	});

	return (
		<Box {...getRootProps()} p={4} border="0.6px solid #ccc" fontSize= {{base:"0.8rem",lg:"18px"}}>
			<input {...getInputProps()} />
			{file ? (
				<Text textAlign={"center"}>{file.name}</Text>
			) : isDragActive ? (
				<Text textAlign={"center"}>Drop the files here ...</Text>
			) : (
				<Flex alignItems={"center"} justifyContent={"space-between"}>
					<Flex gap={"1.4rem"}>
						<BiLinkAlt color="red" fontSize={"1.3rem"}/>
						<Text textAlign={"center"} opacity={"0.7"}>
								Drag and drop or browse a file of 20MB overall
							</Text>
						</Flex>
						<MdError
							color={"black"}
						/>
					</Flex>
			)}
		</Box>

	);
};

export default FileDropzone;
