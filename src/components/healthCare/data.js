import G1 from "../../../public/assets/healthcare/G1.png";
import G2 from "../../../public/assets/healthcare/G2.png";
import G3 from "../../../public/assets/healthcare/G3.png";
import G4 from "../../../public/assets/healthcare/G4.png";
import G6 from "../../../public/assets/healthcare/G6.png";
import Gold from "../../../public/assets/healthcare/Gold.png";

import {
	check,
	devices,
	fileCloud,
	help,
	lock,
	monthly,
	pig,
	plan,
	proactive,
	reactive,
	settings,
	thumb,
	ticket,
	time,
} from "../../../public/assets/healthcare";
import appRoutes from "../../utils/appRoutes";
import {
	projectA,
	projectB,
	projectC,
} from "../../../public/assets/cybersecurity";

export const sideBarData = [
	{
		title: "About Us",
		id: "About_us",
	},
	{
		title: "Solutions we offer",
		id: "SWE",
	},
	{
		title: "Testimonials",
		id: "testimonials",
	},
	{
		title: "Benefits of Our Services",
		id: "BOS",
	},
	{
		title: "Selected projects",
		id: "CAP",
	},
	{
		title: "Investments",
		id: "invest",
	},
];
export const supportSideBar = [
	{
		title: "Type of Healthcare Support",
		id: "support",
	},
	{
		title: "Solutions we offer",
		id: "solution",
	},
	{
		title: "About Tanta",
		id: "about",
	},
	{
		title: "Cudtomer Review",
		id: "FAQ",
	},
	{
		title: "Technologies we use",
		id: "techs",
	},
	{
		title: "Service Option",
		id: "service",
	},
	{
		title: "Benefits",
		id: "benefits",
	},
	{
		title: "Success stories",
		id: "stories",
	},
];

export const solutions = [
	{
		img: G1,
		title: "Healthcare IT Support",
		items: [
			{
				id: 1,
				name:
					"Implementing systems that provide evidence-based recommendations and alerts to healthcare" +
					" providers, aiding in clinical decision-making and improving patient outcomes.",
			},
			{
				id: 2,
				name:
					"Offering training programs for healthcare professionals to effectively use healthcare IT systems" +
					", as well as providing ongoing technical support and helpdesk services to address any IT-related issues.",
			},
			{
				id: 3,
				name: "Monitoring of hospital applications (e.g., EHR, HIE), networks, and IoMT infrastructures.",
			},
		],
		link: appRoutes.industries["health-care/healthcare-it-support"],
	},
	{
		img: G2,
		title: "Managed IT Services",
		items: [
			{
				id: 1,
				name:
					"Managing the IT infrastructure for healthcare organizations, including network design, hardware " +
					"provisioning, and system integration to ensure reliable and secure operations.",
			},
			{
				id: 2,
				name:
					"Providing solutions for the acquisition, storage, and analysis of medical images, such as Picture" +
					" Archiving and Communication Systems (PACS) and Radiology Information Systems (RIS)",
			},
			{
				id: 3,
				name:
					"Implementing systems that provide evidence-based recommendations and alerts to healthcare" +
					" providers, aiding in clinical decision-making and improving patient outcomes.",
			},
		],
		link: appRoutes.industries["health-care/managed-it-service"],
	},
	{
		img: G3,
		title: "IT Consulting and Assessment",
		items: [
			{
				id: 1,
				name:
					"Ensuring healthcare organisations comply with data protection regulations, such as HIPAA, by" +
					" implementing robust security measures, conducting risk assessments, and providing ongoing " +
					"security monitoring and support",
			},
			{ id: 2, name: "Assessment of the current state of the IT environment." },
			{
				id: 3,
				name:
					"Pinpointing vulnerabilities in the IT environment and unmet needs and designing tech" +
					" solutions to cover them. ",
			},
		],
		link: appRoutes.industries["health-care/it-consulting-services"],
	},
	{
		img: G4,
		title: "Healthcare software development",
		items: [
			{
				id: 1,
				name:
					"Creating mobile application for patients to access health information, manage appointments," +
					" track their health metrics, and receive personalised health recommendations.",
			},
			{
				id: 2,
				name:
					"\n" +
					"Developing platforms and solutions that enable secure sharing of patient health information" +
					" between healthcare providers, promoting interoperability and coordinated care.\n",
			},
			{
				id: 3,
				name:
					"Designing and implementing telehealth solutions that facilitate remote consultations," +
					" virtual visits, and remote patient monitoring systems to monitor patients' health remotely.",
			},
		],
		link: appRoutes.industries["health-care/medical_software_development"],
	},
	// {
	// 	img: G5,
	// 	title: "IT Modernization",
	// 	items: [
	// 		{
	// 			id: 1,
	// 			name:
	// 				"Refactoring or rearchitecting existing healthcare applications to make them more scalable, " +
	// 				"modular, and cloud-native",
	// 		},
	// 		{
	// 			id: 2,
	// 			name: "Helping healthcare organisations modernise their data management and analytics capabilities.",
	// 		},
	// 		{
	// 			id: 3,
	// 			name:
	// 				"Automating manual and repetitive healthcare processes through the use of robotic" +
	// 				" process automation (RPA) and workflow automation",
	// 		},
	// 	],
	// 	link: appRoutes.services["data-analytics/data_analytics_modernization"],
	// },
	{
		img: G6,
		title: "Cloud Migration",
		items: [
			{
				id: 1,
				name:
					"Assessing the existing IT environment of the healthcare organisation to determine " +
					"its readiness for cloud migration.",
			},
			{
				id: 2,
				name:
					"Developing a comprehensive cloud migration strategy tailored to the specific" +
					" needs and objectives of the healthcare organisation",
			},
			{
				id: 3,
				name: "Implementing robust security measures and compliance controls within the cloud environment",
			},
		],
		link: appRoutes.services["it-outsourcing/cloud-migration-services/"],
	},
];

