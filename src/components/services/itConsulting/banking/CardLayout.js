import { Flex, Grid, Hide, Show, Text} from "@chakra-ui/react";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import styled from "styled-components";

const CardLayout = ({data}) => {
    return (
        <>
            <Hide below='md'><Grid gap="18px" templateRows="max-content" w='100%'
                  templateColumns={{base: "1fr", md: "repeat(3, 1fr)", lg: "repeat(2, 1fr)", xl: "repeat(3, 1fr)"}}>
                {data.map((item, index) => {
                    return (
                        <Flex flexDir="column" align="center" gap="16px" py="50px" border="0.895px solid #DADFE3" key={index}>
                            <Image width="auto" height="auto" src={item?.image} alt={item?.title} />
                            <Text textAlign="center">{item?.title}</Text>
                        </Flex>
                    )
                })}
            </Grid ></Hide>
            <Show below='md'>
                {/*<Box p='50px' >*/}
                <Swiper
                    spaceBetween={18}
                    slidesPerView={1.2}
                    style={{
                        "--swiper-pagination-color": "#E9000E",
                        "--swiper-navigation-size": "30px",
                        "--swiper-pagination-bullet-active-color": "#E9000E",
                        "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "5px",
                    }}
                    // loop={true}
                    height='100%'
                    className={"swiper"}
                >
                    {data.map((item, index) => {
                        return (
                        <SwiperSlide key={index}>
                            <SlideCard>
                                <Flex flexDir="column" align="center" gap="16px" py="50px" border="0.895px solid #DADFE3" key={index}>
                                    <Image width="auto" height="auto" src={item?.image} alt={item?.title} />
                                    <Text textAlign="center">{item?.title}</Text>
                                </Flex>
                            </SlideCard>
                        </SwiperSlide>
                    )}

                    )}
                </Swiper>
            {/*</Box>*/}
            </Show>
        </>
    )
}

export default CardLayout

const SlideCard = styled.div`
	background-color: #fff;
	border-radius: 10px;
	padding: 2rem 0;
	width:100%;
    height: 200px;
	margin: 2rem 1.2rem 4rem 1.2rem;
	display: flex;
    justify-content: center;
	flex-direction: row;

	@media (max-width: 1200px) {
		flex-direction: column-reverse;
	}
`;
