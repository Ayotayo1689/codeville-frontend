import React from "react";
import { Wrapper, Card, CareerSection, CareerPage } from "./styles";
import {Box, Container, Grid} from "@chakra-ui/react";
import { AiFillWarning } from "react-icons/ai";
import CareersCards from "./careersCards";
import Banners from "./banner/banner";
import JobsSection from "./jobsSection/index";
import {CareersSidebar,  MobileSidebar }from "./careersSidebar";
import {useState, useEffect, useRef} from "react"
import {CardData} from "./data";
import Head from "next/head";


function Careers({ departments, careers }) {

  const [activeLink, setActiveLink] = useState({});
  const openingsRef = useRef(null);
  const workplaceRef = useRef(null);

  useEffect(() => {
    if (activeLink.openings && openingsRef.current) {
      openingsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (activeLink.workplace && workplaceRef.current) {
      workplaceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeLink]);

  return (
      <>
        <Head>
          <title> Careers- Tanta Innovative Limited</title>
          <meta
              name="description"
              content=" At Tanta Innovative, we are dedicated to fostering a
                      culture that promotes productivity, upholds integrity, and
                      continually drives innovation. We understand that our
                      people are the backbone of our company and by nurturing
                      their growth and well-being"
          />

        </Head>

    <Wrapper>
       <Container style={{maxWidth: '100%', padding: '0'}}>
        <Banners />
       </Container>

      <Container maxW={"7xl"}>
        <CareerPage>
        
          <CareerSection >
          <div className="div">
              <div className="tanta-careers">
                  <div className="careers-contents">
                    <h2>TANTA CAREERS</h2>
                   
                </div>
                    <CareersSidebar/>
              </div>
                <div className="fraud-alert">
                  <h2>
                    <AiFillWarning id="fraud-icon" />
                    <span id="fraud-text"> &nbsp;&nbsp;FRAUD ALERT</span>
                  </h2>
                  <p>
                    Tanta innovative does not request money from job applicants
                  </p>
                </div>
              </div>
          </CareerSection>


            <Card>

              
              <div className="right-column" ref={workplaceRef}  id="workplace">
                <div className="column-content">
                  <div className="workspace-tittle">
                    <hr />
                    <h2 id="tittle">A WORKSPACE FOR YOU</h2>
                    <hr />
                  </div>
                  <div className="career_text">
                    <p>
                      At Tanta Innovative, we are dedicated to fostering a
                      culture that promotes productivity, upholds integrity, and
                      continually drives innovation. We understand that our
                      people are the backbone of our company and by nurturing
                      their growth and well-being, we are able to consistently
                      deliver groundbreaking solutions to our clients. Together,
                      we are shaping the future of software development, one
                      exceptional individual at a time.
                    </p>
                  </div>
                </div>

                <Box display={{ base: 'none', md: 'block', lg: 'block' }}>
                  <div className=" mobile-careers-contents">
                    <h2>TANTA CAREERS</h2>
                    <div className="mobile-careers-list-content">
                      <MobileSidebar/>

                    </div>
                  </div>
                </Box>


                <div className="mobile-fraud-alert">
                  <div id="mobile-fraud-alert-text1">
                    <h2>
                      <AiFillWarning id="mobile-fraud-icon" />
                      <span id="mobile-fraud-text">
                        {" "}
                        &nbsp;&nbsp;FRAUD ALERT
                      </span>
                    </h2>
                  </div>
                  <p>
                    Tanta innovative does not request money from job applicants
                  </p>
                </div>

                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}}
                        gap={4} mt={'1.5rem'}>
                  {CardData.map((item, index) => {
                    return (
                        <CareersCards key={index} title={item.title} text={item.text} />
                    );
                  })}
                </Grid>
                
              </div>
              <div className="job__section"  ref={openingsRef} id="openings">
                <JobsSection departments={departments} careers={careers} />
              </div>
            </Card>
        </CareerPage>
      </Container>
    </Wrapper>
      </>
  );
}

export default Careers;
