import {
    antivirus,
    blueS,
    cloud,
    firewall,
    greenS,
    mail,
    mobile,
    optionA,
    optionB,
    projectA,
    projectB,
    projectC,
    redS,
    siem,
    valueA,
    valueB,
    valueC,
    valueD,
    valueE,
    valueF,
    web,
} from '../../../../public/assets/cybersecurity';

export const sideBarData = [
    {
        title: "Cybersecurity Services",
        link: '#cyber'
    },
    {
        title: "Security Assessment & Planning ",
        link: '#security'
    },
    {
        title: "Our Customers",
        link: '#customers'
    },
    {
        title: "Core Cybersecurity Values",
        link: '#core'
    },
    {
        title: "Application Security",
        link: '#application'
    },
    {
        title: "Network Protection",
        link: '#network'
    },
    {
        title: "Service Options",
        link: '#service'
    },
    {
        title: "Case Studies",
        link: '#case'
    },
    {
        title: "Summary",
        link: '#summary.js'
    },
    {
        title: "All Applications Services",
        link: '#services'
    }
];

export const mainBarData = [
    {
        title: 'We offer a wide range of cybersecurity services to help you protect your business from potentialvulnerabilities and malicious attacks.',
        text: [
            "Significantly reduce the number of security weaknesses in web, mobile, and desktop applications,as well as in our clients’ networks.",
            "Ensure their constant compliance with appropriate regulations and standards(PCI DSS, HIPAA, GDPR, NYDFS, and more).",
        ],
        cards: [
            {
                image: blueS,
                title: "Security assessment and Planning",
                text: [
                    "(SIEM): We implement solutions to collect, monitor, and analyze security event   ",
                    "(DoS):  We deploy measures to protect against Denial of Service  Email ",
                    "Security:  We implement robust email security measures to safeguard against email-borne threats such as spam, phishing, and malware. ",
                    "Firewall, IDS/IPS, DLP, and VPN Implementation: We design and deploy firewall solutions to monitor and control network traffic, preventing unauthorized access and ensuring data privacy. .",
                    " Antivirus and Malware Protection: We implement robust antivirus and malware protection mechanisms to detect, prevent, and remove malicious software.",
                ],
            },
            {
                image: redS,
                title: "Network Protection",
                text: [
                    " Network Protection (SIEM):  monitor and analyze network events ",
                    " (DoS): prevent and mitigate attacks",
                    " Email Security:  protect against phishing attacks, malware, and other email-borne threats ",
                    "Firewall, IDS/IPS, DLP, and VPN implementation: to establish secure network boundaries and" +
                    " safeguard against unauthorized access and data breaches.",
                    "Antivirus and Malware Protection: We deploy industry-leading antivirus and malware protection " +
                    "tools to detect and remove malicious software",
                ],
            },
            {
                image: greenS,
                title: "Application Security",
                text: [
                    "Security Code Review: We conduct thorough code reviews to identify and address security vulnerabilities within the application code. ",
                    " Mobile Device Management and Mobile Application Management: We implement robust mobile device management and mobile application management solutions to secure mobile devices and the applications installed on them. ",
                    "Cloud Security: We provide comprehensive security measures for cloud-based applications, ensuring data privacy, access control, and protection against potential threats.",
                    "Web Application Security: We assess and enhance the security of web applications through various techniques, including vulnerability scanning, penetration testing, and secure coding practices.   ",
                    "Web application firewall (WAF): We deploy and manage Web Application Firewalls to protect web applications from common attacks such as cross-site scripting (XSS), SQL injection, and malicious file uploads.\n.",
                ],
            },
        ],
        id: 'cyber',
        lists: [],
    },
    {
        title: 'Tanta Innovative provides comprehensive security assessment and planning services for all aspects of IT infrastructures, ensuring that every component is thoroughly evaluated and protected',
        text: [],
        cards: [],
        id: 'security',
        lists: [],
    },
    {
        title: 'Tanta Innovatives is a leading provider of IT consulting and software development services that has helped businesses across multiple industries succeed.',
        text: [],
        id: 'customers',
        lists: [],
        cards: []
    },
    {
        title: '',
        text: [],
        cards: [
            {
                image: valueA,
                title: "Confidentiality",
                text: [
                    "Protect sensitive data from unauthorized access, disclosure or leakage",
                ],
            },
            {
                image: valueB,
                title: "Integrity",
                text: [
                    "We ensure client's data is accurate, complete, and unaltered.",
                ],
            },
            {
                image: valueC,
                title: "Availability",
                text: [
                    "We ensure that our client's data and systems are always available to authorized personnel when they need it.",
                ],
            },
            {
                image: valueD,
                title: "Accountability",
                text: [
                    "We take responsibility for cyber-security incidents and prevent future occurrences.",
                ],
            },
            {
                image: valueE,
                title: "Resilience",
                text: [
                    "We have a plan to handle cyber-security incidents and ensure business continuity.",
                ],
            },
            {
                image: valueF,
                title: "Improvement",
                text: [
                    "We continuously improve our cyber-security practices by keeping up with the latest trends and technologies.",
                ],
            },
        ],
        id: 'core',
        lists: [],
    },
    {
        title: "We understand the importance of protecting your applications from cyber-attacks. That's why we offer Application Security as a Service to help keep your applications safe and secure. Our team of experts will work with you to identify potential vulnerabilities in your applications and provide customized solutions to address them. With our Application Security as a Service, you can rest assured that your applications are being protected by the latest security measures and industry best practices.",
        text: [],
        cards: [
            {
                image: mobile,
                title: "Mobile Device Management and Mobile Application Management",
                text: [
                    "Our MDM & MAM services provide a complete solution for managing your mobile devices and applications.",
                    "We work closely with you to identify potential security risks and develop policies that protect your mobile devices and applications from unauthorized access.",
                    "With our MDM and MAM services, your employees can securely access corporate resources from anywhere, at any time.",
                ],
            },
            {
                image: mobile,
                title: "Security Code Review",
                text: [
                    "We offer a comprehensive security code review service that helps you identify and eliminate vulnerabilities in your code.",
                    "Our team of experts will review your source code to identify potential security issues and provide recommendations for improving the security of your application.",
                    "We also provide a detailed report with recommendations for improving the security of your application.",
                    "Detect mistakes introduced into an application during its development to improve software quality and increase its protection level.",
                    "Highlight weak points in the source code of your app where vulnerabilities may potentially occur.",
                ],
            },
            {
                image: cloud,
                title: "Cloud Security",
                text: [
                    "We offer a comprehensive cloud security service that helps you protect your data and applications in the cloud.",
                    "Our team of experts will work with you to identify potential security risks and develop policies that protect your data and applications from unauthorized access.",
                    "With our cloud security service, you can rest assured that your data and applications are secure.",
                    "We offer a comprehensive cloud security service that helps you protect your data and applications in the cloud.",
                    "Our team of experts will work with you to identify potential security risks and develop policies that protect your data and applications from unauthorized access.",
                ],
            },
            {
                image: web,
                title: "Web application security",
                text: [
                    "We offer a comprehensive web application security service that helps you protect your web applications from attacks.",
                    "Ensure the compliance of devices (both corporate and personal) and applications with your internal security policies and requirements.",
                    "Control how your employees exploit and share corporate information via their mobile devices and the apps they use.",
                    "Protect your corporate data from unauthorized access and leakage.",

                ],
            },
        ],
        id: 'application',
        lists: [],
    },
    {
        title: 'Safeguard your corporate network and sensitive data through Tanta Innovative\'s advanced multi-layered defense approach. Our skilled security engineers leverage cutting-edge protocols and techniques to fortify your systems, mitigating the risk of privacy breaches, theft, and network downtime. With Tanta Innovative as your trusted partner, you can confidently rely on us to protect your proprietary information and uphold the integrity of your network infrastructure. Prioritize the security of your valuable assets with our comprehensive network protection solutions.',
        text: [],
        cards: [
            {
                image: siem,
                title: "SIEM",
                text: [
                    "Our SIEM services provide real-time threat detection, enabling you to quickly identify and respond to potential security breaches.",
                    "We offer 24/7 monitoring by our team of experts, who use advanced analytics and machine learning to detect and respond to threats as soon as they occur.",
                    "Our SIEM services include comprehensive reporting to provide you with insights into attack trends and patterns.",
                    "Develop a comprehensive incident response plan and receive training from our security experts to respond to security breaches effectively.",

                ],
            },
            {
                image: web,
                title: "DDoS Protection",
                text: [
                    "We offer a comprehensive DDoS protection service that helps you protect your network from DDoS attacks.",
                    "We offer 24/7 real-time monitoring by our team of experts, who use advanced analytics and machine learning to detect and respond to DDoS attacks as soon as they occur.",
                    "Our DDoS protection service includes comprehensive reporting to provide you with insights into attack trends and patterns.",
                    "We offer a comprehensive DDoS protection service that helps you protect your network from DDoS attacks.",
                    "Our DDoS protection service employs multiple layers of defense to safeguard against volumetric, protocol, and application layer attacks.",
                ],
            },
            {
                image: mail,
                title: "Email Security",
                text: [
                    "We offer a comprehensive email security service that helps you protect your email from phishing, spam, and other email-borne threats.",
                    "Our email security service uses advanced filtering techniques to protect against phishing, spam, and other email-borne threats, ensuring that your inbox remains secure.",
                    "We employ content scanning technology to detect malicious attachments and URLs, preventing potential data breaches and ensuring that sensitive information stays protected.",
                ],
            },
            {
                image: firewall,
                title: "Firewalls, IDS / IPS, DLP implementation and setting",
                text: [
                    "Protect your network with our comprehensive firewall services.",
                    " Detect and respond to potential threats with our real-time intrusion detection and prevention system (IDS/IPS).",
                    "Prevent the unauthorized disclosure of sensitive information and ensure compliance with relevant regulations with our expert data loss prevention (DLP) implementation and optimization.",

                ],
            },
            {
                image: antivirus,
                title: "Antivirus Protection",
                text: [
                    "Our antivirus protection provides comprehensive coverage against viruses, malware, and other malicious software, ensuring your devices are always secure.",
                    "Our Cloud Security services provide continuous monitoring and alerting to help you identify potential threats in real-time.",
                    "We work with you to ensure that your cloud infrastructure and data are secure and compliant with industry standards.",
                ],
            },
            {
                image: cloud,
                title: "Virtual Private Network (VPN)",
                text: [
                    "Our VPN service offers secure and easy remote access to your network, allowing you to work from anywhere without compromising security.",
                    "Our VPN service uses strong encryption to protect your data from unauthorized access, ensuring that your sensitive information stays private and confidential.",
                    "Our VPN service supports multi-factor authentication, adding an extra layer of security to ensure that only authorized users can access your network.",
                ],
            },
        ],
        id: 'network',
        lists: [],
    },
    {
        title: '',
        text: '',
        id: 'service',
        list: [],
        cards: [
            {
                image: optionA,
                title: "Managed security services",
                text: [
                    "Rest assured that your IT environment stays protected against ever-evolving cyber threats and complies with the relevant standards and regulations at any point in time.",
                ],
                button: 'Manage Services'
            },
            {
                image: optionB,
                title: "One-time security services",
                text: [
                    "Whenever you face cybersecurity tasks you don’t feel up to, we are ready to step in. Our seasoned experts can quickly grasp your IT environment specifics and outline the optimal service scope and approach to precisely meet your needs and expectations.",
                ],
                button: 'One-time Services'
            },
        ]
    },
    {
        title: '',
        text: '',
        id: 'summary',
        list: [],
        cards: [
            {
                image: '',
                title: 'Company Benefits',
                text: "You can always bank on us for improved operational efficiency through automation," +
                    " streamlined processes, and optimised systems, leading to cost savings and increased " +
                    "productivity. We also leverage our technology expertise to,",
                items:[
                    "Enhance decision-making capabilities.",
                    "Foster innovation.",
                    "Gain a competitive edge."
                ],
            },
            {
                image: '',
                title: 'Our Mission',
                text: "Our vision is to be a leading provider of innovative technology solutions, empowering businesses to thrive in the digital era.\n" +
                    "Our optimum Mission is to;",
                items:[
                    "Deliver exceptional IT services.",
                    "Driving digital transformation.",
                    "Enable client success through cutting-edge technologies, strategic partnerships, and a " +
                    "customer-centric approach."
                ],
            },
            {
                image: '',
                title: 'Need Help?',
                text: 'Click on “get started” button below',
            },
        ]
    }
]

