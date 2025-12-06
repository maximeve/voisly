'use client';

import { useState, FormEvent } from 'react';

export default function QuestionForm() {
  const [question, setQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!question.trim()) {
      return;
    }

    setIsSubmitting(true);
    
    const subject = 'Voisly Question';
    const body = `New question from Voisly landing page:\n\n${question}`;
    const mailtoLink = `mailto:maxime-vaneijndhoven@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form after a short delay
    setTimeout(() => {
      setQuestion('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex max-w-md flex-col gap-3"
    >
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
        placeholder="Have a question? Ask us here..."
        className="h-10 w-full rounded-full border border-slate-700 bg-slate-950/70 px-4 text-base text-slate-50 placeholder:text-slate-500 transition-all duration-200 hover:border-slate-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        disabled={isSubmitting}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed sm:text-sm"
      >
        {isSubmitting ? 'Opening email...' : 'Send question'}
      </button>
    </form>
  );
}

