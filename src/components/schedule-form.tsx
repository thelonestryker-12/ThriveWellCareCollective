"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { bookableOptions } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export function ScheduleForm({ defaultService }: { defaultService?: string }) {
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get("service") ?? undefined;
  const initialService = defaultService ?? serviceFromUrl ?? "";

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-sage/30 bg-eucalyptus/50 p-8">
        <h2 className="font-serif text-3xl text-teal">We will take it from here.</h2>
        <p className="mt-4 text-base leading-8">{message}</p>
      </div>
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);

    const formData = new FormData(event.currentTarget);
    if (String(formData.get("company") ?? "").trim()) {
      setStatus("success");
      setMessage("Thank you. We will be in touch soon.");
      setPending(false);
      return;
    }

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const notes = String(formData.get("message") ?? "").trim();

    if (!name || !email || !service) {
      setStatus("error");
      setMessage(
        "Please share your name, email, and the experience you would like to schedule.",
      );
      setPending(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      setPending(false);
      return;
    }

    const serviceLabel =
      bookableOptions.find((option) => option.value === service)?.label ?? service;
    const subject = encodeURIComponent(`ThriveWell scheduling request: ${serviceLabel}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Experience: ${serviceLabel}`,
        "",
        notes || "No additional notes.",
      ].join("\n"),
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    setMessage(
      "Your email app should open with your request. If it does not, email us directly and we will help you schedule.",
    );
    setPending(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl bg-white p-6 shadow-[0_16px_40px_rgba(31,45,42,0.05)] sm:p-8"
    >
      <input
        type="text"
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-charcoal">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
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
      {status === "error" ? (
        <p className="text-sm text-[#9a3b2f]">{message}</p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex rounded-full bg-coral px-6 py-3 text-sm font-semibold text-charcoal disabled:opacity-70"
      >
        {pending ? "Opening..." : "Request a Time"}
      </button>
    </form>
  );
}
