import React from "react";
import styled from "styled-components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { breakpoints, colors } from "../../../../styles/theme";
import { A11y, Pagination, Scrollbar } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { Knowledge } from "../../../../public/assets/healthcare";

const tabItems = [
	{
		title:
			"Knowledge Management Software Support\n" +
			"for a Human and Environmental Health\n" +
			"Corporation",
		details:
			"For 10+ years, Tanta Innovative has provided L1-L3 support of a\n" +
			"knowledge management solution used by drug discovery and\n" +
			"biotechnology specialists, troubleshooting issues and introducing\n" +
			"enhancements. Over the years of application support by\n" +
			"Tanta Innovative, the end user satisfaction rate grew to 98%.",
		link: "/software-development-services",
	},
	{
		title: "Application Services",
		details:
			"Our team is packed with experts who love nothing more than helping mid-sized and large firms get the most out of their digital solutions. We're here to help you build, test, safeguard, manage, migrate, and optimize your apps, ensuring they're always ticking along nicely and providing the best possible total cost of ownership (TCO). Plus, we're here for the long haul. Once your app is up and running, we're still around for any maintenance or support you might need.",

		link: "/application-services",
	},
	{
		title: "Cyber Security",
		details:
			"If you're thinking about modernizing your existing apps or need to integrate them more smoothly, we've got your back. Concerned about security? We're on it, making sure your apps are solid and secure. If you're starting from scratch and need a new app built, or have an existing one that needs testing, we're ready to roll.",

		link: "/cyber-security",
	},
	{
		title: "IT Consulting",
		details:
			"Considering a digital makeover? We're your go-to guides, ready to help you navigate through your Digital Transformation journey, we are stacked with experts who are just a call away to help you develop and implement a winning IT strategy. We're here to assist you through a seamless digital transformation and system integration, and we love nothing more than helping you enhance your digital customer experience.",

		link: "/it-consulting",
	},
	{
		title: "UX/UI Design",
		details:
			"When it comes to design, we're passionate about making things look good and work even better. We keep our fingers on the pulse of the latest trends in UI/UX design, so we're always ready to bring fresh, innovative ideas to your websites, SaaS, and web/mobile apps. But we don't just chase trends - we take the time to understand your unique needs and goals and weave them into our designs. This way, we ensure that our creations are not only eye-catching but also truly reflect your business and help it thrive. Whether you need a slick User Interface (UI) design, a Responsive Web App design that looks great on any device, a specific Software-as-a-Service (SaaS) UI design, an Ecommerce Website Design that turns visitors into customers, or a User Experience (UX) Design that makes every interaction a pleasure, we've got you covered.",

		link: "/ux_ui",
	},
	{
		title: "Data Analytics",
		details:
			"We are a team of data analytics enthusiasts who are passionate about helping businesses harness the power of data to make informed decisions, foresee trends, and improve performance. We stay updated with the latest trends in data analytics and offer a wide range of data analytics services, including data management, data visualization, predictive analytics, machine learning, and AI integration. We also offer consulting and strategy services to help businesses get the most out of their data. We can help you with a variety of data analytics tasks, such as cleaning, organizing, and securing data; visualizing data in a way that is easy to understand and impactful; using predictive analytics to foresee trends and make better decisions; using machine learning to automate tasks and improve efficiency; and integrating AI into your operations to improve decision-making and customer service.",

		link: "/data-analytics",
	},
	{
		title: "Testing & QA",
		details:
			"Our team of highly professional QA Engineers will provide you with top-notch QA and testing services, Weather you are starting from scratch or looking to enhance your QA processes, we've got you covered. We will take care of QA while you focus on core tasks in your project. With our security testing, you can be rest assured your app is free from vulnerabilities. We also conduct fuctional testing to ensure your app is performing as expected, usability testing to guarantee a user-friendly experience, and performance testing to confirm your app's ability handle various situations. To streamline the entire process, we can implement test automation, making it faster and more efficient.",

		link: "/qa-testings",
	},
];
const Projects = () => {
	const truncateText = (text, maxLength) => {
		if (text.length <= maxLength) {
			return text;
		}
		return text.slice(0, maxLength) + "...";
	};
	return (
		<MobileWrapper>
			<h2>Our Featured Managed IT Services Projects</h2>
			<div className="red-line_small"></div>
			<Swiper
				modules={[Pagination, Scrollbar, A11y]}
				pagination={{ clickable: true }}
				slidesPerView={1}
				spaceBetween={10}
				style={{
					"--swiper-pagination-color": "#E9000E",
					"--swiper-pagination-bullet-inactive-color": "#D9D9D9",
					"--swiper-pagination-bullet-inactive-opacity": "1",
					"--swiper-pagination-bullet-size": "10px",
					" --swiper-pagination-bullet-width": "15px",
					"--swiper-pagination-bullet-height": "8px",
					"--swiper-pagination-bullet-horizontal-gap": "12px",
					"--swiper-pagination-bullet-vertical-gap": "20px",
					"--swiper-pagination-bullet-border-radius": "0px",
				}}
			>
				{tabItems.map((offer, index) => (
					<SwiperSlide key={index}>
						<div
							style={{
								padding: "2rem 0",
							}}
						>
							<Card>
								<Image src={Knowledge} alt={"learning"} />
								<CardContent className="card">
									<h3>{offer.title}</h3>
									<p>{truncateText(offer.details, 200)}</p>
									<LinkContainer>
										<Link href={""}>
											Project details <BsArrowRight />
										</Link>
									</LinkContainer>
								</CardContent>
							</Card>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</MobileWrapper>
	);
};

export default Projects;
const LinkContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 2rem;
	margin-bottom: 1rem;
	align-self: end;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-size: 1rem;
		font-weight: 600;
		color: #e9000e;
		text-align: end;

		svg {
			font-size: 1.5rem;
			padding-top: 5px;
		}
	}
`;

const Card = styled.div`
	background: #fff;
	padding: 1.5rem 0.9rem;
	border-radius: 4px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	margin-bottom: 1rem;
	display: flex;
	justify-content: center;
	flex-direction: row;

	img {
		width: 300px;
		height: 200px;
	}

	${breakpoints.sm} {
		display: flex;
		flex-direction: column;
	}
`;
const CardContent = styled.div`
	padding: 1.5rem 0.9rem;

	h3 {
		font-size: 1rem;
		font-weight: 600;
		color: #444444;
		margin-bottom: 1rem;
	}

	p {
		font-size: 0.9rem;
		font-weight: 400;
		color: #636363;
	}
	${breakpoints.sm} {
		padding: 1rem 0.6rem;
	}
`;
export const MobileWrapper = styled.div`
	padding: 2rem 0;
	margin: 2rem;

	${breakpoints.sm} {
		margin: 0.6rem;
	}

	h2 {
		font-weight: 600;
		font-size: 30px;
		line-height: 28px;
		text-align: start;
		color: ${colors.textColor};
		padding-bottom: 0.9rem;
		margin-top: 0.7rem;
		padding-left: 1rem;
	}

	.red-line_small {
		width: 60px;
		height: 5px;
		background: ${colors.primaryColor};
		border-radius: 3px;
		margin-left: 1rem;
	}
`;
