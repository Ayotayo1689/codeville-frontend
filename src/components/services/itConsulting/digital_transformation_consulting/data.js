import BigData from "../../../../../public/assets/data_transformation/bigData.svg";
import dataSci from "../../../../../public/assets/data_transformation/digitalTwin.svg";
import AI from "../../../../../public/assets/data_transformation/ai.svg";
import CompVision from "../../../../../public/assets/data_transformation/computerVision.svg";
import AR from "../../../../../public/assets/data_transformation/ar.svg";
import Cloud from "../../../../../public/assets/data_transformation/cloud.svg";
import machineLearning from "../../../../../public/assets/data_transformation/machine.svg";
import IOT from "../../../../../public/assets/data_transformation/iot.svg";
import blockchain from "../../../../../public/assets/data_transformation/blockchain.svg";
import Bag from "../../../../../public/assets/data_transformation/bag.svg";
import Headset from "../../../../../public/assets/data_transformation/headset.svg";
import Employees from "../../../../../public/assets/data_transformation/employee.svg";
import Health from "../../../../../public/assets/data_transformation/health.svg";
import Van from "../../../../../public/assets/data_transformation/van.svg";
import Connect from "../../../../../public/assets/data_transformation/connect.svg";
import Calculator from "../../../../../public/assets/data_transformation/calculator.svg";
import Asset from "../../../../../public/assets/data_transformation/asset.svg";
import Time from "../../../../../public/assets/data_transformation/time.svg";
import Reputation from "../../../../../public/assets/data_transformation/positive.svg";
import Hands from "../../../../../public/assets/data_transformation/hands.svg";
import Scale from "../../../../../public/assets/data_transformation/scale.svg";

import Insights from "../../../../../public/assets/consulting/insights.svg"


export const customerInsights = [
    {
        id: 1,
        image: Insights,
        title: "Accelerating Time-to-Market for Digital\n" +
            "Products",
        subtitle1: "Customer: ",
        text1: "a provider of video streaming services in the US and Europe",
        subtitle2: "Story: ",
        text2: "Tanta launched the practice of hybrid app development, which reduced development costs and accelerated\n" +
            "the delivery of online streaming apps for the Customer.",
    },
    {
        id: 2,
        image: Insights,
        title: "Promoting Digital Transformation in\n" +
            "Healthcare",
        subtitle1: "customer: ",
        text1: "a Nigerian-based foodstuff distributor",
        subtitle2: "Story: ",
        text2: "Tanta helped the Customer to build a digital platform for foodstuff distribution, which enabled them to\n" +
            "increase their sales by 30% and expand their business to other regions of Nigeria.",
    },
];

export const sideBarData = [
    {
        title: "Why choose us",
        goto: "#why",
    },
    {
        title: "Digital transformation",
        goto: "#transformation",

    },
    {
        title: "Technologies we use",
        goto: "#tech",
    },
    {
        title: "How we deliver",
        goto: "#deliver",
    },
    {
        title: "DT strategies",
        goto: "#strategies",
    },
    {
        title: "Client success",
        goto: "#success",
    },
];


export const whyTanta = [
    {
        img: Time,
        title: "Time-proved",
        details: "we’ve developed software solutions since 1989 and started working as consulting leaders on large digital transformational projects as soon as we gained sufficient professional experience."
    },
    {
        img: Reputation,
        title: "Positively reputed",
        details:
            "our clients speak highly of their cooperation with ScienceSoft and often stay with us over the years for deeper digital transformation."
    },
    {
        img: Hands,
        title: "Hands-on",
        details: "there are 3,600+ success stories under our belt at the moment."
    },
    {
        img: Scale,
        title: "Large-scale",
        details: "we have Fortune 500 companies among clients and know the demands of large enterprises."
    },
];


export const advancedTechnologies = [
    {
        img: IOT,
        title: "Internet of Things (IoT)",
        details: "Collecting data from smart connected devices and sensors to control environments and operations of physical objects or build business intelligence."
    },
    {
        img: dataSci,
        title: "Digital twins",
        details: "Creating a virtual copy of a physical object to run simulations and apply the resulting insights to the object."
    },
    {
        img: blockchain,
        title: "Blockchain",
        details: "Creating systems with irrevocable records of transactions for secure information storage and sharing."
    },
    {
        img: machineLearning,
        title: "Machine learning (ML) and deep learning",
        details: "Creating self-learning algorithms to find distinct patterns in the input data."
    },
    {
        img: AI,
        title: "Artificial intelligence (AI)",
        details: "Applying ML algorithms to perform tasks that otherwise require human intervention (like speech or text recognition)."
    },
    {
        img: BigData,
        title: "Big data",
        details: "Structuring and processing data that arrives in large volumes or complexity."
    },
    {
        img: CompVision,
        title: "Computer vision",
        details: "Recognizing attributes on visuals and video."
    },
    {
        img: AR,
        title: "Augmented reality",
        details: "Merging real and virtual environments to create an immersive user experience."
    },
    {
        img: Cloud,
        title: "Cloud computing",
        details: "Building scalable and cost-effective applications or IT infrastructures in the cloud."
    },
];


