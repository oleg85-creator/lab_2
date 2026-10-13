// Props: title, place, year, tasks — дані приходять від батьківського компонента
function Job({ title, place, year, tasks }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{place} · {year}</p>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </article>
  )
}

export default Job
