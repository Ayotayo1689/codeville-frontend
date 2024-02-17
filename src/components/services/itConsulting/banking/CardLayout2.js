import {Flex, Grid, GridItem, Hide, Show, Text} from "@chakra-ui/react";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import styled from "styled-components";
import {breakpoints} from "../../../../../styles/theme";


const CardLayout2 = ({data}) => {
    return (
        <>
            <Hide below='md'><Grid gap="18px" templateRows="max-content"
                  templateColumns={{base: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(2, 1fr)", xl: "repeat(4, 1fr)"}}>
                {data.map((item, index) => {
                    return (
                        <Flex flexDir="column" align="center" gap="16px" py="50px" border="0.895px solid #DADFE3" key={index}>
                            <Image width="auto" height="auto" src={item?.image} alt={item?.title} />
                            <Text textAlign="center">{item?.title}</Text>
                        </Flex>
                    )
                })}
            </Grid></Hide>
            <Show below='md'>
                <Swiper
                    spaceBetween={18}
                    slidesPerView={1.5}
                    // centeredSlides={true}
                    loop={true}
                    style={{
                        "--swiper-pagination-color": "#E9000E",
                        "--swiper-navigation-size": "30px",
                        "--swiper-pagination-bullet-active-color": "#E9000E",
                        "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "5px",
                    }}
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
            </Show>
        </>
    )
}

export default CardLayout2

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