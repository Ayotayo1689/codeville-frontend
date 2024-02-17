import React from "react";
import {Associates, Experience, HeroSection, HeroWrapper,  } from "../../../styles/home.style";
import Marquee from "react-fast-marquee";
import {brandmovers, burtech, dcfoods, divichotel, finlab, nigerPolice, weather,} from "/assets/clients";
import Image from "next/image";
import {Box} from "@chakra-ui/react";


const images = [
    brandmovers,
    burtech,
    dcfoods,
    divichotel,
    finlab,
    nigerPolice,
    weather,
];
const Hero = ({hero}) => {
    const LogoMarquee = () => {
        return (
            <Marquee gradient={false}>
                {images.map((image, index) => (
                    <Box key={index} mr="15px">
                        <Image src={image} alt="Logo" width={150} height={80} />
                    </Box>
                ))}
            </Marquee>
        );
    };
    return (
        <div>

            <HeroSection>
                {
                    hero.map((item) => (
                        <HeroWrapper key={item.id}>
                            <p className="headline">{item?.slogan}</p>
                            <h1 className="heading">{item?.title}</h1>
                            <div className="red-line"></div>
                            <Experience>
                                <div>
                                    <h2>{item?.experience_count}</h2>
                                    <h3>YEARS EXPERIENCE IN IT CONSULTING</h3>
                                </div>
                                <div>
                                    <p className="details">
                                        {item?.description}
                                    </p>
                                </div>
                            </Experience>

                            <Associates>
                                <div className="wrapper">
                                    <div className="carousel">
                                        <div>
                                            <LogoMarquee logos={images}/>
                                        </div>
                                    </div>
                                </div>
                            </Associates>
                        </HeroWrapper>
                    ))
                }
            </HeroSection>
        </div>
    );
};

export default Hero;
