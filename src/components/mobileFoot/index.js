import React  from "react";

import { Box } from "@chakra-ui/react";
import TantaSummary from "../services/itConsulting/summary";
import AllItConsultingServices from "../services/itConsulting/allITConsulting";
import ContactUs from "../contactUs";




const MobileFooter = () => {


    return (
       <Box>
           <Box p={" 0 30px"} display={{base:"block",md:"none"}} id="summary" scrollMarginTop={"150px"}>
               <TantaSummary />
           </Box>
           <Box  p={"30px"} display={{base:"block",md:"none"}} id="allServices">
               <AllItConsultingServices />
           </Box>
           <Box display={{base:"block",md:"none"}}>
               <ContactUs subtitle="We’re here to support"/>
           </Box>
       </Box>
    );
};

export default MobileFooter;
