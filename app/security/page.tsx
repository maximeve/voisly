import Image from "next/image";
import Link from "next/link";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Top blurred glow */}
      <div className="pointer-events-none fixed inset-x-0 top-[-200px] z-0 flex justify-center opacity-60">
        <div className="h-[300px] w-[600px] rounded-full bg-sky-500/40 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        {/* Nav */}
        <header className="flex items-center justify-between gap-4 mb-8">
          <Link href="/" className="flex items-center gap-3 cursor-pointer transition-opacity duration-200 hover:opacity-80">
            <div className="flex items-center justify-center">
              <Image
                src="/transcribing-mascot.png"
                alt="Voisly transcribing mascot"
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
                AI Meeting Recorder
              </span>
            </div>
          </Link>
        </header>

        {/* Content */}
        <article className="space-y-8">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl mb-4">
              Is my data secure in Voisly?
            </h1>
            <p className="text-lg text-slate-300">
              Yes. Voisly is designed so your recordings and summaries stay private and secure. Here's how your data is protected:
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-sm text-slate-300">
            <section className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">🔐</span>
                <div>
                  <h2 className="text-xl font-semibold text-slate-50 mb-2">1. Your recordings are stored securely</h2>
                  <p className="mb-3">
                    Recordings are uploaded to a private, access-controlled storage bucket (Supabase).
                  </p>
                  <p className="font-medium text-slate-200 mb-2">No one else can access your files because:</p>
                  <ul className="space-y-2 list-disc list-inside text-slate-300 ml-4">
                    <li>Every recording is tied to your unique user ID</li>
                    <li>Row-Level Security (RLS) rules prevent access by anyone else</li>
                    <li>Files are served only through authenticated, expiring URLs</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧹</span>
                <div>
                  <h2 className="text-xl font-semibold text-slate-50 mb-2">2. Temporary files are automatically deleted</h2>
                  <p className="mb-2">
                    Audio files and transcripts are removed from storage after processing or after a short retention window.
                  </p>
                  <p>
                    Voisly does not build a long-term library of your data.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧠</span>
                <div>
                  <h2 className="text-xl font-semibold text-slate-50 mb-2">3. AI processing does not train any models</h2>
                  <p className="mb-2">
                    Your recordings and transcripts are never used to train AI models.
                  </p>
                  <p>
                    They are sent only once to the transcription engine (e.g. Deepgram/OpenAI), processed, and discarded.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📡</span>
                <div>
                  <h2 className="text-xl font-semibold text-slate-50 mb-2">4. All communication is encrypted</h2>
                  <p>
                    Every interaction between your device, Voisly, and the AI engines uses end-to-end HTTPS encryption.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧍‍♂️</span>
                <div>
                  <h2 className="text-xl font-semibold text-slate-50 mb-2">5. Only you can access your data</h2>
                  <p className="mb-2">
                    Your sessions and data are linked to your secure authentication token.
                  </p>
                  <p>
                    Nobody, including Voisly staff, can see your personal recordings or summaries unless you explicitly share them.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧳</span>
                <div>
                  <h2 className="text-xl font-semibold text-slate-50 mb-2">6. You can delete anything at any time</h2>
                  <p className="mb-3">From inside the app, you can:</p>
                  <ul className="space-y-2 list-disc list-inside text-slate-300 ml-4">
                    <li>Delete recordings</li>
                    <li>Delete summaries</li>
                    <li>Delete your entire account (and all associated data)</li>
                  </ul>
                  <p className="mt-3">
                    Deletion is immediate and permanent.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🇪🇺</span>
                <div>
                  <h2 className="text-xl font-semibold text-slate-50 mb-2">7. GDPR-friendly by design</h2>
                  <p className="mb-3">Voisly is built with privacy-first infrastructure:</p>
                  <ul className="space-y-2 list-disc list-inside text-slate-300 ml-4">
                    <li>EU-friendly data handling</li>
                    <li>No tracking SDKs</li>
                    <li>No selling or sharing of personal data</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </article>

        <footer className="mt-16 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Voisly. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/privacy" className="hover:text-slate-300">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-slate-300">
                Terms
              </Link>
              <Link href="/security" className="hover:text-slate-300">
                Security
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

