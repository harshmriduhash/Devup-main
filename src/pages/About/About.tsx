import { AnimatedPage, RouterLink } from "../../components";
import "./About.scss";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <AnimatedPage>
      <Helmet>
        <title>About us</title>
        <meta
          name="description"
          content="Modern day Development Company"
        />
      </Helmet>
      <div className="about-screen">
        <div className="hero">
          <h1></h1>
          <motion.h2
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: 0 }}
          >
            We are ShreeGan-AI solutions 
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.2 }}
          >
            We are modern day software development agency that strives to provide
            innovative solutions to help startups and young entrepreneur build a
            strong online presence. Our goal is to provide our clients with high
            quality work that is tailored to their individual needs and goals..
          </motion.p>
        </div>
        <div className="about">
          <motion.div
            className="member"
            initial={{ opacity: 0, translateX: "-100%" }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3>Harsh</h3>
            <p>CEO/Developer</p>
          </motion.div>
          <div className="text">
            <motion.h2
              initial={{ opacity: 0, translateY: "100%" }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.4 }}
            >
              About me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, translateY: "100%" }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.6 }}
            >
              committed to providing the best possible service and to
              ensure that our partners are satisfied with our work. With my
              expertise in web development and design, I am confident that I can
              help your company reach its goals on a strong and successful
              online platform.
            </motion.p>
          </div>
        </div>
        <div className="contact">
          <h2>Contact us</h2>
          <p>
            Always open to new projects and collaborations. If you are
            interested in working with us, please do not hesitate to contact us.
          </p>
          <RouterLink to="/contact" variant="primary">
            Contact Us
          </RouterLink>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
