//import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { projects } from "../portfolio";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ name, image }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  // const projectTitle = name.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className="w-full h-full flex items-center justify-center">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{name}</p>
          <p className="mt-7">
            Take a look at my projects that were build with React.js and Node.js
          </p>
        </div>
        <img src={image} alt={name} />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
  
    <section id="projects" className="pt-48 pb-48">
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
        <div>
          <p className="font-playfair font-semibold text-4xl">
         
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <div className="h-1 w-2/3 bg-gradient-rainbow"></div>
            {/* <LineGradient width="w-2/3" /> */}
          </div>
        </div>
        <p className="mt-10 mb-10">
         Take a look at my React.js projects. 
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
            BEAUTIFUL USER INTERFACES
          </div>

          {/* Dynamically Render Projects */}
          {projects.map((project, index) => (
            <Project key={index} title={project.name} image={project.image} />
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


