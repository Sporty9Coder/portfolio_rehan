import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Rehan Bansal",
  initials: "RV",
  url: "https://dillion.io",
  location: "Punjab, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Computer Engineering Student at Thapar Institute of Engineering and Technology, patiala. MERN developer. Fond of solving DSA problems. Proficient in Java, Javafx.",
  summary:
    "Persuing B.Tech in Computer Engineering. I like to develop websites and work on interesting project ideas with my knowledge of full stack development. Solving problems on competitive platforms like LeetCode, GeeksForGeeks is always a new experience. I have interest in latest technologies like ML, AI and want to explore their immense impact on the upcoming technology future.",
  avatarUrl: "./resume_photo.jpg",
  skills: [
    "DSA",
    "Java",
    "Javafx",
    "ReactJS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "C++",
    "Python"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "bansalrehan731@gmail.com",
    tel: "+91 62391-79577",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Sporty9Coder",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rehan-bansal-01b1b2285",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  /*work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],*/
  education: [
    /*{
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },*/
    {
      school: "Thapar Institute of Engineering and Technology, patiala",
      href: "https://www.thapar.edu/",
      degree: "Bachelor of Engineering (BE)",
      logoUrl: "/thapar.jpg",
      start: "2022",
      end: "2026",
    }
  ],
  projects: [
    {
      title: "G2C",
      href: "https://g2c.vercel.app/",
      dates: "Feb 2024 - March 2024",
      active: true,
      description:
        "Developed a full-stack web application using the MERN stack, featuring JWT token-based authentication for secure user access. The platform allows growers to register, create profiles, and manage their listings. The user-friendly interface, designed with Tailwind CSS, facilitates seamless sign-up and item browsing based on user preferences and location.",
      technologies: [
        "Javascript",
        "ReactJS",
        "Axios",
        "TailwindCSS",
        "MongoDB",
        "Node.js",
        "Express.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://g2c.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:"/g2cimg.png",
      video:
        "",
    },
    {
      title: "HelpRx",
      href: "https://github.com/Sporty9Coder/Web_project",
      dates: "June 2023 - July 2023",
      active: true,
      description:
        "Built using AngularJS, jQuery, and MySQL, this website enables seamless donation of unused medicines to those in need. It features an admin panel for efficient management of donations and users. Interactive search functionalities allow users to easily find required medicines, while personalized user profiles track donation history and preferences, enhancing user engagement and impact.",
      technologies: [
        "Javascript",
        "AngularJS",
        "Bootstrap",
        "jQuery",
        "AJAX",
        "MySQL",
        "Node.js"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Sporty9Coder/Web_project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:"/helprx.png",
      video: "",
    }
  ],
  hackathons: [
    {
      title: "HackMOL 5.0",
      dates: "February 24th - 25th, 2024",
      location: "Jalandhar, Punjab",
      description:
        "Developed a web application that supports high school and college students to clear their backlogs by structuring their course as per predefined milestones and not unlocking further modules.",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_360,q_100,w_1140/v1/gcs/platform-data-dsc/chapter_banners/DSC%20NIT%20Jalandhar%20Light%20Vertical-Logo_uS1KAby.png"
    }
  ],
} as const;
