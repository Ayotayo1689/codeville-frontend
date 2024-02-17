import React, { useState } from "react";
import { Container, Content, Wrapper } from "../../styles/layout.style";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SmallSidebar from "../components/MobileSideBar/SmallSidebar";
import HeadData from "./headData";
import { useRouter } from "next/router";
import Script from "next/script"; // Import next/script
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() =>
	import("../../styles/layout.style").then((mod) => mod.Content)
);
const LandingLayout = ({ children }) => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const toggleSideBar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	return (
		<Container>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-NWCBB2V5VY"
				strategy="afterInteractive"
			/>
			<Script id="gtag-init" strategy="afterInteractive">
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                        dataLayer.push(arguments);
                    }
                    gtag('js', new Date());
                    gtag('config', 'G-NWCBB2V5VY');
                `}
			</Script>

			<HeadData />
			<SmallSidebar
				isSidebarOpen={isSidebarOpen}
				toggleSideBar={toggleSideBar}
			/>
			<Navbar toggleSideBar={toggleSideBar} />
			<Wrapper>
				<DynamicComponent>{children}</DynamicComponent>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default LandingLayout;
