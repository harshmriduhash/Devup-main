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
          content="Vi är DevUp. Vi är ett företag som erbjuder tjänster inom webbdesign, webbutveckling och mobilapplikationer."
        />
      </Helmet>
      <div className="about-screen">
        <div className="hero">
          <h1></h1>
          <motion.h2
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: 0 }}
          >
            Hey, We are 10k solutions 
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.2 }}
          >
            We are a solo web development agency that strives to provide
            innovative solutions to help businesses and organizations build a
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
            <img src="/Images/me.JPG" alt="Bild på medlem" />
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
              I am committed to providing the best possible service and to
              ensure that my clients are satisfied with my work. With my
              expertise in web development and design, I am confident that I can
              help your company reach its goals on a strong and successful
              online platform.
            </motion.p>
          </div>
        </div>
        <div className="contact">
          <h2>Contact us</h2>
          <p>
            We are always open to new projects and collaborations. If you are
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
