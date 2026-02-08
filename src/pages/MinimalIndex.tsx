import config from '../data/config.json';

const MinimalIndex = () => {
  const { name, title, description } = config.personalInfo;
  const { projects, social } = config;

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
                  <span className="minimal-project-title">{project.title}</span>
                  <span className="minimal-project-year">{project.year}</span>
                </div>
                <p className="minimal-project-desc">{project.description}</p>
                <div className="minimal-project-tags">
                  {project.platforms.map((p) => (
                    <span key={p} className="minimal-tag">{p}</span>
                  ))}
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
