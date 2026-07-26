import { InterviewQuestion } from "@/types/interview";

export const oopQuestions: InterviewQuestion[] = [
    {
        id: 1,
        subject: "oop",
        difficulty: "easy",
        question: "What is Object-Oriented Programming (OOP)?",
        idealAnswer:
            "Object-Oriented Programming is a programming paradigm that organizes software using objects containing data and behavior. It promotes modularity, reusability, and maintainability.",
        keyConcepts: ["Objects", "Classes", "Encapsulation", "Inheritance"],
        commonMistakes: [
            "Confusing OOP with procedural programming",
            "Thinking OOP only means using classes"
        ],
        followUpQuestions: [
            "What are the four pillars of OOP?",
            "Why is OOP popular in software development?"
        ],
        companies: ["Google", "Microsoft", "Amazon"],
        tags: ["Basics", "OOP"],
        estimatedTime: 90,
    },

    {
        id: 2,
        subject: "oop",
        difficulty: "easy",
        question: "What is a class?",
        idealAnswer:
            "A class is a blueprint that defines the properties and behaviors of objects. Objects are created as instances of a class.",
        keyConcepts: ["Class", "Blueprint", "Object"],
        commonMistakes: [
            "Thinking a class itself stores runtime data"
        ],
        followUpQuestions: [
            "How is a class different from an object?"
        ],
        companies: ["Adobe", "Amazon"],
        tags: ["Class"],
        estimatedTime: 90,
    },

    {
        id: 3,
        subject: "oop",
        difficulty: "easy",
        question: "What is an object?",
        idealAnswer:
            "An object is an instance of a class that contains its own state and behavior defined by the class.",
        keyConcepts: ["Instance", "State", "Behavior"],
        commonMistakes: [
            "Confusing objects with classes"
        ],
        followUpQuestions: [
            "Can multiple objects be created from one class?"
        ],
        companies: ["Google", "Meta"],
        tags: ["Objects"],
        estimatedTime: 90,
    },

    {
        id: 4,
        subject: "oop",
        difficulty: "easy",
        question: "What are the four pillars of OOP?",
        idealAnswer:
            "The four pillars are Encapsulation, Abstraction, Inheritance, and Polymorphism. Together they improve code organization, security, and reusability.",
        keyConcepts: [
            "Encapsulation",
            "Abstraction",
            "Inheritance",
            "Polymorphism"
        ],
        commonMistakes: [
            "Mixing abstraction with encapsulation"
        ],
        followUpQuestions: [
            "Explain each pillar with an example."
        ],
        companies: ["Google", "Microsoft"],
        tags: ["Pillars"],
        estimatedTime: 120,
    },

    {
        id: 5,
        subject: "oop",
        difficulty: "easy",
        question: "What is encapsulation?",
        idealAnswer:
            "Encapsulation combines data and methods into a single unit while restricting direct access to internal data using access modifiers.",
        keyConcepts: [
            "Data Hiding",
            "Private Members",
            "Access Control"
        ],
        commonMistakes: [
            "Assuming encapsulation only means making variables private"
        ],
        followUpQuestions: [
            "How does encapsulation improve security?"
        ],
        companies: ["Amazon", "Adobe"],
        tags: ["Encapsulation"],
        estimatedTime: 120,
    },

    {
        id: 6,
        subject: "oop",
        difficulty: "easy",
        question: "What is abstraction?",
        idealAnswer:
            "Abstraction hides implementation details while exposing only the essential functionality to users.",
        keyConcepts: [
            "Abstract Class",
            "Interface",
            "Implementation Hiding"
        ],
        commonMistakes: [
            "Confusing abstraction with encapsulation"
        ],
        followUpQuestions: [
            "How is abstraction implemented in C++ or Java?"
        ],
        companies: ["Microsoft", "Google"],
        tags: ["Abstraction"],
        estimatedTime: 120,
    },

    {
        id: 7,
        subject: "oop",
        difficulty: "easy",
        question: "What is inheritance?",
        idealAnswer:
            "Inheritance allows a derived class to acquire properties and methods from a base class, enabling code reuse and hierarchical relationships.",
        keyConcepts: [
            "Base Class",
            "Derived Class",
            "Code Reuse"
        ],
        commonMistakes: [
            "Believing inheritance should always be preferred over composition"
        ],
        followUpQuestions: [
            "Name different types of inheritance."
        ],
        companies: ["Google", "Oracle"],
        tags: ["Inheritance"],
        estimatedTime: 120,
    },

    {
        id: 8,
        subject: "oop",
        difficulty: "easy",
        question: "What is polymorphism?",
        idealAnswer:
            "Polymorphism allows the same interface or function name to exhibit different behaviors depending on the object or parameters involved.",
        keyConcepts: [
            "Compile-time",
            "Runtime",
            "Overloading",
            "Overriding"
        ],
        commonMistakes: [
            "Confusing overloading with overriding"
        ],
        followUpQuestions: [
            "What is runtime polymorphism?"
        ],
        companies: ["Microsoft", "Amazon"],
        tags: ["Polymorphism"],
        estimatedTime: 120,
    },

    {
        id: 9,
        subject: "oop",
        difficulty: "easy",
        question: "What is the difference between a constructor and a destructor?",
        idealAnswer:
            "A constructor initializes an object when it is created, whereas a destructor performs cleanup when the object is destroyed.",
        keyConcepts: [
            "Constructor",
            "Destructor",
            "Object Lifecycle"
        ],
        commonMistakes: [
            "Thinking destructors are manually called in C++"
        ],
        followUpQuestions: [
            "Can constructors be overloaded?"
        ],
        companies: ["Adobe", "Amazon"],
        tags: ["Constructor", "Destructor"],
        estimatedTime: 120,
    },

    {
        id: 10,
        subject: "oop",
        difficulty: "easy",
        question: "What are access specifiers?",
        idealAnswer:
            "Access specifiers define the visibility of class members. Common access specifiers include public, private, and protected.",
        keyConcepts: [
            "Public",
            "Private",
            "Protected"
        ],
        commonMistakes: [
            "Assuming protected members are accessible everywhere"
        ],
        followUpQuestions: [
            "What is the difference between private and protected?"
        ],
        companies: ["Google", "Amazon"],
        tags: ["Access Specifiers"],
        estimatedTime: 90,
    },

    {
        id: 11,
        subject: "oop",
        difficulty: "medium",
        question: "What is the difference between method overloading and method overriding?",
        idealAnswer:
            "Method overloading is compile-time polymorphism where methods have the same name but different parameters. Method overriding is runtime polymorphism where a derived class provides its own implementation of a base class method.",
        keyConcepts: [
            "Compile-time Polymorphism",
            "Runtime Polymorphism",
            "Overloading",
            "Overriding"
        ],
        commonMistakes: [
            "Confusing overloading with overriding",
            "Thinking overriding changes method parameters"
        ],
        followUpQuestions: [
            "Which one is resolved at runtime?",
            "Can constructors be overloaded?"
        ],
        companies: ["Google", "Amazon", "Microsoft"],
        tags: ["Polymorphism"],
        estimatedTime: 150,
    },

    {
        id: 12,
        subject: "oop",
        difficulty: "medium",
        question: "What is the difference between an abstract class and an interface?",
        idealAnswer:
            "An abstract class can contain both implemented and abstract methods, while an interface defines a contract that implementing classes must follow. Interfaces are primarily used for abstraction and multiple inheritance of behavior.",
        keyConcepts: [
            "Abstract Class",
            "Interface",
            "Abstraction"
        ],
        commonMistakes: [
            "Thinking interfaces can always store object state"
        ],
        followUpQuestions: [
            "When would you choose an interface over an abstract class?"
        ],
        companies: ["Microsoft", "Oracle"],
        tags: ["Abstraction"],
        estimatedTime: 180,
    },

    {
        id: 13,
        subject: "oop",
        difficulty: "medium",
        question: "Explain compile-time and runtime polymorphism with examples.",
        idealAnswer:
            "Compile-time polymorphism is achieved through function or operator overloading, while runtime polymorphism is achieved through method overriding using inheritance and virtual functions.",
        keyConcepts: [
            "Static Binding",
            "Dynamic Binding",
            "Virtual Function"
        ],
        commonMistakes: [
            "Calling overloading runtime polymorphism"
        ],
        followUpQuestions: [
            "Why are virtual functions required?"
        ],
        companies: ["Google", "Adobe"],
        tags: ["Polymorphism"],
        estimatedTime: 180,
    },

    {
        id: 14,
        subject: "oop",
        difficulty: "medium",
        question: "What are the different types of inheritance?",
        idealAnswer:
            "Common inheritance types include single, multiple, multilevel, hierarchical, and hybrid inheritance. Language support varies; for example, Java does not support multiple inheritance through classes.",
        keyConcepts: [
            "Single",
            "Multiple",
            "Hierarchical",
            "Multilevel",
            "Hybrid"
        ],
        commonMistakes: [
            "Assuming every language supports every inheritance type"
        ],
        followUpQuestions: [
            "Why doesn't Java support multiple inheritance using classes?"
        ],
        companies: ["Amazon", "Google"],
        tags: ["Inheritance"],
        estimatedTime: 150,
    },

    {
        id: 15,
        subject: "oop",
        difficulty: "medium",
        question: "What is a virtual function?",
        idealAnswer:
            "A virtual function allows a derived class to override a base class method so that the correct implementation is selected at runtime.",
        keyConcepts: [
            "Virtual Function",
            "Dynamic Dispatch",
            "Runtime Binding"
        ],
        commonMistakes: [
            "Thinking every function is virtual in C++"
        ],
        followUpQuestions: [
            "Why is the virtual keyword important?"
        ],
        companies: ["Microsoft", "Adobe"],
        tags: ["Virtual Function"],
        estimatedTime: 180,
    },

    {
        id: 16,
        subject: "oop",
        difficulty: "medium",
        question: "What is constructor overloading?",
        idealAnswer:
            "Constructor overloading allows multiple constructors with different parameter lists, enabling objects to be initialized in different ways.",
        keyConcepts: [
            "Constructor",
            "Overloading",
            "Initialization"
        ],
        commonMistakes: [
            "Confusing constructor overloading with overriding"
        ],
        followUpQuestions: [
            "Can constructors be inherited?"
        ],
        companies: ["Oracle", "Google"],
        tags: ["Constructor"],
        estimatedTime: 120,
    },

    {
        id: 17,
        subject: "oop",
        difficulty: "medium",
        question: "What is the purpose of the copy constructor in C++?",
        idealAnswer:
            "A copy constructor creates a new object by copying the state of an existing object. It is commonly used to ensure proper copying of dynamically allocated resources.",
        keyConcepts: [
            "Copy Constructor",
            "Deep Copy",
            "Object Copy"
        ],
        commonMistakes: [
            "Using shallow copy for dynamic memory"
        ],
        followUpQuestions: [
            "When is the copy constructor automatically called?"
        ],
        companies: ["Amazon", "Google"],
        tags: ["Copy Constructor"],
        estimatedTime: 180,
    },

    {
        id: 18,
        subject: "oop",
        difficulty: "medium",
        question: "What are static members in a class?",
        idealAnswer:
            "Static members belong to the class rather than individual objects. All instances of the class share the same static data and methods.",
        keyConcepts: [
            "Static Variable",
            "Static Method",
            "Shared Data"
        ],
        commonMistakes: [
            "Thinking every object gets a separate copy of static variables"
        ],
        followUpQuestions: [
            "Can static methods access non-static members?"
        ],
        companies: ["Microsoft", "Meta"],
        tags: ["Static"],
        estimatedTime: 120,
    },

    {
        id: 19,
        subject: "oop",
        difficulty: "medium",
        question: "What is the difference between composition and inheritance?",
        idealAnswer:
            "Inheritance represents an 'is-a' relationship, whereas composition represents a 'has-a' relationship. Composition often provides greater flexibility and lower coupling.",
        keyConcepts: [
            "Composition",
            "Inheritance",
            "Has-A",
            "Is-A"
        ],
        commonMistakes: [
            "Using inheritance where composition is more suitable"
        ],
        followUpQuestions: [
            "Why is composition often preferred?"
        ],
        companies: ["Google", "Netflix"],
        tags: ["Design"],
        estimatedTime: 180,
    },

    {
        id: 20,
        subject: "oop",
        difficulty: "medium",
        question: "What is object slicing in C++?",
        idealAnswer:
            "Object slicing occurs when a derived class object is assigned to a base class object by value, causing derived-specific data to be discarded.",
        keyConcepts: [
            "Object Slicing",
            "Inheritance",
            "Base Class",
            "Derived Class"
        ],
        commonMistakes: [
            "Passing derived objects by value when polymorphism is required"
        ],
        followUpQuestions: [
            "How can object slicing be avoided?"
        ],
        companies: ["Google", "Adobe"],
        tags: ["C++", "Inheritance"],
        estimatedTime: 180,
    },

    {
  id: 21,
  subject: "oop",
  difficulty: "hard",
  question: "What is the Diamond Problem in multiple inheritance?",
  idealAnswer:
    "The Diamond Problem occurs when a class inherits from two classes that both inherit from the same base class, resulting in duplicate copies of the base class. C++ resolves this using virtual inheritance.",
  keyConcepts: [
    "Multiple Inheritance",
    "Virtual Inheritance",
    "Diamond Problem"
  ],
  commonMistakes: [
    "Ignoring duplicate base class members",
    "Not using virtual inheritance when required"
  ],
  followUpQuestions: [
    "How does C++ solve the Diamond Problem?",
    "Why doesn't Java support multiple inheritance of classes?"
  ],
  companies: ["Google", "Adobe"],
  tags: ["Inheritance", "C++"],
  estimatedTime: 240,
},

{
  id: 22,
  subject: "oop",
  difficulty: "hard",
  question: "Explain deep copy and shallow copy.",
  idealAnswer:
    "A shallow copy copies object references or pointers, while a deep copy duplicates the actual data so that the copied object owns independent resources.",
  keyConcepts: [
    "Deep Copy",
    "Shallow Copy",
    "Copy Constructor",
    "Pointers"
  ],
  commonMistakes: [
    "Using shallow copy for dynamically allocated memory",
    "Causing double deletion"
  ],
  followUpQuestions: [
    "Why is deep copy important?",
    "How is it implemented in C++?"
  ],
  companies: ["Microsoft", "Amazon"],
  tags: ["Memory Management"],
  estimatedTime: 240,
},

{
  id: 23,
  subject: "oop",
  difficulty: "hard",
  question: "What is a pure virtual function?",
  idealAnswer:
    "A pure virtual function has no implementation in the base class and forces derived classes to provide their own implementation, making the base class abstract.",
  keyConcepts: [
    "Pure Virtual Function",
    "Abstract Class",
    "Runtime Polymorphism"
  ],
  commonMistakes: [
    "Trying to instantiate an abstract class"
  ],
  followUpQuestions: [
    "How is a pure virtual function declared?",
    "Can an abstract class have normal methods?"
  ],
  companies: ["Google", "Oracle"],
  tags: ["Abstract Class"],
  estimatedTime: 180,
},

{
  id: 24,
  subject: "oop",
  difficulty: "hard",
  question: "What are friend functions and friend classes?",
  idealAnswer:
    "Friend functions and friend classes are granted access to private and protected members of another class without being members themselves.",
  keyConcepts: [
    "Friend Function",
    "Friend Class",
    "Access Control"
  ],
  commonMistakes: [
    "Using friend unnecessarily and breaking encapsulation"
  ],
  followUpQuestions: [
    "When should friend functions be avoided?"
  ],
  companies: ["Adobe", "Amazon"],
  tags: ["Friend Function"],
  estimatedTime: 180,
},

{
  id: 25,
  subject: "oop",
  difficulty: "hard",
  question: "What is dynamic binding?",
  idealAnswer:
    "Dynamic binding resolves the function call at runtime based on the actual object type, enabling runtime polymorphism through virtual functions.",
  keyConcepts: [
    "Dynamic Binding",
    "Runtime Polymorphism",
    "Virtual Function"
  ],
  commonMistakes: [
    "Confusing dynamic binding with function overloading"
  ],
  followUpQuestions: [
    "How does the virtual table (vtable) work?"
  ],
  companies: ["Google", "Microsoft"],
  tags: ["Polymorphism"],
  estimatedTime: 210,
},

{
  id: 26,
  subject: "oop",
  difficulty: "hard",
  question: "What are the SOLID principles?",
  idealAnswer:
    "SOLID consists of Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion principles that improve maintainability and scalability.",
  keyConcepts: [
    "SOLID",
    "SRP",
    "OCP",
    "LSP",
    "ISP",
    "DIP"
  ],
  commonMistakes: [
    "Applying SOLID without understanding the design problem"
  ],
  followUpQuestions: [
    "Explain each SOLID principle with an example."
  ],
  companies: ["Amazon", "Netflix", "Microsoft"],
  tags: ["SOLID", "Design Principles"],
  estimatedTime: 300,
},

{
  id: 27,
  subject: "oop",
  difficulty: "hard",
  question: "What is the Liskov Substitution Principle?",
  idealAnswer:
    "The Liskov Substitution Principle states that objects of a derived class should be replaceable with objects of the base class without affecting program correctness.",
  keyConcepts: [
    "LSP",
    "Inheritance",
    "Polymorphism"
  ],
  commonMistakes: [
    "Violating expected behavior in derived classes"
  ],
  followUpQuestions: [
    "Can you provide a real-world example of an LSP violation?"
  ],
  companies: ["Google", "Uber"],
  tags: ["SOLID"],
  estimatedTime: 240,
},

{
  id: 28,
  subject: "oop",
  difficulty: "hard",
  question: "Explain the Factory Design Pattern.",
  idealAnswer:
    "The Factory Pattern provides an interface for creating objects without exposing the object creation logic, allowing subclasses or factory methods to determine which object to instantiate.",
  keyConcepts: [
    "Factory Pattern",
    "Creational Pattern",
    "Abstraction"
  ],
  commonMistakes: [
    "Creating objects directly instead of using the factory"
  ],
  followUpQuestions: [
    "How is Factory different from Abstract Factory?"
  ],
  companies: ["Microsoft", "Amazon"],
  tags: ["Design Pattern"],
  estimatedTime: 300,
},

{
  id: 29,
  subject: "oop",
  difficulty: "hard",
  question: "Explain the Singleton Design Pattern.",
  idealAnswer:
    "The Singleton Pattern ensures that only one instance of a class exists throughout the application's lifetime while providing a global access point.",
  keyConcepts: [
    "Singleton",
    "Global Instance",
    "Design Pattern"
  ],
  commonMistakes: [
    "Making singleton implementations non-thread-safe"
  ],
  followUpQuestions: [
    "When should Singleton be avoided?"
  ],
  companies: ["Google", "Adobe"],
  tags: ["Design Pattern"],
  estimatedTime: 240,
},

{
  id: 30,
  subject: "oop",
  difficulty: "hard",
  question: "Why is composition often preferred over inheritance?",
  idealAnswer:
    "Composition promotes loose coupling and greater flexibility by assembling behavior through contained objects instead of relying on rigid inheritance hierarchies.",
  keyConcepts: [
    "Composition",
    "Loose Coupling",
    "Code Reusability"
  ],
  commonMistakes: [
    "Using inheritance simply for code reuse"
  ],
  followUpQuestions: [
    "Give an example where composition is a better choice."
  ],
  companies: ["Google", "Netflix", "Meta"],
  tags: ["Design"],
  estimatedTime: 240,
}
];     
   
export const oopResources = [
  {
    title: "OOP in C++",
    type: "YouTube",
    link: "https://www.youtube.com/@CodeHelp",
    description: "Complete OOP playlist."
  },
  {
    title: "OOP Notes",
    type: "Notes",
    link: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
    description: "Important OOP concepts."
  }
];
