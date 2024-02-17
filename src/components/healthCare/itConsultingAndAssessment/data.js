import hospital from "../../../../public/assets/healthcare/itConsultingServices/hospital.png";
import devices from "../../../../public/assets/healthcare/itConsultingServices/devices.png";
import space from "../../../../public/assets/healthcare/itConsultingServices/space.png";
import tablets from "../../../../public/assets/healthcare/itConsultingServices/tablets.png";

import optimization from "../../../../public/assets/healthcare/itConsultingServices/optimization.png";
import hippa from "../../../../public/assets/healthcare/itConsultingServices/hippa.png";
import support from "../../../../public/assets/healthcare/itConsultingServices/support.png";
import software from "../../../../public/assets/healthcare/itConsultingServices/software.png";
import connection from "../../../../public/assets/healthcare/itConsultingServices/connection.png";
import todo from "../../../../public/assets/healthcare/itConsultingServices/todo.png";

import engagement from "../../../../public/assets/healthcare/itConsultingServices/engagement.svg.png";
import care from "../../../../public/assets/healthcare/itConsultingServices/care.svg.png";
import telemedicine from "../../../../public/assets/healthcare/itConsultingServices/telemedicine.svg.png";
import notification from "../../../../public/assets/healthcare/itConsultingServices/notification.svg.png";
import vr from "../../../../public/assets/healthcare/itConsultingServices/vr.svg.png";
import analysisSoftware from "../../../../public/assets/healthcare/itConsultingServices/analysisSoftware.svg.png";
import patient from "../../../../public/assets/healthcare/itConsultingServices/patient.svg.png";
import data from "../../../../public/assets/healthcare/itConsultingServices/data.svg.png";
import team from "../../../../public/assets/healthcare/itConsultingServices/team.svg.png";
import assetTracking from "../../../../public/assets/healthcare/itConsultingServices/assetTracking.svg.png";
import medicalDevice from "../../../../public/assets/healthcare/itConsultingServices/medicalDevice.svg.png";

import Star from "../../../../public/assets/healthcare/itConsultingServices/star.png"
import appRoutes from "../../../utils/appRoutes";



export const ItConsultingSidebar = [
    {
        title: "Service options",
        link: "#service",
    },
    {
        title: "About Tanta",
        link: "#about_tanta",
    },
    {
        title: "Medical IT consulting process",
        link: "#medical",
    },
    {
        title: "Solutions we cover",
        link: "#solutions",
    },
    {
        title: "Technology we use",
        link: "#technology",
    },
    {
        title: "Highlights of our services",
        link: "#heghlights",
    },
    {
        title: "Pricing models",
        link: "#pricing",
    },
    {
        title: "Our customers say",
        link: "#our_customers",
    },
    {
        title: "Success stories",
        link: "#success_stories",
    },

];

export const customersWeServe = [
    {
        id: 1,
        image: hospital,
        text: "Healthcare providers (hospitals ,outpatient clinics, labs, etc.)",
    },
    {
        id: 2,
        image: devices,
        text: "Medical device manufacturers ",
    },
    {
        id: 3,
        image: space,
        text: "Digital health startups and software product companies ",
    },
    {
        id: 4,
        image: tablets,
        text: "Pharmaceutical companies  ",
    },
    ];

export const consultingOption =[
    {
        id: 1,
        title: "Assessment of the existing IT environment",
        list: [
            "Business needs and workflows analysis. ",
            "IT environment review and optimization. ",
            "Security and compliance analysis.",
            "Guidance on IT environment optimization. ",
            "Compliance assistance for healthcare regulations(HIPAA, HITECH, FDA, GDPR, MDR, IVDR, SAMHSA).",

        ],
        linkId: 3,
        bg: "transparent",
        color: "linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)",
        text: "Request IT assessment",

    },

    {
        id: 2,
        title: "IT strategy consulting ",
        list: [
            "Business Needs Analysis & IT Planning. ",
            "Efficient IT Strategy & Implementation . ",
            "Seamless Software Integration.",
            "Compliance Guidance (HIPAA, HITECH, FDA, GDPR, MDR, IVDR, SAMHSA). ",
            "Reliable Support for Smooth Operations.",

        ],
        linkId: 4,
        bg: "transparent",
        color: "linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)",
        text: "Request IT strategy ",
    },

    {
        id: 3,
        title: "Medical solution consulting ",
        list: [
            " Needs analysis and technical design of your healthcare solution.. ",
            " Seamless integration with existing systems. ",
            "Transparent cost estimation and ROI analysis. ",
            "Compliance guidance for healthcare regulations. ",
            "Implementation and user training services.",

        ],
        linkId: 5,
        bg: "transparent",
        color: "linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)",
        text: "Request solution consulting",
    },

    {
        id: 4,
        title: "Digital health startup consulting ",
        list: [
            "Market analysis and business needs assessment . ",
            "Healthcare software productization. ",
            "Business case design and cost estimation. ",
            "Compliance guidance on regulations. ",
            "Software development and support.",

        ],
        linkId: 6,
        bg: "transparent",
        color: "linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)",
        text: "Request startup consulting",
    },
]

