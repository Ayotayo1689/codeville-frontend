import Image from "next/image";
import React, {useState} from "react";
import Arrow from "../../../public/assets/solutions/curlyarrow.svg";
import {BannerSection, BannerWrapper} from "../../../styles/home.style";
import {Button, Container, Flex, Modal, ModalBody, ModalContent, ModalOverlay, Text} from "@chakra-ui/react";
import Link from "next/link";

const CalculatorBanner = () => {

	const [modalOpen, setModalOpen] = useState(false);
	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};
	return (
		<BannerSection>
			<Container maxW={"7xl"}>
				<BannerWrapper>
					<div className="banner-details calculator">
						<div>
							<p className="details-title2">
								Get an estimate on the cost of your project with our
							</p>
						</div>
						<div className="cta-wrapper dev_calc">
							<button onClick={() => toggleModal()}>Software Development cost Calculator</button>
							<Image
								src={Arrow}
								alt="arrow"
								width={50}
								height={50}
								className="arrow"
							/>
						</div>
					</div>
				</BannerWrapper>
				<Modal isOpen={modalOpen} onClose={toggleModal}>
					<ModalOverlay />
					<ModalContent>
						{
							servicesMenu.map((item, index) => (
								<ModalBody key={index} mt={1}>
									<Flex
										padding={"0 1rem"}
										borderBottom={"1px solid #E9E9E9"}
									>
										<Link href={item?.url}>
											<Text pb={2} fontSize={"1rem"}>{item?.label}</Text>
										</Link>
									</Flex>
								</ModalBody>
							))
						}
						<Button mt={-2} onClick={toggleModal}>Close</Button>
					</ModalContent>
				</Modal>
			</Container>
		</BannerSection>
	);
};

export default CalculatorBanner;


const servicesMenu = [
	{
		label: "Software Development",
		url: "/services/software-development-services",
	},
	{ label: "Testing & QA", url: "/services/qa-testings" },
	{ label: "Application Services", url: "/services/application-services" },
	{ label: "Cyber Security", url: "/services/cyber-security" },
	{ label: "IT Consulting", url: "/services/it-consulting" },
	{ label: "Data Analytics", url: "/services/data-analytics" },
	{ label: "IoT Services", url: "/services/iot-services" },
	{ label: "UX/UI Design", url: "/services/ui-ux" },
	{
		label: "Infrastructure Services",
		url: "/services/infrastructure-services",
	},
	{ label: "IT Outsourcing", url: "/services/it-outsourcing" },
];