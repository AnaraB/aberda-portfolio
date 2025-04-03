import { motion } from "framer-motion";

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};


const Project = ({ name, image, stack, sourceCode, livePreview }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative group">
      {/* Image and Overlay */}
      <div className="relative w-full h-full">
        {/* Overlay (appears on hover) */}
        <div
          className={overlayStyles}
        >
          <h3 className="text-xl font-playfair mb-4">{name}</h3>
          
          {/* Stack */}
          <div className="flex flex-wrap justify-center mb-3">
            {stack.map((tech, i) => (
              <span key={i} className="bg-gray-300 text-xs text-gray-900 px-2 py-1 rounded-md mr-2 mb-2">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex space-x-4">
            <a href={livePreview} target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">
              Live Preview
            </a>
            <a href={sourceCode} target="_blank" rel="noopener noreferrer" className="text-red hover:underline">
              Source Code
            </a>
          </div>
        </div>

        {/* Project Image */}
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default Project