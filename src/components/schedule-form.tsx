"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { bookableOptions } from "@/lib/services";
import { siteConfig } from "@/lib/site";

const individualSuccess = "Thank you, we'll be in touch soon.";
const organizationSuccess =
  "Thank you for contacting ThriveWell Care Collective™. We have received your organizational inquiry and will follow up to discuss your needs and next steps.";

const organizationInterests = [
  "Employee workshops",
  "Workplace massage",
  "Structured programs",
  "Organizational needs assessment",
  "Well-being strategy and consulting",
  "Leadership and team development",
  "Other or not sure",
];

export function ScheduleForm({ defaultService }: { defaultService?: string }) {
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get("service") ?? undefined;
  const initialService = defaultService ?? serviceFromUrl ?? "";
  const initialInquiry = searchParams.get("inquiry") === "organization" ? "organization" : "individual";

  const [inquiry, setInquiry] = useState<"individual" | "organization">(initialInquiry);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "unavailable">("idle");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-sage/30 bg-eucalyptus/50 p-8">
        <h2 className="font-serif text-3xl text-teal">
          {inquiry === "organization" ? organizationSuccess : individualSuccess}
        </h2>
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
    const inquiryType = String(formData.get("inquiry_type") ?? "individual");
    const service = String(formData.get("service") ?? "").trim();
    const notes = String(formData.get("message") ?? "").trim();
    const organization = String(formData.get("organization") ?? "").trim();
    const role = String(formData.get("role") ?? "").trim();
    const organizationType = String(formData.get("organization_type") ?? "").trim();
    const employeeCount = String(formData.get("employee_count") ?? "").trim();
    const location = String(formData.get("location") ?? "").trim();
    const interests = formData.getAll("interest").map(String);

    if (gotcha.trim()) {
      setStatus("success");
      return;
    }

    if (!name || !email || (inquiryType !== "organization" && !service)) {
      setStatus("error");
      setMessage(
        inquiryType === "organization"
          ? "Please share your name and email."
          : "Please share your name, email, and the experience you would like to schedule.",
      );
      return;
    }
    if (inquiryType === "organization" && !organization) {
      setStatus("error");
      setMessage("Please share your organization name.");
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
          inquiry_type: inquiryType,
          service: inquiryType === "organization" ? "" : serviceLabel,
          organization,
          role,
          organization_type: organizationType,
          employee_count: employeeCount,
          location,
          interest: interests.join(", "),
          message: notes,
          _subject:
            inquiryType === "organization"
              ? `New ThriveWell organizational inquiry from ${name}`
              : `New ThriveWell schedule request from ${name}`,
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
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-charcoal">Inquiry type</legend>
        <div className="flex flex-wrap gap-3">
          {(["individual", "organization"] as const).map((value) => (
            <label key={value} className="inline-flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="inquiry_type"
                value={value}
                checked={inquiry === value}
                onChange={() => setInquiry(value)}
              />
              {value === "individual" ? "Individual" : "Organization"}
            </label>
          ))}
        </div>
      </fieldset>
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
      {inquiry === "organization" ? (
        <div className="space-y-5">
          <p className="text-base leading-8">
            Interested in workforce wellness programs, employee well-being initiatives, or organizational consulting? Tell us about your organization and what you hope to accomplish. We welcome the opportunity to learn your priorities and explore possible support.
          </p>
          <div>
            <label htmlFor="organization" className="mb-2 block text-sm font-medium text-charcoal">Organization</label>
            <input id="organization" name="organization" required className="w-full rounded-2xl border border-sage/40 bg-ivory px-4 py-3 outline-none focus:border-teal" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="role" className="mb-2 block text-sm font-medium text-charcoal">Role</label>
              <input id="role" name="role" className="w-full rounded-2xl border border-sage/40 bg-ivory px-4 py-3 outline-none focus:border-teal" />
            </div>
            <div>
              <label htmlFor="organization_type" className="mb-2 block text-sm font-medium text-charcoal">Organization type</label>
              <input id="organization_type" name="organization_type" className="w-full rounded-2xl border border-sage/40 bg-ivory px-4 py-3 outline-none focus:border-teal" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="employee_count" className="mb-2 block text-sm font-medium text-charcoal">Approximate employee count</label>
              <input id="employee_count" name="employee_count" className="w-full rounded-2xl border border-sage/40 bg-ivory px-4 py-3 outline-none focus:border-teal" />
            </div>
            <div>
              <label htmlFor="location" className="mb-2 block text-sm font-medium text-charcoal">Location</label>
              <input id="location" name="location" className="w-full rounded-2xl border border-sage/40 bg-ivory px-4 py-3 outline-none focus:border-teal" />
            </div>
          </div>
          <fieldset>
            <legend className="mb-2 text-sm font-medium text-charcoal">Areas of interest</legend>
            <div className="space-y-2">
              {organizationInterests.map((interest) => (
                <label key={interest} className="flex items-start gap-2 text-sm leading-6">
                  <input type="checkbox" name="interest" value={interest} className="mt-1" />
                  {interest}
                </label>
              ))}
            </div>
          </fieldset>
          <p id="privacy" className="text-sm leading-6 text-charcoal/80">
            Please do not include sensitive employee or confidential organizational information.{" "}
            <a href="#privacy" className="text-teal underline underline-offset-4">Privacy notice</a>
            : this form collects only the contact details you choose to share so we can follow up. It is not a request for employee records.
          </p>
        </div>
      ) : null}
      {inquiry === "individual" ? (
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
      ) : null}
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
        className="inline-flex scroll-mb-24 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal disabled:opacity-70 sm:scroll-mb-0"
      >
        {pending ? "Sending..." : inquiry === "organization" ? "Request a Conversation" : "Request a Time"}
      </button>
    </form>
  );
}
