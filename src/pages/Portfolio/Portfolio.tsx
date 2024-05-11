import { Helmet } from "react-helmet-async";
import { AnimatedPage } from "../../components";
import "./Portfolio.scss";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <AnimatedPage>
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="See some of our latest projects" />
      </Helmet>
      <section className="portfolio-screen">
        <h1>Portfolio</h1>
        <motion.h2
          initial={{ opacity: 0, translateY: "100%" }}
          animate={{ opacity: 1, translateY: 0 }}
        >
          See some of our latest projects
        </motion.h2>
        <ul className="projects">
          <Project
            title="Solve-AI"
            type="Web Application"
            image="/Images/Alvesta-el.webp"
            i={0}
            inDev
          />
          <Project
            title="Railofy"
            type="Web Application"
            image="/Images/Volted.webp"
            i={1}
          />
          <Project
            title="Goodspace"
            type="Web Application"
            image="/Images/Volted.webp"
            i={1}
          />
          <Project
            title="Hunch"
            type="Web Application"
            image="/Images/Workflow.webp"
            i={2}
          />
        </ul>
      </section>
    </AnimatedPage>
  );
};

const Project = ({
  title,
  type,
  image,
  inDev,
  i,
}: {
  title: string;
  type: string;
  image: string;
  inDev?: boolean;
  i: number;
}) => {
  return (
    <li className="project">
      <motion.div
        className="image"
        initial={{ opacity: 0, translateY: "20%" }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.2 * (i + 1) }}
      >
        <img src={image} alt={title} />
      </motion.div>
      <div className="text">
        <motion.h4
          initial={{ opacity: 0, translateY: "100%" }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.2 * (i + 2) }}
        >
          {title}
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, translateY: "100%" }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.2 * (i + 3) }}
        >
          {type}
        </motion.p>
        {inDev && <span className="tag">Developing</span>}
      </div>
    </li>
  );
};

export default Portfolio;
