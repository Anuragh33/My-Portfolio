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

const contextOptions: Array<{ value: FormState["context"]; label: string }> = [
  { value: "recruiting", label: "recruiting" },
  { value: "client-work", label: "client-work" },
  { value: "collaboration", label: "collaboration" }
];

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formState, website: honeypot })
      });

      const data = (await res.json()) as { message?: string; details?: string };
      const detailSuffix = data.details ? ` (${data.details})` : "";
      setResponse(`${data.message ?? "Thanks for reaching out."}${detailSuffix}`);
      setIsError(!res.ok);

      if (res.ok) {
        setFormState(initialState);
      }
    });
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-line-strong bg-panel font-mono">
      <div className="flex items-center gap-2 border-b border-line-strong bg-elevated px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-fg-muted">
        <span className="text-accent">$</span>
        <span>mail anuragh -s &quot;{formState.context}&quot;</span>
      </div>

      <div className="divide-y divide-line text-[13px]">
        <div className="grid grid-cols-[90px_1fr] items-baseline gap-3 px-4 py-2.5">
          <label htmlFor={nameId} className="text-fg-dim">From:</label>
          <input
            id={nameId}
            name="name"
            required
            autoComplete="name"
            value={formState.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="bg-transparent text-fg outline-none placeholder:text-fg-dim"
            placeholder="your name"
          />
        </div>

        <div className="grid grid-cols-[90px_1fr] items-baseline gap-3 px-4 py-2.5">
          <label htmlFor={emailId} className="text-fg-dim">Reply-To:</label>
          <input
            id={emailId}
            name="email"
            required
            type="email"
            autoComplete="email"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="bg-transparent text-fg outline-none placeholder:text-fg-dim"
            placeholder="you@somewhere.com"
          />
        </div>

        <div className="grid grid-cols-[90px_1fr] items-baseline gap-3 px-4 py-2.5">
          <label htmlFor={contextId} className="text-fg-dim">Subject:</label>
          <select
            id={contextId}
            name="context"
            value={formState.context}
            onChange={(event) => updateField("context", event.target.value as FormState["context"])}
            className="bg-transparent text-fg outline-none"
          >
            {contextOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-elevated text-fg">
                {option.label}
              </option>
            ))}
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

        <div className="px-4 py-2.5">
          <label htmlFor={messageId} className="text-fg-dim">Body:</label>
          <textarea
            id={messageId}
            name="message"
            required
            rows={8}
            value={formState.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="mt-2 w-full bg-transparent text-fg outline-none placeholder:text-fg-dim"
            placeholder="what are you building, hiring for, or noodling on?"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-line-strong bg-elevated px-4 py-3 text-[12px] sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isPending}
          className="border border-accent bg-accent/10 px-4 py-2 uppercase tracking-[0.18em] text-accent transition hover:bg-accent hover:text-onAccent disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "Sending..." : "[ENTER] Send"}
        </button>
        <p className="text-fg-muted">
          or{" "}
          <a href="mailto:anuraghragidimilli@icloud.com" className="text-fg underline decoration-line-strong underline-offset-4 hover:text-accent">
            $ mail anuragh@icloud.com
          </a>
        </p>
      </div>

      {response ? (
        <div aria-live="polite" aria-atomic="true" className="border-t border-line-strong px-4 py-3 text-[12px]" role={isError ? "alert" : "status"}>
          <span className="text-fg-dim">[output] </span>
          <span className={isError ? "text-warn" : "text-success"}>{response}</span>
        </div>
      ) : null}
    </form>
  );
}
