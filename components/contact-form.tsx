"use client";

import { useState, useTransition } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
  context: "recruiting" | "client-work" | "collaboration";
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
  context: "recruiting"
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [response, setResponse] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setFormState((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResponse(null);

    startTransition(async () => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });

      const data = (await res.json()) as { message?: string };
      setResponse(data.message ?? "Thanks for reaching out.");

      if (res.ok) {
        setFormState(initialState);
      }
    });
  }

  return (
    <form onSubmit={onSubmit} className="glass-panel p-6">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">Name</span>
          <input
            required
            value={formState.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="glass-field w-full px-4 py-3 text-white outline-none transition focus:ring-1 focus:ring-[#5ed29c]/60"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">Email</span>
          <input
            required
            type="email"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="glass-field w-full px-4 py-3 text-white outline-none transition focus:ring-1 focus:ring-[#5ed29c]/60"
          />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="mb-2 block text-sm text-slate-300">Context</span>
        <select
          value={formState.context}
          onChange={(event) => updateField("context", event.target.value as FormState["context"])}
          className="glass-field w-full px-4 py-3 text-white outline-none transition focus:ring-1 focus:ring-[#5ed29c]/60"
        >
          <option value="recruiting">Recruiting</option>
          <option value="client-work">Client work</option>
          <option value="collaboration">Collaboration</option>
        </select>
      </label>
      <label className="mt-5 block">
        <span className="mb-2 block text-sm text-slate-300">Message</span>
        <textarea
          required
          rows={6}
          value={formState.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="glass-field w-full rounded-[1.6rem] px-4 py-3 text-white outline-none transition focus:ring-1 focus:ring-[#5ed29c]/60"
        />
      </label>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isPending}
          className="liquid-glass rounded-full px-6 py-3 text-sm font-medium text-white transition hover:text-[#5ed29c] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? "Sending..." : "Send message"}
        </button>
        <p className="text-sm leading-6 text-slate-400">
          Prefer direct email?{" "}
          <a href="mailto:anuraghragidimilli@icloud.com" className="text-slate-200 underline decoration-white/20 underline-offset-4">
            anuraghragidimilli@icloud.com
          </a>
        </p>
      </div>
      {response ? (
        <div className="liquid-glass mt-5 rounded-2xl px-4 py-3 text-sm text-slate-200">
          {response}
        </div>
      ) : null}
    </form>
  );
}
