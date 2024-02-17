import CM1 from "../../../../public/assets/cloudMigration/CM1.png";
import CM2 from "../../../../public/assets/cloudMigration/CM2.png";
import aws from "../../../../public/assets/cloudMigration/aws.png";
import microsoft from "../../../../public/assets/cloudMigration/microsoft.png";
import google from "../../../../public/assets/cloudMigration/google.png";
import G1 from "../../../../public/assets/cloudMigration/G1.png";
import G2 from "../../../../public/assets/cloudMigration/G2.png";
import G3 from "../../../../public/assets/cloudMigration/G3.png";
import G4 from "../../../../public/assets/cloudMigration/G4.png";
import B1 from "../../../../public/assets/cloudMigration/B1.png";
import B2 from "../../../../public/assets/cloudMigration/B2.png";
import B3 from "../../../../public/assets/cloudMigration/B3.png";
import YM from "../../../../public/assets/cloudMigration/YM.png";
import BM from "../../../../public/assets/cloudMigration/BM.png";
import GM from "../../../../public/assets/cloudMigration/GM.png";
import PM from "../../../../public/assets/cloudMigration/PM.png";
import arrowDown from "../../../../public/assets/cloudMigration/arrowDown.png";
import target from "../../../../public/assets/cloudMigration/target.png";
import {Box} from "@chakra-ui/react";



export const sideBarData = [
    {
        title: "Customer Reviews",
        id: "CR",
    },
    {
        title: "Our Services",
        id: "Services",
    },
    {
        title: "Our Methodology",
        id: "Methodology",
    },
    {
        title: "KPI’s We USe",
        id: "KPI",
    },
    {
        title: "Related Projects",
        id: "RP",
    },
    {
        title: "Summary",
        id: "Summary",
    },
];

export const cloudMigration = [
    {
        img: CM2,
        title: "Application Migration (single or multiple apps)",
        content: "We plan, design and implement your app(s) in the cloud,\n" +
            "leveraging cloud services and efficient CI/CD pipelines to\n" +
            "deliver high-performing and cost-effective apps. We carry\n" +
            "out both single- and multi-app migrations of any complexity.",
        link: "Go for app migration",
    },
    {
        img: CM1,
        title: "Data warehouse migration",
        content: "Our services encompass planning, designing, and executing the migration of your Data Warehouse (DWH) by leveraging cloud services and serverless ETL models. This approach aims to decrease cloud consumption expenses while enhancing DWH performance.",
        link: "Go for DWH migration",
    },

]

export const tools = [
    {
        image: aws,
        name: "AWS",
    },
    {
        image: microsoft,
        name: "Microsoft Azure",
    },
    {
        image: google,
        name: "Google Cloud Platform",
    },
]

export const get = [
    {
        icon: G1,
        heading: "Planning and Designing",
        color: "#CD0101",
        texts: [
            {
                id:"3",
                text: () => <Box marginTop={{lg: "0rem", base:"1.1rem"}}>
                    CI/CD pipeline design for quick development.
                </Box>,
            },
            {
                id:"1",
                text: () => <Box marginTop={{lg: "1.2rem", base:"1.1rem"}}>
                    Migration strategy and plan tailored to your business needs.
                </Box>,
            },
            {
                id:"2",
                text: () => <Box marginTop={{lg: "1.4rem", base:"2.3rem"}}>
                    Application(s) and data warehouse architectures adapted to the cloud.
                </Box>,
            },

        ],
    },
    {
        icon: G2,
        heading: "Migration and Optimization",
        color: "#2C2C2C",
        texts: [
            {
                id:"1",
                text: () => <Box marginTop={{lg: "0rem", base:"1.1rem"}}>
                    Modernized application(s) or DWH.
                </Box>,
            },
            {
                id:"2",
                text: () => <Box marginTop={{lg: "0rem", base:"1.1rem"}}>
                    Cloud infrastructure configuration.
                </Box>,
            },
            {
                id:"4",
                text: () => <Box marginTop={{lg: "0rem", base:"1.1rem"}}>
                    CI/CD implementation.
                </Box>,
            },
            {
                id:"5",
                text: () => <Box marginTop={{lg: "0rem", base:"1.1rem"}}>
                    Test strategy, test plan, test cases.
                </Box>,
            },
            {
                id:"3",
                text: () => <Box marginTop={{lg: "0rem", base:".1rem"}}>
                    Integration of cloud and on-premises environ-ments to form a hybrid cloud infrastructure, if required.
                </Box>,
            },


        ],
    },
    {
        icon: G3,
        heading: "Knowledge Transfer",
        color: "#123155",
        texts: [
            {
                id:"1",
                text: () => <Box marginTop={{lg: "0rem", base:"2.1rem"}}>
                    Detailed process descriptions and policies regulating IT service provisioning after cloud migration.
                </Box>,
            },
            {
                id:"2",
                text: () => <Box marginTop={{lg: "0rem", base:"3.7rem"}}>
                    Cloud-specific knowledge transfer to in-house architects, developers, testers, DevOps engineers, IT support specialists, DBAs, and security administrators.
                </Box>,
            },
        ],
    },
    {
        icon: G4,
        heading: "Support and Optimization",
        color:"#0061B2",
        texts: [
            {
                id:"1",
                text: () => <Box marginTop={{lg: "1.4rem", base:"2.5rem"}}>
                    Setup of monitoring tools to measure cloud app/DWH performance, load, etc.
                </Box>,
            },
            {
                id:"2",
                text: () => <Box marginTop={{lg: "0rem", base:"1.1rem"}}>
                    Cloud operating cost optimization strategy.
                </Box>,
            },
        ],
    },
]

