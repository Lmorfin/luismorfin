import * as React from "react";
import "../styles/experience.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const isHorizontal = window.innerWidth < 768;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`experience-tabpanel-${index}`}
      aria-labelledby={`experience-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `experience-tab-${index}`,
    "aria-controls": `experience-tabpanel-${index}`,
  };
}

const Experience = () => {
  const [value, setValue] = React.useState(0);

  const experience = {
    "Photo USA Corp": {
      jobTitle: "Software Engineer",
      duration: "Nov 2022 - Present",
      desc: [
        "Resolved 75% of reported bugs within 48 hours, resulting in a 20% reduction in customer support tickets and improved user experience on a high-traffic B2B e-commerce platform.",
        "Architected and implemented a seamless Etsy integration using Ruby on Rails, boosting customer engagement by 30% and accelerating order fulfillment by 40%, driving revenue growth and operational efficiency.",
        "Engineered an automated order processing system handling hundreds of daily transactions, slashing manual input by 70% and significantly improving client satisfaction through streamlined operations.",
        "Deployed features by leveraging Amazon Web Services (AWS), utilizing AWS S3 for efficient frontend asset management and EC2 for robust backend infrastructure.",
      ],
    },
    "(MESA) Mission College": {
      jobTitle: "Math and Java Tutor",
      duration: "Aug 2022 - Nov 2022",
      desc: [
        "Empowered first-generation, low-income community college students by providing personalized tutoring in Java programming and advanced mathematics (Algebra through Calculus 2), fostering academic success and career readiness.",
        "Developed and delivered engaging lesson plans and facilitated weekly workshops in Pre-Calculus and Calculus 1, equipping students with effective study strategies and significantly improving their mathematical proficiency.",
      ],
    },
    Inkfluencer: {
      jobTitle: "Frontend Developer",
      duration: "June 2022 - Nov 2022",
      desc: [
        "Transformed design wireframes into reusable React components.",
        "Implemented the Chakra UI component library, ensuring a cohesive and visually engaging user interface throughout the application, enhancing user experience and brand consistency.",
        "Thrived in a fast-paced, agile development environment, collaborating effectively with cross-functional teams (designers, developers) using Git for version control and Figma for seamless design-to-development workflows.",
      ],
    },
    "Mission College": {
      jobTitle: "Research Assistant",
      duration: "Jul 2020 - Sept 2020",
      desc: [
        "Created an immersive 3D educational game using the powerful Unity Game Engine to educate students about the fascinating field of wind power engineering based on an intro to engineering course lab.",
        "Implemented interactive C# scripts to enable seamless button pressing and engaging game interactions.",
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="divider"></div>

      <div className="experience-container">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="experience tabs"
          sx={{
            "& .MuiTabs-scrollButtons": {
              color: "var(--color-primary)",
            },
          }}
        >
          {Object.keys(experience).map((key, i) => (
            <Tab
              key={i}
              label={key}
              {...a11yProps(i)}
              className="experience-fade-in"
            />
          ))}
        </Tabs>

        {Object.keys(experience).map((key, i) => (
          <TabPanel value={value} index={i} key={i}>
            <div className="job-content">
              <div className="job-header">
                <h3 className="job-title">{experience[key]["jobTitle"]}</h3>
                <h4 className="job-company">@ {key}</h4>
                <p className="job-duration">{experience[key]["duration"]}</p>
              </div>
              <ul className="job-desc">
                {experience[key]["desc"].map(function (item, i) {
                  return <li key={i}>{item}</li>;
                })}
              </ul>
            </div>
          </TabPanel>
        ))}
      </div>
    </section>
  );
};

export default Experience;
