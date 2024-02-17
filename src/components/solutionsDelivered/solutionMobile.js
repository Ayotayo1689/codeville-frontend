import React from "react";
import { Box, Select } from "@chakra-ui/react";
import { SolutionsCardMobile } from "./solutionCardMobile";
const ProjectsComponent = ({
	projectsData,
	selectedName,
	handleSelectChange,
}) => {
	const filteredProjects = projectsData.filter(
		(project) => project.name === selectedName
	);

	return (
		<Box>
			{/* Dropdown */}
			<Select
				// placeholder={projectsData[0]?.name || ""}
				value={selectedName}
				onChange={handleSelectChange}
				mb={4}
				color={"white"}
				px={"2"}
				bg={" #E9000E"}
			>
				{projectsData.map((project) => (
					<option
						key={project.name}
						value={project.name}
						style={{ background: " #E9000E", color: "white" }}
					>
						{project.name}
					</option>
				))}
			</Select>

			{/* Project Cards */}
			{filteredProjects.map((project) => {
				return (
					<Box
						key={project.name}
						p={4}
						borderWidth="1px"
						rounded="md"
						shadow="md"
						marginBlockStart={"10"}
					>
						<SolutionsCardMobile
							FilteredProjects={project?.solution_projects}
						/>
						{/* Render the details of the project here */}
					</Box>
				);
			})}
		</Box>
	);
};

export default ProjectsComponent;