export const benefits = [
	{
		img: Gold,
		title: "No need for large upfront Investments",
		details:
			"We work according to an iterative approach, so we can implement first improvements to your IT infrastructure or deliver the first version of your digital health solution within 1-3 months.",
	},
	{
		img: Gold,
		title: "Services tailored to your needs",
		details:
			"You can either choose one service from our healthcare IT offering or combine it with others to get a unique service pack fully covering your healthcare organization’s processes.",
	},
	{
		img: Gold,
		title: "Smooth collaboration",
		details:
			"We establish effective collaboration with all stakeholders, self-manage our work, and gladly share our skills. You'll be kept fully informed on project status as our cooperation follows an agreed process and KPIs.",
	},
	{
		img: Gold,
		title: "Meticulous approach to quality and security",
		details:
			"We prioritize the quality and security of the healthcare software to help our customers get tangible business value, optimize costs, and withstand any security threats.",
	},
];

export const projects = [
	{
		image: projectC,
		title: "Successful Implementation of EHR System at Regional Hospital",
		subItem: ["ELECTRONIC HEALTH"],
		text: "This project involved partnering with a regional hospital to implement a new electronic health record (EHR) system,...",
	},
	{
		image: projectA,
		title: "Cloud Migration for Large Healthcare Provider",
		subItem: [" Infrastructure Modernization"],
		text: "This project involved helping a large healthcare provider migrate its IT infrastructure from on-premise servers to the cloud...",
	},
	{
		image: projectB,
		title: "Data Analytics Solution for Health Insurance Provider",
		subItem: ["Healthcare Data Analytics"],
		text: "This project involved developing a custom data analytics solution for a health insurance provider, which allowed them to gain insights into their members' health...",
	},
	{
		image: projectB,
		title: "Data Analytics Solution for Health Insurance Provider",
		subItem: ["Healthcare Data Analytics"],
		text: "This project involved developing a custom data analytics solution for a health insurance provider, which allowed them to gain insights into their members' health...",
	},
];
export const successStories = [
	{
		image: projectC,
		title: "Successful Implementation of EHR System at Regional Hospital",
		subItem: ["ELECTRONIC HEALTH"],
		text: "This project involved partnering with a regional hospital to implement a new electronic health record (EHR) system,...",
		link: '#',
	},
	{
		image: projectA,
		title: "Cloud Migration for Large Healthcare Provider",
		subItem: [" Infrastructure Modernization"],
		text: "This project involved helping a large healthcare provider migrate its IT infrastructure from on-premise servers to the cloud...",
		link: '#',
	},
	{
		image: projectB,
		title: "Data Analytics Solution for Health Insurance Provider",
		subItem: ["Healthcare Data Analytics"],
		text: "This project involved developing a custom data analytics solution for a health insurance provider, which allowed them to gain insights into their members' health...",
		link: '#',
	},
	{
		image: projectB,
		title: "Data Analytics Solution for Health Insurance Provider",
		subItem: ["Healthcare Data Analytics"],
		text: "This project involved developing a custom data analytics solution for a health insurance provider, which allowed them to gain insights into their members' health...",
		link: '#',
	},
];

