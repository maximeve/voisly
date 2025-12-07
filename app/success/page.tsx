'use client';

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const [deepLinkUrl, setDeepLinkUrl] = useState<string>('');
  const [buttonText, setButtonText] = useState<string>('Go back to the app');
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Extract token parameters from URL
    const tokenHash = searchParams.get('token_hash');
    const token = searchParams.get('token');
    const type = searchParams.get('type') || 'email';

    // Build deep link URL
    let deepLink = 'meetingrec://';
    const params = new URLSearchParams();

    if (tokenHash) {
      params.append('token_hash', tokenHash);
      params.append('type', type);
    } else if (token) {
      params.append('token', token);
      params.append('type', type);
    }

    if (params.toString()) {
      deepLink += '?' + params.toString();
      setDeepLinkUrl(deepLink);
    } else {
      // If no token, just link to app store
      setDeepLinkUrl('https://apps.apple.com/be/app/voisly/id6754822721');
      setButtonText('Download the app');
    }

    // Auto-redirect mobile users to app (optional)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile && (tokenHash || token)) {
      // Try to open app immediately
      window.location.href = deepLink;
      
      // Show fallback message after 2 seconds if app didn't open
      setTimeout(() => {
        setShowFallback(true);
      }, 2000);
    }
  }, [searchParams]);

  return (
    <>
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

      {/* Deep Link Button */}
      {deepLinkUrl && (
        <a
          href={deepLinkUrl}
          className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
        >
          {buttonText}
        </a>
      )}

      {/* Fallback message for mobile */}
      {showFallback && deepLinkUrl.startsWith('meetingrec://') && (
        <p className="mx-auto max-w-lg text-balance text-sm text-slate-400">
          If the app didn&apos;t open,{' '}
          <a href={deepLinkUrl} className="text-sky-400 hover:text-sky-300 underline">
            click here
          </a>
          {' '}or use the button above.
        </p>
      )}

      {/* Download link if no token */}
      {!deepLinkUrl.startsWith('meetingrec://') && (
        <p className="mx-auto max-w-lg text-balance text-sm text-slate-400">
          Don&apos;t have the app?{' '}
          <a
            href="https://apps.apple.com/be/app/voisly/id6754822721"
            className="text-sky-400 hover:text-sky-300 underline"
          >
            Download from App Store
          </a>
        </p>
      )}
    </>
  );
}

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
          <Suspense fallback={
            <>
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
              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                <span className="bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent">
                  Success!
                </span>
              </h1>
              <p className="mx-auto max-w-lg text-balance text-base text-slate-300 sm:text-lg">
                Your email has been verified successfully. You&apos;re all set to start using Voisly!
              </p>
            </>
          }>
            <SuccessContent />
          </Suspense>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Voisly. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
