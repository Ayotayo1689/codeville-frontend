import React from "react";
import {
  Wrapper,
  JobTittle,
  Overview,
  DetailsSection,
  OverviewBody,
} from "./jobDetails.style";
import {
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link, Flex
} from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdRectangle } from "react-icons/md";
import appRoutes from "../../utils/appRoutes";

function JobDetail({ career }) {
  const requirements = career.job_requirements;
  const responsibilities = career.responsibilities;

  

  function renderListItemsFromText(text) {
    const regex = /\r\n\r\n|\r\n/;

    let newItem = text.split(regex);
    return newItem.map((item, index) => (
      <li key={index} className="list-items">
        <p className="rectangle_icon">
          <MdRectangle />
        </p>
        {item}
      </li>
    ));
  }

  return (
    <>
      <Wrapper>
        <JobTittle>
          <h2>
            {career.job_title} <hr />
          </h2>
        </JobTittle>
        <OverviewBody>
          <Overview>
            <div className="overview">
              <div className="overview__tittle">
                <h2>
                  Overview <hr />
                </h2>
              </div>
              <div className="overview__icons">
                <p>
                  <BsFacebook />
                </p>
                <p>
                  <AiFillInstagram />
                </p>
                <p>
                  <AiFillLinkedin />
                </p>
              </div>
            </div>
            <p className="overview__text">{career.description}</p>
          </Overview>
          <Container maxW={"7xl"}>
            <DetailsSection>
              <Box
                   bgPosition={"right"}
                   height={{base: "", md: "", lg: "45rem"}}
                   bgRepeat={"no-repeat"}
                   position={"relative"}
                   top={{base: "0", md: "0", lg: "0rem"}}
                   right={{base: "0", md: "0", lg: "-3.5rem"}}
                   bgImage={{base: 'none', md: "none", lg: "/assets/job-details/jobDetailsshape1.png"}}
                   bgSize="contain"


                >
                <Flex justifyContent={"space-between"}
                      position={"relative"}
                      bottom={{base: "0", md: "0", lg: "4rem"}}
                      top={{base: "0", md: "0", lg: "2rem"}}
                      right={{base: "0", md: "0", lg: "4rem"}}
                      display={{base: "block", md: "block", lg: "flex"}}
                >
              <div className="job___details">
                <div className="details">
                  <h2>Employment Type</h2>
                  <p>{career.job_type}</p>
                </div>
                <div className="details__">
                  <h2>Workplace type</h2>
                  <p>{career.workplace_type}</p>
                </div>
                <div className="details">
                  <h2>Salary Range</h2>
                  <p>{career.salary_range}</p>
                </div>
                <div className="details__">
                  <h2>Location</h2>
                  <p>{career.location}</p>
                </div>
              </div>

                <Box>
                  <div className="desktop_design">
                    <div className="list_items">
                      <div className="list_items_tittle">
                        <h2> Job Requirements</h2>
                      </div>
                      <div>
                        <ul>{renderListItemsFromText(requirements)}</ul>
                      </div>
                    </div>
                  </div>
                </Box>
                </Flex>
              </Box>

              <Flex justifyContent={"space-around"}>
                <Box bgImage={"/assets/job-details/jobDetailsshape1.png"}
                     transform="scaleX(-1)"
                     bgPosition={"left"}
                     width={"90rem"}
                     height={"100vh"}
                     bgRepeat={"no-repeat"}
                     position={"relative"}
                     right={"7rem"}
                     bgSize="contain"
                     display={{base: 'none', md: "none", lg: "flex"}}
                >

                </Box>

                <Box>
                <Box
                    position={"relative"}
                    mt={{base: "0", md: "0", lg: "-4rem"}}
                >
                  <div className="desktop_design">
                    <div className="list_items">
                      <div className="list_items_tittle">
                        <h2> Job Responsibilites</h2>
                      </div>
                      <div>
                        <ul>{renderListItemsFromText(responsibilities)}</ul>
                      </div>
                    </div>
                  </div>
                </Box>

                <div className="mobile-design">
                  <Box>
                  <Accordion allowToggle>
                    <AccordionItem  maxWidth={"100%"}>
                      <h2>
                        <AccordionButton bg={"white"}>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontSize={"18px"}
                            fontWeight={"bold"}
                          >
                            <h2>Job Requirements</h2>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <ul>{renderListItemsFromText(requirements)}</ul>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  <Accordion allowToggle>
                    <AccordionItem  minWidth={"90%"}>
                      <h2>
                        <AccordionButton bg={"white"}>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontSize={"18px"}
                            fontWeight={"bold"}
                          >
                            <h2>Job Responsibilities</h2>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <ul>{renderListItemsFromText(responsibilities)}</ul>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  </Box>
                </div>

                  <Box display={"flex"} justifyContent={{base: "center", md: "center", lg: "left"}} >
                  <Link href={appRoutes.JobApplicationForm}>
                  <button className="apply-btn">Apply Now</button>
                  </Link>
                  </Box>
                </Box>
            </Flex>
            </DetailsSection>
          </Container>
        </OverviewBody>
      </Wrapper>
    </>
  );
}

export default JobDetail;
