import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
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
              Terms of Use
            </h1>
            <p className="text-sm text-slate-400">Last updated: November 11, 2025</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-sm text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">1. Overview</h2>
              <p>
                Voisly is provided by Maxime van Eijndhoven ("we", "us", or "our"). These Terms govern your use of the Voisly mobile application and associated services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">2. Eligibility</h2>
              <p>
                You must be at least 13 years old to use the Service. By using the Service, you represent and warrant that you meet this requirement and that all information you submit is accurate and truthful.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">3. Account & Access</h2>
              <p>
                You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account. Notify us immediately of any unauthorized use.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">4. Subscription & Billing</h2>
              <p>
                Voisly offers auto-renewing subscriptions. The Basic Monthly plan renews every month and provides up to 5 hours of recording time and other premium features. Payment will be charged to your Apple ID account at confirmation of purchase. Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period. Your account will be charged for renewal within 24 hours prior to the end of the current period at the price shown in the app. Manage or cancel your subscription anytime in Settings &gt; Apple ID &gt; Subscriptions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">5. Cancellation</h2>
              <p>
                You may cancel your subscription at any time through your Apple ID account settings. No refunds are provided for unused portions of a subscription period, except where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">6. Use of the Service</h2>
              <p>
                You agree to use the Service only for lawful purposes and in accordance with all applicable laws. You will not: (a) attempt to reverse engineer, modify, or interfere with the Service; (b) upload content that violates any third-party rights or contains harmful code; (c) use the Service to harass or harm others.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">7. Content & Data</h2>
              <p>
                You retain ownership of audio recordings and content you submit. By using the Service, you grant us a limited license to process and store your content for the purpose of providing transcription, actionable insights, and related features. We do not sell your recordings to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">8. Privacy</h2>
              <p>
                Our collection and use of personal information is described in the <Link href="/privacy" className="text-sky-400 hover:text-sky-300">Voisly Privacy Policy</Link>. By using the Service, you acknowledge that we will process your data in accordance with that policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">9. Intellectual Property</h2>
              <p>
                Voisly, including all associated trademarks, logos, and software, is owned by us or our licensors. You receive a limited, non-transferable license to use the Service for personal or internal business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">10. Service Availability</h2>
              <p>
                We strive to keep the Service available, but we may suspend, modify, or discontinue features with or without notice. We are not liable for interruptions, delays, or data loss, except where prohibited by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">11. Disclaimer & Limitation of Liability</h2>
              <p className="uppercase text-xs mb-2">THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.</p>
              <p>
                To the maximum extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. In no event shall we be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">12. Changes to Terms</h2>
              <p>
                We may update these Terms periodically. Continued use of the Service after changes become effective constitutes acceptance of the revised Terms. If you do not agree with changes, discontinue use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">13. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of the Netherlands, without regard to its conflict of law principles. Any disputes shall be resolved exclusively in the courts located in the Netherlands.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-50 mt-8 mb-4">14. Contact</h2>
              <p>
                For questions about these Terms, contact us at <a href="mailto:maxime.van.eijndhoven@gmail.com" className="text-sky-400 hover:text-sky-300">maxime.van.eijndhoven@gmail.com</a>.
              </p>
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

