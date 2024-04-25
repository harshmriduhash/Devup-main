import { useEffect, useRef, useState } from "react";
import {
  AnimatedPage,
  Button,
  Checkmark,
  Clock,
  RouterLink,
  Sliders,
} from "../../components";
import "./Home.scss";
import {
  MdDesignServices,
  MdCode,
  MdDeveloperMode,
  MdChevronRight,
  MdChevronLeft,
} from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { VisibleControls } from "../../hooks";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <AnimatedPage>
      <Helmet>
        <title>AI Solutions</title>
        <meta name="description" content="New age development company" />
      </Helmet>
      <div className="home-screen">
        <Hero />
        <Help />
        <Services />
        <WhyUs />
        <Portfolio />
        <Testimony />
        <Pricing />
        <Contact />
      </div>
    </AnimatedPage>
  );
};

const Hero = () => {
  const blob = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.body.addEventListener("mousemove", (e) => {
      if (blob.current === null) return;

      blob.current.animate(
        {
          left: `${e.pageX}px`,
          top: `${Math.min(
            e.pageY + document.body.scrollTop,
            screen.height
          )}px`,
        },
        { duration: 3000, easing: "ease-in-out", fill: "forwards" }
      );
    });
  }, []);

  return (
    <section className="hero">
      <div ref={blob} className="mouse-follow"></div>
      <div className="animated-blob"></div>
      <h1>
        <motion.div
          initial={{ translateY: "100%", opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
        >
          Discover the new
        </motion.div>
        <motion.div
          initial={{ translateY: "100%", opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          generation of
        </motion.div>
        <motion.div
          initial={{ translateY: "100%", opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Software Development
        </motion.div>
      </h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, damping: 1 }}
      >
        We want to work with startups to become their go to technology partner
      </motion.p>
      <motion.div
        initial={{ translateY: "200%", opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <RouterLink variant="primary" to="/contact" className="pulsating">
          Contact us
        </RouterLink>
      </motion.div>
    </section>
  );
};

const Help = () => {
  const ref = useRef<HTMLElement>(null);
  const controls = VisibleControls(ref);
  return (
    <section ref={ref} className="help">
      <motion.h2
        animate={controls}
        transition={{ delay: 0.2 }}
        variants={{
          visible: { opacity: 1, translateX: 0 },
          hidden: { opacity: 0, translateX: "-50%" },
        }}
      >
        We helps young startups and Entrepreneur with their digital presence
      </motion.h2>
      <div className="bottom">
        <motion.p
          animate={controls}
          transition={{ delay: 0.5, damping: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          We use the power of AI and no-code to develop unmatched user
          experiences. We can build an entire product for you in 40% reduced
          time. We are hyper-focused on creating best class scalable applications, optimized
          for the best possible user experience and product. We're the
          all-in-one solution for startups, young Entrepreneur and corporations looking to
          rapidly develop, and then launch with our support.{" "}
        </motion.p>
        <RouterLink variant="link" to="/about" arrow>
          Read more about us
        </RouterLink>
      </div>
    </section>
  );
};

const Services = () => {
  const ref = useRef<HTMLUListElement>(null);
  const controls = VisibleControls(ref);
  const [serviceIndex, setServiceIndex] = useState(0);
  useEffect(() => {
    if (ref.current === null || ref.current.children?.length === 0) return;

    ref.current.scrollTo({
      left: ref.current.children[0].clientWidth * serviceIndex,
      behavior: "smooth",
    });
  }, [serviceIndex]);
  return (
    <section className="services" id="services">
      <div className="text">
        <h2>Our services</h2>
        <h3>
          Streamline your business
          <br /> through our services
        </h3>
      </div>
      <ul className="options">
        <li className="option">
          <Button
            variant="choice"
            className={serviceIndex === 0 ? "active" : ""}
            onClick={() => setServiceIndex(0)}
          >
            Web-App Development
          </Button>
        </li>
        <li className="option">
          <Button
            variant="choice"
            className={serviceIndex === 1 ? "active" : ""}
            onClick={() => setServiceIndex(1)}
          >
            Mobile App development
          </Button>
        </li>
        <li className="option">
          <Button
            variant="choice"
            className={serviceIndex === 2 ? "active" : ""}
            onClick={() => setServiceIndex(2)}
          >
            Low/No-code
          </Button>
        </li>
        <li className="buttons">
          <button
            aria-label="Previous service"
            disabled={serviceIndex <= 0}
            onClick={() => setServiceIndex((index) => index - 1)}
          >
            <MdChevronLeft />
          </button>
          <button
            aria-label="Next service"
            disabled={serviceIndex >= 2}
            onClick={() => setServiceIndex((index) => index + 1)}
          >
            <MdChevronRight />
          </button>
        </li>
      </ul>
      <ul ref={ref ? ref : null} className="cards">
        <motion.li
          className="card"
          animate={controls}
          transition={{ delay: 0.2 }}
          variants={{
            visible: { opacity: 1, scaleX: 1 },
            hidden: { opacity: 0, scaleX: 0 },
          }}
        >
          <div className="top">
            <div className="icon">
              <MdDesignServices />
            </div>
            <h4>Web app Development</h4>
          </div>
          <p>
            We develop powerful Web-App that meet your unique needs.
            Our team of experienced developers can create everything from simple
            websites to advanced platforms, focusing on performance, reliability
            and scalability.
          </p>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React.js/Node.js/Next.js</li>
            <li>Cloud Hosting</li>
            <li>Testing</li>
          </ul>
        </motion.li>
        <motion.li
          className="card"
          animate={controls}
          transition={{ delay: 0.4 }}
          variants={{
            visible: { opacity: 1, scaleX: 1 },
            hidden: { opacity: 0, scaleX: 0 },
          }}
        >
          <div className="top">
            <div className="icon">
              <MdCode />
            </div>
            <h4>App Development</h4>
          </div>
          <p>
            We create custom mobile Apps for both Android and iOS
            devices. Our team of app developers can create everything from
            simple apps to more complex platforms with real-time data processing
            and integration with third-party APIs.
          </p>
          <ul>
            <li>Frontend</li>
            <li>Backend</li>
            <li>Android & iOS</li>
            <li>Databases</li>
            <li>App/Play store</li>
          </ul>
        </motion.li>
        <motion.li
          className="card"
          animate={controls}
          transition={{ delay: 0.6 }}
          variants={{
            visible: { opacity: 1, scaleX: 1 },
            hidden: { opacity: 0, scaleX: 0 },
          }}
        >
          <div className="top">
            <div className="icon">
              <MdDeveloperMode />
            </div>
            <h4>Low/No code Development</h4>
          </div>
          <p>
            We help companies build custom chat-bots and help them in AI
            automation. We also cater Low/No code development to fast track
            companies process of building products & speeding their
            development process
          </p>
          <ul>
            <li>Bubble</li>
            <li>Locofy</li>
            <li>Cardd</li>
            <li>Database</li>
            <li>Webflow</li>
            <li>Flutterflow</li>
          </ul>
        </motion.li>
      </ul>
    </section>
  );
};

const WhyUs = () => {
  const topRef = useRef<HTMLElement>(null);
  const topControls = VisibleControls(topRef);
  const midRef = useRef<HTMLDivElement>(null);
  const midControls = VisibleControls(midRef);
  const bottomRef = useRef<HTMLDivElement>(null);
  const bottomControls = VisibleControls(bottomRef);

  return (
    <section ref={topRef} className="whyus">
      <motion.h2
        animate={topControls}
        transition={{ delay: 0.2 }}
        variants={{
          visible: { opacity: 1, translateY: 0 },
          hidden: { opacity: 0, translateY: "100%" },
        }}
      >
        Simply better - you'll
        <br /> never want to go back.
      </motion.h2>
      <motion.p
        animate={topControls}
        transition={{ delay: 0.5 }}
        variants={{
          visible: { opacity: 1, translateY: 0 },
          hidden: { opacity: 0, translateY: "100%" },
        }}
      >
        We are here to
        <br /> get high-quality result that exceed your expectations.
      </motion.p>
      <div ref={midRef} className="grid">
        <div className="item">
          <motion.div
            animate={midControls}
            transition={{ delay: 0.2 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: "100%" },
            }}
          >
            <Clock />
          </motion.div>
          <motion.h3
            animate={midControls}
            transition={{ delay: 0.4 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: "100%" },
            }}
          >
            Faster
          </motion.h3>
          <motion.p
            animate={midControls}
            transition={{ delay: 0.6 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: "100%" },
            }}
          >
            We work efficiently to deliver high quality projects on time, in few
            weeks on average.
          </motion.p>
        </div>
        <div className="item">
          <motion.div
            animate={midControls}
            transition={{ delay: 0.2 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: "100%" },
            }}
          >
            <Checkmark />
          </motion.div>
          <motion.h3
            animate={midControls}
            transition={{ delay: 0.6 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: "100%" },
            }}
          >
            Quality
          </motion.h3>
          <motion.p
            animate={midControls}
            transition={{ delay: 0.8 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: "100%" },
            }}
          >
            We maintain high standards in our work by using best practices and
            quality tools.
          </motion.p>
        </div>
        <div className="item">
          <motion.div
            animate={midControls}
            transition={{ delay: 0.2 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: "100%" },
            }}
          >
            <Sliders />
          </motion.div>
          <motion.h3
            animate={midControls}
            transition={{ delay: 0.8 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: "100%" },
            }}
          >
            Adaptability
          </motion.h3>
          <motion.p
            animate={midControls}
            transition={{ delay: 1 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: "100%" },
            }}
          >
            We work with different technologies and platforms to meet your
            specific needs.
          </motion.p>
        </div>
      </div>
      <div ref={bottomRef} className="next-step">
        <motion.h3
          animate={bottomControls}
          transition={{ delay: 0.8 }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: "100%" },
          }}
        >
          Ready to take the next step?
        </motion.h3>
        <motion.div
          animate={bottomControls}
          transition={{ delay: 1 }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: "100%" },
          }}
        >
          <RouterLink to="/contact" variant="white">
            Contact Us
          </RouterLink>
        </motion.div>
      </div>
    </section>
  );
};

