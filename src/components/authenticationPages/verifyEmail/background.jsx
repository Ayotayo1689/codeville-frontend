
import React from "react";
import   {Box} from "@chakra-ui/react";


function Background () {
    return(
        <Box bg={"#F8F7FA"} height={"63.5rem"} width={"40rem"} borderRadius={"20px"}>
            <Box  backgroundImage="url('/assets/login/Shape.png')" height={"20.5rem"} width={"40rem"}
                  position={"absolute"}
                  top={"68%"}

            >
            </Box>
            <Box
                backgroundImage="url('/assets/login/OutlineCircle.png')"
                bgRepeat={"no-repeat"}
                height={"26.563rem"}
                width={"26.563rem"}
                alignItems={"center"}
                >

                <Box
                    backgroundImage="url('/assets/login/EllipseBackground.png')"
                    bgRepeat={"no-repeat"}
                    height={"26.563rem"}
                    width={"26.563rem"}
                    alignItems={"center"}
                >

                </Box>
            </Box>
        </Box>
    )
}
export default Background