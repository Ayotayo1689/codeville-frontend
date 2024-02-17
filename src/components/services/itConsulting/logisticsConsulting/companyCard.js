import {Flex, Grid, Text} from "@chakra-ui/react";
import Image from "next/image";


const CompaniesCard = ({data}) => {
    return (
        <>
            <Grid gap=".8rem" templateRows="max-content"
                  templateColumns={{
                      base: "repeat(2, 1fr)",
                      md: "repeat(3, 1fr)",
                      lg: "repeat(2, 1fr)",
                      xl: "repeat(3, 1fr)"
                  }}>
                {data.map((item, index) => {
                    return (
                        <Flex flexDir="column" align="center" gap="16px" p="10px" border="0.895px solid #DADFE3"
                              key={index}
                              _hover={
                                  {
                                      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                                      transition: "all 0.3s ease-in-out",
                                      transform: "scale(1.01)"
                                  }}
                        >
                            <Image width="auto" height="auto" src={item?.img} alt={item?.title}/>
                            <Text textAlign="center" fontSize={'1.1rem'} fontWeight={700}>{item?.title}</Text>
                            <Text textAlign="left">{item?.desc()}</Text>
                        </Flex>
                    )
                })}
            </Grid>
        </>
    )
}

export default CompaniesCard