export const benefit = [
    {
        img: B1,
        title: "Optimized cloud costs",
        content: "Averagely, 35% of an enterprise cloud bill is wasted. Often, overspending reaches 70% and more! At Tanta Innovatives, we’re for reasonable IT investments only. We apply different tactics to help you get the most each dollar spent on cloud services.",
        link: "",
    },
    {
        img: B2,
        title: "State-of-the-art reliability and low latency",
        content: "Actively working with business-critical systems, we know how important it is to ensure the maximum availability and performance of your apps in any circumstances and spotless work of your time-sensitive apps.",
        link: "",
    },
    {
        img: B3,
        title: "Superior Security",
        content: "According to reports,  top cloud security threats are unauthorized cloud access (42%), insecure interfaces (42%) and account hijacking (39%). Since 2003, Tanta’s Innovative security experts help businesses monitor, prevent, detect, and manage security incidents.",
        link: "",
    },
]

export const amount = [
    {
        img: PM,
        cost: "N150,000–N200,000",
        detail: "For a medium/large application.",
    },
    {
        img: GM,
        cost: "N500,000+",
        detail: "For a large app with deep modernization (e.g, re-architecting into microservices).",
    },
    {
        img: YM,
        cost: "N1,000,000–N1,500,000",
        detail: "For the migration to a cloud DWH like Azure Synapse or Amazon Redshift (for a company with 500–1,000 employees).",
    },
    {
        img: BM,
        cost: "N2,000,000+",
        detail: "For the migration to a cloud DWH like Azure Synapse or Amazon\n" +
            "Redshift (for a company with 1,000+ employees).",
    },
]

export const keyStages = [
    {
        numbers: "1",
        title: "Project delivery",
        subContent: [
            {
                id: "10",
                list: () => <Box>
                    Application/DWH audit.
                </Box>,
            },
            {
                id: "11",
                list: () => <Box>
                    Security and compliance assessment.
                </Box>,

            },
            {
                id: "12",
                list: () => <Box>
                    Dependencies mapping.
                </Box>,

            },
            {
                id: "13",
                list: () => <Box>
                    Requirements gathering.
                </Box>,

            },
            {
                id: "14",
                list: () => <Box>
                    Preparing cloud migration project plan.
                </Box>,

            },

        ],
    },
    {
        numbers: "2",
        title: "Data migration",
        content: "For complex and data-intensive migrations, our team works out a strategy and chooses optimal data migration tools. In addition, we:",
        subContent: [
            {
                id: "10",
                list: () => <Box>
                    Create scripts to perform data extracting, cleaning, and loading to the target environment.
                </Box>,

            },
            {
                id: "11",
                list: () => <Box>
                    Build a tool or create a script to automate data migration (automation is optional and depends on the data availability requirements).
                </Box>,

            },
            {
                id: "12",
                list: () => <Box>
                    Perform and validate trial data migration.
                </Box>,
            },
            {
                id: "13",
                list: () => <Box>
                    Execute massive data migration and test the results.
                </Box>,
            },
        ],
    },
    {
        numbers: "3",
        title: "Updating application/DWH architecture and code, if required",
    },
    {
        numbers: "4",
        title: "Mock or pilot migration (optionally)",
        content: "To reduce the potential risks, we can start the migration with:",
        subContent: [
            {
                id: "10",
                list: () => <Box marginTop={{lg: "3rem", base:"2.3rem"}}>
                    Moving your application or DWH to a beta environment before migrating to the production instances in order to test and fine-tune their functionality and cloud services configuration (mock migration).,
                </Box>,
            },
            {
                id: "11",
                list: () => <Box marginTop={{lg: "3rem", base:"2.3rem"}}>
                    Migrating a small sample to the production environment to identify the impact on the to-be-migrated application, the applications it is integrated with and other existing infrastructure component (pilot migration).
                </Box>,
            },
        ],
    },
    {
        numbers: "5",
        title: "Phased migration of all chosen workloads",
    },
    {
        numbers: "6",
        title: "Testing and going live",
    },
    {
        numbers: "7",
        title: "Maintenance and continuous support (optional)",
    },
]