const Testimony = () => {
  const ref = useRef(null);
  const controls = VisibleControls(ref);
  return (
    <section ref={ref} className="testimony">
      <motion.div
        animate={controls}
        transition={{ delay: 0.2 }}
        variants={{
          visible: { opacity: 1, translateY: 0 },
          hidden: { opacity: 0, translateY: "100%" },
        }}
      >
        <RiDoubleQuotesL className="icon" />
      </motion.div>
      <motion.span
        animate={controls}
        transition={{ delay: 0.4 }}
        variants={{
          visible: { opacity: 1, translateY: 0 },
          hidden: { opacity: 0, translateY: "100%" },
        }}
        className="quote"
      >
        Harsh is by far the best in his tech space. Delivered everything on
        time, word by word. Worth every penny
      </motion.span>
      <motion.span
        animate={controls}
        transition={{ delay: 0.6 }}
        variants={{
          visible: { opacity: 1, translateY: 0 },
          hidden: { opacity: 0, translateY: "100%" },
        }}
        className="author"
      >
        - Vikram
      </motion.span>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <h3>Some of our projects</h3>
      <ul className="projects">
        <Project image="/Images/Alvesta-el.webp" i={0} />
        <Project image="/Images/Volted.webp" i={1} />
      </ul>
      <RouterLink to="/portfolio" variant="link" arrow>
        See more projects
      </RouterLink>
    </section>
  );
};

