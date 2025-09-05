import VidSpectra from "../images/VidSpectra.png";
import FarmDisease from "../images/Farm.png"; 
import EazyCart from "../images/eazyCartes_home.png"; 
import Product_Classification from "../images/Product_Classification.png";
import NutriGuide_AI from "../images/NutriGuide_AI.png";
import ToDoWave from "../images/TodoWave.png";
import ShipTrack from "../images/ShipTrack.png"; // Add the image for the new project

export const projects = [
  {
    id: 1,
    title: "VidSpectra: Comment Insight Analyzer",
    date: "May-2025",
    category: "AI, NLP & Web App",
    image: VidSpectra,
    description:
      "A multilingual web app that analyzes YouTube comments to extract viewer sentiments, spam filtering, and content demands using NLP. Built with React, Tailwind CSS, AdonisJS, and a Python NLP microservice.",
    github: "https://github.com/namansingla-coder/VidSpectra.git",
    live: "#"
  },
  {
    id: 2,
    title: "Farm Animal Disease Detection",
    date: "March-2025",
    category: "AI & Computer Vision",
    image: FarmDisease,
    description:
      "Developed an AI-powered deep learning system to detect poultry, potato, and crop diseases using CNN. It is integrated them into a Streamlit web app for real-time image-based diagnosis.",
    github: "https://github.com/namansingla-coder/farm-detection.git",
    live: "https://farm-detection.streamlit.app"
  },
  {
    id: 3,
    title: "ShipTrack: Smart Shipment Management System",
    date: "June-2025",
    category: "Logistics & Web Application",
    image: ShipTrack,
    description:
      "A full-featured shipment management web app where users can create and track shipments in real-time with unique tracking IDs. It supports UPI payments via QR, dynamic pricing based on package specs, and real-time status updates. The admin panel includes shipment control, user management, and payment verification. A modern Firebase + React.js build with glassmorphism UI, mobile-first layout, dashboards with analytics, and smooth animations.",
    github: "https://github.com/namansingla-coder/Shipment-Delivery-Application.git", // update this if available
    live: "https://shipment-delivery-application.netlify.app" // add live URL if deployed
  },
  {
    id: 4,
    title: "Eazy Carters",
    date: "July-2024",
    category: "Ecommerce",
    image: EazyCart,
    description:
      "An e-commerce website project where users can browse, select, and purchase products seamlessly. Includes product catalogs, shopping carts, and payment gateways.",
    github: "https://github.com/namansingla-coder/quick_carter",
    live: "https://eazycarters.netlify.app"
  },
  {
    id: 5,
    title: "NutriGuide AI",
    date: "Jan-2024",
    category: "Deep Learning",
    image: NutriGuide_AI,
    description:
      "A deep learning-based system for product classification and expiry date detection in the food industry, optimizing inventory management and quality control.",
    github: "https://github.com/gyash1512/NutriQ",
    live: "#"
  },
  {
    id: 6,
    title: "Product Classification & Expiry Date Detection",
    date: "Nov-2024",
    category: "AI & Computer Vision",
    image: Product_Classification,
    description:
      "Developed a deep learning model for automated product categorization and expiry date recognition. Achieved 95% classification accuracy and 92% OCR accuracy.",
    github: "#",
    live: "#"
  },
  {
    id: 7,
    title: "ToDo Wave",
    date: "April-2025",
    category: "Productivity",
    image: ToDoWave,
    description:
      "A simple yet efficient To-Do List application designed for task management. Features include task prioritization, deadline reminders, and real-time synchronization across devices for enhanced productivity.",
    github: "https://github.com/namansingla-coder/TodoWave.git",
    live: "https://todo-wave.netlify.app/"
  }
];