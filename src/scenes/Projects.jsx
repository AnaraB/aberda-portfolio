import { motion } from "framer-motion";
import { projects } from "../portfolio";
import Project from "../components/Project";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
   const isAbove1020px = useMediaQuery("(min-width: 1020px) and (max-width: 1836px)");

  return (
  
    <section id="projects" className="mt-30 pb-10">
       {isAbove1020px && <LineGradient pt="pt-40" />} 
      {/* HEADINGS */}

      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="pt-20">
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <div className="h-1 w-2/3 sm:w-1/3 bg-gradient-rainbow"></div>
          </div>
        </div>

        <p className="mt-10 mb-10">
          Here’s a collection of projects showcasing my journey as a frontend
          web developer—from building React-based UIs to developing full-stack
          applications with authentication and API integrations. Take a look at
          my other portfolio projects,explore live demos and source code below!
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 - Static Content */}
          <div className="flex justify-center text-center items-center p-10  bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            MOBILE RESPONSIVE
          </div>

          {projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              image={project.image}
              stack={project.stack}
              sourceCode={project.sourceCode}
              livePreview={project.livePreview}
            />
          ))}

          {/* ROW 3 - Static Content */}
          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
