import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Building2, User, Calendar, CheckCircle, Loader2 } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/projectsus.css";

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("ongoing");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const ongoingProjects = [
    {
      title: "Proposed Formulation Facility for Square Pharmaceuticals EPZ (Kenya) Limited",
      client: "Square Pharmaceuticals EPZ Kenya Ltd",
      consultant: "Symbion Kenya Ltd",
      works: "Pharmaceutical Warehouse, ancillary structures, Civil, Electrical & Mechanical Works",
      year: 2020,
      value: "455,700,000.00",
      status: "Ongoing",
    },
    {
      title: "Proposed Simplified Accommodation for Recruits at RTS Eldoret, Phase 1",
      client: "Ministry of Defence",
      consultant: "Defence Headquarters",
      works: "20 Accommodation Blocks, Instructor’s Office, Civil, Electrical & Mechanical Works",
      year: 2020,
      value: "550,437,230.00",
      status: "Ongoing",
    },
    {
      title: "Proposed KEMSA Modern Warehouse and Office Block, Embakasi Nairobi",
      client: "Kenya Medical Supplies Authority",
      consultant: "Maestro Architects Ltd",
      works: "Modern Pharmaceutical Warehouse, Civil, Electrical & Mechanical Works",
      year: 2020,
      value: "3,079,998,859.50",
      status: "Ongoing",
    },
    {
      title: "Proposed Paediatric Centre and Burns Management Centre for Kenyatta National Hospital",
      client: "Kenyatta National Hospital",
      consultant: "Skair Associates",
      works: "Paediatric Block and Burns Management Block, Civil, Electrical & Mechanical Works",
      year: 2021,
      value: "2,959,511,555.29",
      status: "Ongoing",
    },
  ];

  const completedProjects = [
    {
      title: "Proposed Kenya Industrial Park Incubation Centre, Likoni Road Nairobi – Phase I",
      client: "Kenya Industrial Estates Ltd",
      consultant: "Maestro Architects Ltd",
      works: "5 storey building, Civil, Electrical & Mechanical Works",
      year: 2020,
      value: "296,858,879.88",
      status: "Completed",
    },
    {
      title: "Proposed Development of National Intelligence Academy (NIA)",
      client: "National Intelligence Service (NIS)",
      consultant: "Ministry of Public Works",
      works: "Administration, accommodation blocks, dining, kitchen, canteen, repairs",
      year: 2017,
      value: "1,907,198,445.00",
      status: "Completed",
    },
  ];

  const renderProjects = (list) => (
    <section className="projects-grid">
      {list.map((project, index) => (
        <motion.div
          key={index}
          className="project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          <div className="project-content">
            <h3>{project.title}</h3>
            <p className="project-works">{project.works}</p>

            <div className="project-meta">
              <p><User size={16}/> <strong>Client:</strong> {project.client}</p>
              <p><Building2 size={16}/> <strong>Consultant:</strong> {project.consultant}</p>
              <p><Calendar size={16}/> <strong>Year:</strong> {project.year}</p>
              <p><strong>Value:</strong> Kshs {project.value}</p>
              <p className={`status ${project.status.toLowerCase()}`}>
                {project.status === "Ongoing" ? <Loader2 size={16}/> : <CheckCircle size={16}/>}
                {project.status}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="projects-hero">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="hero-content"
        >
          <h1>Our Projects</h1>
          <p>
            Delivering excellence in construction — from industrial to
            institutional, across Kenya.
          </p>
        </motion.div>
      </section>

      {/* Tabs */}
      <div className="projects-tabs">
        <button
          className={activeTab === "ongoing" ? "active" : ""}
          onClick={() => setActiveTab("ongoing")}
        >
          Ongoing Projects
        </button>
        <button
          className={activeTab === "completed" ? "active" : ""}
          onClick={() => setActiveTab("completed")}
        >
          Completed Projects
        </button>
      </div>

      {activeTab === "ongoing"
        ? renderProjects(ongoingProjects)
        : renderProjects(completedProjects)}

      <Footer />
    </>
  );
};

export default ProjectsPage;