export const range =[
    {
        img: optimization,
        title: "Healthcare software optimization and modernization.",
        link: appRoutes.services["cost-calculator"],
        content: [
            "Performance optimization.",
            "Healthcare software architecture redesign.",
            "Evolution of medical software (e.g.,implementation of advanced techs,new functionality, convenience features).",
            "Security and compliance improvement."
        ],
        text: "GET A CONSULTATION"
    },

    {
        img: hippa,
        title: "Migration to a HIPAA-compliant cloud.",
        link: appRoutes.services["cost-calculator"],
        content: [
            "Selection of an optimal HIPAA-compliant cloud provide (AWS, Azure, etc.).",
            "Planning software migration to a HIPAA-compliant cloud.",
            "Carrying out migration to a cloud.",
            "Optimizing software in a HIPAA-compliant cloud and the use of cloud resources to cut the expenses."
        ],
        text: "GET A CONSULTATION"
    },

    {
        img: support,
        title: "Healthcare IT support",
        link: appRoutes.services["cost-calculator"],
        content: [
            "Support of all healthcare IT ecosystem components (e.g., networks, IoMT infrastructure, EHR, patient portals).",
            "Proactive healthcare IT support (e.g., security,healthcare IT infrastructure monitoring and maintenance).",
            "Reactive IT support (e.g., L1-L3 support).",

        ],
        text: "CHECK OUR OFFERING"
    },


    {
        img: software,
        title: "Healthcare software development",
        link:appRoutes.services["cost-calculator"],
        content: [
            "Design of flexible architecture and required integrations.",
            "Convenient UX design for doctors, nurses, patients, etc.",
            "Development in compliance with HIPAA, HITECH, and other regulations.",
            "(if required) User training for doctors, nurses, etc.",
            "Support and maintenance services according to the required schedule.",

        ],
        text: "CHECK OUR OFFERING"
    },

    {
        img: connection,
        title: "Integration of healthcare software",
        details: "ScienceSoft helps integrate the software with:",
        link:appRoutes.services["cost-calculator"],
        content: [
            "Clinical software (e.g., EHR, laboratory management system, medical imaging software).",
            "Patient software (patient portals, telehealth apps, etc.).",
            "Management software (e.g., CRM, practice management software).",
            "IoMT (Internet of Medical Things) systems and connected medical devices.",


        ],
        text: "GET A CONSULTATION"
    },


    {
        img: todo,
        title: "Healthcare cybersecurity and HIPAA compliance assessment",
        link: appRoutes.services["cost-calculator"],
        content: [
            "HIPAA compliance of technical (e.g., ePHI access control) and physical (e.g., facility access control) safeguards.",
            "Correction measures for the vulnerabilities that may be exploited by cybercriminals.",
            "Security testing routine to ensure timely vulnerabilities detection and elimination.",



        ],
        text: "GET A CONSULTATION"
    },
]

