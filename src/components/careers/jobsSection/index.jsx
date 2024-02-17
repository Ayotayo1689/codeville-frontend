import React from "react";
import { Container, Wrapper, Paragraph, JobSection } from "./style";
import Buttons from "./button/buttons";
import { Socials } from "./style";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import JobOpening from "./jobOpening";

const getDepartmentJos = (departmentId, careers) => {
  return careers.filter((item) => item.department === departmentId);
};

function index({ departments, careers }) {
  return (
    <>
      <Container >
        <Paragraph>
          <div className="paragraph__title">
            <h2 className="jobSection__tittle">
              Careers at <span id="tittle__sub">Tanta Innovative</span>
            </h2>
            <h4>
              Become a part of our big family to inspire and get inspired by
              professional experts.
            </h4>
            <p className="paragraph">
              Join Tanta’s team of top IT professionals and contribute to the
              digital success of the companies in 10 industries. Our project
              portfolio comprises over 70 success stories, including projects
              for the police, hospitals, schools, banks and others.
            </p>
          </div>
        </Paragraph>

        <JobSection>
          <div className="jobs__container">
            {departments.map((department, index) => (
              <JobOpening
                department={department}
                jobs={getDepartmentJos(department.id, careers)}
                key={index}
              />
            ))}
          </div>
        </JobSection>
        <Socials>
          <div className="note">
            We are an ever expanding company be the first to know about our new
            vacancies by following us on our social media handles
          </div>
          <div className="socials__icons">
            <ul>
              <li>
                <AiOutlineTwitter />
              </li>
              <li>
                <AiFillYoutube />
              </li>
              <li>
                <BsFacebook />
              </li>
              <li>
                <AiFillInstagram />
              </li>
              <li>
                <AiFillLinkedin />
              </li>
            </ul>
          </div>
        </Socials>
      </Container>
    </>
  );
}

export default index;
