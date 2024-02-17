import React from "react";

import {BannerImage} from "./banner.styles";
import {Image} from "@chakra-ui/react";

function Banners() {
    return (
        <>
            <BannerImage>
                <div className="banner-img">
                    <Image
                        src="/assets/careerAssets/careerShape.png"
                        alt="career banner"
                        width={"7rem"}
                        height={"8rem"}
                    />
                    <div className={'heading'}>

                        <h1>CAREERS</h1>
                    </div>
                </div>
            </BannerImage>
        </>
    );
}

export default Banners;
