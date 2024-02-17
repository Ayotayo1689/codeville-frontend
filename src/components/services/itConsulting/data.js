import AboutImg from "../../../../public/assets/consulting/aboutimg.svg";

//Services Images
import S1 from "../../../../public/assets/consulting/service1.png";
import S2 from "../../../../public/assets/consulting/service2.png";
import S3 from "../../../../public/assets/consulting/service3.png";
import S4 from "../../../../public/assets/consulting/service4.png";

//Expertise Images
import Ex1 from "../../../../public/assets/consulting/ex1.svg";
import Ex2 from "../../../../public/assets/consulting/ex2.svg";
import Ex3 from "../../../../public/assets/consulting/ex3.svg";
import Ex4 from "../../../../public/assets/consulting/ex4.svg";
import Ex5 from "../../../../public/assets/consulting/ex5.svg";
import Ex6 from "../../../../public/assets/consulting/ex6.svg";
import Ex7 from "../../../../public/assets/consulting/ex7.svg";
import Ex8 from "../../../../public/assets/consulting/ex8.svg";

//Customer  Images
import C1 from "../../../../public/assets/consulting/c1.svg";
import C2 from "../../../../public/assets/consulting/c2.svg";
import C3 from "../../../../public/assets/consulting/c3.svg";
import C4 from "../../../../public/assets/consulting/c4.svg";
import C5 from "../../../../public/assets/consulting/c5.svg";
import C6 from "../../../../public/assets/consulting/c6.svg";
import C7 from "../../../../public/assets/consulting/c7.svg";
import C8 from "../../../../public/assets/consulting/c8.svg";

//Business Images
import B1 from "../../../../public/assets/consulting/b1.svg";
import B2 from "../../../../public/assets/consulting/b2.svg";
import B3 from "../../../../public/assets/consulting/b3.svg";
import B4 from "../../../../public/assets/consulting/b4.svg";
import B5 from "../../../../public/assets/consulting/b5.svg";

//Index Images
import P1 from "../../../../public/assets/consulting/p1.png";
import P2 from "../../../../public/assets/consulting/p2.png";
import P3 from "../../../../public/assets/consulting/p3.png";
import P4 from "../../../../public/assets/consulting/p4.png";
import P5 from "../../../../public/assets/consulting/p5.png";
import P6 from "../../../../public/assets/consulting/p6.png";
import P7 from "../../../../public/assets/consulting/p7.png";
import P8 from "../../../../public/assets/consulting/p8.png";
import P9 from "../../../../public/assets/consulting/p9.png";

//CaseStudies Images
import Case1 from "../../../../public/assets/consulting/case1.svg";
import Case2 from "../../../../public/assets/consulting/case2.svg";
import Case3 from "../../../../public/assets/consulting/case3.svg";
import Approve from "../../../../public/assets/consulting/mdi_approve.svg";

//Healthcare Solutions Images
import Solution1 from "../../../../public/assets/consulting/solution1.svg";
import Solution2 from "../../../../public/assets/consulting/solution2.svg";
import Solution3 from "../../../../public/assets/consulting/solution3.svg";
import Solution4 from "../../../../public/assets/consulting/solution4.svg";
import Solution5 from "../../../../public/assets/consulting/solution5.svg";
import Solution6 from "../../../../public/assets/consulting/solution6.svg";

// IMPORT FOR COMPANIES IMAGES
import Company1 from "../../../../public/assets/consulting/logistics/company1.svg";
import Company2 from "../../../../public/assets/consulting/logistics/company2.svg";
import Company3 from "../../../../public/assets/consulting/logistics/company3.svg";
import Company4 from "../../../../public/assets/consulting/logistics/company4.svg";
import Company5 from "../../../../public/assets/consulting/logistics/company5.svg";
import Company6 from "../../../../public/assets/consulting/logistics/company6.svg";

// IMPORT FOR LOGISTICS SOLUTIONS IMAGES
import Solution11 from "../../../../public/assets/consulting/logistics/log1.svg";
import Solution22 from "../../../../public/assets/consulting/logistics/log2.svg";
import Solution33 from "../../../../public/assets/consulting/logistics/log3.svg";
import Solution44 from "../../../../public/assets/consulting/logistics/log4.svg";
import Solution55 from "../../../../public/assets/consulting/logistics/log5.svg";
import Solution66 from "../../../../public/assets/consulting/logistics/log6.svg";

//IMPORT FOR ASSETS MANAGEMENT IMAGES
import Asset1 from "../../../../public/assets/consulting/logistics/asset1.svg";
import Asset2 from "../../../../public/assets/consulting/logistics/asset2.svg";
import Asset3 from "../../../../public/assets/consulting/logistics/asset3.svg";
import Asset4 from "../../../../public/assets/consulting/logistics/asset4.svg";

