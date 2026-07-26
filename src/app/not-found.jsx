import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center bg-dark-void px-6 text-center">
      <h1 className="text-6xl">👽</h1>

      <h2 className="mt-4 text-6xl font-black text-snow-white">
        404
      </h2>

      <p className="mt-4 text-dusty-gray">
        Page not found.
      </p>

      <Link
        href="/"
        className="mt-6 font-dots text-3xl text-snow-white underline underline-offset-4 hover:text-liquid-lava transition-colors"
      >
        Return home
      </Link>
    </div>
  );
}