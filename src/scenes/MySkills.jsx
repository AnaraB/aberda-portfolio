//import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skills from "../assets/skills-image.png";
import {
  techSkillsList,
  collaborationList,
  problemSolvingSkills,
} from "../portfolio";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <div className="h-0.5 w-1/3 bg-gradient-rainbow"></div>
          {/* <LineGradient width="w-1/3" /> */}
          {/* Quotes Section */}
          <div className="mt-10 space-y-7 text-lg leading-relaxed text-gray-700">
            <p className="relative italic text-xl font-light before:content-['“'] before:text-5xl before:text-red before:absolute before:-top-3 before:-left-6">
              The expert in anything was once a beginner.
              <span className="block mt-2 text-right text-sm font-semibold text-gray-500">
                — Helen Hayes
              </span>
            </p>

            <p className="relative italic text-xl font-light before:content-['“'] before:text-5xl before:text-red before:absolute before:-top-3 before:-left-6">
              Great things in business are never done by one person; they’re
              done by a team of people.
              <span className="block mt-2 text-right text-sm font-semibold text-gray-500">
                — Steve Jobs
              </span>
            </p>
          </div>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              //rectangular frame behind the img
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img alt="skills" className="z-10" src={skills} />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={skills} />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* Technical Skills */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Tech Tools
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <ul className="mt-3 mx-auto flex flex-wrap justify-center">
            {techSkillsList.map((skill, index) => (
              <li
                key={index}
                className="m-1 px-3 py-1 text-sm text-grey border-none hover:text-blue"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Collaboration */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Collaboration
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <ul className="mt-3 mx-auto flex flex-wrap justify-center">
            {collaborationList.map((skill, index) => (
              <li
                key={index}
                className="m-1 px-3 py-1 text-sm text-grey border-none hover:text-red"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
        {/* Problem-solving */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Problem solving
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <ul className="mt-3 mx-auto flex flex-wrap justify-center">
            {problemSolvingSkills.map((skill, index) => (
              <li
                key={index}
                className="m-1 px-2 py-1 text-sm text-grey border-none hover:text-yellow"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
