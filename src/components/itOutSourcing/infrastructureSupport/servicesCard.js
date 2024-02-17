import {Flex, Grid, Text} from "@chakra-ui/react";
import Image from "next/image";


const ServicesCard = ({data}) => {
    return (
        <>
            <Grid gap=".8rem"
                  templateColumns={{
                      base: "repeat(1, 1fr)",
                      md: "repeat(3, 1fr)",
                      lg: "repeat(2, 1fr)",
                      xl: "repeat(3, 1fr)"
                  }}>
                {data.map((item, index) => {
                    return (
                        <Flex flexDir="column" gap="16px" p="10px" border="0.895px solid #DADFE3"
                              alignItems={{lg:"flex-start", base:"center"}}
                              borderRadius={'6px'}
                              key={index}
                              _hover={
                                  {
                                      transition: "all 0.3s ease-in-out",
                                      transform: "scale(1.01)"
                                  }}
                        >
                            <Image width="auto" height="auto" src={item?.img} alt={item?.title}/>
                            <Text textAlign={{lg:"left", base:"center"}} fontSize={'1.1rem'} fontWeight={700} color={'#9F000A'}>{item?.title}</Text>
                            <Text textAlign={{lg:"left", base:"center"}}>{item?.desc}</Text>
                        </Flex>
                    )
                })}
            </Grid>
        </>
    )
}

export default ServicesCard