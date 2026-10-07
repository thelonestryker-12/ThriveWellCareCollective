"use client";

import { useActionState } from "react";
import { submitScheduleRequest, type ScheduleFormState } from "@/app/actions/contact";
import { bookableOptions } from "@/lib/services";

const initialState: ScheduleFormState = {
  status: "idle",
  message: "",
};

export function ScheduleForm({ defaultService }: { defaultService?: string }) {
  const [state, formAction, pending] = useActionState(
    submitScheduleRequest,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-3xl border border-sage/30 bg-eucalyptus/50 p-8">
        <h2 className="font-serif text-3xl text-teal">We will take it from here.</h2>
        <p className="mt-4 text-base leading-8">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5 rounded-3xl bg-white p-6 shadow-[0_16px_40px_rgba(31,45,42,0.05)] sm:p-8">
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
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
          defaultValue={defaultService ?? ""}
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
      {state.status === "error" ? (
        <p className="text-sm text-[#9a3b2f]">{state.message}</p>
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
