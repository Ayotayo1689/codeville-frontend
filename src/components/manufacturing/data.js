import AboutImg from "../../../public/assets/itOutSourcing/img5.svg";

//Services Images
import S1 from "../../../public/assets/consulting/service1.png";

//Expertise Images
import Ex1 from "../../../public/assets/consulting/ex1.svg";
import Ex2 from "../../../public/assets/consulting/ex2.svg";
import Ex3 from "../../../public/assets/consulting/ex3.svg";
import Ex4 from "../../../public/assets/consulting/ex4.svg";
import Ex5 from "../../../public/assets/consulting/ex5.svg";
import Ex6 from "../../../public/assets/consulting/ex6.svg";
import Ex7 from "../../../public/assets/consulting/ex7.svg";
import Ex8 from "../../../public/assets/consulting/ex8.svg";

//Customer  Images
import C1 from "../../../public/assets/consulting/c1.svg";
import C2 from "../../../public/assets/consulting/c2.svg";
import C3 from "../../../public/assets/consulting/c3.svg";
import C4 from "../../../public/assets/consulting/c4.svg";
import C5 from "../../../public/assets/consulting/c5.svg";
import C6 from "../../../public/assets/consulting/c6.svg";
import C7 from "../../../public/assets/consulting/c7.svg";
import C8 from "../../../public/assets/consulting/c8.svg";

//Business Images
import B1 from "../../../public/assets/consulting/b1.svg";
import B2 from "../../../public/assets/consulting/b2.svg";
import B3 from "../../../public/assets/consulting/b3.svg";
import B4 from "../../../public/assets/consulting/b4.svg";
import B5 from "../../../public/assets/consulting/b5.svg";

//Portfolio Images
import P1 from "../../../public/assets/consulting/p1.png";
import P2 from "../../../public/assets/consulting/p2.png";
import P3 from "../../../public/assets/consulting/p3.png";
import P4 from "../../../public/assets/consulting/p4.png";
import P5 from "../../../public/assets/consulting/p5.png";
import P6 from "../../../public/assets/consulting/p6.png";
import P7 from "../../../public/assets/consulting/p7.png";
import P8 from "../../../public/assets/consulting/p8.png";
import P9 from "../../../public/assets/consulting/p9.png";
import s1 from "../../../public/assets/itOutSourcing/img6.svg";
import s2 from "../../../public/assets/itOutSourcing/img7.svg";
import s3 from "../../../public/assets/itOutSourcing/img8.svg";
import s4 from "../../../public/assets/itOutSourcing/img10.svg";
import su1 from "../../../public/assets/itOutSourcing/img11.png";
import su2 from "../../../public/assets/itOutSourcing/img12.png";
import su3 from "../../../public/assets/itOutSourcing/img13.png";
import su4 from "../../../public/assets/itOutSourcing/img14.png";
import su5 from "../../../public/assets/itOutSourcing/img15.png";
import su6 from "../../../public/assets/itOutSourcing/img16.png";
import pl1 from "../../../public/assets/itOutSourcing/img17.png";
import pl2 from "../../../public/assets/itOutSourcing/img18.png";
import pl3 from "../../../public/assets/itOutSourcing/img19.png";
import cp1 from "../../../public/assets/itOutSourcing/img20.png";
import cp2 from "../../../public/assets/itOutSourcing/img21.png";
import cp3 from "../../../public/assets/itOutSourcing/img22.png";
import cp4 from "../../../public/assets/itOutSourcing/img23.png";
import cp5 from "../../../public/assets/itOutSourcing/img23.png";
import cp6 from "../../../public/assets/itOutSourcing/img25.png";
import cp7 from "../../../public/assets/itOutSourcing/img26.png";
import cp8 from "../../../public/assets/itOutSourcing/img27.png";
import ap1 from "../../../public/assets/manufacturing/img1.png";
import ap2 from "../../../public/assets/manufacturing/img2.png";
import ap3 from "../../../public/assets/manufacturing/img3.png";
import ap4 from "../../../public/assets/manufacturing/img4.png";
import kp1 from "../../../public/assets/itOutSourcing/img34.svg";
import kp2 from "../../../public/assets/itOutSourcing/img35.svg";
import kp3 from "../../../public/assets/itOutSourcing/img36.svg";
import kp4 from "../../../public/assets/itOutSourcing/img37.svg";

