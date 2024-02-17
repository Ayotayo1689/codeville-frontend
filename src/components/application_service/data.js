import {
    box, checklist,
    dashboard,
    greenDev,
    mic,
    redDev,
    stats,
    yellowDev,
    redMan, greenMan, blueMan, redInt, blueInt, greenInt,
} from '../../../public/assets/applications'

export const sideBarData = [
    {
        title: "Application Development",
        link: '#development'
    },
    {
        title: "Application Management",
        link: '#management'
    },
    {
        title: "Application Integration",
        link: '#integration'
    },
    {
        title: " Application Modernization",
        link: '#modernization'
    },

    {
        title: "Security & Testing",
        link: '#security'
    },
    {
        title: "Testimonials",
        link: '#testimonials'
    },
    {
        title: "Selected Projects",
        link: '#projects'
    },
    {
        title: "All Applications Services",
        link: '#services'
    }
];

export const mainBarData = [
    {
        title: 'Application Development',
        text: [
            'We design and deliver web, mobile and cloud business applications of different complexity and for various needs. In the process, we pay special attention to their flexibility, security, speed and integration potential.',
            'The success of our software comes from:',
        ],
        cards: [
            {
                image: redDev,
                title: "The actual value to business needs",
                text: "We thoroughly study all critical business needs and the future application context, make appropriate architecture and technology choices to build the solution.",
            },
            {
                image: yellowDev,
                title: "Stable work and undemanding support",
                text: "Tanta comprised of people marked by a strong desire to achieve personal and professional success by operating through the principles of honesty and integrity.",
            },
            {
                image: greenDev,
                title: "High quality and timely releases",
                text: "We aren't just ISO 9001-certified - we have our own Quality Management System that streamlines our software development processes.",
            },
        ],
        id: 'development',
        lists: [],
    },
    {
        title: ' Application Management',
        text: [
            'We can take responsibility for the management of your applications ensuring its increased business flexibility and optimized IT costs. With latest process management practices, our team will maintain and monitor your application servers and databases taking care of their enhanced performance, sustainability, stability and keeping them in sync with current business needs.',
            'The list of our application management services includes but is not limited to:',
        ],
        cards: [
            {
                image: blueMan,
                title: "Remote application monitoring.",
                text: "Tanta offers a competitive benefits program that attracts and retains the best employees by rewarding original thinking, hard work and superior performance.",
            },
            {
                image: redMan,
                title: "Design and implementation of the Continuous Delivery",
                text: "Tanta comprised of people marked by a strong desire to achieve personal and professional success by operating through the principles of honesty and integrity.",
            },
            {
                image: greenMan,
                title: "Help Desk 24/7 Service Request",
                text: "Our 24/7 help desk can become a single point of contact for application users, the help desk agents will receive all inbound service requests and incident reports.",
            },
        ],
        id: 'management',
        lists: [],
    },
    {
        title: 'Application Integration',
        text: [
            'We can transform multiple independent applications of your IT environment into one coherently working system allowing for its increased efficiency and user convenience.',
            'To make integration successful, we address our experience in integrating systems and applications of various complexity, scale and technology stacks and:',
        ],
        cards: [
            {
                image: redInt,
                title: "Select an integration pattern that answers your needs",
                text: "We have a strong record in various integration approaches – point-to-point service-oriented architecture (SOA), enterprise service bus (ESB).",
            },
            {
                image: blueInt,
                title: "Pay due attention to specific integration risks",
                text: "We make sure the integrated system offers appropriate response time, security level, data quality.",
            },
            {
                image: greenInt,
                title: "Cover the end-to-end integration process",
                text: "We design integration architecture, implement the solution, modernize your legacy applications to allow their smooth work in the new environment, ",
            },
        ],
        id: 'integration',
        lists: [],
    },
    {
        title: ' Application modernization',
        text: [
            'Our team implements modernization of legacy applications to increase their efficiency and incorporate them better into a modern enterprise IT strategy. We support a wide range of ‘revival’ activities and scale them according to your business needs.',
            '',
        ],
        id: 'modernization',
        lists: [
            "Re-hosting - moving an entire application from the on-premises or the old cloud infrastructure to the new cloud without significant modifications and changes in code",
            "Re-platforming: moving a part or an entire application to the cloud with small optimizations and upgrades to leverage such cloud capabilities as automated performance scaling and improved resilience.",
            "Re-architecting - changing an application’s architecture and design to make it more scalable, flexible, and integration-friendly or to allow for simplified app maintenance and streamlined testing and deployment of further upgrades.",
            "Re-engineering - redesigning certain application components, updating certain aspects (e.g., performance, functionality) or introducing new elements to an already existing system.",
            "Re-coding - rewriting legacy applications on PowerBuilder, Delphi, VB, C++, etc. and outdated versions of Java, .NET, PHP and Python with modern technologies and tools.",
        ],
        cards: []
    },
    {
        title: 'Application Security & Testing',
        text: [
            'Our security experts can assist enterprises in making their applications resistant to security threats. We perform comprehensive manual and automated testing (vital for Continuous Delivery) for every stage of the application life cycle (implementation, deployment, support and evolution) to timely identify potential risks and verify that your enterprise solutions work correctly and correspond to the established quality requirements.',
            '',
        ],
        id: 'security',
        lists: [
            "Our security experts can assist enterprises in making their applications resistant to security threats.",
            "Being ISO 27001-certified, we adhere to all security principles and help you stay compliant with strict industry-specific security requirements, such as HIPAA, GDPR, PCI DSS, etc.",
            "We help you to compile security requirements as well as recommend a resilient app design pattern that will be able to address potential security risks.",
            "We implement continuous security monitoring to make sure your applications remain protected and reliable and timely identify the need for security upgrade to answer ever-evolving cyberthreats.",
            "We investigate security flaws of your application employing white box (with code audit) testing or black box testing (without access to application code) and provide a report with recommendations on overcoming found vulnerabilities.",
        ],
        cards: [],
    },
];

