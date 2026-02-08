import config from '../data/config.json';

const MinimalIndex = () => {
  const { name, title, description } = config.personalInfo;
  const { social } = config;
  const projects = [...config.projects].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <div className="minimal-page">
      <div className="minimal-container">
        <header className="minimal-header">
          <h1 className="minimal-name">{name}</h1>
          <p className="minimal-title">{title}</p>
          <div className="minimal-social">
            {social.map((s) => (
              <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer">
                {s.platform}
              </a>
            ))}
            <a href="mailto:kumarajith1996@gmail.com">Email</a>
          </div>
        </header>

        <section className="minimal-section">
          <h2>About</h2>
          <p>{description}</p>
        </section>

        <section className="minimal-section">
          <h2>Projects</h2>
          <ul className="minimal-projects">
            {projects.map((project) => (
              <li key={project.id}>
                <div className="minimal-project-header">
                  <span className="minimal-project-title">
                    {project.url ? (
                      <a href={project.url} className="minimal-project-link" target="_blank" rel="noopener noreferrer">
                        {project.title}
                        <svg className="minimal-external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    ) : project.title}
                    <span className="minimal-project-type">{project.type}</span>
                  </span>
                  <span className="minimal-project-year">{project.year}</span>
                </div>
                <p className="minimal-project-desc">{project.description}</p>
                <div className="minimal-project-meta">
                  <div className="minimal-project-tags">
                    {project.platforms.map((p) => (
                      <span key={p} className="minimal-tag">{p}</span>
                    ))}
                  </div>
                  <div className="minimal-project-tools">
                    {project.tools.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="minimal-footer">
          <p>&copy; {new Date().getFullYear()} {name}</p>
        </footer>
      </div>
    </div>
  );
};

export default MinimalIndex;
