import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import {RiCheckboxBlankFill} from "react-icons/ri";

const AdvantagesOfLogistics = ({advantages}) => {
    return (
        <Box mt={"-2rem"}>
            {advantages.map((advantage) => (
                <Box key={advantage.id}>
                    <Text
                        lineHeight={"2.35088rem"}
                        color={"#6D0805"}
                        fontSize={"1.3rem"}
                        fontWeight={600}
                        py={4}
                    >
                        {advantage.title}
                    </Text>
                    {advantage.subtitle && <Text pb={2}>{advantage?.subtitle}</Text>}
                    {advantage.items && (
                        <Box>
                            {advantage.items.map((item) => (
                                <Flex key={item.id} gap={2} color={'#404243'}>
                                    <RiCheckboxBlankFill
                                        style={{
                                            color: "#6D0805",
                                            minWidth: "10px",
                                            maxWidth: "10px",
                                            marginTop: "8px",
                                        }}
                                    />
                                    <Text py={1}>{item?.name}</Text>
                                </Flex>
                            ))}
                        </Box>
                    )}
                    {advantage.desc && <Text lineHeight={"170%"}>{advantage?.desc()}</Text>}
                </Box>
            ))}
        </Box>
    );
};

export default AdvantagesOfLogistics;