export const expertsCards=[
    {
        img: engagement,
        title: "Patient engagement solutions",
        details: "ScienceSoft will help you design and plan the development of:",
        link: "#",
        listItem: [
            "Custom patient portals.",
            "Medical websites.",
            "Mobile applications for health parameters tracking, nutrition monitoring, etc.",
            "Chronic disease management applications.",
            "Health education software.",
            "Clinical maps..",

        ],
        footer: "Implementation timeline: ",
        footer1: "MVP in 2-4 months.",
        text: "CHECK OUR OFFERING"
    },

    {
        img: care,
        title: "Remote patient monitoring (RPM)",
        details: "We advise on RPM software that allows:",
        link: "#",
        listItem: [
            "Collecting and analyzing detailed information about patients' vitals.",
            "Sharing patient data with integrated healthcare IT systems (e.g., EHR, HMS).",
            "Alerting a doctor, a patient, and caregivers in case of alarming health parameters.",

        ],
        footer: "Implementation timeline: ",
        footer1: "MVP in around 4-8 months.",
        text: "CHECK OUR OFFERING"
    },

    {
        img: telemedicine,
        title: "ScienceSoft's experts design telemedicine software offering:",
        details: "Engaging video appointments.",
        link: "#",
        listItem: [
            "Remote diagnosing and vitals tracking (e.g., for pulse, blood pressure).",
            "Automated billing due to integration with EHR.",
            "Data analytics of patient outcome trends, physician performance.",

        ],
        footer: "Implementation timeline: ",
        footer1: "MVP in around 4-8 months.",
        text: "CHECK OUR OFFERING"
    },

    {
        img: notification,
        title: "Chronic disease management and digital therapeutics",
        details: "We design software featuring:",
        link: "#",
        listItem: [
            "Notifications on scheduled appointments, lab results, medication management, and more.",
            "Medication intake scheme.",
            "Disease-specific therapy programs aimed at symptom relief (breathing exercises for cardiac health, etc.).",
            "Nutrition and activity instructions.",
        ],
        footer: "Implementation timeline: ",
        footer1: "MVP in 3-6 months.",
        text: "CHECK OUR OFFERING"
    },


    {
        img: vr,
        title: "Virtual reality (VR) software",
        details: "ScienceSoft’s experts will help you plan VR software for:",
        link: "#",
        listItem: [
            "Medical education and training of medical students and starting-out healthcare professionals.",
            "Surgery training and planning.",
            "Pain management of chronic, acute medical procedure pain.",
            "Patient rehabilitation, including stroke rehabilitation.",
            "Physical therapy.",
        ],
        footer: "Implementation timeline: ",
        footer1: "MVP in 2-4 months.",
        text: "CHECK OUR OFFERING"
    },

    {
        img: analysisSoftware,
        title: "Image analysis software",
        details: "We advise our customers on software handling:",
        link: "#",
        listItem: [
            "Analysis of various medical images (CT, MRI, PET, SPECT, ultrasound, radiography, mammography, etc.).",
            "3D image analysis of particular body parts (respiratory system, brain, cardiovascular system, etc.).",
            "Image analysis for a wide range of standards (e.g., DICOM, MINC, NifTI).",

        ],
        footer: "Implementation timeline: ",
        footer1: "MVP in 2-4 months.",
        text: "CHECK OUR OFFERING"
    },

    {
        img: patient,
        title: "Patient relationship management",
        details: "ScienceSoft will help you plan:",
        link: "#",
        listItem: [
            "Patient CRM with a 360-degree patient view.",
            "Digital PR and marketing strategy.",
            "Integrations of patient relationship management software with EHR and other clinical applications to avoid dispersed data.",

        ],
        footer: "Implementation timeline: ",
        footer1: "from 2-4 months.",
        text: "CHECK OUR OFFERING"
    },

    {
        img: data,
        title: "Healthcare data management and analytics",
        details: "We help integrate data from all required apps to get insights into:",
        link: "#",
        listItem: [
            "Patient outcomes.",
            "Physicians’ and nurses’ performance.",
            "Research and development progress.",
            "Staffing gaps.",
            "Population health.",
            "Financial data analytics.",
            "Medical devices usage and performance.",
            "Medical facilities condition and usage.",

        ],
        footer: "Implementation timeline: ",
        footer1: "from 2-4 months.",
        text: "CHECK OUR OFFERING"
    },

    {
        img: team,
        title: "Digital collaboration and internal process automation solutions",
        link: "#",
        listItem: [
            "Office 365-based collaboration and workflow automation to support multiteam patient care.",
            "SharePoint Intranet and Extranet to keep medical, administrative staff informed on critical data and enable all-around collaboration.",
            "Remote workplace for nurses and physicians.",
            "SharePoint policy management and ticketing systems.",
            "Learning management system.",
          ],
        footer: "Implementation timeline: ",
        footer1: "from 1-2 months.",
        text: "GET A CONSULTATION"
    },

    {
        img: assetTracking,
        title: "Staff, patient, facility tracking software",
        details: "We offer consultancy on IoT software for:",
        link: "#",
        listItem: [
            "Staff tracking to avoid overwork and optimize workflows.",
            "Inpatient tracking with smart sensors or devices to improve safety and provide timely care.",
            "Hospital asset tracking using RFID tags to avoid underutilization or loss of the equipment.",


        ],
        footer: "Implementation timeline: ",
        footer1:"starting from 2 months for a platform-based software.",
        text: "CHECK OUR OFFERING"
    },

    {
        img: medicalDevice,
        title: "Medical device software and software as a medical device (SaMD)",
        link: "#",
        listItem: [
            "Software for medical devices (e.g., glucose meters, laboratory equipment).",
            "Software as a Medical Device (e.g., for treatment planning, medical image viewing, drug dosage calculation).",
            "IoMT software design (e.g., for asset tracking, staff tracking).",


        ],
        footer: "Implementation timeline: ",
        footer1:"MVP in 4-8 months.",
        text: "CHECK OUR OFFERING"
    },
]

