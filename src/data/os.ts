import { InterviewQuestion } from "@/types/interview";

export const osQuestions: InterviewQuestion[] = [
{
  id: 1,
  subject: "os",
  difficulty: "easy",
  question: "What is an Operating System?",
  idealAnswer:
    "An Operating System is system software that manages computer hardware, memory, files, processes, and provides an interface between users and hardware.",
  keyConcepts: ["Operating System", "Resource Management", "Kernel"],
  commonMistakes: [
    "Thinking an OS is only a user interface",
    "Ignoring its role in hardware management"
  ],
  followUpQuestions: [
    "What are the main functions of an operating system?"
  ],
  companies: ["Google", "Amazon", "Microsoft"],
  tags: ["Basics", "OS"],
  estimatedTime: 90,
},

{
  id: 2,
  subject: "os",
  difficulty: "easy",
  question: "What is a process?",
  idealAnswer:
    "A process is a program that is currently being executed. It has its own memory space, program counter, registers, and system resources.",
  keyConcepts: ["Process", "Execution", "PCB"],
  commonMistakes: [
    "Confusing a process with a program"
  ],
  followUpQuestions: [
    "What information is stored in a Process Control Block?"
  ],
  companies: ["Google", "Adobe"],
  tags: ["Processes"],
  estimatedTime: 120,
},

{
  id: 3,
  subject: "os",
  difficulty: "easy",
  question: "What is a thread?",
  idealAnswer:
    "A thread is the smallest unit of CPU execution within a process. Multiple threads share the same process resources while executing independently.",
  keyConcepts: ["Thread", "Multithreading", "Lightweight Process"],
  commonMistakes: [
    "Thinking threads have separate memory like processes"
  ],
  followUpQuestions: [
    "Why are threads considered lightweight?"
  ],
  companies: ["Amazon", "Google"],
  tags: ["Threads"],
  estimatedTime: 120,
},

{
  id: 4,
  subject: "os",
  difficulty: "easy",
  question: "What is the difference between a process and a thread?",
  idealAnswer:
    "Processes have separate memory spaces and communicate using IPC, while threads share the same address space within a process, making communication faster and context switching cheaper.",
  keyConcepts: ["Process", "Thread", "IPC"],
  commonMistakes: [
    "Saying processes share memory by default"
  ],
  followUpQuestions: [
    "Which has lower context-switch overhead?"
  ],
  companies: ["Microsoft", "Google"],
  tags: ["Processes", "Threads"],
  estimatedTime: 150,
},

{
  id: 5,
  subject: "os",
  difficulty: "easy",
  question: "What are the different states of a process?",
  idealAnswer:
    "A process typically moves through New, Ready, Running, Waiting (Blocked), and Terminated states during execution.",
  keyConcepts: ["Ready", "Running", "Waiting", "Terminated"],
  commonMistakes: [
    "Forgetting the waiting or blocked state"
  ],
  followUpQuestions: [
    "When does a process move from Ready to Running?"
  ],
  companies: ["Google", "Meta"],
  tags: ["Process States"],
  estimatedTime: 120,
},

{
  id: 6,
  subject: "os",
  difficulty: "easy",
  question: "What is a kernel?",
  idealAnswer:
    "The kernel is the core component of an operating system that manages CPU scheduling, memory, devices, and communication between hardware and software.",
  keyConcepts: ["Kernel", "Hardware", "System Calls"],
  commonMistakes: [
    "Confusing the kernel with the operating system itself"
  ],
  followUpQuestions: [
    "What are system calls?"
  ],
  companies: ["Amazon", "Google"],
  tags: ["Kernel"],
  estimatedTime: 120,
},

{
  id: 7,
  subject: "os",
  difficulty: "easy",
  question: "What is CPU scheduling?",
  idealAnswer:
    "CPU scheduling is the process of selecting which ready process gets access to the CPU next in order to improve efficiency and responsiveness.",
  keyConcepts: ["Scheduling", "CPU", "Ready Queue"],
  commonMistakes: [
    "Thinking scheduling only happens once"
  ],
  followUpQuestions: [
    "Name some CPU scheduling algorithms."
  ],
  companies: ["Google", "Oracle"],
  tags: ["Scheduling"],
  estimatedTime: 120,
},

{
  id: 8,
  subject: "os",
  difficulty: "easy",
  question: "What is virtual memory?",
  idealAnswer:
    "Virtual memory extends physical memory by using disk space, allowing programs larger than RAM to execute while providing each process with its own logical address space.",
  keyConcepts: ["Virtual Memory", "RAM", "Disk"],
  commonMistakes: [
    "Thinking virtual memory increases physical RAM"
  ],
  followUpQuestions: [
    "What is demand paging?"
  ],
  companies: ["Microsoft", "Amazon"],
  tags: ["Memory"],
  estimatedTime: 150,
},

{
  id: 9,
  subject: "os",
  difficulty: "easy",
  question: "What is paging?",
  idealAnswer:
    "Paging is a memory management technique that divides logical memory into fixed-size pages and physical memory into frames, eliminating the need for contiguous memory allocation.",
  keyConcepts: ["Paging", "Pages", "Frames"],
  commonMistakes: [
    "Confusing paging with segmentation"
  ],
  followUpQuestions: [
    "What is a page fault?"
  ],
  companies: ["Google", "Adobe"],
  tags: ["Paging"],
  estimatedTime: 150,
},

{
  id: 10,
  subject: "os",
  difficulty: "easy",
  question: "What is a page fault?",
  idealAnswer:
    "A page fault occurs when a process tries to access a page that is not currently in physical memory, causing the operating system to load it from secondary storage.",
  keyConcepts: ["Page Fault", "Demand Paging", "Virtual Memory"],
  commonMistakes: [
    "Thinking every page fault is an error"
  ],
  followUpQuestions: [
    "How does the operating system handle a page fault?"
  ],
  companies: ["Google", "Microsoft"],
  tags: ["Memory Management"],
  estimatedTime: 150,
},

{
  id: 11,
  subject: "os",
  difficulty: "medium",
  question: "Explain FCFS scheduling. What are its advantages and disadvantages?",
  idealAnswer:
    "First Come First Serve (FCFS) schedules processes in the order they arrive. It is simple and fair but suffers from the convoy effect, where short processes wait behind long ones, increasing average waiting time.",
  keyConcepts: ["FCFS", "Convoy Effect", "Non-preemptive"],
  commonMistakes: [
    "Saying FCFS is preemptive",
    "Ignoring the convoy effect"
  ],
  followUpQuestions: [
    "When is FCFS a good choice?"
  ],
  companies: ["Amazon", "Oracle"],
  tags: ["Scheduling"],
  estimatedTime: 180,
},

{
  id: 12,
  subject: "os",
  difficulty: "medium",
  question: "What is Shortest Job First (SJF) scheduling?",
  idealAnswer:
    "SJF schedules the process with the smallest CPU burst first. It minimizes average waiting time but requires predicting CPU burst lengths and may lead to starvation.",
  keyConcepts: ["SJF", "Burst Time", "Starvation"],
  commonMistakes: [
    "Thinking SJF never causes starvation"
  ],
  followUpQuestions: [
    "How is SRTF related to SJF?"
  ],
  companies: ["Google", "Microsoft"],
  tags: ["Scheduling"],
  estimatedTime: 180,
},

{
  id: 13,
  subject: "os",
  difficulty: "medium",
  question: "Explain Round Robin scheduling.",
  idealAnswer:
    "Round Robin allocates each process a fixed time quantum. If the process does not finish within the quantum, it is preempted and moved to the end of the ready queue.",
  keyConcepts: ["Round Robin", "Time Quantum", "Preemptive"],
  commonMistakes: [
    "Confusing Round Robin with FCFS"
  ],
  followUpQuestions: [
    "What happens if the time quantum is too small or too large?"
  ],
  companies: ["Amazon", "Adobe"],
  tags: ["Scheduling"],
  estimatedTime: 180,
},

{
  id: 14,
  subject: "os",
  difficulty: "medium",
  question: "What is Priority Scheduling?",
  idealAnswer:
    "Priority Scheduling executes the process with the highest priority first. It may be preemptive or non-preemptive and can suffer from starvation if low-priority processes never get CPU time.",
  keyConcepts: ["Priority", "Starvation", "Scheduling"],
  commonMistakes: [
    "Ignoring starvation"
  ],
  followUpQuestions: [
    "How does aging solve starvation?"
  ],
  companies: ["Google", "Oracle"],
  tags: ["Scheduling"],
  estimatedTime: 180,
},

{
  id: 15,
  subject: "os",
  difficulty: "medium",
  question: "What is context switching?",
  idealAnswer:
    "Context switching is the process of saving the state of the currently running process and restoring the state of another process so the CPU can switch execution.",
  keyConcepts: ["Context Switch", "Registers", "PCB"],
  commonMistakes: [
    "Thinking context switching performs useful computation"
  ],
  followUpQuestions: [
    "Why is context switching considered overhead?"
  ],
  companies: ["Google", "Microsoft"],
  tags: ["Processes"],
  estimatedTime: 150,
},

{
  id: 16,
  subject: "os",
  difficulty: "medium",
  question: "What is a deadlock?",
  idealAnswer:
    "A deadlock occurs when two or more processes wait indefinitely for resources held by each other, preventing all of them from proceeding.",
  keyConcepts: ["Deadlock", "Resource Allocation"],
  commonMistakes: [
    "Confusing deadlock with starvation"
  ],
  followUpQuestions: [
    "What are the four necessary conditions for deadlock?"
  ],
  companies: ["Amazon", "Google"],
  tags: ["Deadlock"],
  estimatedTime: 180,
},

{
  id: 17,
  subject: "os",
  difficulty: "medium",
  question: "What are the four necessary conditions for deadlock?",
  idealAnswer:
    "The four Coffman conditions are Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. All four must hold simultaneously for a deadlock to occur.",
  keyConcepts: ["Coffman Conditions", "Deadlock"],
  commonMistakes: [
    "Missing one of the four conditions"
  ],
  followUpQuestions: [
    "How can we prevent deadlocks?"
  ],
  companies: ["Microsoft", "Google"],
  tags: ["Deadlock"],
  estimatedTime: 180,
},

{
  id: 18,
  subject: "os",
  difficulty: "medium",
  question: "What is Banker's Algorithm?",
  idealAnswer:
    "Banker's Algorithm is a deadlock avoidance algorithm that allocates resources only if doing so keeps the system in a safe state.",
  keyConcepts: ["Banker's Algorithm", "Safe State", "Deadlock Avoidance"],
  commonMistakes: [
    "Confusing avoidance with prevention"
  ],
  followUpQuestions: [
    "What is a safe sequence?"
  ],
  companies: ["Amazon", "Adobe"],
  tags: ["Deadlock"],
  estimatedTime: 180,
},

{
  id: 19,
  subject: "os",
  difficulty: "medium",
  question: "What is thrashing?",
  idealAnswer:
    "Thrashing occurs when the operating system spends more time handling page faults and swapping pages than executing processes because physical memory is insufficient.",
  keyConcepts: ["Thrashing", "Page Fault", "Virtual Memory"],
  commonMistakes: [
    "Confusing thrashing with fragmentation"
  ],
  followUpQuestions: [
    "How can thrashing be reduced?"
  ],
  companies: ["Google", "Meta"],
  tags: ["Memory Management"],
  estimatedTime: 180,
},

{
  id: 20,
  subject: "os",
  difficulty: "medium",
  question: "What is fragmentation? Explain internal and external fragmentation.",
  idealAnswer:
    "Fragmentation is wasted memory caused by allocation patterns. Internal fragmentation is unused space inside allocated blocks, while external fragmentation is free memory scattered into small non-contiguous blocks.",
  keyConcepts: ["Internal Fragmentation", "External Fragmentation"],
  commonMistakes: [
    "Interchanging internal and external fragmentation"
  ],
  followUpQuestions: [
    "How does paging eliminate external fragmentation?"
  ],
  companies: ["Google", "Microsoft"],
  tags: ["Memory"],
  estimatedTime: 180,
},

{
  id: 21,
  subject: "os",
  difficulty: "hard",
  question: "What is swapping? How does it improve memory management?",
  idealAnswer:
    "Swapping is the process of moving an entire process between main memory and secondary storage. It frees RAM for other processes, allowing the system to execute more processes than physical memory alone can support.",
  keyConcepts: ["Swapping", "Secondary Storage", "Memory Management"],
  commonMistakes: [
    "Confusing swapping with paging",
    "Thinking only pages are swapped"
  ],
  followUpQuestions: [
    "How is swapping different from paging?"
  ],
  companies: ["Amazon", "Google"],
  tags: ["Memory Management"],
  estimatedTime: 180,
},

{
  id: 22,
  subject: "os",
  difficulty: "hard",
  question: "Differentiate between logical and physical addresses.",
  idealAnswer:
    "A logical address is generated by the CPU and used by programs, while a physical address refers to the actual location in RAM. The Memory Management Unit (MMU) translates logical addresses into physical addresses.",
  keyConcepts: ["Logical Address", "Physical Address", "MMU"],
  commonMistakes: [
    "Assuming logical and physical addresses are always identical"
  ],
  followUpQuestions: [
    "What is address binding?"
  ],
  companies: ["Microsoft", "Google"],
  tags: ["Memory"],
  estimatedTime: 180,
},

{
  id: 23,
  subject: "os",
  difficulty: "hard",
  question: "What is demand paging and how does it work?",
  idealAnswer:
    "Demand paging loads a page into memory only when it is referenced. If the required page is absent, a page fault occurs, the OS loads the page from disk into a free frame, updates the page table, and resumes execution.",
  keyConcepts: ["Demand Paging", "Page Fault", "Page Table"],
  commonMistakes: [
    "Thinking all pages are loaded before execution"
  ],
  followUpQuestions: [
    "Why is demand paging efficient?"
  ],
  companies: ["Google", "Adobe"],
  tags: ["Virtual Memory"],
  estimatedTime: 180,
},

{
  id: 24,
  subject: "os",
  difficulty: "hard",
  question: "Explain the concept of overlays.",
  idealAnswer:
    "Overlays allow only the required portion of a program to reside in memory at a time. Different program sections replace one another as needed, enabling execution of programs larger than available memory.",
  keyConcepts: ["Overlays", "Memory Optimization"],
  commonMistakes: [
    "Confusing overlays with virtual memory"
  ],
  followUpQuestions: [
    "Are overlays still widely used today?"
  ],
  companies: ["Oracle", "Amazon"],
  tags: ["Memory"],
  estimatedTime: 180,
},

{
  id: 25,
  subject: "os",
  difficulty: "hard",
  question: "Explain dynamic loading and its advantages.",
  idealAnswer:
    "Dynamic loading loads routines into memory only when they are first called, reducing memory usage and improving utilization for programs containing infrequently executed code.",
  keyConcepts: ["Dynamic Loading", "Memory Utilization"],
  commonMistakes: [
    "Confusing dynamic loading with dynamic linking"
  ],
  followUpQuestions: [
    "How is dynamic loading different from dynamic linking?"
  ],
  companies: ["Google", "Microsoft"],
  tags: ["Memory"],
  estimatedTime: 180,
},

{
  id: 26,
  subject: "os",
  difficulty: "hard",
  question: "What is a safe state in deadlock avoidance?",
  idealAnswer:
    "A system is in a safe state if there exists at least one sequence of process execution in which every process can obtain its required resources and complete successfully.",
  keyConcepts: ["Safe State", "Safe Sequence", "Deadlock Avoidance"],
  commonMistakes: [
    "Thinking a safe state means no process is waiting"
  ],
  followUpQuestions: [
    "How does Banker's Algorithm determine a safe state?"
  ],
  companies: ["Amazon", "Google"],
  tags: ["Deadlock"],
  estimatedTime: 180,
},

{
  id: 27,
  subject: "os",
  difficulty: "hard",
  question: "What is starvation? How can it be prevented?",
  idealAnswer:
    "Starvation occurs when a process waits indefinitely because higher-priority processes continue receiving CPU time. Aging gradually increases the priority of waiting processes to prevent starvation.",
  keyConcepts: ["Starvation", "Aging", "Scheduling"],
  commonMistakes: [
    "Confusing starvation with deadlock"
  ],
  followUpQuestions: [
    "Which scheduling algorithms commonly suffer from starvation?"
  ],
  companies: ["Microsoft", "Google"],
  tags: ["Scheduling"],
  estimatedTime: 180,
},

{
  id: 28,
  subject: "os",
  difficulty: "hard",
  question: "What is Inter-Process Communication (IPC)? Name common IPC mechanisms.",
  idealAnswer:
    "IPC enables processes to exchange data and synchronize execution. Common IPC mechanisms include pipes, message queues, shared memory, sockets, and semaphores.",
  keyConcepts: ["IPC", "Shared Memory", "Message Queue", "Pipes"],
  commonMistakes: [
    "Thinking threads require IPC to communicate"
  ],
  followUpQuestions: [
    "Which IPC mechanism is generally the fastest?"
  ],
  companies: ["Google", "Meta"],
  tags: ["IPC"],
  estimatedTime: 180,
},

{
  id: 29,
  subject: "os",
  difficulty: "hard",
  question: "What are semaphores? Differentiate between binary and counting semaphores.",
  idealAnswer:
    "Semaphores are synchronization primitives used to control access to shared resources. A binary semaphore has only two values (0 and 1), while a counting semaphore can have multiple values representing available resource instances.",
  keyConcepts: ["Semaphore", "Synchronization", "Binary Semaphore", "Counting Semaphore"],
  commonMistakes: [
    "Confusing semaphores with mutexes"
  ],
  followUpQuestions: [
    "What problems do semaphores solve?"
  ],
  companies: ["Google", "Amazon"],
  tags: ["Synchronization"],
  estimatedTime: 180,
},

{
  id: 30,
  subject: "os",
  difficulty: "hard",
  question: "What is the Producer-Consumer problem? How can it be solved?",
  idealAnswer:
    "The Producer-Consumer problem is a synchronization problem where producers generate data and consumers use it while sharing a bounded buffer. It is commonly solved using semaphores or mutexes with condition variables to ensure mutual exclusion and proper synchronization.",
  keyConcepts: ["Producer-Consumer", "Semaphore", "Mutex", "Synchronization"],
  commonMistakes: [
    "Ignoring synchronization between producer and consumer",
    "Allowing race conditions"
  ],
  followUpQuestions: [
    "How would you implement this using semaphores?"
  ],
  companies: ["Google", "Amazon", "Microsoft"],
  tags: ["Synchronization", "Classic Problems"],
  estimatedTime: 240,
},
];

export const osResources = [
  {
    title: "Gate Smashers OS",
    type: "YouTube",
    link: "https://www.youtube.com/@GateSmashers",
    description: "Operating System playlist."
  },
  {
    title: "OS Notes",
    type: "Notes",
    link: "https://www.geeksforgeeks.org/operating-systems/",
    description: "Important OS notes."
  },
  {
    title: "OS Roadmap",
    type: "Roadmap",
    link: "https://roadmap.sh",
    description: "Operating System roadmap."
  }
];