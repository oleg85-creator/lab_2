function Footer() {
  return (
    <footer className="mt-8 bg-slate-800 px-4 py-8 text-center text-slate-200">
      <h2 className="mb-3 text-xl font-bold tracking-wide text-white">Контакти</h2>
      <ul className="space-y-1">
        <li>
          Email:{' '}
          <a className="text-sky-300 underline hover:text-white" href="mailto:oleh.pauk.kb.2025@lpnu.ua">
            oleh.pauk.kb.2025@lpnu.ua
          </a>
        </li>
        <li>
          GitHub:{' '}
          <a className="text-sky-300 underline hover:text-white" href="https://github.com/oleg85-creator" target="_blank" rel="noreferrer">
            github.com/oleg85-creator
          </a>
        </li>
        <li>
          Telegram:{' '}
          <a className="text-sky-300 underline hover:text-white" href="https://t.me/a1ezhaa" target="_blank" rel="noreferrer">
            @a1ezhaa
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
