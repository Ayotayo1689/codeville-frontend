import AboutImg from "../../../public/assets/itOutSourcing/img5.svg";

//Services Images
import S1 from "../../../public/assets/consulting/service1.png";
import S2 from "../../../public/assets/consulting/service2.png";
import S3 from "../../../public/assets/consulting/service3.png";


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

//Index Images
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
import ap1 from "../../../public/assets/itOutSourcing/img28.png";
import ap2 from "../../../public/assets/itOutSourcing/img29.png";
import ap3 from "../../../public/assets/itOutSourcing/img30.png";
import ap4 from "../../../public/assets/itOutSourcing/img31.png";
import ap5 from "../../../public/assets/itOutSourcing/img32.png";
import ap6 from "../../../public/assets/itOutSourcing/img33.png";
import kp1 from "../../../public/assets/itOutSourcing/img34.svg";
import kp2 from "../../../public/assets/itOutSourcing/img35.svg";
import kp3 from "../../../public/assets/itOutSourcing/img36.svg";
import kp4 from "../../../public/assets/itOutSourcing/img37.svg";

//CaseStudies Images
import Case1 from "../../../public/assets/consulting/case1.svg";
import Case2 from "../../../public/assets/consulting/case2.svg";
import Case3 from "../../../public/assets/consulting/case3.svg";

import Infra1 from "../../../public/assets/itOutSourcing/infraSupport/infra1.svg";
import Infra2 from "../../../public/assets/itOutSourcing/infraSupport/infra2.svg";
import Infra3 from "../../../public/assets/itOutSourcing/infraSupport/infra3.svg";
import appRoutes from "../../utils/appRoutes";

export const infraApproach = [
	{
		id: 1,
		title: "Costs",
		listItems: [
			{
				id: 1,
				list: "Target budget for managed infrastructure services",
				subList: [
					{
						id: 1,
						item: () => <div>Budget spent </div>
					},
					{
						id: 2,
						item: () => <div>Over budget approved and spent <span style={{fontStyle: "italic"}}>(if any)</span> </div>
					}
				]
			},
			{
				id: 2,
				list: "Target budget for managed infrastructure services",
			},{
				id: 3,
				list: "Target budget for managed infrastructure services",
			},
		]
	},

	{
		id: 2,
		title: "Service Reliability",
		listItems: [
			{
				id: 1,
				list: "Service Availability"
			},
			{
				id: 2,
				list: "Response Time"
			},
			{
				id: 3,
				list: "Service Availability"
			},
			{
				id: 2,
				list: "IT Incidents (issues users encountered) "
			},
			{
				id: 2,
				list: "Target budget for managed infrastructure services"
			}
		]
	},

	{
		id: 3,
		title: "IT infrastructure security",
		listItems: [

			{
				id: 1,
				list: "Service Availability",
			},{
				id: 2,
				list: "Response Time",
			},
			{
				id: 3,
				list: "IT Incidents (issues users encountered) ",
			},
			{
				id: 4,
				list: "IT Incidents (issues users encountered) ",
				subList: [
					{
						id: 1,
						item: () => <div>Over budget approved and spent <span style={{fontStyle: "italic"}}>(if any)</span></div>
					},
				]
			},
		]
	},

	{
		id: 4,
		title: "Changes (by business value and priority)",
		listItems: [
			{
				id: 1,
				list: "Target budget for managed infrastructure services",
				subList: [
					{
						id: 1,
						item:() => <div> Budget spent </div>
					},
					{
						id: 2,
						item: () => <div>Over budget approved and spent <span style={{fontStyle: "italic"}}>(if any)</span></div>
					}
				]
			},
			{
				id: 2,
				list: "Target budget for managed infrastructure services",
			},{
				id: 3,
				list: "Target budget for managed infrastructure services",
			},
		]
	},

];

