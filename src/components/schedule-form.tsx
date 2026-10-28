"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { bookableOptions } from "@/lib/services";
import { siteConfig } from "@/lib/site";

const successMessage = "Thank you, we'll be in touch soon.";

export function ScheduleForm({ defaultService }: { defaultService?: string }) {
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get("service") ?? undefined;
  const initialService = defaultService ?? serviceFromUrl ?? "";

  const [status, setStatus] = useState<"idle" | "success" | "error" | "unavailable">("idle");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-sage/30 bg-eucalyptus/50 p-8">
        <h2 className="font-serif text-3xl text-teal">{successMessage}</h2>
      </div>
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const gotcha = String(formData.get("_gotcha") ?? "");
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const notes = String(formData.get("message") ?? "").trim();

    if (gotcha.trim()) {
      setStatus("success");
      return;
    }

    if (!name || !email || !service) {
      setStatus("error");
      setMessage(
        "Please share your name, email, and the experience you would like to schedule.",
      );
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    const serviceLabel =
      bookableOptions.find((option) => option.value === service)?.label ?? service;

    setPending(true);
    setStatus("idle");
    setMessage("");

    try {
      const response = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          _replyto: email,
          phone,
          service: serviceLabel,
          message: notes,
          _subject: `New ThriveWell schedule request from ${name}`,
          _gotcha: gotcha,
        }),
      });

      if (!response.ok) {
        setStatus("unavailable");
        setMessage("We could not send your request just now.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("unavailable");
      setMessage("We could not send your request just now.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={pending}
      className="space-y-5 rounded-3xl bg-white p-6 shadow-[0_16px_40px_rgba(31,45,42,0.05)] sm:p-8"
    >
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-charcoal">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="w-full rounded-2xl border border-sage/40 bg-ivory px-4 py-3 outline-none focus:border-teal"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-2xl border border-sage/40 bg-ivory px-4 py-3 outline-none focus:border-teal"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-charcoal">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-2xl border border-sage/40 bg-ivory px-4 py-3 outline-none focus:border-teal"
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-charcoal">
          Experience
        </label>
        <select
          id="service"
          name="service"
          defaultValue={initialService}
          required
          className="w-full rounded-2xl border border-sage/40 bg-ivory px-4 py-3 outline-none focus:border-teal"
        >
          <option value="">Select an experience</option>
          {bookableOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-charcoal">
          Notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-2xl border border-sage/40 bg-ivory px-4 py-3 outline-none focus:border-teal"
          placeholder="Share preferred days, times, or anything that helps us welcome you well."
        />
      </div>
      {status === "error" ? <p className="text-sm text-[#9a3b2f]">{message}</p> : null}
      {status === "unavailable" ? (
        <p className="text-sm leading-6 text-[#9a3b2f]">
          {message}{" "}
          <a
            className="font-semibold text-teal underline underline-offset-4"
            href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("ThriveWell schedule request")}`}
          >
            Email {siteConfig.email}
          </a>{" "}
          and we will help you schedule.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex rounded-full bg-coral px-6 py-3 text-sm font-semibold text-charcoal disabled:opacity-70"
      >
        {pending ? "Sending..." : "Request a Time"}
      </button>
    </form>
  );
}