// IMPORT FOR LOGISTICS SERVICES
import Service1 from "../../../../public/assets/consulting/logistics/service1.svg";
import Service2 from "../../../../public/assets/consulting/logistics/service2.svg";
import Service3 from "../../../../public/assets/consulting/logistics/service3.svg";
import Service4 from "../../../../public/assets/consulting/logistics/service4.svg";
import Service5 from "../../../../public/assets/consulting/logistics/service5.svg";

//FLEET IMAGES
import Fleet from "../../../../public/assets/consulting/logistics/fleets.svg";
import appRoutes from "../../../utils/appRoutes";

export const advantagesOfLogistics = [
	{
		id: 1,
		title: "Optimized software implementation cost",
		items: [
			{
				id: 1,
				name: "We design T&L solution functionality based on our customers needs not to implement unnecessary features.",
			},
			{
				id: 2,
				name: "We rely on iterative development to introduce essential T&L software features first and enable faster payback from software implementation.",
			},
			{
				id: 3,
				name: "We use proven frameworks and development and ensure high T&L software quality.",
			},
			{
				id: 4,
				name: "We opt for cost-efficient cross-platform techs (React Native, Flutter, Xamarin, etc.) to develop mobile T&L apps.",
			},
		],
	},
	{
		id: 2,
		title: "Bringing business value with advanced technologies",
		desc: () => (
			<div>
				We choose the best-fitting advanced technologies AI, ML, big data, IoT,
				blockchain, AR) for each IT solution to deliver additional value across
				transportation and logistics workflows for our customers.
			</div>
		),
	},
	{
		id: 3,
		title: "Optimal cooperation model",
		desc: () => (
			<div>
				We offer full IT outsourcing, dedicated teams, and team augmentation to
				provide companies with the precise level of cooperation they need.
			</div>
		),
	},
	{
		id: 4,
		title: "Transparent collaboration",
		desc: () => (
			<div>
				We define{" "}
				<span style={{ fontWeight: 700 }}> tailored sets of metrics</span> to
				track the quality of services we deliver and ensure service transparency
				by submitting <span style={{ fontWeight: 700 }}>regular reports</span>{" "}
				on service quality KPIs, use of resources, potential risks, and more.
			</div>
		),
	},
	{
		id: 5,
		title: "Flexible pricing options",
		subtitle: "Depending on the required kind of service, we offer:",
		items: [
			{
				id: 1,
				name: "Time & Material, Time & Material with a cap pricing model – for advisory activities, agile implementation of a T&L solution with frequently changing requirements.",
			},
			{
				id: 2,
				name: "Fixed price model – for a feasibility study and PoC development, T&L solution implementation divided by stages to fix the price for each stage.",
			},
			{
				id: 3,
				name: "A monthly subscription fee – for IT support activities for T&L companies.",
			},
		],
	},
	{
		id: 6,
		title: "Security and compliance",
		desc: () => (
			<div>
				We implement intelligent fraud detection algorithms, authorization
				controls for APIs, data validity confirmation mechanisms, and other
				robust security mechanisms to ensure protection of data stored in a T&L
				solution. Our logistics software development company also help achieve
				and maintain compliance with SOX, SOC 1 and SOC 2, WTO regulations, ISO
				standards, DOT requirements, and other necessary global and regional
				regulations.
			</div>
		),
	},
];
export const logisticsProjects = [
	{
		id: 1,
		title: "Development of a Mobile Fleet Management\n" + "Solution",
		items: [
			"Architecture design, UX and UI design for the mobile fleet\n" +
				"management solution.",
			"Implementation of GPS tracking algorithms, a driver’s self-\n" +
				"invoicing mechanism, automated report generation\n" +
				"capabilities, and more.",
			"Integrating the mobile solution with a back-end server and the\n" +
				"Customer’s ERP.",
		],
		benefit: () => (
			<div>
				<span style={{ fontWeight: 500 }}>Customer’s benefit:</span> a
				significant sales growth due to the solution that helps increase fleet
				efficiency and decrease operational costs.
			</div>
		),
		image: Fleet,
	},
	{
		id: 2,
		title: "Development of a Mobile Fleet Management\n" + "Solution",
		items: [
			"Architecture design, UX and UI design for the mobile fleet\n" +
				"management solution.",
			"Implementation of GPS tracking algorithms, a driver’s self-\n" +
				"invoicing mechanism, automated report generation\n" +
				"capabilities, and more.",
			"Integrating the mobile solution with a back-end server and the\n" +
				"Customer’s ERP.",
		],
		benefit: () => (
			<div>
				<span style={{ fontWeight: 500 }}>Customer’s benefit:</span> a
				significant sales growth due to the solution that helps increase fleet
				efficiency and decrease operational costs.
			</div>
		),
		image: Fleet,
	},
	{
		id: 3,
		title: "Development of a Mobile Fleet Management\n" + "Solution",
		items: [
			"Architecture design, UX and UI design for the mobile fleet\n" +
				"management solution.",
			"Implementation of GPS tracking algorithms, a driver’s self-\n" +
				"invoicing mechanism, automated report generation\n" +
				"capabilities, and more.",
			"Integrating the mobile solution with a back-end server and the\n" +
				"Customer’s ERP.",
		],
		benefit: () => (
			<div>
				<span style={{ fontWeight: 500 }}>Customer’s benefit:</span> a
				significant sales growth due to the solution that helps increase fleet
				efficiency and decrease operational costs.
			</div>
		),
		image: Fleet,
	},
	{
		id: 4,
		title: "Development of a Mobile Fleet Management\n" + "Solution",
		items: [
			"Architecture design, UX and UI design for the mobile fleet\n" +
				"management solution.",
			"Implementation of GPS tracking algorithms, a driver’s self-\n" +
				"invoicing mechanism, automated report generation\n" +
				"capabilities, and more.",
			"Integrating the mobile solution with a back-end server and the\n" +
				"Customer’s ERP.",
		],
		benefit: () => (
			<div>
				<span style={{ fontWeight: 500 }}>Customer’s benefit:</span> a
				significant sales growth due to the solution that helps increase fleet
				efficiency and decrease operational costs.
			</div>
		),
		image: Fleet,
	},
	{
		id: 5,
		title: "Development of a Mobile Fleet Management\n" + "Solution",
		items: [
			"Architecture design, UX and UI design for the mobile fleet\n" +
				"management solution.",
			"Implementation of GPS tracking algorithms, a driver’s self-\n" +
				"invoicing mechanism, automated report generation\n" +
				"capabilities, and more.",
			"Integrating the mobile solution with a back-end server and the\n" +
				"Customer’s ERP.",
		],
		benefit: () => (
			<div>
				<span style={{ fontWeight: 500 }}>Customer’s benefit:</span> a
				significant sales growth due to the solution that helps increase fleet
				efficiency and decrease operational costs.
			</div>
		),
		image: Fleet,
	},
	{
		id: 6,
		title: "Development of a Mobile Fleet Management\n" + "Solution",
		items: [
			"Architecture design, UX and UI design for the mobile fleet\n" +
				"management solution.",
			"Implementation of GPS tracking algorithms, a driver’s self-\n" +
				"invoicing mechanism, automated report generation\n" +
				"capabilities, and more.",
			"Integrating the mobile solution with a back-end server and the\n" +
				"Customer’s ERP.",
		],
		benefit: () => (
			<div>
				<span style={{ fontWeight: 700 }}>Customer’s benefit:</span> a
				significant sales growth due to the solution that helps increase fleet
				efficiency and decrease operational costs.
			</div>
		),
		image: Fleet,
	},
	{
		id: 7,
		title: "Development of a Mobile Fleet Management\n" + "Solution",
		items: [
			"Architecture design, UX and UI design for the mobile fleet\n" +
				"management solution.",
			"Implementation of GPS tracking algorithms, a driver’s self-\n" +
				"invoicing mechanism, automated report generation\n" +
				"capabilities, and more.",
			"Integrating the mobile solution with a back-end server and the\n" +
				"Customer’s ERP.",
		],
		benefit: () => (
			<div>
				<span style={{ fontWeight: 500 }}>Customer’s benefit:</span> a
				significant sales growth due to the solution that helps increase fleet
				efficiency and decrease operational costs.
			</div>
		),
		image: Fleet,
	},
];
export const chooseServices = [
	{
		image: Service1,
		title: "Advanced technology consulting",
		subtitle:
			"ScienceSoft’s consultants advise on the use of cloud, big data, AI and ML, IoT, blockchain, AR and VR technologies for:",
		listItems: [
			"Route modeling and optimization.",
			"Transportation monitoring and risk management.",
			"Demand forecasting and spend planning.",
			"Predictive fleet maintenance.",
			"Advanced operational analytics.",
			"End-to-end traceability of multi-party transactions, and more.",
		],
		link: "#",
		linkTitle: "Go for tech consulting",
	},
	{
		image: Service2,
		title: "T&L product consulting",
		subtitle:
			"ScienceSoft assists in idea productization, brand design, UX and UI design to help you promptly plan and launch a winning T&L solution. You get:",
		listItems: [
			"A clear T&L product concept.",
			"A unique selling proposition to differentiate your product\n" +
				"from competitors’ offerings.",
			"User journey maps and a usability testing report.",
			"A comprehensive UI kit.",
			"An interactive prototype of your T&L solution.",
			"An optimal toolkit to build your T&L product.",
		],
		link: "#",
		linkTitle: "Go for product consulting",
	},
	{
		image: Service3,
		title: "T&L solution implementation",
		listItems: [
			"Designing optimal T&L solution features, architecture, UX and\n" +
				"UI design, tech stack.",
			"Implementation project cost & time estimates, ROI\n" + "calculation.",
			"T&L software development.",
			"Integrating the T&L solution with required software.",
			"Quality assurance.",
			"User training.",
			"Continuous support and evolution of the T&L solution (if\n" +
				"required).",
		],
		link: "#",
		linkTitle: "Go for implementation",
	},
	{
		image: Service4,
		title: "Outsourcing of specific IT functions",
		subtitle:
			"ScienceSoft offers to handle separate IT functions to optimize\n" +
			"the quality and costs of transportation and logistics operations\n" +
			"and provides:",
		listItems: [
			"Outsourced QA",
			"Cybersecurity services.",
			"IT support",
			"Managed infrastructure services",
			"Outsourced help desk",
		],
		link: "#",
		linkTitle: "Go for outsourcing",
	},
	{
		image: Service5,
		title: "IT staff augmentation",
		subtitle:
			"ScienceSoft helps quickly cover resource gaps in your\n" +
			"transportation and logistics IT initiative with the following\n" +
			"experts:",
		listItems: [
			"Developers (Java, .NET, Python, PHP, C++, and more).",
			"Testers (manual and automated testing).",
			"DevOps engineers.",
			"Data analysts.",
			"Automated calculation of due amounts and submission of\n" +
				"customer invoices.",
		],
		link: "#",
		linkTitle: "Go for augmentation",
	},
];
export const advantages = [
	{
		title: "Up to 70%",
		desc:
			"Reduction in time for transportation planning and control\n" +
			"due to automation",
	},
	{
		title: "40%+",
		desc:
			"Improvement in the on-time delivery \n" +
			"rates due to accurate order fulfillment\n" +
			" planning and execution",
	},
	{
		title: "Improved",
		desc:
			"Efficiency and extended lifespan of fleet and warehouse\n" +
			"equipment due to enabled predictive maintenance",
	},
	{
		title: "Decreased",
		desc:
			"Operational costs, including labor costs,\n" +
			" fuel expenses, fleet maintenance costs,\n" +
			" due to the analytics-driven\n" +
			"optimization of T&L operations",
	},
];
export const logisticsSolData = [
	{
		image: Solution11,
		title: "Financial accounting and analytics",
		listItems: [
			"Automated bookkeeping.",
			"Consolidation and analysis of financial big data to reveal key\n" +
				"T&L cost and revenue drivers.",
			"AI-powered analysis and trend-based forecasting of\n" +
				"operational and strategic T&L expenses; suggestions on\n" +
				"spend optimization.",
			"Calculation of operational and strategic T&L savings.",
			"Revenue calculation (by period, customer, region, etc.),\n" +
				"analysis and forecasting.",
		],
	},
	{
		image: Solution22,
		title: "Spend planning and control",
		listItems: [
			"Calculation of transportation cost based on the delivery\n" +
				"mode, shipment distance, fuel cost, cargo weight and size,\n" +
				"number of stops, etc.",
			"Automated allocation of transportation costs to individual\n" +
				"orders.",
			"Planning operational expenses based on the analysis of\n" +
				"historical spend data, data on customer demand, current fuel\n" +
				"and services prices.",
			"Real-time tracking of operational spend by category (fuel, fleet\n" +
				"maintenance, driver payroll, etc.).",
		],
	},
	{
		image: Solution33,
		title: "Labor management",
		listItems: [
			"Labor planning (by period, type of activity, region, etc.) based\n" +
				"on the analysis of historical data on resource requirements\n" +
				"for customer order fulfillment.",
			"Automated task assignment (for drivers, warehouse staff, etc.)\n" +
				"based on the employee availability and operational schedules.",
			"Real-time labor performance monitoring against pre-defined\n" + "KPIs.",
		],
	},
	{
		image: Solution44,
		title: "Customer relationship management",
		listItems: [
			"Centralized storage of customer-related data (general\n" +
				"customer information, interaction history and ongoing\n" +
				"activities, etc.).",
			"Creation, editing, approval, and centralized storage of\n" +
				"customer documents (contracts, invoices, etc.).",
			"Customer claim management.",
			"Customer portal with self-service capabilities.",
		],
	},
	{
		image: Solution55,
		title: "Customer order management",
		listItems: [
			"Automated aggregation of customer orders from a customer\n" +
				"portal, third-party ecommerce platforms, etc.",
			"Prioritization of customer orders based on customer value,\n" +
				"order date, item category, and more.",
			"Analytics-based assignment of preferred carriers to customer\n" +
				"orders.",
			"Real-time tracking of customer order fulfillment progress.",
			"Automated calculation of due amounts and submission of\n" +
				"customer invoices.",
		],
	},
	{
		image: Solution66,
		title: "Vendor relationship management (for LSPs)",
		listItems: [
			"Managing RFxs, e-auctions, e-tenders.",
			"AI-enabled cost-benefit analysis and carrier bid/rate\n" +
				"compliance scoring.",
			"Creation, editing, approval, and centralized storage of carrier\n" +
				"contracts and transport orders.",
			"Automated validation of carrier invoices and submitting them\n" +
				"for payment.",
			"Real-time monitoring of carrier performance against pre-\n" +
				"defined KPIs.",
			"Vendor portal for carrier self-registration and facilitated\n" +
				"communication with carriers.",
		],
	},
];
export const assets = [
	{
		image: Asset4,
		title: "Advanced operational analytics",
		listItems: [
			"Automated aggregation, processing, and AI-powered analysis\n" +
				"of operational big data (transactional data, transportation\n" +
				"process data, fleet data, labor performance data, etc.).",
			"Scheduled and ad hoc analytical reports.",
			"AI-powered analysis and trend-based forecasting of\n" +
				"Trend-based forecasting of customer demand, fleet utilization,\n" +
				"labor utilization, etc.",
			"What-if scenario modeling and operational risk management.",
		],
	},
	{
		image: Asset3,
		title: "Warehouse management",
		listItems: [
			"AI-powered recommendations on optimal storage conditions\n" +
				"for different goods, item putaway and picking routes, type\n" +
				"and amount of order packing.",
			"AR-enabled order picking (pick-by-vision).",
			"Barcode/RFID-enabled monitoring of warehouse inventory\n" + "levels.",
			"AI-powered planning of warehouse labor resources and\n" +
				"equipment, operations in yard, loading docks, etc.",
		],
	},
	{
		image: Asset2,
		title: "Transportation management",
		listItems: [
			"Transportation demand planning.",
			"AI suggestions on optimal transport modes and vehicles,\n" +
				"shipping routes, item consolidation, transportation rates. and\n" +
				"more.",
			"Real-time tracking of transportation progress.",
			"RFID-enabled monitoring of goods transportation conditions\n" +
				"(e.g., temperature, humidity, vibration, etc.).",
			"ML-powered forecasting of shipping time and estimated time\n" +
				"of arrival.",
			"Creation, editing, approval, and centralized storage of\n" +
				"transportation documents (bills of lading, commercial\n" +
				"invoices, etc.).",
			"Automated reverse logistics.",
		],
	},
	{
		image: Asset1,
		title: "Fleet management",
		listItems: [
			"Template-based creation of fleet schedules and task lists for\n" +
				"drivers.",
			"Real-time tracking of vehicle location, fuel consumption,\n" +
				"driver's behavior, tachograph data compliance with applicable\n" +
				"regulations (e.g., DOT requirements for the US), and more.",
			"A mobile application for last mile carriers to enable easy\n" +
				"updates on order shipment status.",
			"Predictive fleet maintenance suggestions powered by IoT and\n" +
				"AI technologies.",
			"Fleet maintenance monitoring in real time and reporting upon\n" +
				"completion.",
		],
	},
];