export const infraServices = [
	{
		img: Infra1,
		title: "IT infrastructure consulting & monitoring ",
		desc:
			"We have a strong record in various integration approaches – point-to-point service-oriented architecture (SOA), enterprise service bus (ESB).",
	},
	{
		img: Infra2,
		title: "IT help desk and troubleshooting",
		desc:
			"We have a strong record in various integration approaches – point-to-point service-oriented architecture (SOA), enterprise service bus (ESB).",
	},

	{
		img: Infra3,
		title: "IT infrastructure evolution",
		desc:
			"We have a strong record in various integration approaches – point-to-point service-oriented architecture (SOA), enterprise service bus (ESB).",
	},
];
export const tantaScope = [
	{
		text: "Servers (Windows, Linux)",
	},
	{text: "Cloud environments (Azure, AWS, GCP) "},
	{text: "Data migration and data cleaning."},
	{text: "Data storage and databases (on-premises and cloud-based). "},
	{text: "Network and security (LAN, VPN, IDS/IPS, SIEM, IAM, firewall, antivirus)."},
	{text: "Customer-facing software."},
	{text: "Enterprise solutions (ERP, Email, CRM, Intranet.) "},

]
export const InfraSolutionsSideBarData = [
	{
		title: "About Us",
		goto: "#about",
	},
	{
		title: "Our Services",
		goto: "#services",
	},
	{
		title: "Our Methodology",
		goto: "#methodology",
	},
	{
		title: "KPI's We Use",
		goto: "#kpi",
	},
	{
		title: "Related Projects",
		goto: "#projects",
	},
	{
		title: "Summary",
		goto: "#summary.js",
	},
];

export const sideBarData = [
	{
		title: "Need An Expert?",
		goto: "#expert",
	},
	{
		title: "Customer Reviews",
		goto: "#reviews",
	},
	{
		title: "Our Scope",
		goto: "#scope",
	},

	{
		title: "Business Operations",
		goto: "#support",
	},

	{
		title: "Plan New Projects",
		goto: "#plan",
	},

	{
		title: "Our Capabilities",
		goto: "#capabilities",
	},
	{
		title: "Our Approach",
		goto: "#approach",
	},
	{
		title: "KPI's We Use",
		goto: "#kpi",
	},
	{
		title: "Our Outsourcing ",
		goto: "#outsourcing",
	},
	{
		title: "Q&A",
		goto: "#maturity",
	},
	{
		title: "Summary",
		goto: "#summary",
	},
];

export const about = [
	{
		img: AboutImg,
		title: "How do I know whether my IT costs may be reduced?",
		details: `
We analyze the current state of your IT to see the potential for its improvement and then compare the TCO of your IT managed in-house vs. by ScienceSoft. As a rule, our best practices (Agile, DevOps, Integrated Manual and Automated Testing, etc.) help to achieve 2x+ effectiveness of your current investments`,
	},
	{
		img: AboutImg,
		title: "Doesn’t IT outsourcing pose a threat to corporate data security?",
		details: `
Tanta Innovative adheres to strict ISO-27001 data security policies and follows the established in-house safety management systems. We ensure 24/7 security monitoring to prevent unsolicited access and ransomware threats`,
	},

	{
		img: AboutImg,
		title:
			"Meet Our IT ExpertsCan an IT outsourcing vendor guarantee against premature service termination?",
		details: `
Being a trusted tech partner, Tanta Innovative welcomes opportunities to provide IT outsourcing services for as long as 10 years, so you don't have to worry about sudden discontinuation from our side. Still, our contracts always include a substantial transition period to ensure no 'service downtime' for our customers`,
	},
];

