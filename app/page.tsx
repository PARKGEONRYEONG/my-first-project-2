export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950 p-8">
      <main className="flex flex-col gap-8 items-center max-w-2xl w-full bg-white dark:bg-zinc-900 p-12 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            안녕하세요, 박건령입니다! 👋
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium">
            소개 페이지에 오신 것을 환영합니다.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800" />

        <div className="flex flex-col gap-6 w-full">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-2">
              좋아하는 것
            </h2>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200 rounded-full text-sm font-medium">
                🥭 망고
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 rounded-full text-sm font-medium">
                ✨ 행복
              </span>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-2">
              한마디
            </h2>
            <p className="text-lg text-zinc-800 dark:text-zinc-200 italic leading-relaxed">
              "바이브 코딩 처음이라 어렵지만 열심히 해보겠습니다!!"
            </p>
          </section>
        </div>

        <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800" />

        <footer className="text-sm text-zinc-500 dark:text-zinc-500">
          © 2024 박건령. Built with Next.js
        </footer>
      </main>
    </div>
  );
}
