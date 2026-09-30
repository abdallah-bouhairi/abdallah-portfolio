import { Link } from 'react-router-dom';
import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';

const ASSET_BASE = import.meta.env.BASE_URL;

const skills = [
  ['Frontend Development', 95],
  ['Backend Development', 90],
  ['Data & Information Systems', 85],
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(1);

  return (
    <>
      {/* =========================
          HERO
      ========================== */}
      <section id="home" className="hero-video-style">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="welcome-badge">
              Welcome All In My Portfolio
            </span>

            <h1>
              Hi! I'm ABDALLAH
              <br />
              EL BOUHAIRI,
              <br />

              <span>
                Frontend &amp; Full-Stack
                <br />
                Web Developer
              </span>
            </h1>

            <p>
              Hello Everyone, I build modern web applications with React,
              Next.js, APIs and responsive UI — combining Business Computer /
              MIS with analytical thinking.
            </p>

            <Link className="hero-connect" to="/contact">
              Let's Connect <b>→</b>
            </Link>
          </div>

          <div className="hero-visual">
            <img
              src={`${ASSET_BASE}assets/hero-space.jpg`}
              alt="Space themed portfolio illustration"
            />
          </div>
        </div>
      </section>

      {/* =========================
          SKILLS
      ========================== */}
      <section
        id="skills"
        className="skills-video-style section-shell"
      >
        <SectionTitle
          title="Skills"
          text="You Can See My Skills Here"
        />

        <div className="skills-panel">
          {skills.map(([title, value]) => (
            <SkillCard
              key={title}
              title={title}
              value={value}
            />
          ))}
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================== */}
      <section className="about-video-style section-shell">
        <p>
          Business Computer / Management Information Systems +
          Philosophy background, with practical experience in React,
          APIs, GitHub, Jira, Notion and modern web development.
        </p>
      </section>

      {/* =========================
          PROJECTS
      ========================== */}
      <section
        id="projects"
        className="projects-video-style section-shell"
      >
        <SectionTitle
          title="Projects"
          text="A selection of frontend and full-stack work."
        />

        {/* PROJECT TABS */}
        <div className="project-tabs">
          <button
            type="button"
            className={activeSection === 1 ? 'active' : ''}
            onClick={() => setActiveSection(1)}
          >
            1st Section
          </button>

          <button
            type="button"
            className={activeSection === 2 ? 'active' : ''}
            onClick={() => setActiveSection(2)}
          >
            2nd Section
          </button>

          <button
            type="button"
            className={activeSection === 3 ? 'active' : ''}
            onClick={() => setActiveSection(3)}
          >
            3rd Section
          </button>
        </div>

        {/* SECTION 1 */}
        {activeSection === 1 && (
          <div className="video-project-grid project-section-content">
            <ProjectPlaceholder
              name="React Portfolio"
              image={`${ASSET_BASE}assets/project-1.jpg`}
            />

            <ProjectPlaceholder
              name="Career Brain MVP"
              image={`${ASSET_BASE}assets/project-2.jpg`}
            />

            <ProjectPlaceholder
              name="Responsive Web App"
              image={`${ASSET_BASE}assets/project-3.jpg`}
            />
          </div>
        )}

        {/* SECTION 2 */}
        {activeSection === 2 && (
          <div className="video-project-grid project-section-content">
            <ProjectPlaceholder
              name="KinderGarten Management System"
              image={`${ASSET_BASE}assets/project-2.jpg`}
            />

            <ProjectPlaceholder
              name="Business Information System"
              image={`${ASSET_BASE}assets/project-3.jpg`}
            />

            <ProjectPlaceholder
              name="Data Management Application"
              image={`${ASSET_BASE}assets/project-1.jpg`}
            />
          </div>
        )}

        {/* SECTION 3 */}
        {activeSection === 3 && (
          <div className="video-project-grid project-section-content">
            <ProjectPlaceholder
              name="Next.js Web Application"
              image={`${ASSET_BASE}assets/project-3.jpg`}
            />

            <ProjectPlaceholder
              name="API Driven Application"
              image={`${ASSET_BASE}assets/project-1.jpg`}
            />

            <ProjectPlaceholder
              name="Full-Stack Project"
              image={`${ASSET_BASE}assets/project-2.jpg`}
            />
          </div>
        )}

        {/* VIEW MORE */}
        <div className="center-button">
          <Link
            className="purple-button"
            to="/projects"
          >
            View More Projects
          </Link>
        </div>
      </section>

      {/* =========================
          EMAIL
      ========================== */}
      <section className="email-banner section-shell">
        <div className="email-card">
          <div>
            <h3>
              See My Projects At Once
              <br />
              &amp; leave Here Your E-mail Address
            </h3>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Email Address"
            />

            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

/* =========================
   PROJECT CARD
========================= */

function ProjectPlaceholder({ name, image }) {
  return (
    <article className="video-project-card">
      <img
        src={image}
        alt={`${name} preview`}
      />

      <div className="project-overlay">
        <strong>{name}</strong>

        <Link to="/projects">
          Explore ↗
        </Link>
      </div>
    </article>
  );
}

