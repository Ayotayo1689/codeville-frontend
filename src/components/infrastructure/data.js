import {
    Batch,
    box,
    checklist,
    cloud,
    cloudB,
    consulting,
    Crowd,
    greencheck,
    Guarantee,
    management,
    mic,
    migration,
    projectA,
    projectB,
    projectC,
    security,
} from '../../../public/assets/infrastructure';
import {go, java, net, node, php, python} from "../../../assets/clients";

export const sideBarData = [
    {
        title: "About Tanta Innovative",
        link: '#about'
    },
    {
        title: "Services",
        link: '#services'
    },
    {
        title: "Technologies and Tools",
        link: '#tools'
    },
    {
        title: "Challenges we Solve",
        link: '#solve'
    },
    {
        title: "Customer Reviews",
        link: '#reviews'
    },
    {
        title: "Selected Projects",
        link: '#projects'
    },
    {
        title: "Summary",
        link: '#summary'
    },
];

export const mainBarData = [
    {
        title: 'why Choose Tanta Innovative',
        text: [],
        cards: [
            {
                image: Batch,
                title: "200",
                text: "Satisfied Customers",
            },
            {
                image: Crowd,
                title: "40+",
                text: "Skilled Employees",
            },
            {
                image: Guarantee,
                title: "80%",
                text: "Senior IT Experts",
            },
        ],
        lists: [
            'Hands-on experience with HIPAA, HITECH, FDA, MDR, IVDR, GDPR, NCPDP, ONC regulatory requirements',
            'Quality management system for medical device software and software as a medical device ',
            'Tanta Innovative RPM solution won the Best Healthcare Technology Solution Award 2022 from Health Tech Digital.',
            'Tanta Innovative  became a finalist of Health Tech Award 2022 with its laboratory diagnostics software.',
        ],
    },
    {
        title: 'IT Infrastructure Services',
        text: [
            'We offer a wide range of IT infrastructure services to help you build a reliable, secure and scalable IT infrastructure that meets your business needs.',
        ],
        cards: [
            {
                image: consulting,
                title: "IT Infrastructure Consulting",
                text: "Our team provides comprehensive IT infrastructure consulting services, offering expert guidance and recommendations to optimize your infrastructure setup. We assess your current infrastructure, identify areas for improvement, and develop strategies to enhance performance, security, and scalability.",
            },
            {
                image: management,
                title: "IT Infrastructure Management",
                text: "We offer end-to-end IT infrastructure management services, handling all aspects of your infrastructure lifecycle. From planning and design to administration, monitoring, troubleshooting, and evolution, our team ensures the stability, reliability, and efficiency of your IT infrastructure.",
            },
            {
                image: cloud,
                title: "Cloud Infrastructure Management",
                text: "Our experts specialize in managing and optimizing cloud or hybrid IT infrastructures. We design, deploy, monitor, support, and optimize your cloud environment to ensure high performance, availability, and scalability. With our cloud infrastructure management services, you can leverage the full potential of cloud technologies.",
            },
            {
                image: cloudB,
                title: "Cloud Infrastructure Consulting",
                text: "We provide comprehensive consulting services for cloud infrastructure, helping you make informed decisions and optimize your cloud setup. Our team offers expertise in designing, securing, and managing cloud environments. We assist in reducing costs, improving performance, and ensuring the stability and security of your cloud infrastructure.",
            },
            {
                image: migration,
                title: "Cloud Migration Services",
                text: "Our cloud migration services facilitate a seamless transition to the cloud. We help you plan, execute, and manage the migration process, ensuring minimal disruption to your operations. Our experts handle data migration, application rehosting, and infrastructure optimization to maximize the benefits of cloud technology.",
            },
            {
                image: security,
                title: "Cloud Infrastructure Security",
                text: "We prioritize the security of your cloud infrastructure and provide robust security solutions. Our team implements industry best practices, security protocols, and monitoring systems to protect your data and applications. We conduct regular security assessments, implement encryption measures, and ensure compliance with relevant security standards.",
            },
        ],
        lists: [
            'Significantly reduce the number of security weaknesses in web, mobile, and desktop applications,as well as in our clients’ networks.',
            'Ensure their constant compliance with appropriate regulations and standards(PCI DSS, HIPAA, GDPR, NYDFS, and more).',
        ],
    },
    {
        title: 'Challenges We Solve',
        text: [],
        lists: [],
        cards: [
            {
                image: greencheck,
                title: "Mastering a Multi-cloud Strategy",
                text: "Our team specializes in helping organizations navigate and optimize their multi-cloud environments. We provide expert guidance and implementation strategies to ensure seamless integration, efficient resource management, and improved scalability across multiple cloud platforms.",
            },
            {
                image: greencheck,
                title: "Managing Heterogeneous IT Environments",
                text: "We understand the complexity of heterogeneous IT environments and offer tailored solutions to manage and integrate diverse systems and technologies. Our expertise enables us to optimize interoperability, streamline data exchange, and enhance overall IT efficiency within your healthcare organization.",
            },
            {
                image: greencheck,
                title: "Ensuring Robust Security Measures",
                text: "At Tanta Innovatives, we prioritize the security of your IT infrastructure. Our team implements robust security measures and best practices to protect your sensitive data from potential threats and ensure compliance with industry regulations. We conduct thorough assessments, develop comprehensive security strategies, and offer ongoing monitoring and maintenance to keep your systems secure.",
            },
            {
                image: greencheck,
                title: "Achieving High Availability",
                text: "We recognize the criticality of maintaining 24/7/365 availability for your IT systems. Our experts employ resilient architectures, redundancy measures, and disaster recovery solutions to ensure continuous operation and minimal downtime. We design and implement robust infrastructure that can withstand potential disruptions and deliver reliable performance.",
            },
            {
                image: greencheck,
                title: "Optimizing IT Costs",
                text: "We help healthcare organizations optimize their IT costs by analyzing their infrastructure, identifying inefficiencies, and implementing cost-effective solutions. Through strategic planning, resource consolidation, and technology optimization, we assist in reducing unnecessary expenses while improving the overall value and performance of your IT investments.",
            },
            {
                image: greencheck,
                title: "Enabling Remote & Hybrid Workplace",
                text: "Our solutions enable seamless transition to remote and hybrid workplaces, empowering your workforce with secure access to critical resources and applications. We leverage cutting-edge technologies, collaboration tools, and secure remote access solutions to facilitate efficient communication and collaboration, regardless of the physical location of your employees.",
            },
        ]
    },
    {
        title: 'Take a Moment to Know Tanta Innovative Better',
        text: '',
        list: [],
        cards: [
            {
                title: 'Company Benefits',
                text: 'Discover the benefits of choosing Tanta Innovative for your IT infrastructure needs:',
                list: [
                    'Maximize operational efficiency and productivity',
                    'Enhance data security and protect against cyber threats',
                    'Improve scalability and flexibility of your infrastructure',
                    'Optimize cost and resource utilization',
                ],
            },
            {
                title: 'Mission & Vision',
                text: 'Our mission is to deliver robust and reliable IT infrastructure solutions that empower businesses to thrive in the digital age. With a vision to build scalable and future-ready infrastructure, we are committed to providing innovative and customized solutions that meet the unique needs of our clients.',
                list: [],
            },
            {
                title: 'Need Help?',
                text: 'For any inquiries or assistance related to IT infrastructure services, please reach out to our team at hello@tantainnovative.com.',
                list: [],
            },
        ]
    }
]

