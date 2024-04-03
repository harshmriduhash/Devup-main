import { Helmet } from "react-helmet-async";
import { AnimatedPage, RouterLink } from "../../components";
import "./Pricing.scss";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <AnimatedPage>
      <Helmet>
        <title>Pricing</title>
        <meta name="description" content="Check pricing" />
      </Helmet>
      <div className="pricing-screen">
        <div className="hero-text">
          <div className="left">
            <h1>Pricing</h1>
            <motion.h2
              initial={{ opacity: 0, translateX: "-100%" }}
              animate={{ opacity: 1, translateX: 0 }}
            >
              Our price packages on websites
            </motion.h2>
          </div>
          <div className="right">
            <motion.p
              initial={{ opacity: 0, translateY: "100%" }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.2 }}
            >
              Pricing here is just roughly estimate, as per the projects.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, translateY: "100%" }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.4 }}
            >
              For a better estimate of price,{" "}
              <RouterLink to="/contact" variant="link" arrow>
                Contact Us
              </RouterLink>
            </motion.p>
          </div>
        </div>
        <div className="packages">
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.2 }}
            className="package"
          >
            <span className="tag">MVP</span>
            <span className="from">From</span>
            <span className="price">$1999</span>
            <ul>
              <li>Limited pages</li>
              <li>Responsive Design</li>
              <li>Login/Sign-up Forms</li>
              <li>Frontend/Backend</li>
              <li>User-Authentications</li>
              <li>Admin Dashboard</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.4 }}
            className="package"
          >
            <span className="tag">WebApp Development</span>
            <span className="from">From</span>
            <span className="price">$3500</span>
            <ul>
              <li>Unlimited Pages</li>
              <li>Frontend/Backend</li>
              <li>API Integration</li>
              <li>SEO</li>
              <li>Authentication</li>
              <li>Cloud Deployment</li>
              <li>Payment Gateways</li>
              <li>Social Logins</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.6 }}
            className="package"
          >
            <span className="tag">Mobile App Development</span>
            <span className="from">From</span>
            <span className="price">$4999</span>
            <ul>
              <li>Unlimited Pages</li>
              <li>Frontend/Backend</li>
              <li>iOS/Android</li>
              <li>Play/App Store Deployment</li>
              <li>Payment Gateways</li>
              <li>Real-time data processing</li>
              <li>Push Notifications</li>
              <li>OTP Logins</li>
            </ul>
          </motion.div>
        </div>
        <div className="lower-text">
          <h2>Are you also looking for More functionality?</h2>
          <p>
          We also offer development of AI Automations, Low/No code
          </p>
        </div>
        <div className="packages">
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.2 }}
            className="package"
          >
            <span className="tag">Basic</span>
            <span className="from">From</span>
            <span className="price">2599$</span>
            <ul>
              <li>MVP Development</li>
              <li>Basic Functionality</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.4 }}
            className="package"
          >
            <span className="tag">Standard</span>
            <span className="from">From</span>
            <span className="price">$3999</span>
            <ul>
              <li>Responsive Design</li>
              <li>User-Authentications</li>
              <li>Push-notifications</li>
              <li>Databases</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.6 }}
            className="package"
          >
            <span className="tag">Premium</span>
            <span className="from">From</span>
            <span className="price">$5999</span>
            <ul>
              <li>Responsive Design</li>
              <li>User Authentication</li>
              <li>Push-notifications</li>
              <li>Databases</li>
              <li>Real-time data processing</li>
              <li>Tredjeparts-API:er</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Pricing;