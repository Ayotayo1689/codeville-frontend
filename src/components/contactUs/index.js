import React from "react";
import {BiTime} from "react-icons/bi";
import {BsFillTelephoneFill, BsWhatsapp} from "react-icons/bs";
import styled from "styled-components";
import {breakpoints} from "../../../styles/theme";
import Link from "next/link";
import {RiTeamFill} from "react-icons/ri";
import {useFormik} from "formik";
import * as Yup from "yup";
import axiosInstance from "../../utils/config";
import {Container, Grid, Image, Stack, Text, useMediaQuery, useToast} from "@chakra-ui/react";

const ContactUs = ({subtitle}) => {
    const toast = useToast();
    const FormOne = useFormik({
        initialValues: {
            Text: "",
            full_name: "",
            company: "",
            email: "",
            phone_number: "",
            file: null,
            service: subtitle || "",
        },
        validationSchema: Yup.object({
            full_name: Yup.string()
                .min(2, "Too Short!")
                .max(50, "Too Long!")
                .required("Required"),
            company: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            phone_number: Yup.string().required("Required"),
            Text: Yup.string().required("Required"),
        }),
        onSubmit: async (values, {setSubmitting, resetForm}) => {
            try {
                const data = new FormData();
                data.append("text", values.Text);
                data.append("full_name", values.full_name);
                data.append("company", values.company);
                data.append("email", values.email);
                data.append("phone_number", values.phone_number);
                data.append("service", values.service);
                const response = await axiosInstance.post("api/contact-us/", data);

                toast({
                    title: "Thank you!",
                    description: "We will be in touch with you shortly",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });

                resetForm();
            } catch (error) {
                const msg = Object.values(error.response.data).join("\n");

                toast({
                    title: "An error occurred",
                    description: "please try again",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
            setSubmitting(false);
        },
    });
    const [isMobileDevice] = useMediaQuery("(max-width: 992px)");

    return (
        <>

            <ContactContainer id="services-form">
                {isMobileDevice ? (
                    <Stack alignItems={"center"}>
                        <Text> Contact Us </Text>
                        <Text fontWeight={"semibold"}>We're here to support</Text>

                        <Text style={{fontSize: ".7rem"}} textAlign={"center"} px={"1rem"}>
                            Whether you&apos;re looking to start a new project, expand an
                            existing one, or simply have questions about how our team can assist
                            you, we&apos;re available 24/7 to answer your inquiries.
                        </Text>
                    </Stack>
                ) : (
                    <Container maxW={"7xl"}>
                        <Text1> Contact Us </Text1>
                        <Text2>{subtitle}</Text2>
                        <Box>
                            <ContactDetails>
                                <p className="p">
                                    Whether you&apos;re looking to start a new project, expand an
                                    existing one, or simply have questions about how our team can
                                    assist you, we&apos;re available 24/7 to answer your inquiries.
                                </p>
                                {!isMobileDevice && (
                                    <Time>
                                        <p>Opening Times</p>
                                        <div className="time_open">
                                            <BiTime size={23}/>
                                            <p>Mon - Fri: 9am - 7pm</p>
                                        </div>
                                        <div className="time_close">
                                            <BiTime size={23}/>
                                            <p>Sat - Sun: Closed</p>
                                        </div>
                                        <Image
                                            src="/assets/contactUs/timebg.png"
                                            width={100}
                                            height={100}
                                            alt="Clock"
                                            className="timebg"
                                        />
                                    </Time>
                                )}
                            </ContactDetails>

                            {/* Contact Details */}

                            <ContactForm>
                                <form className="form" onSubmit={FormOne.handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            required
                                            id="full_name"
                                            name="full_name"
                                            onChange={FormOne.handleChange}
                                            onBlur={FormOne.handleBlur}
                                            value={FormOne.values.full_name}
                                            placeholder="Full Name *"
                                        />
                                        {/* {FormOne.touched.full_name && FormOne.errors.full_name ? (
										<div className="red-font">{FormOne.errors.full_name}</div>
									) : null} */}
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                required
                                                id="email"
                                                name="email"
                                                onChange={FormOne.handleChange}
                                                onBlur={FormOne.handleBlur}
                                                value={FormOne.values.email}
                                                placeholder="Work Email *"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="company"
                                            required
                                            id="company"
                                            name="company"
                                            onChange={FormOne.handleChange}
                                            onBlur={FormOne.handleBlur}
                                            value={FormOne.values.company}
                                            placeholder="Company*"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            required
                                            id="phone_number"
                                            name="phone_number"
                                            onChange={FormOne.handleChange}
                                            onBlur={FormOne.handleBlur}
                                            value={FormOne.values.phone_number}
                                            placeholder="Work Phone *"
                                        />
                                    </div>
                                    <div className="form-group">
									<textarea
                                        name="Text"
                                        id="Text"
                                        cols="30"
                                        rows="20"
                                        required
                                        onChange={FormOne.handleChange}
                                        onBlur={FormOne.handleBlur}
                                        value={FormOne.values.Text}
                                        placeholder="Please describe what you need"
                                    ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit">Request Callback</button>
                                    </div>
                                </form>
                            </ContactForm>
                        </Box>
                    </Container>
                )}

                <ContactInfo>
                    {isMobileDevice ? (
                        <Box>
                            <h6 style={{color: "white", marginBlockEnd: "1rem"}}>
                                Need a Consultation?
                            </h6>
                            <Grid templateColumns="1fr 1fr 1fr" gap={".2rem"}>
                                {/* Call Us */}
                                <div className="join_team">
								<span>
									<BsFillTelephoneFill/>
								</span>
                                    <div>
                                        <p style={{fontSize: "7px"}}>TALK TO A CONSULTANT</p>
                                        <p style={{fontSize: "10px", color: "white"}}>
                                            +234 1 453 6000
                                        </p>
                                    </div>
                                </div>

                                <div className="join_team">
								<span>
									<RiTeamFill className="groupicon"/>
								</span>
                                    <div>
                                        <p style={{fontSize: "7px"}}>JOIN OUR TEAM</p>
                                        <p style={{fontSize: "10px", color: "white"}}>
                                            Check Vacancies
                                        </p>
                                    </div>
                                </div>
                                <div className="join_team">
								<span>
									<BsWhatsapp/>
								</span>
                                    <div>
                                        <p style={{fontSize: "7px"}}>CHAT WITH EXPERT</p>
                                        <p style={{fontSize: "10px", color: "white"}}>
                                            <Link href="https://wa.me/23414536000" target="_blank"
                                                  rel="noopener noreferrer" style={{color: 'white'}}>
                                                +234 1 4536000
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </Grid>
                        </Box>
                    ) : (
                        <Container maxW={"7xl"}>
                            <h3>Need a Consultation?</h3>
                            <div className="contact_info">
                                <div className="group_1">
                                    {/* Call Us */}
                                    <div className="phone_call" itemScope itemType="https://schema.org/LocalBusiness">
                                        <meta itemProp="name" content="Tanta Innovative Limited"/>
                                        <meta itemProp="image" content="https://tantainnovatives.com/assets/tanta_innovative.png"/>
                                        <meta itemProp="priceRange" content="$$-$$$" />
                                        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                            <meta itemProp="streetAddress" content="39 Ladipo Kasumu St" />
                                            <meta itemProp="addressLocality" content="Ikeja" />
                                            <meta itemProp="addressRegion" content="Lagos State" />
                                            <meta itemProp="postalCode" content="100281" />
                                        </div>
                                        <span>

                                            <BsFillTelephoneFill/>
                                        </span>
                                        <div>
                                            <p>TALK TO A CONSULTANT</p>
                                            <p itemProp="telephone">
                                                <Link href="tel:+23414536000" color="white">
                                                    +234 1 453 6000
                                                </Link>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="chat">
                                        <div className="chat_call">
                                            <span>
                                                <BsWhatsapp/>
                                            </span>
                                            <div>
                                                <p>CHAT WITH EXPERT</p>
                                                <p>
                                                    <Link href="https://wa.me/23414536000" target="_blank"
                                                          rel="noopener noreferrer" style={{color: 'white'}}>
                                                        +234 1 4536000
                                                    </Link>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* Join Team */}
                                <div className="join_team">
                                    <span>
                                        <RiTeamFill className="groupicon"/>
                                    </span>
                                    <div>
                                        <p>JOIN OUR TEAM</p>
                                        <Link href={"/career/career-opportunities"}>Check Vacancies</Link>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    )}
                </ContactInfo>
            </ContactContainer>
        </>

    );
};

export default ContactUs;

const Box = styled.div`
  display: flex;
  justify-content: space-between;

  ${breakpoints.md} {
    flex-direction: column;
  }
`;

const ContactContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-top: 1rem;

  @media (min-width: 992px) {
    margin-top: 4rem;
  }
`;

const Text1 = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #636363;
  padding-left: 4rem;
  margin-top: 0;

  ${breakpoints.lg} {
    font-size: 16px;
  }

  ${breakpoints.md} {
    padding-left: 2rem;
  }
`;

const Text2 = styled.p`
  font-size: 26px;
  font-weight: 600;
  color: #444444;
  padding-left: 4rem;
  margin-bottom: 0.5rem;

  @media (max-width: 992px) {
    font-size: 22px;
  }

  ${breakpoints.lg} {
    font-size: 22px;
  }

  ${breakpoints.md} {
    font-size: 20px;
    padding-left: 2rem;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;

  .p {
    padding-left: 7rem;
    font-weight: 400;
    color: black;
    width: 90%;

    @media (max-width: 992px) {
      padding-left: 4rem;
    }

    ${breakpoints.lg} {
      font-size: 14px;
    }

    ${breakpoints.md} {
      font-size: 14px;
      padding-left: 3rem;
      padding-bottom: 1rem;
    }
  }
`;

const Time = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  margin-left: 7rem;
  margin-right: 2rem;
  padding: 1rem;
  background: radial-gradient(144.82% 1073.17% at 144.82% 108.82%,
  #c90303 0%,
  #981e13 100%);
  width: 60%;
  border-radius: 10px;

  @media (max-width: 992px) {
    margin-left: 3.5rem;
    margin-top: 1rem;
  }

  ${breakpoints.md} {
    margin: 0.5rem auto;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    color: #fff;

    @media (max-width: 992px) {
      font-size: 14px;
    }
  }

  .time_open {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    p {
      font-size: 18px;
      font-weight: 400;
      color: #fff;

      @media (max-width: 992px) {
        font-size: 14px;
      }
    }

    svg {
      color: #fff;
    }
  }

  .time_close {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    p {
      font-size: 18px;
      font-weight: 400;
      color: #fff;

      @media (max-width: 992px) {
        font-size: 14px;
      }
    }

    svg {
      color: #fff;
    }
  }

  .timebg {
    position: absolute;
    top: 40px;
    right: 0px;
  }
`;

const ContactForm = styled.div`
  flex: 1;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
  0px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  display: flex;
  min-width: 300px;
  margin-top: -2rem;
  padding-top: 0;
  margin-right: 4rem;
  height: 460px;
  width: 430px;
  z-index: 100;

  ${breakpoints.md} {
    margin: 0.5rem auto;
  }

  ${breakpoints.sm} {
    width: 320px;
    min-width: 300px;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 2rem;

    .form-group {
      display: flex;
      gap: 1rem;
      width: 100%;

      input {
        width: 100%;
        height: 50px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 0 1rem;
        font-size: 16px;
        font-weight: 400;
        outline: none;
        color: #636363;

        ${breakpoints.lg} {
          font-size: 14px;
        }

        &::placeholder {
          font-size: 16px;
          color: #ccc;

          ${breakpoints.lg} {
            font-size: 14px;
          }
        }
      }

      textarea {
        width: 100%;
        height: 150px;
        border: 1px solid #ccc;
        outline: none;
        border-radius: 5px;
        padding: 0 1rem;
        font-size: 16px;
        color: #636363;
        max-height: 150px;

        ${breakpoints.lg} {
          font-size: 14px;
        }

        &::placeholder {
          font-size: 16px;
          color: #ccc;

          ${breakpoints.lg} {
            font-size: 14px;
          }
        }
      }

      button {
        width: 50%;
        min-width: 180px;
        height: 35px;
        padding: 0 1rem;
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        background: linear-gradient(255.79deg, #ac2121 14.97%, #e9000e 89.5%);
        border-radius: 8px;
        cursor: pointer;
        margin: 0 auto;
      }
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  background-color: #aa140d;
  padding: 2rem;
  margin-top: -8rem;
  @media (max-width: 992px) {
    padding-top: 1rem;
  }

  ${breakpoints.md} {
    margin-top: 1rem;
    padding: 2rem 1rem;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    margin-left: 7rem;

    @media (max-width: 992px) {
      font-size: 16px;
      margin-left: 2rem;
    }
  }

  .contact_info {
    display: flex;
    flex-direction: column;
    margin-left: 7rem;
    gap: 1rem;
    width: 50%;

    @media (max-width: 992px) {
      margin-left: 2rem;
    }

    .group_1 {
      display: flex;
      gap: 2rem;

      ${breakpoints.lg} {
        flex-direction: column;
        gap: 1rem;
      }

      .phone_call {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;

        p:nth-child(1) {
          font-size: 14px;
          padding-bottom: 0;
          margin-bottom: -0.5rem;

          @media (max-width: 992px) {
            font-size: 12px;
          }
        }

        p:nth-child(2) {
          font-weight: 600;
          color: #f9c0c0;
          @media (max-width: 992px) {
            font-size: 14px;
          }
        }

        svg {
          color: #fff;
          font-size: 30px;

          @media (max-width: 992px) {
            font-size: 25px;
          }
        }

        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 1rem;
          width: 100%;

          span {
            color: #fff;

            @media (max-width: 992px) {
              font-size: 25px;
            }
          }

          p {
            font-size: 18px;
            font-weight: 400;
            color: #fff;

            @media (max-width: 992px) {
              font-size: 12px;
            }
          }
        }
      }
    }

    .chat {
      display: flex;
      width: 300px;

      .chat_call {
        display: flex;
        align-items: center;
        gap: 1rem;

        svg {
          color: #fff;
          font-size: 30px;

          @media (max-width: 992px) {
            font-size: 25px;
          }
        }

        div {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;

          p:nth-child(1) {
            font-size: 14px;
            padding-bottom: 0;
            margin-bottom: -0.5rem;
            color: #fff;

            @media (max-width: 992px) {
              font-size: 12px;
            }
          }

          p:nth-child(2) {
            font-weight: 600;
            color: #f9c0c0;
            font-size: 18px;

            @media (max-width: 992px) {
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  .join_team {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 992px) {
      gap: 0.5rem;
    }

    svg {
      font-size: 30px;
      color: #fff;

      @media (max-width: 992px) {
        font-size: 23px;
      }
    }

    div {
      p:nth-child(1) {
        font-size: 14px;
        padding-bottom: 5px;
        color: #fff;

        @media (max-width: 992px) {
          font-size: 12px;
        }
      }

      a {
        font-weight: 600;
        color: #f9c0c0;
        font-size: 18px;

        @media (max-width: 992px) {
          font-size: 14px;
        }
      }
    }
  }
`;
