import {Box, Flex, Grid, Hide, Show, Text} from "@chakra-ui/react";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import styled from "styled-components";

const CardLayout3 = ({data, image}) => {
    return (
        <>
            <Hide below='md'><Grid gap="18px" templateRows="max-content"
                  templateColumns={{base: "1fr", md: "repeat(2, 1fr)"}}>
                {data.map((item, index) => {
                    return (
                        <Flex p="18px" flexDir="column" align="center" gap="18px" py="50px" border="0.895px solid #DADFE3" borderTop="9px solid red"
                        sx={{borderRadius: "0px 0px 10px 10px",
                            background: "#FFF",
                            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
                              key={index}>
                            <Box bg="#E86B71" borderRadius="3px" p="10px">
                                <Image width="auto" height="auto" src={image} alt={item?.title} />
                            </Box>
                            <Text fontSize="18px" fontWeight="700" textAlign="center">{item?.title}</Text>
                            <Text fontSize="18px" textAlign="center">{item?.description}</Text>
                        </Flex>
                    )
                })}
            </Grid></Hide>
            <Show below='md'>
                <Swiper
                    spaceBetween={26}
                    slidesPerView={1.3}
                    style={{
                        "--swiper-pagination-color": "#E9000E",
                        "--swiper-navigation-size": "30px",
                        "--swiper-pagination-bullet-active-color": "#E9000E",
                        "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "5px",
                    }}
                    // centeredSlides={true}
                    loop={true}
                    className={"swiper"}
                >
                    {data.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <SlideCard>
                                    <Flex p="18px" flexDir="column" align="center" gap="18px" py="50px" border="0.895px solid #DADFE3" borderTop="9px solid red"
                                          sx={{borderRadius: "0px 0px 10px 10px",
                                              background: "#FFF",
                                              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
                                          key={index}>
                                        <Box bg="#E86B71" borderRadius="3px" p="10px">
                                            <Image width="auto" height="auto" src={image} alt={item?.title} />
                                        </Box>
                                        <Text fontSize="18px" fontWeight="700" textAlign="center">{item?.title}</Text>
                                        <Text fontSize="18px" textAlign="center">{item?.description}</Text>
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

export default CardLayout3

const SlideCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem 0;
  width:100%;
  margin: 2rem 1.2rem 4rem 1.2rem;
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

