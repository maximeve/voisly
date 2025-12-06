import Image from "next/image";
import Link from "next/link";

export default function PrivacyPage() {
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
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-400">Last updated: November 2025</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-sm text-slate-300">
            <p>
              Voisly ("the App") is developed by Maxime Van Eijndhoven. This policy explains how we handle information when you use the App.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">Information We Collect</h2>
              <ul className="space-y-2 list-disc list-inside text-slate-300">
                <li><strong>Account data</strong>: Managed securely by Supabase and Apple/Google sign-in. We do not access passwords.</li>
                <li><strong>Audio recordings</strong>: Stored temporarily for transcription; deleted automatically after processing.</li>
                <li><strong>Subscription data</strong>: Handled by Apple and RevenueCat for billing; we do not store payment details.</li>
                <li><strong>Analytics</strong>: Anonymous usage data may be collected to improve stability and performance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">How We Use Information</h2>
              <p>
                We use collected information only to provide and improve the App's functionality, for example, to generate transcriptions and summaries of recordings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">Data Sharing</h2>
              <p>
                We do not sell or rent personal data. Limited data is shared only with trusted processors (Supabase, RevenueCat, Deepgram, OpenAI) under their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">Data Retention</h2>
              <p>
                Audio files are automatically deleted after processing. Other app data can be deleted upon user request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">Your Rights</h2>
              <p>
                You may request data deletion or access by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">Contact</h2>
              <p>
                Email: <a href="mailto:maxime.vaneijndhoven@hotmail.com" className="text-sky-400 hover:text-sky-300">maxime.vaneijndhoven@hotmail.com</a>
              </p>
            </section>
          </div>
        </article>

        <footer className="mt-16 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Maxime Van Eijndhoven. All rights reserved.</p>
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

