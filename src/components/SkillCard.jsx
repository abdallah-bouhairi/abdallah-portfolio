export default function SkillCard({ title, value }) {
  const degree = Math.round(value * 3.6);
  return <article className="skill-progress-card">
    <div className="progress-ring" style={{ '--progress': `${degree}deg` }}><span>{value}%</span></div>
    <h3>{title}</h3>
  </article>;
}
