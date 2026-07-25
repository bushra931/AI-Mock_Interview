import { InterviewQuestion } from "@/types/interview";

export const dbmsQuestions: InterviewQuestion[] = [
{
  id: 1,
  subject: "dbms",
  difficulty: "easy",
  question: "What is a DBMS?",
  idealAnswer:
    "A Database Management System (DBMS) is software that allows users to store, retrieve, update, and manage data efficiently while ensuring security, integrity, and consistency.",
  keyConcepts: ["DBMS", "Database", "Data Management"],
  commonMistakes: [
    "Confusing DBMS with a database"
  ],
  followUpQuestions: [
    "Name some popular DBMSs."
  ],
  companies: ["Google", "Amazon", "Microsoft"],
  tags: ["Basics"],
  estimatedTime: 90,
},

{
  id: 2,
  subject: "dbms",
  difficulty: "easy",
  question: "What are the advantages of using a DBMS over a file system?",
  idealAnswer:
    "A DBMS reduces redundancy, maintains consistency, provides security, supports concurrent access, enables backup and recovery, and allows efficient querying using SQL.",
  keyConcepts: ["DBMS", "File System", "Advantages"],
  commonMistakes: [
    "Mentioning only data storage"
  ],
  followUpQuestions: [
    "Why is redundancy a problem?"
  ],
  companies: ["Amazon", "Oracle"],
  tags: ["Basics"],
  estimatedTime: 120,
},

{
  id: 3,
  subject: "dbms",
  difficulty: "easy",
  question: "What is the difference between DBMS and RDBMS?",
  idealAnswer:
    "A DBMS manages data but may not enforce relationships, whereas an RDBMS stores data in tables and enforces relationships using primary and foreign keys.",
  keyConcepts: ["DBMS", "RDBMS", "Relations"],
  commonMistakes: [
    "Thinking both are identical"
  ],
  followUpQuestions: [
    "Give examples of RDBMS."
  ],
  companies: ["Google", "Microsoft"],
  tags: ["Basics"],
  estimatedTime: 120,
},

{
  id: 4,
  subject: "dbms",
  difficulty: "easy",
  question: "What is a primary key?",
  idealAnswer:
    "A primary key uniquely identifies every record in a table. It cannot contain duplicate or NULL values.",
  keyConcepts: ["Primary Key", "Uniqueness"],
  commonMistakes: [
    "Saying primary keys can contain NULL"
  ],
  followUpQuestions: [
    "Can a table have multiple primary keys?"
  ],
  companies: ["Google", "Adobe"],
  tags: ["Keys"],
  estimatedTime: 120,
},

{
  id: 5,
  subject: "dbms",
  difficulty: "easy",
  question: "What is a foreign key?",
  idealAnswer:
    "A foreign key is an attribute that references the primary key of another table, establishing relationships and maintaining referential integrity.",
  keyConcepts: ["Foreign Key", "Referential Integrity"],
  commonMistakes: [
    "Confusing foreign keys with primary keys"
  ],
  followUpQuestions: [
    "Can a foreign key contain duplicate values?"
  ],
  companies: ["Microsoft", "Amazon"],
  tags: ["Keys"],
  estimatedTime: 120,
},

{
  id: 6,
  subject: "dbms",
  difficulty: "easy",
  question: "What is a candidate key?",
  idealAnswer:
    "A candidate key is a minimal set of attributes that can uniquely identify a tuple in a relation. One candidate key is chosen as the primary key.",
  keyConcepts: ["Candidate Key", "Superkey"],
  commonMistakes: [
    "Confusing candidate keys with superkeys"
  ],
  followUpQuestions: [
    "Can a table have multiple candidate keys?"
  ],
  companies: ["Google", "Oracle"],
  tags: ["Keys"],
  estimatedTime: 120,
},

{
  id: 7,
  subject: "dbms",
  difficulty: "easy",
  question: "What is normalization?",
  idealAnswer:
    "Normalization is the process of organizing data into well-structured tables to reduce redundancy and improve data integrity.",
  keyConcepts: ["Normalization", "Redundancy"],
  commonMistakes: [
    "Thinking normalization improves performance in every case"
  ],
  followUpQuestions: [
    "Why is normalization important?"
  ],
  companies: ["Google", "Amazon"],
  tags: ["Normalization"],
  estimatedTime: 150,
},

{
  id: 8,
  subject: "dbms",
  difficulty: "easy",
  question: "What is a view in DBMS?",
  idealAnswer:
    "A view is a virtual table created using a SQL query. It does not store data itself but displays data from one or more base tables.",
  keyConcepts: ["View", "Virtual Table"],
  commonMistakes: [
    "Thinking a normal view stores data"
  ],
  followUpQuestions: [
    "How is a view different from a table?"
  ],
  companies: ["Oracle", "Microsoft"],
  tags: ["Views"],
  estimatedTime: 150,
},

{
  id: 9,
  subject: "dbms",
  difficulty: "easy",
  question: "What is an index in DBMS?",
  idealAnswer:
    "An index is a data structure that speeds up data retrieval by allowing the database to quickly locate records without scanning the entire table.",
  keyConcepts: ["Index", "Searching", "Performance"],
  commonMistakes: [
    "Thinking indexes always improve performance"
  ],
  followUpQuestions: [
    "What is the cost of maintaining indexes?"
  ],
  companies: ["Google", "Amazon"],
  tags: ["Indexing"],
  estimatedTime: 150,
},

{
  id: 10,
  subject: "dbms",
  difficulty: "easy",
  question: "What are the different types of relationships in DBMS?",
  idealAnswer:
    "The main relationships are One-to-One, One-to-Many, and Many-to-Many, depending on how records in one table relate to records in another.",
  keyConcepts: ["Relationships", "ER Model"],
  commonMistakes: [
    "Confusing one-to-many with many-to-many"
  ],
  followUpQuestions: [
    "Give a real-world example of each relationship."
  ],
  companies: ["Google", "Adobe"],
  tags: ["ER Model"],
  estimatedTime: 150,
},

{
  id: 11,
  subject: "dbms",
  difficulty: "medium",
  question: "Explain the different normal forms (1NF, 2NF, 3NF, and BCNF).",
  idealAnswer:
    "1NF removes repeating groups by ensuring atomic values. 2NF removes partial dependency on a composite key. 3NF removes transitive dependency. BCNF is a stricter version where every determinant must be a candidate key.",
  keyConcepts: ["1NF", "2NF", "3NF", "BCNF"],
  commonMistakes: [
    "Confusing partial and transitive dependencies"
  ],
  followUpQuestions: [
    "Why is BCNF stricter than 3NF?"
  ],
  companies: ["Google", "Amazon"],
  tags: ["Normalization"],
  estimatedTime: 240,
},

{
  id: 12,
  subject: "dbms",
  difficulty: "medium",
  question: "What is denormalization? When would you use it?",
  idealAnswer:
    "Denormalization intentionally introduces redundancy by combining tables to improve query performance, especially in read-heavy applications where joins become expensive.",
  keyConcepts: ["Denormalization", "Performance", "Redundancy"],
  commonMistakes: [
    "Thinking denormalization is always better than normalization"
  ],
  followUpQuestions: [
    "What are the disadvantages of denormalization?"
  ],
  companies: ["Microsoft", "Oracle"],
  tags: ["Normalization"],
  estimatedTime: 180,
},

{
  id: 13,
  subject: "dbms",
  difficulty: "medium",
  question: "What is a transaction in DBMS?",
  idealAnswer:
    "A transaction is a sequence of database operations treated as a single logical unit of work. It either completes entirely or is rolled back to preserve consistency.",
  keyConcepts: ["Transaction", "Consistency"],
  commonMistakes: [
    "Treating every SQL statement as an independent transaction"
  ],
  followUpQuestions: [
    "Why are transactions important?"
  ],
  companies: ["Google", "Amazon"],
  tags: ["Transactions"],
  estimatedTime: 180,
},

{
  id: 14,
  subject: "dbms",
  difficulty: "medium",
  question: "Explain the ACID properties of a transaction.",
  idealAnswer:
    "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable transaction execution and maintain database correctness even during failures.",
  keyConcepts: ["ACID", "Transactions"],
  commonMistakes: [
    "Confusing Atomicity with Durability"
  ],
  followUpQuestions: [
    "Which ACID property prevents partial updates?"
  ],
  companies: ["Google", "Microsoft"],
  tags: ["Transactions"],
  estimatedTime: 240,
},

{
  id: 15,
  subject: "dbms",
  difficulty: "medium",
  question: "What is the difference between DELETE, TRUNCATE, and DROP?",
  idealAnswer:
    "DELETE removes selected rows and can use a WHERE clause. TRUNCATE removes all rows quickly while preserving the table structure. DROP removes the entire table, including its schema.",
  keyConcepts: ["DELETE", "TRUNCATE", "DROP"],
  commonMistakes: [
    "Confusing TRUNCATE with DROP"
  ],
  followUpQuestions: [
    "Which operation is the fastest?"
  ],
  companies: ["Amazon", "Oracle"],
  tags: ["SQL"],
  estimatedTime: 180,
},

{
  id: 16,
  subject: "dbms",
  difficulty: "medium",
  question: "Explain the different types of SQL joins.",
  idealAnswer:
    "INNER JOIN returns matching rows, LEFT JOIN returns all rows from the left table, RIGHT JOIN returns all rows from the right table, FULL OUTER JOIN returns rows from both tables, and CROSS JOIN returns the Cartesian product.",
  keyConcepts: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
  commonMistakes: [
    "Confusing LEFT and RIGHT JOIN"
  ],
  followUpQuestions: [
    "When would you use a LEFT JOIN?"
  ],
  companies: ["Google", "Adobe"],
  tags: ["SQL"],
  estimatedTime: 240,
},

{
  id: 17,
  subject: "dbms",
  difficulty: "medium",
  question: "What is a subquery? What are its types?",
  idealAnswer:
    "A subquery is a query nested inside another SQL query. It may return a single value, multiple values, or be correlated with the outer query.",
  keyConcepts: ["Subquery", "Nested Query"],
  commonMistakes: [
    "Thinking subqueries can only appear in WHERE clauses"
  ],
  followUpQuestions: [
    "What is a correlated subquery?"
  ],
  companies: ["Microsoft", "Google"],
  tags: ["SQL"],
  estimatedTime: 180,
},

{
  id: 18,
  subject: "dbms",
  difficulty: "medium",
  question: "What are aggregate functions in SQL?",
  idealAnswer:
    "Aggregate functions perform calculations on multiple rows and return a single result. Common examples include COUNT, SUM, AVG, MIN, and MAX.",
  keyConcepts: ["COUNT", "SUM", "AVG", "GROUP BY"],
  commonMistakes: [
    "Using aggregate functions without GROUP BY when grouping is required"
  ],
  followUpQuestions: [
    "How does GROUP BY work with aggregate functions?"
  ],
  companies: ["Google", "Amazon"],
  tags: ["SQL"],
  estimatedTime: 150,
},

{
  id: 19,
  subject: "dbms",
  difficulty: "medium",
  question: "What is a stored procedure?",
  idealAnswer:
    "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed repeatedly, improving performance and code reusability.",
  keyConcepts: ["Stored Procedure", "SQL"],
  commonMistakes: [
    "Confusing stored procedures with triggers"
  ],
  followUpQuestions: [
    "Can stored procedures accept parameters?"
  ],
  companies: ["Oracle", "Microsoft"],
  tags: ["Advanced SQL"],
  estimatedTime: 180,
},

{
  id: 20,
  subject: "dbms",
  difficulty: "medium",
  question: "What is a trigger? How is it different from a stored procedure?",
  idealAnswer:
    "A trigger is automatically executed in response to events such as INSERT, UPDATE, or DELETE, whereas a stored procedure is executed explicitly by a user or application.",
  keyConcepts: ["Trigger", "Stored Procedure"],
  commonMistakes: [
    "Thinking triggers are manually executed"
  ],
  followUpQuestions: [
    "When should you use a trigger?"
  ],
  companies: ["Google", "Amazon"],
  tags: ["Advanced SQL"],
  estimatedTime: 180,
},

{
  id: 21,
  subject: "dbms",
  difficulty: "hard",
  question: "What is concurrency control in DBMS? Why is it important?",
  idealAnswer:
    "Concurrency control ensures multiple transactions execute safely without causing data inconsistency. It maintains isolation and serializability while allowing concurrent access to the database.",
  keyConcepts: ["Concurrency Control", "Isolation", "Serializability"],
  commonMistakes: [
    "Thinking concurrent execution always improves correctness"
  ],
  followUpQuestions: [
    "What techniques are used for concurrency control?"
  ],
  companies: ["Google", "Amazon"],
  tags: ["Concurrency"],
  estimatedTime: 180,
},

{
  id: 22,
  subject: "dbms",
  difficulty: "hard",
  question: "What is a deadlock in DBMS? How can it be prevented?",
  idealAnswer:
    "A deadlock occurs when two or more transactions wait indefinitely for resources held by one another. Prevention techniques include lock ordering, timeouts, deadlock detection, and resource preemption.",
  keyConcepts: ["Deadlock", "Locking"],
  commonMistakes: [
    "Confusing deadlock with starvation"
  ],
  followUpQuestions: [
    "How does deadlock detection work?"
  ],
  companies: ["Microsoft", "Google"],
  tags: ["Concurrency"],
  estimatedTime: 180,
},

{
  id: 23,
  subject: "dbms",
  difficulty: "hard",
  question: "What are the different types of locks in DBMS?",
  idealAnswer:
    "Common lock types include Shared Lock (read), Exclusive Lock (write), Update Lock, and Intent Lock. These locks help maintain consistency during concurrent transactions.",
  keyConcepts: ["Shared Lock", "Exclusive Lock", "Intent Lock"],
  commonMistakes: [
    "Thinking shared locks allow writes"
  ],
  followUpQuestions: [
    "When is an exclusive lock required?"
  ],
  companies: ["Amazon", "Oracle"],
  tags: ["Locking"],
  estimatedTime: 180,
},

{
  id: 24,
  subject: "dbms",
  difficulty: "hard",
  question: "What is referential integrity?",
  idealAnswer:
    "Referential integrity ensures that every foreign key value either matches a valid primary (or unique) key in the referenced table or is NULL, preventing orphan records.",
  keyConcepts: ["Referential Integrity", "Foreign Key"],
  commonMistakes: [
    "Thinking referential integrity applies only to primary keys"
  ],
  followUpQuestions: [
    "How do foreign keys enforce referential integrity?"
  ],
  companies: ["Google", "Adobe"],
  tags: ["Integrity"],
  estimatedTime: 180,
},

{
  id: 25,
  subject: "dbms",
  difficulty: "hard",
  question: "Differentiate between clustered and non-clustered indexes.",
  idealAnswer:
    "A clustered index determines the physical order of data in a table and only one can exist per table. A non-clustered index stores pointers to data separately, allowing multiple indexes on the same table.",
  keyConcepts: ["Clustered Index", "Non-clustered Index"],
  commonMistakes: [
    "Thinking multiple clustered indexes are allowed"
  ],
  followUpQuestions: [
    "When would you choose a clustered index?"
  ],
  companies: ["Microsoft", "Oracle"],
  tags: ["Indexing"],
  estimatedTime: 180,
},

{
  id: 26,
  subject: "dbms",
  difficulty: "hard",
  question: "Explain the difference between a B-Tree and a B+ Tree.",
  idealAnswer:
    "A B-Tree stores keys and records in both internal and leaf nodes, whereas a B+ Tree stores actual records only in leaf nodes while internal nodes contain only keys, making range queries more efficient.",
  keyConcepts: ["B-Tree", "B+ Tree", "Indexing"],
  commonMistakes: [
    "Thinking B-Trees and B+ Trees store data identically"
  ],
  followUpQuestions: [
    "Why are B+ Trees preferred in databases?"
  ],
  companies: ["Google", "Amazon"],
  tags: ["Indexing"],
  estimatedTime: 240,
},

{
  id: 27,
  subject: "dbms",
  difficulty: "hard",
  question: "What is query optimization in DBMS?",
  idealAnswer:
    "Query optimization is the process of selecting the most efficient execution plan for a SQL query by considering indexes, join order, and available access paths.",
  keyConcepts: ["Query Optimizer", "Execution Plan"],
  commonMistakes: [
    "Thinking SQL queries always execute exactly as written"
  ],
  followUpQuestions: [
    "How do indexes help query optimization?"
  ],
  companies: ["Google", "Meta"],
  tags: ["Query Processing"],
  estimatedTime: 180,
},

{
  id: 28,
  subject: "dbms",
  difficulty: "hard",
  question: "What is a transaction log? Why is it important?",
  idealAnswer:
    "A transaction log records every database transaction and modification. It enables recovery after failures and supports rollback, commit, and point-in-time recovery.",
  keyConcepts: ["Transaction Log", "Recovery"],
  commonMistakes: [
    "Confusing transaction logs with backups"
  ],
  followUpQuestions: [
    "How is a transaction log used during recovery?"
  ],
  companies: ["Oracle", "Microsoft"],
  tags: ["Recovery"],
  estimatedTime: 180,
},

{
  id: 29,
  subject: "dbms",
  difficulty: "hard",
  question: "What is data partitioning in DBMS?",
  idealAnswer:
    "Data partitioning divides large tables into smaller partitions to improve scalability and query performance. Common techniques include horizontal, vertical, range, and hash partitioning.",
  keyConcepts: ["Partitioning", "Horizontal", "Vertical", "Hash"],
  commonMistakes: [
    "Thinking partitioning always reduces storage usage"
  ],
  followUpQuestions: [
    "When would hash partitioning be preferred?"
  ],
  companies: ["Amazon", "Google"],
  tags: ["Advanced DBMS"],
  estimatedTime: 180,
},

{
  id: 30,
  subject: "dbms",
  difficulty: "hard",
  question: "What is hashing in DBMS and where is it used?",
  idealAnswer:
    "Hashing uses a hash function to map keys to storage locations, enabling very fast equality searches. It is commonly used in hash indexes and hash tables.",
  keyConcepts: ["Hashing", "Hash Function", "Hash Index"],
  commonMistakes: [
    "Thinking hashing is efficient for range queries"
  ],
  followUpQuestions: [
    "How are hash collisions handled?"
  ],
  companies: ["Google", "Amazon", "Microsoft"],
  tags: ["Hashing", "Indexing"],
  estimatedTime: 180,
},
];