import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaJava, FaJsSquare, FaDatabase, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiMysql } from "react-icons/si";
import "./SkillsSection.css";

const SkillCard = ({ icon: Icon, title }) => (
  <div className="skill-card" data-skill={title}>
    <Icon className="skill-icon" />
    <p>{title}</p>
  </div>
);

const SkillsSection = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">💻 My Technical Toolbox</h2>

      <div className="skills-category">
        <h3>📝 Languages</h3>
        <div className="skills-grid">
          <SkillCard icon={FaJava} title="Java" />
          <SkillCard icon={FaJsSquare} title="JavaScript" />
          <SkillCard icon={FaDatabase} title="SQL" />
        </div>
      </div>

      <div className="skills-category">
        <h3>🧩 Frameworks & Libraries</h3>
        <div className="skills-grid">
          <SkillCard icon={FaHtml5} title="HTML" />
          <SkillCard icon={FaCss3Alt} title="CSS" />
          <SkillCard icon={FaReact} title="React.js" />
          {/* <SkillCard icon={SiRedux} title="Redux" /> */}
          <SkillCard icon={FaNodeJs} title="Node.js" />
          <SkillCard icon={SiExpress} title="Express.js" />
          <SkillCard icon={SiTailwindcss} title="Tailwind CSS" />
        </div>
      </div>

      <div className="skills-category">
        <h3>🗄️ Databases</h3>
        <div className="skills-grid">
          <SkillCard icon={SiMongodb} title="MongoDB" />
          <SkillCard icon={SiMysql} title="MySQL" />
        </div>
      </div>

      <div className="skills-category">
        <h3>🔧 Tools</h3>
        <div className="skills-grid">
          <SkillCard icon={FaGitAlt} title="Git" />
          <SkillCard icon={FaGithub} title="GitHub" />
        </div>
      </div>

      <div className="skills-category">
        <h3>📚 Coursework</h3>
        <div className="skills-grid">
          <SkillCard icon={FaJava} title="DSA" />
          <SkillCard icon={FaJava} title="OOPs" />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
