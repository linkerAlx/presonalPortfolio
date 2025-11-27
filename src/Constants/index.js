
export const Socials = [
  {
    name: "HOME",path: "/"
    
  },
  {
    name: "ABOUT",path: "/Aboutpg" 
    
  },
  {
    name: "SKILLS",path: "/Skillspg" 
    
  },
  {
    name: "SERVICES",path: "/Servicespg"
    
  },
  {
    name: "PROJECTS", path: "/Portfoliopg"
    
  },
  {
    name: "BLOG", path: "/Blogspg"
    
  },

  {
    name: "CONTACT-ME", path: "/Contactpg"
    
  },
  
];
export const slides = [
  { src: "/assets/photos/picture1.jpeg" }, // No need for `public/`
];
export const aboutDetails = [
  { label: "Name", value: "INEZA LINKER Arlene" },
  { label: "Age", value: "22" }, 
  { label: "Email", value: "inezalinkera@gmail.com" },
  { label: "Address", value: "Muhanga, Rwanda" },
];
export const skills = [
  {
    name: "HTML&Tailwind css",
    description: "Robust tools for crafting responsive and visually appealing web interfaces.",
    rating: 5, // Out of 5
  },
  {
    name: "Javascript",
    description: "Adding interactivity and functionality with JavaScript.",
    rating: 4,
  },
  {
    name: "Figma&Canva",
    description:"Innovative design tools for creating professional visuals and prototypes.",
    rating: 4,
  },
  {
    name: "React&Next js/express js",
    description: "Building dynamic and scalable applications with React and Next.js/express js.",
    rating: 4,
  },
  {
    name: "GIT&GITHUB",
    description: "Tracking and managing code efficiently with Git and GitHub.",
    rating: 4,
  },
  {
    name: "Microsoft project/jira/Agile",
    description: "A project management software used for planning, scheduling, and tracking progress.",
    rating: 4,
  },
   {
    name: "Helpdesk & Communication",
    description: "Using ticketing tools like Jira, Freshservice, and providing end-user support.",
    rating: 5,
  },
   {
    name: "Windows & macOS Support",
    description: "Troubleshooting and maintaining PCs, laptops, and macOS systems.",
    rating: 5,
  },
  {
    name: "Networking",
    description: "Configuring LAN/WAN, Wi-Fi, DHCP, DNS, and resolving connectivity issues.",
    rating: 4,
  },
];

export const services = [
  {
    photo: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    name: "Software  Development",
    description: "Building the web with clean code and innovative solutions.",
  },
  {
    photo:"https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg",
    name: "IT Support",
    description: "Crafting user-friendly and visually appealing digital experiences.",
  },
  {
    photo: "https://images.pexels.com/photos/8062365/pexels-photo-8062365.jpeg",
    name: " IT Project Management",
    description: "Managing projects for efficient execution and impactful outcomes.",
  },
 {
  photo: "https://images.pexels.com/photos/8062365/pexels-photo-8062365.jpeg",
  name: "Business Analysis",
  description: "Supported IT projects through requirements gathering, system design, and project coordination.",
}

];


export const cardData = [
  {
    image: { src: "/assets/photos/smartlink.jpeg" },  // <-- starts with /
    title: "E-Commerce Frontend",
    description: "Shaping the Future of Digital Interaction with Creativity.",
    liveProject: "https://smartlink-stationary.vercel.app/",
  },
  {
    image: { src: "/assets/photos/portfolio.jpeg" },  // <-- starts with /
    title: "Personal porfolio",
    description: "Shaping the Future of Digital Interaction with Creativity.",
    liveProject: "https://presonal-portfolio-zeta.vercel.app/",
  },
  {
    image: { src: "/assets/photos/portfolio.jpeg" },  // <-- starts with /
    title: "Personal porfolio ui/ux design",
    description: "Shaping the Future of Digital Interaction with Creativity.",
    liveProject: "https://www.figma.com/proto/CwzQ8IC4uRQwuwGrhwO0jd/linker-portfolio?node-id=6-2&starting-point-node-id=6%3A2&scaling=contain&content-scaling=fixed",
  },
  {
    image: { src: "/assets/photos/dashboard.jpeg" },  // <-- starts with /
    title: "Admin dashboard",
    description: "Shaping the Future of Digital Interaction with Creativity.",
    liveProject: "https://my-portfolio-smoky-ten-51.vercel.app",
  },
  {
    image: { src: "/assets/photos/client.jpeg" },  // <-- starts with /
    title: "saving management system",
    description: "client page for saving management system",
    liveProject: "https://my-portfolio-smoky-ten-51.vercel.app",
  },
  {
    image: { src: "/assets/photos/admin.jpeg" },
    title: "saving management system",
    description: "Admin page for saving management system",
    liveProject: "https://www.figma.com/design/CwzQ8IC4uRQwuwGrhwO0jd/linker-portfolio?node-id=6-2",
  },
  {
    image: { src: "/assets/photos/pic1.jpg" },
    title: "Scheduled Project",
    description: "Shaping the Future of Digital Interaction with Creativity.",
    liveProject: "https://drive.google.com/drive/folders/15SX7xtZFQ6m3RCMqaWpggLeHdBCPbxxN?usp=drive_link",
  },
];
export const blogsdata = [
  {
    image: { src: "/assets/photos/pic1.jpg" },  // <-- starts with /
    title: "WEB Development",
    description: "Shaping the Future of Digital Interaction with Creativity.",
  
  },
  {
    image: { src: "/assets/photos/pic1.jpg" },  // <-- starts with /
    title: "WEB Development",
    description: "Shaping the Future of Digital Interaction with Creativity.",
    
  },
  {
    image: { src: "/assets/photos/pic1.jpg" },  // <-- starts with /
    title: "WEB Development",
    description: "Shaping the Future of Digital Interaction with Creativity.",
   
  },
    {
    image: { src: "/assets/photos/pic1.jpg" },  // <-- starts with /
    title: "WEB Development",
    description: "Shaping the Future of Digital Interaction with Creativity.",
   
  },
];



export const footerConstants = {
  about: {
    title: "About Us",
    description:
      "Shaping the Future of Digital Interaction with Creativity.",
  },
  contact: {
    title: "Contact Us",
    details: [
      { label: "Phone:", value: "+250 783 653 531", href: "tel:+250783653531" },
      { label: "Email:", value: "inezalinkera@gmail.com", href: "mailto:inezalinkera@gmail.com" },
      { label: "Location:", value: "Muhanga, Rwanda" },
    ],
  },
  copyright: "© 2025 Ineza Linker Arlene. All Rights Reserved.",
};

export default footerConstants;







