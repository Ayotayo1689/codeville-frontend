import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import {RiCheckboxBlankFill} from "react-icons/ri";

function Pricing({data}) {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gridGap: '1rem',
                marginTop: '2rem'
            }}
        >
            {data.map((item) => (
                <Box key={item.id}>
                    <Box boxShadow="0 3px 9px 3px rgba(0, 0, 0, 0.15), 0 1.5px 3px 0 rgba(0, 0, 0, 0.30)" p={5}
                         rounded="md" bg="white" mb={5}
                         height={'100%'}
                         transition="all 0.2s ease-in-out"
                         _hover={{
                             transform: 'scale(1.02)',
                         }}
                    >
                        <Text fontSize="1.1rem" my="2" fontWeight={600}>
                            {item?.title}
                        </Text>
                        <Box>
                            {item.listItems.map((listItem) => (
                                <Box key={listItem.id} py={1}>
                                    <Flex gap={2}>
                                        <RiCheckboxBlankFill
                                            style={{
                                                color: "#E9000E",
                                                minWidth: "10px",
                                                maxWidth: "10px",
                                                marginTop: "5px",
                                            }}
                                        />

                                        <Text fontSize={'1rem'}> {listItem?.list}</Text>
                                    </Flex>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            ))}
        </div>

    );
}

export default Pricing;
