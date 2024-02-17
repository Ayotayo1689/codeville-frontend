import React from 'react'
import Image from "next/image";
import {Box} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import {brandmovers, burtech, dcfoods, divichotel, finlab, nigerPolice, weather,} from "/assets/clients";
import C_chipon  from "../../../public/assets/clients/C_chipon.png";
import cBurtech from "../../../public/assets/clients/cBurtech.png";
import C_dcfoods from "../../../public/assets/clients/C_dcfoods.png";
import C_finlab from "../../../public/assets/clients/C_finlab.png";
import C_divichotel from "../../../public/assets/clients/C_divichotel.png";
import C_police from "../../../public/assets/clients/C_police.png";
import C_weather from "../../../public/assets/clients/C_weather.png";
import sinon from "../../../public/assets/clients/sinon.png";



const images = [
    brandmovers,
    burtech,
    dcfoods,
    divichotel,
    finlab,
    nigerPolice,
    weather,
];

const coloredImages = [
    C_dcfoods,
    sinon,
    C_divichotel,
    cBurtech,
    C_chipon,
    C_police,
    C_finlab,
    C_weather,
];

const LogoMarquee = ({colored}) => {
    const imagesToRender =  colored ? coloredImages : images
    return (
        <Marquee gradient={false}>
            {imagesToRender.map((image, index) => (
                <Box key={index} mr="10px">
                    <Image src={image} alt="Logo" width={100} height={50}/>
                </Box>
            ))}
        </Marquee>
    );
}

export default LogoMarquee