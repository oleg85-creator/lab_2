// Props: title, place, year, tasks — дані приходять від батьківського компонента
function Job({ title, place, year, tasks }) {
  return (
    <article className="border-l-4 border-blue-500 pl-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mb-2 text-sm text-slate-500">{place} · {year}</p>
      <ul className="list-disc space-y-1 pl-5">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </article>
  )
}

export default Job
