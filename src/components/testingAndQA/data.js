import {
    amico,
    amicoB,
    amicoC,
    API,
    autoA,
    autoB,
    autoC,
    autoD,
    health,
    risk,
    uiA,
    uiB,
    uiC,
    uiD
} from '../../../public/assets/testing-qa'

export const application = [
    {
        image: API,
        title: 'Types of applications we test',
        text: '',
        list: [
            'Saas',
            'Web Applications',
            'Mobile Apps',
            'Desktop Applications',
            'DWH',
        ],
    },

]

export const enterprise = [
    {
        image: amico,
        title: 'Our enterprise software testing offering',
        text: '',
        list: [
            'ERP',
            'CRM',
            'Business process automation software',
            'Supply chain management software',
            'Ecommerce',
            'Financial management software',
            'Product lifecycle management software',
            'Human capital management software',
            'Insurance software',
        ],
    },
]

export const innovation = [
    {
        image: risk,
        title: 'Our testing for risk-free innovation',
        text: 'Tanta  innovative experts closely collaborate with the development teams for effective risk-based testing focused on innovation challenges. We are experienced with testing specifics of systems with the following innovative techs and architectures:',
        list: [
            'Micro-services testing',
            'Big data testing',
            'AR testing',
            'IoT testing',
            'Blockchain testing',
        ],
    },
]

export const healthcare = [
    {
        image: health,
        title: '',
        text: '',
        list: [
            'Electronic health and medical record software',
            'Health information management software',
            'Hospital inventory management software',
            'Health information exchange software',
            'Patient portals and monitoring apps',
            'Chronic disease management software',
            'Medication delivery software',
        ],
    },
]

export const testingTypes = [
    {
        title: 'Essential Testing',
        types: [
            'Functional Testing',
            'Integration Testing',
            'Compactible Testing',
            'Accessibility Testing',
            'Regression Testing',
            'Exploratory Testing',
            'Testing Newly Introduced Software Functions'
        ]
    },
    {
        title: 'Specific Testing Types',
        types: [
            'Performance Testing',
            'Security Testing',
            'Usability Testing',
        ]
    }
]

export const serviceOptions = [
    {
        image: amico,
        title: 'Single-round Testing',
        text: 'Functional, integration, and compatibility testing; testing of new functions, exploratory and regression testing that go in parallel with software development.',
    },
    {
        image: amicoB,
        title: 'Continuous testing during software development*',
        text: ' Incorporating functional, integration, and compatibility testing. This includes testing new functions,' +
            ' conducting exploratory testing, and performing regression testing in parallel with the development ' +
            'activities.',
    },
    {
        image: amicoC,
        title: 'Continuous testing during software support & maintenance*',
        text: 'We follow a continuous testing approach that encompasses functional, integration, and compatibility ' +
            'testing. This includes testing new functions, conducting exploratory testing, and performing regression ' +
            'testing in parallel with the support and maintenance activities.',
    }
]

export const qaService = [
    {
        title: 'QA consulting',
        text: 'With our extensive experience in software testing and QA consulting spanning over 33 years, we provide a ' +
            'range of services to enhance your quality assurance practices. Our offerings include:',
        list: [
            'Development of quality assurance strategies tailored to your specific needs. ',
            'Audit and assessment of your existing quality assurance processes to identify areas for improvement. ',
            'By leveraging our expertise, we can assist you in establishing robust quality assurance practices, ensuring' +
            ' that your software and processes meet industry standards and certifications'
        ]

    },
    {
        title: 'Software quality assessment',
        text: 'Software quality assessment:   When it comes to ensuring compliance with industry-specific standards' +
            ' (such as HIPAA, GAMP, PCI DSS, GLBA, etc.) or making critical decisions regarding legacy software or new ' +
            'solution development, our software quality assessment services are here to help. We offer software quality' +
            ' audits and code reviews to evaluate the compliance and code quality of your solution. Whether you need to ' +
            'assess the adherence to standards or evaluate the viability of your software, our experts can provide ' +
            'comprehensive assessments and recommendations.',
        list: [],
    }
]

export const models = [
    {
        title: 'Testing Teams',
        text: 'Best for: Advanced software systems such as SaaS platforms, multi-module corporate software, or comprehensive enterprise IT environments. Tanta Innovative sets you up with autonomous testing teams that include a test lead and multiple test engineers. Each software module gets its dedicated testing team for optimal focus and efficiency.',
    },
    {
        title: 'Managed Testing Professionals',
        text: 'At Tanta Innovative, we take pride in providing seasoned, self-directed testing professionals with a rich blend of industry-specific knowledge and specialized expertise in different software types such as mobile apps, diverse CRM systems, and more. Our experts come with 8-15 years of hands-on testing experience, equipping them to deliver top-notch results while operating autonomously. They\'re independently brilliant, but together, they create a formidable force for quality assurance',
    },
    {
        title: 'Testing Team Augmentation',
        text: 'Tanta Innovative offers the ability to bolster your testing team with individual testing professionals, all under your own internal QA management. This service allows you to plug any gaps in your in-house QA team\'s technical skills, industry knowledge, testing methodologies, or regulatory compliance expertise. It\'s all about complementing and enhancing what you already have.',
    },
]

export const uiTestingImages = [uiA, uiB, uiC, uiD]
export const autoTestingImages = [autoA, autoB, autoC, autoD]