//CaseStudies Images
import Case1 from "../../../public/assets/consulting/case1.svg";
import Case2 from "../../../public/assets/consulting/case2.svg";
import Case3 from "../../../public/assets/consulting/case3.svg";
import appRoutes from "../../utils/appRoutes";

export const sideBarData = [
	{
		title: "Why we stand-out",
		goto: "#whyChoose",
	},
	{
		title: "Our Solutions",
		goto: "#approach",
	},
	{
		title: "Our Capabilities",
		goto: "#capacity",
	},

	{
		title: "Choose Us",
		goto: "#chooseUs",
	},

	{
		title: "Contact Us",
		goto: "#contact",
	},
];

export const about = [
	{
		img: AboutImg,
		title: "Reducing IT Costs",
		details: "We analyze your current IT infrastructure to identify areas for improvement and compare the total cost of ownership (TCO) of managing your IT in-house versus outsourcing to ScienceSoft. Our best practices, such as Agile, DevOps, and integrated testing, can significantly enhance the effectiveness of your IT investments.",
	},
	{
		img: AboutImg,
		title: "Data Security in IT Outsourcing",
		details: "At Tanta Innovative, we adhere to strict ISO-27001 data security policies and maintain robust in-house safety management systems. We provide 24/7 security monitoring to prevent unauthorized access and mitigate ransomware threats.",
	},
	{
		img: AboutImg,
		title: "Reliable IT Outsourcing",
		details: "As your trusted tech partner, Tanta Innovative is committed to long-term relationships. We can provide IT outsourcing services for up to 10 years, ensuring continuity and minimizing service downtime. Our contracts include a substantial transition period to guarantee a smooth transition.",
	},
];

