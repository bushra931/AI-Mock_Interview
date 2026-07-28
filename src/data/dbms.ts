export const dbmsResources = [
  {
    title: "Gate Smashers DBMS",
    type: "YouTube",
    link: "https://www.youtube.com/@GateSmashers",
    description: "Complete DBMS playlist."
  },
  {
    title: "CodeHelp DBMS",
    type: "YouTube",
    link: "https://www.youtube.com/@CodeHelp",
    description: "DBMS for placements."
  },
  {
    title: "DBMS Notes",
    type: "Notes",
    link: "https://www.geeksforgeeks.org/dbms/",
    description: "Quick revision notes."
  },
  {
    title: "DBMS Roadmap",
    type: "Roadmap",
    link: "https://roadmap.sh",
    description: "Learn DBMS step by step."
  }
];


export const dbmsQuestions = [
  {
    question: "What is a DBMS?",
    answer: "A DBMS is software that manages, stores, and retrieves data efficiently.",
    subject: "DBMS",
    difficulty: "Easy",
    estimatedTime: 60,
    tags: ["Database", "Basics"],
    companies: ["Amazon", "Microsoft"],
    idealAnswer: "A DBMS is a software system used to create, store, manage, and retrieve data from databases.",
    keyConcepts: ["Database", "Tables", "Data Management"],
    followUpQuestions: [
      "What are the advantages of DBMS over file systems?"
    ]
  },
  {
    question: "What are ACID properties in DBMS?",
    answer: "Atomicity, Consistency, Isolation, and Durability ensure reliable transactions.",
    subject: "DBMS",
    difficulty: "Medium",
    estimatedTime: 90,
    tags: ["Transactions"],
    companies: ["Google", "Amazon"],
    idealAnswer: "ACID properties ensure database transactions are reliable and maintain data integrity.",
    keyConcepts: [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    followUpQuestions: [
      "Explain isolation levels in DBMS."
    ]
  },
  {
    question: "What is normalization?",
    answer: "Normalization organizes data to reduce redundancy.",
    subject: "DBMS",
    difficulty: "Medium",
    estimatedTime: 90,
    tags: ["Normalization"],
    companies: ["Microsoft"],
    idealAnswer: "Normalization is the process of organizing tables to minimize redundancy and dependency.",
    keyConcepts: [
      "1NF",
      "2NF",
      "3NF"
    ],
    followUpQuestions: [
      "What are normalization anomalies?"
    ]
  },
  {
    question: "Difference between primary key and foreign key?",
    answer: "A primary key uniquely identifies records while a foreign key connects tables.",
    subject: "DBMS",
    difficulty: "Easy",
    estimatedTime: 60,
    tags: ["Keys"],
    companies: ["Infosys", "TCS"],
    idealAnswer: "Primary keys uniquely identify rows, while foreign keys maintain relationships between tables.",
    keyConcepts: [
      "Primary Key",
      "Foreign Key",
      "Relationships"
    ],
    followUpQuestions: [
      "Can a table have multiple foreign keys?"
    ]
  }
];