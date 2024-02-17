import { Flex, Box, Text, Link } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import {useState} from "react";
import styled from "styled-components";

function Sidebar({ title, items, height}) {
    const [activeLink, setActiveLink] = useState({});
    return (
        <SidebarContainer>
        <Flex
            flexDir="column"
            boxShadow={"lg"}
            height={height}
            minW={"350px"}
            position="sticky"
            top="10rem"
            pb={"1rem"}
            borderBottom={"lg"}
            width={{ base: "100%", lg: "35%" }}
            className="side-bar"
        >
            <Text
                as="h2"
                fontSize={"2xl"}
                fontWeight={"semibold"}
                mb={"1rem"}
                color={"white"}
                textAlign={"center"}
                paddingBlock={".5rem"}
                borderTopRadius={"lg"}
                background={
                    "radial-gradient(144.82% 1073.17% at 144.82% 108.82%, #C90303 0%, #981E13 100%)"
                }
            >
                {title}
            </Text>
            <Box px={"1rem"}>
                {items.map((item, index) => (
                    <Flex
                        paddingInline={".4rem"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        key={index}
                        p={".3rem"}
                    >
                        <Link
                            onClick={() => {
                                setActiveLink({ [item.goto]: true });
                            }}
                            style={{
                                color: activeLink[item.goto] ? "red" : "#2A2A2A",
                                fontSize: "18px",
                                fontWeight: "400",
                                cursor: "pointer",
                                width: "100%",
                            }}
                            href={item.goto}
                        >
                            {item.title}
                        </Link>

                        <MdKeyboardArrowRight
                            style={{ marginLeft: "47px" }}
                            cursor={"pointer"}
                            size={"2rem"}
                        />
                    </Flex>
                ))}
            </Box>
        </Flex>
        </SidebarContainer>
    );
}

export default Sidebar;

const SidebarContainer = styled.div`
   @media (max-width: 992px) {
    .side-bar {
      display: none;
    }
  }
  `;