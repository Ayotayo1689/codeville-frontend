import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import {RiCheckboxBlankFill} from "react-icons/ri";

function InfraApproachComponent({infraApproach}) {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gridGap: '2rem',
                marginTop: '2rem'
            }}
        >
            {infraApproach.map((item) => (
                <Box key={item.id}>
                    <Box boxShadow="0 3px 9px 3px rgba(0, 0, 0, 0.15), 0 1.5px 3px 0 rgba(0, 0, 0, 0.30)" p={5}
                         rounded="md" bg="white" mb={5}
                         height={'100%'}
                         transition="all 0.2s ease-in-out"
                         _hover={{
                             transform: 'scale(1.02)',
                         }}
                    >
                        <Text fontSize="1.25rem" my="2" textAlign={'center'} fontWeight={700}>
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

                                        <Text fontSize={'1.13rem'}> {listItem?.list}</Text>
                                    </Flex>
                                    {listItem.subList && (
                                        <Box ml={10} mt={1} fontSize={'1.13rem'}
                                        >
                                            <ul>
                                                {listItem.subList.map((subItem) => (
                                                    <li key={subItem.id}>{subItem?.item()}</li>
                                                ))}
                                            </ul>
                                        </Box>
                                    )}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            ))}
        </div>

    );
}

export default InfraApproachComponent;