export const managedList = [
	"Networks",
	"On premises data centres",
	"Data management and storage (databases, data warehouses and data lakes)",
	"Cloud services ( IaaS, PaaS, SaaS)",
	"Application infrastructure development (CI/CD, Development and testing environment)",
	"Messaging and data transfer systems",
	"Cybersecurity tools (e.g SIEM, IAM, firewalls)",
	"Devices: desktops, tablets and mobile devices.",
	"Medical applications and their integrations (EHR, HIS, practice management, telemedicine apps, patient apps and portals, hospital apps, biosensor cloud applications, physician portals, digital workplaces and more).",
	"Medical device infrastructure",
	"IoT devices (smart wearables and stationary medical devices)",
];

export const management = [
	{
		img: settings,
		title: "IT Infrastructure Management",
		lists: [
			"Infrastructure monitoring, alerting and trouble shooting",
			"User access management (e.g for patient portals, appointment management systems, telehealth apps)",
			"Healthcare software configuration and routine maintenance or scheduled upgrades ",
			"Disaster recovery",
		],
	},
	{
		img: help,
		title: "Technical Support Centre",
		text: "Tanta Innovative is working 24/7 round the clock to support both healthcare management systems (e.g appointment scheduling) as well as specialized healthcare solutions. We: ",
		lists: [
			"Resolve incidents on L1 (basic user issues), L2 (infrastructural issues), L3 (advanced support, code changes) levels of support ",
			"Identify and assess root causes of the problems",
			"Prepare and maintain knowledge base articles and user guides",
		],
	},
	{
		img: fileCloud,
		title: "Cloud Management",
		text: "Tanta Innovative ensures: ",
		lists: [
			"Rapid provisioning of Cloud Infrastructures",
			"Proactive cloud monitoring and cloud resources optimization",
			"Proactive management of AWS, Azure Google or multi cloud infrastructures",
		],
	},
	{
		img: devices,
		title: "Managed application services",
		text: "",
		lists: [
			"Proactive monitoring of administrative and medical apps to ensure 99.99% availability.",
			"Executing changes preserving interoperability with other systems and healthcare devices, security and compliance. ",
			"Implementation of automated CI/CD pipeline to speed up application modernization and evolution",
			"Advising on application regulatory compliance (with HIPAA, HITECH, GDPR, etc.) as well as app security within the SecOps approach.",
		],
	},
	{
		img: lock,
		title: "Security Outsourcing",
		text: "",
		lists: [
			"Regular security audits and penetration testing.",
			"Security incident detection and elimination of threats.",
			"Building and managing IT security infrastructure, configuring security tools (e.g., firewalls, SIEM, IPS/IDS, web ﬁltering/SWG, DDoS protection solutions, email security systems, antivirus, endpoint protection system).",
		],
	},
];

