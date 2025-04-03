import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <div className="h-0.5 w-2/5 mx-auto bg-gradient-rainbow"></div>
        <p className="mt-10">
          Here's What People are Saying About My Work. See full recommendation
          feedbacks on my LinkedIn profile.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
           before:absolute before:top-[-120px] sm:before:top-[-90px] before:-ml-[110px] before:left-1/2 before:rounded-full before:bg-cover before:bg-center before:w-[220px] before:h-[220px]  before:bg-[url('/person-1.jpeg')]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-l md:text-sm">
            Aygerim has been working extensively with APIs, databases, React,
            TypeScript, and GraphQL, showcasing remarkable skill and
            adaptability. Her work ethic, productivity, and leadership abilities
            have been exceptional
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] sm:before:top-[-90px] before:-ml-[110px] before:left-1/2 before:rounded-full before:bg-cover before:bg-center before:w-[220px] before:h-[220px]  before:bg-[url('/person-2.jpeg')]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-l md:text-sm">
            Beyond her technical capabilities, Aygerim consistently brought a
            positive attitude to the team. She tackled challenges head-on and
            contributed immensely to the success of our project.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
         before:absolute before:top-[-120px] sm:before:top-[-90px]  before:-ml-[110px] before:left-1/2 before:rounded-full before:bg-cover before:bg-center before:w-[220px] before:h-[220px]  before:bg-[url('/person-3.jpeg')]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-l md:text-sm">
            Aygerim’s commitment and problem-solving abilities ensured that the
            project was completed on time and to a high standard. Her capability
            to bridge the front and back end made her an invaluable asset to our
            team
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
