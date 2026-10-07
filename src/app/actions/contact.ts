"use server";

export type ScheduleFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitScheduleRequest(
  _prevState: ScheduleFormState,
  formData: FormData,
): Promise<ScheduleFormState> {
  const honeypot = String(formData.get("company") ?? "").trim();
  if (honeypot) {
    return { status: "success", message: "Thank you. We will be in touch soon." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !service) {
    return {
      status: "error",
      message: "Please share your name, email, and the experience you would like to schedule.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const destination = process.env.CONTACT_EMAIL ?? "hello@thrivewellcarecollective.com";
  const subject = `ThriveWell scheduling request: ${service}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Experience: ${service}`,
    "",
    message || "No additional notes.",
  ].join("\n");

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL ?? "ThriveWell Website <noreply@thrivewellcarecollective.com>",
        to: [destination],
        reply_to: email,
        subject,
        text: body,
      }),
    });

    if (!response.ok) {
      return {
        status: "error",
        message: "We could not send your request just now. Please email us directly and we will help you schedule.",
      };
    }
  } else {
    console.info("Scheduling request received", { name, email, phone, service, message });
  }

  return {
    status: "success",
    message:
      "Thank you. We received your request and will follow up to help you schedule your experience.",
  };
}