export const approach = [
    {
        img: ap1,
        title: "Digital Strategy Consultation",
        details: "We provide consultation services to develop a digital strategy tailored to your manufacturing business. Outsource various IT tasks, such as development, support, and management, to Tanta Innovative, ensuring optimal outcomes.",
        link: appRoutes.services["it-consulting"],
        bg: "#9FA8DA",
        color: "white",
        text: "Request Consultation",
        list: [
            "Enhance return on assets (ROA) through equipment optimization and predictive maintenance strategies.",
            "Reduce operational costs and boost productivity with AI-based optimization solutions.",
            "Streamline workflows and accelerate time-to-market for new manufacturing products.",
        ],
    },
    {
        img: ap2,
        title: "Solution Consultation, Implementation, and Support",
        details: "Delegate IT operations and the execution of IT-related business initiatives to Tanta Innovative, allowing your team to focus on core tasks. We offer consultation, implementation, and support services for various solutions.",
        link: appRoutes.services["it-consulting"],
        list: [
            "Assist in selecting optimal solution functionality and architecture.",
            "Reduce costs for implementation and operation while ensuring user adoption.",
            "Provide end-to-end implementation and post-launch support for solutions.",
            "Offer continuous maintenance and evolution services for solutions.",
        ],
        bg: "#FFE082",
        color: "black",
        text: "Request Implementation",
    },
    {
        img: ap3,
        title: "IT Outsourcing",
        details: "Strengthen your IT vendor ecosystem by partnering with Tanta Innovative. We offer IT outsourcing services in various domains, providing expertise and support for software implementation, quality assurance, managed infrastructure, data analytics, IT support, and help desk.",
        link: appRoutes.services["it-outsourcing/cloud-migration-services/"],
        list: [
            "Software implementation",
            "Quality assurance (QA)",
            "Managed infrastructure services",
            "Data analytics",
            "IT support",
            "Help desk support",
        ],
        bg: "#A5D6A7",
        color: "black",
		text: "Request IT Outsourcing",
		header: "We take responsibility for IT-driven business processes in your manufacturing company. Our IT outsourcing covers individual functions such as:",
	},
    {
        header: "Streamline your IT projects with our experts who possess manufacturing-specific knowledge. Our IT staff augmentation services offer professionals in various roles:",
        img: ap4,
        title: "IT Staff Augmentation",
        details: "We provide experts with manufacturing-specific knowledge to support and streamline your company's IT projects. Our IT staff augmentation covers roles such as developers, testers, DevOps engineers, and data analysts.",
        link: appRoutes.services["it-outsourcing/cloud-migration-services/"],
        list: [
            "Developers (Java, .NET, Python, PHP, C++, and more)",
            "Testers (manual and automated testing)",
            "DevOps engineers",
            "Data analysts",
        ],
        bg: "#90CAF9",
        color: "black",
        text: "Request Augmentation",
    },
];
export const solutions = [
    {
        img: ap1,
        title: "Management and Operational Functions",
        details: "Outsource various IT tasks, including development, support, and management, to Tanta Innovative. We deliver optimal outcomes for management and operational functions.",
        link: appRoutes.services["it-consulting"],
        list: [
            "ERP solutions",
            "Business intelligence solutions",
            "Data warehouse solutions",
            "Intranet solutions",
            "HR solutions",
        ],
    },
    {
        img: ap2,
        title: "Production Process and Asset Management",
        details: "Delegate IT operations and the execution of IT-related business initiatives to Tanta Innovative, allowing your team to focus on other tasks. We specialize in the management of production processes and assets.",
        link: appRoutes.services["it-consulting"],
        list: [
            "Solutions for managing the entire product lifecycle",
            "Solutions for monitoring equipment performance",
            "Solutions for managing equipment",
            "Solutions for measuring Overall Equipment Effectiveness (OEE)",
            "Solutions for monitoring machine operations",
            "Solutions for monitoring the condition of equipment",
            "Solutions for predicting maintenance needs",
            "Solutions for scheduling production",
            "Solutions for managing inventory, including IoT-based solutions, inventory optimization, and augmented reality (AR) for warehouse management",
		],
	},
    {
        img: ap3,
        title: "Vendor Management",
        details: "Strengthen your IT vendor ecosystem with Tanta Innovative as an experienced professional in various IT domains. We provide vendor management solutions to streamline vendor interactions.",
        link: appRoutes.services["it-outsourcing/cloud-migration-services/"],
        list: [
            "Online portals for vendors to manage interactions with the company",
            "Solutions for managing the supply chain, including procurement, logistics, and inventory management",
        ],
    },
    {
        img: ap4,
        title: "Customer Management",
        details: "Strengthen your IT vendor ecosystem with Tanta Innovative as an experienced professional in various IT domains. We offer customer management solutions to enhance customer relationships and ecommerce operations.",
        link: appRoutes.services["it-outsourcing/cloud-migration-services/"],
        list: [
            "Customer relationship management (CRM) solutions",
            "Solutions for ecommerce operations",
            "Online portals for customers to manage interactions with the company",
            "Solutions for analyzing customer data",
        ],
    },
];
export const services = [
    {
        img: S1,
        title: "Full-Service IT Outsourcing",
        details: "Outsource all your IT tasks, including development, support, and management, to Tanta Innovative. We ensure the best outcomes for your IT needs.",
        link: appRoutes.services["it-consulting"],
        list: [
            "Comprehensive full-cycle services covering consulting, solution evolution, and support",
            "Accurate cost and time estimation based on our extensive industry experience",
            "A quality-first approach with established quality management practices for consistent, high-quality services and minimized project risks",
            "A focus on security with advanced cybersecurity technology and comprehensive security policies and processes",
            "A cost-efficient approach utilizing proven open-source components to reduce implementation costs and maximize ROI",
            "A minimized risk development model with an iterative process for early issue identification and regular solution updates",
        ],
    },
];

export const planning = [
    {
        img: pl1,
        heading: "IT strategy Consulting",
        link: appRoutes.industries["health-care/"],
    },
    {
        img: pl2,
        heading: "Software Development service",
        link: appRoutes.industries.manufacturing,
    },
	{
		img: pl3,
		heading: "Application Mordernization services",
		link: "/transportation",
	},
];
export const scope = [
    {
        img: s1,
        heading: "Cyber Security Services",
        link: appRoutes.industries["health-care/"],
    },
    {
        img: s2,
        heading: "Infrastructure Support",
        link: appRoutes.industries.manufacturing,
    },
	{
		img: s3,
		heading: "Quality Assurance Services",
		link: "/transportation",
	},
	{
		img: s4,
		heading: "Cloud Migration",
		link: "/telecommunication",
	},
];