export const healthcareSolData = [
	{
		image: Solution1,
		title: "Healthcare Data Warehousing",
		listItems: [
			"Designing a data warehouse and data marts for the purpose of structuring healthcare data for analytical querying and reporting.",
			"Storage of protected health information (PHI).",
			"Data from public medical databases, EHR/EMR, ERP, HR management systems, R&D results data, etc. are all integrated into one place.",
		],
	},
	{
		image: Solution2,
		title: "Big Data in Healthcare",
		listItems: [
			"EHR/EMR data, data from medical devices, data from patient apps and portals, and other patient-related data are collected and stored.",
			"Recommendations for a unique care strategy.",
			"Analyses of medical device data in real-time.",
			"Using remote patient monitoring, a doctor can be alerted to trends and patterns in a patient's condition.",
		],
	},
	{
		image: Solution3,
		title: "Healthcare Business Intelligence",
		listItems: [
			"Operational analytics (optimization of staff scheduling, upkeep of facilities, handling of claims, etc.). ",
			"Patient analytics (patient segmentation, analytics of the patient journey, improvement of treatment regimens, etc.). ",
			"Financial analytics (identification of financial fraud, management of financial risk, etc.). ",
			"Monitoring the performance of the medical staff. ",
		],
	},
	{
		image: Solution4,
		title: "Healthcare Data Visualization",
		listItems: [
			"Operational dashboards with real-time self-service (hospital admissions, workload, EMR/EHR data, etc.). ",
			"Key performance indicators, patient trends, hospital performance, etc. are all included in strategic interactive dashboards. ",
		],
	},
	{
		image: Solution5,
		title: "Medical Imaging",
		listItems: [
			"Determining a diagnosis.",
			"Depending on their unique needs, medical history, and other factors, give patients advice or recommendations.",
		],
	},
	{
		image: Solution6,
		title: "Predictive Analysis",
		listItems: [
			"Planning and optimizing the healthcare supply chain (ML-based demand forecasts, supplier risk management, etc.). ",
			"Management of health insurance (identifying ideal health care plans, potentially erroneous claims, high-value losses, etc.). ",
			"Disease management (validation of diagnoses, prediction of readmissions based on machine learning, etc.). ",
		],
	},
];
export const challenges = [
	"Data of different types and structures across disparate systems with different data models.",
	"Data quality issues stemming from poor data management practices and manual data processing.",
	"Data inconsistency (inconsistent definitions across departments, spelling differences due to different locations, etc.).",
	"Inability to secure sensitive data. Varying data analytics and reporting needs.",
	"Data aggregation specificity for different countries and regions (e.g., different tax and accounting rules).",
	"Different levels of data maturity across the enterprise.",
];
export const architechData = [
	{
		title: "Data Integration Layer",
		body: [
			"Standardization of data across multiple data source systems.",
			"Data Deduplication",
			"Data Pre-Aggregation",
			"Identification and removal/update of invalid data from the source systems.",
		],
	},
	{
		title: "Data Storage Layer",
		body: "Tanta Suggests Implementing A Data Warehouse And Its Business-Specific Subsets, Or Data Marts, For Storing Data Across The Entire Organization As Well As For Additional Analytical Querying And Reporting. A Specific Group Can More Easily And Securely Query Corporate Data That Pertains To This Group Thanks To Data Marts. An Operational Data Store And A Data Lake May Also Be Included In A Data Storage Layer.",
	},
	{
		title: "Data Analytics Layer",
		body: "To Analyse Historical Data And Real-Time Data With Data Mining Tools, OLAP Tools, Etc. To Build Predictive Models And Run What-If Scenarios With ML Services.",
	},
];
export const architechData2 = [
	{
		title: "Data Reporting Layer",
		body: "To Run Ad Hoc Queries With Self-Service BI Tools. To Create Charts, Heat Maps, Diagrams, etc., With Data Visualization Tools.",
	},
	{
		title: "Data Presentation Layer",
		body: "Pre-built and custom reports, dashboards, and scorecards to view all kinds of business data. Interactive dashboards and web portals with drill-down capabilities, filtering functionality, and configurable views for real-time data access. ML-based recommendations and prescriptions, alerts and notifications.",
	},
];
export const includedData = [
	{
		image: Approve,
		title: "Driven to innovate",
		body: "Traditionally specializing in time-proven programming, we don't overlook new developments. Now, we are focusing on the smart connected devices, ecosystems, decentralized ledgers, P2P transactions, as well as AI-powered smart automation.",
	},
	{
		image: Approve,
		title: "Experience unmatched",
		body: "In our international network of IT consultants, solution architects, tech teams, data and security engineers, we'll help you from problem identification to solution implementation. We'll be there all the way, and we won't stop halfway.",
	},
	{
		image: Approve,
		title: "Proud of our success stories",
		body: "Our portfolio includes advisory, software implementation, and digital transformation projects. Our experts manage the regulatory and compliance requirements of more than 30 industries.",
	},
];
export const sideBarLogistics = [
	{
		title: "Service options",
		goto: "#options",
	},
	{
		title: "About Tanta",
		goto: "#about",
	},
	{
		title: "Solutions we cover",
		goto: "#solutions",
	},
	{
		title: "Assets management",
		goto: "#assets",
	},
	{
		title: "Why Tanta",
		goto: "#whyTanta",
	},
	{
		title: "Advantages using Tanta",
		goto: "#usingUs",
	},
	{
		title: "Selected projects",
		goto: "#projects",
	},
	{
		title: "Our customers say",
		goto: "#reviews",
	},
	{
		title: "Highlights of our services",
		goto: "#services",
	},
	{
		title: "Take advantage",
		goto: "#benefits",
	},
];
export const sideBarData = [
	{
		title: "About Tanta Innovative",
		goto: "#about",
	},
	{
		title: "Our Services",
		goto: "#services",
	},
	{
		title: "Industry Expertise",
		goto: "#expertise",
	},
	{
		title: "Our Customer",
		goto: "#customers",
	},

	{
		title: "Business We Transform",
		goto: "#business",
	},

	{
		title: "Portfolio",
		goto: "#portfolio",
	},

	{
		title: "Customer Reviews",
		goto: "#reviews",
	},

	{
		title: "Summary",
		goto: "#summary.js",
	},

	{
		title: "Consulting Projects",
		goto: "#projects",
	},
];
export const sideBarHealthcare = [
	{
		title: "Analytic solutions",
		goto: "#solutions",
	},
	{
		title: "Reliable partner",
		goto: "#partners",
	},
	{
		title: "Customer Reviews",
		goto: "#reviews",
	},
	{
		title: "Summary",
		goto: "#summary.js",
	},

	{
		title: "Consulting Projects",
		goto: "#projects",
	},
];
export const sideBarCloud = [
	{
		title: "Included in this Package",
		goto: "#included",
	},
	{
		title: "Industry Expertise",
		goto: "#expertise",
	},
	{
		title: "Our Customer",
		goto: "#customers",
	},

	{
		title: "Business Areas We Transform",
		goto: "#business",
	},
	{
		title: "Customer Reviews",
		goto: "#reviews",
	},

	{
		title: "Summary",
		goto: "#summary.js",
	},

	{
		title: "All IT Consulting Services",
		goto: "#allServices",
	},
];

