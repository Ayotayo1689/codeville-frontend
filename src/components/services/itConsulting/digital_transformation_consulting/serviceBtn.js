import React from 'react'
import {Flex} from "@chakra-ui/react";
import Link from "next/link";
import appRoutes from "../../../../utils/appRoutes";
import styled from "styled-components";

const ServiceBtn = () => {
    return (
        <div>
            <Flex
                id={"pricing"}
                scrollMarginTop={"400px"}
                justifyContent={"center"}
                w={"100%"}
                m={"40px 0 20px 0"}
            >
                <Link
                    href={{
                        pathname: appRoutes.contactUs,
                        query: {
                            service:
                                "services/it-consulting/digital-transformation-consulting",
                        },
                    }}
                    service="it_consulting"
                    className="request-services"
                >
                    <Btn
                        style={{
                            borderRadius: "0",
                            padding: " 10px 40px",
                            background: "#B60E09",
                        }}
                    >
                        Get your digital transformation started
                    </Btn>
                </Link>
            </Flex></div>
    )
}
export default ServiceBtn


const Btn = styled.button`
  background: linear-gradient(90deg, #ac2121 0%, #e9000e 100%);
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: #000;
    border: 1px solid #e9000e;

  }
`;