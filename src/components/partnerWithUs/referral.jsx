import React, {useEffect, useState} from "react";
import {Body, Header, HowItWorks, Note, Procedure, ReferralHeader, Wrapper,} from "./referral.style";
import Image from "next/image";
import {Container} from "@chakra-ui/layout";
import {BiCheckDouble} from "react-icons/bi";
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import Link from "next/link";
import Head from "next/head";


function Referral() {
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);
    return (
        <>
            <Wrapper>
                <Header>
                    <Container maxW={"7xl"}>
                        <ReferralHeader>
                            <div className="make_money_with_tanta">
                                <p className="heading">MAKE MONEY WITH TANTA</p>
                                <h1 className="amount">
                                    Earn up to N1,000,000<span>/m</span>
                                </h1>
                                <div className="requirements">
                                    <ul>
                                        <li>
                                            <BiCheckDouble className="check-icon"/> Are you a good
                                            sales representative?
                                        </li>
                                        <li>
                                            <BiCheckDouble className="check-icon"/> Do you have what it
                                            takes to close a deal?{" "}
                                        </li>
                                        <li>
                                            <BiCheckDouble className="check-icon"/> Or do you want to
                                            learn how to get trained and equipped by Tanta innovative
                                            FREE!
                                        </li>
                                    </ul>
                                </div>
                                <p className="join_tanta-innovative">
                                    Join <span>Tanta Innovative </span>Agent Program today, get
                                    trained, equipped and make unmatched commissions on every closed
                                    deal.
                                </p>
                                <p className="referral_partners">
                                    <strong>Referral partners who bring in 10</strong> or more
                                    projects within a calendar quarter will be entered into a draw,
                                    with the winner receiving 100% of the project value for one
                                    randomly selected project.
                                </p>
                                <Link href="/referral">
                                    <button className="header_btn">BECOME AN AGENT</button>
                                </Link>
                                <ul className="header_socials">
                                    <li>
                                        <a href={"https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(currentUrl)}
                                           target="_blank"
                                           rel="noopener noreferrer">
                                            <AiFillFacebook/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={"https://www.instagram.com/share?text=" + encodeURIComponent(currentUrl)}
                                           target="_blank"
                                           rel="noopener noreferrer">
                                            <AiFillInstagram/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={"https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(currentUrl)}
                                           target="_blank"
                                           rel="noopener noreferrer">
                                            <AiFillLinkedin/>
                                        </a>
                                    </li>

                                </ul>
                            </div>

                            <div className="images">
                                <Image
                                    src="/assets/partnerWithUs/headerImg.png"
                                    width={300}
                                    height={50}
                                    alt="Picture"
                                />
                            </div>
                        </ReferralHeader>
                    </Container>
                </Header>

                <Container maxW={"7xl"}>

                    <Body>
                        <HowItWorks>
                            <h2>How Does Our Referral Program Work?</h2>
                        </HowItWorks>
                        <Procedure>
                            <div className="procedure">
                                <h2>
                                    Sign up for an Agent Account <hr/>
                                </h2>

                                <p>
                                    To get started as an agent for Tanta Innovative, simply fill out
                                    the registration form on our website. Provide us with your
                                    contact information and agree to our terms and conditions. Once
                                    you’ve completed the registration form, you’ll receive an email
                                    with a link to verify your account. After verifying your
                                    account, you can log in to your personalized dashboard. Take the
                                    time to familiarize yourself with the dashboard’s features and
                                    resources, including referral tracking, commissions withdrawal,
                                    marketing materials, training and support, and partner
                                    recognition. This will help you maximize your success as an
                                    agent and start making referrals to Tanta Innovative right away.
                                </p>
                            </div>

                            <div className="procedure">
                                <h2>
                                    Spread the word <hr/>
                                </h2>
                                <p>
                                    Tell your friends, family, colleagues and prospects about Tanta
                                    Innovative and the great work we do. Share our story, our
                                    values, and our commitment to excellence. Tell them how we build
                                    solutions that make a difference in people’s lives and
                                    businesses.
                                </p>
                            </div>

                            <div className="procedure">
                                <h2>
                                    Connect with clients <hr/>
                                </h2>
                                <p>
                                    Connect with your clients and ask them about their business
                                    needs. Listen closely to their challenges and goals. Then, offer
                                    them a solution that meets their needs and exceeds their
                                    expectations. Show them how our team of experts can help them
                                    achieve their business objectives.
                                </p>
                            </div>

                            <div className="procedure">
                                <h2>
                                    Close the deal <hr/>
                                </h2>
                                <p className="procedure__text">
                                    Close the deal by convincing your clients to choose Tanta
                                    Innovative for their project needs. Explain the benefits of
                                    working with us, including our track record of success, our
                                    attention to detail, and our commitment to customer
                                    satisfaction.
                                </p>
                            </div>

                            <div className="procedure">
                                <h2>
                                    Earn your commission <hr/>
                                </h2>
                                <p>
                                    Once your client has signed on with Tanta Innovative and their
                                    project is underway, you’ll earn a commission based on the
                                    project’s value. But your work does’t end there! continue to
                                    stay connected with your client throughout the project to ensure
                                    their satisfaction and help identify additional opportunities.
                                </p>
                            </div>

                            <div className="procedure">
                                <h2>
                                    Enjoy the rewards <hr/>
                                </h2>
                                <p>
                                    As you continue to make successful referrals and grow your
                                    network, you’ll qualify for higher commission rates and bonus
                                    incentives. Plus, you’ll gain access to exclusive training and
                                    networking opportunities, partner appreciation events, and
                                    customized marketing support.
                                </p>
                            </div>
                        </Procedure>
                        <Note>
                            <p>
                                <span className="quote">’’</span>With this unique referral program, you can leverage
                                your personal and professional relationships to build your network
                                and grow your commission earnings. It’s a win-win situation for
                                everyone involved! your clients get the solutions they need, and
                                you get rewarded for your hard work and dedication.<span className="quote">’’</span>
                            </p>
                        </Note>
                    </Body>
                </Container>
            </Wrapper>
        </>
    );
}

export default Referral;