export const sideBarEnterprise = [
	// {
	//     title: "Included in this Package",
	//     goto: "#challenges",
	// },
	{
		title: "Challenges addressed",
		goto: "#challenges",
	},
	{
		title: "Architecture",
		goto: "#architecture",
	},

	{
		title: "Reliable partner",
		goto: "#partners",
	},
	{
		title: "Customer Reviews",
		goto: "#reviews",
	},
	{
		title: "Summary",
		goto: "#summary.js",
	},

	{
		title: "Consulting Projects",
		goto: "#projects",
	},
];
export const companies = [
	{
		img: Company1,
		title: "Logistics service providers (LSPs)",
		desc: () => (
			<div>
				Freight forwarders, third-party and fourth-party logistics service
				providers.
			</div>
		),
	},
	{
		img: Company2,
		title: "Transportation service providers (TSPs)",
		desc: () => (
			<div>
				<span style={{ textDecoration: "underline" }}>Trucking,</span>{" "}
				<span style={{ textDecoration: "underline" }}>air,</span>{" "}
				<span style={{ textDecoration: "underline" }}>rail,</span> water, and
				multi-modal carriers, including last-mile "delivery providers.
			</div>
		),
	},
	{
		img: Company3,
		title: "Courier express parcel (CEP) companies",
		desc: () => (
			<div> CEP services providers operating in B2B and B2C segments.</div>
		),
	},
	{
		img: Company4,
		title: "Logistics marketplaces",
		desc: () => (
			<div>
				{" "}
				Providers of digital platforms that enable direct interaction between
				multiple T&L providers and buyers of T&L services.
			</div>
		),
	},
	{
		img: Company5,
		title: "IT product companies",
		desc: () => (
			<div>
				{" "}
				Companies looking to develop software "products for the T&L industry.
			</div>
		),
	},
	{
		img: Company6,
		title: "Enterprises involved in T&L activities",
		desc: () => (
			<div>
				{" "}
				Non-T&L companies that need to manage large T&L teams and in-house
				fleet.
			</div>
		),
	},
];
export const about = [
	{
		img: AboutImg,
		title: "Our Journey to IT Consulting",
		details:
			"Tanta Innovative Limited began as a small repair company and shifted to IT services in 2016. We're dedicated to helping clients succeed.",
	},
	{
		img: AboutImg,
		title: "Why Choose Us for IT Consulting",
		details:
			"Tanta Innovative Limited delivers innovative IT solutions that help businesses grow. Our team is committed to providing personalized service and excellent results.",
	},

	{
		img: AboutImg,
		title: "Meet Our IT Experts",
		details:
			"Our team of IT experts has decades of experience across various industries. We're passionate about helping clients grow and achieve their goals.",
	},
];

