export const profileData = {
  name: "Akash Sajja",
  role: "Data Engineer",
  tagline: "Building data foundations through seamless integration, scalable pipelines, and a drive to keep learning and evolving.",
  email: "akashsajjawork@gmail.com",
  phone: "+1 (928) 514-8875",
  location: "Chicago, IL",
  linkedin: "www.linkedin.com/in/akashsajja",
  github: "https://github.com/SajjaAkash",
  cvLink: "/AkashSajja_Resume.pdf",

  metrics: [
    { label: "Years of Experience", value: 5 },
    { label: "Projects Completed", value: 20 },
    { label: "Success Rate", value: 99, suffix: "%" },
  ],

  about: {
    subtitle: "Reliable Data Engineering Solutions For Scalable, Cloud-Driven Systems",
    paragraphs: [
      "With over 5 years of experience as a Data Engineer, I specialize in designing and operating production-grade data systems using Python, SQL, Apache Spark, and cloud-native platforms. I have built scalable ETL and ELT pipelines processing multi-terabyte healthcare and financial datasets, transforming raw data into analytics-ready and AI-ready data products.",
      "I have a proven track record of engineering fault-tolerant pipelines handling 5–10 TB of data per day and achieving 99.5 percent pipeline availability. By implementing strong data validation, auditing frameworks, and performance optimizations, I have reduced downstream defects by over 30 percent while improving system efficiency and cost effectiveness.",
    ],
    strengths: [
      "Scalable ETL and ELT Pipeline Development (5–10 TB/day)",
        "Apache Spark, PySpark and Distributed Data Processing",
        "Cloud Data Engineering (Azure and AWS)",
        "Data Warehousing (Azure Synapse, Amazon Redshift)",
        "Workflow Orchestration (Airflow, Azure Data Factory)",
        "Real-Time Streaming (Kafka, Spark Streaming, Event Hubs)",
        "Data Quality, Validation and Governance (HIPAA, SOX, GDPR)",
        "Performance Optimization and Query Tuning",
        "CI/CD for Data Pipelines (Jenkins, Git, Docker)",
        "AI and Feature-Ready Dataset Engineering",
    ],
  },

  experience: [
    {
      dateRange: "May 2025 – Present",
      role: "Data Engineer",
      company: "UnitedHealth Group",
      description: "Designed and operated production-grade ETL and ELT pipelines using Python, PySpark, and Spark SQL, processing 5–10 TB of healthcare claims and financial data daily within cloud-native data lake architectures. Engineered fault-tolerant batch workflows with orchestration and retries, achieving 99.5% pipeline availability while reducing downstream data defects by over 30% through validation and auditing frameworks.",
    },
    {
      dateRange: "Aug 2020 – Dec 2023",
      role: "Data Engineer",
      company: "Johnson & Johnson",
      description: "Built scalable data warehouse solutions on Azure Synapse and Amazon Redshift, implementing star and snowflake schemas to support analytics, reporting, and AI-driven workloads. Optimized distributed Spark jobs using partitioning and query tuning techniques, reducing processing latency by 25% and improving overall data platform efficiency.",
    },
    {
      dateRange: "Jul 2019 – Jul 2020",
      role: "Software Engineer",
      company: "Cyient",
      description: "Developed high-throughput ingestion frameworks using AWS Glue, S3, Lambda, and Azure Data Factory, handling multi-terabyte batch and near real-time data pipelines. Integrated CI/CD for data workflows with Git, Jenkins, and Docker, improved deployment reliability by 30%, and strengthened monitoring and observability to reduce recurring production incidents by 25%.",
    },
  ],

  education: [
    {
      dateRange: "Jan 2024 – Dec 2025",
      degree: "M.S. Business Analytics",
      university: "Lewis University",
      description: "Developed advanced knowledge in data analytics, statistical modeling, and business intelligence frameworks, with a focus on translating complex datasets into actionable insights. Strengthened expertise in predictive modeling, data visualization, and data-driven decision making using modern analytical and cloud-based tools.",
    },
    {
      dateRange: "2015 – 2019",
      degree: "B.E. Computer Science",
      university: "Chaitanya Bharathi Institute of Technology",
      description: "Built a strong foundation in computer science fundamentals including algorithms, data structures, database systems, and distributed computing. Enhanced problem-solving skills and programming proficiency, forming the technical backbone for designing scalable, high-performance data engineering systems.",
    },
  ],

  services: [
    {
      number: "01",
      title: "Data Pipeline Engineering",
      description: "Design and maintain scalable data pipelines that transform raw data into reliable, analytics-ready assets for business intelligence and decision-making.",
    },
    {
      number: "02",
      title: "Cloud Data Solutions",
      description: "Architect cloud-native data platforms that support secure, scalable, and high-performance data processing across modern environments.",
    },
    {
      number: "03",
      title: "Distributed Processing",
      description: "Build high-performance data workflows using distributed computing frameworks to efficiently handle large and complex datasets.",
    },
    {
      number: "04",
      title: "Data Modeling & Warehousing",
      description: "Structure and organize data through optimized models that enable accurate reporting, analytics, and long-term data scalability.",
    },
    {
      number: "05",
      title: "Streaming & Real-Time Systems",
      description: "Develop real-time and batch processing solutions that power timely insights and responsive data-driven applications.",
    },
    {
      number: "06",
      title: "Data Quality & Governance",
      description: "Ensure data reliability, compliance, and integrity through validation frameworks, monitoring practices, and governance standards.",
    },
  ],

  skills: [
    { name: "Python", percentage: 90, icon: "aws" },
    { name: "SQL", percentage: 95, icon: "azure" },
    { name: "AWS", percentage: 85, icon: "docker" },
    { name: "ETL/ELT", percentage: 90, icon: "jenkins" },
    { name: "Azure", percentage: 85, icon: "kubernetes" },
    { name: "Spark & Databricks", percentage: 88, icon: "prometheus" },
    { name: "Kafka", percentage: 90, icon: "terraform" },
    { name: "Airflow", percentage: 80, icon: "trivy" },
  ],

  projects: [
    {
      slug: "hipaa-compliant-cicd",
      title: "TB-Scale Claims Data Lake on Azure",
      category: "Healthcare & Compliance",
      description: "Designed and implemented a cloud-native data lake architecture to process multi-terabyte healthcare claims and member datasets daily. Built scalable ETL workflows with distributed processing, automated validation, and compliance-ready governance controls.",
      tech: ["Azure Data Lake", "PySpark", "Azure Synapse", "ADF"],
    },
    {
      slug: "multi-cloud-gke-aks",
      title: "Enterprise Data Warehouse Modernization",
      category: "Cloud Data Platform",
      description: "Architected a scalable data warehouse solution to support enterprise analytics and AI workloads. Implemented optimized data models and incremental data pipelines to enable faster reporting and improved query performance.",
      tech: ["Amazon RedShift", "Spark SQL", "S3", "Data Modeling"],
    },
    {
      slug: "python-jenkins-integration",
      title: "Event-Driven Data Ingestion Framework",
      category: "Streaming & Real-Time",
      description: "Developed a high-throughput ingestion system supporting near real-time data processing and batch workflows. Enabled scalable event-driven architecture to power analytics dashboards and operational insights.",
      tech: ["Python", "Kafka", "Spark Streaming", "AirFlow"],
    },
    {
      slug: "multi-az-replication",
      title: "Distributed Spark Performance Optimization",
      category: "Reliability & Optimization",
      description: "Enhanced large-scale distributed workloads by implementing partition tuning, broadcast joins, and query optimization techniques. Improved processing latency and system efficiency across production-grade data pipelines.",
      tech: ["Apache Spark", "SQL", "Performance Tuning", "Monitoring"],
    },
  ],

  contactFeatures: [
    "5+ years of hands-on Data Engineering experience",
    "Processing 5–10 TB of data daily across cloud platforms",
    "Distributed Spark and real-time streaming expertise",
    "Advanced data warehousing and modeling design",
    "Enterprise-grade reliability with 99.5% pipeline availability",
  ],

  footer: {
    description: "Delivering resilient, high-performance data ecosystems for modern enterprises. Focused on reliability, scalability, and governance.",
    address: "Chicago, IL 60661, United States",
  },
}
