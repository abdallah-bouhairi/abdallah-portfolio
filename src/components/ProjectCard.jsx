export default function ProjectCard({ project, image }) {
  return (
    <article className="video-project-card">

      <img
        src={image}
        alt={`${project.name} project preview`}
      />

      <div className="project-overlay">

        <strong>
          {project.name}
        </strong>

        <a
          href={project.html_url}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub ↗
        </a>

      </div>

    </article>
  );
}