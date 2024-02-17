import React from 'react'
import Image from 'next/image'
import styled from "styled-components";
import {Flex, Grid, GridItem, Heading, Text} from "@chakra-ui/react";
import Link from "next/link";
import {breakpoints} from "../../../styles/theme";
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiTwitter, FiYoutube } from 'react-icons/fi';
import { RiFacebookCircleLine } from 'react-icons/ri';


const ContactCard = () => {
    return (
        <>
            <CardWrapper>
                <Header>
                    <Image
                        src="/assets/contactUs/chat-icon.svg"
                        alt="Chat"
                        width={65}
                        height={15}
                    />
                    <Heading color={'#fff'} fontSize={'28px'} ml={'1rem'}> Contact us</Heading>
                </Header>

                <CardContainer>
                    {/* ======= first card ======== */}
                    <div className={'first-card'}
                         style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Flex justifyContent={'start'} alignItems={'center'} mb={'1rem'}>
                            <Image
                                src="/assets/contactUs/chat-hi.svg"
                                alt="Chat icon"
                                width={65}
                                height={15}
                            />

                            <h3>Chat with a rep</h3>
                        </Flex>

                        <Text mb={'1.5rem'} textAlign={'center'}>
                            Chat with our agent on WhatsApp
                        </Text>

                        <ChatButton
                            href={'https://wa.me/23414536000'}
                            target={'_blank'}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '3rem',
                                width: '10rem'
                            }}
                        >
                            <span style={{alignSelf: 'center'}}>Chat on WhatsApp</span>
                        </ChatButton>
                    </div>


                    {/* ======= second card ======== */}
                    <div className={'second-card'}>
                        <Flex justifyContent={'start'} alignItems={'center'} mb={'1rem'}>
                            <Image
                                src="/assets/contactUs/call-icon.svg"
                                alt="call icon"
                                width={65}
                                height={15}
                            />
                            <h3>Give us a call </h3>
                        </Flex>

                        <Grid gridTemplateColumns={{base: '1fr', lg: 'repeat(4, 1fr)'}} gap={'.5rem'} >
                            <GridItem>
                                <Heading fontSize={'16px'} fontWeight={'700'} mb={'.5rem'}>Customer Experience</Heading>
                                <Link fontSize={'14px'} fontWeight={'300'} itemProp="telephone" target="_blank"
                                      rel="noopener noreferrer" href="tel:+23414536000">
                                    +234 01 453 6000
                                </Link>
                                <Text fontSize={'14px'} fontWeight={'400'}>Mon - Fri: 8 a.m - 9 p.m WAT</Text>
                                <Text fontSize={'14px'} fontWeight={'400'}>Sat - Sun: 9 a.m - 5 p.m WAT</Text>
                            </GridItem>

                            <GridItem>
                                <Heading fontSize={'16px'} fontWeight={'700'} mb={'.5rem'}>Sales and
                                    Marketing </Heading>
                                <Link fontSize={'13px'} fontWeight={'300'} itemProp="telephone" target="_blank"
                                      rel="noopener noreferrer" href="tel:+23414538515">
                                    +234 01 453 8515
                                </Link>

                                <Text fontSize={'14px'} fontWeight={'400'}>Mon - Fri: 8 a.m - 9 p.m WAT</Text>
                                <Text fontSize={'14px'} fontWeight={'400'}>Sat - Sun: 9 a.m - 5 p.m WAT</Text>
                            </GridItem>

                            <GridItem>
                                <Heading fontSize={'16px'} fontWeight={'700'} mb={'.5rem'}>Technical Support</Heading>
                                <Link fontSize={'14px'} fontWeight={'300'} itemProp="telephone" target="_blank"
                                      rel="noopener noreferrer" href="tel:+2349093657500">
                                    +234 90 9365 7500
                                </Link>
                                <Text fontSize={'14px'} fontWeight={'400'}>Mon - Fri: 8 a.m - 9 p.m WAT</Text>
                                <Text fontSize={'14px'} fontWeight={'400'}>Sat - Sun: 9 a.m - 5 p.m WAT</Text>
                            </GridItem>

                            {/* ========= Social media links ======== */}
                            <GridItem>
                                <Heading fontSize={'16px'} fontWeight={'700'}>Follow Us</Heading>
                                <span>
                                  <RiFacebookCircleLine/> <Link href={"https://facebook.com/tantainnovatives"}
                                                                target="_blank" rel="noopener noreferrer"
                                                                aria-label="Follow us on Facebook"> @tantainnovative</Link>
                              </span>
                                <span>
                                  <FiTwitter/> <Link href={"https://twitter.com/tantainnovative"} target="_blank"
                                                     rel="noopener noreferrer"
                                                     aria-label="Follow us on Twitter"> @tantainnovative</Link>
                              </span>
                                <span>
                                  <AiOutlineLinkedin/> <Link href={"https://linkedin.com/company/tantainnovative"}
                                                             target="_blank" rel="noopener noreferrer"
                                                             aria-label="Follow us on LinkedIn"> @tantainnovative</Link>
                              </span>
                                <span>
                                  <FiYoutube/> <Link href={"https://youtube.com/@tantainnovative"} target="_blank"
                                                     rel="noopener noreferrer"
                                                     aria-label="Subscribe to our Youtube Channel"> @tantainnovative</Link>
                              </span>
                            </GridItem>
                        </Grid>
                    </div>
                </CardContainer>

            </CardWrapper>
        </>
    )
}

export default ContactCard;

const CardWrapper = styled.div`
  background: #AC2121;
  background: linear-gradient(to top, #AC2121 0%, #E9000E 100%);

  padding: 1.5rem 2.5rem;
  margin-top: 4rem;

  ${breakpoints.sm} {
    padding: .5rem 1.5rem;
  }
`
const CardContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  gap: 1rem;

  margin: 2rem 0;

  ${breakpoints.sm} {
    flex-direction: column;
  }

  .first-card {
    width: 30%;
    height: 20rem;

    display: flex;
    justify-content: start;
    align-items: stretch;
    flex-direction: column;

    padding: 2rem 1rem;

    ${breakpoints.sm} {
      width: 100%;
      height: fit-content;

      margin-bottom: 2rem;
    }
  }

  .second-card {
    width: 70%;
    height: 20rem;

    span {
      font-size: 13px;
      font-weight: 400;

      display: flex;
      justify-content: start;
      align-items: center;
      gap: .4rem;

      :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    ${breakpoints.sm} {
      width: 100%;
      height: fit-content;
    }
  }

  div {
    border-radius: 15px;
    background: #fff;
    padding: 1rem;
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 51px;

    margin-left: .8rem;
  }
`
const Header = styled.div`
  font-size: 34px;
  font-weight: 700;
  line-height: 51px;
  text-align: start;

  display: flex;
  justify-content: start;
  align-items: center;

  ${breakpoints.sm} {
    margin-top: 1rem;
  }

`
const ChatButton = styled.a`
  align-self: center;
  width: 193px;
  height: 45px;
  border-radius: 8px;
  background: #E9000E;
  color: #fff;

  text-decoration: none;

`
