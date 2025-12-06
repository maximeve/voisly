import Image from "next/image";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Top blurred glow */}
      <div className="pointer-events-none fixed inset-x-0 top-[-200px] z-0 flex justify-center opacity-60">
        <div className="h-[300px] w-[600px] rounded-full bg-sky-500/40 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex items-center justify-center">
            <Image
              src="/transcribing-mascot.png"
              alt="Voisly logo"
              width={60}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight">
              Voisly
            </span>
            <span className="text-xs text-slate-400">
              Meeting Recorder
            </span>
          </div>
        </div>

        {/* Success Content */}
        <div className="w-full space-y-6 text-center">
          {/* Success Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 ring-2 ring-emerald-500/50">
            <svg
              className="h-8 w-8 text-emerald-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent">
              Success!
            </span>
          </h1>

          {/* Message */}
          <p className="mx-auto max-w-lg text-balance text-base text-slate-300 sm:text-lg">
            Your email has been verified successfully. You&apos;re all set to start using Voisly!
          </p>
          <p className="mx-auto max-w-lg text-balance text-base text-slate-400 sm:text-lg">
            Go back to the app.
          </p>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Voisly. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

