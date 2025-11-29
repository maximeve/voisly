// app/page.tsx
import Image from "next/image";
import QuestionForm from "./components/QuestionForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Top blurred glow */}
      <div className="pointer-events-none fixed inset-x-0 top-[-200px] z-0 flex justify-center opacity-60">
        <div className="h-[300px] w-[600px] rounded-full bg-sky-500/40 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        {/* Nav */}
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 cursor-pointer transition-opacity duration-200 hover:opacity-80">
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
                Meeting Recorder
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <a
              href="#features"
              className="hidden text-slate-300 hover:text-slate-50 sm:inline"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hidden text-slate-300 hover:text-slate-50 sm:inline"
            >
              Pricing
            </a>
            <a
              href="https://apps.apple.com/be/app/voisly/id6754822721"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-100 shadow-sm backdrop-blur hover:border-sky-500 hover:bg-slate-900"
            >
              Get the app
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="mt-14 grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Now recording your meetings for you
            </div>

            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-semibold tracking-tight leading-[1.1] sm:text-5xl sm:leading-[1.1] lg:text-6xl lg:leading-[1.2]">
                Record the meeting.
                <span className="block bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent">
                  Voisly remembers everything.
                </span>
              </h1>

              <p className="max-w-xl text-balance text-sm text-slate-300 sm:text-base">
                Stay present in the conversation. Voisly records, transcribes,
                and summarizes your meetings into clean notes and action items.
                Export action items directly to your calendar.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://apps.apple.com/be/app/voisly/id6754822721"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
              >
                Download on iOS
              </a>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-100 backdrop-blur transition-all duration-200 hover:border-slate-500 hover:bg-slate-900/80"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Watch it summarize a meeting
              </button>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 sm:text-sm">
              <div className="flex items-center gap-1.5">
                <span className="text-amber-300">★★★★★</span>
                <span>Early users say it feels like a real assistant</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-slate-600" />
              <p>Built for founders, consultants & teams who live in meetings.</p>
            </div>
          </div>

          {/* Mockup card */}
          <div className="md:pl-4">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-sky-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-black/50 backdrop-blur">
                <div className="flex items-center justify-between px-4 pt-3 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-2xl bg-sky-500/20" />
                    <div>
                      <p className="text-xs font-semibold text-slate-50">
                        Weekly Sync · Recording
                      </p>
                      <p className="text-[10px] text-slate-400">
                        Voisly is capturing this meeting
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-semibold text-slate-950">
                    ● REC
                  </span>
                </div>

                <div className="space-y-3 border-t border-slate-800/60 bg-slate-950/40 px-4 py-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      Live transcription
                    </p>
                    <div className="mt-1 space-y-1.5 rounded-2xl bg-slate-900/80 p-3 text-xs leading-relaxed text-slate-100">
                      <p>
                        Alex: Let&apos;s confirm the Q3 priorities and owners for
                        each project…
                      </p>
                      <p className="text-slate-300">
                        You: I&apos;ll take the client follow-ups and summarize
                        this meeting.
                      </p>
                      <p className="text-slate-400">
                        Voisly is generating a summary in the background…
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      Summary
                    </p>
                    <div className="mt-1 space-y-2 rounded-2xl bg-slate-900/80 p-3 text-xs text-slate-100">
                      <p className="font-medium">Key decisions</p>
                      <ul className="space-y-1 text-slate-200">
                        <li>• Launch beta for new client portal in Q3</li>
                        <li>• Increase check-ins for top 10 accounts</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        Action items
                      </p>
                      <button className="flex items-center gap-1 rounded-md border border-slate-700 bg-slate-800/50 px-2 py-0.5 text-[10px] font-medium text-slate-200 transition-all duration-200 hover:border-sky-500 hover:bg-slate-800 hover:text-sky-300">
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        Add to calendar
                      </button>
                    </div>
                    <div className="mt-1 space-y-1 rounded-2xl bg-slate-900/80 p-3 text-xs text-slate-100">
                      <ul className="space-y-1 text-slate-200">
                        <li>• You: Send recap email by tomorrow</li>
                        <li>• Alex: Share updated roadmap by Friday</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-800/60 bg-slate-950/80 px-4 py-3">
                  <span className="text-[11px] text-slate-400">
                    42 min · 3 speakers
                  </span>
                  <button className="rounded-full bg-sky-500/90 px-3 py-1.5 text-[11px] font-semibold text-slate-950 transition-all duration-200 hover:bg-sky-400 hover:shadow-md hover:shadow-sky-500/50">
                    View full notes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mt-20 space-y-6">
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Built for people who live in meetings.
          </h2>
          <p className="max-w-2xl text-sm text-slate-300">
            Voisly gives you a clean, focused experience that feels native to
            iOS. No clutter, noise, or clunky controls.
          </p>

          <div className="mt-4 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "One-tap recording",
                body: "Start recording before or during a meeting. Voisly stays out of the way so you can stay present.",
              },
              {
                title: "Transcription & summaries",
                body: "Accurate transcripts plus concise summaries with key decisions and action items.",
              },
              {
                title: "Export to calendar",
                body: "One-tap export of action items to your calendar. Never miss a follow-up or deadline again.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 text-sm shadow-sm transition-all duration-200 hover:border-slate-700 hover:bg-slate-950/60 hover:shadow-md"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mt-20 space-y-6">
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Simple pricing for serious work.
          </h2>
          <p className="max-w-2xl text-sm text-slate-300">
            Start free. Upgrade when your meetings (and impact) grow.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-4">
            {/* Free */}
            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/40 p-5 transition-all duration-200 hover:border-slate-700 hover:bg-slate-950/60">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                Free
              </p>
              <p className="mt-3 text-2xl font-semibold text-slate-50">
                $0
                <span className="text-xs font-normal text-slate-400"> /month</span>
              </p>
              <p className="mt-2 text-xs text-slate-300">
                Try Voisly with limited recording time.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-200">
                <li>• limited recording time</li>
                <li>• Basic transcription</li>
                <li>• Standard summaries</li>
                <li>• Calendar export & integrations</li>
              </ul>
            </div>

            {/* Basic */}
            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-all duration-200 hover:border-slate-700 hover:bg-slate-950/80 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Basic
              </p>
              <p className="mt-3 text-2xl font-semibold text-slate-50">
                $4.99
                <span className="text-xs font-normal text-slate-400"> /month</span>
              </p>
              <p className="mt-2 text-xs text-slate-300">
                For individuals who want every important meeting captured.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-200">
                <li>• Record and transcribe meetings</li>
                <li>• Summaries & action items</li>
                <li>• Export notes</li>
                <li>• Calendar export & integrations</li>
              </ul>
            </div>

            {/* Pro */}
            <div className="flex flex-col rounded-2xl border border-sky-500/70 bg-sky-500/10 p-5 shadow-lg shadow-sky-500/20 transition-all duration-200 hover:border-sky-500 hover:bg-sky-500/15 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-300">
                Pro
              </p>
              <p className="mt-3 text-2xl font-semibold text-slate-50">
                $9.99
                <span className="text-xs font-normal text-slate-300"> /month</span>
              </p>
              <p className="mt-2 text-xs text-slate-200">
                For founders, consultants and leaders who live in meetings.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-100">
                <li>• Everything in Basic</li>
                <li>• More recording time per month</li>
                <li>• Priority processing</li>
                <li>• Calendar export & integrations</li>
              </ul>
            </div>

            {/* Teams */}
            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-all duration-200 hover:border-slate-700 hover:bg-slate-950/80 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Unlimited
              </p>
              <p className="mt-3 text-2xl font-semibold text-slate-50">
                $19.99
                <span className="text-xs font-normal text-slate-400"> /month</span>
              </p>
              <p className="mt-2 text-xs text-slate-300">
                For small teams who want a shared source of truth.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-200">
                <li>• Unlimited recording time</li>
                <li>• Unlimited transcriptions</li>
                <li>• Unlimited summaries & actionable points</li>
                <li>• Calendar export & integrations</li>
              </ul>
            </div>
          </div>
        </section>


        {/* Download / footer */}
        <section id="download" className="mt-20 space-y-4">
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Ready to stop losing your meetings?
          </h2>
          <p className="max-w-xl text-sm text-slate-300">
            Voisly is now available on the App Store. Download it today and start capturing your meetings.
          </p>

          <a
            href="https://apps.apple.com/be/app/voisly/id6754822721"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 mt-4"
          >
            Download on the App Store
          </a>

          <QuestionForm />

          <p className="mt-6 text-xs text-slate-500">
            We&apos;ll get back to you as soon as possible.
          </p>
        </section>

        <footer className="mt-16 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Voisly. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://maximeve.github.io/voisly-privacy/"
                className="hover:text-slate-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy
              </a>
              <a
                href="https://maximeve.github.io/voisly-terms-of-service/"
                className="hover:text-slate-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms
              </a>
              <span className="text-slate-600">
                Built by a guy who was tired of bad meetings.
              </span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
