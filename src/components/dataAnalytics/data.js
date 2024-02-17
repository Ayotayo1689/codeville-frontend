//flexible Images
import f1 from "../../../public/assets/dataAnalytics/f1.png";
import f2 from "../../../public/assets/dataAnalytics/f2.png";
import f3 from "../../../public/assets/dataAnalytics/f3.png";
import f4 from "../../../public/assets/dataAnalytics/f4.png";
import f5 from "../../../public/assets/dataAnalytics/f5.png";
import f6 from "../../../public/assets/dataAnalytics/f6.png";
import Inquiry from "../../../public/assets/dataAnalytics/Inquiry.png";
import appRoutes from "../../utils/appRoutes";

export const highlights = [
  {
    img: Inquiry,
    title:
        "No infrastructure setup and administration burden",
    details:
        "Tanta Innovative shares experience on efficient construction of a data warehouse (DWH): approaches, plan, skills required, software we recommend, and DWH development costs.",
  },

  {
    img: Inquiry,
    title: " Optimal delivery of analytics insights",
    details:
        "Get a structured overview of data warehouse software: key features of a DWH system and a list of our proven tools to build a DWH solution.",
  },

  {
    img: Inquiry,
    title:
        "Data analysis is available as fast as possible ",
    details:
        "Get a structured overview of data warehouse software: key features of a DWH system and a list of our proven tools to build a DWH solution.",
  },

];

export const sideBarData = [
  {
    title: "Our Expert",
    id: "expert",
  },
  {
    title: "Our Service Approach",
    id: "service",
  },
  {
    title: "Data Analytics Solutions",
    id: "DHS",
  },
  {
    title: "Our Data Analytic History",
    id: "DAH",
  },
  {
    title: "Customers And Projects",
    id: "CAP",
  },
  {
    title: "Data Analytic Insights",
    id: "DAI",
  },
];

export const services = [
  {
    title: "Manufacturing Analytics",
    items: [
      {
        id: 1,
        name: "Overall equipment effectiveness analysis and optimization.",
      },
      { id: 2, name: "Manufacturing process quality optimization." },
      { id: 3, name: "Equipment maintenance scheduling." },
      { id: 4, name: "Power consumption forecasting and optimization." },
    ],
  },
  {
    title: "Retail Analytics",
    items: [
      {
        id: 1,
        name: " Retail business performance analysis, monitoring sales and profitability.",
      },
      { id: 2, name: "Demand analysis and forecasting." },
      { id: 3, name: "Multi-echelon inventory optimization." },
      {
        id: 4,
        name: "Assortment and merchandising planning and optimization.",
      },
    ],
  },
  {
    title: "Financial Analytics",
    items: [
      {
        id: 1,
        name: "Monitoring revenue, expenses and profitability of a company.",
      },
      {
        id: 2,
        name: "Profitability analysis and financial performance management.",
      },
      { id: 3, name: "Budget planning, formulating long-term business plans." },
      { id: 4, name: "Financial risk forecasting and management." },
    ],
  },
  {
    title: "Asset Analytics",
    items: [
      { id: 1, name: "Real-time asset monitoring and tracking." },
      {
        id: 2,
        name: "Predictive and preventive maintenance, developing asset maintenance strategies.",
      },
      { id: 3, name: "Planning asset investments." },
      {
        id: 4,
        name: "Asset usage analytics, planning and scheduling asset modernization/replacement/disposal strategies.",
      },
    ],
  },

  {
    title: "HR Analytics",
    items: [
      {
        id: 1,
        name: " Employee/department performance monitoring and analysis.",
      },
      { id: 2, name: "Employee experience and satisfaction analysis." },
      {
        id: 3,
        name: "Employee retention strategy optimization and management.",
      },
      { id: 4, name: "Employee hiring strategy analysis and optimization." },
      { id: 5, name: "Labor cost analytics." },
    ],
  },

  {
    title: "Supply Chain Analytics",
    items: [
      {
        id: 1,
        name: " Identifying demand drivers, consumer demand forecasting and planning.",
      },
      { id: 2, name: "Supplier performance monitoring and evaluation." },
      { id: 3, name: "Predictive route optimization." },
      {
        id: 4,
        name: "Determining the optimal level of inventory to meet the demand and prevent stockouts.",
      },
      {
        id: 5,
        name: "Identifying patterns and trends throughout the supply chain.",
      },
    ],
  },
  {
    title: "Transport And Logistics",
    items: [
      {
        id: 1,
        name: "Predictive analytics for vehicle maintenance (failure prediction, recommendation of maintenance actions, etc.).",
      },
      { id: 2, name: "Vehicle demand forecasting." },
      {
        id: 3,
        name: "Predicting optimal amounts of fuel needed based on the analysis of driving patterns.",
      },
      {
        id: 4,
        name: "IoT data analytics (data on cargo temperature, humidity, etc.; data on driver behavior, data on vehicle condition, etc.) for safe cargo delivery.",
      },
    ],
  },

  {
    title: "Health Care Analytics",
    items: [
      {
        id: 1,
        name: " Patient health condition monitoring, condition-based alerting.",
      },
      { id: 2, name: "Patient treatment optimization." },
      {
        id: 3,
        name: "Assessment of patient risks and personalized care plan recommendations.",
      },

      { id: 4, name: "Fraud detection in healthcare insurance." },

      { id: 5, name: "Optimization of clinical space and equipment usage." },
    ],
  },
];

