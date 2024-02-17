import React from "react";
import Head from "next/head";

import { useRouter } from "next/router";
export default function HeadData() {
	const router = useRouter();
	const canonicalURL = `https://tantainnovatives.com${router.asPath}`;
	return (
		<Head>
			<link rel="shortcut icon" href="/favicon.ico"/>
			<link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico"/>
			<link rel="icon" type="image/png" sizes="196x196" href="../../public/favicon/favicon-192.png"/>
			<link rel="icon" type="image/png" sizes="160x160" href="../../public/favicon/favicon-160.png"/>
			<link rel="icon" type="image/png" sizes="96x96" href="../../public/favicon/favicon-96.png"/>
			<link rel="icon" type="image/png" sizes="64x64" href="../../public/favicon/favicon-64.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="../../public/favicon/favicon-32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="../../public/favicon/favicon-16.png"/>
			<link rel="apple-touch-icon" href="../../public/favicon/favicon-57.png"/>
			<link rel="apple-touch-icon" sizes="114x114" href="../../public/favicon/favicon-114.png"/>
			<link rel="apple-touch-icon" sizes="72x72" href="../../public/favicon/favicon-72.png"/>
			<link rel="apple-touch-icon" sizes="144x144" href="../../public/favicon/favicon-144.png"/>
			<link rel="apple-touch-icon" sizes="60x60" href="../../public/favicon/favicon-60.png"/>
			<link rel="apple-touch-icon" sizes="120x120" href="../../public/favicon/favicon-120.png"/>
			<link rel="apple-touch-icon" sizes="76x76" href="../../public/favicon/favicon-76.png"/>
			<link rel="apple-touch-icon" sizes="152x152" href="../../public/favicon/favicon-152.png"/>
			<link rel="apple-touch-icon" sizes="180x180" href="../../public/favicon/favicon-180.png"/>
			<meta name="msapplication-TileColor" content="#FFFFFF"/>
			<meta name="msapplication-TileImage" content="../../public/favicon/favicon-144.png"/>
			<meta name="msapplication-config" content="/browserconfig.xml"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<meta

				property="og:title"
				content="Tanta - IT Consulting and Software Development"
			/>
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://tantainnovatives.com" />
			<meta
				property="og:image"
				content="https://tantainnovatives.com/assets/tanta_innovative_fb.png"
			/>
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="627" />
			<meta
				name="twitter:image"
				content="https://tantainnovatives.com/assets/tanta_innovative_tw.png"
			/>
			<meta
				property="og:image"
				content="https://tantainnovatives.com/assets/tanta_innovative.png"
			/>
			<meta
				property="og:description"
				content="Tanta is a leading IT consulting firm offering innovative solutions and exceptional customer service to improve business performance and gain more customers."
			/>
			<meta property="og:site_name" content="Tanta" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@tantainnovative" />
			<meta
				name="twitter:title"
				content="Tanta Innovative - IT Consulting and Software Development"
			/>
			<meta
				name="twitter:description"
				content="Tanta is a leading IT consulting firm offering innovative solutions and exceptional customer service to improve business performance and gain more customers."
			/>
			<meta
				name="twitter:image"
				content="https://tantainnovatives.com/assets/tanta_innovative_tw.png"
			/>
			<link rel="canonical" href={canonicalURL} />

			<meta name="twitter:creator" content="@tantainnovative" />

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Tanta Innovative Limited",
            "url": "https://www.tantainnovatives.com",
            "logo": "https://tantainnovatives.com/assets/Logo.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+234-1-453-6000",
              "contactType": "Customer Service",
              "email": "hello@tantainnovatives.com"
            },
            "sameAs": [
              "https://facebook.com/tantainnovatives",
              "https://twitter.com/tantainnovative",
              "https://www.linkedin.com/company/tantainnovative"
            ]
          }
        `,
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Abraham Esandayinze Tanta",
      "jobTitle": "Founder and CEO",
      "worksFor": {
        "@type": "Organization",
        "name": "Tanta Innovative Limited"
      },
      "image": "https://res.cloudinary.com/db2rp1vzs/image/upload/v1/media/employees/biodata/images/abraham_gybh9p",
      "url": "https://www.linkedin.com/in/mr-tanta/",
      "sameAs": [
        "https://www.linkedin.com/in/mr-tanta/"
      ]
    }
    `,
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Tunde Aina ",
      "jobTitle": "Chief Operating Officer",
      "worksFor": {
        "@type": "Organization",
        "name": "Tanta Innovative Limited"
      },
      "image": "https://res.cloudinary.com/db2rp1vzs/image/upload/v1/media/employees/biodata/images/aina_g34ove",
      "url": "https://www.linkedin.com/in/tunde-aina-0048a1128/",
      "sameAs": [
        "https://www.linkedin.com/in/tunde-aina-0048a1128/"
      ]
    }
    `,
				}}
			/>

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `
               {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "provider": {
                    "@type": "Organization",
                    "name": "Tanta Innovative Limited",
                    "url": "https://www.tantainnovative.com"
                },
                    "areaServed": "Global",
                    "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Our Services",
                    "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                    "@type": "Service",
                    "name": "Software Development",
                    "description": "We offer custom software development services tailored to meet your specific business needs.",
                    "serviceType": "Software Development"
                }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                    "@type": "Service",
                    "name": "Testing & QA",
                    "description": "Our testing and quality assurance services ensure the reliability and performance of your software applications.",
                    "serviceType": "Testing & QA"
                }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                    "@type": "Service",
                    "name": "Application Services",
                    "description": "We provide comprehensive application services including development, maintenance, and support.",
                    "serviceType": "Application Services"
                }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                    "@type": "Service",
                    "name": "Cyber Security",
                    "description": "Our cyber security services protect your digital assets and ensure the confidentiality and integrity of your data.",
                    "serviceType": "Cyber Security"
                }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                    "@type": "Service",
                    "name": "IT Consulting",
                    "description": "We offer expert IT consulting services to help you align technology with your business goals.",
                    "serviceType": "IT Consulting"
                }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                    "@type": "Service",
                    "name": "Data Analytics",
                    "description": "Our data analytics services provide actionable insights to drive informed business decisions.",
                    "serviceType": "Data Analytics"
                }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                    "@type": "Service",
                    "name": "IoT Services",
                    "description": "We offer Internet of Things (IoT) services to connect and leverage the power of smart devices.",
                    "serviceType": "IoT Services"
                }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                    "@type": "Service",
                    "name": "UX/UI Design",
                    "description": "Our UX/UI design services create intuitive and visually appealing user experiences.",
                    "serviceType": "UX/UI Design"
                }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                    "@type": "Service",
                    "name": "Infrastructure Services",
                    "description": "We provide infrastructure services to design, build, and manage your IT infrastructure.",
                    "serviceType": "Infrastructure Services"
                }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                    "@type": "Service",
                    "name": "IT Outsourcing",
                    "description": "Our IT outsourcing services help you reduce costs and enhance efficiency by leveraging external expertise.",
                    "serviceType": "IT Outsourcing"
                }
                }
                ]
                
                     
                    }
                }
            `,
				}}
			/>
		</Head>
	);
}
