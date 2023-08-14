import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="mb-4">
          <h1 className="mb-8 text-2xl">Paginas</h1>
        </div>

        <div>
          <Link
            className="border-white border-2 mb-4 p-4 flex justify-between"
            href={`/challenge`}
          >
            Desafios
          </Link>
          <Link
            className="border-white border-2 mb-4 p-4 flex justify-between"
            href={`/teams`}
          >
            Equipos
          </Link>
        </div>
      </div>
    </main>
  );
}
