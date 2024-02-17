import {Flex, Grid, Text} from "@chakra-ui/react";


const AdvantageCard = ({data}) => {
    return (
        <>
            <Grid gap="1rem" templateRows="max-content"
                  mt={8}
                  templateColumns={{
                      base: "repeat(2, 1fr)",
                      md: "repeat(2, 1fr)",
                  }}>
                {data.map((item, index) => {
                    return (
                        <Flex flexDir="column" mb={6} gap="20px" px="10px" borderLeft="2px solid #DADFE3"
                              key={index}
                              _hover={
                                  {
                                      transition: "all 0.3s ease-in-out",
                                      transform: "scale(1.01)"
                                  }}
                        >
                            <Text fontSize={{base: '1.5rem', md: '2.5rem'}} fontWeight={600}>{item?.title}</Text>
                            <Text fontSize={'1.1rem'}>{item?.desc}</Text>
                        </Flex>
                    )
                })}
            </Grid>
        </>
    )
}

export default AdvantageCard