export const ourCabilities = [
    "Backend",
    "frontend",
    "mobile",
    "cloud",
    "database",
    "devops",
    "big data",
];

export const ourCabilitiesTabs = [
    [go, java, node, php, python, net],
    [go, java, node, php, python, net],
    [go, java, node, php, python, net],
    [go, java, node, php, python, net],
    [go, java, node, php, python, net],
    [go, java, node, php, python, net],
    [go, java, node, php, python, net],
];


export const projects = [
    {
        image: projectC,
        title: "Successful Implementation of EHR System at Regional Hospital",
        subItem: [
            'Electronic Health Records',
        ],
        text: "Our team collaborated with a regional hospital to successfully implement a state-of-the-art Electronic Health Record (EHR) system. This comprehensive project involved streamlining patient data management, enhancing medical record accessibility, and improving overall operational efficiency. The successful deployment of the EHR system has significantly improved patient care and communication among healthcare professionals.",
    },
    {
        image: projectA,
        title: "Cloud Migration for Large Healthcare Provider",
        subItem: [
            'Infrastructure Modernization',
        ],
        text: "We partnered with a prominent healthcare provider to facilitate a seamless transition from on-premise servers to a cloud-based infrastructure. By leveraging our expertise in cloud technologies, we ensured a smooth migration process while maintaining data integrity, scalability, and cost efficiency. The cloud migration project has empowered the client to leverage the benefits of modern infrastructure, including increased agility, improved scalability, and enhanced security.",
    },
    {
        image: projectB,
        title: "Data Analytics Solution for Health Insurance Provider",
        subItem: [
            'Healthcare Data Analytics',
        ],
        text: "In collaboration with a leading health insurance provider, we developed a custom data analytics solution tailored to their specific needs. By analyzing vast amounts of healthcare data, our solution provided valuable insights and actionable intelligence for the client. This enabled them to make informed decisions, enhance operational efficiency, and deliver better services to their members. The data analytics solution has become a vital tool for improving overall business performance and strategic decision-making within the healthcare organization.",
    },
    {
        image: projectB,
        title: "Data Analytics Solution for Health Insurance Provider",
        subItem: [
            'Healthcare Data Analytics',
        ],
        text: "In collaboration with a leading health insurance provider, we developed a custom data analytics solution tailored to their specific needs. By analyzing vast amounts of healthcare data, our solution provided valuable insights and actionable intelligence for the client. This enabled them to make informed decisions, enhance operational efficiency, and deliver better services to their members. The data analytics solution has become a vital tool for improving overall business performance and strategic decision-making within the healthcare organization.",
    },
];

export const summaryTitles = [
    'Company Benefits',
    'Mission & Vission',
    'Need Help?'
]
export const summaryTexts = [
    {
        title: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate',
        list: [
            'Interactively monetize customer',
            'Interactively monetize customer',
            'Interactively monetize customer',
            'Interactively monetize customer',
        ]
    }
]

export const services = [
    {
        title: 'Infrastructure Services',
        subItem: [
            'IT Infrastructure Services',
            'Infrastructure Support Services',
            'Managed Infrastructure Services',
            'DevOps Consulting',
        ]
    },
    {
        title: 'Infrastructure Management',
        subItem: [
            'Infrastructure Management Services',
            'Cloud Infrastructure Services',
            'Network Management Services',
        ]
    },
    {
        title: 'Cloud Consulting',
        subItem: [
            'Cloud Consulting Services',
            'Azure Consulting Services',
            'AWS Consulting Services',
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
