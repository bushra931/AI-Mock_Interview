import { InterviewQuestion } from "@/types/interview";

export const dsaQuestions: InterviewQuestion[] = [
  {
    id: 1,
    subject: "dsa",
    difficulty: "easy",

    question:
      "What is the difference between an Array and a Linked List?",

    idealAnswer:
      "Arrays store elements in contiguous memory locations and provide O(1) random access. Linked Lists store elements in separate nodes connected by pointers, allowing dynamic memory allocation but requiring sequential traversal.",

    keyConcepts: [
      "contiguous memory",
      "pointer",
      "dynamic allocation",
      "random access",
      "sequential access"
    ],

    commonMistakes: [
      "Linked Lists provide O(1) random access",
      "Arrays grow dynamically without reallocation"
    ],

    followUpQuestions: [
      "Why are arrays more cache friendly?",
      "Which data structure is better for frequent insertions?",
      "When would you choose a Linked List over an Array?"
    ],

    companies: [
      "Google",
      "Amazon",
      "Microsoft"
    ],

    tags: [
      "Array",
      "Linked List",
      "Basics"
    ],

    estimatedTime: 120
  },

  {
    id: 2,
    subject: "dsa",
    difficulty: "easy",

    question:
      "Explain the time complexity of Binary Search.",

    idealAnswer:
      "Binary Search repeatedly halves the search space, resulting in O(log n) time complexity. It requires the array to be sorted.",

    keyConcepts: [
      "sorted array",
      "divide and conquer",
      "O(log n)"
    ],

    commonMistakes: [
      "Works on unsorted arrays",
      "Time complexity is O(n)"
    ],

    followUpQuestions: [
      "Why must the array be sorted?",
      "Can Binary Search work on a Linked List?",
      "What is the space complexity?"
    ],

    companies: [
      "Google",
      "Adobe",
      "Flipkart"
    ],

    tags: [
      "Binary Search",
      "Searching"
    ],

    estimatedTime: 90
  },

  {
    id: 3,
    subject: "dsa",
    difficulty: "medium",

    question:
      "Differentiate between BFS and DFS.",

    idealAnswer:
      "BFS explores nodes level by level using a queue, whereas DFS explores one branch completely before backtracking using recursion or a stack.",

    keyConcepts: [
      "Queue",
      "Stack",
      "Level Order",
      "Backtracking"
    ],

    commonMistakes: [
      "DFS uses Queue",
      "BFS always finds shortest path in weighted graphs"
    ],

    followUpQuestions: [
      "When is BFS preferred?",
      "When is DFS preferred?",
      "Which traversal detects cycles?"
    ],

    companies: [
      "Meta",
      "Amazon",
      "Google"
    ],

    tags: [
      "Graph",
      "Traversal",
      "BFS",
      "DFS"
    ],

    estimatedTime: 180
  },

  {
    id: 4,
    subject: "dsa",
    difficulty: "medium",

    question:
      "What is a Hash Table?",

    idealAnswer:
      "A Hash Table stores key-value pairs using a hash function for indexing, providing O(1) average lookup, insertion, and deletion.",

    keyConcepts: [
      "hash function",
      "collision",
      "key-value pair",
      "O(1)"
    ],

    commonMistakes: [
      "Hash Tables are always O(1)",
      "No collisions occur"
    ],

    followUpQuestions: [
      "How are collisions handled?",
      "What is chaining?",
      "What is open addressing?"
    ],

    companies: [
      "Amazon",
      "Uber",
      "Google"
    ],

    tags: [
      "Hashing"
    ],

    estimatedTime: 120
  },

  {
    id: 5,
    subject: "dsa",
    difficulty: "hard",

    question:
      "Explain Dynamic Programming.",

    idealAnswer:
      "Dynamic Programming solves overlapping subproblems by storing previously computed results to avoid recomputation. It typically uses memoization or tabulation.",

    keyConcepts: [
      "overlapping subproblems",
      "optimal substructure",
      "memoization",
      "tabulation"
    ],

    commonMistakes: [
      "DP is only recursion",
      "Every recursion can become DP"
    ],

    followUpQuestions: [
      "Difference between Memoization and Tabulation?",
      "When should DP not be used?",
      "Give a famous DP problem."
    ],

    companies: [
      "Google",
      "Microsoft",
      "Adobe"
    ],

    tags: [
      "Dynamic Programming"
    ],

    estimatedTime: 240
  }
];