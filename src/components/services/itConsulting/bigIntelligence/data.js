import {
    rafiki,
    launch,
    support,
    datascience,
    quality,
    dwh,
    security,
    visual,
    olap,
    lake,
    etl,
} from '../../../../../public/assets/healthcare/itConsultingServices/index'

export const sideBarData = [
    {
        title: "Included in this Package",
        id: "support",
    },
    {
        title: "Data Insights",
        id: "insight",
    },
    {
        title: "Service Options",
        id: "service",
    },
    {
        title: "Components",
        id: "component",
    },
    {
        title: "Reliable Partner",
        id: "partner",
    },
    {
        title: "Customer Reviews",
        id: "reviews",
    },
    {
        title: "Summary",
        id: "summary",
    },
    {
        title: "Consulting Projects",
        id: "projects",
    },
];

export const insightsData = [
    {
        text: () => <>Enterprise Intelligence</>,
        lists: [
            'Performance analytics for the company.',
            'A 360-degree perspective of the business through the integration and analysis of data',
            'Corporate strategy planning.',
            'Prediction and forecasting',
        ]
    },
    {
        text: () => <div>Human Resource <span style={{ color: '#e900e'}}>Intelligence</span></div>,
        lists: [
            'Performance analytics for the company.',
            'A 360-degree perspective of the business through the integration and analysis of data',
            'Corporate strategy planning.',
            'Prediction and forecasting',
        ]
    },
    {
        text: () => <div>Healthcare Intelligence</div>,
        lists: [
            'Performance analytics for the company.',
            'A 360-degree perspective of the business through the integration and analysis of data',
            'Corporate strategy planning.',
            'Prediction and forecasting',
        ]
    },
    {
        text: () => <div>Financial and Operational <span style={{ color: '#e900e'}}>Intelligence</span></div>,
        lists: [
            'Performance analytics for the company.',
            'A 360-degree perspective of the business through the integration and analysis of data',
            'Corporate strategy planning.',
            'Prediction and forecasting',
        ]
    },
];

export const serviceOptions = [
    {
        img: launch,
        title: 'BI launch',
        lists: [
            'BI needs analysis',
            'BI solution requirements elicitation',
            'Analysis of existing data sources and data flows',
            'ETL rules capturing',
            'Data quality needs analysis',
            'Defining requirements for reports and dashboards',
            'Security and user access requirements elicitation, etc.',
            'BI solution architecture design and tech selection',
            'BI project estimation and planning',
            'PoC delivery (in case of complex projects)',
            'Development of BI solution components (a data lake, DWH,\n' +
            'OLAP cubes, reports and dashboards), solution\n' +
            'implementation',
            'User training',
            'BI solution support and evolution',
        ],
        btn: 'BI implementation services'
    },
    {
        img: support,
        title: 'BI support',
        lists: [
            'BI solution gap analysis',
            'Development support',
            'BI solution troubleshooting on the code level (e.g., rewriting a\n' +
            'faulty ETL process)',
            'BI solution evolution (adding new data sources, creating new\n' +
            'reports and dashboards, etc.)',
            'Administration support (updating software, adding new users,\n' +
            'handling permissions, administering data)',
            'Power BI support',
        ],
        btn: 'Request BI support services'
    }
];

export const analyticsData = [
    {
        img: etl,
        title: 'ETL\\ELT processes',
        text: 'Extracting data from diverse data\n' +
            'sources, transforming it into a\n' +
            'predefined format, and loading it into a\n' +
            'storage destination.',
    },
    {
        img: lake,
        title: 'Data lake',
        text: 'Storing any type of data, including big data.',
    },
    {
        img: olap,
        title: 'OLAP cubes',
        text: 'Structuring data in a multidimensional\n' +
            'format for rapid self-service data\n' +
            'analysis.',
    },
    {
        img: visual,
        title: 'Data reporting and visualization',
        text: 'Making analytics results digestible with\n' +
            'immersive reports and interactive\n' +
            'dashboards.',
    },
    {
        img: security,
        title: 'Data security',
        text: 'Ensuring data is stored, transformed\n' +
            'and exploited in a secure way.',
    },
    {
        img: datascience,
        title: 'Data science',
        text: 'Advanced analytics with data mining,\n' +
            'big data analysis, machine learning and\n' +
            'artificial intelligence..',
    },
    {
        img: dwh,
        title: 'Data warehouse',
        text: 'Centralized storing of structured data\n' +
            'for reporting and analysis.',
    },
    {
        img: quality,
        title: 'Data quality management',
        text: 'Identifying and eliminating data anomalies via data profiling, cleansing, validation, etc.',
    },
];

export const summary = [
    {
        title: 'Company Benefits',
        text: 'Discover the benefits of choosing Tanta Innovative for your IT consulting needs:',
        lists: [
            'Gain access to top-notch expertise and industry knowledge',
            'Receive personalized solutions tailored to your business requirements',
            'Improve operational efficiency and streamline processes',
            'Stay ahead of technology trends and innovations',
        ]
    },
    {
        title: 'Mission & Vision',
        text: 'Our mission is to empower organizations through innovative IT consulting services. We aim to be your trusted partner in navigating the complex IT landscape, providing strategic guidance and practical solutions. With a vision to drive digital transformation and enhance business outcomes, we are committed to delivering excellence in every engagement.',
        lists: [],
    },
    {
        title: 'Need Help?',
        text: 'For any inquiries or assistance related to our IT consulting services, please contact our team at info@tantainnovative.com.',
        lists: [],
    },
];


export const services = [
    {
        title: 'Services',
        subItem: [
            'Cybersecurity Services',
            'Cybersecurity Consulting',
            'Security Program Development',
            'Managed Application Services',
            'Identity and Access Management',
        ],
    },
    {
        title: 'Security Testing',
        subItem: [
            'End-to-End Application Services',
            'Application Management',
            'Application Development',
            'Managed Application Services',
            'Application Modernization',
        ]
    },
    {
        title: 'Compliance Services',
        subItem: [
            'End-to-End Application Services',
            'Application Management',
            'Application Development',
            'Managed Application Services',
            'Application Modernization',
        ]
    },
]
