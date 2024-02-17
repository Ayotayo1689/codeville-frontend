import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Scrollbar } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { colors } from "../../../styles/theme";
import Image from "next/image";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Hide,
	Text,
	Link,
} from "@chakra-ui/react";
import axiosInstance from "../../utils/config";
import {
	brandmovers,
	burtech,
	dcfoods,
	divichotel,
	finlab,
	nigerPolice,
	weather,
} from "../../../assets/clients";
import Marquee from "react-fast-marquee";

const imagesIcon = [
	brandmovers,
	burtech,
	dcfoods,
	divichotel,
	finlab,
	nigerPolice,
	weather,
];
export const LogoMarquee = () => {
	return (
		<Marquee gradient={false}>
			{imagesIcon.map((image, index) => (
				<Box key={index} mr="1rem">
					<Image src={image} alt="Logo" width={100} height={50} />
				</Box>
			))}
		</Marquee>
	);
};

export const sideBarData = [
	{
		title: "Why Choose us",
		link: "#whyTanta",
	},
	{
		title: "Advantaged of working with us",
		link: "#TantaAdvantage",
	},
	{
		title: "Our Happy Clients",
		link: "#ClientReview",
	},
	{
		title: "Meeting your goals",
		link: "#Goal",
	},
	// {
	//     title: "Selected Projects",
	//     link: "#Experiences",
	// },
	{
		title: "Trust Our Experience",
		link: "#Experiences",
	},
];

export const sideBarList = [
	{
		id: "1",
		title: "10 years in digital design.",
	},
	{
		id: "2",
		title: "UI and UX design teams with years of practical experience.",
	},
	{
		id: "3",
		title: "Responsive and performance-driven design.",
	},
	{
		id: "4",
		title: "Focus on conversions.",
	},
	{
		id: "5",
		title: "Adherence to SEO and, if requested, WCAG2 regulations.",
	},
	{
		id: "6",
		title: "A Well-established agile processes.",
	},
];

export const sideBarList2 = [
	{
		id: "1",
		title: "13 years in IT and 11 years in IoT.",
	},
	{
		id: "2",
		title:
			"Data scientists with 20+ years in the field and hands-on experience on IoT projects.",
	},
	{
		id: "3",
		title:
			"9 Microsoft Gold competencies including Application Development, Application Integration, Data Platform, and Data Analytics.",
	},
	{
		id: "4",
		title: "Mature quality management system proven by ISO 9001.",
	},
	{
		id: "5",
		title: "Information security management system proven by ISO 27001.",
	},
	{
		id: "6",
		title:
			"IoT solutions for about 10 industries including manufacturing, construction, oil and gas, and healthcare.",
	},
];

export const ProductImg = () => {
	const [image, setImage] = useState([]);
	const swiperRef = useRef(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		let data = [];
		try {
			const resp = await axiosInstance.get(
				"/api/servicepage/uiuxpage/slider-images/"
			);

			data = resp.data;
			setImage(data.image_urls);
		} catch (error) {}
	};

	const goToNextSlide = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideNext();
		}
	};

	const goToPrevSlide = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slidePrev();
		}
	};

	return (
		<Container>
			<Swiper
				ref={swiperRef}
				modules={[Pagination, Scrollbar, A11y]}
				pagination={{ clickable: true }}
				slidesPerView={1}
				spaceBetween={10}
				style={{
					"--swiper-pagination-color": "#E9000E",
					"--swiper-pagination-bullet-inactive-color": "#D9D9D9",
					"--swiper-pagination-bullet-inactive-opacity": "1",
					"--swiper-pagination-bullet-size": "10px",
					" -swiperPaginationBulletWidth": "15px",
					"--swiper-pagination-bullet-height": "8px",
					"--swiper-pagination-bullet-horizontal-gap": "12px",
					"--swiper-pagination-bullet-vertical-gap": "20px",
					"--swiper-pagination-bullet-border-radius": "0px",
				}}
			>
				<Grid
					templateColumns={{
						base: "100%",
						md: "repeat(2, 1fr)",
						lg: "repeat(3, 1fr)",
					}}
					gap={"2.5rem"}
				>
					{image.map((img, index) => {
						return (
							<SwiperSlide key={index}>
								<Flex
									justifyContent={"space-between"}
									marginTop={"2rem"}
									alignItems={"center"}
								>
									<BsArrowLeft
										onClick={goToPrevSlide}
										fontSize={"2rem"}
										fontWeight={"700"}
									/>
									<Image src={img.url} alt="image" width={430} height={200} />
									<BsArrowRight
										onClick={goToNextSlide}
										fontSize={"2rem"}
										fontWeight={"700"}
									/>
								</Flex>
								<Grid justifyContent={"center"}>
									<Text my={"1.5rem"}>{img.name}</Text>
									<Box
										w={"4rem"}
										height={".2rem"}
										bg={colors.primaryColor}
										mt={"2"}
									></Box>
								</Grid>
							</SwiperSlide>
						);
					})}
				</Grid>
			</Swiper>
		</Container>
	);
};