export const approach = [
    {
        text: "App migration to Azure cloud",
        icon: arrowDown,
    },
    {
        text: "App migration to AWS cloud",
        icon: arrowDown,
    },
    {
        text: "Infrastructure migration to AWS Cloud",
        icon: arrowDown,
    },
    {
        text: "Infrastructure migration to Azure Cloud",
        icon: arrowDown,
    },

]

export const questions = [
    {
        test: "How do you choose the best cloud option for a specific migration project?",
        answers: "answer",
    },
    {
        test: "How can I be sure that my migration investments will pay off?",
        answers: "answer",
    },
    {
        test: "Can cloud migration result in application misbehavior?",
        answers: "answer",
    },
    {
        test: "How can I control the migration project’s progress?",
        answers: "answer",
    },
    {
        test: "Should a legacy data warehouse continue working simultaneously while the data is being migrated?",
        answers: "answer",
    },
]

export const pains = [
    {
        icon: target,
        title: "ISSUE",
        content: "High cloud consumption costs",
        link: "",
    },
    {
        icon: target,
        title: "ISSUE",
        content: "Inefficient development in the cloud",
        link: "",
    },
    {
        icon: target,
        title: "ISSUE",
        content: "Poor performance of cloud apps",
        link: "",
    },
    {
        icon: target,
        title: "ISSUE",
        content: "Frequent failures of cloud apps",
        link: "",
    },
    {
        icon: target,
        title: "ISSUE",
        content: "Non-secure cloud environment",
        link: "",
    },
    {
        icon: target,
        title: "ISSUE",
        content: "Costly migration beyond the due terms",
        link: "",
    },


]

export const most = [
    {
        rate: "+19%",
        text: "app performance",
    },
    {
        rate: "-37%",
        text: "IT infrastructure costs",
    },
    {
        rate: "+75%",
        text: "IT infrastructure team’s productivity",
    },
]

export const benefits = [
    "Interactively monetize customer",
    "Enthusiastically underwhelm distinctive",
    "Energistically fabrica intuitive infomediaries",
    "Continually expedite standards compliant",
];

export const summary = ["Company Benefits", "Mission & Vision", "Need Help?"];

export const allCloud = [
    {
        title: "Services",
        content: [
            {
                id:"1",
                list: "Cloud Consulting Services",
            },
            {
                id:"2",
                list: "Cloud Infrastructure Services",
            },
            {
                id:"3",
                list: "Cloud App Development",
            },
        ],
    },
    {
        title: "Migration",
        content: [
            {
                id:"1",
                list: "Cloud Migration Consulting",
            },
            {
                id:"2",
                list: "Cloud Migration Guide",
            },
            {
                id:"3",
                list: "Legacy-to-Cloud App Migration",
            },
        ],
    },
    {
        title: "Integration",
        content: [
            {
                id:"1",
                list: "Cloud Application Integration",
            },
            {
                id:"2",
                list: "Application Integration on Azure",
            },
            {
                id:"3",
                list: "Application Integration on AWS",
            },
        ],
    },
    {
        title: "Security",
        content: [
            {
                id:"1",
                list: "Cloud Security Consulting",
            },
            {
                id:"2",
                list: "Cloud Security Assessment",
            },
        ],
    },
    {
        title: "Azure",
        content: [
            {
                id:"1",
                list: "Microsoft Azure Overview",
            },
            {
                id:"2",
                list: "Azure Consulting Services",
            },
            {
                id:"3",
                list: "Migration to Azure",
            },
            {
                id:"4",
                list: "Application Migration to Azure",
            },
        ],
    },
    {
        title: "Amazon Web Services",
        content: [
            {
                id:"1",
                list: "AWS Overview",
            },
            {
                id:"2",
                list: "AWS Cloud Consulting",
            },
            {
                id:"3",
                list: "Migration to AWS",
            },
            {
                id:"4",
                list: "Application Migration to AWS",
            },
        ],
    },
    {
        title: "Data Analytics",
        content: [
            {
                id:"1",
                list: "Cloud Data Analytics",
            },
            {
                id:"2",
                list: "Cloud Data Warehouses",
            },
        ],
    },
    {
        title: "Healthcare",
        content: [
            {
                id:"1",
                list: "HIPAA-Compliant Clouds",
            },
        ],
    },
    {
        title: "Ecommerce",
        content: [
            {
                id:"1",
                list: "Cloud Ecommerce Solution",
            },
        ],
    },
]