export const aboutList = [
    '15+ years of experience in cybersecurity services',
    '20+ implemented projects in IT security.',
    'Certified Ethical Hackers with a wide range of cybersecurity skills to protect your business from potential vulnerabilities and malicious attacks',
    "Guaranteed customers' data safety due to robust security management backed by ISO 27001 certificate.",
    'ISO 9001-certified mature quality management to deliver maximum value at each project.',
]
export const projects = [
    {
        image: projectC,
        title: "Successful Implementation of EHR System at Regional Hospital",
        subItem: [
            'ELECTRONIC HEALTH',
        ],
        text: "This project involved partnering with a regional hospital to implement a new electronic health record (EHR) system,...",
    },
    {
        image: projectA,
        title: "Cloud Migration for Large Healthcare Provider",
        subItem: [
            ' Infrastructure Modernization',
        ],
        text: "This project involved helping a large healthcare provider migrate its IT infrastructure from on-premise servers to the cloud...",
    },
    {
        image: projectB,
        title: "Data Analytics Solution for Health Insurance Provider",
        subItem: [
            'Healthcare Data Analytics',
        ],
        text: "This project involved developing a custom data analytics solution for a health insurance provider, which allowed them to gain insights into their members' health...",
    },
    {
        image: projectB,
        title: "Data Analytics Solution for Health Insurance Provider",
        subItem: [
            'Healthcare Data Analytics',
        ],
        text: "This project involved developing a custom data analytics solution for a health insurance provider, which allowed them to gain insights into their members' health...",
    },
]


export const services = [
    {
        title: 'Services',
        subItem: [
            'Cybersecurity Services',
            'Cybersecurity Consulting',
            'Security Program Development',
            'Managed Application Services',
            'Identity and Access Management',
        ]
    },
    {
        title: 'Security Testing',
        subItem: [
            'Security Testing',
            'DDoS Testing Services',
            'Social Engineering Testing',
            'Security Testing Guide',
        ]
    },
    {
        title: 'Compliance Services',
        subItem: [
            'Compliance Assessment',
            'Application Management',
            'Application Development',
            'Managed Application Services',
            'Application Modernization',
        ]
    },
]