export const technologiesCard =[
    {
        img:Star,
        title: "Deep healthcare industry knowledge",
        details: "ScienceSoft’s healthcare IT consultants have experience in\n" +
            "pharmaceutical and biotech domains, health insurance, clinical\n" +
            "processes, medical devices, etc. They guide our customers in\n" +
            "planning, implementing, and supporting healthcare software\n" +
            "that suits their strategic goals and business models.",
    },

    {
        img:Star,
        title: "End-to-end services",
        details: "ScienceSoft combines healthcare software consulting with\n" +
            "practical assistance for healthcare organizations and software\n" +
            "product companies: implementation of digital initiatives,\n" +
            "development of software products, continuous IT support,\n" +
            "managed IT services, etc.",
    },

    {
        img:Star,
        title: "Fast software benefits",
        details: "We work in iterations to help healthcare orgs, pharmaceutical,\n" +
            "medical device companies, and healthcare software startups get\n" +
            "the first benefits from our cooperation within several months.\n" +
            "After rolling out the first software version or implementing\n" +
            "primary changes to existing software, we continue refining\n" +
            "software to drive better business results and deliver all required\n" +
            "functionality.",
    },

    {
        img:Star,
        title: "Meticulous approach to quality and security",
        details: "We prioritize the quality and security of the healthcare software\n" +
            "to help our customers get tangible business value, optimize\n" +
            "costs, and withstand any security threats. With comprehensive\n" +
            "policies, well-implemented processes, and skilled professionals,\n" +
            "ScienceSoft manages the quality and security of healthcare\n" +
            "projects according to ISO 9001 and ISO 27001.",
    },

    {
        img:Star,
        title: "Cost-effectiveness",
        details: "To help you cut the development time and costs, we suggest\n" +
            "building healthcare software from proven third-party\n" +
            "components (e.g., cloud analytics services). We select optimal\n" +
            "software components for each customer and integrate them\n" +
            "professionally. For example, in one of our medical consulting , we helped the customer reduce app ownership costs  by transferring the advertising platform to a multi-tenant model.",
    },

    {
        img:Star,
        title: "Business-oriented cooperation",
        details: "We help healthcare organizations and software product\n" +
            "companies introduce new value-driving technologies and\n" +
            "improve clinical and business processes to achieve better results\n" +
            "and cut IT operating costs. The medical IT solutions and\n" +
            "software products we suggest are backed by thoughtful\n" +
            "business analysis and help you reach your KPIs.",
    },
]
export const approach =[
    {
        title: "Fixed price (FP)",
        details: "We charge a fixed quote for the defined\n" +
            "healthcare project scope. The payments\n" +
            "schedule is aligned with the project’s\n" +
            "milestones.",
        text: "Optimal for: ",text1:"Waterfall projects."

    },
    {
        title: "Time and Materials (T&M)",
        details: "We charge for the actual time spent on\n" +
            "healthcare software development by an\n" +
            "hourly rate of the outsourced specialists and\n" +
            "issue monthly invoices with reports on\n" +
            "completed work.",
        text: "Optimal for: ",  text1:"Agile projects, projects with a scope that is likely to change."

    },
    {
        title: "Time and Materials with a cap (T&M NTE)",
        details: "We charge for an actual time spent on\n" +
            "healthcare software development but cannot\n" +
            "exceed a certain total charge. The customer is\n" +
            "charged monthly.",
        text: "Optimal for:", text1:" projects with potential slight changes of scope, but with strict budget limitations."

    },
]