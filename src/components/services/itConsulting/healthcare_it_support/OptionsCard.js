import {Button, Flex, Text} from "@chakra-ui/react";
import {AiOutlineArrowRight} from "react-icons/ai";
import React from "react";
import Link from "next/link";
import appRoutes from "../../../../utils/appRoutes";

const OptionsCard = ({item}) => {
    return (
        <>
            <Flex p="18px" flexDir="column" align="center" gap="18px" py="50px" border="0.895px solid #DADFE3" borderTop="9px solid red"
                  sx={{background: "rgba(255, 255, 255, 0.00)",
                      boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.05)"}}>
                <Text fontSize="18px" mb="27px" fontWeight="700" textAlign="center">{item?.title}</Text>
                <Text fontSize="18px" mb="12px" textAlign="center">{item?.description}</Text>
                <Link href={{
                    pathname:"/industries/health-care/health-care-forms",
                    query:{ id: item?.linkId}
                }}
                      service="services/it-consulting/healthcare-it-support"
                      className="request-services"
                      >
                <Button borderRadius="0px" variant="outline" colorScheme="#E9000E" color="#E9000E" p="13px 21px" rightIcon={<AiOutlineArrowRight/>}>I need this</Button>
                </Link>
            </Flex>
        </>
    )
}

export default OptionsCard