const Project = ({ image, i }: { image: string; i: number }) => {
  const ref = useRef(null);
  const controls = VisibleControls(ref);
  return (
    <motion.li
      ref={ref}
      className="project"
      animate={controls}
      transition={{ delay: 0.2 * (i + 1) }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: "20%" },
      }}
    >
      <Link to="/portfolio">
        <img src={image} alt="" />
      </Link>
    </motion.li>
  );
};

const Pricing = () => {
  const ref = useRef(null);
  const controls = VisibleControls(ref);
  return (
    <section className="pricing" id="pricing">
      <div className="left">
        <h2>Pricing</h2>
        <motion.h3
          animate={controls}
          transition={{ delay: 0.2 }}
          variants={{
            visible: { opacity: 1, translateX: 0 },
            hidden: { opacity: 0, translateX: "-100%" },
          }}
        >
          Get a responsive website for only $1999
        </motion.h3>
        <RouterLink variant="link" to="/pricing" arrow>
          See all packages
        </RouterLink>
      </div>
      <div className="right">
        <Link to="/pricing">
          <motion.div
            className="package"
            ref={ref}
            animate={controls}
            transition={{ delay: 0.4 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: "100%" },
            }}
          >
            <span className="tag">MVP Development</span>
            <span className="from">From</span>
            <span className="price">$1999</span>
            <ul>
              <li>Limited Pages</li>
              <li>Responsive Design</li>
              <li>Working Prototype</li>
              <li>Source code</li>
            </ul>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

const Contact = () => {
  const ref = useRef(null);
  const controls = VisibleControls(ref);

  return (
    <section ref={ref} className="contact" id="contact">
      <h2>Contact us </h2>
      <h3>
        <motion.div
          animate={controls}
          transition={{ delay: 0.2 }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: "200%" },
          }}
        >
          Interested?
        </motion.div>
        <motion.div
          animate={controls}
          transition={{ delay: 0.4 }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: "200%" },
          }}
        >
          Send a Message
        </motion.div>
      </h3>
      <motion.div
        animate={controls}
        transition={{ delay: 1 }}
        variants={{
          visible: { opacity: 1, translateY: 0 },
          hidden: { opacity: 0, translateY: "200%" },
        }}
      >
        <RouterLink variant="primary" to="/contact" className="pulsating">
          Contact Us
        </RouterLink>
      </motion.div>
    </section>
  );
};

export default Home;