export const services = [
	{
		img: S1,
		title: "IT Strategy Consulting",
		details:
			"Our IT strategy consulting service helps clients align their technology with their business goals.",
		link: "it-consulting/it-strategy-consulting",
	},
	{
		img: S2,
		title: "Cybersecurity Consulting",
		details:
			"Our IT strategy consulting service helps clients align their technology with their business goals.",
		link: "",
	},
	{
		img: S3,
		title: "Cloud Computing Consulting",
		details:
			"Our IT strategy consulting service helps clients align their technology with their business goals.",
		link: "/services/it-consulting/cloud-computing",
	},
	{
		img: S4,
		title: "Data Analytics Consulting",
		details:
			"Our IT strategy consulting service helps clients align their technology with their business goals.",
		link: "it-consulting/data-analytics-consulting",
	},
	{
		img: S3,
		title: "IT Assessment",
		details:
			"Our IT strategy consulting service helps clients align their technology with their business goals.",
		link: "it-consulting/it-assesment",
	},
	{
		img: S4,
		title: "Digital Transformation Consulting",
		details:
			"Our IT strategy consulting service helps clients align their technology with their business goals.",
		link: "it-consulting/digital-transformation-consulting",
	},
	{
		img: S3,
		title: "Data Science Consulting",
		details:
			"Our IT strategy consulting service helps clients align their technology with their business goals.",
		link: "it-consulting/data-science-consulting",
	},
	{
		img: S4,
		title: "Healthcare Data Analytics",
		details:
			"Our IT strategy consulting service helps clients align their technology with their business goals.",
		link: "it-consulting/healthcare-data-analytics",
	},
];