export const outsourceList = [
	"Over a decade of providing IT services in infrastructure and healthcare industries",
	"Practical experience with HIPAA/GDPR requirements, healthcare data exchange standards (HL7, ICD-10, CPT, XDS/XDS-I), and FDA/CE registration.",
	"Information security specialists, Healthcare practitioners on board for consults",
	"Collaboration with Chipon, Burtech and Sinon Tech",
	"Quality assurance system for Healthcare devices and SaMD confirmed by ISO 13485 certification",
	"ISO 27001-certified information security management system that relies on mature processes, advanced technology, and skilled experts.",
	"Tanta Innovative was recognized and received the 2023 North American Enabling Technology Leadership Award in the health technology connectivity industry from Fost and Sullivan. ",
];

export const servicePackage = [
	{
		linkId: 0,
		img: plan,
		title: "Basic Plan",
		subtitle: "Management & Enhancement",
		text: "We proactively monitor and manage your entire IT infrastructure (or the required segment). Our engineers provide L1-L2 support, covering user, administrative, and infrastructure issues.",
	},
	{
		linkId: 1,
		img: plan,
		title: "Extended Plan",
		subtitle: "Basic Plan + Planning & Design",
		text: "We also plan application changes, design new infrastructures, review and adjust policies and processes, and advise on application and infrastructure security within the SecOps approach.",
	},
	{
		linkId: 2,
		img: plan,
		title: "Advanced Plan",
		subtitle: "Extended Plan + App Modernization",
		text: "We help you migrate apps, databases, or servers, implement code changes to your software (L3 support), and set up highly automated CI/CD pipelines.",
	},
];

export const managedBenefits = [
	{
		img: check,
		title: "Reliable and compliant IT",
		lists: [
			"Up to 3x fewer app and infrastructure failures thanks to preventive monitoring, well-tuned infrastructure configuration, and enhanced system stability.",
			"Zero compliance breaches thanks to 100% regulatory compliance of IT infrastructure, proactive security monitoring, and adherence to a mature Prevent–Detect–Respond security model.",
			"99.99% application availability. ",
		],
	},
	{
		img: thumb,
		title: "Happy Clients",
		lists: [
			"90% user satisfaction thanks to prompt issue resolution and improved stability of healthcare systems and apps.",
			"Up to 70% fewer support requests and user errors due to clear user guides and FAQs significantly improving the users’ knowledge of the IT systems.",
			"Up to a 5% increase in staff productivity thanks to the reduced number of issues and fast ticket resolution.",
		],
	},
	{
		img: pig,
		title: "IT Cost Optimization",
		lists: [
			"Up to a 40% reduction in IT support costs due to optimal resource utilization, mature ITSM processes, feasible process automation, and more.",
			"Up to a 20% reduction in cloud costs due to adequate cloud consumption optimization.",
			"No vendor lock-in. We are ready to share responsibilities with another vendor or your in-house IT specialists. We also meticulously document our ITSM activities to ensure smooth knowledge transfer to another team if need be.",
		],
	},
];

export const deliverables = [
	"Service performance reports",
	"Compliance reports",
	"Periodic health evaluations with insights for improving systems performance",
	"Quarterly app and infrastructure maintenance reports (performance, security, capacity, issues detected and resolved, patching, backups).",
	"Incident reports with root cause analysis.",
	"SOP documentation.",
	"Description of required policies and procedures (e.g., for change management,\n" +
		"for improving compliance with the required standards and regulations).",
	"Knowledge base articles, FAQs and user guides.",
];

