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

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
    };
  }
}

const Experience = () => {
  const [value, setValue] = React.useState(0);

  const experience = {
    "Photo USA Corp": {
      jobTitle: "Software Engineer",
      duration: "Nov 2022 - Present",
      desc: [
        "Proactively addressed and resolved reported bugs on a B2B e-commerce website. Ensured timely bug fixes to enhance website functionality and user experience.",
        "Implemented an end-to-end Etsy integration feature on a e-commerce platform, allowing seamless order processing between the platform and Etsy, resulting in improved customer engagement and efficient order fulfillment.",
        "Developed an automated system to facilitate order submission for a client unable to connect through our API. This innovation streamlined order processing, significantly reducing manual input time and enhancing client satisfaction.",
        "Managed and monitored websites, APIs, and order management systems.",
      ],
    },
    "(MESA) Mission College": {
      jobTitle: "Math and Java Tutor",
      duration: "Aug 2022 - Nov 2022",
      desc: [
        "Provided individualized tutoring in Java programming and Algebra through Calculus 2 to first-generation, low-income community college students.",
        "Created comprehensive lesson plans and coordinated weekly workshops in Pre-Calculus and Calculus 1 to improve students’ study skills and proficiency in mathematics.",
      ],
    },
    Inkfluencer: {
      jobTitle: "Frontend Developer",
      duration: "June 2022 - Nov 2022",
      desc: [
        "Translated design wireframes into high-quality React components using clean, efficient code.",
        "Leveraged the Chakra UI component library to ensure consistent and visually appealing styling across the application.",
        "Collaborated closely with web designers and other developers in an agile team environment, utilizing Git version control and Figma design tools to ensure smooth collaboration.",
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
    <div className="experience">
      <h1>{"< Experience / >"}</h1> <div className="divider"></div>
      <Tabs
        orientation={!isHorizontal ? "horizontal" : "vertical"}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
      >
        {Object.keys(experience).map((key, i) => (
          <Tab key={i} label={key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experience).map((key, i) => (
        <TabPanel value={value} index={i} key={i}>
          <span className="job-title">{experience[key]["jobTitle"] + " "}</span>
          <span className="job-company">@ {key}</span>
          <div className="job-duration">{experience[key]["duration"]}</div>
          <ul className="job-desc">
            {experience[key]["desc"].map(function (item, i) {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default Experience;
