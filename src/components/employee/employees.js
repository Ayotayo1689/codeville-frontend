// styling and layout goes here
import { Container } from "@chakra-ui/react";

// images and icons are imported here
import HeroProfile from "./hero";
import EmployeeLetter from "./letter";
import Posts from "./posts";
import Projects from "./projects";
import React from "react";
import TechStack from "./techStack";

const Employees = ({ data }) => {
	return (
		<>
			<Container
				maxW={"7xl"}
				px={{ lg: "5rem", "2xl": "0.4rem" }}
				overflowX={"hidden"}
			>
				{/* =========== employee profile ========= */}
				<HeroProfile data={data} />

				{/* ========== EMPLOYEE WORDS ========== */}
				<EmployeeLetter data={data} />
			</Container>
			{/* latest articles from employee */}

			{data?.all_blogs?.length > 0 && <Posts data={data} />}

			{/* project contributed to */}
			{data?.projects_contributed_to?.length > 0 && <Projects data={data} />}

			{/* employee stack */}
			{data?.stacks?.length > 0 && (
				<Container maxW={"7xl"} px={{ lg: "5rem", "2xl": "0.4rem" }}>
					<TechStack data={data} />
				</Container>
			)}
		</>
	);
};

export default Employees;