export const support = [
	{
		img: su1,
		heading: "IT Support",
		link: "/transportation",
	},
	{
		img: su2,
		heading: "Managed Analytic services",
		link: "/telecommunication",
	},
	{
		img: su3,
		heading: "Remote work consulting",
		link: "/banking",
	},
	{
		img: su4,
		heading: "Digital crisis management & responses",
		link: "/oil",
	},
	{
		img: su5,
		heading: "Help desk service",
		link: "/retail",
	},
	{
		img: su6,
		heading: "Application support and evolution",
		link: "/consulting",
	},
];

export const capacity = [
	{
		img: cp1,
		heading: "Big data",
		link: "/healthcare",
	},
	{
		img: cp2,
		heading: "Augumented Reality",
		link: "/manufacturing",
	},
	{
		img: cp3,
		heading: "Artificial Inteligence",
		link: "/transportation",
	},
	{
		img: cp4,
		heading: "Internet Of Things",
		link: "/telecommunication",
	},
	{
		img: cp5,
		heading: "Blockchain",
		link: "/banking",
	},
	{
		img: cp6,
		heading: "Computer Vision",
		link: "/oil",
	},
    {
        img: cp7,
        heading: "Data science",
        link: appRoutes.industries.retail,
    },
	{
		img: cp8,
		heading: "Virtual reality",
		link: "/consulting",
	},
];
export const experts = [
    {
        img: Ex1,
        heading: "Healthcare",
        link: appRoutes.industries["health-care/"],
    },
    {
        img: Ex2,
        heading: "Manufacturing",
        link: appRoutes.industries.manufacturing,
    },
	{
		img: Ex3,
		heading: "transportation",
		link: "/transportation",
	},
	{
		img: Ex4,
		heading: "telecommunication",
		link: "/telecommunication",
	},
	{
		img: Ex5,
		heading: "banking",
		link: "/banking",
	},
	{
		img: Ex6,
		heading: "oil & gas",
		link: "/oil",
	},
    {
        img: Ex7,
        heading: "retail",
        link: appRoutes.industries["/retail"],
    },
	{
		img: Ex8,
		heading: "consulting",
		link: "/consulting",
	},
];
export const customers = [
	{
		img: C1,
		brand: "Microsoft",
	},
	{
		img: C2,
		brand: "Google",
	},
	{
		img: C3,
		brand: "Amazon",
	},
	{
		img: C4,
		brand: "Apple",
	},
	{
		img: C5,
		brand: "Facebook",
	},
	{
		img: C6,
		brand: "Twitter",
	},
	{
		img: C7,
		brand: "Instagram",
	},
	{
		img: C8,
		brand: "Linkedin",
	},
];

export const business = [
	{
		img: B1,
		title: "ERP",
		details:
			"Our ERP consulting service helps businesses improve efficiency and streamline operations. We work with you to implement customized solutions that meet your specific needs and goals.",
		link: "/erp",
	},
	{
		img: B2,
		title: "SOCIAL CHAIN MANAGEMENT",
		details:
			"Our social chain management consulting service can help your business effectively manage your social media presence. From social media strategy to content creation, we can help you connect with your audience and drive engagement.",
		link: "/social-chain-management",
	},

	{
		img: B3,
		title: "FINANCIAL MANAGEMENT",
		details:
			"Our financial management consulting service helps businesses make informed financial decisions and optimize their financial performance. We can assist with everything from financial planning and analysis to budgeting and forecasting.",
		link: "/financial-management",
	},
	{
		img: B4,
		title: "OPERATIONS MANAGEMENT",
		details:
			"Our operations management consulting service helps businesses improve productivity, reduce costs, and streamline processes. We work with you to identify areas for improvement and implement solutions that drive results.",
		link: "/operations-management",
	},
	{
		img: B5,
		title: "ASSET MANAGEMENT",
		details:
			"Our asset management consulting service helps businesses manage their assets, reduce downtime, and extend asset life. From maintenance planning to equipment replacement, we can help you optimize your asset management strategy.",
		link: "/asset-management",
	},
];

export const portfolio = [
	{
		img: P1,
	},
	{
		img: P2,
	},
	{
		img: P3,
	},
	{
		img: P4,
	},
	{
		img: P5,
	},
	{
		img: P6,
	},
	{
		img: P7,
	},
	{
		img: P8,
	},
	{
		img: P9,
	},
];

