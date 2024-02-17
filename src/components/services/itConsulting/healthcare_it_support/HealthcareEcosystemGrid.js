import {Box, Flex, ListItem, UnorderedList} from "@chakra-ui/react";

const HealthcareEcosystemGrid = () => {
    return (
        <>
            <Flex p={{base:"0px 0px 10px 20px",md:"0"}} flexDir={{base:"column",md:"row"}} gap={{base:"20px",md:"10px"}}>
                <Box flex={"1"}>
                    <UnorderedList display="flex" flexDir="column" gap="20px">
                        <ListItem>Networks.</ListItem>
                        <ListItem>On-premises data centers.</ListItem>
                        <ListItem>Cloud services (IaaS, PaaS, SaaS).</ListItem>
                        <ListItem>Cybersecurity tools (SIEM, IAM, firewalls,</ListItem>
                        <ListItem>Medical applications and their integrations (EHR, HIS, practice management systems, telemedicine apps, patient and physician apps and portals, hospital apps, user apps for medical devices, etc.).</ListItem>
                    </UnorderedList>
                </Box>
                <Box flex={"1"}>
                    <UnorderedList display="flex" flexDir="column" gap="20px">
                        <ListItem>Data management and storage (databases, data warehouses, data lakes).</ListItem>
                        <ListItem>Messaging and data transfer systems.</ListItem>
                        <ListItem>Application development infrastructure. </ListItem>
                        <ListItem>Desktops, tablets, mobile devices.</ListItem>
                        <ListItem>Medical devices infrastructure.</ListItem>
                        <ListItem>IoT devices (smart wearable and stationary medical devices, e.g., cardiac monitors, CT scanners)</ListItem>
                    </UnorderedList>
                </Box>
            </Flex>
        </>
    )
}

export default HealthcareEcosystemGrid