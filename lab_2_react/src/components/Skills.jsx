function Skills() {
  const skills = ['Python (Flask, FastAPI)', 'C#', 'HTML, Git', 'Розробка Telegram-ботів']

  return (
    <section id="skills">
      <h2>Навички</h2>
      <ol>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ol>
    </section>
  )
}

export default Skills
