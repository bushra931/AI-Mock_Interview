import { InterviewQuestion } from "@/types/interview";

export const dsaQuestions: InterviewQuestion[] = [
{
  id: 1,
  subject: "dsa",
  difficulty: "easy",

  question: "What is the difference between an Array and a Linked List?",

  idealAnswer:
    "Arrays store elements in contiguous memory locations and provide O(1) random access. Linked Lists store elements in separate nodes connected by pointers, allowing dynamic memory allocation but requiring sequential traversal.",

  keyConcepts: [
    "Array",
    "Linked List",
    "Random Access",
    "Dynamic Allocation"
  ],

  commonMistakes: [
    "Linked Lists provide O(1) indexing",
    "Arrays never need resizing"
  ],

  followUpQuestions: [
    "Why are arrays cache friendly?",
    "Which is better for insertions?",
    "What is the time complexity of accessing an element?"
  ],

  companies: [
    "Google",
    "Amazon",
    "Microsoft"
  ],

  tags: [
    "Array",
    "Linked List"
  ],

  estimatedTime: 120
},

{
  id: 2,
  subject: "dsa",
  difficulty: "easy",

  question: "Explain Binary Search and its time complexity.",

  idealAnswer:
    "Binary Search repeatedly divides the sorted search space into halves until the target element is found. Its time complexity is O(log n), and it requires the input array to be sorted.",

  keyConcepts: [
    "Binary Search",
    "Divide and Conquer",
    "Sorted Array"
  ],

  commonMistakes: [
    "Applying Binary Search on an unsorted array",
    "Time complexity is O(n)"
  ],

  followUpQuestions: [
    "Why must the array be sorted?",
    "Can Binary Search be performed on a Linked List?",
    "What is its space complexity?"
  ],

  companies: [
    "Google",
    "Adobe",
    "Flipkart"
  ],

  tags: [
    "Searching"
  ],

  estimatedTime: 90
},

{
  id: 3,
  subject: "dsa",
  difficulty: "easy",

  question: "Differentiate between Stack and Queue.",

  idealAnswer:
    "A Stack follows the Last In First Out (LIFO) principle, whereas a Queue follows the First In First Out (FIFO) principle.",

  keyConcepts: [
    "Stack",
    "Queue",
    "LIFO",
    "FIFO"
  ],

  commonMistakes: [
    "Confusing LIFO with FIFO"
  ],

  followUpQuestions: [
    "Where are stacks used?",
    "Where are queues used?",
    "Can both be implemented using arrays?"
  ],

  companies: [
    "Amazon",
    "Microsoft",
    "Oracle"
  ],

  tags: [
    "Stack",
    "Queue"
  ],

  estimatedTime: 90
},

{
  id: 4,
  subject: "dsa",
  difficulty: "easy",

  question: "What is a Hash Table?",

  idealAnswer:
    "A Hash Table stores key-value pairs using a hash function for indexing, providing O(1) average lookup, insertion, and deletion.",

  keyConcepts: [
    "Hash Function",
    "Collision",
    "Key-Value Pair"
  ],

  commonMistakes: [
    "Hash Tables never have collisions"
  ],

  followUpQuestions: [
    "How are collisions handled?",
    "What is chaining?",
    "What is open addressing?"
  ],

  companies: [
    "Google",
    "Uber",
    "Amazon"
  ],

  tags: [
    "Hashing"
  ],

  estimatedTime: 120
},

{
  id: 5,
  subject: "dsa",
  difficulty: "easy",

  question: "What is a Binary Tree?",

  idealAnswer:
    "A Binary Tree is a tree data structure in which each node has at most two children, commonly referred to as the left child and right child.",

  keyConcepts: [
    "Binary Tree",
    "Root",
    "Leaf Node"
  ],

  commonMistakes: [
    "Every Binary Tree is a BST"
  ],

  followUpQuestions: [
    "What are the tree traversals?",
    "What is the height of a tree?"
  ],

  companies: [
    "Google",
    "Meta"
  ],

  tags: [
    "Tree"
  ],

  estimatedTime: 120
},

{
  id: 6,
  subject: "dsa",
  difficulty: "easy",

  question: "What is a Binary Search Tree (BST)?",

  idealAnswer:
    "A Binary Search Tree is a Binary Tree where the left subtree contains smaller values and the right subtree contains larger values than the root.",

  keyConcepts: [
    "BST",
    "Ordering Property"
  ],

  commonMistakes: [
    "BSTs are always balanced"
  ],

  followUpQuestions: [
    "What is the search complexity?",
    "How does a balanced BST improve performance?"
  ],

  companies: [
    "Microsoft",
    "Google"
  ],

  tags: [
    "BST"
  ],

  estimatedTime: 120
},

{
  id: 7,
  subject: "dsa",
  difficulty: "easy",

  question: "What is Recursion?",

  idealAnswer:
    "Recursion is a programming technique in which a function calls itself until a base case is reached.",

  keyConcepts: [
    "Recursive Call",
    "Base Case",
    "Call Stack"
  ],

  commonMistakes: [
    "Ignoring the base case"
  ],

  followUpQuestions: [
    "What happens without a base case?",
    "How is recursion implemented internally?"
  ],

  companies: [
    "Adobe",
    "Google"
  ],

  tags: [
    "Recursion"
  ],

  estimatedTime: 120
},

{
  id: 8,
  subject: "dsa",
  difficulty: "easy",

  question: "What is a Heap?",

  idealAnswer:
    "A Heap is a complete binary tree that satisfies the heap property. In a Max Heap, every parent is greater than its children, while in a Min Heap every parent is smaller.",

  keyConcepts: [
    "Heap",
    "Priority Queue",
    "Complete Binary Tree"
  ],

  commonMistakes: [
    "Heap is a Binary Search Tree"
  ],

  followUpQuestions: [
    "What is Heap Sort?",
    "What is the insertion complexity?"
  ],

  companies: [
    "Amazon",
    "Google"
  ],

  tags: [
    "Heap"
  ],

  estimatedTime: 150
},

{
  id: 9,
  subject: "dsa",
  difficulty: "easy",

  question: "What is a Graph?",

  idealAnswer:
    "A Graph is a collection of vertices connected by edges. It is used to model relationships between objects.",

  keyConcepts: [
    "Vertex",
    "Edge",
    "Directed Graph",
    "Undirected Graph"
  ],

  commonMistakes: [
    "Graphs always contain cycles"
  ],

  followUpQuestions: [
    "How are graphs represented?",
    "What is an adjacency list?"
  ],

  companies: [
    "Meta",
    "Google"
  ],

  tags: [
    "Graph"
  ],

  estimatedTime: 120
},

{
  id: 10,
  subject: "dsa",
  difficulty: "easy",

  question: "What is the difference between a Tree and a Graph?",

  idealAnswer:
    "A Tree is a connected acyclic graph with exactly one path between any two nodes, whereas a Graph may contain cycles, disconnected components, and multiple paths.",

  keyConcepts: [
    "Tree",
    "Graph",
    "Cycle",
    "Connected Components"
  ],

  commonMistakes: [
    "Every graph is a tree"
  ],

  followUpQuestions: [
    "Can a tree have cycles?",
    "Why is every tree considered a graph?"
  ],

  companies: [
    "Google",
    "Amazon",
    "Microsoft"
  ],

  tags: [
    "Tree",
    "Graph"
  ],

  estimatedTime: 150
},

{
  id: 11,
  subject: "dsa",
  difficulty: "medium",

  question: "Differentiate between BFS and DFS.",

  idealAnswer:
    "Breadth First Search (BFS) explores nodes level by level using a queue, whereas Depth First Search (DFS) explores one branch completely before backtracking using recursion or a stack.",

  keyConcepts: [
    "BFS",
    "DFS",
    "Queue",
    "Stack"
  ],

  commonMistakes: [
    "DFS uses a queue",
    "BFS always gives the shortest path in weighted graphs"
  ],

  followUpQuestions: [
    "When is BFS preferred over DFS?",
    "Which traversal uses recursion?",
    "Can DFS be implemented iteratively?"
  ],

  companies: [
    "Google",
    "Meta",
    "Amazon"
  ],

  tags: [
    "Graph",
    "Traversal"
  ],

  estimatedTime: 180
},

{
  id: 12,
  subject: "dsa",
  difficulty: "medium",

  question: "Explain Dynamic Programming.",

  idealAnswer:
    "Dynamic Programming solves problems with overlapping subproblems and optimal substructure by storing previously computed results using memoization or tabulation.",

  keyConcepts: [
    "Optimal Substructure",
    "Overlapping Subproblems",
    "Memoization",
    "Tabulation"
  ],

  commonMistakes: [
    "Every recursive problem can be solved using DP",
    "DP is only recursion"
  ],

  followUpQuestions: [
    "What are the properties of DP?",
    "When should DP not be used?",
    "Give a classic DP problem."
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
},

{
  id: 13,
  subject: "dsa",
  difficulty: "medium",

  question: "Differentiate between Memoization and Tabulation.",

  idealAnswer:
    "Memoization is a top-down DP approach that stores recursive results, whereas Tabulation is a bottom-up approach that iteratively builds solutions from smaller subproblems.",

  keyConcepts: [
    "Memoization",
    "Tabulation",
    "Top Down",
    "Bottom Up"
  ],

  commonMistakes: [
    "Both approaches always use recursion"
  ],

  followUpQuestions: [
    "Which approach usually has less recursion overhead?",
    "When is memoization preferred?"
  ],

  companies: [
    "Google",
    "Amazon"
  ],

  tags: [
    "Dynamic Programming"
  ],

  estimatedTime: 180
},

{
  id: 14,
  subject: "dsa",
  difficulty: "medium",

  question: "What is a Trie? Where is it used?",

  idealAnswer:
    "A Trie is a tree-based data structure used for storing strings efficiently. It supports fast prefix searches and is commonly used in autocomplete, spell checking, and dictionaries.",

  keyConcepts: [
    "Trie",
    "Prefix Search",
    "Strings"
  ],

  commonMistakes: [
    "Trie stores numbers efficiently",
    "Trie is the same as a BST"
  ],

  followUpQuestions: [
    "What is the time complexity of searching in a Trie?",
    "What are compressed Tries?"
  ],

  companies: [
    "Google",
    "Amazon",
    "Microsoft"
  ],

  tags: [
    "Trie",
    "Strings"
  ],

  estimatedTime: 180
},

{
  id: 15,
  subject: "dsa",
  difficulty: "medium",

  question: "Compare Quick Sort and Merge Sort.",

  idealAnswer:
    "Quick Sort partitions the array around a pivot and has O(n log n) average time but O(n²) worst case. Merge Sort divides the array into halves, guarantees O(n log n) time, but requires additional memory.",

  keyConcepts: [
    "Quick Sort",
    "Merge Sort",
    "Divide and Conquer"
  ],

  commonMistakes: [
    "Quick Sort always runs in O(n log n)",
    "Merge Sort is in-place"
  ],

  followUpQuestions: [
    "Which sort is stable?",
    "Which one is preferred for linked lists?"
  ],

  companies: [
    "Google",
    "Adobe"
  ],

  tags: [
    "Sorting"
  ],

  estimatedTime: 240
},

{
  id: 16,
  subject: "dsa",
  difficulty: "medium",

  question: "What is Topological Sorting?",

  idealAnswer:
    "Topological Sorting is a linear ordering of vertices in a Directed Acyclic Graph (DAG) such that every directed edge goes from an earlier vertex to a later vertex.",

  keyConcepts: [
    "DAG",
    "Topological Sort",
    "Graph"
  ],

  commonMistakes: [
    "Topological Sort works on graphs with cycles"
  ],

  followUpQuestions: [
    "Which algorithms perform Topological Sorting?",
    "Why is it only applicable to DAGs?"
  ],

  companies: [
    "Amazon",
    "Google"
  ],

  tags: [
    "Graph",
    "Topological Sort"
  ],

  estimatedTime: 180
},

{
  id: 17,
  subject: "dsa",
  difficulty: "medium",

  question: "Explain Dijkstra's Algorithm.",

  idealAnswer:
    "Dijkstra's Algorithm finds the shortest path from a source vertex to all other vertices in a graph with non-negative edge weights using a priority queue.",

  keyConcepts: [
    "Shortest Path",
    "Priority Queue",
    "Greedy"
  ],

  commonMistakes: [
    "Works with negative edge weights"
  ],

  followUpQuestions: [
    "Why can't Dijkstra handle negative weights?",
    "What is its time complexity?"
  ],

  companies: [
    "Google",
    "Amazon",
    "Meta"
  ],

  tags: [
    "Graph",
    "Shortest Path"
  ],

  estimatedTime: 240
},

{
  id: 18,
  subject: "dsa",
  difficulty: "medium",

  question: "What is a Disjoint Set (Union-Find)?",

  idealAnswer:
    "A Disjoint Set is a data structure used to efficiently manage disjoint groups. It supports Find and Union operations and is commonly used for cycle detection and Kruskal's Algorithm.",

  keyConcepts: [
    "Union",
    "Find",
    "Path Compression",
    "Union by Rank"
  ],

  commonMistakes: [
    "Union-Find is used for shortest path problems"
  ],

  followUpQuestions: [
    "What is path compression?",
    "Why is Union by Rank used?"
  ],

  companies: [
    "Google",
    "Microsoft"
  ],

  tags: [
    "Disjoint Set"
  ],

  estimatedTime: 240
},

{
  id: 19,
  subject: "dsa",
  difficulty: "medium",

  question: "Explain the Sliding Window technique.",

  idealAnswer:
    "Sliding Window is an optimization technique that maintains a window over consecutive elements, reducing the need for repeated computations and improving many O(n²) solutions to O(n).",

  keyConcepts: [
    "Sliding Window",
    "Two Pointers",
    "Optimization"
  ],

  commonMistakes: [
    "Sliding Window works for every array problem"
  ],

  followUpQuestions: [
    "When is a variable-sized window used?",
    "How is it different from Two Pointers?"
  ],

  companies: [
    "Amazon",
    "Google"
  ],

  tags: [
    "Array",
    "Sliding Window"
  ],

  estimatedTime: 180
},

{
  id: 20,
  subject: "dsa",
  difficulty: "medium",

  question: "What are Greedy Algorithms? When should they be used?",

  idealAnswer:
    "Greedy Algorithms make the locally optimal choice at each step with the hope of obtaining a globally optimal solution. They are applicable only when the greedy-choice property and optimal substructure hold.",

  keyConcepts: [
    "Greedy Choice",
    "Optimal Substructure",
    "Optimization"
  ],

  commonMistakes: [
    "Greedy algorithms always produce the optimal solution"
  ],

  followUpQuestions: [
    "Give examples of greedy algorithms.",
    "How is Greedy different from Dynamic Programming?"
  ],

  companies: [
    "Google",
    "Microsoft",
    "Amazon"
  ],

  tags: [
    "Greedy"
  ],

  estimatedTime: 240
},

{
  id: 21,
  subject: "dsa",
  difficulty: "hard",

  question: "What is a Segment Tree? When is it used?",

  idealAnswer:
    "A Segment Tree is a binary tree data structure used for efficient range queries and range updates on an array. It supports operations like range sum, minimum, maximum, and GCD queries in O(log n) time after O(n) construction.",

  keyConcepts: [
    "Segment Tree",
    "Range Query",
    "Range Update",
    "Binary Tree"
  ],

  commonMistakes: [
    "Segment Tree stores only sums",
    "Every query takes O(n)"
  ],

  followUpQuestions: [
    "How is a Segment Tree constructed?",
    "How is lazy propagation used?"
  ],

  companies: [
    "Google",
    "Amazon",
    "Microsoft"
  ],

  tags: [
    "Segment Tree"
  ],

  estimatedTime: 240
},

{
  id: 22,
  subject: "dsa",
  difficulty: "hard",

  question: "What is a Fenwick Tree (Binary Indexed Tree)?",

  idealAnswer:
    "A Fenwick Tree is a space-efficient data structure used to perform prefix sum queries and point updates in O(log n) time.",

  keyConcepts: [
    "Fenwick Tree",
    "Binary Indexed Tree",
    "Prefix Sum"
  ],

  commonMistakes: [
    "Fenwick Tree supports every type of range query"
  ],

  followUpQuestions: [
    "How does it differ from a Segment Tree?",
    "Why is it more memory efficient?"
  ],

  companies: [
    "Google",
    "Adobe"
  ],

  tags: [
    "Fenwick Tree"
  ],

  estimatedTime: 240
},

{
  id: 23,
  subject: "dsa",
  difficulty: "hard",

  question: "Explain the KMP (Knuth-Morris-Pratt) Algorithm.",

  idealAnswer:
    "KMP is a string matching algorithm that avoids unnecessary comparisons by preprocessing the pattern into an LPS (Longest Prefix Suffix) array, achieving O(n + m) time complexity.",

  keyConcepts: [
    "KMP",
    "LPS Array",
    "Pattern Matching"
  ],

  commonMistakes: [
    "Rechecking previously matched characters"
  ],

  followUpQuestions: [
    "How is the LPS array built?",
    "Why is KMP faster than the naive algorithm?"
  ],

  companies: [
    "Google",
    "Microsoft"
  ],

  tags: [
    "Strings",
    "KMP"
  ],

  estimatedTime: 300
},

{
  id: 24,
  subject: "dsa",
  difficulty: "hard",

  question: "Explain the Rabin-Karp Algorithm.",

  idealAnswer:
    "Rabin-Karp is a string searching algorithm that uses hashing to compare the pattern with substrings of the text. It computes rolling hashes to reduce repeated comparisons.",

  keyConcepts: [
    "Rolling Hash",
    "Hashing",
    "Pattern Matching"
  ],

  commonMistakes: [
    "Hash matches always mean strings match"
  ],

  followUpQuestions: [
    "Why is collision handling important?",
    "What is a rolling hash?"
  ],

  companies: [
    "Google",
    "Amazon"
  ],

  tags: [
    "Strings",
    "Hashing"
  ],

  estimatedTime: 240
},

{
  id: 25,
  subject: "dsa",
  difficulty: "hard",

  question: "Explain Bellman-Ford Algorithm.",

  idealAnswer:
    "Bellman-Ford computes the shortest paths from a source vertex and can handle graphs with negative edge weights. It also detects negative weight cycles.",

  keyConcepts: [
    "Bellman-Ford",
    "Negative Weights",
    "Shortest Path"
  ],

  commonMistakes: [
    "Bellman-Ford cannot detect negative cycles"
  ],

  followUpQuestions: [
    "How does it differ from Dijkstra?",
    "What is its time complexity?"
  ],

  companies: [
    "Amazon",
    "Meta"
  ],

  tags: [
    "Graph",
    "Shortest Path"
  ],

  estimatedTime: 300
},

{
  id: 26,
  subject: "dsa",
  difficulty: "hard",

  question: "Explain Floyd-Warshall Algorithm.",

  idealAnswer:
    "Floyd-Warshall is a Dynamic Programming algorithm that computes the shortest paths between every pair of vertices in a weighted graph. It runs in O(V³) time.",

  keyConcepts: [
    "Dynamic Programming",
    "All-Pairs Shortest Path",
    "Graph"
  ],

  commonMistakes: [
    "Using Floyd-Warshall for only one source"
  ],

  followUpQuestions: [
    "When is Floyd-Warshall preferred?",
    "Can it detect negative cycles?"
  ],

  companies: [
    "Google",
    "Microsoft"
  ],

  tags: [
    "Graph",
    "Dynamic Programming"
  ],

  estimatedTime: 300
},

{
  id: 27,
  subject: "dsa",
  difficulty: "hard",

  question: "Compare Prim's and Kruskal's Algorithms.",

  idealAnswer:
    "Both algorithms find the Minimum Spanning Tree. Prim's grows the MST from a starting vertex by selecting the minimum edge connected to the tree, whereas Kruskal's sorts all edges and repeatedly selects the smallest edge that does not form a cycle using Disjoint Set.",

  keyConcepts: [
    "Minimum Spanning Tree",
    "Prim's",
    "Kruskal's",
    "Disjoint Set"
  ],

  commonMistakes: [
    "Prim's and Kruskal's always choose identical edges"
  ],

  followUpQuestions: [
    "Which algorithm is better for dense graphs?",
    "Which algorithm uses Union-Find?"
  ],

  companies: [
    "Google",
    "Amazon",
    "Microsoft"
  ],

  tags: [
    "Graph",
    "MST"
  ],

  estimatedTime: 300
},

{
  id: 28,
  subject: "dsa",
  difficulty: "hard",

  question: "What is Tarjan's Algorithm?",

  idealAnswer:
    "Tarjan's Algorithm is a DFS-based algorithm used to find Strongly Connected Components (SCCs) in a directed graph in O(V + E) time.",

  keyConcepts: [
    "Tarjan's Algorithm",
    "Strongly Connected Components",
    "DFS"
  ],

  commonMistakes: [
    "Using Tarjan's Algorithm for shortest paths"
  ],

  followUpQuestions: [
    "How does Tarjan's differ from Kosaraju's Algorithm?",
    "What are SCCs used for?"
  ],

  companies: [
    "Google",
    "Meta"
  ],

  tags: [
    "Graph",
    "DFS"
  ],

  estimatedTime: 300
},

{
  id: 29,
  subject: "dsa",
  difficulty: "hard",

  question: "How do you identify Dynamic Programming states and transitions?",

  idealAnswer:
    "To design a DP solution, first identify the state that uniquely represents a subproblem, define the transition between states using previously computed results, establish base cases, and choose memoization or tabulation for implementation.",

  keyConcepts: [
    "DP State",
    "Transition",
    "Base Case",
    "Memoization"
  ],

  commonMistakes: [
    "Defining unnecessary DP states",
    "Ignoring base cases"
  ],

  followUpQuestions: [
    "How do you optimize DP space complexity?",
    "Can every recursion be converted into DP?"
  ],

  companies: [
    "Google",
    "Microsoft",
    "Adobe"
  ],

  tags: [
    "Dynamic Programming"
  ],

  estimatedTime: 300
},

{
  id: 30,
  subject: "dsa",
  difficulty: "hard",

  question: "Compare the time complexities of common data structures and explain when to use each.",

  idealAnswer:
    "Arrays provide O(1) indexing, Linked Lists offer efficient insertions and deletions, Hash Tables provide O(1) average lookup, Heaps support O(log n) insertion and deletion, Balanced BSTs perform search, insertion, and deletion in O(log n), and Graph representations like adjacency lists are efficient for sparse graphs. Choosing the appropriate data structure depends on the required operations and constraints.",

  keyConcepts: [
    "Time Complexity",
    "Arrays",
    "Linked List",
    "Hash Table",
    "Heap",
    "BST"
  ],

  commonMistakes: [
    "One data structure is optimal for every problem"
  ],

  followUpQuestions: [
    "Why are Hash Tables O(1) on average?",
    "When would you prefer a Heap over a BST?"
  ],

  companies: [
    "Google",
    "Amazon",
    "Microsoft",
    "Adobe"
  ],

  tags: [
    "Complexity",
    "Data Structures"
  ],

  estimatedTime: 300
},

];