export const techniques = [
	{
		title: "Costs",
		items: [
			{ id: 1, name: "The ROI Methodology" },
			{ id: 2, name: "Business/Functional Canvas" },
			{ id: 3, name: "Organizational Process Assets (OPA)" },
			{ id: 4, name: "Enterprise Environmental Factors (EEF)" },
		],
		bg: "#2C2C2C",
		icon: kp1,
	},
	{
		title: "Team Productivity",
		items: [
			{ id: 1, name: "The ROI Methodology" },
			{ id: 2, name: "Business/Functional Canvas" },
			{ id: 3, name: "Organizational Process Assets (OPA)" },
			{ id: 4, name: "Enterprise Environmental Factors (EEF)" },
		],
		icon: kp2,
		bg: " #CD0101",
	},
	{
		title: "Customer Involvement",
		items: [
			{ id: 1, name: "The ROI Methodology" },
			{ id: 2, name: "Business/Functional Canvas" },
			{ id: 3, name: "Organizational Process Assets (OPA)" },
			{ id: 4, name: "Enterprise Environmental Factors (EEF)" },
		],
		icon: kp3,
		bg: "#123155",
	},
	{
		title: "User Satisfaction",
		items: [
			{ id: 1, name: "The ROI Methodology" },
			{ id: 2, name: "Business/Functional Canvas" },
			{ id: 3, name: "Organizational Process Assets (OPA)" },
			{ id: 4, name: "Enterprise Environmental Factors (EEF)" },
		],
		icon: kp4,
		bg: "#0061B2",
	},
];

export const summary = ["Company Benefits", "Mission & Vision", "Need Help?"];

export const benefits = [
	"Interactively monetize customer",
	"Enthusiastically underwhelm distinctive",
	"Energistically fabrica intuitive infomediaries",
	"Dramatically matrix leveraged",
];

export const caseStudies = [
	{
		id: 1,
		image: Case1,
		title: "Successful Implementation of EHR System at Regional Hospital",
		subTitle: "Electronic Health",
		description:
			"This project involved partnering with a regional hospital to implement a new electronic health record (EHR) system,...",
		link: "/electronic-health",
	},
	{
		id: 2,
		image: Case2,
		title: "Cloud Migration for Large Healthcare Provider",
		subTitle: "Infrastructure Modernization",
		description:
			"This project involved helping a large healthcare provider migrate its IT infrastructure from on-premise servers to the cloud...",
		link: "/infrastructure-modernization",
	},
    {
        id: 3,
        image: Case3,
        title: "Data Analytics Solution for Health Insurance Provider",
        subTitle: "Healthcare Data Analytics",
        description:
            "This project involved developing a custom data analytics solution for a health insurance provider, which allowed them to gain insights into their members' health...",
        link: appRoutes.services["it-consulting/healthcare-data-analytics"],
    },
    {
        id: 4,
        image: Case3,
        title: "Data Analytics Solution for Health Insurance Provider",
        subTitle: "Healthcare Data Analytics",
        description:
            "This project involved developing a custom data analytics solution for a health insurance provider, which allowed them to gain insights into their members' health...",
        link: appRoutes.services["it-consulting/healthcare-data-analytics"],
    },
];

export const allServices = [
	{
		title: "Services",
		items: [
			{ id: 1, name: "Cybersecurity Services" },
			{ id: 2, name: "Cybersecurity Consulting" },
			{ id: 3, name: "Security Program Development" },
			{ id: 4, name: "Managed Application Services" },
			{ id: 5, name: "Identity and Access Management" },
		],
	},
	{
		title: "Security Testing",
		items: [
			{ id: 1, name: "End-to-End Application Services" },
			{ id: 2, name: "Application Management" },
			{ id: 3, name: "Application Development" },
			{ id: 4, name: "Managed Application Services" },
			{ id: 5, name: "Application Modernization" },
		],
	},
	{
		title: "Compliance Services",
		items: [
			{ id: 1, name: "End-to-End Application Services" },
			{ id: 2, name: "Application Management" },
			{ id: 3, name: "Application Development" },
			{ id: 4, name: "Managed Application Services" },
			{ id: 5, name: "Application Modernization" },
		],
	},
];
