const healthCare = [
	[
		{
			value: " What types of healthcare solutions do you need?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Patient records management" +
				"● \n" +
				"● \n" +
				"● \n" +
				"● \n" +
				"● \n" +
				"● \n" +
				"● \n" +
				"● \n" +
				"",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Patient treatment planning and monitoring",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{ value: " Medical staff knowledge base", status: "notChecked", data: "button", check: "list", },
		{
			value: " Billing and claims management",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Voice assistance",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Dictation Handwriting and image recognition",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " AI-powered medication prescription assistance",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " AI-based treatment and care planning",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Remote patient monitoring using connected medical devices Telehealth functionality",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: "Which app version do you currently need?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},

		{
			value: " An MVP",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{ value: " A full release version", status: "notChecked", data: "button", check: "radio" },
	],
	[
		{
			value: " Do you need to migrate data from legacy software?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{ value: "No", status: "notChecked", data: "button", check: "radio" },
	],
	[
		{
			value: " What type of healthcare software do you need?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Desktop App",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Mobile App",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{ value: " Web App", status: "notChecked", data: "button", check: "list" },
	],
	[
		{
			value: " What is the expected number of Users?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " 1-100",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 100 - 500",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{ value: " 500 - 1000", status: "notChecked", check: "list" },
		{
			value: " 1000 - 5000+",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Do you have tech stack preferences?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " [yes? Pls specify]",
			status: "notChecked",
			data: "input",
		},
	],
];
const retail = [
	[
		{
			value: " What types of retail solutions do you need?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " E-commerce Platforms",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Inventory Management Systems",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{ value: " Customer Relationship Management (CRM) Software: CRM solutions help\n" +
				"businesses manage customer interactions, track customer data, and enhance\n" +
				"customer service and retention.", status: "notChecked", data: "button", check: "list",},
		{
			value: " Analytics and Reporting Tools",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Staff Scheduling and Timekeeping Systems",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: " What types of customers do you serve?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},

		{
			value: " Businesses",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{ value: " Individuals", status: "notChecked", data: "button", check: "radio" },
		{
			value: " Both",
			status: "notChecked",
			data: "button",
			check: "radio",
		},

		{
			value: " Others(pls specify)",
			status: "notChecked",
			data: "input",
		},
	],
	[
		{
			value: " What version of a CRM do you currently need?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " MVP",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{ value: " Full version", status: "notChecked", data: "button", check: "radio" },
	],
	[
		{
			value: " How many employees will use it?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " 1-100",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 100-250",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{ value: " 250-1000", status: "notChecked", data: "button", check: "radio", },
		{
			value: " 1000+",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " What is your planned monetization strategy?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Subscription",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Freemium (optional in-app purchases)",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{ value: " Paid installation", status: "notChecked", data: "button", check: "radio" },
		{
			value: " Ads",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Percent from transaction cost",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{ value: " I don't plan to monetize my app", status: "notChecked", data: "button", check: "radio",},
		{
			value: " [others pls type]",
			status: "notChecked",
			data: "input",
		},
	],
	[
		{
			value: " Will we need to integrate your CRM with corporate systems or third-party services?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Yes (pls specify which system)",
			status: "notChecked",
			data: "input",
		},
	],
	[
		{
			value: " Do you need a mobile CRM app?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Maybe",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Please share with us any additional details you find important",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Please share",
			status: "notChecked",
			data: "input",
		},
	],
];
const bankingAndFinance = [
	[
		{
			value: " What types of retail solutions do you need?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Fraud Detection and Prevention Systems",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Investment and Trading Platforms",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{ value: " Treasury Management System",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Financial Planning and Wealth Management Software",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Payment Processing Solutions",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{ value: " Online Banking Portals",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Core Banking Systems",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: " What version of a CRM do you currently need?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},

		{
			value: " An MVP",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " A fully-featured solution",
			status: "notChecked",
			data: "button",
			check: "radio"
		},
	],
	[
		{
			value: " What type of banking software do you need?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Web",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{ value: " Desktop",
			status: "notChecked",
			data: "button",
			check: "radio"
		},
		{
			value: " Mobile",
			status: "notChecked",
			data: "button",
			check: "radio"
		},
	],
	[
		{
			value: " How many users or employees will be utilising the solution?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " 1-100",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 100-250",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{ value: " 250-1000",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 1000-100,000",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 100,000+",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " What is your planned monetization strategy?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Subscription",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Freemium (optional in-app purchases)",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Paid installation",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Ads",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Percent from transaction cost",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " I don't plan to monetize my app",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: "others",
			status: "notChecked",
			data: "button",
			check: "radio"
		},
	],
	[
		{
			value: " What are the required functionalities or features you need in the solution?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " ",
			status: "notChecked",
			data: "input",
		},
	],
	[
		{
			value: " Do you require any customization or integration with existing systems?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: "Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Are there any specific compliance or regulatory requirements that need to be addressed?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Yes (pls tell us)",
			status: "notChecked",
			data: "input",
		},
	],
	[
		{
			value: " Please share with us any additional details you find important",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: "Please share ",
			status: "notChecked",
			data: "input",
		},
	]
]
const itOutSourcing = [
	[
		{
			value: " What types of IT outsourcing solutions do you need?",
			status: "notChecked",
			data: "text",
			check: "list",
		},
		{
			value: " Application Development and Maintenance",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Quality Assurance and Testing",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{ value: " IT Consulting and Advisory Services", status: "notChecked", data: "button", check: "list", },
		{
			value: " Project Management services",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Web and Mobile Application Development",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Cloud Services Management",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Infrastructure Management and Support",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: " What type of IT outsourcing solution do you require?",
			status: "notChecked",
			data: "text",
			check: "list",
		},

		{
			value: " Application Development and Maintenance",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{ value: " Help Desk and Technical Support, Infrastructure Management and Support", status: "notChecked", data: "button", check: "list" },
		{
			value: " Cloud Services Management",
			status: "notChecked",
			data: "button",
			check: "list",
		},

		{
			value: " IT Security and Compliance",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Data Center Operations",
			status: "notChecked",
			data: "button",
			check: "list",
		},

		{
			value: " Network and Connectivity Management",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Database Administration",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Quality Assurance and Testing",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " IT Consulting and Advisory Services",
			status: "notChecked",
			data: "button",
			check: "list",
		},

		{
			value: " Project Management",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Data Analytics and Business Intelligence",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " ERP Implementation and Support",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Web and Mobile Application Development",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Virtual Chief Information Officer (vCIO) Services",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Other (Specify)",
			status: "notChecked",
			data: "input",
		},
	],
	[
		{
			value: " How many resources or dedicated team members do you need for the IT outsourcing project?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " 1-5",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{ value: " 6-10", status: "notChecked", data: "button", check: "radio" },
		{
			value: " 11-20",
			status: "notChecked",
			data: "button",
			check: "radio",
		},

		{
			value: " 20 or more",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " What is the expected duration of the outsourcing engagement?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Less than 3 months",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 3-6 months",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 6-12 months",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " More than 12 months",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Do you have specific requirements or preferences for the location of the outsourced team?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Onshore",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Offshore",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Nearshore",
			status: "notChecked",
			check: "radio",
		},
		{
			value: " No preference",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " How many hours of service or support do you require per week or month?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Less than 20 hours",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 20-40 hours",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{ value: " 40-80 hours", status: "notChecked", data: "button",check: "radio",},
		{
			value: " More than 80 hours",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Others  Please specify",
			status: "notChecked",
			data: "input",
		},
	],
	[
		{
			value: " Are there any specific certifications or expertise required for the outsourced team members?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Do you require 24/7 support or coverage for your IT outsourcing needs?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Are there any specific security or compliance requirements that need to be met by the outsourced team?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Do you have an estimated budget range for the IT outsourcing project?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " [tell us]",
			status: "notChecked",
			data: "input",
		},
	],
	[
		{
			value: " Are there any other specific requirements or details you would like to provide for the IT outsourcing project?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Specify here",
			status: "notChecked",
			data: "input",
		},
	],
];
const cybersecurity = [
	[
		{
			value: " What security testing type(s) are you interested in?",
			status: "notChecked",
			data: "text",
			check: "list",
		},
		{
			value: " Penetration testing",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Vulnerability assessment",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{ value: " OSINT", status: "notChecked", data: "button", check: "list",},
		{
			value: " Social engineering",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Red teaming",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Compliance testing",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " IT security audit",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Code review",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Others, please specify",
			status: "notChecked",
			data: "input",
		},
	],
	[
		{
			value: "If you need penetration testing, choose the required type(s)",
			status: "notChecked",
			data: "text",
			check: "list",
		},

		{
			value: " Black box",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{ value: " Grey box", status: "notChecked", data: "button", check: "list" },
		{
			value: " White box",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " I’m not sure",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " I don't need it",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: " If you need social engineering testing, choose the required type(s)",
			status: "notChecked",
			data: "text",
			check: "list",
		},
		{
			value: " Phishing",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Spear phishing",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Vishing",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Smishing",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " I’m not sure",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " I don't need it",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: " If you need secure code review, choose the required type(s)",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Automated code review",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Manual code review",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{ value: " I’m not sure", status: "notChecked", data: "button", check: "list" },
		{
			value: " I don't need it",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: " Choose the planned testing target(s)",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " External network",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Internal network",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{ value: " Web applications", status: "notChecked", check: "list" },
		{
			value: " API services",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Mobile applications",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Devices",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Employees",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: " If you need to test your web applications, please fill out",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " [Number of web apps]",
			status: "notChecked",
			data: "input",
		},
		{
			value: " [Number of user roles]",
			status: "notChecked",
			data: "input",
		},
		{ value: " [Number of input fields]",
			status: "notChecked",
			data: "input",
		},

		{
			value: " [Number of dynamic pages]",
			status: "notChecked",
			data: "input",
		},
		{
			value: " [Number of code lines]",
			status: "notChecked",
			data: "input",
		},
	],
	[
		{
			value: " If you need to test your APIs, please fill out",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " [Number of APIs]",
			status: "notChecked",
			data: "input",
		},
		{
			value: " [Number of endpoints]",
			status: "notChecked",
			data: "input",
		},
		{
			value: " [Number of user roles Back]",
			status: "notChecked",
			data: "input"
		},
	],
];
const manufacturing = [
	[
		{
			value: " What kind of manufacturing service do you need?",
			status: "notChecked",
			data: "text",
			check: "list",
		},
		{
			value: "Product Lifecycle Management (PLM) Software",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: "Manufacturing Execution Systems (MES). MES solutions monitor and control\n" +
				"shop floor activities.",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{ value: "Internet of Things (IoT) Solutions: IoT-enabled solutions connect machines,\n" +
				"devices, and sensors to collect real-time data for monitoring equipment\n" +
				"performance, predictive maintenance, and optimising production processes.",
			status: "notChecked",
			data: "button",
			check: "list",},
		{
			value: "Manufacturing Mobile Applications",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: "Document Management Systems",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: "Warehouse Management Systems (WMS): WMS solutions automate\n" +
				"warehouse operations, including inventory tracking, order fulfilment,\n" +
				"pick-pack-ship processes, and optimization of storage space.",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],

	[
		{
			value: "What version of a CRM do you currently need?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},

		{
			value: " An MVP",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{ value: "A fully-featured solution",
			status: "notChecked",
			data: "button",
			check:  "radio",
		},
	],
	[
		{
			value: "What type of banking software do you need",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Web",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Desktop",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Mobile",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: "Who are the potential users of your future app?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: "Individual customers",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: "Corporate customers",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: "Partners Employees",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: "What is your planned monetization strategy?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Subscription",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Freemium (optional in-app purchases)",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Paid installation",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Ads",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Percent from transaction cost",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " I don't plan to monetize my app",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " others",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
];
const education = [
	[
		{
			value: "What types of education solutions do you need?",
			status: "notChecked",
			data: "text",
			check: "list",
		},
		{
			value: " Learning Management Systems (LMS)",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Assessment and Exam Management Systems",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Online Tutoring and Mentoring Platforms",
			status: "notChecked",
			data: "button",
			check: "list"
		},
		{
			value: " Educational Apps and Mobile Learning Solutions",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Digital Libraries and Online Resources",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Language Learning Software",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: "What version of a CRM do you currently need?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},

		{
			value: " An MVP",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{ value: "A fully-featured solution", status: "notChecked", data: "button", check: "radio",},
	],
	[
		{
			value: "What type of banking software do you need",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Web",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Desktop",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Mobile",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: "How many users or learners will be utilising the solution?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " 1-100",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 100-250",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 250-1000",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 1000-100,000",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 100,000+",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: "What is your planned monetization strategy?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Subscription",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Freemium (optional in-app purchases)",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Paid installation",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Ads",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Percent from transaction cost",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " I don't plan to monetize my app",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " others",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Please share with us any additional details you find important",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Specify here in the box",
			status: "notChecked",
			data: "input",
		},
	],
];
const softwareDevelopment = [
	[
		{
			value: "What type of app do you want to develop?",
			status: "notChecked",
			data: "text",
			check: "list",
		},
		{
			value: " Telehealth (patient/hospital solution, telemedicine app, wellness, etc.)",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " On-demand service marketplace app E-commerce",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " FinTech (mobile banking app, wallet, etc.)",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " IoT (device control / monitoring app)",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Social network, dating app Communication (messenger, VoIP, etc.)",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Business (productivity, BI, field service, partner app, etc.)",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Mobile learning (education, training app) Booking (ticketing, scheduling, etc.)\n" +
				"News and media (IPTV, media player, etc.)",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: "What platforms do you plan to target?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " iOS",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{ value: " Android",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " both",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: "Which app version do you currently need?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " An MVP",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " A full release version",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: "Do you have a complementing web-based solution (website, app, portal)?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes, and I’m fully content with it.",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Yes, but I plan to modernise it soon.",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No, and I need assistance with developing it as well.",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No, and I don’t plan to have one in the near future.",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: "If you have a web app, do you plan to integrate your future mobile app with its back end?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No, I want a separate back end for my mobile app.",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: "Do you already have finalised UX and/or UI samples?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No, I’ll need Tanta’s assistance with the design.",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No, but I’m planning to contact a dedicated design agency.",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
];
const itConsulting = [
	[
		{
			value: " What IT consulting solutions do you need?",
			status: "notChecked",
			data: "text",
			check: "list",
		},
		{
			value: " IT Strategy Consulting",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " IT Infrastructure Assessment and Design",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Cloud Computing Consulting",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " IT Project Management",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " IT Security Consulting",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Cloud Computing Consulting",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: " What is the size of your company?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " 1-50 employees",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{ value: " 51-200 employees",
			status: "notChecked",
			data: "button",
			check: "radio"
		},
		{
			value: " 201-500 employees",
			status: "notChecked",
			data: "button",
			check: "radio"
		},
		{
			value: " 501-1,000 employees",
			status: "notChecked",
			data: "button",
			check: "radio"
		},
	],
	[
		{
			value: " What is the size of your IT department?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " 1-20 specialists",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 21-50 specialists",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 51-100 specialists",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 100+ specialists",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " What challenges do you face?",
			status: "notChecked",
			data: "text",
			check: "list",
		},
		{
			value: " Lack of organisation in IT operations",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Problems with IT ticket processing",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " High IT operational costs",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Lack of automation in IT operations",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Lack of IT resources",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Issues with IT vendors",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " IT integration after M&A",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Digital transformation goes slow",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Slow software development process",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Application / service instability",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Legacy apps / challenging application modernization",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Large upcoming implementation project",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Cloud migration",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Cybersecurity or compliance concerns",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: " What infrastructure components need improvement?",
			status: "notChecked",
			data: "text",
			check: "list",
		},
		{
			value: " Cloud services",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " On-premise data centre",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Data management & analytics Business applications",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Application integrations",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Network infrastructure Network security",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: "Please share with us any additional details you find important",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " ",
			status: "notChecked",
			data: "textarea",
		},
	],
];
const dataAnalytics = [
	[
		{
			value: " What data analytics solution do you need",
			status: "notChecked",
			data: "text",
			check: "list",
		},
		{
			value: " Business Intelligence (BI) Reporting and Dashboards",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Data Visualization",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Data Warehousing and Integration",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Data Privacy and Security",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Data Strategy and Roadmap Development",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: " Which statement best describes your situation?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " We want to enable cost-effective storage and analysis of large data volumes.",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " We want to improve, upgrade, or change our existing big data solution.",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " We want to develop a fault-tolerant, low-latency big data application.",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " [Others please specify]",
			status: "notChecked",
			data: "textarea",

		},
	],
	[
		{
			value: " How would you describe your current/target big data solution?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " An analytics solution (for reporting, forecasting, intelligent recommendations, etc.)",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " An operational system (e.g., a streaming service, an online game, a ridesharing app).",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " A complex solution that combines both analytical and operational components.",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " What is your current/expected data volume?",
			status: "notChecked",
			data: "text",
			check: "list",
		},
		{
			value: " [pls specify]",
			status: "notChecked",
			data: "textarea",
		},
	],
	[
		{
			value: " What is the nature of the data sources of your current/target big data solution?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Internal sources (e.g., ERP, CRM, EAM, SCM, equipment sensor data, etc.)",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " [pls specify which applies]",
			status: "notChecked",
			data: "input",
		},
		{
			value: " External sources (social media, market data, user apps data)",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " [pls specify which applies]",
			status: "notChecked",
			data: "input",
		},
	],
	[
		{
			value: " Are you planning to implement/upgrade real-time processing capabilities?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Didn’t find the question that would allow you to describe your big data goals and needs?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " [pls write us here ]",
			status: "notChecked",
			data: "textarea",
		},
	],
];
const iotServices = [
	[
		{
			value: " What IOT services do you need?",
			status: "notChecked",
			data: "text",
			check: "list",
		},
		{
			value: " IoT Consulting",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " IoT Platform Development",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Industrial IoT (IIoT) Solutions",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Smart Transportation and Logistics",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Smart Retail",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " IoT Security",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Data Analytics and Insights",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Connected Healthcare",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: " How many IoT devices/sensors will be deployed?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Less than 50,",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 50-100,",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 100-500,",
			status: "notChecked",
			data: "button",
			check: "radio" },
		{
			value: " 500 or more",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " [others]",
			status: "notChecked",
			data: "textarea",
		},
	],
	[
		{
			value: " What is the expected data volume generated by IoT devices per day/month?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Less than 1GB,",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 1-10GB,",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 10-100GB,",
			status: "notChecked",
			data: "button",
			check: "radio" },
		{
			value: " 100GB or more",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " [others]",
			status: "notChecked",
			data: "textarea",
		},
	],
	[
		{
			value: " Do you require a custom IoT platform or can an existing platform be utilised?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Custom development",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Existing platform",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " I’m not sure",
			status: "notChecked",
			data: "button",
			check: "radio"
		},
	],
	[
		{
			value: " Will the IoT solution require integration with existing systems or databases?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " What level of data analytics and insights do you require?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Basic reporting",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Advanced analytics",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Predictive modelling",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Will the IoT solution require mobile applications or web interfaces for user interaction?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Mobile apps",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Web interfaces",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Both",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " None",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Are there any additional customizations or specific requirements for the IoT solution?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " [pls specify]",
			status: "notChecked",
			data: "textarea",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
];
const uiux = [
	[
		{
			value: " What types of UI/UX solutions do you need?",
			status: "notChecked",
			data: "text",
			check: "list",
		},
		{
			value: " User Research and Personal Development",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " User Interface (UI) Design",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " User Experience (UX) Design",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Information Architecture",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Interaction Design",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Responsive and Mobile Design",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Prototyping and Wireframing",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " UI/UX Documentation and Style Guides",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: " How many screens or pages are included in your digital product/service?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " 1-5",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 6-10",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 11-20",
			status: "notChecked",
			data: "button",
			check: "radio" },
		{
			value: " 20 or more",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Do you require user research and personal development?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Is there an existing design or wireframe that needs improvement, or is the design starting from scratch?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Improving existing design",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Starting from scratch",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Will the UI/UX design need to be responsive and adaptable to different screen sizes?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Not sure",
			status: "notChecked",
			data: "button",
			check: "radio"
		},
	],
	[
		{
			value: " Do you require information architecture and user flow design?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Not sure",
			status: "notChecked",
			data: "button",
			check: "radio"
		},
	],
	[
		{
			value: " Is there a need for custom illustrations, icons, or visual assets?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " maybe",
			status: "notChecked",
			data: "button",
			check: "radio"
		},
	],
	[
		{
			value: " Do you require prototyping and wireframing services?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " What is the expected duration of the UI/UX project implementation?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Less than 3 months",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 3-6 months",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 6-12 months",
			status: "notChecked",
			data: "button",
			check: "radio"
		},
		{
			value: " More than 12 months",
			status: "notChecked",
			data: "button",
			check: "radio"
		},
	],
	[
		{
			value: " Are there any additional customizations or specific requirements for the UI/UX design?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " [specify here]",
			status: "notChecked",
			data: "textarea",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
];
const itInfrastructure = [
	[
		{
			value: " What types of IT infrastructure service do you need?",
			status: "notChecked",
			data: "text",
			check: "list",
		},
		{
			value: " Cloud migration",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Cloud infrastructure security",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Cloud infrastructure management",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Cloud infrastructure consulting",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Stable work and undemanding support",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " IT infrastructure consulting",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: " How many servers need to be virtualized or consolidated?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " None,",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 1-5",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 6-10",
			status: "notChecked",
			data: "button",
			check: "radio" },
		{
			value: " 10 or more",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " What is the estimated storage capacity required for data storage and backup?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Less than 1TB",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 1-10TB",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 10-100TB",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " 100TB or more",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Are you considering adopting cloud computing solutions? If so, what type and estimated usage?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " IaaS, PaaS",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " SaaS",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Not considering",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Do you require the implementation of Virtual Private Networks (VPNs) for secure remote access or site-to-site connectivity?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " What are your data recovery and business continuity requirements?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Basic backup and recovery",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Advanced disaster recovery",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " Not applicable",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Do you have specific IT security requirements? If yes, please provide details.",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
	[
		{
			value: " Are you considering implementing unified communications solutions? If so, what features are required?",
			status: "notChecked",
			data: "text",
			check: "list",
		},
		{
			value: " Voice",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Video",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Messaging",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Collaboration tools",
			status: "notChecked",
			data: "button",
			check: "list",
		},
		{
			value: " Not considering",
			status: "notChecked",
			data: "button",
			check: "list",
		},
	],
	[
		{
			value: " Are there any additional customizations or specific requirements for your IT infrastructure solution?",
			status: "notChecked",
			data: "text",
			check: "radio",
		},
		{
			value: " Yes",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
		{
			value: " [Specify us]",
			status: "notChecked",
			data: "textarea",
		},
		{
			value: " No",
			status: "notChecked",
			data: "button",
			check: "radio",
		},
	],
];

export const data = [
	healthCare,
	itOutSourcing,
	cybersecurity,
	manufacturing,
	education,
	softwareDevelopment,
	itConsulting,
	dataAnalytics,
	iotServices,
	uiux,
	itInfrastructure,
	retail,
	bankingAndFinance,
];
