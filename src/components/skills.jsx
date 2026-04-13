import '../css/Skills.css';

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['Python', 'Java', 'SQL', 'JavaScript', 'TypeScript', 'C++'],
  },
  {
    category: 'Frontend',
    icon: '◧',
    skills: ['React', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    icon: '⚙',
    skills: ['Spring Boot', 'Node.js', 'Express', 'REST API'],
  },
  {
    category: 'Databases',
    icon: '⬡',
    skills: ['PostgreSQL', 'MongoDB'],
  },
  {
    category: 'DevOps & Tools',
    icon: '⬡',
    skills: ['Docker', 'Git', 'GitHub', 'Linux'],
  },
  {
    category: 'AI / ML',
    icon: '◈',
    skills: ['TensorFlow', 'Scikit-learn', 'Gemini API', 'Prompt Engineering', 'Pandas'],
  },
];

const coursework = [
  'Data Structures', 'Algorithms & Computing Theory', 'Object-Oriented Programming',
  'Artificial Intelligence', 'Advanced Web Programming', 'Database Concepts',
  'Python Programming', 'Internet & Distributed Computing', 'Web Design',
  'Java Programming', 'Genetics', 'Neurobiology',
];

export default function Skills() {
  return (
    <div className="page">
      <p className="section-label fade-up">What I Work With</p>
      <h2 className="section-title fade-up delay-1">Skills</h2>
      <div className="section-divider fade-up delay-1" />

      <div className="skills-grid fade-up delay-2">
        {skillGroups.map((group) => (
          <div key={group.category} className="card skill-card">
            <div className="skill-card-header">
              <span className="skill-icon">{group.icon}</span>
              <h3 className="skill-category">{group.category}</h3>
            </div>
            <div className="skill-tags">
              {group.skills.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="fade-up delay-3">
        <p className="section-label" style={{ marginTop: '56px', marginBottom: '16px' }}>Relevant Coursework</p>
        <div className="coursework-tags">
          {coursework.map((c) => (
            <span key={c} className="badge">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