export const pricing = [
	{
		img: time,
		title: "Time & Material",
		text:
			"We charge you at the end of the month\n" +
			"for the hours or efforts reported during\n" +
			"that period.",
		best:
			"apps or IT infrastructure\n" +
			"components evolution (implementing\n" +
			"major changes or new functionality).",
	},
	{
		img: monthly,
		title: "Fixed monthly fee",
		text:
			"You are charged monthly based on the\n" +
			"number of incidents resolved by the\n" +
			"agents and the time coverage type.",
		best:
			"L3 support, security\n" +
			"management, continuous IT support\n" +
			"with a defined scope.",
	},
	{
		img: ticket,
		title: "Per ticket pricing",
		text:
			"You are charged monthly based on the\n" +
			"number of incidents resolved by the\n" +
			"agents and the time coverage type.",
		best:
			"L3 support, security\n" +
			"management, continuous IT support\n" +
			"with a defined scope.",
	},
];

export const medicalSupport = [
	{
		img: proactive,
		title: "Forward-thinking healthcare IT support",
		lists: [
			"Monitor medical apps on a regular basis.\n" +
				"(EHR, HIE, PACS, patient-facing apps, etc.),\n" +
				"IoMT infrastructure (sensors and smart\n" +
				"devices), etc.",
			"Data management, healthcare IT system administration and maintenance (including cloud utilization optimization).",
			"Data center support.",
			"Desktop and mobile device management.",
			"IT infrastructure security and compliance\n" +
				"(e.g., with HIPAA, FDA).",
		],
	},
	{
		img: reactive,
		title: "Responsive Healthcare IT Support Services",
		lists: [
			"L1, L2, L3 support by help desk according to\n" +
				"your healthcare organization's business\n" +
				"hours (24/7, 12/7, 12/5, 8/5).",
			"IT infrastructure troubleshooting.",
			"Medical applications support.",
			"IT infrastructure evolution (e.g.,\n" +
				"implementation of security measures to\n" +
				"improve healthcare data protection and\n" +
				"HIPAA compliance, cloud migration, changes\n" +
				"in the app development infrastructure).",
		],
	},
];

export const serviceOption = [
	{
		linkId: 0,
		title: "Support of selected healthcare IT components",
		text:
			"We ensure the flawless work\n" +
			"of required IT ecosystem\n" +
			"components (applications,\n" +
			"e.g., HIE, patient portals,\n" +
			"telehealth apps; IoMT\n" +
			"infrastructure, etc.) and\n" +
			"prevent a workload increase\n" +
			"for the in-house IT team.",
	},
	{
		linkId: 1,
		title: "Healthcare IT support team augmentation",
		text:
			"We are ready to cover\n" +
			"temporary or permanent\n" +
			"resource gaps in an IT\n" +
			"department of your\n" +
			"healthcare org and offer our\n" +
			"full-cycle IT support and\n" +
			"application development\n" +
			"services.",
	},
	{
		linkId: 2,
		title: "Full healthcare IT infrastructure support",
		text:
			"We offer comprehensive\n" +
			"support from IT service desk\n" +
			"for medical staff and patients\n" +
			"to continuous IT infrastructure\n" +
			"maintenance and evolution.",
	},
];

export const ecosystem = [
	{
		rate: "90 +%",
		text: "patient and physician satisfaction due to quicker response to IT issues and improved stability of healthcare software",
	},
	{
		rate: "99.95% - 99.99% ",
		text: "medical applications availability due to proactive infrastructure monitoring. ",
	},
	{
		rate: "+ 10%",
		text: "productivity of nurses and physicians thanks to the reduced number of medical app issues and timely help desk response ",
	},
	{
		rate: "100%",
		text: "regulatory compliance of the IT infrastructure or its delegated part due to security monitoring",
	},
];

export const itSupport = [
	"13 years of expertise in IT support",
	"18 years of experience in healthcare IT consulting and development ",
	"Working experience with HIPAA and FDA",
	"Mature quality and security management systems backed by ISO 9001 and ISO 27001.",
	"15 years of experience in ITIL-compliant IT service management ",
];
