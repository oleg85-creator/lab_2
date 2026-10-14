function Skills() {
  const skills = ['Python (Flask, FastAPI)', 'C#', 'HTML, CSS, Git', 'Розробка Telegram-ботів']

  return (
    <section
      id="skills"
      className="rounded-xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
    >
      <h2 className="mb-3 text-2xl font-bold text-blue-900">Навички</h2>
      <ol className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 transition hover:bg-blue-600 hover:text-white"
          >
            {skill}
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Skills
