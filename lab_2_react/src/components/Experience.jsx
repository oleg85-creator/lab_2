import Job from './Job'

function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl md:col-span-2"
    >
      <h2 className="text-2xl font-bold text-blue-900">Досвід роботи</h2>
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
