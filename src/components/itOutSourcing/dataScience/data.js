import BDC from "../../../../public/assets/dataScience/BDC.png";
import BDS from "../../../../public/assets/dataScience/BDS.png";

export const sideBarData=[
    {
        title: "About Tanta",
        id: "about",
    },
    {
        title: "Solutions we cover",
        id: "SWC",
    },
    {
        title: "Highlight of our services",
        id: "HOOS",
    },
    {
        title: "Benefit we get",
        id: "BWG",
    },
];

export const solutions=[
    {
        img: BDC,
        title: "Big data consulting ",
        content: [
            {
                id:"1",
                list: "Big data implementation/evolution strategies and detailed roadmaps.",
            },
            {
                id:"2",
                list: " Recommendations on data quality management.",
            },
            {
                id:"3",
                list: "Big data solution architecture + an outline of an optimal technology stack.",
            },
            {
                id:"4",
                list: "User adoption strategies.",
            },
            {
                id:"5",
                list: "A proof of concept (for complex projects).",
            },
        ],
        link: "Go for big data consulting",
    },
    {
        img: BDS,
        title: "Big data development",
        content: [
            {
                id:"1",
                list: "Big data needs analysis.",
            },
            {
                id:"2",
                list: "Big data solution architecture and design.",
            },
            {
                id:"3",
                list: " Big data solution development (a data lake, DWH, ETL/ELT setup, data analysis (SQL and NoSQL), big data reporting and dashboarding).",
            },
            {
                id:"4",
                list: " Setup of big data governance procedures (big data quality, security, etc.)",
            },
            {
                id:"5",
                list: "ML models development.",
            },
        ],
    },
    {
        img: BDC,
        title: "Big data support ",
        content: [
            {
                id: "1",
                list: "Big data solution administration",
            },
            {
                id: "2",
                list: " Big data management.",
            },
            {
                id:"3",
                list: "Big data solution health checks",
            },
            {
                id:"4",
                list: "Big data solution performance monitoring and troubleshooting.",
            },
        ],
    },
    {
        img: BDC,
        title: "Big data managed analytics services",
        content: [
            {
                id: "1",
                list: "Big data solution infrastructure setup and support",
            },
            {
                id: "2",
                list: "Big data extraction and management",
            },
            {
                id:"3",
                list: "ML model development and tuning.",
            },
            {
                id:"4",
                list: "Predefined and ad hoc reports (within several weeks after our cooperation starts)",
            },
            {
                id:"5",
                list: "Big data solution evolution.",
            },
        ],
    },
];

export const neutral = [
    {
        title:"Big data warehousing",
        content: [
            {
                id:"1",
                list: "Storing data about business processes, finances, resources, customers, etc. for analytical querying and reporting. ",
            },
            {
                id:"2",
                list: " Corporate performance analytics.",
            },
            {
                id:"3",
                list: "Revenue, cost and investment analytics.",
            },
            {
                id:"4",
                list: "Predicting, forecasting, planning (performance, revenue, capacity, etc.) with all interdependencies.",
            },
        ],
    },
    {
        title:"Operational analytics ",
        content: [
            {
                id:"5",
                list: "Collecting, processing and storing large volumes of operational data (transactional data, production process data, asset data, employee data, plans, etc.)",
            },
            {
                id:"6",
                list: " Detecting deviations and undesirable patterns in a company’s operations (production processes, product distribution, etc.)",
            },
            {
                id:"7",
                list: "Recognizing bottlenecks (equipment failure, resource unavailability, etc.), conducting cause-effect analysis.",
            },
            {
                id:"8",
                list: "What-if scenario modeling and operational risk management.",
            },
        ],
    },
];

export const specific = [
    {
        title:"Manufacturing ",
        content: [
            {
                id:"1",
                list: "Analyzing manufacturing data (equipment year, model, sensor data, error messages, engine temperature, etc.) to predict equipment failures and the remaining useful time in real time.",
            },
            {
                id:"2",
                list: "Real-time monitoring of production processes, production equipment data, materials usage, etc., to identify factors leading to production time increase and delays for production optimization.",
            },
        ],
    },
    {
        title:"Healthcare",
        content: [
            {
                id:"5",
                list: "Capturing, storing, and analyzing patient-related data (doctor notes, medical images, EHR/EMR data, R&D results, etc.).",
            },
            {
                id:"6",
                list: "Real-time patient monitoring and alerting on trends and patterns requiring the doctor’s attention.",
            },
            {
                id:"7",
                list: "Forecasting the supply demand, supplier risks, etc., to enable healthcare supply chain optimization and planning.",
            },
        ],
    },
    {
        title:"Financial services ",
        content: [
            {
                id:"8",
                list: "Analyzing integrated transactional data, interaction events, customer behavior in real time, identifying complex AML transactions, creating advanced risk models, etc., to identify potential fraud and fraud patterns.",
            },
            {
                id:"9",
                list: "Consolidating and analyzing data on assets and liabilities and conducting credit risk assessment, liquidity risk assessment, counterparty risk analysis, etc., to mitigate financial risks.",
            },

        ],
    },
    {
        title:"Transportation and logistics ",
        content: [
            {
                id:"10",
                list: "Tracking and analyzing real-time sensor data (cargo state, location, etc.) to make the delivery process fully transparent and ensure high-quality delivery of sensitive goods.",
            },
            {
                id:"11",
                list: "Analyzing driver behavior, maintenance needs, weather data, traffic data, fuel consumption data, etc., in real time to enable dynamic route optimization.\n",
            },
        ],
    },
    {
        title:"Retail and ecommerce ",
        content: [
            {
                id:"12",
                list: "Analyzing customer demographic data, data from mobile apps, in-store purchases, etc. to identify customer paths and behavior to optimize merchandizing, provide personalized product recommendations, discounts, etc.",
            },
            {
                id:"13",
                list: "Consolidating and analyzing data from social media, web visits, call logs, and more to personalize customer support, launch tailored customer retention campaigns, etc.",
            },
        ],
    },
    {
        title:"Oil and gas",
        content: [
            {
                id:"14",
                list: "Analyzing log and sensor data from different types of equipment in real time and putting analytics results into operations to facilitate predictive equipment maintenance.",
            },
            {
                id:"15",
                list: "Analyzing drilling and production process data, data generated from seismic monitors, etc., to identify new oil deposits.",
            },
        ],
    },
];
