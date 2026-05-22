"use client";

import { useId, useState, useTransition } from "react";

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
  const [isError, setIsError] = useState(false);
  const [isPending, startTransition] = useTransition();
  const nameId = useId();
  const emailId = useId();
  const contextId = useId();
  const messageId = useId();
  const honeypotId = useId();
  const [honeypot, setHoneypot] = useState("");

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setFormState((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResponse(null);
    setIsError(false);

    startTransition(async () => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...formState, website: honeypot })
      });

      const data = (await res.json()) as { message?: string };
      setResponse(data.message ?? "Thanks for reaching out.");
      setIsError(!res.ok);

      if (res.ok) {
        setFormState(initialState);
      }
    });
  }

  return (
    <form onSubmit={onSubmit} className="glass-panel p-6" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor={nameId} className="mb-2 block text-sm text-slate-300">
            Name
          </label>
          <input
            id={nameId}
            name="name"
            required
            value={formState.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="glass-field w-full px-4 py-3 text-white outline-none transition focus:ring-1 focus:ring-accent/60"
          />
        </div>
        <div>
          <label htmlFor={emailId} className="mb-2 block text-sm text-slate-300">
            Email
          </label>
          <input
            id={emailId}
            name="email"
            required
            type="email"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="glass-field w-full px-4 py-3 text-white outline-none transition focus:ring-1 focus:ring-accent/60"
          />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor={contextId} className="mb-2 block text-sm text-slate-300">
          Context
        </label>
        <select
          id={contextId}
          name="context"
          value={formState.context}
          onChange={(event) => updateField("context", event.target.value as FormState["context"])}
          className="glass-field w-full px-4 py-3 text-white outline-none transition focus:ring-1 focus:ring-accent/60"
        >
          <option value="recruiting">Recruiting</option>
          <option value="client-work">Client work</option>
          <option value="collaboration">Collaboration</option>
        </select>
      </div>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={honeypotId}>Website</label>
        <input
          id={honeypotId}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor={messageId} className="mb-2 block text-sm text-slate-300">
          Message
        </label>
        <textarea
          id={messageId}
          name="message"
          required
          rows={6}
          value={formState.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="glass-field w-full rounded-[1.6rem] px-4 py-3 text-white outline-none transition focus:ring-1 focus:ring-accent/60"
        />
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isPending}
          className="liquid-glass rounded-full px-6 py-3 text-sm font-medium text-white transition hover:text-accent disabled:cursor-not-allowed disabled:opacity-70"
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
      <div aria-live="polite" aria-atomic="true" className="mt-5">
        {response ? (
          <div
            className={`liquid-glass rounded-2xl px-4 py-3 text-sm ${
              isError ? "text-amber-200" : "text-slate-200"
            }`}
            role={isError ? "alert" : "status"}
          >
            {response}
          </div>
        ) : null}
      </div>
    </form>
  );
}