export const experts = [
	{
		img: Ex1,
		heading: "Healthcare",
		link: "/services/it-consulting/healthcare-it-support",
	},
	{
		img: Ex2,
		heading: "Manufacturing",
		link: "it-consulting/manufacturing-consulting",
	},
	{
		img: Ex3,
		heading: "transportation",
		link: "/services/it-consulting/logistics-consulting",
	},
	{
		img: Ex4,
		heading: "telecommunication",
		link: "/services/it-consulting/telecom-consulting",
	},
	{
		img: Ex5,
		heading: "banking",
		link: "/services/it-consulting/banking",
	},
	{
		img: Ex6,
		heading: "oil & gas",
		link: "/services/it-consulting/oil-and-gas",
	},
	{
		img: Ex7,
		heading: "retail",
		link: "/services/it-consulting/retail-ItConsulting",
	},
	{
		img: Ex8,
		heading: "consulting",
		link: "/services/it-consulting/big-data-consulting",
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
		link: "/services/it-consulting/erp-services",
	},
	{
		img: B2,
		title: "SOCIAL CHAIN MANAGEMENT",
		details:
			"Our social chain management consulting service can help your business effectively manage your social media presence. From social media strategy to content creation, we can help you connect with your audience and drive engagement.",
		link: "/services/it-consulting",
	},

	{
		img: B3,
		title: "FINANCIAL MANAGEMENT",
		details:
			"Our financial management consulting service helps businesses make informed financial decisions and optimize their financial performance. We can assist with everything from financial planning and analysis to budgeting and forecasting.",
		link: "/services/it-consulting",
	},
	{
		img: B4,
		title: "OPERATIONS MANAGEMENT",
		details:
			"Our operations management consulting service helps businesses improve productivity, reduce costs, and streamline processes. We work with you to identify areas for improvement and implement solutions that drive results.",
		link: "/services/it-consulting/operational-analytics",
	},
	{
		img: B5,
		title: "ASSET MANAGEMENT",
		details:
			"Our asset management consulting service helps businesses manage their assets, reduce downtime, and extend asset life. From maintenance planning to equipment replacement, we can help you optimize your asset management strategy.",
		link: "/services/it-consulting",
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
		title: "Strategy/Business Model Assessment",
		items: [
			{ id: 1, name: "The ROI Methodology" },
			{ id: 2, name: "Business/Functional Canvas" },
			{ id: 3, name: "Organizational Process Assets (OPA)" },
			{ id: 4, name: "Enterprise Environmental Factors (EEF)" },
		],
	},
	{
		title: "Customer Requirements Gathering",
		items: [
			{ id: 1, name: "The ROI Methodology" },
			{ id: 2, name: "Business/Functional Canvas" },
			{ id: 3, name: "Organizational Process Assets (OPA)" },
			{ id: 4, name: "Enterprise Environmental Factors (EEF)" },
		],
	},
	{
		title: "Problem/Goals Decomposition",
		items: [
			{ id: 1, name: "The ROI Methodology" },
			{ id: 2, name: "Business/Functional Canvas" },
			{ id: 3, name: "Organizational Process Assets (OPA)" },
			{ id: 4, name: "Enterprise Environmental Factors (EEF)" },
		],
	},
	{
		title: "Improvement of Business Process",
		items: [
			{ id: 1, name: "The ROI Methodology" },
			{ id: 2, name: "Business/Functional Canvas" },
			{ id: 3, name: "Organizational Process Assets (OPA)" },
			{ id: 4, name: "Enterprise Environmental Factors (EEF)" },
		],
	},
];

