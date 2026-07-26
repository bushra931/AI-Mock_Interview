import { InterviewQuestion } from "@/types/interview";

export const cnQuestions: InterviewQuestion[] = [
{
  id: 1,
  subject: "cn",
  difficulty: "easy",
  question: "What is a computer network?",
  idealAnswer:
    "A computer network is a collection of interconnected devices that communicate and share data and resources using standard communication protocols.",
  keyConcepts: ["Computer Network", "Communication"],
  commonMistakes: [
    "Confusing a network with the Internet"
  ],
  followUpQuestions: [
    "What are some real-world examples of computer networks?"
  ],
  companies: ["Google", "Amazon"],
  tags: ["Basics"],
  estimatedTime: 90,
},

{
  id: 2,
  subject: "cn",
  difficulty: "easy",
  question: "What are the different types of computer networks?",
  idealAnswer:
    "The major types are PAN (Personal Area Network), LAN (Local Area Network), MAN (Metropolitan Area Network), and WAN (Wide Area Network). They differ based on geographical coverage.",
  keyConcepts: ["PAN", "LAN", "MAN", "WAN"],
  commonMistakes: [
    "Mixing LAN and WAN"
  ],
  followUpQuestions: [
    "Which type does the Internet belong to?"
  ],
  companies: ["Microsoft", "Oracle"],
  tags: ["Basics"],
  estimatedTime: 120,
},

{
  id: 3,
  subject: "cn",
  difficulty: "easy",
  question: "What is the OSI model?",
  idealAnswer:
    "The OSI model is a seven-layer reference model that standardizes network communication by dividing networking functions into separate layers.",
  keyConcepts: ["OSI", "Seven Layers"],
  commonMistakes: [
    "Incorrect layer order"
  ],
  followUpQuestions: [
    "Can you name all seven layers?"
  ],
  companies: ["Google", "Cisco"],
  tags: ["OSI"],
  estimatedTime: 150,
},

{
  id: 4,
  subject: "cn",
  difficulty: "easy",
  question: "Name the seven layers of the OSI model.",
  idealAnswer:
    "Application, Presentation, Session, Transport, Network, Data Link, and Physical.",
  keyConcepts: ["OSI Layers"],
  commonMistakes: [
    "Skipping Presentation or Session layer"
  ],
  followUpQuestions: [
    "Which layer does a router work on?"
  ],
  companies: ["Amazon", "Cisco"],
  tags: ["OSI"],
  estimatedTime: 150,
},

{
  id: 5,
  subject: "cn",
  difficulty: "easy",
  question: "What is the difference between the OSI model and the TCP/IP model?",
  idealAnswer:
    "OSI is a seven-layer reference model, whereas TCP/IP is a practical four-layer model used on the Internet.",
  keyConcepts: ["OSI", "TCP/IP"],
  commonMistakes: [
    "Thinking both models have seven layers"
  ],
  followUpQuestions: [
    "Why is TCP/IP used in practice?"
  ],
  companies: ["Google", "Microsoft"],
  tags: ["Models"],
  estimatedTime: 180,
},

{
  id: 6,
  subject: "cn",
  difficulty: "easy",
  question: "What is network topology? Name its common types.",
  idealAnswer:
    "Network topology is the physical or logical arrangement of devices in a network. Common types include Bus, Star, Ring, Mesh, and Tree topology.",
  keyConcepts: ["Topology", "Star", "Mesh"],
  commonMistakes: [
    "Confusing topology with network type"
  ],
  followUpQuestions: [
    "Which topology is most commonly used today?"
  ],
  companies: ["Cisco", "Oracle"],
  tags: ["Topology"],
  estimatedTime: 150,
},

{
  id: 7,
  subject: "cn",
  difficulty: "easy",
  question: "What is the difference between TCP and UDP?",
  idealAnswer:
    "TCP is connection-oriented and provides reliable data delivery, while UDP is connectionless and provides faster but unreliable communication.",
  keyConcepts: ["TCP", "UDP"],
  commonMistakes: [
    "Thinking UDP guarantees delivery"
  ],
  followUpQuestions: [
    "Which applications commonly use UDP?"
  ],
  companies: ["Google", "Amazon"],
  tags: ["Transport Layer"],
  estimatedTime: 180,
},

{
  id: 8,
  subject: "cn",
  difficulty: "easy",
  question: "What is an IP address?",
  idealAnswer:
    "An IP address is a unique logical address assigned to a device on a network for identification and communication.",
  keyConcepts: ["IPv4", "IPv6"],
  commonMistakes: [
    "Confusing IP address with MAC address"
  ],
  followUpQuestions: [
    "What is the difference between IPv4 and IPv6?"
  ],
  companies: ["Microsoft", "Cisco"],
  tags: ["IP Address"],
  estimatedTime: 120,
},

{
  id: 9,
  subject: "cn",
  difficulty: "easy",
  question: "What is DNS?",
  idealAnswer:
    "DNS (Domain Name System) translates human-readable domain names into IP addresses, allowing users to access websites using names instead of numerical addresses.",
  keyConcepts: ["DNS", "Domain Name"],
  commonMistakes: [
    "Thinking DNS stores website data"
  ],
  followUpQuestions: [
    "What happens if DNS fails?"
  ],
  companies: ["Google", "Amazon"],
  tags: ["Application Layer"],
  estimatedTime: 150,
},

{
  id: 10,
  subject: "cn",
  difficulty: "easy",
  question: "What is a router and how is it different from a switch?",
  idealAnswer:
    "A router connects different networks and forwards packets using IP addresses, whereas a switch connects devices within the same LAN using MAC addresses.",
  keyConcepts: ["Router", "Switch", "MAC Address"],
  commonMistakes: [
    "Thinking routers and switches perform the same function"
  ],
  followUpQuestions: [
    "Which OSI layer does each device operate on?"
  ],
  companies: ["Cisco", "Google"],
  tags: ["Networking Devices"],
  estimatedTime: 180,
},

{
  id: 11,
  subject: "cn",
  difficulty: "medium",
  question: "Explain the TCP three-way handshake.",
  idealAnswer:
    "The TCP three-way handshake establishes a reliable connection between a client and server. The client sends SYN, the server responds with SYN-ACK, and the client replies with ACK, after which data transfer begins.",
  keyConcepts: ["TCP", "SYN", "SYN-ACK", "ACK"],
  commonMistakes: [
    "Confusing connection establishment with termination"
  ],
  followUpQuestions: [
    "Why are three steps required instead of two?"
  ],
  companies: ["Google", "Amazon"],
  tags: ["TCP"],
  estimatedTime: 180,
},

{
  id: 12,
  subject: "cn",
  difficulty: "medium",
  question: "How is a TCP connection terminated?",
  idealAnswer:
    "TCP uses a four-way handshake for connection termination. One side sends FIN, the other acknowledges it, sends its own FIN, and finally receives the last ACK before the connection closes.",
  keyConcepts: ["FIN", "ACK", "Connection Termination"],
  commonMistakes: [
    "Thinking TCP uses a three-way handshake for termination"
  ],
  followUpQuestions: [
    "What is the purpose of the TIME_WAIT state?"
  ],
  companies: ["Microsoft", "Cisco"],
  tags: ["TCP"],
  estimatedTime: 180,
},

{
  id: 13,
  subject: "cn",
  difficulty: "medium",
  question: "What are TCP sequence numbers and acknowledgment numbers?",
  idealAnswer:
    "Sequence numbers identify the position of transmitted data, while acknowledgment numbers indicate the next expected byte. Together they ensure reliable, ordered, and duplicate-free communication.",
  keyConcepts: ["Sequence Number", "Acknowledgment Number"],
  commonMistakes: [
    "Thinking ACK acknowledges packets instead of bytes"
  ],
  followUpQuestions: [
    "How do these numbers help detect duplicate packets?"
  ],
  companies: ["Google", "Adobe"],
  tags: ["TCP"],
  estimatedTime: 180,
},

{
  id: 14,
  subject: "cn",
  difficulty: "medium",
  question: "What is TCP congestion control?",
  idealAnswer:
    "TCP congestion control prevents network congestion by adjusting the sender's transmission rate using mechanisms such as Slow Start, Congestion Avoidance, and AIMD.",
  keyConcepts: ["Congestion Control", "Slow Start", "AIMD"],
  commonMistakes: [
    "Confusing congestion control with flow control"
  ],
  followUpQuestions: [
    "What happens when packet loss occurs?"
  ],
  companies: ["Amazon", "Google"],
  tags: ["TCP"],
  estimatedTime: 240,
},

{
  id: 15,
  subject: "cn",
  difficulty: "medium",
  question: "What is the difference between flow control and congestion control?",
  idealAnswer:
    "Flow control prevents the sender from overwhelming the receiver, whereas congestion control prevents excessive traffic from overloading the network.",
  keyConcepts: ["Flow Control", "Congestion Control"],
  commonMistakes: [
    "Using both terms interchangeably"
  ],
  followUpQuestions: [
    "Which TCP windows are used for each?"
  ],
  companies: ["Google", "Microsoft"],
  tags: ["Transport Layer"],
  estimatedTime: 180,
},

{
  id: 16,
  subject: "cn",
  difficulty: "medium",
  question: "Compare Stop-and-Wait, Go-Back-N, and Selective Repeat ARQ.",
  idealAnswer:
    "Stop-and-Wait sends one frame at a time, Go-Back-N retransmits from the lost frame onward, while Selective Repeat retransmits only the missing frames, making it the most efficient.",
  keyConcepts: ["ARQ", "Go-Back-N", "Selective Repeat"],
  commonMistakes: [
    "Confusing Go-Back-N with Selective Repeat"
  ],
  followUpQuestions: [
    "Which protocol provides the best bandwidth utilization?"
  ],
  companies: ["Cisco", "Amazon"],
  tags: ["Data Link Layer"],
  estimatedTime: 240,
},

{
  id: 17,
  subject: "cn",
  difficulty: "medium",
  question: "What is routing? Compare Distance Vector and Link-State routing.",
  idealAnswer:
    "Routing determines the best path for forwarding packets. Distance Vector routers exchange routing information with neighbors, while Link-State routers maintain a complete network map and compute shortest paths.",
  keyConcepts: ["Routing", "Distance Vector", "Link-State"],
  commonMistakes: [
    "Thinking both protocols work identically"
  ],
  followUpQuestions: [
    "Which routing protocols use these approaches?"
  ],
  companies: ["Cisco", "Google"],
  tags: ["Routing"],
  estimatedTime: 240,
},

{
  id: 18,
  subject: "cn",
  difficulty: "medium",
  question: "What is NAT? Why is it used?",
  idealAnswer:
    "Network Address Translation (NAT) converts private IP addresses into public IP addresses, allowing multiple devices to share a single public IP address while conserving IPv4 addresses.",
  keyConcepts: ["NAT", "IPv4"],
  commonMistakes: [
    "Thinking NAT increases Internet speed"
  ],
  followUpQuestions: [
    "What are the limitations of NAT?"
  ],
  companies: ["Amazon", "Microsoft"],
  tags: ["Network Layer"],
  estimatedTime: 180,
},

{
  id: 19,
  subject: "cn",
  difficulty: "medium",
  question: "What is the difference between IPv4 and IPv6?",
  idealAnswer:
    "IPv4 uses 32-bit addresses, whereas IPv6 uses 128-bit addresses, providing a significantly larger address space and eliminating the need for NAT in most cases.",
  keyConcepts: ["IPv4", "IPv6"],
  commonMistakes: [
    "Thinking IPv6 is only faster than IPv4"
  ],
  followUpQuestions: [
    "Why was IPv6 introduced?"
  ],
  companies: ["Google", "Cisco"],
  tags: ["IP"],
  estimatedTime: 180,
},

{
  id: 20,
  subject: "cn",
  difficulty: "medium",
  question: "How does DNS work?",
  idealAnswer:
    "DNS resolves a domain name into its corresponding IP address by querying DNS servers, allowing clients to communicate with the destination server using its IP address.",
  keyConcepts: ["DNS", "Name Resolution"],
  commonMistakes: [
    "Thinking DNS stores website content"
  ],
  followUpQuestions: [
    "What happens if a DNS record is not found?"
  ],
  companies: ["Google", "Amazon"],
  tags: ["Application Layer"],
  estimatedTime: 180,
},

{
  id: 21,
  subject: "cn",
  difficulty: "hard",
  question: "Compare RIP and OSPF routing protocols.",
  idealAnswer:
    "RIP is a Distance Vector routing protocol that uses hop count as its metric, whereas OSPF is a Link-State protocol that uses Dijkstra's algorithm to compute the shortest path. OSPF converges faster and is more scalable.",
  keyConcepts: ["RIP", "OSPF", "Distance Vector", "Link-State"],
  commonMistakes: [
    "Thinking RIP converges faster than OSPF"
  ],
  followUpQuestions: [
    "Why is OSPF preferred in enterprise networks?"
  ],
  companies: ["Cisco", "Google"],
  tags: ["Routing"],
  estimatedTime: 240,
},

{
  id: 22,
  subject: "cn",
  difficulty: "hard",
  question: "What is BGP? Why is it called a Path-Vector protocol?",
  idealAnswer:
    "Border Gateway Protocol (BGP) exchanges routing information between Autonomous Systems. It advertises the complete AS path for every route, which prevents routing loops and allows routing policy decisions.",
  keyConcepts: ["BGP", "Autonomous System", "Path Vector"],
  commonMistakes: [
    "Confusing BGP with OSPF"
  ],
  followUpQuestions: [
    "Where is BGP primarily used?"
  ],
  companies: ["Google", "Amazon"],
  tags: ["Routing"],
  estimatedTime: 240,
},

{
  id: 23,
  subject: "cn",
  difficulty: "hard",
  question: "What are CIDR and VLSM? How do they differ?",
  idealAnswer:
    "CIDR aggregates multiple networks to reduce routing table size, while VLSM divides a network into subnets of different sizes for efficient IP address utilization.",
  keyConcepts: ["CIDR", "VLSM", "Subnetting"],
  commonMistakes: [
    "Treating CIDR and VLSM as the same concept"
  ],
  followUpQuestions: [
    "Why are CIDR and VLSM important in modern networking?"
  ],
  companies: ["Cisco", "Microsoft"],
  tags: ["IP Addressing"],
  estimatedTime: 180,
},

{
  id: 24,
  subject: "cn",
  difficulty: "hard",
  question: "How does a switch learn MAC addresses?",
  idealAnswer:
    "A switch learns MAC addresses by reading the source MAC address of incoming frames and storing it in its MAC address table. If the destination MAC is unknown, the frame is flooded to all ports except the incoming port.",
  keyConcepts: ["MAC Address Table", "Switch", "Frame Flooding"],
  commonMistakes: [
    "Thinking switches use IP addresses for forwarding"
  ],
  followUpQuestions: [
    "What happens after the destination replies?"
  ],
  companies: ["Cisco", "Google"],
  tags: ["Switching"],
  estimatedTime: 180,
},

{
  id: 25,
  subject: "cn",
  difficulty: "hard",
  question: "What is the Spanning Tree Protocol (STP)?",
  idealAnswer:
    "Spanning Tree Protocol prevents switching loops by creating a loop-free logical topology. It elects a Root Bridge and blocks redundant paths while keeping them available as backups.",
  keyConcepts: ["STP", "Root Bridge", "Loop Prevention"],
  commonMistakes: [
    "Thinking STP removes redundant links permanently"
  ],
  followUpQuestions: [
    "What is the role of the Root Bridge?"
  ],
  companies: ["Cisco", "Amazon"],
  tags: ["Switching"],
  estimatedTime: 240,
},

{
  id: 26,
  subject: "cn",
  difficulty: "hard",
  question: "What is VLAN tagging (IEEE 802.1Q)?",
  idealAnswer:
    "IEEE 802.1Q VLAN tagging inserts a VLAN identifier into Ethernet frames, allowing multiple VLANs to share a single trunk link while keeping their traffic logically separated.",
  keyConcepts: ["VLAN", "802.1Q", "Trunk Link"],
  commonMistakes: [
    "Thinking VLANs require separate physical cables"
  ],
  followUpQuestions: [
    "Why are VLANs used in enterprise networks?"
  ],
  companies: ["Cisco", "Oracle"],
  tags: ["VLAN"],
  estimatedTime: 180,
},

{
  id: 27,
  subject: "cn",
  difficulty: "hard",
  question: "What happens when you enter a URL into a web browser?",
  idealAnswer:
    "The browser performs DNS resolution, establishes a TCP connection, completes a TLS handshake if HTTPS is used, sends an HTTP request, receives the response, and renders the webpage.",
  keyConcepts: ["DNS", "TCP", "TLS", "HTTP"],
  commonMistakes: [
    "Skipping DNS resolution or the TCP connection step"
  ],
  followUpQuestions: [
    "What additional step occurs when HTTPS is used?"
  ],
  companies: ["Google", "Meta"],
  tags: ["Application Layer"],
  estimatedTime: 240,
},

{
  id: 28,
  subject: "cn",
  difficulty: "hard",
  question: "Why does HTTPS use TLS instead of plain HTTP?",
  idealAnswer:
    "HTTPS uses TLS to encrypt communication, verify the server using digital certificates, and ensure confidentiality, integrity, and authentication of transmitted data.",
  keyConcepts: ["HTTPS", "TLS", "Encryption"],
  commonMistakes: [
    "Thinking HTTPS only encrypts passwords"
  ],
  followUpQuestions: [
    "What happens during the TLS handshake?"
  ],
  companies: ["Google", "Amazon"],
  tags: ["Security"],
  estimatedTime: 240,
},

{
  id: 29,
  subject: "cn",
  difficulty: "hard",
  question: "What are MTU and Path MTU Discovery (PMTUD)?",
  idealAnswer:
    "The Maximum Transmission Unit (MTU) is the largest packet that can be transmitted without fragmentation. Path MTU Discovery identifies the smallest MTU along the communication path to avoid fragmentation.",
  keyConcepts: ["MTU", "PMTUD", "Fragmentation"],
  commonMistakes: [
    "Thinking MTU is fixed across every network"
  ],
  followUpQuestions: [
    "Why does avoiding fragmentation improve performance?"
  ],
  companies: ["Cisco", "Microsoft"],
  tags: ["Network Layer"],
  estimatedTime: 180,
},

{
  id: 30,
  subject: "cn",
  difficulty: "hard",
  question: "What is the TCP Sliding Window? How does it improve throughput?",
  idealAnswer:
    "The TCP Sliding Window allows multiple packets to be transmitted before acknowledgments are received. As ACKs arrive, the window moves forward, improving bandwidth utilization and increasing throughput.",
  keyConcepts: ["Sliding Window", "ACK", "Flow Control"],
  commonMistakes: [
    "Thinking only one packet can be in transit at a time"
  ],
  followUpQuestions: [
    "How is the sliding window different from congestion control?"
  ],
  companies: ["Google", "Amazon", "Cisco"],
  tags: ["TCP", "Flow Control"],
  estimatedTime: 240,
},
];

export const cnResources = [
  {
    title: "Computer Networks Playlist",
    type: "YouTube",
    link: "https://www.youtube.com/@GateSmashers",
    description: "Complete CN playlist."
  },
  {
    title: "CN Notes",
    type: "Notes",
    link: "https://www.geeksforgeeks.org/computer-network-tutorials/",
    description: "Networking notes."
  }
];