export const advatagesOfTanta = [
	{
		title: "Competitive design",
		discription:
			"Our web design process at Tanta Innovative involves combining your brand style with the latest web design trends, informed by data gathered from competitor analysis, market research, and user feedback. This approach enables us to create unique, competitive designs that not only strengthen your brand identity but also align with your brand values and support your marketing objectives",
	},
	{
		title: "Focus on your business objectives",
		discription:
			"We prioritize your specific marketing and customer service objectives when designing websites and web portals. Our team works closely with stakeholders to gain a deep understanding of your business processes and develop a design that aligns with your individual conversion strategy. By establishing productive cooperation with our clients, we ensure that our web design solutions empower their brand and contribute to their overall success.",
	},
	{
		title: 'Stand out in the digital landscape."',
		discription:
			"At Tanta Innovative, we prioritize user research in every web design project. By analyzing your users' needs, preferences, and behaviors, we create designs that are tailored to your target audience and deliver exceptional user experiences. Whether you're starting from scratch or enhancing an existing web solution, we use data-driven insights to exceed your users' expectations and drive conversions.",
	},
];

const serviceTypes = [
	{
		title: "Ecommerce Websites",
		discription:
			" We specialize in designing fresh and elegant ecommerce sites that drive customer lifetime value and promote up-selling and cross-selling. Our team combines the latest design trends with best practices in ecommerce to deliver exceptional user experiences and boost your online sales.",
		img: "/assets/ui_ux/sis.png",
	},
	{
		title: "Beautiful and Intuitive B2C Website and Portal Designs",
		discription:
			" A global supply chain management company, sought to improve transparency and traceability across their operations. A global supply chain management company, sought to improve transparency and traceability across their operations.A global supply chain management company, sought to improve transparency and traceability across their operations.",
		img: "/assets/ui_ux/sis.png",
	},
	{
		title: "Sleek and Modern B2B Website and Portal Designs",
		discription:
			" A global supply chain management company, sought to improve transparency and traceability across their operations. A global supply chain management company, sought to improve transparency and traceability across their operations.A global supply chain management company, sought to improve transparency and traceability across their operations.",
		img: "/assets/ui_ux/sis.png",
	},
	{
		title: "Government Website Design",
		discription:
			" A global supply chain management company, sought to improve transparency and traceability across their operations. A global supply chain management company, sought to improve transparency and traceability across their operations.A global supply chain management company, sought to improve transparency and traceability across their operations.",
		img: "/assets/ui_ux/sis.png",
	},
	{
		title: "SaaS Website Design",
		discription:
			" A global supply chain management company, sought to improve transparency and traceability across their operations. A global supply chain management company, sought to improve transparency and traceability across their operations.A global supply chain management company, sought to improve transparency and traceability across their operations.",
		img: "/assets/ui_ux/sis.png",
	},
];

export const ServiceTabs = () => {
	return (
		<Box>
			<Accordion defaultIndex={[0]} allowMultiple my={"2rem"}>
				{serviceTypes.map((item, key) => {
					return (
						<AccordionItem
							key={key}
							my={"1rem"}
							bg={"#D9D9D93B"}
							borderRadius={"3xl"}
							boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
							px={"1rem"}
							py={"0.5rem"}
						>
							<AccordionButton
								color={"#B20000"}
								fontSize={{ lg: "3xl", base: "18px" }}
							>
								<Text
									fontSize={{ base: "16px", lg: "2xl" }}
									fontWeight={"bold"}
									flex="1"
									textAlign="left"
									color={"black"}
								>
									{item.title}
									<span
										style={{
											display: "block",
											borderBottom: "3px solid #E9000E",
											width: "3rem",
											height: "3px",
											borderRadius: "4px",
										}}
									></span>
								</Text>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel pb={2}>
								<Flex>
									<Box pt={"1rem"} lineHeight={"6"}>
										<Text pb={"3rem"} fontSize={{ base: "14px", lg: "20px" }}>
											{item.discription}
										</Text>
										<Link href={"/contact-us"}>
											<Button
												fontSize={{ base: "14px", lg: "20px" }}
												bg={"#F2666E"}
												p={"1rem 1.2rem"}
												_hover={"none"}
											>
												Yes! I need This
											</Button>
										</Link>
									</Box>
									<Hide below="md">
										<Image src={item.img} alt="" width={320} height={120} />
									</Hide>
								</Flex>
							</AccordionPanel>
						</AccordionItem>
					);
				})}
			</Accordion>
		</Box>
	);
};