export const approach = [
	{
		img: ap1,
		title: "Flexible pricing options",
		details:
			"Outsource any IT tasks (development, support, management, etc.) to Tanta Innovative - and we will make sure to deliver the best outcomes.",
		link: appRoutes.services["it-consulting"],
		list: [
			"Fixed price, Best for: feasibility study, PoC, small projects.",

			"Time & Material (with a cap). , Best for: advisory; large-scale or flexible projects.",

			"Per-ticket pricing. Best for: L1, L2 support.",

			"Fixed monthly fee. \nBest for: L3 support (in-code changes).,",
		],
	},
	{
		img: ap2,
		title: "Cybersecurity Consulting",
		details:
			"Delegate your IT operations and execution of new IT-related business initiatives to Tanta Innovative - and let your team focus on other tasks",
		link: appRoutes.services["it-consulting"],
		list: [
			"Offshore outsourcing.",
			"Advanced techs for best ratio of business value.",
			"Agile, DevOps, shift-left QA approach, test automation.",
			"Cloud resource consumption optimization.",
			"Increased team efficiency due to established project management practices.",
			"Resources with lower rates work on routine tasks; resources with low performance are replaced.",
		],
	},
	{
		img: ap3,
		title: "Cooperation Flexibility",
		details:
			"Strengthen your IT vendor ecosystem with Tanta Innovative as an experienced professional in any IT domain that may require vendor assistance",
		link: "/cloud",
		list: [
			"Wide pool of roles – project managers, developers, DevOps, architects, QA engineers, support specialists, data experts, etc.",
			"We’re open to co-sourcing.",
			"No vendor lock-in - we’re ready to assist with transferring knowledge to a new vendor.",
			"From 0.5 FTE to 150+ FTE.",
			"Cooperation term: 1 month – 10+ years.",
			"All software code is owned by your organization.",
		],
	},
	{
		img: ap4,
		title: "Quarterly Service Improvement",
		details:
			"Strengthen your IT vendor ecosystem with Tanta Innovative as an experienced professional in any IT domain that may require vendor assistance",
		link: "/cloud",
		list: [
			"Regular roadmap revision (stated business needs vs. current business needs; value we bring vs. highest possible value, etc.).",
			"Proactive approach: we analyze processes/solutions and suggest adding improvements and possible competitive advantages.",
			"Anticipating, openly communicating and effectively managing potential stumbling blocks in cooperation.",
		],
	},
	{
		img: ap5,
		title: "Regular Compliance",
		details:
			"Strengthen your IT vendor ecosystem with Tanta Innovative as an experienced professional in any IT domain that may require vendor assistance",
		link: "/cloud",
		list: [
			"ISO 9001 certification to assure the quality of the services delivered.",
			"ISO 27001 certifications to assure the security of our customers’ data.",
			"Compliance with industry-specific regulations: HIPAA, GAMP, PCI DSS, SOC 3, GDPR, etc.",
		],
	},
	{
		img: ap6,
		title: "Visibility & KPI-based Results",
		details:
			"Strengthen your IT vendor ecosystem with Tanta Innovative as an experienced professional in any IT domain that may require vendor assistance",
		link: "/cloud",
		list: [
			"​​​​​​We define the goals you want to achieve and ensure service transparency via reports on:",
			"Use of resources (actual vs. planned).",
			"Current issues & potential risks.",
			"Team productivity and service quality KPIs, etc.",
		],
	},
];
export const services = [
	{
		img: S1,
		title: "Full-service IT outsourcing",
		details:
			"Outsource any IT tasks (development, support, management, etc.) to Tanta Innovative - and we will make sure to deliver the best outcomes",
		link: "#",
	},
	{
		img: S2,
		title: "Co-sourcing with an in-house IT team",
		details:
			"Delegate your IT operations and execution of new IT-related business initiatives to Tanta Innovative - and let your team focus on other tasks",
		link: "#",
	},
	{
		img: S3,
		title: "Co-sourcing with other vendors",
		details:
			"Strengthen your IT vendor ecosystem with Tanta Innovative as an experienced professional in any IT domain that may require vendor assistance",
		link: "#",
	},
];

export const planning = [
	{
		img: pl1,
		heading: "IT strategy Consulting",
	},
	{
		img: pl2,
		heading: "Software Development service",
	},
	{
		img: pl3,
		heading: "Application Mordernization services",
	},
];
export const scope = [
	{
		img: s1,
		heading: "Cyber Security Services",
		link: appRoutes.services["it-outsourcing/cybersecurity-services/"],
	},
	{
		img: s2,
		heading: "Infrastructure Support",
		link: appRoutes.services["it-outsourcing/infrastructure_support/"],
	},
	{
		img: s3,
		heading: "Quality Assurance Services",
		link: appRoutes.services["it-outsourcing/managed-testing/"],
	},
	{
		img: s4,
		heading: "Cloud Migration",
		link: appRoutes.services["it-outsourcing/cloud-migration-services/"],
	},
];