export const development = [
    {
        image: redDev,
        title: "The actual value to business needs",
        text: "We thoroughly study all critical business needs and the future application context, make appropriate architecture and technology choices to build the solution.",
    },
    {
        image: yellowDev,
        title: "Stable work and undemanding support",
        text: "Tanta comprised of people marked by a strong desire to achieve personal and professional success by operating through the principles of honesty and integrity.",
    },
    {
        image: greenDev,
        title: "High quality and timely releases",
        text: "We aren't just ISO 9001-certified - we have our own Quality Management System that streamlines our software development processes.",
    },
    {
        image: redDev,
        title: "User-Centric Design",
        text: "We prioritise user experience and conduct user research to understand our client needs. this has helped is in the past years to create intuitive and user-friendly software interfaces.",
    },
    {
        image: yellowDev,
        title: "Robust Architecture",
        text: "Using a well-designed software architecture ensures scalability, maintainability, and extensibility, allowing for future enhancements and modifications.",
    },
    {
        image: greenDev,
        title: "Thorough Testing",
        text: "We implement comprehensive testing methodologies which including unit testing, integration testing, and user acceptance testing. this has helped us minimise bugs and improves the overall quality of the software.",
    },
];

export const management = [
    {
        image: blueMan,
        title: "The actual value to business needs",
        text: "We thoroughly study all critical business needs and the future application context, make appropriate architecture and technology choices to build the solution.",
    },
    {
        image: redMan,
        title: "Stable work and undemanding support",
        text: "Tanta comprised of people marked by a strong desire to achieve personal and professional success by operating through the principles of honesty and integrity.",
    },
    {
        image: greenMan,
        title: "High quality and timely releases",
        text: "We aren't just ISO 9001-certified - we have our own Quality Management System that streamlines our software development processes.",
    },
    {
        image: blueMan,
        title: "Documentation and Knowledge Management",
        text: "We Create documentations like user manuals and technical guides, to help users understand and effectively utilise the software, while also enabling our development team to maintain and enhance it over time.",
    },
    {
        image: redMan,
        title: "Effective Project Management",
        text: "We Employ effective project management practices, such as setting clear goals, allocating resources efficiently, and managing risks, this has ensured that our software development process remains organised and stay on track.",
    },
    {
        image: greenMan,
        title: "Post-Release Support and Maintenance",
        text: "We provide prompt and reliable post-release support, including bug fixes, updates, and addressing user feedback to ensure the software's longevity and user satisfaction.",
    },
];
export const intergration = [
    {
        image: redInt,
        title: "The actual value to business needs",
        text: "We thoroughly study all critical business needs and the future application context, make appropriate architecture and technology choices to build the solution.",
    },
    {
        image: blueInt,
        title: "Stable work and undemanding support",
        text: "Tanta comprised of people marked by a strong desire to achieve personal and professional success by operating through the principles of honesty and integrity.",
    },
    {
        image: greenInt,
        title: "High quality and timely releases",
        text: "We aren't just ISO 9001-certified - we have our own Quality Management System that streamlines our software development processes.",
    },
    {
        image: redInt,
        title: "Agile Development Methodology",
        text: "We Adopt an agile approach which  allows for iterative development, continuous feedback, and adaptability to changes, resulting in a more responsive and successful software product",
    },
    {
        image: blueInt,
        title: "Effective Communication",
        text: "Regular and open communication channels between our development team, stakeholders, and clients ensure that everyone is on the same page and enables quick problem resolution.",
    },
    {
        image: greenInt,
        title: "Robust Security Measures",
        text: "We build software with robust security features, such as encryption, access controls, and vulnerability assessments, this helps protect sensitive data and ensures compliance with industry regulations.",
    },
];

