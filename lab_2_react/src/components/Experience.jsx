import Job from './Job'

function Experience() {
  return (
    <section id="experience">
      <h2>Досвід роботи</h2>
      <Job
        title="Telegram-бот для студії автотюнінгу G23"
        place="Львів"
        year={2026}
        tasks={[
          'Розробка Telegram-бота для прийому заявок клієнтів',
          'Автоматизація відповідей на типові запити',
        ]}
      />
      <Job
        title="Вебсайти для клієнтів"
        place="Фріланс"
        year={2026}
        tasks={[
          'Лендинг для стоматологічної клініки',
          'Сайт оренди котеджів Symbio House (Flask)',
          'Сайт курорту Volya Resort (FastAPI, Jinja2)',
        ]}
      />
    </section>
  )
}

export default Experience
