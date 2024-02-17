import { Box, Container, Flex, Heading, Image, Text, Grid } from '@chakra-ui/react'
import React from 'react'
import {SmoothDevelopmentData} from "./data"

function SmoothDevelopment() {
  return (
    <Box m={"6rem 0"} display={{base: "none", md: "block"}}>
        <Container maxW={"7xl"}>
            <Box>
                <Heading 
                    textAlign={{base: "start", md: "center" }}  
                    fontSize={{base: "1.3rem", md: "2rem"}}
                    fontWeight={"700"}
                    color={"#414141"}
                    textTransform={"capitalize"}
                >
                    What helps us run smoothly
                </Heading>
                <Heading 
                    textAlign={{base: "start", md: "center" }} 
                    fontSize={{base: "1.3rem", md: "2rem"}}
                    fontWeight={"700"}
                    color={"#E9000E"}
                    textTransform={"capitalize"}
                    >
                        software development projects
                </Heading>
                <Box
					w={"121px"}
					border={"2px solid #E9000E"}
					m={{base: "1.2rem 0", md: "1.2rem auto"}}
				></Box>
            </Box>
			<Grid 
				templateColumns={{base: "100%", md: "repeat(2, 1fr)"}} 
				gap={"1rem"} 
				p={{lg: "0 5rem", md: "0 1rem"}}
				mt={"4rem"}
			>
				{SmoothDevelopmentData.map((item) => {
					return(
						<Flex 
							key={item.id} direction={"column"} 
							align={"center"} 
							borderRadius={"5px"}
							p={".8rem"}
							gap={"1.5rem"}
                            border={"1.5233px solid #FF0000"}
						>
							<Box>
								<Image src={item.image} alt='Card image'/>
							</Box>
							<Text 
								textAlign={"center"}
								fontSize={"1.2rem"}
								fontWeight={"600"}
								color={"#2A2A2A"}
							>
								{item.title}
							</Text>
							<Text 
								fontSize={".99rem"}
								fontWeight={"400"}
								color={"#2A2A2A"}
							>
								{item.description}
							</Text>
						</Flex>
					)
				})}
			</Grid>
        </Container>
    </Box>
  )
}

export default SmoothDevelopment