export const modernization = [
    "Re-hosting - moving an entire application from the on-premises or the old cloud infrastructure to the new cloud without significant modifications and changes in code",
    "Re-platforming: moving a part or an entire application to the cloud with small optimizations and upgrades to leverage such cloud capabilities as automated performance scaling and improved resilience.",
    "Re-architecting - changing an application’s architecture and design to make it more scalable, flexible, and integration-friendly or to allow for simplified app maintenance and streamlined testing and deployment of further upgrades.",
    "Re-engineering - redesigning certain application components, updating certain aspects (e.g., performance, functionality) or introducing new elements to an already existing system.",
    "Re-coding - rewriting legacy applications on PowerBuilder, Delphi, VB, C++, etc. and outdated versions of Java, .NET, PHP and Python with modern technologies and tools.",
]

export const security = [
    "Our security experts can assist enterprises in making their applications resistant to security threats.",
    "Being ISO 27001-certified, we adhere to all security principles and help you stay compliant with strict industry-specific security requirements, such as HIPAA, GDPR, PCI DSS, etc.",
    "We help you to compile security requirements as well as recommend a resilient app design pattern that will be able to address potential security risks.",
    "We implement continuous security monitoring to make sure your applications remain protected and reliable and timely identify the need for security upgrade to answer ever-evolving cyberthreats.",
    "We investigate security flaws of your application employing white box (with code audit) testing or black box testing (without access to application code) and provide a report with recommendations on overcoming found vulnerabilities.",
]

export const projects = [
    {
        image: stats,
        title: "Boosting Customer Retention",
        subItem: [
            'DATA SCIENCE',
            'BIG DATA  ANALYTICS',
            'E-COMMERCE',
        ],
        text: "A large e-commerce platform experienced a significant struggle as they grappled with a decline in customer retention rates.",
    },
    {
        image: dashboard,
        title: "The actual value to business needs",
        subItem: [
            'CYBER SECURITY',
        ],
        text: "A leading Online bank faced increasing threats from cybercriminals, putting customers accounts and sensitive data at risk.",
    },
]

export const services = [
    {
        title: 'Services',
        subItem: [
            'End-to-End Application Services',
            'Application Management',
            'Application Development',
            'Managed Application Services',
            'Application Modernization',
        ]
    },
    {
        title: 'Web Development',
        subItem: [
            'End-to-End Application Services',
            'Application Management',
            'Application Development',
            'Managed Application Services',
            'Application Modernization',
        ]
    },
    {
        title: 'Mobile Development',
        subItem: [
            'End-to-End Application Services',
            'Application Management',
            'Application Development',
            'Managed Application Services',
            'Application Modernization',
        ]
    },
]

export const agents = [
    {
        image: mic,
        text: 'Are you a good sales representative?',
    },
    {
        image: checklist,
        text: 'Do you have what it takes to close a deal?'
    },
    {
        image: box,
        text: 'Or do you want to learn how to get trained and equipped by Tanta innovative FREE!'
    }
]