export const flexible = [
  {
    img: f1,
    title: "Analytics as a Service (AaaS)",
    details: () => <div>
      Within a subscription fee, you carry out data analysis on a fully customized cloud analytics platform built and maintained by <span style={{color:"#E9000E"}}>TANTA</span>

    </div>,
    link:appRoutes.services["data-analytics/analytics-as-a-service"]
  },
  {
    img: f2,
    title: "Managed data analysis",
    details: () => <div>
      Tanta Innovative’s data analysts collect and process your data to deliver quick one-time or recurrent analytics insights to you.

    </div>,
    link: "#",
  },
  {
    img: f3,
    title: "Data analytics implementation",
    details: () => <div>
      We design and implement an analytics solution with the basic functionality to address your current data analytics needs and scale up as they grow.

    </div>,
    link: appRoutes.services["data-analytics/data-implementation"],
  },
  {
    img: f4,
    title: "Data analytics consulting",
    details: () => <div>
      Within a subscription fee, you carry out data analysis on a fully customized cloud analytics platform built and maintained by <span style={{color:"#E9000E"}}>TANTA</span>.

    </div>,
    link: appRoutes.services["data-analytics/analytics-consulting"],
  },
  {
    img: f5,
    title: "Data analytics modernization",
    details: () => <div>
      <span style={{color:"#E9000E"}}>TANTA</span> helps upgrade the existing data analytics solution to achieve maximum ROI and meet the new data analytics needs.

    </div>,
    link: appRoutes.services["data-analytics/data_analytics_modernization"],
  },
  {
    img: f6,
    title: "Data management services",
    details: () => <div>
      <span style={{color:"#E9000E"}}>TANTA</span> implements a robust data management framework to organize your processes of data collection, storage, access, security, analysis, etc.

    </div>,
    link:  appRoutes.services["data-analytics/data_management_services"]
  },
];

export const solutions = [
  {
    title: () => <div>
      Big Data
    </div>,
    items: [
      {
        id: 1,
        name: "Big data infrastructure setup and support.",
      },
      {
        id: 2,
        name: "Big data quality and security management.",
      },
      { id: 3, name: "Big data capture, analysis and reporting." },
    ],
    link: "",
  },

  {
    title: () => <div>
      Data <span style={{color:"#E9000E"}}>Science</span>
    </div>,
    items: [
      { id: 1, name: "Data preparation and management." },
      {
        id: 2,
        name: "Development and tuning of machine learning (ML) (including deep learning) models.",
      },
      {
        id: 3,
        name: "Designing and implanting artificial intelligence (AI) solutions.",
      },
      {
        id: 4,
        name: "Image analysis software development.",
      },
    ],
    link: "",
  },

  {
    title: () => <div>
      Self Service BI
    </div>,
    items: [
      {
        id: 1,
        name: "Business intelligence and data analytics infrastructure design and implementation.",
      },
      { id: 2, name: "Ad hoc and scheduled analytics querying and reporting." },
      {
        id: 3,
        name: "Natural language user interface.",
      },
    ],
    link: "",
  },

  {
    title: () => <div>
      Data integration and data <span style={{color:"#E9000E"}}>warehousing</span>
    </div>,
    items: [
      {
        id: 1,
        name: "Extract, transform, load (ETL) or extract, load, transform (ELT) design and implementation.",
      },
      {
        id: 2,
        name: "Extract, transform, load (ETL) or extract, load, transform (ELT) design and implementation.",
      },
      {
        id: 3,
        name: "Data governance (data security, quality, availability, etc.) implementation.",
      },
      {
        id: 4,
        name: "Data warehouse and data marts design and implementation.",
      },
    ],
    link:  appRoutes.services["data-analytics/data-warehouse"]
  },

  {
    title: () => <div>
      Data Visualization
    </div>,
    items: [
      {
        id: 1,
        name: " Interactive dashboarding.",
      },
      {
        id: 2,
        name: "Custom and pre-built visuals.",
      },
      {
        id: 3,
        name: "Multiple visualization techniques (symbol maps, line charts, bar charts, pie charts, etc.)",
      },
    ],
    link: "",
  },
];

export const insights = [
  {
    img: Inquiry,
    title:
      "How to build a data warehouse from scratch: approaches, plan, software, and costs?",
    details:
      "Tanta Innovative shares experience on efficient construction of a data warehouse (DWH): approaches, plan, skills required, software we recommend, and DWH development costs.",
  },

  {
    img: Inquiry,
    title: " Data warehouse software: 5 best data warehousing tools",
    details:
      "Get a structured overview of data warehouse software: key features of a DWH system and a list of our proven tools to build a DWH solution.",
  },

  {
    img: Inquiry,
    title:
      " Best software to build a data warehouse in the cloud: features, benefits, costs",
    details:
      "Tanta Innovative’s cloud data warehouse consultants present the list of 6 cloud-based data warehouse platforms that cover 99.9% use cases in data warehousing.",
  },

  {
    img: Inquiry,
    title:
      " Business Intelligence implementation: plan, software, costs, and required skills",
    details:
      "Tanta Innovative’s advises on business intelligence implementation in your company: plan, tools, costs, skills for building an effective BI and analytics solution.",
  },
];
