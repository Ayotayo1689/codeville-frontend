import {Flex, Text} from "@chakra-ui/react";

const HealthcareWeSupportCard = ({data}) => {
    return (
            <Flex flexDir="column" gap="6px">
                <Text color="#222" fontWeight="700" fontSize="32px">{data?.title}</Text>
                <Text color="#3B3C3D" fontWeight="400" lineHeight="32px" fontSize="18px">{data?.description}</Text>
            </Flex>
    )
}

export default HealthcareWeSupportCard