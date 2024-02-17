import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import styled from "styled-components";

const PageHeader = ({ heading, title }) => {
    return (
        <Container>
        <Box
            minHeight={{ base: "23vh", lg: "30vh" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            mb={{ base: "1.2rem" }}
            backgroundImage={{
                base: "url(/assets/mobile-bg.png)",
                lg: "/assets/headerbg.png",
            }}
            backgroundPosition={"center top"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"100%"}
            textAlign={{ base: "center" }}
            mt={'6rem'}
            position={'relative'}
            top={'0'}
            width={'100%'}
            className={'img'}

        >
            <Text
                display={"block"}
                textTransform={"uppercase"}
                fontSize={{ base: "1rem", lg: "1.125rem" }}
                textAlign={{ base: "center" }}
                color={'#636363'}
                mb={2}
                mt={{ base: "1rem", md: '4rem', lg: "0" }}
                className={'header'}

            >
                {heading}
            </Text>
            <Heading
                variant={"h5"}
                textTransform={"uppercase"}
                fontSize={{ base: "1.5rem", lg: "2.9rem" }}
                px={{ base: "0.4rem" }}
                mt={{ base: "2rem", lg: "0" }}
                fontWeight={700}

            >
                {title}
            </Heading>
        </Box>
        </Container>
    );
};

export default PageHeader;


const Container = styled.div`
    
    @media (max-width: 468px) {
      .img {
        margin-top: 8rem;
      }
        .header {
          margin-top: -2rem;
        }
        }
        
        `;