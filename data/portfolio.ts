export const portfolioData = {
  name: "Yuvaraj S",
  title: "Senior Data Engineer",
  subtitle: "Azure | Databricks | ETL Specialist",
  description:
    "Results-driven Senior Data Engineer with 3+ years of experience in designing and delivering scalable, cloud-based data solutions. Proven expertise in building secure and high-performance databases, ETL pipelines, metadata frameworks, and analytical dashboards.",
  email: "yuvarajsomu2001@gmail.com",
  phone: "+91-9791224961",
  location: "India",
  resumeUrl: "/resume.pdf",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/yuvaraj-somasundaram-6896b9171/",
    github: "https://github.com/",
    email: "mailto:yuvarajsomu2001@gmail.com",
  },

  experience: [
    {
      id: 1,
      title: "Senior Data Engineer / Application Developer",
      company: "Company Name",
      location: "City, Country",
      startDate: "Sep 2022",
      endDate: "Present",
      description:
        "Designed and orchestrated 100+ scalable ETL and ELT pipelines using Azure Data Factory, Azure Databricks, and SQL Server to support enterprise data processing workloads.",
      achievements: [
        "Migrated 50+ SSIS packages to Azure Data Factory with zero downtime",
        "Reduced maintenance overhead by 30% through modernization",
        "Architected 100+ relational and Lakehouse data models",
        "Improved application performance by analyzing execution plans",
        "Built scalable, fault-tolerant data transformation workflows",
        "Reduced pipeline failures by 40% with proactive monitoring",
      ],
      technologies: [
        "Azure Data Factory",
        "Databricks",
        "SQL Server",
        "PySpark",
        "Delta Lake",
      ],
    },
  ],

  skills: {
    "Data Warehousing": [
      "Data Modeling",
      "Data Warehousing",
      "Azure Blob Storage",
      "SSIS",
    ],
    Databases: [
      "SQL Server",
      "T-SQL",
      "Stored Procedures",
      "Query Optimization",
    ],
    "Cloud Platforms": [
      "Azure Data Factory",
      "Azure Databricks",
      "Azure Synapse Analytics",
      "Azure Data Lake",
    ],
    "Big Data & Architecture": [
      "Databricks",
      "PySpark",
      "Delta Lake",
      "Lakehouse Architecture",
    ],
    "Programming & Automation": [
      "Python",
      "REST APIs",
      "Azure Logic Apps",
      "Power Automate",
    ],
    "BI & Visualization": ["Power BI"],
    "DevOps & Tools": [
      "CI/CD Pipelines",
      "Git",
      "Azure Monitor",
      "Agile/Scrum",
    ],
  },

  projects: [
    {
      id: 1,
      title: "Enterprise RetailPOS Data Platform",
      description:
        "Architected end-to-end data pipeline infrastructure processing 100+ GB daily retail POS transactions from multiple sources with 99.9% uptime.",
      achievements: [
        "Built 30+ metadata-driven ADF pipelines with parameterized templates",
        "Implemented secure SFTP connections with PGP encryption",
        "Integrated OAuth 2.0 APIs for real-time streaming",
        "Leveraged Databricks Delta Lake for ACID transactions",
        "Developed 15+ PySpark ETL notebooks for complex transformations",
        "Reduced data latency from 24 hours to near real-time",
        "Improved sales forecasting accuracy by 35%",
      ],
      technologies: [
        "Azure Data Factory",
        "Azure Databricks",
        "Delta Lake",
        "PySpark",
        "SQL Server",
      ],
      metrics: {
        "Daily Processing": "100+ GB",
        "Pipeline Success Rate": "99.9%",
        "Latency Reduction": "24h → Real-time",
        "Reusable Pipelines": "30+",
      },
    },
    {
      id: 2,
      title: "Connected Retail Application",
      description:
        "Led the Connected Retail application build from scratch, designing and implementing comprehensive data-layer components.",
      achievements: [
        "Designed schema, tables, views, and stored procedures",
        "Developed end-to-end data pipelines",
        "Built continuous integration flows with HUB system",
        "Enabled real-time synchronization of critical datasets",
      ],
      technologies: [
        "Azure Data Factory",
        "SQL Server",
        "Azure Functions",
        "Logic Apps",
      ],
    },
  ],

  awards: [
    {
      id: 1,
      title: "Innovation Award – RetailPOS",
      year: 2025,
      description:
        "Automated an end-to-end multi-source data refresh pipeline integrating SFTP, APIs, and SharePoint for 15 major retailers.",
    },
    {
      id: 2,
      title: "Excellence in Project Delivery",
      year: 2024,
      description:
        "Led the Connected Retail application build from scratch with successful data-layer implementation.",
    },
    {
      id: 3,
      title: "Data Innovation Award",
      year: 2024,
      description:
        "Enabled real-time access with JSON-based SQL model and built 50+ scalable ADF pipelines.",
    },
  ],

  certifications: [
    {
      id: 1,
      title: "Microsoft Certified: Power BI Data Analyst Associate",
      issuer: "Microsoft",
      year: 2024,
    },
    {
      id: 2,
      title: "Databricks Certified Data Engineer Associate",
      issuer: "Databricks",
      year: 2024,
    },
  ],
};

export type PortfolioData = typeof portfolioData;