export const support = [
	{
		img: su1,
		heading: "IT Support",
	},
	{
		img: su2,
		heading: "Managed Analytic services",
	},
	{
		img: su3,
		heading: "Remote work consulting",
	},
	{
		img: su4,
		heading: "Digital crisis management & responses",
		link: appRoutes.services["it-outsourcing/crisis-management-consulting/"],
	},
	{
		img: su5,
		heading: "Help desk service",
	},
	{
		img: su6,
		heading: "Application support and evolution",
	},
];

export const capacity = [
	{
		img: cp1,
		heading: "Big data",
	},
	{
		img: cp2,
		heading: "Augumented Reality",
	},
	{
		img: cp3,
		heading: "Artificial Inteligence",
	},
	{
		img: cp4,
		heading: "Internet Of Things",

	},
	{
		img: cp5,
		heading: "Blockchain",
	},
	{
		img: cp6,
		heading: "Computer Vision",
	},
	{
		img: cp7,
		heading: "Data science",
		link: appRoutes.services["it-outsourcing/data-science/"],
	},
	{
		img: cp8,
		heading: "Virtual reality",
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
		link: appRoutes.industries.banking,
	},
	{
		img: Ex6,
		heading: "oil & gas",
		link: "/industries/oil-and-gas",
	},
	{
		img: Ex7,
		heading: "retail",
		link: appRoutes.industries.retail,
	},
	{
		img: Ex8,
		heading: "consulting",
		link: appRoutes.services["it-consulting"],
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
		link: "#",
	},

	{
		img: B3,
		title: "FINANCIAL MANAGEMENT",
		details:
			"Our financial management consulting service helps businesses make informed financial decisions and optimize their financial performance. We can assist with everything from financial planning and analysis to budgeting and forecasting.",
		link: "#",
	},
	{
		img: B4,
		title: "OPERATIONS MANAGEMENT",
		details:
			"Our operations management consulting service helps businesses improve productivity, reduce costs, and streamline processes. We work with you to identify areas for improvement and implement solutions that drive results.",
		link: "#",
	},
	{
		img: B5,
		title: "ASSET MANAGEMENT",
		details:
			"Our asset management consulting service helps businesses manage their assets, reduce downtime, and extend asset life. From maintenance planning to equipment replacement, we can help you optimize your asset management strategy.",
		link: "#",
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
			{ id: 1, name: "Actual Vs. Budget costs" },
			{ id: 2, name: "Budget Needed for completion Vs. Budget remaining" },
		],
		bg: "#2C2C2C",
		icon: kp1,
	},
	{
		title: "Team Productivity",
		items: [
			{
				id: 1,
				name: "Lead Time and Cycle time",
			},
			{
				id: 2,
				name: "Team velocity",
			},
			{
				id: 3,
				name: "Deployment frequency",
			},
			{
				id: 4,
				name: "Time spent Vs. time planned ( for iteration or implementation of particular features)",
			},
		],
		icon: kp2,
		bg: " #CD0101",
	},
	{
		title: "Customer Involvement",
		items: [
			{
				id: 1,
				name: "Time spent by a customer’s employee fulfilling a vendor’s request.",
			},
			{
				id: 2,
				name: "Time of delays with requirements elicitation sessions on the customer’s side",
			},
		],
		icon: kp3,
		bg: "#123155",
	},
	{
		title: "User Satisfaction",
		items: [
			{
				id: 1,
				name: "Time spent by a customer’s employee fulfilling a vendor’s request.",
			},
			{
				id: 2,
				name: "Time of delays with requirements elicitation sessions on the customer’s side",
			},
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
		link: "/healthcare-data-analytics",
	},
	{
		id: 4,
		image: Case3,
		title: "Data Analytics Solution for Health Insurance Provider",
		subTitle: "Healthcare Data Analytics",
		description:
			"This project involved developing a custom data analytics solution for a health insurance provider, which allowed them to gain insights into their members' health...",
		link: "/healthcare-data-analytics",
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
