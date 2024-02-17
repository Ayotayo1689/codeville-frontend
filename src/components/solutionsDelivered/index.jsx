import React from "react";
import { Section } from "../../../styles/home.style";
import { Box, Container, useMediaQuery } from "@chakra-ui/react";
import LandingLayout from "../../layouts/landing.layout";

import ContactUs from "../../components/contactUs";
import { WrapperCard } from "./style";
import HeaderOne from "../HeaderOne";
import styled from "styled-components";
import SolutionsDesktop from "./solutionPage";
import ProjectsComponentMobile from "./solutionMobile";
import {useDispatch, useSelector} from "react-redux";
import { setSelectedSolutionName} from "@/features/healthcare";

function OurSolutions({ categories, projects }) {
	const [isMobileDevice] = useMediaQuery("(max-width: 992px)");
	const dispatch = useDispatch();
	// const [selectedName, setSelectedName] = useState(projects[0]?.name || "");
	const {selectedSolutionName} = useSelector(state => state.healthcare)
	const handleSelectChange = (event) => {
		dispatch(setSelectedSolutionName(event.target.value));
	};
	return (
		<>
			<Box mt={{ base: "8rem", md: "7rem", lg: "0" }}>
				{" "}
				<HeaderOne heading={"Services"} title={"SOLUTIONS WE DELIVER"} />
			</Box>
			<Container maxW={"7xl"} px={{ lg: "5rem", "2xl": "0.4rem" }}>
				<HeaderText>
					<WeProvide>
						<h2>
							We Provide a wide range of <span>Business Solutions</span>{" "}
						</h2>
					</WeProvide>

					<VerticalLine></VerticalLine>

					<ReachOut>
						<p>
							{" "}
							Discover our powerful software solutions designed for various
							industries. From retail to manufacturing and beyond, our tailored
							offerings cater to your business's unique needs. Explore our
							industry-specific software solutions and drive your business
							forward.
						</p>
					</ReachOut>
				</HeaderText>
			</Container>

			<WrapperCard>
				{isMobileDevice ? (
					<Section>
						<ProjectsComponentMobile
							projectsData={categories}
							selectedName={selectedSolutionName}
							handleSelectChange={handleSelectChange}
						/>
					</Section>
				) : (
					<Section>
						{/* <Solutions /> */}
						<SolutionsDesktop categories={categories} projects={projects} />
					</Section>
				)}
			</WrapperCard>

			<Box mt={{ base: "", md: "", lg: "-8rem" }}>
				<ContactUs subtitle="We’re here to support" />
			</Box>
		</>
	);
}

OurSolutions.getLayout = (page) => {
	return <LandingLayout>{page}</LandingLayout>;
};
export default OurSolutions;

const HeaderText = styled.div`
	display: flex;
	justify-content: space-around;
	@media screen and (max-width: 540px) {
		flex-direction: column;
		padding: 0 2rem 0 2rem;
	}
	@media screen and (min-width: 768px) and (max-width: 930px) {
		flex-direction: column;
		padding: 0 4rem 0 4rem;
	}
`;

const WeProvide = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 450px;
  height: 96px;


}

> h2 {
  font-weight: 700;
  font-size: 35px;
  color: rgba(86, 86, 86, 1);
  margin-left: 2rem;


  > span {
    color: rgba(233, 0, 14, 1);
  }

  @media screen and (max-width: 540px) {
    margin-left: 1rem;
    font-weight: 500;
    font-size: 25px;


  }

  @media screen and (min-width: 768px) and (max-width: 930px) {
    font-weight: 700;

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
    background: linear-gradient(to right,
    red,
    white,
    white,
    white,
    white,
    white);


  }

`;
const ReachOut = styled.div`
	max-width: 521px;
	//padding: 0 4rem 0 4rem;

	> p {
		font-weight: 400;
		font-size: 22px;
		color: rgba(86, 86, 86, 1);

		@media screen and (max-width: 540px) {
			font-size: 18px;
			margin-top: 1rem;
		}

		@media screen and (min-width: 768px) and (max-width: 930px) {
			margin-top: 3rem;
		}
	}
`;
const VerticalLine = styled.div`
	border-left: 1px solid rgba(0, 0, 0, 0.3);
	margin-left: 2rem;
`;