export const summary = ["Company Benefits", "Mission & Vision", "Need Help?"];

export const benefits = [
	"Interactively monetize customer",
	"Enthusiastically underwhelm distinctive",
	"Energistically fabrica intuitive infomediaries",
	"Continually expedite standards compliant",
];

export const caseStudies = [
	{
		id: 1,
		image: Case1,
		title: "Successful Implementation of EHR System at Regional Hospital",
		subTitle: "Electronic Health",
		description:
			"This project involved partnering with a regional hospital to implement a new electronic health record (EHR) system,...",
		link: "/services/it-consulting",
	},
	{
		id: 2,
		image: Case2,
		title: "Cloud Migration for Large Healthcare Provider",
		subTitle: "Infrastructure Modernization",
		description:
			"This project involved helping a large healthcare provider migrate its IT infrastructure from on-premise servers to the cloud...",
		link: "/services/it-consulting",
	},
	{
		id: 3,
		image: Case3,
		title: "Data Analytics Solution for Health Insurance Provider",
		subTitle: "Healthcare Data Analytics",
		description:
			"This project involved developing a custom data analytics solution for a health insurance provider, which allowed them to gain insights into their members' health...",
		link: "/services/it-consulting",
	},
	{
		id: 4,
		image: Case3,
		title: "Data Analytics Solution for Health Insurance Provider",
		subTitle: "Healthcare Data Analytics",
		description:
			"This project involved developing a custom data analytics solution for a health insurance provider, which allowed them to gain insights into their members' health...",
		link: "/services/it-consulting",
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
