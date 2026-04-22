import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "My Portfolio",
    description: "A single-page website to showcase my professional projects and skills.",
    tech: "React, Bootstrap, React-Bootstrap, CSS",
    github: "https://github.com/Jamm1e",
    demo: "https://portfolio-jamm1e.netlify.app",
  },
  {
    title: "Full-Stack Finance Tracker",
    description: "A comprehensive financial tracking web application with a dashboard featuring data visualizations, CRUD operations for transactions and goals, powered by a Spring Boot REST API.",
    tech: "React, React-Bootstrap, Axios, Recharts, Spring Boot, Spring Data JPA, PostgreSQL",
    github: "https://github.com/Jamm1e/spring-boot-finance-tracker",
  },
  {
    title: "Finance Tracker — Scalable",
    description: "A production-ready financial tracker with secure auth, per-user data isolation, and AI-generated insights. Demonstrates a pivot from traditional backend to a modern serverless architecture.",
    tech: "React, Firebase Auth, Firestore, Node.js, Gemini API, Firebase Hosting, Render",
    demo: "https://finance-tracker-app-ee435.web.app",
  },
  {
    title: "Gemini Translator Bot",
    description: "A real-time multilingual translator chatbot built with Google Gemini API supporting multiple major world languages.",
    tech: "Python, Gemini API",
    github: "https://github.com/Jamm1e/AIIE_2025_Deliverables/blob/main/Trial_Translator_Gemini_Chatbot.ipynb",
  },
  {
    title: "Financial Microservice",
    description: "Integrated a RESTful incentives API with a backend transaction app using Spring Boot for JPMC's software engineering simulation.",
    tech: "Java, Spring Boot, REST API",
    github: "https://github.com/Jamm1e/forage-midas",
  },
  {
    title: "Flower Classification CNN",
    description: "A convolutional neural network that classifies flower species from images, built with TensorFlow and Keras.",
    tech: "Python, TensorFlow, Keras",
    github: "https://github.com/Jamm1e/AIIE_2025_Deliverables/blob/main/Flower_Species_project.ipynb",
  },
  {
    title: "In the Face of Catastrophe",
    description: "A website platform for a non-profit organization founded by Jennifer Rose Goldman and Caryn Hirshleifer, built as a community partner project.",
    tech: "HTML, CSS, Bootstrap 5, JavaScript, Canva",
    github: "https://github.com/Jamm1e/in_the_face_of_catastrophe",
    demo: "https://webpage.pace.edu/jm21459n/communityPartnerWesite/in_the_face_of_catastrophe/html",
  },
  {
    title: "Berg-Bot",
    description: "An interactive chatbot built to guide prospective college students through the application process.",
    tech: "Python",
    github: "https://github.com/Jamm1e/Berg-Bot",
  },
];

function Projects() {
  return (
    <section id="projects">
      <p className="section-label">What I've Built</p>
      <h2 className="section-heading">Projects</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