export const starCardData = [
    {
        title: "Pre-implementation stage",
        exp: "",
        list: [
            {
                listTitle: "Analyzing the business background: present business state, processes, competitors.",
                subList: []
            }, {
                listTitle: "Assessing the IT infrastructure and processes: cloud adoption, readiness for fast software delivery (DevOps practices, automated testing and security, etc.), data management maturity.",
                subList: []
            }, {
                listTitle: "Setting up and prioritizing digital transformation goals.",
                subList: []
            }, {
                listTitle: "Laying out a strategy with clear, actionable steps, analyzing the feasibility of and creating proofs-of-concept for proposed solutions.",
                subList: []
            },


        ]
    },
    {
        title: "Digital transformation strategy execution",
        exp: "",
        list: [
            {
                listTitle: "Prototyping solutions and launching pilots (if needed) to collect early feedback and make prototype improvements.",
                subList: []
            },
            {
                listTitle: "Providing resources for:",
                subList: [
                    "Core software development tasks (we have developers skilled in a wide pool of technologies).",
                    "High-end jobs, like custom software architecture design, CI/CD implementation, and more.",
                    "Niche hands-on industry experience or skills in advanced techs like IoT or blockchain."
                ]
            },
            {
                listTitle: "Planning agile changes to the DT strategy when intermediate results are assessed.",
                subList: []
            },
        ],
    },
    {
        title: "End user training",
        exp: "We help with the fast adoption of new processes by your team. During training, we typically cover:",
        list: [
            {
                listTitle: "User roles and permissions.",
                subList: []
            },
            {
                listTitle: "Key software functionality and navigation.",
                subList: []
            },
            {
                listTitle: "Key process flows and automation opportunities created by software.",
                subList: []
            },
        ]
    },
];

export const ServicesOfferCardData = [
    {
        title: "Customer experience",
        img: Bag,
        exp: "to find new ways to connect to your target audience and increase customer value.",
        details: [
            "Ecommerce launch.",
            "Integrated omnichannel customer experience.",
            "AI-powered personalization at all stages of a customer lifecycle.",
            "Sentiment analysis to monitor brand reputation across customer generated texts (reviews, social posts, surveys).",
        ]
    },
    {
        title: "Customer service",
        img: Headset,
        exp: "to improve the quality and decrease costs of customer care.",
        details: [
            "AI-powered agent platform.",
            "Virtual agents (chatbots).",
            "Remote servicing.",
            "Integration of customer interaction channels.",
            "Intelligent automation of customer service processes.",
        ]
    },
    {
        title: "Employee experience",
        exp: "to improve the working environment and propel high employee performance.",
        img: Employees,
        details: [
            "Robotic process automation of routine tasks.",
            "Secure and delay-free remote workplace.",
            "Digital space for team collaboration.",
            "Document management.",
            "SE-learning.",
        ]
    },
    {
        title: "Healthcare experience",
        img: Health,
        exp: "to provide easier access to medical care and improve treatment delivery.",
        details: [
            "EHR (electronic health records) systems.",
            "Telehealth.",
            "Medical image analysis.",
            "Connected medical devices for remote patient monitoring.",
            "Patient portals and digital messaging.",
            "Hospital inventory management.",
        ]
    }, {
        title: "Supply chain",
        img: Van,
        exp: "to achieve transparency at each supply chain stage, build supply chain resilience, speed up product time-to-market.",
        details: [
            "Data-driven demand forecasting.",
            "Inventory levels and location tracking.",
            "Environmental control during the storage and transportation of goods.",
            "Digitized procurement.",
            "Multichannel order processing.",
            "Connected supply chain."
        ]
    },
    {
        title: "Connected factory / Industry 4.0",
        img: Connect,
        exp: "to improve the cost, agility, and safety of manufacturing processes.",
        details: [
            "Proactive equipment servicing.",
            "Product quality control.",
            "Remote human-machine interaction.",
            "Wearables for industrial work safety.",
            "Integration of shop-floor and top-floor systems.",
            "Real-time KPI visibility.",
        ]
    },
    {
        title: "Financial management",
        exp: "to automate routine financial tasks and free time for strategic planning.",
        img: Calculator,
        details: [
            "Robotic process automation of financial tasks.",
            "Automated accounting software.",
            "Cost management, cost and budget modeling.",
            "AI-enabled dynamic pricing.",
        ]
    },
    {
        title: "Asset management",
        img: Asset,
        exp: "to increase ROA.",
        details: [
            "Real-time asset tracking.",
            "Asset utilization optimization.",
            "Sensor-based remote monitoring and predictive maintenance of operating equipment.",
            "Asset availability analysis and procurement planning.",
        ]
    },

];


export const strategyData = [
    {
        title: "We target value, not technologies.",
        text: "We know business opportunities enabled by digital techs and prioritize only high-value use cases for digital transformation strategies. Our ability to bring added value to each project has earned us the presence in the ",
        span: "prestigious Global Outsourcing 100 listing."
    },
    {
        title: "We don’t push expensive solutions.",
        text: "We eagerly use low-code tools for simple business process automation tasks.",
        span: ""
    },
    {
        title: "We formulate a long-term transformation strategy but don’t avoid quick wins. ",
        text: "When possible, we advise our clients on steps that create a quick return on investment and start delivering profit or reducing costs early in digital transformation.",
        span: ""
    },
    {
        title: "We provide transparent timelines.",
        text: "Digital transformation is easier to plan and manage when we split it into a sequence of steps and approach them in an agile manner.",
        span: ""
    },
]
