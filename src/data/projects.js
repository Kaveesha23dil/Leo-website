export const projects = [
  {
    id: 1,
    title: "Community Clean-Up Drive",
    description: "A comprehensive environmental initiative to clean and beautify our local community spaces.",
    shortDescription: "Environmental cleanup initiative for local community spaces",
    category: "Environment",
    date: "2024-03-15",
    status: "Completed",
    images: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop"
    ],
    details: {
      objective: "To clean and beautify local parks, streets, and public spaces while raising environmental awareness.",
      participants: 45,
      hoursContributed: 180,
      impact: "Cleaned 5 parks, collected 500kg of waste, planted 50 trees",
      challenges: "Weather conditions and coordinating large volunteer groups",
      outcomes: [
        "Improved community appearance and cleanliness",
        "Increased environmental awareness among participants",
        "Strengthened community bonds through collaborative effort",
        "Established ongoing maintenance partnerships with local authorities"
      ]
    }
  },
  {
    id: 2,
    title: "Youth Leadership Workshop",
    description: "Empowering young minds with essential leadership skills and opportunities for personal growth.",
    shortDescription: "Leadership development program for youth empowerment",
    category: "Education",
    date: "2024-02-20",
    status: "Completed",
    images: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
    ],
    details: {
      objective: "To develop leadership capabilities and confidence in young individuals aged 16-25.",
      participants: 30,
      hoursContributed: 120,
      impact: "Trained 30 youth leaders, conducted 8 workshop sessions",
      challenges: "Engaging diverse learning styles and maintaining consistent attendance",
      outcomes: [
        "Enhanced communication and public speaking skills",
        "Developed project management and team leadership abilities",
        "Created a network of young leaders in the community",
        "Launched 5 community projects led by workshop participants"
      ]
    }
  },
  {
    id: 3,
    title: "Food Distribution Program",
    description: "Addressing food insecurity by providing nutritious meals to underprivileged families.",
    shortDescription: "Nutrition support program for underprivileged communities",
    category: "Community Service",
    date: "2024-01-10",
    status: "Ongoing",
    images: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop"
    ],
    details: {
      objective: "To ensure no family in our community goes without proper nutrition.",
      participants: 25,
      hoursContributed: 300,
      impact: "Served 1,200 meals, reached 150 families monthly",
      challenges: "Food sourcing, storage logistics, and maintaining food safety standards",
      outcomes: [
        "Reduced food insecurity in targeted neighborhoods",
        "Built partnerships with local restaurants and grocery stores",
        "Created sustainable food donation network",
        "Provided nutrition education alongside meal distribution"
      ]
    }
  },
  {
    id: 4,
    title: "Digital Literacy Initiative",
    description: "Bridging the digital divide by teaching essential computer and internet skills to seniors.",
    shortDescription: "Technology education program for senior citizens",
    category: "Education",
    date: "2024-04-05",
    status: "Ongoing",
    images: [
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
    ],
    details: {
      objective: "To help seniors navigate the digital world and stay connected with family and services.",
      participants: 15,
      hoursContributed: 200,
      impact: "Trained 80 seniors, established 3 learning centers",
      challenges: "Varying skill levels, technology anxiety, and accessibility needs",
      outcomes: [
        "Improved digital confidence among senior participants",
        "Enhanced communication with family members",
        "Better access to online services and information",
        "Created intergenerational connections through teaching"
      ]
    }
  }
];

export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};